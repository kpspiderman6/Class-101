Webcam.set({
    width : 50,
    height : 50,
    image_format :'png',
    png_quality: 50,
});

camera = document.getElementById("your_cam");
Webcam.attach('#camera');
function take_photo(){
    Webcam.snap(function (data_uri){
        document.getElementById("result").innerHTML='<img id="final_image"src="'+data_uri+'">';

    });
}
console.log("ml5version"+ml5.version);
classifier = ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/[...]/model.json',modelLoaded);
function modelLoaded(){
    console.log("modelloaded begin");
}