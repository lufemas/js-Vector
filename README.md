# js-Vector

Exercise from Eloquent Javascript

## A vector type  
- Write a class Vec that represents a vector in two-dimensional space. It takes x and y parameters (numbers), which it should save to properties of the same name.  
- Give the Vec prototype two methods, plus and minus, that take another vector as a parameter and return a new vector that has the sum or difference of the two vectors’ (this and the parameter) x and y values.  
- Add a getter property length to the prototype that computes the length of the vector—that is, the distance of the point (x, y) from the origin (0, 0).

## Result:

```js
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
```

