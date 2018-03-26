var enterButton = document.querySelector("#enter");
var websiteTitle = document.querySelector('#website-title');
var websiteUrl = document.querySelector('#website-url');
var websiteLink = document.querySelector('#websiteLink')

enterButton.addEventListener('click', function() {
  event.preventDefault(); 
      console.log("enter button working");
      websiteLink.innerText = websiteUrl ;
      });


if (websiteTite = "") {
document.querySelector("boolmarks").style.display = "none";
}
