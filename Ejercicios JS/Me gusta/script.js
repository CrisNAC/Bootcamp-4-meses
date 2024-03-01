function likePlus(id){
    let contador = document.getElementById(id);
    let likes = parseInt(contador.innerText);
    likes++;
    contador.innerText = likes + " likes(s)";
}