var enterButton = document.querySelector("#enter-button");
var websiteTitle = document.querySelector('#website-input-field');
var websiteUrl = document.querySelector('#url-input-field');
var bookmarkTitle = document.querySelector('#bookmark')
var websiteLink = document.querySelector('#websiteLink')
var cardCount = 0;

enterButton.onclick = function(e) {
 e.preventDefault();
 if (websiteTitle.value === "" || websiteUrl.value === "") {
  alert('Please fill required fields');
  return
 } else {
  document.querySelector("#list").innerHTML +=
   
  `<article class="bookmarks">
   <li class="unread">
   <h1 class="websiteTitle" width="100%">${websiteTitle.value}</h1>
   <a class="websiteLink" href="${websiteUrl.value}">${websiteUrl.value}</a>
   <button class="read" id="readButton" onclick="markCardRead(${cardCount})">Read</button>
   <button  id="deleteButton" onclick="deleteCard(${cardCount})">Delete</button>
   </li>
   </article>`
  };
  
  cardCount++;

document.querySelector("form").reset();
document.querySelector('.counter').innerText = cardCount;
};

function markCardRead(cardId){
  var bookmarkCard = document.querySelector('.bookmarks',)
  bookmarkCard.classList.toggle('bookmarksRead');
};

function deleteCard(cardId){
  cardCount = cardCount -1;
  document.querySelector('.counter').innerText = cardCount;
  var bookmarkCard = document.querySelector('.bookmarks');
  bookmarkCard.className ='delete';
};
