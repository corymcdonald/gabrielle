import ColorThief from "colorthief";
import tinycolor from "tinycolor2";
import JSConfetti from "js-confetti";
const jsConfetti = new JSConfetti();

const randomN = (n) => Math.floor(Math.random() * n);

const phrases = [
  "you are an absolutely gorgeous woman",
  "I think that you are incredibly smart",
  "you are pretty dang neat",
  "you are a very thoughtful, kind, and caring individual",
  "I love when you get so excited that you clap your hands",
  "you are a great dog mom",
  "Gabrielle is a great name",
  "You are perfect just the way you are",
  "You kill it on the dance floor",
  "I always look forward to spending time with you",
  "You have a great laugh and I love seeing you smile",
  "I appreciate how non-judgemental you are",
  "When I talk to you it always make my day",
  "I love talking to you",
  "I'm glad I met you",
  "You have great taste in music",
  "You are my favorite",
  "You have beautiful eyes",
  "you're the best at celebrating birthdays",
  "you have a talent for making delicious baked goods",
  "You bring happiness into my day",
  "you have a great group of friends",
  "I like how passionate you are about justice",
  "I am impressed at how good you are with words",
  "You have a way of making me smile",
  "You always smell really good",
  "I really like your face",
  "You look really pretty today",
];

document.addEventListener("DOMContentLoaded", (event) => {
  regenerate();
});

const regenerate = () => {
  const maxImage = 31;
  let number = Math.floor(Math.random() * maxImage) + 1;
  const img = document.getElementById("pixelitimg");

  const src = `/image${number}.png`;
  img.onload = function () {
    const colorThief = new ColorThief();
    const palette = colorThief
      .getPalette(img)
      .map((x) => `rgb(${x.join(",")})`);

    const px = new pixelit();
    px.draw().pixelate();
    postLoad();
    populateWords(palette);
  };
  img.src = src;
};

const postLoad = () => {
  const circle = document
    .querySelector(".cross-stitch")
    .getBoundingClientRect();
  document.getElementById("topWords").setAttribute("width", circle.width - 50);

  let cx = 0;
  let cy = 200;
  let endX = 400;
  let offset = 200;

  const topPath = `M ${cx} ${cy} C ${cx},${cy - offset} ${endX},${
    cy - offset
  } ${endX} ${cy}`;
  document.getElementById("top").setAttribute("d", topPath);

  let bottomPath = `M ${cx} ${cy} C ${cx},${cy + offset} ${endX},${
    cy + offset
  } ${endX} ${cy}`;
  document.getElementById("bottom").setAttribute("d", bottomPath);
};

const populateWords = (palette) => {
  const selected = palette[randomN(palette.length)];
  const random = tinycolor(selected).darken(20).toHexString();

  const phrase = phrases[randomN(phrases.length)];
  const words = phrase.split(" ");
  const first = words.slice(0, words.length / 2).join(" ");
  const offset = words.length % 2 == 0 ? 0 : 1;
  const second = words.slice(-words.length / 2 - offset).join(" ");

  const topText = document.getElementById("topText");
  const bottomText = document.getElementById("bottomText");

  topText.children[0].innerHTML = first;
  bottomText.children[0].innerHTML = second;

  topText.setAttribute("x", percentageFormula(first.length) + "%");
  bottomText.setAttribute("x", percentageFormula(second.length) + "%");
  topText.setAttribute("fill", random);
  bottomText.setAttribute("fill", random);
};

window.mobileCheck = function () {
  let check = false;
  (function (a) {
    if (
      /(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(
        a
      ) ||
      /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(
        a.substr(0, 4)
      )
    )
      check = true;
  })(navigator.userAgent || navigator.vendor || window.opera);
  return check;
};

const percentageFormula = (length) => -1.55 * length + 68.5;

document.querySelector(".button").onclick = (e) => {
  e.preventDefault();

  let configs = [ ]

  Array.from(['❤️', "💕", "❤️", "💙", "💗", "💛", "💖", "💚", "🧡", "🤎"]).forEach((i) => {
    configs.push({ emojis: [i],  confettiNumber: 25, confettiRadius: 100,  emojiSize:200 })
  })

  const selected = configs[randomN(configs.length)];
  jsConfetti.addConfetti(selected);
  regenerate();
};
