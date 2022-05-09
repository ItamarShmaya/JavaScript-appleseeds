/*
Instructions
Refactor the simple fetch exercise using async await.

btn.addEventListener("click", () => {
  fetch("https://api.jokes.one/jod")
  .then((response) => {
    if(!response.ok) throw new Error(`Status Code Error ${response.status}`);
      response.json().then((data) => {
        const title = data.contents.jokes[0].joke.title;
        const joke = data.contents.jokes[0].joke.text;
        p.innerText = title + "\n" + joke;
      });
  })
  .catch((err) => {
    console.log(err);
  })
})
*/

const btn = document.createElement("button");
btn.innerText = "Get joke";
const p = document.createElement("p");
document.body.append(btn);
document.body.append(p);

btn.addEventListener("click", async() => {
  try {
    const data = await fetch("https://api.jokes.one/jod1");
    const parsedData = await data.json();
    const title = parsedData.contents.jokes[0].joke.title;
    const joke = parsedData.contents.jokes[0].joke.text;
    p.innerText = title + "\n" + joke;
  } catch (e) {
    console.log(e);
  }
})