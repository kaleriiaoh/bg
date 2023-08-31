var h1Element = document.querySelector('h1');
if (h1Element) {
  var h1Text = h1Element.textContent;
  alert(h1Text);
} else {
  alert('Элемент <h1> не найден на странице.');
}
