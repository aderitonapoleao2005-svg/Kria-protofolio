// prompt("where are you from");
// confirm("Really")

//loop for

//funntion

const butaun=document.getElementById("mode");
butaun.addEventListener("click",()=>{
  if(document.body.classList.toggle("naroman")){
   document.getElementById("mode").innerHTML="Dark";
  }else{
    document.getElementById("mode").innerHTML="Light";
    
  }
})

function fotiOras() {
  return new Date();
}

function formatu(valor) {
  return valor < 10 ? "0" + valor : valor;
}


function realtime() {
  const oras = fotiOras().getHours();
  const minutu = fotiOras().getMinutes();
  const segundus = fotiOras().getSeconds();

  let rezultadu =
    formatu(oras) + ":" + formatu(minutu) + ":" + formatu(segundus);
  document.getElementById("oras").innerHTML = rezultadu;
}
setInterval(realtime, 1000);

let listaloron = [
  "Domingu",
  "segunda-Feira",
  "Tersa-Feira",
  "Kuarta-Feira",
  "Kinta-Feira",
  "Sesta-Feira",
  "Sabadu",
];
let listfulan = [
  "Janeiru",
  "Fevereiru",
  "Marsu",
  "Abril",
  "Maiu",
  "Junu",
  "Jullu",
  "Agustu",
  "Setembru",
  "Outubru",
  "novembru",
  "Dezembru",
];

const loron = listaloron[fotiOras().getDay()];
const dia = fotiOras().getDate();
const fulan = listfulan[fotiOras().getMonth()];
const tinan = fotiOras().getFullYear();
let completeDate = loron + " " + formatu(dia) + " " + fulan + " " + tinan;
document.getElementById("data").innerHTML = completeDate;setInterval(realtime)

let time = fotiOras().getHours();
let Text = "";
if (time < 12) {
  Text = "Good Morning";
} else if (time < 17) {
  Text = "Good Afternoon";
} else {
  Text = "Good Evening";
}
document.getElementById("komprimentus").innerHTML = Text;

const titulu = document.getElementById("name");
function truka() {
  titulu.textContent = "I'm just It student";
}
titulu.addEventListener("mouseover", truka);

function filaFali() {
  titulu.textContent = "Hello!,I'm Web developer";
}
titulu.addEventListener("mouseout", filaFali);

let portofolio = [
  { naran: "Website Bee Diak", status: "Ideia deit seidauk dezenvolve" },
  { naran: "Calculator", status: "Konsege dezenvolve ona" },
  { naran: "TodoList", status: "Remata ona", link: "to-do-list/index.html"},
];

const listProjects = document.getElementById("lista-projetu");
portofolio.forEach((item) => {
  const card = document.createElement("div");
  card.textContent = `${item.naran} - ${item.status}`;
  if(item.link){
    const a=document.createElement("a");
    a.href=item.link;
    a.textContent=">Hare"
    card.append(a);
  }
  listProjects.append(card);
  card.classList.add("projetu-box");
  card.addEventListener("mouseover",()=>{
    card.classList.add("aktivu")
  })
  card.addEventListener("mouseout",()=>{
    card.classList.remove("aktivu")
  })
});

const form=document.getElementById("form-contact");
const avizu=document.getElementById("avizu");

form.addEventListener("submit",(e)=>{
e.preventDefault();
const naran=document.getElementById("naran").value.trim();
const mensagen=document.getElementById("mensagen").value.trim();

if(naran===""||mensagen===""){
avizu.textContent="favor prense naran no Mensagen!"
}
else{
avizu.textContent="Susesu Manda Mensagen!";form.reset();}

});