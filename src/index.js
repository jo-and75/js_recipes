//index.js
import "./styles.css";
import {renderDom, homeBtn} from "./home.js";
import menu, { menuBtn } from "./menu.js"; 
import { contactBtn,contact } from "./contact.js";

menuBtn.addEventListener('click',function(){ 
    content.innerHTML = "";
    renderMenu();
})

homeBtn.addEventListener('click', function(){ 
    content.innerHTML = ""; 
    renderDom();
})  

contactBtn.addEventListener('click',function(){ 
    content.innerHTML = ""; 
    contact();
})

function renderMenu(){ 
    const content = document.getElementById("content");  

    const menuContainer = document.createElement("main");
    menuContainer.classList.add("menu-container");
    const title = document.createElement("h1"); 
    title.innerText = "Our Menu";

    for (const category in menu){ 
        const section = document.createElement("section");
        const heading = document.createElement("h2"); 

        heading.innerText = category; 
        section.append(heading); 

        for (const item of menu[category]){
            const card = document.createElement("article"); 
            card.classList.add("menu-item");

            const name = document.createElement("h4"); 
            const description = document.createElement("p"); 
            const price = document.createElement("p"); 

            name.innerText = item["name"]; 
            description.innerText = item["description"] || ""; //incase they have no description to avoid returning undefined
            price.innerText = "BWP " + item["price"]; 

            card.append(name,description,price); 
            section.append(card);
        }

        menuContainer.append(section);        
    }
    content.append(title,menuContainer);
}

function setActiveTab(button) {
    document.querySelectorAll("nav button").forEach(btn => {
        btn.classList.remove("active");
    });

    button.classList.add("active");
}


renderDom();


