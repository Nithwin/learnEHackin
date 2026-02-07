# 🛠️ Lesson 2.5: HTTP Headers & Request Manipulation

If the URL is the "Address" on an envelope, **HTTP Headers** are the "Special Instructions" written on the back. Hackers manipulate these to bypass security filters.

---

## 🏗️ 1. What are HTTP Headers?
When your browser asks for a page, it sends a lot of extra info:
- `User-Agent`: Tells the server if you are on Chrome, Firefox, or a Phone.
- `Cookie`: Tells the server who you are (your session).
- `Referer`: Tells the server which website you came from.

---

## 🎯 2. Practical Exercise: Spoofing the Browser
I have started a new lab (`headers_lab.js`). It has a private vault that **only** allows a special browser called `SecureBox-Browser`.

**Try visiting it normally:**
`curl -I http://localhost:8000/vault`
*You will get a "403 Forbidden" because you are using curl.*

**The Attack: Spooofing the User-Agent**
We can tell the server we are using the "SecureBox-Browser" by manually setting the header.

**Command:**
```bash
curl -H "User-Agent: SecureBox-Browser" http://localhost:8000/vault
```

---

## 🔐 3. Beyond the Basics: Custom Headers
Some developers try to secure "internal" APIs by checking for a secret header that only their apps know.

**Your Mission:**
There is an admin panel at `http://localhost:8000/admin-panel`. It requires a header called `X-Admin-Key` with the value `super-secret-123`.

**Can you craft a curl command to get into the admin panel?**

---

## 🕵️‍♂️ 4. The Professional View: Burp Suite
In the real world, hackers don't use `curl` for everything. They use **Burp Suite**.
1.  **Intercept**: Burp catches the request before it leaves your computer.
2.  **Modify**: You change the headers or cookies in a nice GUI.
3.  **Forward**: You send the modified (hacked) request to the server.

> [!TIP]
> **Defense:**
> Never trust headers for security! A user has total control over everything their browser sends to you.
