module.exports = function check(str, bracketsConfig) {
  let string = str;
  let config = [];
  bracketsConfig.forEach((value)=>{
    config.push(value.join(''))
  });
  console.log(config)
  let repeat = true;
  while (repeat) {
    let  newString= string;
    config.forEach(b => {
      string = string.replace(b, '');
    });
    if (string === newString) {
      repeat = false;
    } else {
      repeat = true;
    }
  }
  console.log(string.length)
  if (string.length == 0){
    return true
  }
  else {
    return false
  };
}
