nose_x=0;
nose_y=0;
difference=0;
left_wr_x=0;
right_wr_x=0;

function setup(){
    video=createCapture(VIDEO);
    video.size(550, 500);
   
    canvas=createCanvas(500, 400);
    canvas.position(560, 130);
   
    poseNet=ml5.poseNet(video, modelLoaded);
   
    poseNet.on('pose',gotPoses);
   }
   
   function draw(){
       background('#ffff06');
       document.getElementById("font_size").innerHTML="Font size of the text will be= "+difference+"px";
       textSize(difference);
       fill("black");
       text('Dharmaraj',50,400);

   }
   
   function modelLoaded(){
       console.log("PoseNet has been set up");
   }
   
   function gotPoses(results){
       if(results.length>0){
           console.log(results);
           left_wr_x=results[0].pose.leftWrist.x;
           right_wr_x=results[0].pose.rightWrist.x;
           difference=floor(left_wr_x-right_wr_x);
           console.log("X position of right wrist is "+right_wr_x+" and X position of left Wrist is "+left_wr_x+" The Differnce is "+difference);
           
       }
   }