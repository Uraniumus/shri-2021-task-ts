export const Reset:string  = '\x1b[0m';

export interface Effects {
    bright: string,
    dim: string,
    italic: string,
    underscore: string,
    blink: string,
};
export type EffectsKeys = keyof Effects;

export const effects = {
    bright: '\x1b[1m',
    dim: '\x1b[2m',
    italic: '\x1b[3m',
    underscore: '\x1b[4m',
    blink: '\x1b[5m',
};

export interface Colors {
    black: string;
    red: string;
    green: string;
    yellow: string;
    blue: string;
    magenta:string;
    cyan: string;
    white: string;
};
export type ColorsKeys = keyof Colors;

export const fontColors:Colors = {
    black: '\x1b[30m',
    red: '\x1b[31m',
    green: '\x1b[32m',
    yellow: '\x1b[33m',
    blue: '\x1b[34m',
    magenta: '\x1b[35m',
    cyan: '\x1b[36m',
    white: '\x1b[37m',
};
export const backgroundColors:Colors = {
    black: '\x1b[40m',
    red: '\x1b[41m',
    green: '\x1b[42m',
    yellow: '\x1b[43m',
    blue: '\x1b[44m',
    magenta: '\x1b[45m',
    cyan: '\x1b[46m',
    white: '\x1b[47m',
};

export interface contrast {
    black: ColorsKeys;
    red: ColorsKeys;
    green: ColorsKeys;
    yellow: ColorsKeys;
    blue: ColorsKeys;
    magenta:ColorsKeys;
    cyan: ColorsKeys;
    white: ColorsKeys;
};

export const contrast: contrast = {
    black: 'white',
    red: 'black',
    green: 'black',
    yellow: 'black',
    blue: 'black',
    magenta: 'black',
    cyan: 'black',
    white: 'black',
};
