class Rocket{
    constructor(x,y,z){
        this.x = x;
        this.y = y;
        this.z = z;
        this.dy = Math.random() * 0.5 + 0.01;
        this.s = 1;
        this.ds = 0.01;

        this.obj = document.createElement("a-entity");
        this.obj.setAttribute("position", {x:x, y:y, z:z});

        let roof = document.createElement("a-cone");
        roof.setAttribute("position", {x:0, y:0, z:0});
        roof.setAttribute("radius-bottom", 0.5);
        roof.setAttribute("height", 1);
        roof.setAttribute("color", "red");
        this.obj.append(roof);

        let body = document.createElement("a-cylinder");
        body.setAttribute("position", {x:0, y:-1.5, z:0});
        body.setAttribute("radius", 0.5);
        body.setAttribute("height", 2);
        body.setAttribute("color", "grey");
        this.obj.append(body);

        this.flame = document.createElement("a-cone");
        this.flame.setAttribute("position", {x:0, y:-2.5, z:0});
        this.flame.setAttribute("radius-bottom", 4);
        this.flame.setAttribute("radius-top", 0.4);
        this.flame.setAttribute("height", 5);
        this.flame.setAttribute("color", "orange");
        this.obj.append(this.flame);

        let frame = document.createElement("a-ring");
        frame.setAttribute("position", {x: 0, y: -1.2, z: -0.51});
        frame.setAttribute("radius-inner", 0.15);
        frame.setAttribute("radius-outer", 0.22);
        frame.setAttribute("color", "#457b9d");
        frame.setAttribute("side", "double");
        this.obj.append(frame);

        let window = document.createElement("a-circle");
        window.setAttribute("position", {x: 0, y: -1.2, z: -0.505});
        window.setAttribute("radius", 0.15);
        window.setAttribute("color", "#a8dadc");
        window.setAttribute("side", "double");
        this.obj.append(window);

        let fin1 = document.createElement("a-box");
        fin1.setAttribute("position", {x:0.55, y:-2.1, z:0});
        fin1.setAttribute("width", 0.4);
        fin1.setAttribute("height", 0.8);
        fin1.setAttribute("depth", 0.08);
        fin1.setAttribute("rotation", {x:0, y:0, z:-20});
        fin1.setAttribute("color", "red");
        this.obj.append(fin1);

        let fin2 = document.createElement("a-box");
        fin2.setAttribute("position", {x:-0.55, y:-2.1, z:0});
        fin2.setAttribute("width", 0.4);
        fin2.setAttribute("height", 0.8);
        fin2.setAttribute("depth", 0.08);
        fin2.setAttribute("rotation", {x:0, y:0, z:20});
        fin2.setAttribute("color", "red");
        this.obj.append(fin2);

        let fin3 = document.createElement("a-box");
        fin3.setAttribute("position", {x:0, y:-2.1, z:0.55});
        fin3.setAttribute("width", 0.08);
        fin3.setAttribute("height", 0.8);
        fin3.setAttribute("depth", 0.4);
        fin3.setAttribute("rotation", {x:20, y:0, z:0});
        fin3.setAttribute("color", "red");
        this.obj.append(fin3);

        let fin4 = document.createElement("a-box");
        fin4.setAttribute("position", {x:0, y:-2.1, z:-0.55});
        fin4.setAttribute("width", 0.08);
        fin4.setAttribute("height", 0.8);
        fin4.setAttribute("depth", 0.4);
        fin4.setAttribute("rotation", {x:-20, y:0, z:0});
        fin4.setAttribute("color", "red");
        this.obj.append(fin4);
        
        scene.append(this.obj);
    }

    launch(){
        this.y += this.dy;
        this.obj.setAttribute("position", {x:this.x, y:this.y, z:this.z});
        this.flame.setAttribute("scale", {x:0.2, y:this.s, z:0});
        this.flame.setAttribute("position", {x:0, y:-2.5 * this.s, z:0});
        if(this.y > 100){
          this.y = rnd(10,20);
        }
    }
}