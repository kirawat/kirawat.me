---
title: "Upscaling Technology"
publishDate: 2025-06-02 08:08:00 +0700
modifiedDate: 2025-06-02 08:08:00 +0700
---

Upscaling technology is a process used to improve the resolution of images or videos, making them appear sharper and more detailed on higher resolution displays. It does this by taking a lower-resolution image or video and increasing its pixel count, essentially adding new pixels to fill in the gaps and make the image larger.

There are a few different types of upscaling techniques:

* **Basic Upscaling:** This is the simplest method, where existing pixels are simply replicated or stretched to fill the higher resolution. This can result in a blurry or pixelated image.

* **Spatial Upscaling:** This involves analyzing neighboring pixels to estimate what the missing pixels should look like. This can provide a sharper image than basic upscaling but might introduce artifacts or distortions.

* **AI Upscaling:** This uses artificial intelligence algorithms to analyze the image and predict what the missing details should be. AI upscaling can produce much higher quality results than other methods, often preserving more detail and creating a more natural-looking image.

Upscaling technology is particular useful in gaming, where it can improve performance by rendering games at a lower resolution and then upscaling them for display. It can also enhance the visual quality of older games or videos that were originally produced in lower resolution.

## NVIDIA

### Deep Learning Super Sampling (DLSS)

**DLSS**, or Deep Learning Super Sampling, is an AI graphic upscaling and frame generation technology that designed to boosts frame rates while maintaining image quality. It works by rendering frames at a lower resolution and then using AI to upscale them to the desired resolution. This results in significant performance gains without sascrificing too much of the image quality.

**DLSS 1.0** was released in 2019. An image-upscaling algorithm that needed to be trained for each game it operated on.

**DLSS 1.9** is the unofficial name of a special version of DLSS 1.0 for Control that used a GPU's CUDA cores instead of its Tensor cores.[^1]

**DLSS 2** was released in 2020 and introduced a number of improvements over the original DLSS, including better image quality, faster performances, and support for more games. Temporal anti-aliasing upsampling back on the Tensor cores. Can be applied created by the upscaling.[^1] It also added a new "Quality" mode that allows users to achieve even higher image quality at the cost of some performance.

**DLSS 3** was released in 2022. It introduces a new feature called Frame Generation, which uses AI to generate new frames between the frames rendered by the GPU. This can significantly improve perforance, especially in demanding games. Exclusive to RTX 40-series GPUs, as they rely on an improved Optical Flow Accelerator that the earlier architectures don't have.

**DLSS 3.5** was released in 2023, brings the Ray Reconstruction. Its AI model trained on five times as much data as DLSS 3.0.

**DLSS 4** was released in 2025, introducing features like Multi Frame Generation for RTX 50 series graphics cards, enhancements to its AI models, including the use of a transformer-based architecture for improved image quality, frame stability, reduced memory usage, and increased lighting detail across its components like Super Resolution, Ray Reconstruction, and DLAA (Deep Learning Anti-Aliasing).[^2]

### RTX Dynamic Vibrance

RTX Dynamic Vibrance is an AI-powered filter developed by NVIDIA that enhances the vibrancy and clarity of colors in supported games. It aims to make the visuals more vivid and appealing without causing oversaturation or color distortion.

While generally minimal, enabling the filter may have a slight impact on game performance depending on the game and your system configuration.

The effectiveness of the filter can vary depending on individual preferences and the specific game.

#### How it Works

RTX Dynamic Vibrance analyzes the game's visuals in real-time and dynamically adjusts the saturation and vibrancy of colors. It's designed to avoid oversaturation and maintain a natural look while enhancing the overall visual experience. The AI algorithms are trained to recognize different in-game elements and adjust the colors accordingly, ensuring that important details stand out without making the image look artificial.

**Settings:**

* **Intensity:** Controls how much the AI is allowed to modify the colors in the game. Lower intensity makes subtle changes, colors are gently enhanced. Good for a more realistic look. Higher intensity is more dramatic changes, colors become much more vivid. Can make things pop but might look less natural.

* **Saturation boost:** This focuses specifically on how *rich* the colors are. It directly increases the saturation of colors, making them more intense.

## AMD

### FidelityFX Super Resolution (FSR)

**AMD FSR**, or FidelityFX Super Resolution, is a similar technology to NVIDIA's [DLSS](#deep-learning-super-sampling-dlss), but it is open source and can be used on any GPU, not just AMD GPUs.

FSR works by rendering frames at a lower resolution and then using a spatial algorithm to upscale them to the desired resolution. This results in performance gains without sacrificing too much image quality.

**FSR 1**, the first version of FSR, was released in June 2021. Being open source, it was easily adopted by game developers and could be impleented on various platforms, including consoles. It also worked on a wider range of hardware compared to NVIDIA's DLSS, which was initially exclusive to RTX cards.

Unlike DLSS, which utilized temporal data (information from previous frames), FSR 1 only worked on a single frame at a time. This limited its ability to reconstruct fine details and could lead to artifacts like shimmering or ghosting.

**FSR 2** was released in 2022 and introduced a number of improvement over the original FSR, including better image quality, faster performance, and support for more games. It also added a new "Quality" mode that allows users to achieve even higher image quality at the cost of some perforance.

**FSR 3** was released in 2023. It introduced a new feature called Frame Generation, which is similar to NVIDIA's DLSS 3 Frame Generation, by uses AI to generate new frames between the frames rendered by the GPU.

**FSR 3.1** was released in 2024, offers a major upgrade to the upscaling algorithm, produces sharper and more detailed images compared to FSR 3.0, bringing it closer to native rendering quality. It also reducing visual artifacts like ghosting, shimmering, and flickering that were sometimes noticeable in FSR 3.0.

Introduced with FSR 3.1 was "Decoupled Frame Generation". This means that frame generation technology is now separate from the upscaling component in FSR, which allows for more flexibility in choosing and combining upscaling and frame generation techniques. For example, user could use FSR 3.1 upscaling with DLSS 3 frame generation, or vice versa.

### Radeon Super Resolution (RSR)

**RSR** (Radeon Super Resolution) is an upscaling technology operates at the driver level, meaning it works independently of the game itself. This makes it compatible with a vast library of games, even those that don't natively support upscaling technologies.

It utilizes the same upscaling algorithm as FSR 1.0, this means if offers similar image quality improvement as FSR 1.0. Although, there are some differences in implementation and compatibility. RSR takes the entire rendered frame, including the game and any overlays (like UI elements), and upscales it to the native resolution of your monitor. Therefore, it might introduce some minor visual artifacts or blurriness compared to FSR, especially in UI elements, as it upscales the entire screen.

[^1]: Evenden, Ian (October 6, 2023). ["How to use DLSS Swapper: a handy frame rate boosting tool if you know what you're doing"](https://www.pcgamer.com/how-to-use-dlss-swapper/) *PC Gamer*. Retrieved on October 10, 2023.

[^2]: Lin, Henry and Burns, Andrew (January 06, 2025). ["NVIDIA DLSS 4 Introduces Multi Frame Generation & Enhancements For All DLSS Technologies"](https://www.nvidia.com/en-us/geforce/news/dlss4-multi-frame-generation-ai-innovations/) *NVIDIA*. [Archived](https://web.archive.org/web/20250529010021/https://www.nvidia.com/en-us/geforce/news/dlss4-multi-frame-generation-ai-innovations/) from the original on May 29, 2025. Retrieved on June 2, 2025.