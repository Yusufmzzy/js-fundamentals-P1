const exercise9 = require("./exercise-9");

function exercise10() {
  // Exercise 10
  //
  // Write a loop that makes seven calls to console.log to
  // output the following triangle:
  // #
  // ##
  // ###
  // ####
  // #####
  // ######
  // #######
  //
  // Write code between the lines (below)
  // -----------------------------------------------------------------
   let tri = '#' 
   for ( let i = 1; i <= 7 ; i++) {
    console.log(tri) 
     tri = tri + '#'
    }
    
 

     
  
     
     
  // -----------------------------------------------------------------
  // Write code between the lines (above)
  //
  //
  //
  //
  // 
  //
}

// Once you are done type the following in the terminal to test your answer(s).
// yarn test exercise-10
exercise10()
module.exports = exercise10;
