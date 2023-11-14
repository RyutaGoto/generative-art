import p5 from "p5";

const sketch = (p: p5) => {
  /** 初期化処理 */
  p.setup = () => {
    p.createCanvas(p.windowWidth, p.windowHeight);

    p.strokeWeight(10);
    p.stroke(240);
    p.noFill();
    p.circle(p.width / 4, p.height / 2, 100);

    p.noStroke();
    p.fill(240);
    p.circle((p.width / 4) * 3, p.height / 2, 100);
  };

  /** フレームごとの描画処理 */
  p.draw = () => {};
};

new p5(sketch);
