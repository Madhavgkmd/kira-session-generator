// script.js — page behavior for KIRA X MD session generator

document.addEventListener('DOMContentLoaded', () => {
    const numberInput = document.getElementById('number');
    const pairBtn = document.getElementById('pairBtn');
    const qrBtn = document.getElementById('qrBtn');
    const result = document.getElementById('result');

    function showMessage(msg) {
        if (result) result.textContent = msg;
    }

    function validateNumber(num) {
        return /^\d{10,15}$/.test(num);
    }

    if (pairBtn) {
        pairBtn.addEventListener('click', () => {
            const num = numberInput ? numberInput.value.trim() : '';
            if (!validateNumber(num)) return showMessage('Please enter a valid number (digits only).');
            // placeholder: generate a fake pair code
            const code = 'PAIR-' + Math.random().toString(36).slice(2, 10).toUpperCase();
            showMessage(`Pair code for ${num}: ${code}`);
        });
    }

    if (qrBtn) {
        qrBtn.addEventListener('click', () => {
            const num = numberInput ? numberInput.value.trim() : '';
            if (!validateNumber(num)) return showMessage('Please enter a valid number (digits only).');
            // placeholder: show a fake QR data string
            const qrData = 'https://wa.me/' + num + '?text=KIRA_SESSION_' + Math.random().toString(36).slice(2,8).toUpperCase();
            showMessage(`QR data for ${num}: ${qrData}`);
        });
    }
});