---
title: "BIOS Settings"
publishDate: 2025-06-01 22:57:00 +0700
modifiedDate: 2025-06-01 22:57:00 +0700
draft: false
tags:
  - "Computer"
---

## Re-Size BAR Support

**Recommend:** Enable

Re-Size BAR Support (also known as Resizable BAR, Smart Access Memory, or Clever Access Memory) is a technology that can potentially improve the performance of your computer in certain games.

Traditionally, your computer's CPU (Central Processing Unit) could only access a small portion of your GPU's (Graphic Processing Unit) memory (VRAM) at a time. Re-Size BAR Support removes this limitation, allowing the CPU to access all of the GPU's memory at once. This can lead to faster data transfer between the CPU and GPU, which can result in higher frame rates and smoother gameplay.

Re-Size BAR Support is relatively new, and its impact on performance can vary depending on your specific hardware and the games you play. In general, enable Re-Size BAR Support is more likely to benefit systems with newer CPUs and GPUs.

## CSM Support

**Recommend:** Disable

CSM Support (Compatibility Support Module) is a component within the UEFI (Unified Extensible Firmware Interface) firmware of your computer's motherboard. It allows your system to boot and run older operating systems and some hardware components that are not fully compatible with UEFI.

In essence, CSM emulates the legacy BIOS (Basic Input/Output System) environment, making it possible for older software and hardware to work with newer UEFI systems.

**Should you enable or disable it?**

* **Enable CSM:** If you need to boot older operating systems (like Windows 7 or earlier) or use legacy hardware devices that don't support UEFI, you will need to enable CSM.

* **Disable CSM:** If you are using a modern operating system (like Windows 10 or 11) and all your hardware components are compatible with UEFI.

## Fast Boot

**Recommend:** Enable

Fast Boot is a feature found in some BIOS settings (including UEFI) that aims to accelerate the startup process of your computer. It does this by skipping some hardware checks and initialization procedures that are typically performed during a normal boot.

If you want faster startup and you are using a modern operating system and hardware that are fully compatible, then enabling Fast Boot is generally safe and can be beneficial.

If you need boot flexibility or you use older hardware operating systems, it's usually better to leave Fast Boot disabled.

**Advantages of Fast Boot**

* **Faster startup times:** This is the most significant benefit. The difference can be noticeable, especially on systems with SSDs (Solid State Drives).

* **Reduced power consumption:** By skipping some hardware checks, Fast Boot can slightly reduce power usage during startup.

**Disadvantages of Fast Boot**

* **Limited boot options:** You may not be able to access the BIOS settings or boot from removable media (like USB drives or DVDs) if Fast Boot is enabled.

* **Compatibility issues:** Some older hardware or operating systems may not work correctly with Fast Boot.

* **Troubleshooting difficulties:** If your system encounters problem during startup, Fast Boot might make it harder to diagnose and fix.

### Ultra Fast Boot

Ultra Fast Boot is a feature found in some motherboards that aims to significantly reduce the boot time of your computer even more than the standard Fast Boot option. It bypasses even more hardware checks and configurations than Fast Boot.

You might not even see the initial screen where you press a key to enter BIOS or boot from removable media. If you need to access BIOS settings with Ultra Fast Boot enabled, you have few options:

1. **Boot menu shortcut:** While you may not see the initial booting screen while Ultra Fast Boot is enabled, you may still be able to press specific key to access the boot menu (check your manual).

2. **Clear CMOS:** Clearing your CMOS settings will reset the BIOS to default, disabling Ultra Fast Boot.

## GIGABYTE PerfDrive

**Recommend:** Spec Enhance

GIGABYTE PerfDrive is a BIOS feature designed to simplify optimizing your system performance by offering pre-configured settings tailored to your needs and hardware. Here's what the options within PerfDrive mean:

* **Max Turbo:** This setting maximizes the performance of your CPU by allowing it to boost to its highest possible frequencies on all cores, including both P-cores (performance cores) and E-cores (efficiency cores). It requires a robust cooling solution (such as a high-end liquid cooler) to prevent thermal throttling due to increased power consumption and heat generation. Ideal for demanding workloads that require maximum processing power, like rendering, video editing, and simulations.

* **Spec Enhance:** This setting increases the turbo frequencies of the P-cores while keeping E-cores at their default settings. It offers a performance boost over the default settings while maintaining lower power consumption and heat generation compared to Max Turbo. Suitable for a balance between performance and power efficiency, particular for gaming and content creation.

* **E-core Disable:** This setting deactivates the E-cores entirely, allocating all resources to the P-cores. It can result in lower power consumption and heat generation since E-cores are typically designed for less demanding tasks. May benefit specific games or applications that primarily utilize P-cores and don't scale well with E-cores.

## VT-d

**Recommend:** Enable

VT-d (Virtualization Technology for Directed I/O) is an Intel technology designed to improve the performance and security of hardware virtualization.

It uses a feature called IOMMU (Input/Output Memory Management Unit) to manage and isolate hardware devices from each other. This allows virtual machines (VMs) direct access to certain hardware devices on your computer directly as if they were running on physical hardware, bypassing the need for software emulation. This can lead to significant performance improvement in tasks that heavily rely on these devices, such as networking or storage.

## Intel® Dynamic Tuning Technology

**Recommend:** Enable

Intel® Dynamic Tuning Technology (DTT) is a power and thermal management solution designed to optimize the performance, power consumption, and thermals of your system dynamically. It uses advanced algorithms to adjust the CPU's power limit and clock frequencies in real-time, based on the current workload and thermal conditions.

In most cases, it's recommended to keep Intel DTT enabled. It can offer significant benefits in terms of performance, power efficiency, and thermal management without requiring manual configuration. However, if you experience any issues or want full control over your CPU settings, you can disable it.