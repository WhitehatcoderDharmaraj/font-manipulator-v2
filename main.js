
function setup(){
    video=createCapture(VIDEO);
    video.size(550, 500);
   
    canvas=createCanvas(500, 400);
    canvas.position(560, 130);
   
    poseNet=ml5.poseNet(video, modelLoaded);
   
    poseNet.on('pose',gotPoses);
   }
   
   function draw(){
       background('#ffff06')
   }
   
   function modelLoaded(){
       console.log("PoseNet has been set up");
   }
   
   function gotPoses(results){
       if(results.length>0){
           console.log(results);
           
       }
   }