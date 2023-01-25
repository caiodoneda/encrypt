
### CLI program to compress and encrypt a file using a password, and then decrypt and uncompress that file using that same password. Entirely in Node with no external dependencies.

--------------

### Encrypt Steps

- Read file.
- Compress.
- Encrypt.
- Append Init Vector used in the encryption process (which is needed for decryption later).
- Write the encrypted data to a file.


### Decrypt Steps

- Read file.
- Pull the Init Vector.
- Decrypt.
- Decompress.
- Write the plaintext to a file.


### How to use

Encrypt: `node index.js encrypt ./sample-file.txt myPassword`

Decrypt: `node index.js decrypt ./sample-file.txt.enc myPassword`