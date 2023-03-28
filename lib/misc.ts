export function arrayToParams<ParamName extends string, T>(
  arr: T[],
  paramName: ParamName
): Record<ParamName, T>[] {
  return arr.map((item) => {
    const obj = {} as Record<ParamName, T>
    obj[paramName] = item
    return obj
  })
}
