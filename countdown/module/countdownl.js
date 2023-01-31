

export default class Countdown {
  constructor(futureDate) {
    this.futureDate = futureDate;
  }
  get _actualDate() {
    return new Date();
  }
  get _futureDate() {
    return new Date(this.futureDate);
  }
  get _timeStampDiff() {
    return this._futureDate.getTime() - this._actualDate.getTime();
  }
  get Days() {
    return Math.floor(this._timeStampDiff / (24 * 60 * 60 * 1000));
  }
  get Hour() {
    return Math.floor(this._timeStampDiff / (60 * 60 * 1000));
  }
  get Minutes() {
    return Math.floor(this._timeStampDiff / (60 * 1000));
  }
  get Seconds() {
    return Math.floor(this._timeStampDiff / 1000);
  }
  get Total() {
    const Days = this.Days;
    const Hour = this.Hour % 24;
    const Minutes = this.Minutes % 60;
    const Seconds = this.Seconds % 60;

    return {
      Days,
      Hour,
      Minutes, 
      Seconds
    }
  }
}
