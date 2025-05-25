function marcador(id){
    let contador = document.getElementById(id);
    let marcador = parseInt(contador.innerText);
    marcador++;
    contador.innerText = marcador;
}

function botonSubs(elem){
    let box= document.getElementById(elem);
    box.style.display="none";
    setTimeout(function() {
        alert("The Nunjas have won!");
    }, 13000);
}