/* INDEX - BASE APP */

/* Barra de pesquisa */

function openSearch(){
    document.getElementById('myOverlay').style.display = "block";
}

function closeSearch(){
    document.getElementById('myOverlay').style.display = "none";
}

/* Login do usuário */

function openForm(){
    document.getElementById('myForm').style.display = 'block'
}

function closeForm(){
    document.getElementById('myForm').style.display = 'none'
}

/* Troca e abertura de páginas */

anterior = 'page-home'

function select(objeto) {
      var el1 = document.getElementById(objeto);
      var el2 = document.getElementById(anterior);
      if (anterior != objeto ) {
            el1.style.display = 'block';
            el2.style.display = 'none'
      }
      else if (anterior == objeto){
            el1.style.display = 'none';
            el2.style.display = 'block';
      }
      anterior = objeto;
}