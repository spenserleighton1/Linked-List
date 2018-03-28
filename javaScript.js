var enterButton = document.querySelector("#enter");
var websiteTitle = document.querySelector('#website-title');
var websiteUrl = document.querySelector('#url');
var bookmarkTitle = document.querySelector('#bookmark')
var websiteLink = document.querySelector('#websiteLink')
// var readButton = document.querySelector('#readButton');


enterButton.onclick = function() {
 event.preventDefault();
 if (websiteTitle.value === ""| websiteUrl.value === "") {
  alert('Please fill required fields');
 } else {
document.getElementById("list").innerHTML+=
   `<article class="bookmarks">
   <li class="unread" id="bookmarks">
   <h1 class="bookmark-h1" id="bookmarks" width="100%">${websiteTitle.value}</h1>
   <a id="websiteLink" href="${websiteUrl.value}">${websiteUrl.value}</a>
   <button id="readButton">Read</button>
   <button class="delete" id="deleteButton">Delete</button>
   </li>
   </article>`


function disableButton()  {
  
}




// var deleteButton = document.querySelector("#deleteButton");
// deleteButton.onclick = function() {
//   if(deleteButton.className === 'delete'){
//     // deleteButton.className = null;
//   } else {
//     deleteButton.className = 'delete';
//   }
// }

var x = document.getElementsByClassName("delete");



var readButton = document.querySelector(".bookmarks");
readButton.onclick = function() {
if(readButton.className === 'read'){
   readButton.className = 'bookmarks';
   //change color of read button//
} else {
    readButton.className = 'read';
     };
   };
  };
};
//delete button acts same as read button because im targeting the bookmark class