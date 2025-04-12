import express , { Request, Response } from "express";
import axios from "axios";
import { off } from "process";

const router = express.Router();

// Define the top-tracks route
router.get("/top-genres", async (req: Request, res: Response) => {
  const accessToken = req.cookies?.spotify_access_token;
  

  if (!accessToken) {
    res.status(401).json({ error: "Unauthorized" });
    return;
  }

  try {
    const response = await axios.get("https://api.spotify.com/v1/me/top/artists", {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
      params: {
        limit: 50,
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
