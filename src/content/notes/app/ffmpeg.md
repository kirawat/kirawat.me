---
name: "FFmpeg"
dateCreated: 2025-06-09 14:15:00 +0700
---

FFmpeg, which stands for Fast Forward Moving Picture Experts Group, is an open-source software project consisting of a vast suite of libraries and command-line tools for handling video, audio, and other multimedia files and streams. It is often referred to as the "Swiss army knife" of multimedia processing due to its ability to  decode, encode, transcode, mux, demux, stream, filter, and play virtually any multimedia format that has been created.

Many applications that handle video or audio, including video editors (like [DaVinci Resolve](https://www.blackmagicdesign.com/products/davinciresolve)), media players (like [VLC](https://www.videolan.org/)), and streaming platforms (like YouTube), use FFmpeg's libraries in their backend.

## Key Components

The FFmpeg project includes several key command-line tools:

* `ffmpeg`: The core tool for converting multimedia files from one format to another. It can also capture and encode in real-time from various hardware and software sources.

* **ffprobe**: A tool for analyzing and inspecting media files. It extracts detailed information abotu the codecs, container format, bitrates, and other metadata from a file.

* **ffplay**: A simple, portable media player based on SDL and the FFmpeg libraries. It's often used by developers for testing purposes.

## Installation

### Windows

1. Go to the [official FFmpeg downloads page](https://ffmpeg.org/download.html).

2. Under the Windows logo, click on one of the recommended sources, like "BtbN".

3. On the next page, download the latest release. Look for a file ending in `...-win64-gpl-shared.zip`.

4. Extract the contents of the `.zip` file to your prefer directory, for example: `C:\ffmpeg`.

5. Open the **Start Menu**, type `env`, and select **"Edit the system environment variables"**.

6. In the System Properties window that opens, click the **"Environment Variables..."** button.

7. In the **System variables"** section (the bottom half), find and select the **"Path"** variable, then click **"Edit..."**.

8. Click **"New"** and then paste the path to the `bin` folder inside the directory where you extracted FFmpeg. Using the example from the previous step, this would be: `C:\ffmpeg\bin`.

9. Click **"OK"** on all the windows to close and save the changes.

10. Open a new Command Prompt window and type the following command and press Enter to verify the installation:

    ```bash
    ffmpeg -version
    ```

If the installation was successful, you will see information about the FFmpeg version, build, and configuration.