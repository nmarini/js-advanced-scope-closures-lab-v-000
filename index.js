function produceDrivingRange(blockRange){
  return function(startBlock, endBlock){
    let start = parseInt(blockRange) + parseInt(startBlock.slice(0, -2))
    let result = start - parseInt(endBlock)
    if (result >= 0){
      return `within range by ${result}`
    }
    else {

      return `${Math.abs(result)} blocks out of range`
    }
  }
}
