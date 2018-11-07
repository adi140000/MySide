const icons =  document.querySelector(".icons");
const mainNav = document.querySelector("nav.main");
const arrow = document.querySelector("div.arrow");
const logo = document.querySelector("div.main");
const sections = document.querySelectorAll("article section.work");



const toggleOpacity=function(){
    
    sections.forEach(function (section){
        console.log(scrollY);
        console.log(section.offsetTop);
        if(window.scrollY>=(section.offsetTop-(section.offsetHeight*0.15)))
        {
            console.log("work");
            section.classList.add("active");            
            //section.style.opacity=1;
           // $(section).animate({opacity},400);
        }
        else if(window.scrollY<section.offsetTop-section.offsetHeight)
        {
           //section.style.opacity=0;
           console.log("done");
            section.classList.remove("active");
        }
    })
}


window.addEventListener("scroll",toggleOpacity);

let decision=true
// nav sticky


const fixdMenu =function(e){
    if(window.innerWidth>768){
        
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
    mainNav.classList.remove("active");
}
}

const showArrow=function(){

    if(window.scrollY>window.innerHeight){
        arrow.style.display="block";
        arrow.addEventListener("click",function(){
            $("div.arrow").fadeOut();    
        })
    }else
    {
        arrow.style.display="none"; 
    }
}

window.addEventListener("scroll" ,fixdMenu);

window.addEventListener("scroll",showArrow);

window.addEventListener("mousemove",function(e){
document.cr
})


//battery
const battery = function(){

    let i=1;
    const changesIcons = function(){
        if(i>4){
            i=1;
        }

        icons.className=`icon-bat${i}`;
        i++

        }
    return changesIcons
}

const changesIcons = battery();

setInterval(changesIcons , 1000);
