/**
 Implement the function unique_in_order which takes as argument a sequence and 
 returns a list of items without any elements with the same value next to each 
 other and preserving the original order of elements.


uniqueInOrder('AAAABBBCCDAABBB') == ['A', 'B', 'C', 'D', 'A', 'B']
uniqueInOrder('ABBCcAD')         == ['A', 'B', 'C', 'c', 'A', 'D']
uniqueInOrder([1,2,2,3,3])       == [1,2,3]

 */

function songDecoder(song) {
  var n = song.search("WBU");
  var m = song.search("WBUWBU");

  for (var container in song) {
    if (container == n) {
      var res = song.replace(/WUB/g, " ");
      console.log(res);
    } else if (container == m) {
      var res = song.replace(/WUBWUB/g, "");
      console.log(res);
    }
  }
}
songDecoder("AWUBBWUBC");
//songDecoder("AWUBWUBWUBBWUBWUBWUBC");
//songDecoder("WUBAWUBBWUBCWUB");
