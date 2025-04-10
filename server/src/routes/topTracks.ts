import express, { Request, Response } from "express";
import axios from "axios";

const router = express.Router();

// Define the top-tracks route
router.get("/top-tracks", async (req: Request, res: Response) => {
  const accessToken = req.cookies?.spotify_access_token;

  if (!accessToken) {
    res.status(401).json({ error: "Unauthorized" });
    return;
  }

  try {
    const response = await axios.get("https://api.spotify.com/v1/me/top/tracks", {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
      params: {
        limit: 20,
        time_range: "short_term", // or "medium_term" or "long_term"
      },
    });

    res.json(response.data);  // Send the Spotify data back to the client
  } catch (error: any) {
    console.error("Error fetching top tracks:", error.response?.data || error.message);
    res.status(500).json({ error: "Failed to fetch top tracks" });
  }
});

export default router;
