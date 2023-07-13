let menuvisible =false;
//función que oculta o muestra el menu
function mostrarOcultarMenu(){
    if(menuvisible){
        document.getElementById("nav").classList ="";
        menuvisible = false;
    }else{
        document.getElementById("nav").classList ="responsive";
        menuvisible = true;
    }
}

function seleccionar(){
    //oculto el menu una vez que selecciono una opcion
    document.getElementById("nav").classList ="";
    menuvisible = false;

}

