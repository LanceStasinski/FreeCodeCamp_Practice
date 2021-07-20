function addTogether() {
  const [first, second] = Object.values(arguments);

  if (typeof first != 'number') return undefined;

  const addSecond = (second) => typeof second == 'number' ? first + second : undefined;

  return arguments.length == 2 ? addSecond(second) : addSecond;
}