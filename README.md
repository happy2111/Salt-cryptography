# 🔐 Salt Encryptor & Decryptor (JavaScript)

This is a lightweight JavaScript-based tool for encrypting and decrypting text using a custom salt and ASCII shifting mechanism. It is designed for educational or demonstration purposes and runs entirely in the browser using standard HTML and JavaScript.

## 🚀 Features

* Random salt generation and insertion into the original text.
* ASCII value shifting for additional obfuscation.
* Self-contained format with encoded metadata (salt position, length, and shift amount).
* Full encryption and decryption using only JavaScript (no external libraries).
* Easy integration with HTML forms via DOM manipulation.

## 🧠 How It Works

### Encryption Process

1. A random string (salt) of 3 to 10 characters is generated from numbers, uppercase, and lowercase letters.
2. The salt is inserted at a random position in the input text.
3. Each character (original + salt) is converted to its ASCII value and increased by a random number from 1 to 9.
4. The final encrypted string is built as follows:

   ```
   [2-digit salt position][2-digit salt length][encoded text][1-digit shift]
   ```

   Example:

   ```
   0508Nkrru&%tw~|q|ywu8
   ```

### Decryption Process

1. The last digit of the string tells how much the ASCII values were shifted.
2. The first four digits tell the salt position and salt length.
3. The text is decoded by reversing the shift.
4. The salt is removed using the known position and length, revealing the original text.

## 📂 HTML Integration

This script connects to the following HTML elements:

* shiftInput: text input for encryption
* shifrOutput: output field for encrypted text
* deshiftInput: text input for decryption
* deshifrOutput: output field for decrypted text
* form1: encryption form
* form2: decryption form

Ensure your HTML has matching IDs and class names for this to function correctly.

## 💡 Example

Input:

```
sentence to test the script
```

Output (encrypted):

```
0507Vr{~yx}muvtuvnvv{t9
```

Decrypted:

```
sentence to test the script
```

## ⚠️ Disclaimer

This tool is not intended for use in production or real security scenarios. The encryption is purely for illustrative or obfuscation purposes and is not cryptographically secure.

---

Would you like me to generate a downloadable README.md file or help you create a sample HTML page for testing?
