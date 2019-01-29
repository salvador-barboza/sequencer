import AdjustableTimeInterval from '../utils/AdjustableTimeInterval'
import { STEP_COUNT } from '../utils/Constants'
import { SequencerTrack } from './SequencerTrack'
import { Transport } from 'tone';


class Sequencer {
  private timer: AdjustableTimeInterval
  private currentBPM = 1000
  private currentElementIndex = 0

  public tracks: SequencerTrack[] = []

  constructor() {
    this.timer = new AdjustableTimeInterval(this.step)
  }

  public setBPM = (bpm: number) => {
    if (bpm > 240 || bpm < 1) {
      throw new Error("wtf")
    }
    this.currentBPM = 1000 * 60 / bpm
    this.timer.setInterval(this.currentBPM)
  }
  public get BPM(): number { return 1 / this.currentBPM * 60 * 1000}
  public get isActive(): boolean { return this.timer.isActive }
  
  public stop = () => this.timer.stop()
  
  public start = () => this.timer.start()   

  public addTrack = (track: SequencerTrack) =>
    this.tracks.push(track)

  public onStep: (step: number) => void

  private triggerTrackStep = () => {
    for (let i of this.tracks) {
      i.step(this.currentElementIndex)
    }
  }

  private step = () => {
    this.onStep(this.currentElementIndex)
    this.triggerTrackStep()
    
    this.currentElementIndex = this.currentElementIndex < STEP_COUNT-1 
    ? this.currentElementIndex + 1
    : 0
  }

}

export default Sequencer
