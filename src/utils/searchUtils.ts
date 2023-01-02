export const getBgString = (path: string) => `url('../img/${path}') 0 0/100% 100% no-repeat`;

export const getFilmsLength = (value: number) => Math.floor(value / 60);

export const createUniqKey = () => Math.random().toString(36).substring(2, 6);
