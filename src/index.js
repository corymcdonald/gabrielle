
document.addEventListener('DOMContentLoaded', (event) => {
  console.log("Start")
  const maxImage = 12
  const number = Math.floor(Math.random() * maxImage) + 1;
  const img = document.getElementById("pixelitimg")

  const src = `/image${number}.png`;
  img.onload = function() {
    const px = new pixelit();
    px.draw().pixelate();
  }
  console.log(`loading ${ src }`)
  img.src = src

});
