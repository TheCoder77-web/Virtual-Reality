let scene;
let ball;
let rocket;

window.addEventListener("DOMContentLoaded",function() {
    scene = document.querySelector("a-scene");
    ball = document.querySelector("#pokemonball");
    rocket = document.querySelector("#rocket");

    ball.x = 0;
    ball.dx= 0.1;

    rocket.x = 0;
    rocket.dx= 0.1;
    loop();
})

function loop(){
    ball.x += ball.dx;
    ball.setAttribute("rotation",{x:0, y:ball.x, z:0});
    window.requestAnimationFrame(loop);

    rocket.x += rocket.dx;
    rocket.setAttribute("position",{x:0, y:rocket.x, z:-4});
    window.requestAnimationFrame(loop);
}
