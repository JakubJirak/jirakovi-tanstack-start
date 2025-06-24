export interface codeData {
  code: number;
  day: string;
  night: string;
  icon: string;
  nighticon: string;
}

export function getImage(code?: number, day?: number, codeData?: codeData) {
  setTimeout(() => {
    if (!code || !day || !codeData) return "null";

    if (code === 1000 || code === 1003) {
      if (day === 1) {
        return codeData.icon;
        // biome-ignore lint/style/noUselessElse: <explanation>
      } else {
        return codeData.nighticon;
      }
    }
    return codeData.icon;
  }, 500);
}

export function getText(day?: number, codeData?: codeData) {
  setTimeout(() => {
    if (!day || !codeData) return "null";
    return day === 1 ? codeData.day : codeData.night;
  }, 500);
}
