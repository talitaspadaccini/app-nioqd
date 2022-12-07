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
anterior = 'page-home';

function select(objeto) {
      var el1 = document.getElementById(objeto);
      var el2 = document.getElementById(anterior);
      if (anterior != objeto ) {
            el1.style.display = 'block';
            el2.style.display = 'none';
      }
      anterior = objeto;
}


/* INDEX - PAGE-HOME */
function abrirVideoDestaque(){
    window.open(
        'https://youtu.be/E8LqVj4vMuY',
        'Vídeo Destaque'
    )
    return false;
}

/* INDEX - PAGE-VIDEOS */

/* Carregando vídeo destaque */

// Esse código carrega o código da API do IFrame Player de forma assíncrona.
var tag = document.createElement('script');

tag.src = "https://www.youtube.com/iframe_api";
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

// Esta função cria um <iframe> (e player do YouTube) 
// após o download do código da API.
var player;
    function onYouTubeIframeAPIReady() {
        player = new YT.Player('player', {
        videoId: 'rlZO8uoAmjw',
        playerVars: {
            'controls': 0,
            'rel': 0,
            'showinfo': 1,
            'mute': 1
        },
        events: {
            'onReady': onPlayerReady,
            'onStateChange': onPlayerStateChange
        }
    });
}

// A API chamará essa função quando o player de vídeo estiver pronto.
function onPlayerReady(event) {
    event.target.playVideo();
}

// A API chama essa função quando o estado do player muda. 
// A função indica que ao reproduzir um vídeo (estado=1), 
// o player deve reproduzir por 35 segundos e depois parar.
var done = false;
function onPlayerStateChange(event) {
    if (event.data == YT.PlayerState.PLAYING && !done) {
        setTimeout(stopVideo, 35000);
        done = true;
    }
}

function stopVideo() {
    player.stopVideo();
}

