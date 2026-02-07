# 🎯 Lesson 2.3: Reconnaissance Lab (Practical Project)

In this project, we have simulated a real server that is running multiple "hidden" services. Your goal is to use Nmap to find them, identify what they are, and guess their versions.

---

## 🛠️ Step 1: Start the Lab
I have started a script called `recon_lab.js`. It has opened several ports on your machine.

---

## 🕵️‍♂️ Step 2: The Initial Scan
Run a basic scan on your machine to see what's active.
```bash
nmap localhost
```

---

## 🔍 Step 3: Service Identification
One of those ports is "Target 1". Let's say it's on Port 9000. Use Nmap to find out MORE about it:
```bash
nmap -p 9000 -sV localhost
```

**Hacker Analysis:**
- If Nmap says `Legacy API v1.0.2`, a hacker would search Google or `searchsploit` for: *"Legacy API 1.0.2 exploit"*.
- Information is the weapon. The more Nmap tells you, the easier the hack.

---

## 🚀 Step 4: The Aggressive Scan
Try the "Hacker's Favorite" command on one of the found ports:
```bash
nmap -p 3000 -A localhost
```
*(Warning: This is loud and would be caught by a Firewall!)*

---

## 📖 Your Mission
1.  **Find all open ports** on `localhost`.
2.  **Identify the version** of the service on Port 9000.
3.  **Find the Title** of the webpage running on Port 3000 (hint: use `-A` or `--script http-title`).

**Next Topic:** We will learn about **HTTP Headers** and how to manipulate them to trick a server.
