import React from 'react'

interface Props {
  activeStep: number, 
  stepState: string[],
  stateChanged: (newState: string[]) => void,
  samples: string[]
}

function swapArrayValue<T>(array: T[], index: number, value: T) {
  const arr = array.slice()
  arr[index] = value
  return arr
}

const SequencerBoard = ({ 
  stepState,
  activeStep, 
  stateChanged,
  samples
}: Props) => (
  <div className="stepper-container">
  {samples.map(sampleName => (
    <div className="stepper">
    {stepState.map((activeNote, index) => 
    <div 
      onClick={() => stateChanged(swapArrayValue(stepState, index, stepState[index] == sampleName ? null : sampleName))}
      className={`
        step 
        ${activeNote === sampleName ? 'on' : ''}
        ${activeStep === index ? 'seek' : ''}
      `} 
    /> )}
    </div>
    ))}
</div>)

export default SequencerBoard
