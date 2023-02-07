var nameInput = document.getElementById("siteName");
var urlInput = document.getElementById("siteUrl");
var favorites = [];
var newName =(document.getElementById("up"));
var newUrl = (document.getElementById("upo"));
if (localStorage.getItem("favorites") != null) {
    favorites = JSON.parse(localStorage.getItem("favorites"))
    displaySites()
}
   
function submit() {
     
    if (validateName(nameInput.value) && validateName(urlInput.value)) {
        
        var favorite = {
         name : nameInput.value,
         site: urlInput.value
     }
     favorites.push(favorite)
    
     localStorage.setItem("favorites", JSON.stringify(favorites))
     displaySites()
     clear()
     reblock()
     
    }else{
      revalid() 
        
    }
    
}
var demo = document.querySelector("button")
demo.addEventListener("click",submit)

function displaySites() {
    var bookmarks = "";
    for (var i = 0; i < favorites.length; i++) {

        bookmarks += `<div class="vip1" >
        <h3>${favorites[i].name}</h3>
        <button class="btn btn-primary "><a target="_blank"  class="text-white " href="http:www.google.com">Visit</a></button>
        <button onclick="deleteSite(${i})" class="btn btn-danger ">Delete</button>
        </div> `
        
    }
document.getElementById("row").innerHTML = bookmarks
}
function clear() {
    nameInput.value = ""
    urlInput.value = ""
}
function deleteSite(index) {
    favorites.splice(index,1)
    displaySites()
    localStorage.setItem("favorites", JSON.stringify(favorites))
}
   function validateName(test) {
           if ( /^[a-z]{2,}$/.test(test)){
             return true
           }else{
             return false
           }
          }

function revalid() {
   
        newName.classList.replace("d-none","d-block"); 
        newUrl.classList.replace("d-none","d-block");
}
function reblock() {
   
        newName.classList.replace("d-block","d-none"); 
        newUrl.classList.replace("d-block","d-none");
}