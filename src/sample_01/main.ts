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

    for (let i = 0; i < 50; i++) {
      const r = p.map(p.sin(p.frameCount), -1, 1, 100, 200);
      const g = p.map(i, 0, 50, 100, 200);
      const b = p.map(p.cos(p.frameCount), -1, 1, 200, 100);
      p.stroke(r, g, b);
      p.rotate(p.frameCount / 20);
      p.beginShape();
      for (let j = 0; j < 360; j += 60) {
        const rad = i * 3;
        const x = rad * p.cos(j);
        const y = rad * p.sin(j);
        const z = p.sin(p.frameCount * 2 + i * 5) * 50;
        p.vertex(x, y, z);
      }
      p.endShape(p.CLOSE);
    }
  };
};

new p5(sketch);
