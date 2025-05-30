---
title: "NVIDIA GeForce"
publishDate: 2025-05-28 00:00:00
draft: true
---

## Low Latency Mode

Low Latency Mode works by reducing the number of frames the CPU prepares ahead of the GPU (the render queue).

  * **"On"** limits the queue to 1 frame.

  * **"Ultra"** tries to minimize the queue even further, submitting the frame *just in time* for the GPU to render it.

This "just in time" submission required by "Ultra" can sometimes slightly reduce your maximum achievable FPS compared to "On" or "Off". This is most likely to happen if your CPU is the bottleneck in a game (i.e., your CPU is working at 100% while your GPU usage is lower). In this situation, forcing the CPU to wait for the GPU via "Ultra" can limit overall throughput.

If your GPU is the bottleneck (GPU usage is near 95-100%), the impact of "Ultra" on FPS is typically negligible or non-existent, as the GPU's rendering speed is the limiting factor anyway. In this scenario, "Ultra" can provide its latency benefit without really hurting frame rates.

**"On"** is generally good enough for the vast majority of gaming scenarios. Setting Low Latency Mode to "On" provides a significant reduction in input lag compared to "Off" with minimal to no performance cost. It's a very effective setting and a great starting point.

**"Ultra"** aims to shave off a few extra milliseconds of latency compared to "On". If you play highly competitive, fast-paced games (like esports FPS titles) where every millisecond counts, and you are primarily GPU-bound (so you don't take an FPS hit), and you are sensitive enough to potentially feel the slight difference, it might be worth it to use this mode.

## Shader Cache Size

The **"Driver Default"** setting allows the NVIDIA driver to manage the cache size automatically. It is generally considered sufficient for most users.

The actual space used by the cache will grow as you play more games, up to the limit set (whether default or user-defined).

NVIDIA doesn't explicitly state a fixed gigabyte amount for the "Driver Default" settings for Shader Cache Size directly within the Control Panel or in most standard documentation.

In the past, the default cache size was often observed or cited to be around 1GB or sometimes 4GB. However, this might have changed with newer driver versions and different operating system configurations. The driver might dynamically adjust the effective limit based on factors like available disk space on the drive where the cache is stored (usually the primary system drive, C:).

If you have plenty of space on your primary SSD (especially if it's a fast NVMe drive), setting it manually to a larger size like 10GB, 100GB, or even Unlimited might offer a small benefit in reducing potential stutter caused by shader compilation, particularly after installing new drivers or playing games for the first time. However, for most users, the difference from "Driver Default" might not be noticeable.

## Vertical Sync

**"Fast Sync"** is only works well when your GPU can consistently produce frame rates *significantly higher* than your monitor's refresh rate (ideally 2x or even 3x the refresh rate). For example, on a 60Hz monitor, you'd want well over 120 FPS for Fast Sync to be effective. If your frame rate drops below your monitor's refresh rate, Fast Sync behaves essentially like V-Sync "Off" in that region - you might see stutter or judder, and it offers no smoothing benefit.

## G-Sync Setup Recommendation

1. **NVIDIA Control Panel:** G-Sync = ON

2. **NVIDIA Control Panel:** V-Sync = ON

3. **NVIDIA Control Panel:** Low Latency Mode = On (or Ultra if you meet the criteria above)

4. **NVIDIA Control Panel or In-Game:** Max Frame Rate = Set 3-5 FPS below your monitor's max refresh rate (e.g., 141 FPS for 144Hz monitor, 237 FPS for 240Hz). This ensures G-Sync stays active and avoids V-Sync-related latency at the refresh rate ceiling.

5. **In-Game Settings:** Disable V-Sync (usually), enable NVIDIA Reflex if available (often includes latency reduction similar to Low Latency Mode and can work alongside it).