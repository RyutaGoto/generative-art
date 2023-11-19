import p5 from "p5";

const sketch = (p: p5) => {
  /** 初期化処理 */
  let x1: number, x2: number, x: number, y: number;
  p.setup = () => {
    p.createCanvas(p.windowWidth, p.windowHeight);
    p.textAlign(p.CENTER, p.CENTER);

    x1 = 30;
    x2 = p.width - 30;
    x = x1;
    y = p.height / 2;
  };

  /** フレームごとの描画処理 */
  p.draw = () => {
    x++;
    if (x >= x2) {
      x = x1;
    }

    p.clear(0, 0, 0, 0);

    p.noStroke();
    p.fill(240);
    p.text(x1, x1, y - 65);
    p.text(x2, x2, y - 65);
    p.text(x, x, y - 65);
    p.text(p.norm(x, x1, x2).toFixed(2), x, y + 65);
    p.text(0, x1, y + 65);
    p.text(1, x2, y + 65);

    p.stroke(240);
    p.noFill();
    p.line(x1, y - 45, x1, y - 25);
    p.line(x2, y - 45, x2, y - 25);
    p.line(x, y - 45, x, y - 25);
    p.line(x, y + 45, x, y + 25);
    p.line(x1, y + 45, x1, y + 25);
    p.line(x2, y + 45, x2, y + 25);

    p.stroke(240);
    p.noFill();
    p.line(x1, y, x2, y);

    p.stroke(240);
    p.fill("#292a33");
    p.circle(x, y, 20);
  };
};

new p5(sketch);
