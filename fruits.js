status1 = "";

function setup(){
    canvas = createCanvas(640 , 420);
    canvas.center();



    objectDetector  = ml5.objectDetector('coc0ssd' , modelLoaded);
    document.getElementById("status").innerHTML= "Status = Detecting Object";
    
    

}

function draw(){
    image(img,0 ,0 , 640 , 420);
    status1 = true;
    objectDetector.detect(img , gotResult);
}


function preload(){
    img = loadImage("orange.jpg");
}

function modelLoaded(){
    console.log("Model Loaded!");
}

function gotResult(error , results){
    if(error){
        console.log(error);
    }
    console.log(results);
}

function back(){
    window.location.assign("index.html");
}