// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But instead we're going to implement it from scratch:

var getElementsByClassName = function(className){
  // your code here
  if (arguments.length === 0) {
  	throw new TypeError("Failed to execute 'getElementsByClassName' on 'Document': 1 argument required, but only 0 present.");
  }
  var matchedClassElements = [];
  window.onload = function(){
    var init = function(body){
      var checkNode = function(nextNode) {
	    if (nextNode.classList && nextNode.classList.contains(className)) {
	      matchedClassElements.push(nextNode);
	    }
	    listChildNodes(nextNode);
	  };
	  var listChildNodes = function(node){
	  	var currentNodes = node.childNodes;
	    for (var j = 0, y = currentNodes.length; j < y; j++){
	  	  checkNode(currentNodes[j]);
	    }
	  };
	  checkNode(body);
    };
    init(document.body);
  }();
  return matchedClassElements;
};