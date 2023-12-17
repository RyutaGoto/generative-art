import p5 from "p5";

export class Particle {
  pos: p5.Vector;
  vel: p5.Vector;
  acc: p5.Vector;
  alpha: number;

  constructor(p: p5) {
    this.pos = p.createVector(p.width / 2, p.height / 2);
    this.vel = p.createVector(0, 0);
    this.acc = p5.Vector.random2D().normalize().mult(0.1);
    this.alpha = 255;
  }

  update() {
    this.vel.add(this.acc);
    this.pos.add(this.vel);
    this.alpha -= 4;
  }

  show(p: p5) {
    p.noStroke();
    p.fill(255, this.alpha);
    p.ellipse(this.pos.x, this.pos.y, 10);
  }
}
