extend(exports, require('./manip'), require('./encoding'));

function extend(target) {
  var obj, key;
  for (var i = 1, l = arguments.length; i < l; i++) {
    if ((obj = arguments[i])) {
      for (key in obj)
        target[key] = obj[key];
    }
  }
  return target;
}
