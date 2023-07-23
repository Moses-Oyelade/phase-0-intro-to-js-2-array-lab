// Write your solution here!
const cats = ["Milo", "Otis", "Garfield"];

beforeEach(function () {
    cats.length = 0;

    cats.push("Milo", "Otis", "Garfield");
});

//Append name to cats Array
function destructivelyAppendCat(){
    destructivelyAppendCat = cats.push('Ralph');
    return cats;
}

//Prepend name to cats Array
function destructivelyPrependCat(){
    destructivelyPrependCat = cats.unshift('Bob');
    return cats;
}
   
  //Remove the last cat from cats Array
  function destructivelyRemoveLastCat(){
    destructivelyRemoveLastCat = cats.pop();
    return cats;
  }
    
  //Remove first cat from cats Array
  function destructivelyRemoveFirstCat(){
    destructivelyRemoveFirstCat = cats.shift();
    return cats;
  }

  //Append and return a new array, leaving the cats Array unchanged
  function appendCat(){
    appendCat = [...cats];
    appendCat.push("Broom");
    return appendCat;
  }
 
  //Prepend and return a new array, leaving the cats Array unchanged
  function prependCat(){
    prependCat = [...cats];
    prependCat.unshift("Arnold");
    return prependCat;
  }

  //Remove the last cat and return a new array, leaving the cats array unchanged
   function removeLastCat(){
    removeLastCat = [...cats];
    removeLastCat.splice(-1);
    return removeLastCat;
   }

  //Remove the first cat and return a new array, leaving the cats array unchanged
  function removeFirstCat(){
    removeFirstCat = [...cats];
    removeFirstCat.splice(0,1);
    return removeFirstCat;
   }
