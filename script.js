/////////////////////////////////////
/////GESTIONE CARICAMENTO PAGINE/////
/////////////////////////////////////
const PATH_PAGINA_HOME = "home.html"

function caricaHome() {
    caricaAliSea(PATH_PAGINA_HOME)
}

function caricaAliSea(pagina) {
    window.location.replace(pagina)
}