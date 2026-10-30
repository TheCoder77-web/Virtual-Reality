class House{
  constructor(x,y,z){
    this.obj = document.createElement("a-entity");
  
    let box = document.createElement("a-box");
    box.setAttribute("height","2");
    this.obj.append(box);
  
    let roof = document.createElement("a-cylinder");
    roof.setAttribute("segments-radial","3");
    roof.setAttribute("position","0 1.5 0");
    roof.setAttribute("rotation","270 0 0");
    roof.setAttribute("color","black")
    this.obj.append(roof);
  
    this.obj.setAttribute("position",{x:x, y:y, z:z});
    scene.append(this.obj)
  }
}