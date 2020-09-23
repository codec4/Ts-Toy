type SockColor = number;
type SockColorPair = number;

function sockMerchant(numberOfSocks: number, colors: number[]): number {
  const socksColorCount = new Map<SockColor, SockColorPair>();

  for (let index = 0; index < numberOfSocks; index++) {
    socksColorCount.has(colors[index])
      ? socksColorCount.set(colors[index], socksColorCount.get(colors[index]) + 1)
      : socksColorCount.set(colors[index], 1);
  }

  let result = 0;
  for (const [, count] of socksColorCount.entries()) {
    result += Math.floor(count / 2);
  }

  return result;
}

export { sockMerchant };
