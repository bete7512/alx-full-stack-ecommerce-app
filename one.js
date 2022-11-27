function repeatStringNumTimes(str, num) {
  let sth = str
  if(num == 0){
    sth = ''
  }
  if(num > 0){
    for(let i  = 1;i <= num;i++){
      sth += str
    }
  }
console.log(sth)
  return sth;
}
console.log(repeatStringNumTimes("abc", 3))
