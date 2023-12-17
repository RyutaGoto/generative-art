import p5 from "p5";

export class Particle {
  pos: p5.Vector;
  vel: p5.Vector;
  acc: p5.Vector;

  constructor(p: p5) {
    this.pos = p.createVector(p.random(p.width), p.random(p.height));
    this.vel = p.createVector(0, 0);
    this.acc = p.createVector(0.1, 0);
  }

  update() {
    this.vel.add(this.acc);
    this.pos.add(this.vel);
  }

  show(p: p5) {
    p.ellipse(this.pos.x, this.pos.y, 10);
  }
}
