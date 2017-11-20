/*
You are at position [0, 0] in maze 3x3 and you can only move in one of the four
cardinal directions (i.e. North, East, South, West). Return true if you can reach
position [2, 2] or false otherwise. Empty positions are marked ".". Walls are marked W.
Start and exit positions are empty in all test cases.
*/
function pathFinder ( arr ) {
  var blockedY = true;
  var blockedX = true;
  // check all the rows
  for ( var i = 0; i < arr.length; i++ ) {
    // if a complete row is blocked return false
    if ( arr[ i ].every( elem => elem == "W") ) {
      return false;
    }
    // if the middle column is blocked return false
    if ( arr[ 0 ][ 1 ] == "W" && arr[ 1 ][ 1 ] == "W" && arr[ 2 ][ 1 ] == "W" ) {
      return false;
    }
    // check all the columns in the rows
    for ( var j = 0; j < arr[ i ].length; j++ ) {
      try {
        // if the right and under cells are blocked
        if ( arr[ i ][ j + 1 ] == "W" && arr[ i + 1 ][ j ]  == "W" ) {
          // check all the other cells in the column
          for ( var k = i + 1; k < arr.length; k++ ) {
            // if any cell is not blocked set blockedY to false and break
            if ( arr[ k ][ j ] != "W" ) {
              blockedY = false;
              break;
            }
          }
          // if all the cells in the column are blocked
          if ( blockedY == true ) {
            // check all the cells in the row
            for ( var m = j + 1; m < arr[ i ].length; m++ ) {
              // if any cell is not blocked set blockedX to false and break
              if ( arr[ i ][ m ] != "W" ) {
                blockedX = false;
                break;
              }
            }
            // if all the cells in the row are blocked return false
            if ( blockedX == true ) {
              return false;
            }
          }
        }
      }
      catch ( TypeError ) {
        continue;
      }
    }
  }
  // if there isn't any blockage return true
  return true;
};

console.log( pathFinder([
  [ ".", ".", "." ],
  [ ".", "W", "W" ],
  [ ".", "W", "." ]
]) );
