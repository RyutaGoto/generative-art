import p5 from "p5";

const sketch = (p: p5) => {
  p.setup = () => {
    p.createCanvas(p.windowWidth, p.windowHeight, p.WEBGL);
    p.angleMode(p.DEGREES);
  };

  /** フレームごとの描画処理 */
  p.draw = () => {
    p.background(30);

    p.rotateX(60);
    p.noFill();
    p.stroke(255);

    for (let i = 0; i < 10; i++) {
      p.beginShape();
      for (let j = 0; j < 360; j += 10) {
        const rad = i * 8;
        const x = rad * p.cos(j);
        const y = rad * p.sin(j);
        const z = p.sin(p.frameCount + i * 20) * 50;
        p.vertex(x, y, z);
      }
      p.endShape(p.CLOSE);
    }
  };
};

new p5(sketch);
