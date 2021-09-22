Webcam.set({
    height:300,
    width:280,
    image_format:"png",
    png_quality:90
});
camera = document.getElementById("camera");

Webcam.attach("#camera");


function photo()
{
    Webcam.snap(function (data_uri){
        document.getElementById("preview").innerHTML = "<img id='capture' src='"+data_uri+"'/>"
    });
}

console.log("ml5 version", ml5.version);

classifier = ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/W4X2eePNx/model.json',modalLoaded);

function modalLoaded()
{
    console.log("The Modal Is Loaded");
}