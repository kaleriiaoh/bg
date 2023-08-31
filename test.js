var h1Element = document.querySelector('h1');
if (h1Element) {
  var h1Text = h1Element.textContent;
  console.log(h1Text);
} else {
  console.log('<h1> none');
}
