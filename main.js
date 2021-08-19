Webcam.set({
    width:350,
    height:300,
    image_format:"png",
    png_quality:100
});
Webcam.attach("#camera");

function take_pic(){
    Webcam.snap(function(url){
    document.getElementById("result").innerHTML='<img src="'+url+'" id="snapshot"/>';   
    });}

    console.log(ml5.version);
    var model=ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/Et4Fwzep-/model.json", modelLoaded);    