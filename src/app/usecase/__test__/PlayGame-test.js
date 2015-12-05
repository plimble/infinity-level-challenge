import { assert } from 'chai';
import PlayGame from '../PlayGame';

describe('PlayGame', () => {
  it('should no error', () => {
    let fakeHistoryRepo = { save: () => {} };
    let fakeLogger = { log: (txt) => {} };

    const p = new PlayGame(fakeHistoryRepo, fakeLogger, 27, 27);
    p.do({
      endScore: 30,
      firstPlayerName: 'Player A',
      secondPlayerName: 'Player B'
    });


  });
});
