var mouse_Event="";

var last_position_of_X, last_position_of_Y;

Canvas=document.getElementById("myCanvas");
ctx=Canvas.getContext("2d");

color= "blue";

width_of_line=2;

Canvas.addEventListener("mousedown",mymousedown)

function mymousedown(e) {
    color=document.getElementById("color").value;
    width_of_line=document.getElementById("width_of_line").value;

    mouse_Event="mousedown";
    console.log(mouse_Event);
}

Canvas.addEventListener("mousemove",mymousemove);

function mymousemove(e) {
    current_position_of_mouse_X = e.clientX-Canvas.offsetLeft;
    current_position_of_mouse_Y = e.clientY-Canvas.OffsetTop;

    if (mouse_Event == "mousedown") {

        ctx.beginPath()
        ctx.strokeStyle = color;
        ctx.lineWidth = width_of_line;

        console.log("last position cordinates X and Y= ");
        console.log("X = " + last_position_of_X + "Y = " + last_position_of_Y);
        ctx.moveTo(last_position_of_X,last_position_of_Y);

        console.log("current position cordinates X and Y= ");
        console.log("X = " + current_position_of_mouse_X + "Y = " + current_position_of_mouse_Y);
        ctx.lineTo(current_position_of_mouse_X,current_position_of_mouse_Y);
        ctx.stroke();
    }

    last_position_of_X = current_position_of_mouse_X;
    last_position_of_Y = current_position_of_mouse_Y;

    
}

Canvas.addEventListener("mouseup",mymouseup);

function mymouseup(e) {
    mouse_Event="mouseup";
    console.log(mouse_Event);

}

Canvas.addEventListener("mouseleave",mymouseleave);

function mymouseleave(e) {
    mouse_Event="mouseleave";
    console.log(mouse_Event);
    
}

function ClearArea(){

    ctx.clearRect(0,0,ctx.Canvas.width,ctx.Canvas.height);
    
}