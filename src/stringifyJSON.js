// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:
var stringifyJSON = function(obj) {
  // your code goes here
  if (typeof obj === 'number') {
  	return obj.toString();
  }  else if (obj === null) {
    return 'null';
  }  else if (typeof obj === 'boolean') {
  	return obj === true ? 'true' : 'false';
  }  else if (typeof obj === 'string') {
  	return '\"' + obj + '\"';
  }  else if (typeof obj === 'object' && Array.isArray(obj)) {
  	var newstring = '[';
  	var stringedvalues = [];
    for (var i = 0, x = obj.length; i < x; i++) {
    	stringedvalues.push(stringifyJSON(obj[i]));
    }
    newstring+=stringedvalues.join(',');
    newstring+=']';
    return newstring;
  }  else if (typeof obj === 'object') {
    var newstring = '{';
    var keysandvalues = [];
    var keys = Object.keys(obj);
    var length = keys.length;
    for (var i = 0; i < length; i++) {
      if (typeof obj[keys[i]] !== 'function' && typeof obj[keys[i]] !== 'undefined'){
        keysandvalues.push(stringifyJSON(keys[i]) + '\:' + stringifyJSON(obj[keys[i]]));
      }
    }
    newstring+=keysandvalues.join(',');
    newstring+='}';
    return newstring;
  }  
};
