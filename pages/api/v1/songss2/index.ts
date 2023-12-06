import type { NextApiRequest, NextApiResponse } from "next";
import ytdl from "ytdl-core";
import ffmpeg from "fluent-ffmpeg";
import * as childProcess from "child_process";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === "POST") {
    const body = req.body;
    const videoUrl = body.url;

    try {
      // Download YouTube video using youtube-dl
      const videoInfo = await ytdl.getInfo(videoUrl);
      const videoId = videoInfo.videoDetails.videoId;
      const youtubeDlCommand = `youtube-dl -x --audio-format mp3 --output "downloads/${videoId}.%(ext)s" ${videoUrl}`;
      const downloadProcess = childProcess.exec(youtubeDlCommand);

      downloadProcess.stdout?.on("data", (data) => {
        console.log(`stdout: ${data}`);
      });

      downloadProcess.stderr?.on("data", (data) => {
        console.error(`stderr: ${data}`);
      });

      downloadProcess.on("close", (code) => {
        if (code === 0) {
          // Conversion successful, read metadata and send the file
          const mp3FilePath = `downloads/${videoId}.mp3`;
          const tags = {
            title: videoInfo.videoDetails.title,
            artist: videoInfo.videoDetails.author.name,
            album: "YouTube Music",
          };

          // Add your logo or album art image
          // const success = nodeID3.write(tags, mp3FilePath);

          // Send the MP3 file
          console.log(mp3FilePath);

          // res.sendFile(mp3FilePath, (err) => {
          //   if (err) {
          //     console.error("Error sending file:", err);
          //     res.status(500).send("Error sending MP3 file");
          //   }
          // });
        } else {
          // Conversion failed
          console.error("Conversion failed");
          res.status(500).send("Conversion error");
        }
      });
    } catch (error) {
      console.error("Error:", error);
      res.status(500).send("Error fetching YouTube video information");
    }
  }
}
