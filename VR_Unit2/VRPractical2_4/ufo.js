class UFO{
    constructor(x,y,z){
        this.x = x;
        this.y = y;
        this.z = z;
        this.dy = Math.random() * 0.2 + 0.01;
        this.r = 0;
        this.dr = Math.random() * 0.5 + 0.5;
        this.s = 1;
        this.ds = 0.01;

        this.obj = document.createElement("a-entity");
        this.obj.setAttribute("position", {x:x, y:y, z:z});

        let cover = document.createElement("a-sphere");
        cover.setAttribute("position", {x:0, y:1, z:0});
        cover.setAttribute("radius", 1.5);
        cover.setAttribute("color", "green");
        cover.setAttribute("opacity", 0.5);
        this.obj.append(cover);

        let body = document.createElement("a-sphere");
        body.setAttribute("position", {x:0, y:0, z:0});
        body.setAttribute("radius", 2);
        body.setAttribute("scale", "1 0.25 1");
        body.setAttribute("color", "grey");
        this.obj.append(body);
    
        let ring = document.createElement("a-torus");
        ring.setAttribute("position", {x:0, y:0, z:0});
        ring.setAttribute("rotation", {x:90, y:0, z:0});
        ring.setAttribute("radius", 1.95);
        ring.setAttribute("color", "lime");
        this.obj.append(ring);

        this.beam = document.createElement("a-cone");
        this.beam.setAttribute("position", {x:0, y:-2.5, z:0});
        this.beam.setAttribute("radius-bottom", 4);
        this.beam.setAttribute("radius-top", 0.4);
        this.beam.setAttribute("height", 5);
        this.beam.setAttribute("color", "lime");
        this.beam.setAttribute("opacity", 0.25);
        this.obj.append(this.beam);

        scene.append(this.obj);
    }

    invade(){
        this.y -= this.dy;
        this.r += this.dr;
        this.s += this.ds;
        this.obj.setAttribute("position", {x:this.x, y:this.y, z:this.z});
        this.obj.setAttribute("rotation", {x:0, y:0, z:this.r});
        this.beam.setAttribute("scale", {x:1, y:this.s, z:1});
        this.beam.setAttribute("position", {x:0, y:-2.5 * this.s, z:0});
        if(this.y < 0){
          this.y = rnd(90,100);
          this.s = 1;
        }
    }
}
