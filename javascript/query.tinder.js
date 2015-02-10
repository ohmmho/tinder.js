Tinder = window.Tinder || {};

Tinder.query = function(something) {
  return document.querySelector(something);
}

Tinder.on = function(element, event, func) {
  element.addEventListener(event, func);
}
