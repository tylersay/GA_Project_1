const $drinking = $("<div class='landingTitle'>").text("Drinking.")//.slideUp( 300 ).delay( 800 ).fadeIn( 100 );
const $bluff = $("<span>").text("Bluff.")//.slideUp( 300 ).delay( 1800 ).fadeIn( 100 );
const $dice = $("<span>").text("Dice!")//.slideUp( 300 ).delay( 2800 ).fadeIn(  100 );
let $landingTitle = $drinking.append($bluff).append($dice)

const $tyler = $("<div class='tyler'>").text("by Tyler111")//.slideUp( 300 ).delay( 3800 ).fadeIn(  100 );
// const landDiceURL = "C:\Users\sayqi\projects\Project_1\Pictures\dices (1).jpg"
// const inputName = document.createElement("input").type("text");

const $rollButton = $("<button>").addClass("rollButton").text("Roll")


const $player1Arr = []

const $rollDice = () => {
  for (i=0; i<5; i++) {
    const randNum = Math.ceil(Math.random()*6);
    $player1Arr.push(randNum);

  };
};



const main = () => {
 
  //landing page
  $(".container").append($landingTitle).append($tyler)
  // const $image = $("<img>").attr("src", `${landDiceURL}`)
  // // image.src = landDiceURL;
  // $(".container").append($image);
  
// on click
  $(document).one('click', () => { 
    console.log("lets go");
    $landingTitle.remove();
    $tyler.remove();
    
    $(".container").append($rollButton);
    // $image.remove();

  //   $(".container").append($('<input>').attr({
  //     type: 'text',
  //     id: 'player1',
  //     name: 'Player 1 Name:'
  // }));
    
  });
  
  // click rll button
  $rollButton.one('click',  () =>{
    $rollDice();
    console.log($player1Arr);
    for (i = 0; i <5; i++) {
      if ($player1Arr[i] === 1) {}
    }
  })
  

      // console.log($player1Arr);
    // })








}

$(main);