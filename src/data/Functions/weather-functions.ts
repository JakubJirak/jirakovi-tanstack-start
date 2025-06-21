interface codeData {
  day: string;
  night: string;
  icon: string;
  nighticon: string;
}

export function getImage(code: number, day: number, codeData: codeData) {
  if (code === 1000 || code === 1003) {
    if (day === 1) {
      return codeData.icon;
      // biome-ignore lint/style/noUselessElse: <explanation>
    } else {
      return codeData.nighticon;
    }
  }
  return codeData.icon;
}

export function getText(day: number, codeData: codeData) {
  return day === 1 ? codeData.day : codeData.night;
}
