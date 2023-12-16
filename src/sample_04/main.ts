import p5 from "p5";

const sketch = (p: p5) => {
  p.setup = () => {
    p.createCanvas(p.windowWidth, p.windowHeight, p.WEBGL);
    p.angleMode(p.DEGREES);
  };

  /** フレームごとの描画処理 */
  p.draw = () => {
    p.background(30);
  };
};

new p5(sketch);
