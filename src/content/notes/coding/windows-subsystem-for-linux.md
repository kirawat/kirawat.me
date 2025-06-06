---
name: "Windows Subsystem for Linux (WSL)"
dateCreated: 2025-06-06 20:45:00 +0700
---

Windows Subsystem for Linux (WSL) is a compatibility layer developed by Microsoft that allows you to run a Linux environment directly on your Windows machine.

It's for developers who need to work with Linux tools and environments while still using Windows as their primary operating system. It's a great way to learn and experiment with Linux without having to set up a separate machine or dual-boot your system.

* You can run Linux command-line tools, utilities, and applications directly on Windows, without the overhead of a traditional virtual machine.

* You get a full Linux file system where you can store, access, and manage files just like you would on a native Linux machine.

* WSL provides a Bash shell, giving you access to the powerful command-line interface.

* You can install different Linux distributions like Ubuntu, Debian, Fedora, and others within WSL.

* You can access your Windows files from within WSL, and even run some Windows applications from the Linux environment.

## Key Features

* **Unified File System Access:** You can easily access files across both operating systems:

  * **From WSL to Windows:** Your Windows drives (like C:) are automatically mounted inside your Linux distribution under the `/mnt/` directory. For example, your C: drive is accessible at `/mnt/c/`.

  * **From Windows to WSL:** You can access your Linux distribution's file directly from Windows File Explorer. Simply type `\\wsl$` into the address bar to see a list of all your installed distributions and browse their file systems as if they were network drives.

* **Run Windows and Linux Tools Together:** WSL allows for seamless interoperability between command-line tools:

  * You can call Windows executables (like `notepad.exe` or `powershell.exe`) directly from your Linux shell.

  * Conversely, you can run any Linux command (like `grep` or `awk`) from a Windows PowerShell or Command Prompt by prefixing it with `wsl`, for example: `wsl ls -la`.

* **Support for Linux GUI Applications (WSLg)**

   WSL 2 has the built-in support for graphical Linux applications through a feature called **WSLg**. Without any manual setup, you can install and run Linux GUI apps (like GIMP, Gedit, or even full-fledged IDEs like IntelliJ IDEA) and have them appear on your Windows desktop just like native Windows applications. They can be launched from the Start Menu, pinned to the taskbar, and support copy/paste with Windows apps.

## Version History

### WSL 1: The Translation Layer

The original version, WSL 1, works by translating Linux system calls into Windows system calls in real-time. It acts as a compatibility layer that tricks Linux binaries into thinking they are running on a native Linux kernel.

* **Strength:** Because it directly uses the Windows kernel and network stack, it offers very fast file access between the Windows and Linux filesystems.

* **Weakness:** This translation layer is not perfect. Any Linux tool that requires a specific, low-level Linux kernel feature that hasn't been translated won't work. This means it lacks full system call compatibility, which can be a problem for complex applications like Docker.

### WSL 2: The Virtualization Approach

WSL 2 represents a fundamental shift in architecture. It uses lightweight virtualization technology (a slimmed-down Hyper-V feature) to run a full, real Linux kernel inside a managed virtual machine (VM).

* **Strength:** With a real Linux kernel, WSL 2 offers 100% system call compatibility. This means applications like Docker and other complex development tools run flawlessly. It also boasts significantly faster file I/O performance *within* the Linux filesystem, which is crucial for tasks like git clone, npm install, and working with large codebases.

* **Weakness:** Accessing files across operating systems (e.g., a Linux app editing a file on the Windows C: drive) is slower than in WSL 1. For this reason, it is highly recommended to store your project files within the Linux filesystem for the best performance.

## Who Should Use WSL?

WSL is primarily aimed at developers and IT professionals, but its ease of use makes it valuable for anyone needing Linux tools on Windows. The most common users are:

* **Web Developers:** Who can run a Node.js, Python, or Ruby backend in a native Linux environment while using Visual Studio Code on Windows for editing.

* **DevOps and Cloud Engineers:** Who use tools like Docker, Kubernetes (via [Docker Desktop](https://www.docker.com/products/docker-desktop/)), Ansible, and Terraform, which often have better support and performance in a Linux environment.

* **Data Scientists and Academics:** Who rely on Linux-specific software and libraries for computation and data analysis.

* **System Administrators:** Who need to manage remote Linux servers using tools like SSH, Bash scripting, and other command-line utilities.

In essence, WSL eliminates the need to choose between Windows and Linux. It provides a robust, integrated, and high-performance environment to run the tools you need, regardless of the operating system they were originally designed for.

## Tutorials

### How to View Hidden Files

#### Using Command Line

Use the `ls -a` command to show all files, including hidden ones (those that start with a dot).

For a more detailed view, use `ls -la`, which provides a long listing format with file permissions, ownership, size, and modification time.

#### Using the File Explorer

In Windows File Explorer, navigate to your WSL distribution's file system by typing `\\wsl$` in the File Explorer address bar.

### How to access service running in WSL from another device on your LAN

Recent versions of WSL on Windows 11 (build 22H2 or newer) include a feature called "mirrored networking", making the WSL network a mirror of your Windows network. This means any ports you open in WSL are automatically accessible on your LAN, provided your firewall allows it.

1. Find or create WSL configuration file in your Windows user profile folder. You can create/open it directly from PowerShell:

   ```powershell
   notepad "$env:USERPROFILE\.wslconfig"
   ```

2. Add the following lines to the file. If the file or the `[wsl2]` section already exists, just add the `networkingMode` line:

   ```ini
   [wsl2]
   networkingMode=mirrored
   ```

3. Save the file and shut down WSL completely from a PowerShell or Command Prompt window:

   ```powershell
   wsl --shutdown
   ```

4. Restart your WSL distribution.

5. Create a firewall rule on your Windows host to allow incoming traffic on the port your application uses. Run the following command, replacing `3000` with the port your WSL service is running on:

   ```powershell
   New-NetFirewallRule -DisplayName "WSL LAN Access" -Direction Inbound -Action Allow -Protocol TCP -LocalPort 3000
   ```

6. You can now access your WSL service from any other device on your LAN using your Windows machine's IP address (e.g., `http://<Your_Windows_IP>:3000`).