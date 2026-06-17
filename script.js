document.addEventListener('DOMContentLoaded', () => {
    const API = "https://kira-session-generator-api.onrender.com";
    const numberInput = document.getElementById('number');
    const pairBtn = document.getElementById('pairBtn');
    const qrBtn = document.getElementById('qrBtn');
    const result = document.getElementById('result');

    if (pairBtn) {
        pairBtn.addEventListener('click', async () => {
            const num = numberInput ? numberInput.value.trim().replace(/[^0-9]/g, '') : '';
            
            if (!num || num.length < 10) {
                return result.innerHTML = '❌ Please enter a valid WhatsApp number.';
            }

            result.innerHTML = '⏳ Generating Pair Code... Please wait (Server might be waking up)...';

            try {
                // ഇവിടെയാണ് ഒറിജിനൽ എഞ്ചിൻ വർക്ക് ആകുന്നത്!
                const res = await fetch(`${API}/pair?phone=${num}`);
                const data = await res.json();

                if (data.code) {
                    result.innerHTML = `
                        🔑 Pair Code:<br><br>
                        <b style="font-size: 26px; letter-spacing: 5px; color: #00ff00; background: rgba(0,0,0,0.5); padding: 10px; border-radius: 8px; display: inline-block; margin-top: 10px;">
                            ${data.code}
                        </b>
                        <br><br><small>Enter this code in your WhatsApp Linked Devices.</small>
                    `;
                } else if (data.error) {
                    result.innerHTML = `❌ Error: ${data.error}`;
                }
            } catch (err) {
                console.error(err);
                result.innerHTML = "❌ Failed to connect to server. Try again!";
            }
        });
    }

    if (qrBtn) {
        qrBtn.addEventListener('click', () => {
            result.innerHTML = '⏳ Loading QR Code... Please wait...';
            
            // QR കോഡ് Render ബാക്ക്-എൻഡിൽ നിന്നും ഇമേജ് ആയി ലോഡ് ചെയ്യുന്നു
            setTimeout(() => {
                result.innerHTML = `
                    📱 Scan this QR Code in WhatsApp:<br><br>
                    <img src="${API}/qr" alt="QR Code" style="width: 220px; border-radius: 10px; margin-top: 15px; background: white; padding: 10px; box-shadow: 0px 0px 15px rgba(255,255,255,0.2);" />
                    <br><br><small>Scan within 20 seconds. Click again to reload if expired.</small>
                `;
            }, 500); // UI ഗ്ലിച്ച് ഒഴിവാക്കാൻ ഒരു ചെറിയ ഡിലേ
        });
    }
});