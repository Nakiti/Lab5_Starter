// explore.js

window.addEventListener('DOMContentLoaded', init);

function init() {
   const synth = window.speechSynthesis
   const dropdown = document.getElementById("voice-select")
   const textArea = document.getElementById("text-to-speak")
   const button = document.getElementsByTagName("button")[0]
   const image = document.getElementsByTagName("img")[0]

   let voices = []

   function populateVoices() {
      voices = synth.getVoices()

      for (let i = 0; i < voices.length; i++) {
         const option = document.createElement("option")
         option.textContent = `${voices[i].name} (${voices[i].lang})`
         option.value = voices[i].name

         dropdown.appendChild(option)
      }
   }

   populateVoices()
   if (synth.onvoiceschanged !== undefined) {
      synth.onvoiceschanged = populateVoices;
   }
   
   button.addEventListener("click", () => {
      const speech = new SpeechSynthesisUtterance(textArea.value)
      const selected = voices.find(item => item.name == dropdown.value)

      speech.voice = selected
      synth.speak(speech)

      speech.onstart = () => {
         image.src = "./assets/images/smiling-open.png"
      }

      speech.onend = () => {
         image.src = "./assets/images/smiling.png"
      }
   })
}