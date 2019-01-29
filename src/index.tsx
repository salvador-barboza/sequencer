import './styles.css'
import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import { STEP_COUNT } from './utils/Constants';
import Sequencer from './Sequencer/Sequencer';
import sampler from './Sampler';
import { SequencerTrack } from './Sequencer/SequencerTrack';
import SequencerBoard from './Sequencer/SequencerBoard';
import { Synth } from 'tone';

interface State {
  step: number,
  bpm: number
}

class App extends Component {
  private sequencer = new Sequencer()
  public state: State = {
    step: 0,
    bpm: 128,
  }

  constructor(props: any) { 
    super(props)
    this.sequencer.addTrack(new SequencerTrack(sampler))
    this.sequencer.addTrack(new SequencerTrack(sampler))
    this.sequencer.addTrack(new SequencerTrack(new Synth().toMaster()))
    this.sequencer.setBPM(168)

    this.sequencer.onStep = this.updateStep
  }
  private updateStep = (step: number) => {
    console.log(step)
    this.setState({ step })
  }

  private updateSpeed = (bpm: number) => {
    this.setState({ bpm })
    this.sequencer.setBPM(bpm)
  }

  public render = () => {
    return <div>
      {this.sequencer.tracks.map((t, triste) => 
        <SequencerBoard 
          activeStep={this.state.step}
          onStepClicked={(i) => { t.stepState[i] = triste === 0 ? 'C4' : 'C5' } }
        />)}
        <button onClick={this.sequencer.start}>start</button>
        <p>{this.sequencer.BPM}</p>
        <input 
          type="range" 
          min="0" 
          max="240" 
          value={this.state.bpm}
          onChange={event => this.updateSpeed(Number(event.target.value))} />
    </div>
  }
}

ReactDOM.render(<App />, document.body)
