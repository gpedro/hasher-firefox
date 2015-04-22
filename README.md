# Hasher (Firefox extension)
Firefox fork of the [s12v/hasher](https://github.com/s12v/hasher)

Firefox Addons:  
comming soon...

Standalone version for other browsers:
http://s12v.github.com/hasher/

This extension is used to compute cryptographic hashes and do common conversions. It might be useful for programmers and system administrators. It's entirely implemented in JavaScript, all calculations are performed on client side, so it's safe.

* **Hash**: MD5, SHA-1, SHA-2 (224, 256, 384, 512), RIPEMD-160, MD4, Whirpool
* **HMAC:** MD5, SHA-1, SHA-2 (224, 256, 384, 512), RIPEMD-160, MD4
* **CRC:** CRC-8, CRC-16, FCS-16, FCS/CRC-32
* **Cipher** _(interoperable with OpenSSL)_: AES-256, DES, Triple DES, Rabbit, RC4, RC4Drop. CBC/Pkcs7 is used.
* **Net:** Subnet calculator, Ip ↔ Dec, Ip → Bin, Ip → Hex
* **Time:** Unix ↔ Datetime, Unix ↔ RFC-1123, Unix ↔ ISO 8601
* **Numbers:** Dec ↔ Hex, Dec ↔ Bin, Dec ↔ Roman
* **Strings:** ASCII ↔ Hex, UTF-8 ↔ Hex, UTF-16 ↔ Hex
* **Encode:** Base64, ROT-13, JavaScript encodeURI(), encodeURIComponent(), HTML special chars encode/decode
