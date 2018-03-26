var enterButton = document.querySelector("#enter");
var websiteTitle = document.querySelector('#website-title');
var websiteUrl = document.querySelector('#url');
var bookmarkTitle = document.querySelector('#bookmark')
var websiteLink = document.querySelector('#websiteLink')

      websiteLink.innerText = websiteUrl.value;
      bookmarkTitle.innerText = websiteTitle.value;





enterButton.addEventListener('click', function(){
  var 
})
  


document.getElementById("pleaseWork").innerHTML+= 
    ` <li id="bookmarks">
    <h1 id="bookmark" width="100%"></h1>
    <p id="websiteLink"></p>
    <button id="readButton">Read</button>
    <button id="deleteButton">Delete</button>`
      };


function addBookmark(){
      websiteLink.innerText = websiteUrl.value;
      bookmarkTitle.innerText = websiteTitle.value;
    document.getElementById("pleaseWork").innerHTML+= 
    ` <li id="bookmarks">
    <h1 id="bookmark" width="100%">   </h1>
    <p id="websiteLink">   </p>
    <button id="readButton">Read</button>
    <button id="deleteButton">Delete</button>`
};