const icons =  document.querySelector(".icons");
const mainNav = document.querySelector("nav.main");
let ifs=true;

const fixdMenu =function(e){
    if(window.scrollY>200){
        mainNav.classList.add("active");
    }
    else{
        mainNav.classList.remove("active");
    }
}

window.addEventListener("scroll" ,fixdMenu)





//battery
let i=1;
const changesIcons = function(){
if(i>4){
    i=1;
}

icons.className=`icon-bat${i}`;
i++

}

setInterval(changesIcons , 1000)
