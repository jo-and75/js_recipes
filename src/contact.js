//contact.js 

export const contact = function(){ 
    const content = document.getElementById("content"); 
    const h1 = document.createElement("h1"); 
    h1.innerText = "Get in Touch"; 

    const p1 = document.createElement("p"); 
    p1.innerText = "We’d love to hear from you! Whether you’re booking a table, asking about our menu,\n or planning a special occasion, our team is happy to help.";

    const address = document.createElement("p");
    address.innerHTML = "<strong>Address:</strong> 12 Garden Lane, Gaborone, Botswana";

    const phone = document.createElement("p"); 
    phone.innerHTML = "<strong>Phone:</strong> +267 71 234 567"; 

    const email = document.createElement("p"); 
    email.innerHTML = "<strong>Email:</strong> hello@artisan.bw" 

    content.append(h1,p1,address,phone,email);
} 

export const contactBtn = document.getElementById("contact");


