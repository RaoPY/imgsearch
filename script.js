function searchBtn() {
    var width = document.getElementById("widthVal").value;
    var height = document.getElementById("heightVal").value;
    var keywords = document.getElementById("keywordsVal").value;

    var url = `https://source.unsplash.com/${width}x${height}/?${keywords}`;
    window.open(url);
}