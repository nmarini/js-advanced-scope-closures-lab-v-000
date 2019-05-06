function produceDrivingRange(blockRange){
  return function(startBlock, endBlock){
    const startRange = parseInt(blockRange) + parseInt(startNum.slice(0, -2))
    const result = startRange - parseInt(endBlock)
    if (result >= 0){
      return `within range by ${result}`
    else 
      return `${result} blocks out of range`
    }
  }
}
