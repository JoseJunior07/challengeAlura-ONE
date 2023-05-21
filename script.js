let encryptionKeys = {
    'e': 'enter',
        'i': 'imes',
        'a': 'ai',
        'o': 'ober',
        'u': 'ufat'
      };
      
      function encryptText(text) {
        let encryptedText = '';
        for (let i = 0; i < text.length; i++) {
          let char = text[i];
          if (encryptionKeys.hasOwnProperty(char)) {
            encryptedText += encryptionKeys[char];
          } else {
            encryptedText += char;
          }
        }
        return encryptedText;
      }
      
      function decryptText(text) {
        let decryptedText = '';
        for (let i = 0; i < text.length; i++) {
          let char = text[i];
          let decryptedChar = Object.keys(encryptionKeys).find(function(key) {
            return encryptionKeys[key] === char;
          });
          decryptedText += decryptedChar ? decryptedChar : char;
        }
        return decryptedText;
      }
      
      document.getElementById('encrypt-button').addEventListener('click', function() {
        let inputText = document.getElementById('input-text').value;
        let encryptedText = encryptText(inputText);
        document.getElementById('encrypted-text').value = encryptedText;
      });
      
      document.getElementById('decrypt-button').addEventListener('click', function() {
        let inputText = document.getElementById('input-text').value;
        let decryptedText = decryptText(inputText);
        document.getElementById('encrypted-text').value = decryptedText;
      });
      
      document.getElementById('copy-button').addEventListener('click', function() {
        let encryptedText = document.getElementById('encrypted-text');
        encryptedText.select();
        document.execCommand('copy');
        alert('Texto copiado!');
      });