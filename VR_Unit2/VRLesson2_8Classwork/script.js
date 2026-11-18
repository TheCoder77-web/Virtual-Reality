let target;

window.addEventListener("DOMContentLoaded",function() {
  target = document.querySelector("#target");
  target.a = 0;
  target.da = -1;

  this.obj = document.createElement("a-box");
  this.obj.setAttribute("wireframe",true);

  loop();
})

function loop(){
  target.a += target.da;
  if(target.a < -90){
    target.a = -90;
  }
  target.setAttribute("rotation",{x:target.a, y:0, z: 0});

  window.requestAnimationFrame( loop );
}