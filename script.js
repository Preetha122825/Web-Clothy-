var sidenav=document.querySelector(".side-navbar")

function showNavbar()
{
    sidenav.style.left="0";
}

function closeNavbar()
{
    sidenav.style.left="-60%";

}
window.addEventListener("resize",function(){
    if(window.innerWidth>768){
        sidenav.style.left="-60%";
    }
});