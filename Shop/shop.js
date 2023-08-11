

var mainImg = document.getElementById('main-vs-img');
var smallImg = document.getElementsByClassName('sm-vs-img');
var details = document.getElementsByClassName('details')




///img///
smallImg[0].onclick = function () {
    mainImg.src = smallImg[0].src;

}
smallImg[1].onclick = function () {
    mainImg.src = smallImg[1].src;

}
smallImg[2].onclick = function () {
    mainImg.src = smallImg[2].src;
}
smallImg[3].onclick = function () {
    mainImg.src = smallImg[3].src;
}

////details////
details[0].onclick = function () {
    mainImg.src = smallImg[0].src
}

details[1].onclick = function () {
    mainImg.src = smallImg[1].src
}

details[2].onclick = function () {
    mainImg.src = smallImg[2].src
}

details[3].onclick = function () {
    mainImg.src = smallImg[3].src
}



