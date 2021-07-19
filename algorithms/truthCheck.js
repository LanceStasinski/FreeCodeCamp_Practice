const truthCheck = (collection, pre) => collection
.every(val => val.hasOwnProperty(pre) && Boolean(val.pre))
