import p5 from "p5";

const sketch = (p: p5) => {
  p.setup = () => {
    p.createCanvas(p.windowWidth, p.windowHeight, p.WEBGL);
    p.angleMode(p.DEGREES);
    p.background(30);
  };

  /** フレームごとの描画処理 */
  p.draw = () => {
    p.background(30);
    p.noFill();
    p.stroke(255);

    p.rotateX(p.frameCount);
    p.rotateY(p.frameCount);
    p.rotateZ(p.frameCount);

    for (let i = 0; i < 360; i++) {
      p.push();

      const r = p.map(p.sin(i + p.frameCount), -1, 1, 200, 50);
      const g = p.map(p.sin(i + p.frameCount), -1, 1, 50, 200);
      const b = p.map(p.cos(i + p.frameCount), -1, 1, 50, 200);

      p.stroke(r, g, b);
      p.rotateY(i / 2);
      p.ellipse(0, 0, 200);

      p.pop();
    }
  };
};

new p5(sketch);
