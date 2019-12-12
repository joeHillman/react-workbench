# Web Audio API
## Intro
Involves handling audio operations inside an audio context and has been designed to handle modular routing.
Basic operations are handled with audio nodes which are linked together to form an audio routing graph.
Several sources with different types of channel layouts are supported within a single context.

Audio nodes are linked by chains and webs by their inputs and outputs.
Sources provide an array of sounds either mathematically generated or from an audio file.

Outputs can be linked to other inputs for effects chaining.

Once a sound is ready it is then linked to a destination.

Sample workflow
* Create audio context
* Inside content, create sources (audio element, oscillator, stream)
* Create effects
* Choose final destination of audio
* Connect sources to effect, effects to destination
* Establish connections from sources thru 0 or more effects, eventually ending at a destination
* Destination is not required if just used for visualizations

## Interfaces
### General interfaces that shape audio graphs into Web Audio API usage
* Audio Context
* Audio Context Options
* Audio Node
* Audio Param
* Audio Param Map
* Base Audio Context
* Ended Event

### Defining Audio Sources
* Audio Scheduled Source Node
* Oscillator Node
* Audio Buffer
* Audio Buffer Source Node
* Media Element Audio Source Node
* Media Stream Audio Source Node
* Media Stream Track Audio Source Node

Sources can be generated
* Directly from JS by an audio node
* Created from raw PCM data, audio context supports decoding
* Taken from media elements like <audio, video>
* Directly from WebRTC media stream (webcam or microphone)

### Defining audio effects libraries
* Biquad Filter Node
* Convolver Node
* Delay Node
* Dynamics Compressor Node
* Gain Node
* Wave Shaper Node
* Periodic Wave
* IIR Filter Node

### Defining Audio Destinations
* Audio Destination Node
* Media Stream Audio Destination Node

### Data Analysis and Visualzation
* Analyser Node

### Splitting and Merging Audio Channels
* Channel Splitter Node
* Channerl Merger Node

### Audio Spatialization
* Audio Listener
* Panner Node
* Stereo Panner Node

### Audio Processing in Javascript
* Audio Worklet
* Audio Worklet Node
* Audio Worklet Processor
* Audio Worklet Global Scope

### Offline and Background Audio Processing
* Offline Audio Context
* Complete Event
* Offline Audio Completion Event
