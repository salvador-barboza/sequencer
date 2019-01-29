import { Sampler } from 'tone'

import kicks01 from '../assets/808_drum_kit/kicks/808-Kicks01.wav'
import rim from '../assets/808_drum_kit/snares/808-Rim4.wav'

const sampler = new Sampler({}).toMaster()
sampler.add('C4', kicks01)
sampler.add('D4', rim)

console.log(sampler)
console.log(kicks01)

export default sampler
