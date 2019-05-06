function produceDrivingRange(blockRange){
  return function(startBlock, endBlock){
    let startRange = parseInt(blockRange) + parseInt(startBlock)
    let result = startRange - parseInt(endBlock)
    if (result >= 0){
      return `within range by ${result}`
    }
    else {

      return `${Math.abs(result)} blocks out of range`
    }
  }
}

function produceTipCalculator(tip){
  return function(fare){
    return fare * tip
  }
}
