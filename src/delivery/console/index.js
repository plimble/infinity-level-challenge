import PlayGame from '../../app/usecase/PlayGame';
import FileHistoryRepo from '../../external/FileHistoryRepo';
import ConsoleLogger from '../../external/ConsoleLogger';
import path from 'path';

export default function gameConsole(config = {}) {
  // merge with default config
  Object.assign(config, {
    endScore: 30,
    firstPlayerName: 'Player A',
    secondPlayerName: 'Player B',
    minimumForEnvido: 27,
    minimumForDontWant: 27,
    pathHistoryFile: path.join(__dirname, '../../../history.json')
  });

  const repo = new FileHistoryRepo(config.pathHistoryFile);
  const logger = new ConsoleLogger()

  const p = new PlayGame(repo, logger, config.minimumForEnvido, config.minimumForDontWant);
  p.do({
    endScore: config.endScore,
    firstPlayerName: config.firstPlayerName,
    secondPlayerName: config.secondPlayerName
  });
}