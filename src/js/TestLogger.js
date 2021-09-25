class TestLogger {
  constructor() {
      this.log= "";
  }
  addToLog(logData) {
    this.log += "\n[" + new Date().toISOString() + "]" + logData; 
  }
  printLog() {
      console.log(this.log);
  }
}
module.exports = TestLogger;