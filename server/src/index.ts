import express from "express";
import type { Request, Response } from "express";
import cors from "cors";
import dotenv from "dotenv";
import fetch from "node-fetch";
import cookieParser from "cookie-parser";
import topTracksRoutes from "./routes/topTracks"; // import the route

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors({ origin: "http://localhost:3000", credentials: true })); // Allow frontend access
app.use(express.json());
app.use(cookieParser());

const SPOTIFY_CLIENT_ID = process.env.SPOTIFY_CLIENT_ID;
const SPOTIFY_CLIENT_SECRET = process.env.SPOTIFY_CLIENT_SECRET;
const state = Math.random().toString(36).substring(7);
const REDIRECT_URI = "http://localhost:5000/auth/callback";

interface SpotifyTokenResponse {
    access_token: string;
    token_type: string;
    expires_in: number;
    refresh_token?: string;
    scope?: string;
    error?: string;
}


// 🔹 Redirect User to Spotify for Login
app.get("/auth/login", (_req: Request, res: Response) => {
    const scope = "user-read-private user-read-email";
    const authUrl = `https://accounts.spotify.com/authorize?` +
  `response_type=code&` +
  `client_id=${SPOTIFY_CLIENT_ID}&` +
  `scope=user-read-email user-read-private user-top-read&` +
  `redirect_uri=${REDIRECT_URI}&` +
  `state=${state}`;
    res.redirect(authUrl);
});


// 🔹 Handle Spotify Callback & Get Access Token
app.get("/auth/callback", async (req: Request, res: Response): Promise<void> => {
    try {
        const code = req.query.code as string;
        if (!code) {
            console.log("No authorization code received.");
            res.status(400).json({ error: "Authorization code missing" });
            return;
        }
        console.log("Authorization code received:", code);

        // Fetch access token from Spotify
        const response = await fetch("https://accounts.spotify.com/api/token", {
            method: "POST",
            headers: {
                "Content-Type": "application/x-www-form-urlencoded",
                Authorization: `Basic ${Buffer.from(`${SPOTIFY_CLIENT_ID}:${SPOTIFY_CLIENT_SECRET}`).toString("base64")}`,
            },
            body: new URLSearchParams({
                grant_type: "authorization_code",
                code,
                redirect_uri: "http://localhost:5000/auth/callback",
            }),
        });

        const data = (await response.json()) as SpotifyTokenResponse;
        console.log("Spotify Response:", data);

        if (data.access_token) {
            res.cookie("spotify_access_token", data.access_token, {
                httpOnly: true,
                secure: false,
                sameSite: "lax",
                maxAge: 3600 * 1000, // 1 hour
            });

            res.redirect("http://localhost:3000");
        } else {
            res.status(400).json({ error: "Failed to authenticate" });
        }
    } catch (error) {
        console.error("Error in /auth/callback:", error);
        res.status(500).json({ error: "Internal Server Error" });
    }
});


// 🔹 Logout & Clear Cookies
app.post("/auth/logout", (req: Request, res: Response) => {
    res.clearCookie("spotify_access_token", {
      httpOnly: true,
      secure: false, // Set this to true if you're using https
      sameSite: "lax",
      path: "/" // Path should match the path where the cookie was set
    });
  
    res.status(200).send({ message: "Logged out successfully" });
  });

  app.use("/auth", topTracksRoutes); 







app.listen(PORT, () => {
    console.log(`🚀 Server running on http://localhost:${PORT}`);
});

app.get("/test-env", (req, res) => {
    res.json({ clientId: process.env.SPOTIFY_CLIENT_ID });
});

app.get("/auth/status", (req, res) => {
    const accessToken = req.cookies["spotify_access_token"];
    if (accessToken) {
      res.json({ loggedIn: true });
    } else {
      res.json({ loggedIn: false });
    }
  });
