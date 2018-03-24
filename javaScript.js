var enterButton = document.querySelector("#enter");
var websiteTitle = document.querySelector('#website-title');
var websiteUrl = document.querySelector('#website-url');
// var websiteLink = document.querySelectorAll('p')

enterButton.addEventListener('click', function() {
  event.preventDefault(); 
      console.log("enter button working");
      websiteUrl.innerText = websiteTitle;
      });


if (websiteTite = "") {
document.querySelector("bookmarks").style.display = "none";
}