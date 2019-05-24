const $$ = document.querySelector.bind(document);

const $$$ = document.querySelectorAll.bind(document);



$$(".hamburger-menu").onclick = () => {
    if($$("nav").offsetHeight == 0) {
        $$("nav").style.height = "170px";
    } else {
        $$("nav").style.height = "0";

    }
    
}



function setNavLinks(value) {
    value.onclick = () => {
        $$("nav").style.height = "0";
        console.log(value);
    };
}


let navLinks = $$$("nav a");

for(let i = 0; i < navLinks.length; i++) {
    setNavLinks(navLinks[i]);
}






