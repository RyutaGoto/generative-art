import p5 from "p5";

const sketch = (p: p5) => {
  p.setup = () => {
    p.createCanvas(p.windowWidth, p.windowHeight, p.WEBGL);
    p.angleMode(p.DEGREES);
  };

  /** フレームごとの描画処理 */
  p.draw = () => {
    p.background(30);

    p.rotateX(60);
    p.noFill();
    p.stroke(255);

    for (let i = 0; i < 20; i++) {
      const r = p.map(p.sin(p.frameCount), -1, 1, 0, 255);
      const g = p.map(i, 0, 20, 0, 255);
      const b = p.map(p.cos(p.frameCount), -1, 1, 255, 0);
      p.stroke(r, g, b);
      p.beginShape();
      for (let j = 0; j < 360; j += 10) {
        const rad = i * 8;
        const x = rad * p.cos(j);
        const y = rad * p.sin(j);
        const z = p.sin(p.frameCount * 2 + i * 10) * 50;
        p.vertex(x, y, z);
      }
      p.endShape(p.CLOSE);
    }
  };
};

new p5(sketch);
