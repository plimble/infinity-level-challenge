import fs from 'fs';

export default class FileHistoryRepo {
  constructor(path) {
    this.path = path;
  }

  save(game) {
    if (!this.path) {
      return;
    }

    fs.writeFile(this.path, JSON.stringify(game, null, 2), (err) => {
      if(err) {
        return console.log(err);
      }
      console.log("The file was saved!");
    });
  }
}