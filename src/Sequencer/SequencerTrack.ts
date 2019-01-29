import { Instrument, isNote } from 'tone'
import { STEP_COUNT } from '../utils/Constants';

export class SequencerTrack {
  constructor(
    private instrument: Instrument,
    public stepState: string[] = Array(STEP_COUNT).fill('')
  ) {}

  public updateStepState = (stepState: string[]) => this.stepState = stepState
  
  public step(currentStep: number) {    
    if (this.stepState[currentStep] && isNote(this.stepState[currentStep])) {
      this.instrument.triggerAttackRelease(this.stepState[currentStep], '8n')
    }
  }
}