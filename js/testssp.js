// QUnit.test( "Random Number? test test", function( assert ) {
//     let ranTest = null;
//     ranNum = ranTest;
//     if (ranTest ==     
//       ) ranTest = true;
//     assert.equal(ranTest, true);
//  });

//  QUnit.test( "Random Number?", function( assert ) {
//     const isValid = randomNum(1);
//   assert.equal(isValid, 0 ? 1 : 2);
// });

QUnit.test( "Random Number test", function( assert ) {
  let maxNum = 3;
  let test = randomNum() < maxNum ? true : false; 
assert.equal(test, true);
});

QUnit.test( "CPU Check", function( assert ) {
  let cpuChoices = ['rock', 'heheutløsfeil!', 'scissors'];
  assert.equal(choice.includes(cpuChoices[0]), true);
  assert.equal(choice.includes(cpuChoices[1]), true);
  assert.equal(choice.includes(cpuChoices[2]), true);
});

QUnit.test( "CPU Test", function( assert ) {
  let test = cpuChoose();
  let testResult = false;
  switch (test) {
      case 'rock':
       testResult = true;
       break;
      case 'scissors':
        testResult = true;
        break;
      case 'paper':
        testResult = true;
        break;
  };
  assert.equal(testResult, true);
});

QUnit.test( "CPU Chicken", function( assert ) {
  let chicken = choice;
  assert.deepEqual(chicken,"", true);
});

QUnit.test(" CPU Genererer ett Tilfeldig Tall", function(assert) {
let veldigSant = randomNum();

assert.equal((veldigSant < 3 && veldigSant > -1), true);
});