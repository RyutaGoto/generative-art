import p5 from "p5";

const sketch = (p: p5) => {
  /** 初期化処理 */
  let d = 0;
  p.setup = () => {
    p.createCanvas(p.windowWidth, p.windowHeight);
    p.noStroke();
    p.fill(200);
  };

  /** フレームごとの描画処理 */
  p.draw = () => {
    d++;
    p.clear(0, 0, 0, 0);
    p.circle(p.width / 2, p.height / 2, d);
  };
};

new p5(sketch);
