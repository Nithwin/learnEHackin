# 🐧 Lesson 3: Linux Command Line Mastery

Every professional hacker is a Linux power user. Why? Because Linux gives you total control over the hardware, the network, and the OS.

---

## 📂 1. The Linux File System
Unlike Windows (`C:\`), Linux starts at the **ROOT (`/`)**.

| Directory | What's in it? | Hacker's Interest |
| :--- | :--- | :--- |
| `/etc` | Config files | Finding passwords or misconfigured services. |
| `/home` | User data | Stealing private documents and SSH keys. |
| `/bin` | Basic commands | Finding tools like `nc` or `nmap`. |
| `/tmp` | Temporary files | Staging malware (it's often writable by anyone). |
| `/var/log` | System Logs | Clearing your tracks so nobody knows you were there. |

---

## 🔐 2. Permissions: The "RWX" Code
Every file has three types of permissions:
- **R**ead (4)
- **W**rite (2)
- **E**xecute (1)

They apply to three people: **Owner**, **Group**, and **Others**.

**The Command:** `ls -l`
Example: `-rwxr-xr-x`
- `rwx`: Owner can do everything.
- `r-x`: Others can only read and run it.

**Hacker Trick (Privilege Escalation):**
A hacker looks for files that have the "SUID" bit set. This allows a normal user to run a file with **ROOT** (Admin) privileges. If that file is buggy, the hacker becomes Root!

---

## 🎯 3. Practical Exercise: The "Restricted" Folder
I am going to create a folder structure with different permissions. Your job is to find a way to read a secret file that is "hidden" in a folder you don't own.

**Next Step:** I'll set up the Linux Lab.
