let time = 3000,
    currentImageIndex = 0,
    images = document.querySelectorAll("#slider img")
    max = images.length

let imagemUsadas = [];

  function nextImage()
  {
    images[currentImageIndex].classList.remove("selected")

    // do {
    //   imagemSelecionada = images[Math.floor(Math.random() * images.length)].classList;
    // } while (imagemUsadas.includes(imagemSelecionada));
    // imagemUsadas.push(imagemSelecionada);
    // currentImageIndex = imagemSelecionada

    currentImageIndex++

    if(currentImageIndex >= max)
        currentImageIndex = 0

    images[currentImageIndex].classList.add("selected")
  }

function start()
{
  setInterval(() => {
    nextImage()
  }, time);
}

window.addEventListener("load", start)