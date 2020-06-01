// The event parameter to the event handler provides 
// information on the location of the mouse.
let movingCircle = document.getElementById('circleId');
document.addEventListener('mousemove',function(moveFunction) {            
    movingCircle.style.left = moveFunction.pageX+"px";
    movingCircle.style.top = moveFunction.pageY+"px";
});