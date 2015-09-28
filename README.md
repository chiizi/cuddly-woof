# cuddly-woof
Cuddly-woof is a canvas library that makes tasks like drawing colored boxes really easy. It introduces a new "operator" (it's not really an operator, but it's fun to pretend that it is) to JavaScript called the pokerface operator, which improves the chained function paradigm by allowing people to indicate if they want the function to only return "this", or "this" and also other information.

# ._.
That's the pokerface operator! Cuddly-woof functions can be chained. But when prefixed with the pokerface operator, they enter "data mode", in which they return an array with "this" as its first element and various useful data as its other elements.

# ._._.
And that's the doublepokerface operator. It triggers "persistent data mode", which causes data mode to remain on until the pokerface operator is used again.

```
var a = new CuddlyWoof();
console.log(a ._._. color("#00FF88")[1]); // logs old color
console.log(a.color("#000000")[1]); // logs #00FF88 because persistentDatamode is true
console.log(a ._. color("#FF00FF")[1]); // throws error because when persistentDatamode is true, ._. resets persistentDatamode and datamode

a.rect.fill(0, 0, 32, 32, "#00FF88").append(document.getElementById("canvas-wrapper"));
```
It also does layers.

And that's all there is to it, really.
