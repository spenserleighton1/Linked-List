var enterButton = document.querySelector("#enter");
var websiteTitle = document.querySelector('#website-title');
var websiteUrl = document.querySelector('#url');
var bookmarkTitle = document.querySelector('#bookmark')
var websiteLink = document.querySelector('#websiteLink')

     // websiteLink.innerText = websiteUrl.value;
     // bookmarkTitle.innerText = websiteTitle.value;


enterButton.onclick = function() {
 event.preventDefault();

document.getElementById("list").innerHTML+=
   `<li id="bookmarks">
   <h1 id="bookmark" width="100%">${websiteTitle.value}</h1>
   <p id="websiteLink">${websiteUrl.value}</p>
   <button id="readButton">Read</button>
   <button id="deleteButton">Delete</button>`
};