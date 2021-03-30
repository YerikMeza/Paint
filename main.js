var mouseEvent = "empty"

var last_postion_x, last_postion_y;

canvas = document.getElementById ("myCanvas")
ctx = canvas.getContext("2d")
color = "black";
line_width = 2;
console.log("appliction started");

canvas.addEventListener("mouseup", my_mouseup);
function my_mouseup(e)
{
    mouseEvent = "mouseup";
    console.log("mouseup");
}

canvas.addEventListener("mouseleave", my_mouseleave);
function my_mouseleave(e)
{
    mouseEvent = "mouseleave";
    console.log("mouseleave");
}

canvas.addEventListener("mousedown", my_mousedown);
function my_mousedown(e)
{
    mouseEvent = "mousedown";
    console.log("mousedown")
}

canvas.addEventListener("mousemove", my_mousemove);
function my_mousemove(e)
{
    current_position_of_mouse_x = e.clientX - canvas.offsetLeft;
    current_position_of_mouse_y = e.clientY - canvas.offsetTop;

    if (mouseEvent == "mousedown") {
        ctx.beginPath();
        ctx.strokeStyle = color;
        ctx.lineWidth = line_width;

        ctx.moveTo(last_postion_x, last_postion_y);

        ctx.lineTo(current_position_of_mouse_x, current_position_of_mouse_y);
        ctx.stroke();
    }

    last_postion_x = current_position_of_mouse_x;
    last_postion_y = current_position_of_mouse_y;
}
