---
name: "ROG Ally"
dateCreated: 2025-06-02 07:06:00 +0700
datePublished: 2025-06-02 07:06:00 +0700
dateModified: 2025-06-02 07:06:00 +0700
---

## Specification

|                           |                                                                                                                                                                                                  |
| ------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| Operating System          | Windows 11 Home                                                                                                                                                                                  |
| CPU                       | AMD Ryzen™ Z1 Extreme Processor ("Zen4" architecture with 4nm process, 8-core / 16-threads, 24MB total cache, up to 5.10 Ghz boost)                                                              |
| GPU                       | AMD Radeon™ Graphics (AMD RDNA™ 3, 12 CUs, up to 2.7 GHz, up to 8.6 Teraflops)                                                                                                                   |
| TDP                       | 9-30W                                                                                                                                                                                            |
| RAM                       | 16GB LPDDR5 on board (6400MT/s dual channel)                                                                                                                                                     |
| Display                   | 7-inch FHD (1920 x 1080) 16:9 IPS-level 120Hz FreeSync Premium glossy display<br>Response Time: 7ms<br>Brightness: 500nits                                                                       |
| Storage                   | 512GB PCIe® 4.0 NVMe™ M.2 SSD (2230) (Upgradeable)<br>Additional storage up to 2TB (microSD)                                                                                                     |
| Network                   | Wi-Fi 6E (802.11ax) (Triple band) 2\*2<br>Bluetooth® 5.2 (\*Bluetooth® version may change with OS version different)                                                                             |
| Battery                   | 40WHrs, 4S1P, 4-cell Li-ion                                                                                                                                                                      |
| I/O Ports                 | 1 x 3.5mm Combo Audio Jack<br>1 x ROG XG Mobile Interface and USB Type-C combo port (with USB 3.2 Gen2, support DisplayPort™ 1.4)<br>1 x UHS-II microSD card reader (supports SD, SDXC and SDHC) |
| Security                  | Build-in Fingerprint Sensor<br>Microsoft Pluton security processor                                                                                                                               |
| Power Supply              | TYPE-C, 65W AC Adapter                                                                                                                                                                           |
| Weight                    | 608g                                                                                                                                                                                             |
| Dimensions<br>(W x D x H) | 28.0 x 11.1 x 2.12 ~ 3.24 cm<br>(11.02", 4.37" x 0.83" ~ 1.28")                                                                                                                                  |

## Fine-Tuning for Optimal Performance

### Disable CPU Boost

Disabling CPU boost can improve battery life and thermal management, particularly in less demanding games. This has a significant impact on reducing the CPU's heat and power consumption. While it might slightly lower performance in demanding games, it can significantly extend your playtime and keep the Ally running cooler.

### 18W TDP

In performance mode, the Ally can sometimes exceed the 15W limit, reaching up to 22W in certain demanding titles. This can negatively impact battery life and increase fan noise. By setting a strict 18W limit in manual mode, users can maintain consistent performance while optimizing battery life and managing thermals.

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

## Xbox Ally

Microsoft [announced two versions of the Xbox handheld](https://youtu.be/FIVmyOIV1MQ), the Xbox Ally and the Xbox Ally X, at the Xbox Games Showcase 2025.

Xbox Ally X Specs:

|                          |                              |
| ------------------------ | ---------------------------- |
| CPU                      | AMD Ryzen AI Z2 Extreme      |
| CPU Cores (Architecture) | 8 Cores / 16 Threads (Zen 5) |
| GPU Cores (Architecture) | 16 (RDNA 3.5)                |
| RAM                      | 24GB                         |
| SSD                      | 1TB                          |
| Battery                  | 80Wh                         |

Xbox Ally Specs:

|                          |                             |
| ------------------------ | --------------------------- |
| CPU                      | AMD Ryzen Z2 A              |
| CPU Cores (Architecture) | 4 Cores / 8 Threads (Zen 2) |
| GPU Cores (Architecture) | 8 (RDNA 2)                  |
| RAM                      | 16GB                        |
| SSD                      | 512TB                       |
| Battery                  | 60Wh                        |

See: [Xbox Ally Might Not Worth the Upgrade](../../blog/2025/06/09/xbox-ally-might-not-worth-the-upgrade.md)

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

## Factory Reset

1. Ensure the device is completely shut down.

2. Press and hold the **Volume Down** button and then press and release the **Power button**. Continue holding the Volume Down button until the BIOS menu appears on the screen.

3. Once in the BIOS, press the **Y button** on the controller to open the "Advanced Mode". Navigate to the "Advanced" tab and select "ASUS Cloud Recovery".

4. If you have installed others OS (e.g., SteamOS), you may have disable Secure Boot before. Ensure to enable the Secure Boot, Reset Factory Keys, and restart, then follow the step 2 again. If Secure Boot is already enabled, move on to the next step.

5. The system will prompt you to connect to a Wi-Fi network. Select your network and enter the password. A stable internet connection is crucial for this step.

6. After a successful connection, the device will being downloading the necessary files to reinstall the operating system. This download can be lengthy depending on your internet speed.

7. The system will then proceed with the reinstallation of Windows. This is an automated process, but it may require some initial confirmations. Be patient, as it can take a significant amount of time, and the device will restart several times.

Once the process is complete, your ROG Ally will boot up to the initial Windows setup screen, just as it did when you first took it out of the box.

## Troubleshooting

### Uninstall Moving Out

ROG Ally came with a free full game called "Moving Out" preinstalled. To remove the game from the device, delete the folowing folder: `C:\eSupport\eDriver\Software\Win32App\Team17\Moving Out\`

### Secure Boot Violation

**Invalid signature detected. Check Secure Boot Policy in Setup**

1. Ensure the device is power is off.
2. Press and hold the **Volume Down button** and then press and release the **Power button**. Continue holding the Volume Down button until the BIOS menu appears on the screen.
3. Once in the BIOS, press the **Y button** on the controller to open the "Advanced Mode". Navigate to the "Security" tab and select "Secure Boot" -> "Key Management" -> "Reset To Setup Mode" -> "Restore Factory Keys".

### Cloud Recovery: Network Error

1. Make sure that BIOS time and date is correct, or try to set it back an hour.
2. Try another Wi-Fi hotspot.
3. Try using Ethernet connection via USB-C dock.
4. Reconnect the SSD.