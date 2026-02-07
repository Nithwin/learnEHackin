# 🕵️‍♂️ Lesson 2.4: Web Path Fuzzing (Directory Bruteforcing)

Finding the server with **Nmap** is just the start. Now, we need to find what's **inside** the server. Public links only show you 10% of a website. Hackers find the other 90%.

---

## 🛠️ 1. What is Fuzzing?
Fuzzing (or Directory Bruteforcing) is a technique where we take a list of thousands of common names (like `/admin`, `/login`, `/backup`, `/.git`) and try them all on the server to see which ones exist (HTTP 200).

---

## 🚦 2. Common Tools
- **Dirb**: A simple, pre-installed tool on Kali.
- **Gobuster**: Faster, written in Go.
- **FFUF (Fuzz Faster U Fool)**: The professional standard.

---

## 🎯 3. Practical Exercise: Finding the Hidden Admin Panel
I have started a new lab (`fuzzing_lab.js`) on Port 8000. It has 3 hidden secrets.

**Your Goal:** Find the hidden `/admin` page and the leaked `.env` file.

**Command:**
```bash
dirb http://localhost:8000
```

**What Dirb is doing:**
It is using a default "wordlist" (usually at `/usr/share/dirb/wordlists/common.txt`) and trying every word as a URL. 

---

## 🕵️‍♂️ 4. Why this is dangerous
If a developer leaves a backup of their config file (e.g., `config.php.bak`) or a `.git` folder on their server, a hacker can use fuzzing to find it and steal database passwords or the entire source code.

---

> [!TIP]
> **Defense:**
> 1.  Use **Web Application Firewalls (WAF)** to block scanners.
> 2.  Use **Custom Error Pages** (don't show the server type).
> 3.  Never store backups or `.env` files in the public web folder!
