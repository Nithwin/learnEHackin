# 🔍 Lesson 3.2: Searching for Secrets (find & grep)

In a real hacking scenario, you might gain access to a server and find thousands of files. You can't read them all. You need to find the "Gold" (passwords, keys, config files) fast.

---

## 🛠️ 1. The `grep` Command
`grep` stands for "Global Regular Expression Print". It searches for text patterns inside files.

**Basic Usage:**
`grep "search_term" filename`

**Hacker Cheat Sheet:**
| Command | What it does |
| :--- | :--- |
| `grep -i "Admin" file` | **Case-Insensitive**: Finds "admin", "Admin", and "ADMIN". |
| `grep -r "password" .` | **Recursive**: Searches every file in the current folder and subfolders. |
| `grep -n "secret" file` | **Line Numbers**: Shows exactly which line the secret is on. |
| `grep -v "info" file` | **Invert**: Shows everything EXCEPT lines containing "info" (great for cleaning logs). |

---

## 📂 2. The `find` Command
If you don't know *which* file has the secret, but you know the *name* of the file:
`find . -name "*.conf"` (Finds all files ending in .conf in the current directory).

---

## 🎯 3. Practical Task: The Leaked Credential
A lazy developer left a "Debug Key" in a system log file. 

**Your Mission:**
1.  Locate the file `system.log` in this directory.
2.  Use `grep` to find the string "password" or "Key".
3.  Report the secret key found.

**Command to try:**
```bash
grep -i "key" system.log
```

---

> [!TIP]
> **Pro Hacker Move:**
> You can "pipe" commands together. 
> `ls -la | grep "sh"`
> This takes the list of files and ONLY shows you the ones containing "sh" (like `.bashrc` or `.ssh`).
