import clc from 'cli-color';

export const logger = {
  tabGreen: (msg: string) => console.log(clc.green(`\t${msg}`)),
  spaceGreen: (msg: string) => console.log(clc.green(` ${msg}`)),
  spaceYellow: (msg: string) => console.log(clc.yellow(` ${msg}`)),
  spaceRed: (msg: string) => console.log(clc.red(` ${msg}`)),
};
