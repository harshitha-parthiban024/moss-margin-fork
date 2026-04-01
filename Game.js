const shelf = document.getElementById("shelf");

const colors = [
"#70c270",
"#4c9438",
"#a4a41f",
"#2E8B57",
"#669249"
];

const books = [
{
author: "Jane Austen",
theme: "Classic Fiction",
quote: "There is no charm equal to tenderness of heart.",
book: "Pride and Prejudice"
},
{
author: "George Orwell",
theme: "Political Satire",
quote: "In a time of deceit telling the truth is revolutionary.",
book: "1984"
},
{
author: "Virginia Woolf",
theme: "Modernism",
quote: "Books are the mirrors of the soul.",
book: "A Room of One’s Own"
},
{
author: "Mark Twain",
theme: "Humour & Realism",
quote: "The secret of getting ahead is getting started.",
book: "Huckleberry Finn"
},
{
author: "Rabindranath Tagore",
theme: "Poetry & Philosophy",
quote: "Faith is the bird that feels the light.",
book: "Gitanjali"
},
{
  author: "Mark Twain",
  theme: "Adventure",
  quote: "The secret of getting ahead is getting started.",
  book: "The Adventures of Tom Sawyer"
},
{
  author: "Harper Lee",
  theme: "Social Justice",
  quote: "You never really understand a person until you consider things from his point of view.",
  book: "To Kill a Mockingbird"
},
{
  author: "F. Scott Fitzgerald",
  theme: "Classic Fiction",
  quote: "So we beat on, boats against the current, borne back ceaselessly into the past.",
  book: "The Great Gatsby"
},
{
  author: "Paulo Coelho",
  theme: "Philosophical Fiction",
  quote: "When you want something, all the universe conspires in helping you to achieve it.",
  book: "The Alchemist"
},
{
  author: "J.R.R. Tolkien",
  theme: "Fantasy",
  quote: "Not all those who wander are lost.",
  book: "The Fellowship of the Ring"
},
{
  author: "Mary Shelley",
  theme: "Gothic Fiction",
  quote: "Beware; for I am fearless, and therefore powerful.",
  book: "Frankenstein"
},
{
  author: "Oscar Wilde",
  theme: "Drama",
  quote: "Be yourself; everyone else is already taken.",
  book: "The Importance of Being Earnest"
},
{
    author: "Charlotte Brontë",
    theme: "Gothic Fiction",
    quote: "I am no bird; and no net ensnares me: I am a free human being with an independent will.",
    book: "Jane Eyre"
},
{
    author: "Emily Brontë",
    theme: "Gothic Fiction",
    quote: "Whatever our souls are made of, his and mine are the same.",
    book: "Wuthering Heights"
}
];

let z = 1;

books.forEach((item, i) => {

const card = document.createElement("div");
card.className = "card";

card.innerHTML = `
<div class="heart">❤️</div>

<h2>${item.author}</h2>
<p>${item.theme}</p>
<p class="quote">"${item.quote}"</p>
<span>📖 ${item.book}</span>
`;

card.style.background = colors[i % colors.length];
card.style.top = `${i * 40}px`;
card.style.left = `${i * 40}px`;

enableDrag(card);

/* heart click */
card.querySelector(".heart").onclick = () => {
showPopup(item);
};

shelf.appendChild(card);

});

function enableDrag(card){

let shiftX, shiftY;

card.onmousedown = (e) => {

z++;
card.style.zIndex = z;

shiftX = e.clientX - card.offsetLeft;
shiftY = e.clientY - card.offsetTop;

document.onmousemove = (e) => {
card.style.left = e.clientX - shiftX + "px";
card.style.top = e.clientY - shiftY + "px";
};

document.onmouseup = () => {
document.onmousemove = null;
document.onmouseup = null;
};

};

}

/* popup */

function showPopup(book){

document.getElementById("popupTitle").innerText =
`You Found ${book.author}!`;

document.getElementById("popupText").innerText =
`Favourite Book: ${book.book}
"${book.quote}"`;

document.getElementById("popup").style.display="flex";

/* Buy button link */
document.getElementById("buyBtn").onclick = function(){

window.location.href = "cart.html";

};

}

function closePopup(){
document.getElementById("popup").style.display="none";
}
