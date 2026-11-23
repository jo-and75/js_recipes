//module.js 

export function renderDom(){ 
    const content = document.getElementById("content"); 
    const h1 = document.createElement("h1");
    const p1 = document.createElement("p"); 
    const h2 = document.createElement("h2"); 
    const p2 = document.createElement("p");
    const li1 = document.createElement("li"); 
    const li2 = document.createElement("li"); 
    const li3 = document.createElement("li");  
    const p4 = document.createElement("p"); 

    h1.innerText = "Welcome to the Artisan";
    p1.innerText = "Where great food meets unforgettable moments.\n\n Discover a delicious blend of fresh ingredients, bold flavours, and warm hospitality. Whether\n you're joining us for a casual lunch, a romantic dinner, or a special celebration, we're here to\n make every visit memorable.\n\nCome hungry, leave happy."; 
    
    h2.innerText = "Opening Hours"; 
    p2.innerText = "We're here to serve you delicious food and warm hospitality throughout the week.\n";  

    li1.innerText = "Monday – Friday: 08:00 – 22:00";
    li2.innerText = "Saturday: 09:00 – 23:00"; 
    li3.innerText = "Sunday: 10:00 – 20:00\n";   

    p4.innerText = "Whether you're stopping by for a quick lunch or settling in for a leisurely dinner, we'd love to welcome you."; 

    content.append(h1,p1,p2,h2,p2,li1,li2,li3,p4);
} 

export const homeBtn = document.getElementById("home");


