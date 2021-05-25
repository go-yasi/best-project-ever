var searchBtn = document.getElementById("searchBtn");
var searchInput = document.getElementById("search");








function searchFunction() {
    searchInput.submit();
}


searchBtn.addEventListener("click", function (){
    window.location.replace('./search-results.html');
})

