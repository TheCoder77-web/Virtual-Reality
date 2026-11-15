let scene, mech, army = [];

window.addEventListener("DOMContentLoaded",function() {
  scene = document.querySelector("a-scene");
  
  mech = document.getElementById("mech-1");
 
  for(let x = -10; x < 10; x += 2){
    for(let z = -10; z < 10; z += 2){
      let m = new Mech(x, 1, z);
      army.push(m);
    }
  }  
  loop();
})
  function loop(){
    for(let m of army){
      m.fly();
    }

  window.requestAnimationFrame( loop );
}
