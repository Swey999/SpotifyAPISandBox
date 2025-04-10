import express, { Request, Response } from "express";
import axios from "axios";

const router = express.Router();

// Define the user-profile route
router.get("/user-profile", async (req: Request, res: Response) => {
  const accessToken = req.cookies?.spotify_access_token;

    try {
        const response = await axios.get("https://api.spotify.com/v1/me", {
            headers: {
                Authorization: `Bearer ${accessToken}`,
            },
        });

        res.json(response.data);  // Send the Spotify data back to the client
    }
    catch (error: any) {
        console.error("Error fetching user profile:", error.response?.data || error.message);
        res.status(500).json({ error: "Failed to fetch user profile" });
    }
});

export default router;