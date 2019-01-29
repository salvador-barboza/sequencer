import React, { useState } from 'react'

interface Props {
  activeStep: number, 
  onStepClicked: (index: number) => void
}

const SequencerBoard = (props: Props) => {
  const [step, setStep] =  useState(Array(16).fill(false))
  return (
  <div className="stepper">
    {step.map((s, index) => 
      <div 
        onClick={() => {
          props.onStepClicked(index)
          step[index] = !step[index]
          setStep(step)
          console.log(step)
        }}
        className={`
          step 
          ${s ? 'on' : ''}
          ${props.activeStep === index ? 'seek' : ''}
        `} 
      />
    )}
  </div>
)
    }

export default SequencerBoard
