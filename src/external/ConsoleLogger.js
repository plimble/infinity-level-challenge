
export default class ConsoleLogger {
  constructor(path) {
    this.path = path;
  }

  log(txt) {
    console.log(txt);
  }
}