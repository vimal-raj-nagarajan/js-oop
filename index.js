//If an object has atleast one method, that object has behaviour
//Object literals - simple way to create an object

const circle = {
  radius: 1,
  draw: function (){
    console.log('draw');
  }
}


//Factory function -  a way to creat an object with methods

function createCircle(radius){
  return {
      radius: radius,
      draw: function (){
        console.log('draw');
    }
  }
}

const circle1 = createCircle(2)

//construcor function - (like a class). No need to return. new does the return
function Circle2(radius) {
  this.radius = radius;
  this.draw = function(){
    console.log('draw');
  }
}

const another = new Circle2(1);