let speech= new SpeechSynthesisUtterance();

let voices = [];

let voiceSelect = document.querySelector("select");
voiceSelect.addEventListener("change", ()=>{
    speech.voice = voices[voiceSelect.value];
})

window.speechSynthesis.onvoiceschanged= ()=>{
    voices= window.speechSynthesis.getVoices();
    speech.voice=voices[0];
    voices.forEach((voice, i)=>{
        voiceSelect.options[i]=new Option(voice.name, i);
    })
}

const btn= document.querySelector("button");
btn.addEventListener('click', ()=>{
    speech.text= document.querySelector("textarea").value;
    window.speechSynthesis.speak(speech);
})