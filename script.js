function generatePassword() {
    const length = document.getElementById('passwordLength').value;
    const includeUppercase = document.getElementById('includeUppercase').checked;
    const includeLowercase = document.getElementById('includeLowercase').checked;
    const includeNumbers = document.getElementById('includeNumbers').checked;
    const includeSymbols = document.getElementById('includeSymbols').checked;

    const uppercase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const lowercase = 'abcdefghijklmnopqrstuvwxyz';
    const numbers = '0123456789';
    const symbols = '!@#$%^&*()_+[]{}|;:,.<>?';

    let characterSet = '';
    if (includeUppercase) characterSet += uppercase;
    if (includeLowercase) characterSet += lowercase;
    if (includeNumbers) characterSet += numbers;
    if (includeSymbols) characterSet += symbols;

    if (characterSet === '') {
        alert('Selecione pelo menos uma opção para gerar a senha.');
        return;
    }

    let password = '';
    for (let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * characterSet.length);
        password += characterSet[randomIndex];
    }

    document.getElementById('passwordOutput').value = password;
}

function copyPassword() {
    const passwordOutput = document.getElementById('passwordOutput');
    passwordOutput.select();
    document.execCommand('copy');
    alert('Senha copiada para a área de transferência!');
}
