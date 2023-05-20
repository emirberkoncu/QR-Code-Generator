var container = document.querySelector(".container");
var generateBtn = document.querySelector(".generate-btn");
var qrInput = document.querySelector(".qr-input");
var qrImg = document.querySelector(".qr-image");

generateBtn.onclick = function(){
    container.classList.add("active");
    if(qrInput.value.length > 0){
        generateBtn.innerText = "Generating QR ...."
        qrImg.src = "https://api.qrserver.com/v1/create-qr-code/?size=170x170&data=Example"
        +qrInput.value;
        qrImg.onload = function () {
            container.classList.add("active");
            generateBtn.innerText = "Generate QR Code";
        }

    }
}