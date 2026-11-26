class Orb{
    constructor(x,y,z){
      this.x = x;
      this.y= y;
      this.z = z;

      this.obj = document.createElement("a-sphere");
      this.obj.setAttribute("position", {x:x, y:y, z:z});
      this.obj.setAttribute("radius", 0.5);
      this.obj.setAttribute("color", "green");
      this.obj.setAttribute("opacity", 0.5);
      scene.append(this.obj);
    }
}
