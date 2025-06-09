---
name: "yt-dlp"
dateCreated: 2025-06-09 14:12:00 +0700
---

**"yt-dlp"** is an open-source command-line audio/video downloader from websites. The project is a fork of [youtube-dl](https://github.com/ytdl-org/youtube-dl) based on the now inactive [youtube-dlc](https://github.com/blackjack4494/yt-dlc), with the primary goal of adding new features and patches more quickly.

At its core, yt-dlp allows users to save online media to their local computer for offline viewing or listening. It is highly flexible, offering a wide array of options to control the download process, such as selcting specific video and audio formats, downloading subtitles, and extracting audio-only tracks.

## Basic Usage

To use yt-dlp, open a Terminal or Command Prompt and use a command structure like this:

```bash
yt-dlp [OPTIONS] "URL"
```

For a simple video download, the command would be:

```bash
yt-dlp "https://www.youtube.com/watch?v=dQw4w9WgXcQ"
```

To extract only the audio in MP3 format, you might use:

```bash
yt-dlp -x --audio-format mp3 "https://www.youtube.com/watch?v=dQw4w9WgXcQ"
```

## Troubleshooting

**\[Warning\]: Possible MPEG-TS in MP4 container or malformed AAC timestamps. Install ffmpeg to fix this automatically.**

You need to **remux** the video. This process rewrite the container of the video file (the MP4 part) without re-encoding the actual video and audio streams.

1. Install [FFmpeg](ffmpeg.md#installation), if you haven't already.

2. Open Command Prompt and run the FFmpeg command:

    ```bash
    ffmpeg -i "path/to/your/input_video.mp4" -c copy -bsf:a aac_adtstoasc "path/to/your/output_video.mp4"
    ```

    * `ffmpeg`: Calls the FFmpeg program.
    * `-i "path/to/your/input_video.mp4"`: Specifies the input video file. Using quotes is a good practice in case the filename has spaces.
    * `-c copy`: This tells FFmpeg to copy all streams (video, audio, subtitles) without re-encoding.
    * `-bsf:a aac_adtstoasc`: This is an audio bitstream filter. It specifically fixes common header issues in AAC audio streams ("malformed AAC timestamps").
    * **`"path/to/your/output-video.mp4"`**: This is the name of the new, fixed video file that will be created.

## External Links

* [GitHub](https://github.com/yt-dlp/yt-dlp)