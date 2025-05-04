// expose.js
window.addEventListener('DOMContentLoaded', init);

function init() {
   const dropdown = document.getElementById("horn-select")
   const hornImage = document.querySelector("[alt='No image selected']")
   const audio = document.getElementsByTagName("audio")[0]

   dropdown.addEventListener("change", (event) => {
      console.log(event)
      hornImage.src = `/assets/images/${event.target.value}.svg`
      audio.src = `/assets/audio/${event.target.value}.mp3`
   })

   const slider = document.getElementById("volume")
   const volumeDiv = document.getElementById("volume-controls")
   const volumeImage = volumeDiv.getElementsByTagName("img")[0]

   slider.addEventListener("input", (event) => {
      console.log(event.target.value)
      console.log(volumeImage)
      audio.volume = event.target.value/100
      if (event.target.value == 0) {
         volumeImage.src = `/assets/icons/volume-level-0.svg`
      } else if (event.target.value < 33) {
         volumeImage.src = `/assets/icons/volume-level-1.svg`
      } else if (event.target.value < 67) {
         volumeImage.src = `/assets/icons/volume-level-2.svg`
      } else {
         volumeImage.src = `/assets/icons/volume-level-3.svg`
      }
   })

   const playButton = document.getElementsByTagName("button")[0]

   playButton.addEventListener("click", () => {
      audio.play()
      if (hornImage.src.split("/")[5] == "party-horn.svg") {
         const jsConfetti = new JSConfetti()
         jsConfetti.addConfetti()

      }
   })
}