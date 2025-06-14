---
name: Windows 11
dateCreated: 2025-06-14 14:33:00 +0700
---
## How to Make Windows 11 Taskbar Transparent

### TranslucentTB

This is a free and recommended application available directly from the [Microsoft Store](https://apps.microsoft.com/detail/9pf4kz2vn4w9?hl=en-US&gl=US). It's lightweight and specifically designed to control the taskbar's transparency.

Once installed, TranslucentTB will run in your system tray. You can right-click its icon to customize the taskbar's appearance. You can choose different effects for when the desktop is visible, a window is maximized, or the Start Menu is open. To make it completely transparent, you would select the "Clear" option.

### Editing the Windows Registry

> [!NOTE]
> This method is no longer working on the Windows 11 24H2.

This method is for advanced users, as making incorrect changes to the registry can cause system instability. It's highly recommended to back up your registry before proceeding.

1. Open the **Registry Editor**.

2. In the address bar at the top of the Registry Editor, paste the following path and press Enter: `HKEY_LOCAL_MACHINE\SOFTWARE\Microsoft\Windows\CurrentVersion\Explorer\Advanced`

3. Create a new **DWORD** value:
    * In the right-hand pane, right-click on an empty space.
    * Select **New** -> **DWORD (32-bit) Value**.
    * Name the new value `UseOLEDTaskbarTransparency`.

4. Modify the new value:
    * Double-click on `UseOLEDTaskbarTransparency`.
    * Set the **Value** data to `1`.
    * Click **OK**.

5. In the address bar at the top of the Registry Editor, paste the following path and press Enter: `HKEY_LOCAL_MACHINE\SOFTWARE\Microsoft\Windows\Dwm`

6. Create a new **DWORD** value:
    * In the right-hand pane, right-click on an empty space.
    * Select **New** -> **DWORD (32-bit) Value**.
    * Name the new value `ForceEffectMode`.

7. Modify the new value:
    * Double-click on `ForceEffectMode`.
    * Set the **Value** data to `1`.
    * Click **OK**.

8. Restart your computer for the changes to take effect.

To revert this change, you can either delete the `ForceEffectMode` and `UseOLEDTaskbarTransparency` value or set its data to `0` and restart your computer.