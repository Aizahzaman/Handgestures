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

    function modelLoaded(){
        console.log("model is ready to use");
    }
    
    var prediction1="";
    
    function speak(){
        var speak_api=window.speechSynthesis;
    
        speak1="The prediction is "+prediction1;
    
        var say_this= new SpeechSynthesisUtterance(speak1);
    
        speak_api.speak(say_this);
    }
    
    function check(){
        image=document.getElementById("snapshot");
        model.classify(image,result);
    }
    
    function result(error,answer){
        if(error){
            console.error(error);
        } 
        else{
            console.log(answer);
            document.getElementById("handgesture_name").innerHTML=answer[0].label;
    
            if(answer[0].label=="happy"){
                document.getElementById("handgesture_emoji").innerHTML="&#128522";
            }
    
            if(answer[0].label=="calm"){
                document.getElementById("handgesture_emoji").innerHTML="&#128524";
            }
    
            if(answer[0].label=="sad"){
                document.getElementById("handgesture_emoji").innerHTML="&#128532";
            }
    
            if(answer[0].label=="mad"){
                document.getElementById("handgesture_emoji").innerHTML="&#128548";
            }

            }
    
            prediction1=answer[0].label;
    
            speak();
        }