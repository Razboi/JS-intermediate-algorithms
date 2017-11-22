/*
Write an algorithm that will identify valid IPv4 addresses in dot-decimal format.
IPs should be considered valid if they consist of four octets, with values
between 0..255 (included).

Input to the function is guaranteed to be a single string.

Note: leading zeros (e.g. 01.02.03.04) are considered not valid.
*/

function ipValidator( str ) {
  var numbers = str.split(".");
  // if the IP doesn't have four octets return invalid
  if ( numbers.length != 4 ) {
    return "Invalid IP address";
  }
  for ( var i = 0; i < numbers.length; i++ ) {
    // if any ip number is not between 0 and 255 return invalid
    if ( numbers[ i ] > 255 || numbers[ i ] < 0 ) {
      return "Invalid IP address";
    }
    // if any number with more than one digit is leaded by a 0 return invalid
    if ( numbers[ i ].length > 1 && numbers[ i ][ 0 ] == 0 ) {
      return "Invalid IP address";
    }
  }
  // if everything is correct return valid
  return "Valid IP address";
}

console.log( ipValidator("123.45.67.8") );
