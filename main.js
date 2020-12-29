song = "";
leftWristX = 0;
rightWristX = 0;
leftWristY = 0;
rightWristY = 0;
scoreleftWrist = 0;
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
    fill(255, 0, 0);
    stroke(240, 5, 10);
    if (scoreleftWrist > 0.2){
        circle(leftWristX, leftWristY, 20);
    inNumberleftWristY = Number(leftWristY);
    remove_decimals = floor(inNumberleftWristY);
    volume = remove_decimals/500;
    document.getElementById("volume").innerHTML = "Volume = "+volume;
    song.setVolume(volume);
    }
}
function play(){
    song.play();
    song.rate(1);
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
        scoreleftWrist = results[0].pose.keypoints[9].score;
        console.log("scoreleftWrist = "+scoreleftWrist);
    }
}
function modelLoaded(){
    console.log("PoseNet Is Initialized");
}