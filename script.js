const icons =  document.querySelector(".icons");
const mainNav = document.querySelector("nav.main");

const logo = document.querySelector("div.main");
let ifs=true;

let decision=true
// nav sticky


const fixdMenu =function(e){
    if(window.innerWidth>768){
        console.log("yes");
        if(window.scrollY>mainNav.offsetTop){
        mainNav.classList.add("active");
        const width = mainNav.offsetHeight;
        if(decision)
        {
        $("nav.main").css("top",-width);
        $("nav.main").animate({top:0},700);
        decision=false;
        }
        
        
    }
     if(window.scrollY<logo.offsetHeight){
        mainNav.classList.remove("active");
        decision=true;

    }
}else{
    
}
}
    

window.addEventListener("scroll" ,fixdMenu);
setInterval(fixdMenu,10);




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
