function confirmEnding(str, target) {
  const START = str.length - target.length;
  const END = str.length;
  const SUBSTRING = str.substring(START, END);

  return (SUBSTRING === target);
}

confirmEnding('lance', 'ance')

//try another method, maybe splice, that allows you choose start and end chars