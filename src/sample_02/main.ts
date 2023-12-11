import p5 from "p5";

const sketch = (p: p5) => {
  const r1 = p.random(50, 200);
  const r2 = p.random(50, 200);
  let a1 = 0;
  let a2 = 0;

  let a1Inc = p.random(0.1, 5);
  let a2Inc = p.random(0.1, 5);

  let prevX: number;
  let prevY: number;

  p.setup = () => {
    p.createCanvas(p.windowWidth, p.windowHeight);
    p.angleMode(p.DEGREES);
    p.background(30);

    a1Inc = p.random(0.1, 5);
    a2Inc = p.random(0.1, 5);
  };

  /** フレームごとの描画処理 */
  p.draw = () => {
    p.translate(p.windowWidth / 2, p.windowHeight / 2);
    p.stroke(255);

    for (let index = 0; index < 100; index++) {
      const x1 = r1 * p.cos(a1);
      const y1 = r1 * p.sin(a1);

      const x2 = x1 + r2 * p.cos(a2);
      const y2 = y1 + r2 * p.sin(a2);

      const r = p.map(p.sin(p.frameCount), -1, 1, 100, 200);
      const g = p.map(p.cos(p.frameCount), -1, 1, 100, 200);
      const b = p.map(p.sin(p.frameCount), -1, 1, 200, 100);

      p.stroke(r, g, b);
      p.line(prevX, prevY, x2, y2);

      prevX = x2;
      prevY = y2;

      a1 += a1Inc;
      a2 += a2Inc;
    }
  };
};

new p5(sketch);
