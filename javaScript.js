var enterButton = document.querySelector("#enter");
var websiteTitle = document.querySelector('#website-title');
var websiteUrl = document.querySelector('#url');
var bookmarkTitle = document.querySelector('#bookmark')
var websiteLink = document.querySelector('#websiteLink')

var cardCounter = 0;

enterButton.onclick = function() {
 event.preventDefault();
  console.log(cardCounter);
 if (websiteTitle.value === "") {
  alert('Please fill required fields');
 } else {
  document.querySelector("#list").innerHTML +=
   `<article class="bookmarks">
   <li class="unread" id="bookmarks">
   <h1 class="bookmark-h1" id="bookmarks" width="100%">${websiteTitle.value}</h1>
   <a id="websiteLink" href="${websiteUrl.value}">${websiteUrl.value}</a>
   <button class="read" id="readButton" onclick="markCardRead(${cardCounter})">Read</button>
   <button class="delete" id="deleteButton" onclick="deleteCard(${cardCounter})">Delete</button>
   </li>
   </article>`
  };
  cardCounter++;
var counter = document.querySelector('.counter');
counter.innerText = cardCounter;

};


function markCardRead(cardId){

  var bookmarkCard = document.querySelector('.bookmarks');
  bookmarkCard.classList.toggle('read');
  console.log(cardId, " card clicked");
};

function deleteCard(cardId){

  var bookmarkCard = document.querySelector('.bookmarks');
  bookmarkCard.className ='delete';
  console.log(cardId, " card delete");
  cardCounter--;
};



