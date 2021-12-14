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

//construcor function - (like a class)

function Circle2(radius) {
  
}