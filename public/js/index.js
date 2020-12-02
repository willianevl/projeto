
var nome = "Willian Evaldt Guimarães";
var cargo = "CTO - Growdev";

var nomehtml = document.getElementById("nome-no-html");
var cargohtml = document.getElementById("cargo-no-html");
var texto1 = document.getElementById("texto-1");
var texto2 = document.getElementById("texto-2");

function ColocarNomeNoHtml(nome){
    nomehtml.innerHTML = nome;
}

function ColocarCargoNoHtml(cargo){
    cargohtml.innerHTML = cargo;
}

function ClickNoProjetos(){
    console.log("Clicou no botão projetos");
    texto2.style.display = "block";
    texto1.style.display = "none";
}

function ClickNoSobre(){
    console.log("Clicou no botão sobre");
    texto2.style.display = "none";
    texto1.style.display = "block";
}

function LogarNome(){
    console.log(nome);
}

ColocarNomeNoHtml(nome);
ColocarCargoNoHtml(cargo);