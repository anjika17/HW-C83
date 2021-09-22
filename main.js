var last_x,last_y;
var mouse_event="empty";
 var Canvas=document.getElementById("Canvas1");
 var ctx=Canvas.getContext("2d")
var color=document.getElementById("color").value;
var width_of_line=document.getElementById("width_of_line").value;
var width=screen.width;
var new_width=screen.width - 70;
var new_height=screen.height - 300
if (width<992){
    document.getElementById("Canvas1").width=new_width;
    document.getElementById("Canvas1").height=new_height;  
    document.body.style.overflow="hidden";
  }

  Canvas.addEventListener("touchstart", my_touchstart);
  
  function my_touchstart(e)
  {
   console.log("touchstart") ;
   last_x = e.touches[0].clientX - Canvas.offsetLeft;
   last_y = e.touches[0].clientY - Canvas.offsetTop;
      color = document.getElementById("color").value;
      width_of_line = document.getElementById("width_of_line").value;
 mouse_event="touchstart";
  
  }
    Canvas.addEventListener("touchmove", my_touchmove);
  function my_touchmove(e)
  {
console.log("touchmove");

current_position_of_touch_x = e.touches[0].clientX - Canvas.offsetLeft;
       current_position_of_touch_y = e.touches[0].clientY - Canvas.offsetTop;

      
      ctx.beginPath();
      ctx.strokeStyle = color;
      ctx.lineWidth = width_of_line;

      console.log("Last position of x and y coordinates = ");
      console.log("x = " + last_x + "y = " + last_y);
      ctx.moveTo(last_x, last_y);

      console.log("Current position of x and y coordinates = ");
      console.log("x  = " + current_position_of_touch_x + "y = " + current_position_of_touch_y);
      ctx.lineTo(current_position_of_touch_x, current_position_of_touch_y);
      ctx.stroke();
      

      last_x = current_position_of_touch_x; 
      last_y = current_position_of_touch_y;
  }
Canvas.addEventListener("mousedown", my_mousedown);
function my_mousedown(e){
    console.log("mousedown") ;
    last_x = e.clientX - Canvas.offsetLeft;
    last_y = e.clientY - Canvas.offsetTop;
       color = document.getElementById("color").value;
       width_of_line = document.getElementById("width_of_line").value;
       mouse_event = "mousedown"
}
  Canvas.addEventListener("mousemove", my_mousemove);

function my_mousemove(e){
    current_position_of_x = e.clientX - Canvas.offsetLeft;
    current_position_of_y = e.clientY - Canvas.offsetTop;

   if(mouse_event = "mousedown"){

   
   ctx.beginPath();
   ctx.strokeStyle = color;

   ctx.lineWidth = width_of_line;

   console.log("Last position of x and y coordinates = ");
   console.log("x = " + last_x + "y = " + last_y);
   ctx.moveTo(last_x, last_y);

   console.log("Current position of x and y coordinates = ");
   console.log("x  = " + current_position_of_x + "y = " + current_position_of_y);
   ctx.lineTo(current_position_of_x, current_position_of_y);
   ctx.stroke();
   }

  last_x = current_position_of_x ;
  last_y = current_position_of_y;
}