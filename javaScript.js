var enterButton = document.querySelector("#enter");
var websiteTitle = document.querySelector('#website-title');
var websiteUrl = document.querySelector('#url');
var bookmarkTitle = document.querySelector('#bookmark')
var websiteLink = document.querySelector('#websiteLink')
var cardCount = 0;

enterButton.onclick = function() {
 event.preventDefault();
  console.log(cardCount);
 if (websiteTitle.value === "") {
  alert('Please fill required fields');
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

document.querySelector("form").reset();

cardCount++;
document.querySelector('.counter').innerText = cardCount;
};

function markCardRead(cardId){
  var bookmarkCard = document.querySelector('.bookmarks');
  bookmarkCard.classList.toggle('read');
  console.log(cardId, " card clicked");
};

//figure out how to target specific cardId and delete that shit!
function deleteCard(cardId){
  cardCount = cardCount -1;
  document.querySelector('.counter').innerText = cardCount;
  var bookmarkCard = document.querySelector('.bookmarks');
  bookmarkCard.className ='delete';
  console.log(cardId, " card delete");
};



//.closest('article')



  // delete article(cardId);
