import p5 from "p5";

const sketch = (p: p5) => {
  /** 初期化処理 */
  p.setup = () => {
    p.createCanvas(p.windowWidth, p.windowHeight);
    p.circle(p.width / 2, p.height / 2, 200);
  };

  /** フレームごとの描画処理 */
  p.draw = () => {};
};

new p5(sketch);
