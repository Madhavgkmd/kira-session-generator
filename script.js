const API =
"https://kira-session-generator-api.onrender.com";

const result =
document.getElementById("result");

document
.getElementById("pairBtn")
.onclick = async () => {

    const number =
    document
    .getElementById("number")
    .value
    .trim();

    if(!number){
        result.innerHTML =
        "❌ Enter a phone number";
        return;
    }

    result.innerHTML =
    "⏳ Generating Pair Code...";

    try{

        const res =
        await fetch(
            `${API}/pair`,
            {
                method:"POST",
                headers:{
                    "Content-Type":
                    "application/json"
                },
                body:JSON.stringify({
                    number
                })
            }
        );

        const data =
        await res.json();

        result.innerHTML =
        `
        🔑 Pair Code:<br><br>
        <b>${data.code}</b>
        `;

    }catch{

        result.innerHTML =
        "❌ Failed";
    }
};