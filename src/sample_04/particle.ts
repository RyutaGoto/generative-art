import p5 from "p5";

export class Particle {
  pos: p5.Vector;
  vel: p5.Vector;
  acc: p5.Vector;
  alpha: number;
  r: number;
  g: number;
  b: number;

  constructor(p: p5) {
    this.pos = p.createVector(p.width / 2, p.height / 2);
    this.vel = p.createVector(0, 0);
    this.acc = p5.Vector.random2D().normalize().mult(0.1);
    this.alpha = 255;
    this.r = p.map(this.pos.x, 0, p.width, 255, 0);
    this.g = p.map(this.pos.y, 0, p.height, 0, 255);
    this.b = p.map(
      p.dist(p.width / 2, p.height / 2, this.pos.x, this.pos.y),
      0,
      p.width / 2,
      0,
      255
    );
  }

  update(p: p5) {
    this.vel.add(this.acc);
    this.pos.add(this.vel);
    this.r = p.map(this.pos.x, 0, p.width, 255, 0);
    this.g = p.map(this.pos.y, 0, p.height, 0, 255);
    this.b = p.map(
      p.dist(p.width / 2, p.height / 2, this.pos.x, this.pos.y),
      0,
      p.width / 2,
      0,
      255
    );

    if (p.dist(p.width / 2, p.height / 2, this.pos.x, this.pos.y) > 80) {
      this.alpha -= 4;
    }
  }

  show(p: p5) {
    p.noStroke();
    p.fill(this.r, this.g, this.b, this.alpha);
    p.ellipse(this.pos.x, this.pos.y, 5);
  }
}
