/*
MyLibrary
by Nihaal Varma, 2020
*/

function Touching(object1,object2){
    if(object1.x -  object2.x <  object2.width/2 + object1.width/2 &&
      object2.x - object1.x <  object2.width/2 + object1.width/2 &&
      object1.y -  object2.y <  object2.height/2 + object1.height/2 &&
      object2.y - object1.y <  object2.height/2 + object1.height/2){
        return true;
       }
       else{
        return false;
       }
  }
  
  function Bounce(Object1,Object2){
    if(Object2.x - Object1.x < Object1.width/2 + Object2.width/2 &&
      Object1.x - Object2.x < Object1.width/2 + Object2.width/2){
        Object1.velocityX = -1*Object1.velocityX;
        Object2.velocityX = -1*Object2.velocityX;
      }
      if(Object2.y - Object1.y < Object1.height/2 + Object2.height/2 &&
        Object1.y - Object2.y < Object1.height/2 + Object2.height/2){
          Object1.velocityY = -1*Object1.velocityY;
          Object2.velocityY = -1*Object2.velocityY;
    }
  }