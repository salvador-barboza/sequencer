import './styles.css'
import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import { STEP_COUNT } from './utils/Constants';
import Sequencer from './Sequencer/Sequencer';
import sampler from './Samples/808Drums';
import { SequencerTrack } from './Sequencer/SequencerTrack';
import SequencerBoard from './Sequencer/SequencerBoard';
import { Synth, Sampler, Transport } from 'tone';

import EightOEight from './Samples/808Drums'

interface State {
  step: number,
  bpm: number,
  swing: number
}

(window as any).t = Transport

const mySeq = new Sampler({ 
  'C4': EightOEight.rim,
  'D4': EightOEight.kicks01,
  'E4': EightOEight.snare
}).toMaster()
class App extends Component {
  private sequencer = new Sequencer()
  public state: State = {
    step: 0,
    bpm: 128,
    swing: 0
  }

  constructor(props: any) { 
    super(props)


    this.sequencer.addTrack(
      new SequencerTrack(mySeq, ['C4', 'D4', 'E4']))    
    this.sequencer.setBPM(168)

    this.sequencer.onStep = this.updateStep
  }
  private updateStep = (step: number) => {
    this.setState({ step })
  }

  private updateSpeed = (bpm: number) => {
    this.setState({ bpm })
    this.sequencer.setBPM(bpm)
  }

  private updateSwing = (swing: number) => {
    this.setState({ swing })
    Transport.swing = swing / 100
  }

  public render = () => {
    return <div>
      <audio id="player" controls></audio>
      {this.sequencer.tracks.map(t => 
        <SequencerBoard 
          samples={t.notes}
          activeStep={this.state.step}
          stepState={t.stepState}
          stateChanged={ newStepState => {
            console.log(newStepState)
            t.updateStepState(newStepState) 
          }}
        />)}
        <button onClick={this.sequencer.start}>start</button>
        <p>{Transport.bpm.value}</p>
        <input 
          type="range" 
          min="0" 
          max="240" 
          value={this.state.bpm}
          onChange={event => this.updateSpeed(Number(event.target.value))} />
          <p>{Transport.swing}</p>
        <input 
          type="range" 
          min="0" 
          max="100" 
          value={this.state.swing}
          onChange={event => this.updateSwing(Number(event.target.value))} />
    </div>
  }
}

ReactDOM.render(<App />, document.body)
