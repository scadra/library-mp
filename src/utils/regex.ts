export function Regexchecker(regexResult: Array<string>|null|undefined, tocheck: String) {
  if (regexResult !== null && regexResult !== undefined) {
    console.log(regexResult[0] === tocheck);
    return regexResult[0] === tocheck;
  }
  return false;
}
