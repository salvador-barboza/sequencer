class AdjustableTimeInterval {
  private currentTimeout: number|null
  private interval: number|null
  
  get isActive(): boolean { 
    return this.currentTimeout != null && !Number.isNaN(this.currentTimeout)
  }

  constructor(
    private callback: Function,
  ) {}

  public stop = () => {
    clearTimeout(this.currentTimeout)
    this.currentTimeout = null
  }

  public start = () => {
    if (this.isActive) {
      this.stop()
    }

    this.currentTimeout = setTimeout(() => {
      this.callback()
      this.start()
    }, this.interval)
  }

  public setInterval = (interval: number) => {    
    this.interval = interval
    
    if (this.isActive) {
      this.start()
    }
  }
}

export default AdjustableTimeInterval
