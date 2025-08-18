var productcontainer=document.getElementById("products")
var search=document.getElementById("search")
var productlist= productcontainer.querySelectorAll("div")

search.addEventListener("keyup",function(){
    var enteredValue=event.target.value.toUpperCase()
    for(count=0;count<productlist.length;count=count+1)
    {
        var productname=productlist[count].querySelector("p").textContent
        if(productname.toUpperCase().indexOf(enteredValue)<0)
        {
            productlist[count].style.display="none"
        }
        else{
            productlist[count].style.display="block"
        }
    }
})

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