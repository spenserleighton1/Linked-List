var enterButton = document.querySelector("#enter");
var websiteTitle = document.querySelector('#website-title');
var websiteUrl = document.querySelector('#website-url');
var websiteLink = document.querySelectorAll('#websiteLink')

enterButton.addEventListener('click', function() {
  event.preventDefault(); 
      console.log("enter button working");
      websiteLink.innerText = websiteTitle;
      });


// if (websiteTite && websiteUrl = " ") {
// document.querySelector("bookmarks").style.display = "none";
// }