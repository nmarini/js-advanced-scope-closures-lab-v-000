function produceDrivingRange(blockRange){
  return function(startBlock, endBlock){
    let startRange = parseInt(blockRange) + parseInt(startNum.slice(0, -2))
    let result = startRange - parseInt(endBlock)
    if (result >= 0){
      return `within range by ${result}`
    }
    else {
      return `${result} blocks out of range`
    }
  }
}
