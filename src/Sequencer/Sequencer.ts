import AdjustableTimeInterval from '../utils/AdjustableTimeInterval'
import { STEP_COUNT } from '../utils/Constants'
import { SequencerTrack } from './SequencerTrack'
import { Transport } from 'tone';


class Sequencer {
  private currentBPM = 1000
  private currentElementIndex = 0

  public tracks: SequencerTrack[] = []

  constructor(
    private transport = Transport
  ) {
    this.transport.scheduleRepeat((time) => {
      this.step()
    }, "8n");
    this.transport.loop = true
    this.transport.loopEnd = '2m'
  }

  public setBPM = (bpm: number) => {
    this.transport.bpm.value = bpm
  }

  
  public stop = () => this.transport.stop()
  
  public start = () => this.transport.start()

  public addTrack = (track: SequencerTrack) =>
    this.tracks.push(track)

  public onStep: (step: number) => void

  private step = () => {   
    this.onStep(this.currentElementIndex)
    
    this.currentElementIndex = this.currentElementIndex < STEP_COUNT-1 
    ? this.currentElementIndex + 1
    : 0
  }

}

export default Sequencer
