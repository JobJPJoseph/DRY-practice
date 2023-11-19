function multiplyBiggerNumByTwo(num1, num2) {
  // let bigNum;
  // if (num1 > num2) {
  //   bigNum = num1;
  //   return bigNum * 2;
  // } else {
  //   bigNum = num2;
  //   return bigNum * 2;
  // }

  let bigNum = callback(num1, num2, function(arg1, arg2) {
    if (arg1 > arg2) {
      return arg1;
    } else {
      return arg2;
    }
  });

  return bigNum * 2;
}

function divideBiggerNumByThree(num1, num2) {
  // let bigNum;
  // if (num1 > num2) {
  //   bigNum = num1;
  //   return bigNum / 3;
  // } else {
  //   bigNum = num2;
  //   return bigNum / 3;
  // }

  let bigNum = callback(num1, num2, function(arg1, arg2) {
    if (arg1 > arg2) {
      return arg1;
    } else {
      return arg2;
    }
  });

  return bigNum / 3;
}

function eatMostTacos(sum1, sum2) {
  // let bigNum;
  // if (sum1 > sum2) {
  //   bigNum = sum1;
  //   return `I ate ${bigNum} tacos.`;
  // } else {
  //   bigNum = sum2;
  //   return `I ate ${bigNum} tacos.`;
  // }

  let bigNum = callback(sum1, sum2, function(arg1, arg2) {
    if (arg1 > arg2) {
      return arg1;
    } else {
      return arg2;
    }
  })

  return `I ate ${bigNum} tacos.`;
}

function adoptSmallerDog(weight1, weight2) {
  // let smallDog;
  // if (weight1 < weight2) {
  //   smallDog = weight1;
  //   return `I adopted a dog that weighs ${smallDog} pounds.`;
  // } else {
  //   smallDog = weight2;
  //   return `I adopted a dog that weighs ${smallDog} pounds.`;
  // }

  let smallDog = callback(weight1, weight2, function (arg1, arg2) {
    if (arg1 < arg2) {
      return arg1;
    } else {
      return arg2;
    }
  });
  return `I adopted a dog that weighs ${smallDog} pounds.`;
}

function callback(arg1, arg2, cb) {
  let result = cb(arg1, arg2);
  return result;
}


/**************************************************************************/
/* DO NOT CHANGE THE CODE BELOW */
module.exports = {
  multiplyBiggerNumByTwo,
  divideBiggerNumByThree,
  eatMostTacos,
  adoptSmallerDog
};
