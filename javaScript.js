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
   `<article class="bookmarks">
   <li id="bookmarks">
   <h1 class="bookmark-h1" id="bookmarks" width="100%">${websiteTitle.value}</h1>
   <a id="websiteLink" href="${websiteUrl.value}">${websiteUrl.value}</a>
   <button id="readButton">Read</button>
   <button id="deleteButton">Delete</button>
   </article>`
};