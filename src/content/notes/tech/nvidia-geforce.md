---
name: NVIDIA GeForce
dateCreated: 2025-05-28 00:00:00 +0700
datePublished: 2025-05-28 00:00:00 +0700
dateModified: 2025-05-28 00:00:00 +0700
tags:
  - Computer
draft: false
---

## 3D Settings

Settings are based on Monica J. White's ["How to optimize Nvidia Control Panel settings for gaming and overall performance"](https://www.digitaltrends.com/computing/best-nvdia-control-panel-settings/) on *Digital Trends*.[^1] Originally, this configuration aiming for high frame rates in games, well-suited for competitive games where responsiveness is key, but I have adjusted it to have a good balance between frame rates and image quality.

| Feature                                                     | Setting                                                                              |
| ----------------------------------------------------------- | ------------------------------------------------------------------------------------ |
| Image Scaling                                               | Off                                                                                  |
| Ambient Occulusion                                          | Performance                                                                          |
| Anisotropic filtering                                       | Application-controlled                                                               |
| Antialiasing - FXAA                                         | Off                                                                                  |
| Antialiasing - Gamma correction                             | On                                                                                   |
| Antialiasing - Mode                                         | Application-controlled                                                               |
| Antialiasing - Setting                                      | Application-controlled                                                               |
| Antialiasing - Transparency                                 | Off                                                                                  |
| Background Application Max Frame Rate                       | Off                                                                                  |
| CUDA - GPUs                                                 | All                                                                                  |
| CUDA - Sysmem Fallback Policy                               | Driver Default                                                                       |
| DSR - Factors                                               | Off                                                                                  |
| DSR - Smoothness                                            | Off                                                                                  |
| [Low Latency Mode](#low-latency-mode)                       | On                                                                                   |
| [Max Frame Rate](#max-frame-rate)                           | Off<br>(For G-Sync Monitor: set it 3-5 FPS below<br>your monitor's max refresh rate) |
| Monitor Technology                                          | G-SYNC Compatible (if compatible)                                                    |
| Multi-Frame Sampled AA (MFAA)                               | Off                                                                                  |
| OpenGL GDI compatibility                                    | Auto                                                                                 |
| OpenGL rendering GPU                                        | Auto-select                                                                          |
| Power management mode                                       | Prefer maximum performance                                                           |
| Preferred refresh rate                                      | Highest available                                                                    |
| [Shader Cache Size](#shader-cache-size)                     | Driver Default                                                                       |
| Texture filtering - Anisotropic sample optimization         | On                                                                                   |
| Texture filtering - Negative LOD bias                       | Allow                                                                                |
| Texture filtering - Quality                                 | Quality                                                                              |
| Texture filtering - Trilinear optimization                  | On                                                                                   |
| Threaded optimization                                       | Auto                                                                                 |
| Triple buffering                                            | Off                                                                                  |
| [Vertical sync](#vertical-sync)                             | On                                                                                   |
| Virtual Reality pre-rendered frames                         | 1                                                                                    |
| Virtual Reality - Variable Rate Super Sampling              | Off                                                                                  |
| Vulkan/OpenGL present method                                | Prefer layered on DXGI Swapchain                                                     |

## G-Sync Setup Recommendation

1. **NVIDIA Control Panel:** G-Sync = ON

2. **NVIDIA Control Panel:** V-Sync = ON

3. **NVIDIA Control Panel:** Low Latency Mode = On (or Ultra if you meet the [criteria](#low-latency-mode))

4. **NVIDIA Control Panel or In-Game:** [Max Frame Rate](#max-frame-rate) = Set 3-5 FPS below your monitor's max refresh rate (e.g., 141 FPS for 144Hz monitor, 237 FPS for 240Hz). This ensures G-Sync stays active and avoids V-Sync-related latency at the refresh rate ceiling.

5. **In-Game Settings:** Disable V-Sync (usually), enable NVIDIA Reflex if available (often includes latency reduction similar to Low Latency Mode and can work alongside it).

## Low Latency Mode

Low Latency Mode works by reducing the number of frames the CPU prepares ahead of the GPU (the render queue).

  * **"On"** limits the queue to 1 frame.

  * **"Ultra"** tries to minimize the queue even further, submitting the frame *just in time* for the GPU to render it.

This "just in time" submission required by "Ultra" can sometimes slightly reduce your maximum achievable FPS compared to "On" or "Off". This is most likely to happen if your CPU is the bottleneck in a game (i.e., your CPU is working at 100% while your GPU usage is lower). In this situation, forcing the CPU to wait for the GPU via "Ultra" can limit overall throughput.

If your GPU is the bottleneck (GPU usage is near 95-100%), the impact of "Ultra" on FPS is typically negligible or non-existent, as the GPU's rendering speed is the limiting factor anyway. In this scenario, "Ultra" can provide its latency benefit without really hurting frame rates.

**"On"** is generally good enough for the vast majority of gaming scenarios. Setting Low Latency Mode to "On" provides a significant reduction in input lag compared to "Off" with minimal to no performance cost. It's a very effective setting and a great starting point.

**"Ultra"** aims to shave off a few extra milliseconds of latency compared to "On". If you play highly competitive, fast-paced games (like esports FPS titles) where every millisecond counts, and you are primarily GPU-bound (so you don't take an FPS hit), and you are sensitive enough to potentially feel the slight difference, it might be worth it to use this mode.

## Max Frame Rate

It's recommended to set the maximum frame rate for a G-Sync monitor to around 3-5 FPS below the monitor's maximum refresh rate primarily to ensure G-Sync remains active and to avoid potential issues that can arise when the frame rate hits or exceeds the monitor's limit.

G-Sync technology works by dynamically adjusting the monitor's refresh rate to match the frame rate of your GPU. This eliminates screen tearing and reduces stutter and input lag. However, G-Sync operates within a specific range, typically from a certain minimum FPS (e.g., 30 FPS) up to the monitor's maximum refresh rate (e.g., 144Hz, 240Hz). If your game's FPS consistently reaches or exceeds the monitor's maximum refresh rate, G-Sync effectively disengages. The monitor then reverts to a fixed refresh rate behavior.

The transition between G-Sync being active and V-Sync taking over (or G-Sync disengaging and screen tearing appearing if V-Sync is off) can sometimes cause a perceptible stutter or judder. Keeping the frame rate within the G-Sync operating range by capping it slightly below the maximum helps to avoid these jarring transitions.

## Shader Cache Size

The **"Driver Default"** setting allows the NVIDIA driver to manage the cache size automatically. It is generally considered sufficient for most users.

The actual space used by the cache will grow as you play more games, up to the limit set (whether default or user-defined).

NVIDIA doesn't explicitly state a fixed gigabyte amount for the "Driver Default" settings for Shader Cache Size directly within the Control Panel or in most standard documentation.

In the past, the default cache size was often observed or cited to be around 1GB or sometimes 4GB. However, this might have changed with newer driver versions and different operating system configurations. The driver might dynamically adjust the effective limit based on factors like available disk space on the drive where the cache is stored (usually the primary system drive, C:).

If you have plenty of space on your primary SSD (especially if it's a fast NVMe drive), setting it manually to a larger size like 10GB, 100GB, or even Unlimited might offer a small benefit in reducing potential stutter caused by shader compilation, particularly after installing new drivers or playing games for the first time. However, for most users, the difference from "Driver Default" might not be noticeable.

## Vertical Sync

**"Fast Sync"** is only works well when your GPU can consistently produce frame rates *significantly higher* than your monitor's refresh rate (ideally 2x or even 3x the refresh rate). For example, on a 60Hz monitor, you'd want well over 120 FPS for Fast Sync to be effective. If your frame rate drops below your monitor's refresh rate, Fast Sync behaves essentially like V-Sync "Off" in that region - you might see stutter or judder, and it offers no smoothing benefit.


[^1]: White, Monica J. ["How to optimize Nvidia Control Panel settings for gaming and overall performance"](https://www.digitaltrends.com/computing/best-nvdia-control-panel-settings/). *Digital Trends*. [Archived](https://web.archive.org/web/20240723074017/https://www.digitaltrends.com/computing/best-nvdia-control-panel-settings/) from the original on July 23, 2024. Retrieved on October 11, 2023.