// A Vector type

class Vec{
  constructor( x, y){
    this.x = x;
    this.y = y;
  }

  plus(...vecs) {
    let result = this;
    for (let vec of vecs) {
      result = Vec.sum(result, vec);;
    }
    return result;
  }

  minus(...vecs) {
    let result = this;
    for (let vec of vecs) {
      result = Vec.subtraction(result, vec);
    }
    return result;
  }

  get length(){
    let length = Math.sqrt(this.x**2 + this.y**2);
    length = Math.abs(length);
    return length;
  }

  static sum( vec1, vec2){
    return new Vec( vec1.x + vec2.x, vec1.y + vec2.y);
  }

  static subtraction( vec1, vec2){
    return new Vec( vec1.x - vec2.x, vec1.y - vec2.y);
  }
}


let a = new Vec (2,2);
let b = new Vec (5,1);
let c = Vec.sum(a, b);

console.log(a.plus(b));
// -> Vec { x: 7, y: 3 }

console.log(a.plus(b, c, {x:1,y:20}));
// -> Vec { x: 15, y: 26 }

console.log(a.minus(b));
// -> Vec { x: -3, y: 1 }

console.log(a.minus(b, c, {x:5,y:4}));
// -> Vec { x: -15, y: -6 }

console.log(c.length)
// -> 7.615773105863909

