const API =
"https://your-railway-url.up.railway.app";

document
.getElementById("pairBtn")
.onclick = async () => {

const res =
await fetch(`${API}/pair`);

const data =
await res.json();

document
.getElementById("result")
.innerHTML =
data.code;
};