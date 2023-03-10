Webcam.set({
    width:350,
    height:300,
    image_format:'png',
    png_quality:90
});
Webcam.attach("#camera");
function take_snapshot(){
    Webcam.snap(function(data_uri){
        document.getElementById("result").innerHTML="<img id='snapshot' src='"+data_uri+"'>";
    });
}
console.log("ml5 version :  ",ml5.version);

classifier=ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/8liC3Rtet/model.json",modelloaded);

function modelloaded(){
    console.log("modelloaded");
}
function check(){
    img=document.getElementById("snapshot");
    classifier.classify(img,gotresults);
}
function gotresults(error,results){
    if(error){
        console.log(error);
    }
    else{
        console.log(results);
        document.getElementById("object_name").innerHTML=results[0].label;
        document.getElementById("object_accuracy").innerHTML=results[0].confidence.toFixed(3);
        }
}
