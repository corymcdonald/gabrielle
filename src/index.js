
document.addEventListener('DOMContentLoaded', (event) => {
  const maxImage = 13
  const number = Math.floor(Math.random() * maxImage);
  const image = document.getElementById("pixelitimg")
  var img = new Image();

  img.onload = () => {
    image.src = `./image${number}.png`;
    console.log('loading')

    const px = new pixelit({ maxHeight: 300, maxWidth: 300 });
    px.draw().pixelate();
    px.resizeImage()
  }
  img.src = `./image${number}.png`;
});
