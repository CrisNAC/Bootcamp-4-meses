function editName(newName, nameZone){
    let name = document.querySelector(newName);
    let oldName = document.querySelector(nameZone);
    name.style.display="block";
    name.addEventListener('keydown', function(event) {
        if (event.key === 'Enter') {
            oldName.innerText=name.value;
            name.value="";
            name.style.display="none";
        }
    });
}

function aceptar(id, solicitud, contacto){
    let user = document.querySelector(id);
    user.remove();
    let contSol = document.querySelector(solicitud);
    let numSol = parseInt(contSol.innerText);
    numSol++;
    contSol.innerText = numSol;
    let contContacto = document.querySelector(contacto);
    let numContacto = parseInt(contContacto.innerText);
    numContacto++;
    contContacto.innerText = numContacto;
    
}

function rechazar(id, solicitud){
    let user = document.querySelector(id);
    user.remove();
    let contador = document.querySelector(solicitud);
    let num = parseInt(contador.innerText);
    num--;
    contador.innerText = num;
}