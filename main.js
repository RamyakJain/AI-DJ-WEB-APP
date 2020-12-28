song = "";
leftWristX = "";
rightWristX = "";
leftWristY = "";
rightWristY = "";
function preload(){
    song = loadSound("music.mp3");
}
function setup(){
    canvas = createCanvas(450,400);
    canvas.center();
    video = createCapture(VIDEO);
    video.hide();
    posenet = ml5.poseNet(video, modelLoaded);
    posenet.on('pose', gotPoses);
}
function draw(){
    image(video, 0, 0, 450, 400);
}
function play(){
    song.play();
    song.rate(0.5);
    song.setVolume(0.5);
}
function gotPoses(results){
    if (results.length > 0){
        console.log(results);
        leftWristX = results[0].pose.leftWrist.x;
        leftWristY = results[0].pose.leftWrist.y;
        console.log("leftWristX = "+leftWristX+"leftWristY = "+leftWristY);
        rightWristX = results[0].pose.rightWrist.x;
        rightWristY = results[0].pose.rightWrist.y;
        console.log("rightWristX = "+rightWristX+"rightWristY = "+rightWristY);
    }
}
function modelLoaded(){
    console.log("PoseNet Is Initialized");
}