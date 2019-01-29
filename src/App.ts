// // import Sampler from './Sampler'

// // class SequencerBoard {
// //   private activeTiles = new Set<Element>()
// //   private elements: Element[]

// //   public toggleElement = (el: Element) => {
// //     if (this.activeTiles.has(el)) {
// //       this.activeTiles.delete(el)      
// //     } else {
// //       this.activeTiles.add(el)      
// //     }

// //     el.classList.toggle('on')
// //   }

// //   public get activeElement() {
// //     return 
// //   }

// //   public addElements = (elements: Element[]) => {
// //     this.elements = elements 
// //     elements.forEach(el =>
// //        el.addEventListener('mousedown', () => this.toggleElement(el)))
// //   }  
// // }


// class App {
//   private seqBoard = new SequencerBoard()
//   private playPauseButton: HTMLButtonElement
//   private bpmSelectorInput: HTMLInputElement
//   private steps: HTMLDivElement[]
//   private sequencer: Sequencer 

//   public toggleSequencer = () => {
//     if (this.sequencer.isActive) {
//       this.sequencer.stop()
//     } else {
//       this.sequencer.start()
//     }
//   }

//   private bootstrap = () => {
//     this.playPauseButton = document.querySelector('#button')
//     this.bpmSelectorInput = document.querySelector('#rate')
//     this.steps = Array.from(document.querySelectorAll('.step'))
//   }

//   public start = () => {
//     this.bootstrap()

//     this.seqBoard.addElements(this.steps)
//     // this.sequencer = new Sequencer(this.steps, Sampler)

//     // this.playPauseButton.addEventListener('mousedown', this.toggleSequencer)
//     // this.bpmSelectorInput.addEventListener('input', () => {
//     //   this.sequencer.setBPM(Number(this.bpmSelectorInput.value))
//     // })
//   }
// }

// export default App
