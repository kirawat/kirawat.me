---
name: "ROG Ally"
dateCreated: 2025-06-02 07:06:00 +0700
datePublished: 2025-06-02 07:06:00 +0700
dateModified: 2025-06-02 07:06:00 +0700
---

## Fine-Tuning for Optimal Performance

### Disable CPU Boost

Disabling CPU boost can improve battery life and thermal management, particularly in less demanding games. This has a significant impact on reducing the CPU's heat and power consumption. While it might slightly lower performance in demanding games, it can significantly extend your playtime and keep the Ally running cooler.

### 18W TDP

In performance mode, the Ally can sometimes exceed the 15W limit, reaching up to 22W in certain demanding titles. This can negatively impact battery life and increase fan noise. By setting a strict 18W limit in manual mode, users can maintain consistent performance while optimizing battery life and managing thermals.

## Uninstall Moving Out

ROG Ally came with a free full game called "Moving Out" preinstalled. To remove the game from the device, delete the folowing folder: `C:\eSupport\eDriver\Software\Win32App\Team17\Moving Out\`

## Super Resolution

### FSR (FidelityFX Super Resolution)

[FSR (FidelityFX Super Resolution)](./upscaling-technology.md#fidelityfx-super-resolution-fsr) will function on the ROG Ally if the specific game you're playing has FSR integrated into its graphics settings. You'll typically find it as a toggle with quality levels like "Ultra Quality", "Quality", "Balanced", and "Performance".

FSR works by rendering the game at a lower internal resolution and then using algorithms to [upscale](upscaling-technology.md) it to your display's native resolution. This increases performance (frames per second) while trying to maintain image quality.

### RSR (Radeon Super Resolution)

The ROG Ally also supports [RSR (Radeon Super Resolution)](./upscaling-technology.md#radeon-super-resolution-rsr). This works similarly to FSR but at a driver level. If a game doesn't have FSR, you can try RSR, but you generally shouldn't use both simultaneously.

RSR is an AMD technology that functions within the graphics driver, not in games directly. It upscales games that don't have native FSR support, potentially boosting frame rates across many titles. Similar to FSR, RSR renders the game at a lower resolution and then upscales it to the ROG Ally's native resolution (1080p). This results in reduced stress on the Ally's hardware and higher frame rates.

In the game of your choice, lower the in-game rendering resolution to something like 1280x720 or 1600x900. This allows RSR to have room to upscale the image.

RSR does take some processing power. While the effect is minimal, in theory, having it enabled even when it's not doing anything could lead to a very slight decrease in performance. If your game is already running at the native resolution, RSR is not needed.

#### Avoid Using Both FSR and RSR Simultaneously

Since FSR and RSR both achieve similar goals of upscaling for performance gains, having both on at the same time creates unnecessary redundancy. Applying two upscaling solutions on top of each other can lead to image quality problems. You might notice excessive blurring, ghosting, or other visual artifacts that make the game look worse than using either FSR or RSR alone. This can even lower your performance due to the extra processing for both technologies.

* If a game support FSR, disable RSR and use the in-game FSR implementation. FSR often has better integration and is optimized for that specific title, leading to better visuals and performance.

* If a game doesn't have FSR support, you can try enabling RSR. This can boost performance in older or less demanding titles.

## HAL Update

HAL stands for Hardware Abstraction Layer. It's the ASUS's Armoury Crate software component that allows it to communicate with the device's hardware.

These updates often address issues or glitches to improve stability and performance, ensure the device works correctly with newer hardware or software versions. While less common, some HAL updates might introduce new features or enhancements to the ROG Ally's functionality.

## BIOS Update

See: [BIOS & Firmware for ROG Ally RC71L](https://rog.asus.com/gaming-handhelds/rog-ally/rog-ally-2023/helpdesk_bios/)

| Date       | Version | Description                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
| :--------: | :-----: | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 2025/03/07 | 342     | Support WiFi 6E(Taiwan).                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| 2024/09/12 | 341     | AMD Security update<br>For 2024 Q2 Security Patch update                                                                                                                                                                                                                                                                                                                                                                                                             |
| 2024/07/10 | 339     | Modified the Ally's fan curve from 30dBA to 35dBA in Turbo mode when plugged in, and from 25dBA to 30dBA in Turbo mode when using the battery. Changed the minimum fan speed in Manual mode when device hits a certain temperature.                                                                                                                                                                                                                                  |
| 2024/03/05 | 337     | Bugfix: Fixed a bug if user turns off the sound effect of start-up video, the sound effect will be set to default (turning on) after updating BIOS.                                                                                                                                                                                                                                                                                                                  |
| 2024/01/09 | 336     | Update authenticated key for MSFT 24H2 version                                                                                                                                                                                                                                                                                                                                                                                                                       |
| 2023/12/08 | 335     | Bugfix: Fixed a bug in BIOS 330 where unexpected throttling occurred.                                                                                                                                                                                                                                                                                                                                                                                                |
| 2023/11/22 | 334     | Bugfix: Fixed a bug where ACSE's Real-time Monitor would display battery wattage as 2.6W at all times when unplugged.                                                                                                                                                                                                                                                                                                                                                |
| 2023/11/14 | 333     | Bugfix: Fixed a noise that some users experienced starting with BIOS 330.                                                                                                                                                                                                                                                                                                                                                                                            |
| 2023/10/24 | 331     | New feature: Added a function to disable CPU boosting, available in the upcoming ACSE 1.4.2.                                                                                                                                                                                                                                                                                                                                                                         |
| 2023/10/12 | 330     | Optimize system performance.                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| 2023/07/20 | 323     | - UX improvement: Added 30W support when plugging in 65W or higher wattage PD adapters or Type-C hub.<br>- UX improvement: Modified minimum panel backlight value from 25nits to 10nits to improve usability in dark environments.<br>- UX improvement: On future BIOS updates, the "Memory Assigned to GPU" setting won't be reset to default; it will now keep its previous value.<br>- UX improvement: Optimized performance in Performance mode when plugged in. |
| 2023/07/04 | 322     | - Bugfix: Resolved an issue that caused the ROG Ally to be stuck at the boot up loading screen when users configured a password in BIOS mode.<br>- Modified the Ally's fan curve from 30dBA to 35dBA in Turbo mode when plugged in, and from 25dBA to 30 dBA in Turbo mode when using the battery. Changed the minimum fan speed in Manual mode when device hits a certain temperature.                                                                              |

