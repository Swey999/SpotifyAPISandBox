import express , { Request, Response } from "express";
import axios from "axios";
import { off } from "process";
import { format } from "path";

const router = express.Router();

// Define the top-tracks route
router.get("/steam-games", async (req: Request, res: Response) => {
  const steamKey = process.env.STEAM_KEY; // Replace with your Steam API key
  const steamId = req.query.steamid; // Replace with the actual Steam ID
  

  if (!steamKey) {
    res.status(401).json({ error: "Unauthorized" });
    return;
  }

  try {
    const response = await axios.get("http://api.steampowered.com/IPlayerService/GetOwnedGames/v0001", {        
      params: {
        key: steamKey,
        steamid: steamId, // Replace with the actual Steam ID
        format: "json",
        include_appinfo: true,

      },
    });

    console.log("Steam Response:", response); // Log the Steam response for debugging

    res.json(response.data);  // Send the Spotify data back to the client
  } catch (error: any) {
    console.error("Error fetching top tracks:", error.response?.data || error.message);
    res.status(500).json({ error: "Failed to fetch top tracks" });
  }
});

export default router;
