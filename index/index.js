
const header = document.getElementsByClassName("md-header__inner md-grid")[0];

for(const element of header.children){
    if(element.className !== "md-header__title"){
        element.remove();
    }
}


const titleContainer = document.getElementsByClassName("md-header__ellipsis")[0];
titleContainer.style.display = "flex";
titleContainer.style.justifyContent = "center";


document.getElementsByClassName("md-header__source")[0].remove();


const phoneControls = document.getElementsByClassName("md-header__button md-icon");

if(phoneControls.length > 0){
    phoneControls[0].remove();
    document.getElementsByClassName("md-header__button md-icon")[0].remove();
}


if(window.navigator.maxTouchPoints > 1){
    document.getElementById("assimilatorLogo").style.maxWidth = "77vw";
}


document.getElementsByClassName("md-sidebar md-sidebar--primary")[0].remove();
document.getElementsByClassName("md-sidebar__scrollwrap")[0].remove();
document.getElementsByClassName("md-sidebar md-sidebar--secondary")[0].remove();


const content = document.getElementsByClassName("md-content__inner md-typeset")[0];

content.style.display = "flex";
content.style.flexDirection = "column";
content.style.alignContent = "center";
content.style.alignItems = "center";

document.getElementsByClassName("md-copyright")[0].innerHTML =
    "<a href='https://github.com/knucklesuganda'>By Andrey Ivanov</a>";


document.getElementsByClassName("md-footer-meta__inner md-grid")[0].style.justifyContent = "center";
