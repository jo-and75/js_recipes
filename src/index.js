//index.js
import {renderDom} from "./home.js";
import menu from "./menu.js"; 

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

renderDom();
console.log("Testing Testing");