# Three.js Governance

Never instantiate:
- materials inside render loops
- geometries inside render loops
- textures inside render loops

Mandatory:
- memoized assets
- resource disposal
- DPR clamping
- reduced draw calls

Prevent:
- GPU leaks
- shader recompilation spikes
- excessive postprocessing
- unnecessary particle systems

Mobile:
- reduce geometry complexity
- reduce shader cost
- reduce DPR