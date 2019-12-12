/*
audioCtx = new (window.AudioContext || window.webkitAudioContext)();
gainNode = audioCtx.createGain();
osc = audioCtx.createOscillator();
osc.type = 'square';
// need a dot length, though WPM is the way it is generally done
// 600-1000 hz is a good range for a morse code tone
osc.frequency.setValueAtTime(600, audioCtx.currentTime);
gainNode.gain.setValueAtTime(1, audioCtx.currentTime);
osc.connect(gainNode).connect(audioCtx.destination);
osc.start()
osc.stop(audioCtx.currentTime + 2);

You can only call start/stop once
Consider an audio buffer source and start/stop the sample as needed

*/
