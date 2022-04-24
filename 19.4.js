// body + HTML
const body = document.body;
const html = body.parentElement;
body.style.padding = "0";
body.style.margin = "0";
html.style.width = "100%";
html.style.height = "100%";
body.style.width = "100%";
body.style.height = "100%";
body.style.fontFamily = "Arial";

// nav
const navbar = document.createElement("nav");
document.body.append(navbar);
navbar.style.backgroundColor = "aquamarine";

// nav ul
const navbarUL = document.createElement("ul");
navbar.append(navbarUL);
navbarUL.style.listStyle = "none";
navbarUL.style.display = "flex";
navbarUL.style.padding = "0";
navbarUL.style.margin = "0";

// nav ul li
const navbarLI1 = document.createElement("li");
const navbarLI2 = document.createElement("li");
const navbarLI3 = document.createElement("li");
const ListItems = [navbarLI1, navbarLI2, navbarLI3];
for(let i = 0; i < ListItems.length; i++) {
  navbarUL.append(ListItems[i]);
  ListItems[i].style.display = "flex";
}

// nav ul li a
const navbarA1 = document.createElement("a");
const navbarA2 = document.createElement("a");
const navbarA3 = document.createElement("a");
navbarA1.textContent = "Home";
navbarA2.textContent = "About";
navbarA3.textContent = "Services";
navbarLI1.append(navbarA1);
navbarLI2.append(navbarA2);
navbarLI3.append(navbarA3);
const linkItems = [navbarA1, navbarA2, navbarA3];
for(let i = 0; i < linkItems.length; i++) {
  linkItems[i].style.padding = "20px 30px";
  linkItems[i].href = "#";
  linkItems[i].style.textDecoration = "none";
  linkItems[i].style.color = "inherit";
  linkItems[i].style.transition = "all 0.2s linear";
  linkItems[i].addEventListener("mouseenter", () => {
    linkItems[i].style.backgroundColor = "aqua";
    linkItems[i].style.cursor = "pointer";
  })
  linkItems[i].addEventListener("mouseleave", () => {
    linkItems[i].style.backgroundColor = "transparent";
  })
}

// header
const header = document.createElement("header");
body.append(header);
header.style.display = "flex";
header.style.alignItems = "center";
header.style.justifyContent = "center";

// Reset Button
const reset = document.createElement("span");
header.append(reset);
reset.textContent = "Reset";
reset.style.backgroundColor = "#f4f4f4";
reset.style.border = "1px solid black";
reset.style.padding = "3px";
reset.style.borderRadius = "5px";
reset.style.cursor = "pointer";
reset.style.transform = "translateX(200px)";
reset.style.visibility = "hidden";
reset.addEventListener("click", () => {
  h1.style.transform = "translate(0px, 0px)";
  reset.style.visibility = "hidden";
})


// h1
const h1 = document.createElement("h1");
header.append(h1);
h1.innerHTML = "Webpage";
h1.style.transition = "all 1s linear";
h1.style.fontSize = "80px";

setInterval(() => {
  let red = Math.random() * 255;
  let blue = Math.random() * 255;
  let green = Math.random() * 255;
  h1.style.color = `rgb(${red} ${green} ${blue})`;
})

h1.addEventListener("mouseover", () => {
  let x = Math.random() * 500 + Math.random() * -500
  let y = Math.floor(Math.random() * 500);
  h1.style.transform = `translate(${x}px, ${y}px)`;
  reset.style.visibility = "visible";
})


// main
const main = document.createElement("main");
document.body.append(main);
main.style.display = "flex";
main.style.padding = "2rem";
main.style.gap = "2rem";

// main p
const p = document.createElement("p");
main.append(p);
p.textContent = "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolor nam enim, aliquid adipisci nesciunt culpa! Magnam illum ipsa reprehenderit consequatur sed optio soluta porro tempore asperiores voluptas vitae cumque laudantium eligendi, cupiditate mollitia facilis. Architecto repellendus natus numquam deserunt quasi labore quibusdam quas vitae optio tempore dignissimos commodi unde quaerat, quae repudiandae fugit alias aperiam rem! Dolorem repellendus ut beatae iure veniam facere itaque quo expedita ab id, culpa tenetur in aut fuga hic ad recusandae? Error, aliquid? Officiis facere error, dolorum obcaecati in sunt labore eaque repellendus et vero sapiente minima non quidem ut! Laborum ab praesentium expedita inventore.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolor nam enim, aliquid adipisci nesciunt culpa! Magnam illum ipsa reprehenderit consequatur sed optio soluta porro tempore asperiores voluptas vitae cumque laudantium eligendi, cupiditate mollitia facilis. Architecto repellendus natus numquam deserunt quasi labore quibusdam quas vitae optio tempore dignissimos commodi unde quaerat, quae repudiandae fugit alias aperiam rem! Dolorem repellendus ut beatae iure veniam facere itaque quo expedita ab id, culpa tenetur in aut fuga hic ad recusandae? Error, aliquid? Officiis facere error, dolorum obcaecati in sunt labore eaque repellendus et vero sapiente minima non quidem ut! Laborum ab praesentium expedita inventore.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolor nam enim, aliquid adipisci nesciunt culpa! Magnam illum ipsa reprehenderit consequatur sed optio soluta porro tempore asperiores voluptas vitae cumque laudantium eligendi, cupiditate mollitia facilis. Architecto repellendus natus numquam deserunt quasi labore quibusdam quas vitae optio tempore dignissimos commodi unde quaerat, quae repudiandae fugit alias aperiam rem! Dolorem repellendus ut beatae iure veniam facere itaque quo expedita ab id, culpa tenetur in aut fuga hic ad recusandae? Error, aliquid? Officiis facere error, dolorum obcaecati in sunt labore eaque repellendus et vero sapiente minima non quidem ut! Laborum ab praesentium expedita inventore.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolor nam enim, aliquid adipisci nesciunt culpa! Magnam illum ipsa reprehenderit consequatur sed optio soluta porro tempore asperiores voluptas vitae cumque laudantium eligendi, cupiditate mollitia facilis. Architecto repellendus natus numquam deserunt quasi labore quibusdam quas vitae optio tempore dignissimos commodi unde quaerat, quae repudiandae fugit alias aperiam rem! Dolorem repellendus ut beatae iure veniam facere itaque quo expedita ab id, culpa tenetur in aut fuga hic ad recusandae? Error, aliquid?"

// main img
const img = document.createElement("img");
main.append(img);
img.src = "https://images.unsplash.com/photo-1569165003050-6c42600d9c7d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1171&q=80";
img.style.width = "50%";

// footer
const footer = document.createElement("footer");
body.append(footer);
footer.style.height = "80px";
footer.style.backgroundColor = "#333";
footer.style.display = "flex";
footer.style.alignItems = "center";
footer.style.justifyContent = "center";

// footer p
const footerP = document.createElement("p");
footer.append(footerP);
footerP.innerHTML = "&copy; All right reserved"
footerP.style.color = "#fff";
footerP.style.textAlign = "center";


const elements = body.children;
for(let element of elements) {
}