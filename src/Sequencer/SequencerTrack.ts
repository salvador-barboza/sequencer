import { Instrument, isNote, Part, Time, TimeEventObject, Callback, TimeObject } from 'tone'
import { STEP_COUNT } from '../utils/Constants';

export class SequencerTrack {
  private part: Part
  constructor(
    private instrument: Instrument,    
    public notes: string[] = [],
    public stepState: string[] = Array(STEP_COUNT).fill(null),
  ) {
    this.part = new Part(this.play, [])
    this.part.start(0)
  }

  private play = (time: TimeObject, ev: TimeEventObject) => {
    this.instrument.triggerAttackRelease(ev.note, ev.dur, time)
  }

  public updateStepState = (stepState: string[]) => {
    this.stepState = stepState
    const a = stepState.map((x, i) => {
      if (notNullOrEmpty(x)) {
        return { time: Time('8n')*i, note: x, dur: '4n' }
      }
    }).filter(x => x !== undefined) 

    this.part.cancel()
    this.part = new Part(this.play, a)
    this.part.start(0)
  }  
}

function notNullOrEmpty(str: String) {
  return str != undefined && str != null && str != ''
}