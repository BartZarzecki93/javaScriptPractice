//functions that check charatcters, if the character is the same it will change the output of the final string

function duplicateEncode(word) {
  var newName = "";
  var lower = word.toLowerCase();
  for (var i = 0; i < lower.length; i++) {
    if (lower.indexOf(lower[i]) === lower.lastIndexOf(lower[i])) {
      newName += ")";
    } else {
      newName += "(";
    }
  }
  return newName;
}

duplicateEncode("din");
