const API =
"https://your-railway-url.up.railway.app";

const result =
document.getElementById("result");

document
.getElementById("pairBtn")
.onclick = async () => {

result.innerHTML =
"⏳ Generating Pair Code...";

try{

const res =
await fetch(`${API}/pair`);

const data =
await res.json();

result.innerHTML = `
<h3>🔑 Pair Code</h3>
<br>
<b>${data.code}</b>
`;

}catch{

result.innerHTML =
"❌ Failed to generate pair code";

}

};

document
.getElementById("qrBtn")
.onclick = async () => {

result.innerHTML =
"⏳ Generating QR...";

try{

const res =
await fetch(`${API}/qr`);

const data =
await res.json();

result.innerHTML = `
<img
src="${data.qr}"
width="250"
style="border-radius:15px;"
>
`;

}catch{

result.innerHTML =
"❌ Failed to generate QR";

}

};

const cursor =
document.querySelector(".cursor");

document.addEventListener(
"mousemove",
(e)=>{

cursor.style.left =
e.clientX + "px";

cursor.style.top =
e.clientY + "px";

}
);

particlesJS("particles-js",{

particles:{

number:{
value:70
},

color:{
value:"#9333ea"
},

shape:{
type:"circle"
},

opacity:{
value:0.4
},

size:{
value:3
},

move:{
enable:true,
speed:1
}

}

});