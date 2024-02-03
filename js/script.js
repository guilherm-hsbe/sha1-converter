// Função para calcular o hash SHA-1
function calculateSHA1(text) {
    const encoder = new TextEncoder('utf-8');
    const data = encoder.encode(text);
    return crypto.subtle.digest('SHA-1', data);
}

// Função para converter o array de bytes do hash para uma string hexadecimal
function bytesToHex(buffer) {
    return Array.from(new Uint8Array(buffer), byte => byte.toString(16).padStart(2, '0')).join('');
}

// Função para atualizar a div com o resultado do hash em tempo real
function updateHashResult() {
    const inputText = document.getElementById('inputText').value;
    calculateSHA1(inputText).then(hashBuffer => {
        const hashHex = bytesToHex(hashBuffer);
        document.getElementById('hashOutput').innerText = hashHex;
    });
}

// Adiciona um ouvinte de eventos para o campo de entrada
document.getElementById('inputText').addEventListener('input', updateHashResult);