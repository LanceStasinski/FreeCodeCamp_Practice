function steamrollArray(arr) {
 let flat = [].concat(...arr)
 return flat.some(Array.isArray) ? steamrollArray(flat) : flat;
}