import yargs from 'yargs';
import path from 'path';

export function configBuilder(configPath: string): yargs.Arguments {
  return yargs
    .env(true)
    .config(path.join(configPath, 'teams.json'))
    .options({
      url: {
        demandOption: true,
        default: 'https://teams.microsoft.com/',
        describe: 'Microsoft Teams URL',
        type: 'string'
      },
      webDebug: {
        demandOption: false,
        default: false,
        describe: 'Enable debug',
        type: 'boolean'
      },
      firewallUsername: {
        alias: 'u',
        demandOption: false,
        describe: 'Username',
        type: 'string'
      },
      firewallPassword: {
        alias: 'p',
        demandOption: false,
        describe: 'Password',
        type: 'string'
      },
      userAgent: {
        demandOption: false,
        describe: 'HTTP User Agent',
        type: 'string',
        default: 'edge'
      },
      edgeUserAgent: {
        demandOption: false,
        describe: 'Microsoft Edge User Agent',
        type: 'string',
        default:
          'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/64.0.3282.140 Safari/537.36 Edge/17.17134'
      },
      chromeUserAgent: {
        demandOption: false,
        describe: 'Google Chrome User Agent',
        type: 'string',
        default:
          'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/69.0.3497.100 Safari/537.36'
      }
    })
    .implies('firewallUsername', 'firewallPassword').argv;
}
