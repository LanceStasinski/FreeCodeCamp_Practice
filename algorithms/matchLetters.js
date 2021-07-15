function mutation(arr) {
  const STR1 = arr[0].toLowerCase();
  const SPLIT_1 = STR1.split('');
  const STR2 = arr[1].toLowerCase();
  const SPLIT_2 = STR2.split('');

  for (let i = 0; i < SPLIT_2.length; i++) {
    if (SPLIT_1.indexOf(SPLIT_2[i]) == -1) {
      return false;
    }
  }
  return true;
}