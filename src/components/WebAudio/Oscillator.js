export const playOscillator = (duration) => {
  let audioCtx = new (window.AudioContext || window.webkitAudioContext)();
  let gainNode = audioCtx.createGain();
  let osc = audioCtx.createOscillator();
  osc.type = 'square';
  // need a dot length, though WPM is the way it is generally done
  // 600-1000 hz is a good range for a morse code tone
  osc.frequency.setValueAtTime(600, audioCtx.currentTime);
  gainNode.gain.setValueAtTime(1, audioCtx.currentTime);
  osc.connect(gainNode).connect(audioCtx.destination);
  osc.start()
  osc.stop(audioCtx.currentTime + duration);
}

/*
if(typeof num === "number" && context.state !== "running") {
  resolve(playOscillator(num))
} else { reject(Error("You need a number")) }
})
// promises should handle the succession
// if audio context is inactive, play sound
let initSound = (num) => {
  return new Promise(resolve, reject) {
    if(typeof num === number) {
      resolve(playOscillator(num))
    } else { reject(Error("You need a number")) }
  }
}
*/
