# 🗺️ Lesson 2.2: Nmap Mastery (The King of Scanning)

Nmap (Network Mapper) is the first tool a hacker uses when they want to attack a network. It tells you:
1.  **Who is alive?** (Host Discovery)
2.  **What's open?** (Port Scanning)
3.  **What's running?** (Service/Version Detection)
4.  **What's the OS?** (Operating System Fingerprinting)

---

## 🛠️ 1. Installation
If you are on Ubuntu/Debian/Kali, you likely need to install it:
`sudo apt update && sudo apt install nmap`

---

## 🚦 2. Common Nmap Scans (The "Cheat Sheet")

| Command | Action | Why use it? |
| :--- | :--- | :--- |
| `nmap <IP>` | **Standard Scan** | Scans the top 1000 most common ports. Fast but loud. |
| `nmap -sS <IP>` | **Stealth (SYN) Scan** | Doesn't complete the connection. Harder to detect by logs. |
| `nmap -sV <IP>` | **Version Detection** | Tells you if it's "Apache 2.4.41" or "Nginx 1.18". |
| `nmap -A <IP>` | **Aggressive Scan** | Does OS detection, version detection, and runs scripts. |
| `nmap -p- <IP>` | **All Ports** | Scans all 65,535 ports (takes a long time!). |

---

## 🎯 3. Practical Exercise: Scan Your Local Machine
Once installed, try to find our Node.js server!

**Command:**
```bash
nmap -p 8000 localhost
```

**What to look for:**
You should see:
`8000/tcp open  http-alt`

Now try to find the **Service Version**:
```bash
nmap -sV -p 8000 localhost
```
*It should try to guess that it's an Node.js Express server.*

---

## 🕵️‍♂️ 4. The "Hacker's Strategy" (Reconnaissance)
Hackers don't just scan for fun. They use Nmap to find **Outdated Services**.
- If Nmap says `Port 21 (FTP) is open (vsftpd 2.3.4)`, a hacker knows that specific version has a "Backdoor" vulnerability and will attack it immediately!

---

> [!WARNING]
> **Legal Note:** Never scan an IP address that you don't own. Professional companies use "Bug Bounty" programs to give you permission to scan their IP ranges. Use `scanme.nmap.org` if you want to test a real external site (it's legally allowed).
