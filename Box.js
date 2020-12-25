class Box {
    constructor(x, y, width, height) {
        var options = {
            // JSON (javascript object notation) format  
            'restitution': 0.8,
            'friction': 1.0,
            'density': 1.0
            
        }
        this.body = Bodies.rectangle(x, y, width, height, options);
        this.color=color(random(0,255), random(0,255), random(0,255));
        this.width = width;
        this.height = height;
        World.add(userWorld, this.body);
    }
    display() {
        var pos =this.body.position;
        rectMode(CENTER);
        fill(this.color);
        rect(pos.x, pos.y, this.width, this.height);
    }
}