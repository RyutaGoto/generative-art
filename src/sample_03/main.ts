import p5 from "p5";

const sketch = (p: p5) => {
  p.setup = () => {
    p.createCanvas(p.windowWidth, p.windowHeight);
    p.angleMode(p.DEGREES);
    p.background(30);
  };

  /** フレームごとの描画処理 */
  p.draw = () => {};
};

new p5(sketch);
