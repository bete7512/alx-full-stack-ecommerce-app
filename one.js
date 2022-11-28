function mutation(arr) {
  let one = [...arr[0]]
  let two = [...arr[1]]
  console.log(one)
  console.log(two)
  let holder = false
  for(let i = 0; i < two.length;i++){
    if(!one.indexOf(two[i])){
      console.log(one.indexOf(two[i]))
      holder =  false
    }
    else{
      holder = true
    }

  }
    return holder;
}

console.log(mutation(["Tiger", "Zebra"]));