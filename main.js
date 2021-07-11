difference=0;
rightWristX=0;
leftWristX=0;

function setup(){
    video=createCapture(VIDEO);
    video.size(550, 500);

    canvas=createCanvas(550, 550);
    canvas.position(570, 150);

    poseNet=ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}

function modelLoaded(){
    console.log('initialized PoseNet');
}

function gotPoses(results){
    if(results.length>0)
    {
        console.log(results);
        leftWristX=results[0].pose.leftWrist.x;
        righttWristX=results[0].pose.rightWrist.x;
        difference=floor(leftWristX-rightWristX);
        console.log("leftWristX = " + leftWristX + " rightWristX = " + rightWristX +" difference = " + difference);
    }
}

function draw(){
    background('#e4d6ff');
    document.getElementById("text_size").innerHTML="Width and Height of a square will be = " + difference + "px";
    fill('#F90093');
    text(50, 100, difference);
}