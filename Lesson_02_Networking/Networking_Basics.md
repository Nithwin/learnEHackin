# 📡 Lesson 2: Computer Networking (CN) for Hackers

To hack a network, you must first understand how data moves through it. Networking is the "nervous system" of the internet.

---

## 🏗️ 1. The OSI Model (7 Layers)
The OSI (Open Systems Interconnection) model is a map of how data travels from one computer to another. Hackers target different layers!

| Layer | Name | What it does | Hacker's View |
| :--- | :--- | :--- | :--- |
| **7** | **Application** | What you see (HTTP, DNS) | Web Hacking (XSS, SQLi) |
| **6** | **Presentation** | Encryption (SSL/TLS) | SSL Stripping |
| **5** | **Session** | Connections (APIs) | Session Hijacking |
| **4** | **Transport** | Moving data (TCP/UDP) | Port Scanning |
| **3** | **Network** | Routing (IP Addresses) | IP Spoofing |
| **2** | **Data Link** | Local Hardware (MAC) | ARP Poisoning |
| **1** | **Physical** | Cables, Wi-Fi, Electrical | Hardware Hacking |

---

## 🆔 2. Identity on a Network
- **IP Address (Network Layer):** Your "mailing address" on the internet (e.g., `142.250.190.46`).
- **MAC Address (Data Link Layer):** Your device's "Physical ID", burned into the hardware.
- **Port Number (Transport Layer):** A specific "doorway" on a server.
    - `80`: HTTP (Web)
    - `443`: HTTPS (Secure Web)
    - `22`: SSH (Remote Control)
    - `53`: DNS (Address Book)

---

## 🛠️ 3. Practical Tool: Nmap (Network Mapper)
Nmap is THE tool for "Enumeration"—finding out which doors (ports) are open on a target.

**Try this on your local machine:**
```bash
nmap localhost
```

---

## 🚦 Next Step: The "Secure Browser" Connection
Wait, why did we talk about networking if you want to make a **Secure Browser**?
Because a browser is just a networking tool! To make it secure, you have to:
1.  **Enforce Layer 6 (Presentation):** Only allow HTTPS (SSL/TLS).
2.  **Filter Layer 7 (Application):** Block malicious DNS requests or scripts.

> [!NOTE]
> **Practical Homework:** Run `ifconfig` (or `ip addr`) in your terminal to see your local IP and MAC address.
