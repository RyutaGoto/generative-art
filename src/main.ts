import p5 from "p5";

const sketch = (p: p5) => {
  /** 初期化処理 */
  let d = 0;
  let bgColor: number, circleColor: number;
  p.setup = () => {
    p.createCanvas(p.windowWidth, p.windowHeight);
    p.noStroke();
    circleColor = p.random(255);
    reset();
  };

  /** フレームごとの描画処理 */
  p.draw = () => {
    d += 4;
    if (d / 2 > p.dist(0, 0, p.width / 2, p.height / 2)) {
      reset();
    }
    p.background(bgColor);
    p.fill(circleColor);
    p.circle(p.width / 2, p.height / 2, d);
  };

  const reset = () => {
    d = 0;
    bgColor = circleColor;
    circleColor = p.random(255);
  };
};

new p5(sketch);
