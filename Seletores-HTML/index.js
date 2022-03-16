function Get(){
    var texto = document.getElementsByTagName("h1")[0];
    alert(texto.innerHTML);
}

function Exibir(){
    var texto = document.getElementsByClassName("texto")[2];
    alert(texto.innerHTML);
}

function Alterar(){
    var div = document.getElementsByTagName("div")[0];
    div.style.backgroundColor = "green";
}
