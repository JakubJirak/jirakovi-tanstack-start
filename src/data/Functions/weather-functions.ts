export interface codeData {
  code: number;
  day: string;
  night: string;
  icon: string;
  nighticon: string;
}

export function getImage(code?: number, day?: number, codeData?: codeData) {
  if (code === undefined || day === undefined || !codeData)
    return "neplatna hodnota";

  if (code === 1000 || code === 1003) {
    if (day === 1) {
      return codeData.icon;
    }
    return codeData.nighticon;
  }
  return codeData.icon;
}

export function getText(day?: number, codeData?: codeData) {
  if (day === undefined || !codeData) return "neplatna hodnota";
  return day === 1 ? codeData.day : codeData.night;
}
