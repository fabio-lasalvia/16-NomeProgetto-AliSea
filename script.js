/////////////////////////////////////
/////GESTIONE CARICAMENTO PAGINE/////
/////////////////////////////////////
const PATH_PAGINA_HOME = "home.html"

function caricaHome() {
    caricaPagina(PATH_PAGINA_HOME)
}

function caricaPagina(pagina) {
    window.location.replace(pagina)
}