import p5 from "p5";
import { Particle } from "./particle";

const sketch = (p: p5) => {
  let particle: Particle;
  let particles: Particle[] = [];
  p.setup = () => {
    p.createCanvas(p.windowWidth, p.windowHeight);
  };

  /** フレームごとの描画処理 */
  p.draw = () => {
    p.background(30);
    for (let index = 0; index < 5; index++) {
      particle = new Particle(p);
      particles.push(particle);
    }

    for (let index = 0; index < particles.length; index++) {
      if (particles[index].alpha > 0) {
        particles[index].update(p);
        particles[index].show(p);
      } else {
        particles.splice(index, 1);
      }
    }
  };
};

new p5(sketch);
