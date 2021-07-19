function steamrollArray(arr) {
 let flat = [];

 for(let i = 0; i < arr.length; i++) {
   if (Array.isArray(arr[i])) {
     flat.concat(...steamrollArray(arr[i]))
   } else {
     flat.push(arr[i])
   }
 }
 return flat;
}