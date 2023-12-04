import p5 from "p5";

const sketch = (p: p5) => {
  const r1 = 200;
  const r2 = 200;
  let a1 = 0;
  const a2 = 0;

  p.setup = () => {
    p.createCanvas(p.windowWidth, p.windowHeight);
    p.angleMode(p.DEGREES);
    p.background(30);
  };

  /** フレームごとの描画処理 */
  p.draw = () => {
    p.translate(p.windowWidth / 2, p.windowHeight / 2);
    p.stroke(255);

    const x1 = r1 * p.cos(a1);
    const y1 = r1 * p.sin(a1);

    p.point(x1, y1);

    a1 += 1;
  };
};

new p5(sketch);
