let scene;
let ball;
let rocket;
let sun;
let car;
let dude;

window.addEventListener("DOMContentLoaded",function() {
    scene = document.querySelector("a-scene");
    ball = document.querySelector("#pokemonball");
    rocket = document.querySelector("#rocket");
    sun = document.querySelector("#sun");
    car = document.querySelector("#car");
    dude = document.querySelector("#dude");

    ball.x = 0;
    ball.dx= 10;

    rocket.y = 0;
    rocket.dy= 0.1;

    sun.z = 0;
    sun.dz = 0.1

    car.x = 0;
    car.dx = 0.1;

    dude.y = 0;
    dude.dy = 0.3;
    loop();
})

function loop(){
    ball.x += ball.dx;
    ball.setAttribute("rotation",{x:0, y:ball.x, z:0});

    rocket.y += rocket.dy;
    rocket.setAttribute("position",{x:0, y:rocket.y, z:-4});

    sun.z -= sun.dz;
    sun.setAttribute("position",{x:0, y:10, z:sun.z});

    car.x -= car.dx;
    car.setAttribute("position",{x:car.x, y:0, z:-5});

    dude.y += dude.dy;
    dude.setAttribute("rotation",{x:0, y:dude.y, z:0});
    window.requestAnimationFrame(loop);
}
