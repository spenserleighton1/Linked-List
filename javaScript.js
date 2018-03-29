var enterButton = document.querySelector("#enter-button");
var websiteTitle = document.querySelector('#website-input-field');
var websiteUrl = document.querySelector('#url-input-field');
var bookmarkTitle = document.querySelector('#bookmark')
var websiteLink = document.querySelector('#websiteLink')
var cardCount = 0;


// document.querySelector('ul').addEventListener('click', function(event) {
//   if (event.target.tagName.deleteCard() === 'article') {
//     console.log('yes')
//     // do your action on your 'li' or whatever it is you're listening for
//   }
// })


enterButton.onclick = function(e) {
 e.preventDefault();
 if (websiteTitle.value === "" || websiteUrl.value === "") {
  alert('Please fill required fields');
  return
 } else {
  document.querySelector("#list").innerHTML +=
   
       `<article class="bookmarks">
       <li class="unread">
       <h1 class="bookmark-h1" width="100%">${websiteTitle.value}</h1>
       <a id="websiteLink" href="${websiteUrl.value}">${websiteUrl.value}</a>
       <button class="read" id="readButton" onclick="markCardRead(${cardCount})">Read</button>
       <button class="delete" id="deleteButton" onclick="deleteCard(${cardCount})">Delete</button>
       </li>
       </article>`

  };
  cardCount++;

document.querySelector("form").reset();
document.querySelector('.counter').innerText = cardCount;
};
//figure out how to target specific cardId and delete that shit!

function markCardRead(cardId){
  var bookmarkCard = document.querySelector('.bookmarks',)
  bookmarkCard.classList.toggle('bookmarksRead');
  // console.log(cardId, " card clicked");
};

function deleteCard(cardId){
  cardCount = cardCount -1;
  document.querySelector('.counter').innerText = cardCount;
  var bookmarkCard = document.querySelector('.bookmarks');
  bookmarkCard.className ='delete';
  console.log(cardId, " card delete");
};
