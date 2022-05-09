/*
Instructions
Lets do an simple ajax call with fetch using this url “https://
api.jokes.one/jod”. 
Create a button that will fetch the joke of the day. Display 
to the screen the jokes title and the joke itself
*/

const btn = document.createElement("button");
btn.innerText = "Get joke";
const p = document.createElement("p");
document.body.append(btn);
document.body.append(p);

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