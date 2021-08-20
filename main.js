canvas = document.getElementById("canvas2");
ctx=canvas.getContext("2d");

car_width = 50;
car_height =100;


car_image = "OIP.jpg";

car_x = 10;
car_y = 10;

function add(){
    background_imageTag = new Image();
    background_imageTag.onload = upload_background;
    background_imageTag.src = background_image;

    car_imgTag = new Image();
    car_imgTag.onload = upload_rover;
    car_imgTag.src = rover_image;

}

function upload_background(){
    ctx.drawImage(background_imageTag, 0, 0, canvas.width, canvas.height);
}

function upload_rover(){
 ctx.drawImage(car_imgTag, car_x, car_y, car_width, car_height)
}

window.addEventListener("keydown", my_keydown);

function my_keydown(e){
    keyPressed=e.keyCode;
    console.log(keyPressed);
    if(keyPressed=='38'){
        up();
        console.log("up");
    }
    if(keyPressed=='40'){
        down();
        console.log("down");
    }
    if(keyPressed=='37'){
        left();
        console.log("left");
    }
    if(keyPressed=='39'){
        right();
        console.log("right");
    }
}

function up(){
    if (car_y>= 0){
        car_y = car_y - 10;
        console.log("When up arrow is pressed", "X =", car_x, "Y = ", car_y);
        upload_background();
        upload_rover();
    }
}

function down(){
    if (car_y<= 500){
        car_y = car_y + 10;
        console.log("When down arrow is pressed", "X =", car_x, "Y = ", car_y);
        upload_background();
        upload_rover();
    }
    
}
function left(){
    if (car_x>= 0){
        car_x = car_x - 10;
        console.log("When left arrow is pressed", "X =", car_x, "Y = ", car_y);
        upload_background();
        upload_rover();
    }
}
function right(){
    if (car_x<= 700){
        car_x = car_x + 10;
        console.log("When right arrow is pressed", "X =", car_x, "Y = ", car_y);
        upload_background();
        upload_rover();
    }
}