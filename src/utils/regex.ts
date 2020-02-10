export function Regexchecker(regexResult: Array<string>|null|undefined, tocheck: String) {
  if (regexResult !== null && regexResult !== undefined) {
    return regexResult[0] === tocheck;
  }
  return false;
}
