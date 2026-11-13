let rnd = (l,u) => Math.floor(Math.random()*(u-l) + l);
let scene, rockets = [], ufos = [];

window.addEventListener("DOMContentLoaded",function() {
  scene = document.querySelector("a-scene"); 
  
  for(let i = 0; i < 100; i++){
    let x = rnd(-30, 30);   
    let y = rnd(0, 5);   
    let z = rnd(50, 80); 
    
    rockets.push(new Rocket(x, y, z));
  }

  for(let i = 0; i < 100; i++){
    let x = rnd(-30, 30);   
    let y = rnd(80, 100);   
    let z = rnd(-20, -50); 
    
    ufos.push(new UFO(x, y, z));
  }

  loop();
})

function loop(){
  for(let rocket of rockets){
    rocket.launch();
  }

  for(let ufo of ufos){
    ufo.invade();
  }
  
  window.requestAnimationFrame(loop);
}
