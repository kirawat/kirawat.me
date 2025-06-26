---
name: "How to Toggle Touch Keyboard on Windows 11 Using Gamepad"
dateCreated: 2025-06-14T23:48:00+07:00
datePublished: 2025-06-14T23:48:00+07:00
dateModified: 2025-06-14T23:48:00+07:00
tags:
  - Windows
status: Budding
---
Microsoft introduced [touch keyboard support for gamepads](https://www.engadget.com/gaming/xbox/microsoft-launches-a-new-gamepad-keyboard-layout-for-windows-11-154011591.html) to Windows 11 in early 2025. This feature, designed to enhance the experience for PC gaming handhelds and users who navigate with a controller, allows for easier text input using a gamepad.

However, Windows doesn't provide a built-in keyboard shortcut to summon it. The only default method is to clicking a button on the taskbar, which defeats the purpose of trying to type in-game using only a controller.

The AutoHotkey script below creates a `Win + Shift + T` hotkey to toggle the touch keyboard. You can then assign this shortcut to a button on your controller using configuration software (like Steam Input or the software the came with your controller), allowing you to bring up the keyboard without ever leaving your gamepad:

```autohotkey
#Requires AutoHotkey v2.0
;
; SCRIPT:          Toggle Touch Keyboard
; DESCRIPTION:     A script to show or hide the Windows Touch Keyboard.
; HOTKEY:          Win + Shift + T
;
; This script handles the issue where simply running "TabTip.exe" doesn't work
; if the process is already running in the background. It uses a COM interface
; to correctly signal the running process to show or hide its window.
;
; Based on the source from: https://www.autohotkey.com/boards/viewtopic.php?p=288836#p288836

ToggleTouchKeyboard() {
  ; CLSID (Class ID) for the UI component that hosts the keyboard.
  static CLSID_UIHostNoLaunch := "{4CE576FA-83DC-4F88-951C-9D0782B4E376}"

  ; IID (Interface ID) for the specific functionality to invoke the keyboard.
  static IID_ITipInvocation := "{37C994E7-432B-4834-A2F7-DCE1F13B834B}"

  ; Check if the touch keyboard process ("TabTip.exe") is already running.
  if !ProcessExist("TabTip.exe") {
    ; If the process doesn't exist, simply run the executable to start it.
    Run("TabTip.exe")
  }
  else {
    ; If the process is already running, we must use a COM object to
    ; communicate with it.
    ; Create a COM object using the class and interface IDs defined above.
    pTip := ComObject(CLSID_UIHostNoLaunch, IID_ITipInvocation)

    ; Call the 'Toggle' method on the COM interface.
    ; ComCall uses the method's index in the virtual function table;
    ; 'Toggle' is the 4th method, so its index is 3.
    ComCall(3, pTip, "ptr", DllCall("GetDesktopWindow", "ptr"))
  }
}

; This section defines the hotkey that will trigger the function.
; The hotkey is Win + Shift + T.
#+T up::
{
  ; Wait for modifier keys to be physically released by the user.
  ; This is crucial step to prevent the hotkey from firing multiple times
  ; or in a weird state, which would cause the keyboard to disappear on release.
  KeyWait "LWin"
  KeyWait "RWin"
  KeyWait "Shift"

  ; After all keys are released, call the function to toggle the keyboard.
  ToggleTouchKeyboard()
}
```

## How to Use

1. Install [AutoHotkey](https://www.autohotkey.com/).

2. Right-click on your desktop, select **New** -> **AutoHotkey Script**, and give it a name (e.g., `TouchKeyboardToggle.ahk`).

3. Right-click the new file and select **Edit Script**.

4. Paste the entire script from above.

5. Save the file and double-click it to run. The script is now active, and you can use the hotkey (`Win + Shift + T`) to toggle Touch Keyboard.

**One-Time Setup**

If the touch keyboard doesn't open in the correct layout by default, click the **Settings** icon in the top-left corner of the touch keyboard, then navigate to **Keyboard layout** and select **Gamepad**.

## Customization

To change the hotkey, just edit the line `#+T up::`.
* `#` stands for the Windows key.
* `+` stands for Shift.
* `^` stands for Ctrl.
* `!` stands for Alt.

For example, to change the hotkey to `Ctrl + Alt + K`, you would modify the line to:<br>`^!K up::`