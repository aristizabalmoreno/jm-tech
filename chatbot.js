
document.addEventListener('DOMContentLoaded',()=>{
 const toggle=document.getElementById('chatbot-toggle');
 const box=document.getElementById('chatbot-box');
 const msgs=document.getElementById('chatbot-messages');
 toggle.onclick=()=>box.style.display=box.style.display==='flex'?'none':'flex';
});
function cbSend(){
 const inp=document.getElementById('cb-input');
 const txt=inp.value.trim();
 if(!txt) return;
 addMsg('Tú',txt);
 inp.value='';
 respond(txt.toLowerCase());
}
function addMsg(sender,txt){
 const msgs=document.getElementById('chatbot-messages');
 msgs.innerHTML+=`<div><strong>${sender}:</strong> ${txt}</div>`;
 msgs.scrollTop=msgs.scrollHeight;
}
function respond(msg){
 let resp='Lo siento, solo respondo temas de reciclaje y tecnología verde.';
 if(msg.includes('reciclaje')) resp='Reciclar RAEE evita contaminación y recupera metales valiosos.';
 else if(msg.includes('co2')||msg.includes('huella')) resp='Reparar un portátil evita ~200 kg de CO2 frente a fabricar uno nuevo.';
 else if(msg.includes('puntos')) resp='Ganas 100 puntos por reparación y 10 por kg de residuo. Canjea a 500, 1000 y 1500.';
 setTimeout(()=>addMsg('Bot',resp),400);
}
