require('dotenv').config();
require('../../backend/config');


// let t1 = new Date().getTime();

const {BetParityModel,PandLModel,TargetsModel} = require('../../backend/model/model');

// function addMinutes(date, minutes) {
//     const dateCopy = new Date(date);
//     dateCopy.setMinutes(date.getMinutes() + minutes);
//     return dateCopy;
//   }

//   const getPeriod = () => {
//     const date = new Date();
//     let diff = (new Date()).getTimezoneOffset();
//     let sum = 330 + diff;
//     const newDate = addMinutes(date, sum);
//     const months = ["01", "02", "03", "04", "05", "06", "07", "08", "09", "10", "11", "12"];
//     const days = ["00", "01", "02", "03", "04", "05", "06", "07", "08", "09", "10", "11", "12", "13", "14", "15", "16", "17", "18", "19", "20", "21", "22", "23", "24", "25", "26", "27", "28", "29", "30", "31"];
//     let y = newDate.getFullYear();
//     let m = months[newDate.getMonth()];
//     let d = days[newDate.getDate()];
//     const min = ((newDate.getHours()) * 60) + (newDate.getMinutes());
//     let minBythree = Math.floor(min / 3) + 1;
//     if (minBythree.toString().length === 1) {
//       minBythree = `00${minBythree}`;
//     } else if (minBythree.toString().length === 2) {
//       minBythree = `0${minBythree}`
//     }
//     return `${y}${m}${d}${minBythree}`;
//   }

// let period = getPeriod();
// console.log(period);

// const getSum = async (val)=>{
//     const sum = await BetParityModel.aggregate([ 
//         { $match: { $and: [ { Period: period}, { value: val} ] }},
//         {$group : {_id : "$Period", total_sum : {$sum : "$total_amount"}}}]);
//     return sum;
// }


// let green = getSum('Green').then((data)=>{
//     if(data[0]  !== undefined){
//         green = data[0]['total_sum'];
//     }else{
//         green = 0;
//     }
// });

// let violet = getSum('Violet').then((data)=>{
//     if(data[0]  !== undefined){
//     violet = data[0]['total_sum'];
//     }else{
//     violet = 0;
//     }
// });

// let red = getSum('Red').then((data)=>{
//     if(data[0]  !== undefined){
//     red = data[0]['total_sum'];
//     }else{
//     red = 0;
//     }
// });

// let zero = getSum('0').then((data)=>{
//     if(data[0]  !== undefined){
//         zero = data[0]['total_sum'];
//         }else{
//         zero = 0;
//         }
// });

// let one = getSum('1').then((data)=>{
//     if(data[0]  !== undefined){
//         one = data[0]['total_sum'];
//         }else{
//         one = 0;
//         }
// });

// let two = getSum('2').then((data)=>{
//     if(data[0]  !== undefined){
//         two = data[0]['total_sum'];
//         }else{
//         two = 0;
//         }
// });

// let three = getSum('3').then((data)=>{
//     if(data[0]  !== undefined){
//         three = data[0]['total_sum'];
//         }else{
//         three = 0;
//         }
// });

// let four = getSum('4').then((data)=>{
//     if(data[0]  !== undefined){
//         four =  data[0]['total_sum'];
//         }else{
//         four = 0;
//         }
// });

// let five = getSum('5').then((data)=>{
//     if(data[0]  !== undefined){
//         five = data[0]['total_sum'];
//         }else{
//         five = 0;
//         }
// });

// let six = getSum('6').then((data)=>{
//     if(data[0]  !== undefined){
//         six = data[0]['total_sum'];
//         }else{
//         six = 0;
//         }
// });

// let seven = getSum('7').then((data)=>{
//     if(data[0]  !== undefined){
//         seven = data[0]['total_sum'];
//         }else{
//         seven = 0;
//         }
// });

// let eight = getSum('8').then((data)=>{
//     if(data[0]  !== undefined){
//         eight = data[0]['total_sum'];
//         }else{
//         eight = 0;
//         }
// });

// let nine = getSum('9').then((data)=>{
//     if(data[0]  !== undefined){
//         nine = data[0]['total_sum'];
//         }else{
//         nine = 0;
//         }
// });




// Promise.all([green,violet,red,zero,one,two,three,four,five,six,seven,eight,nine]).then(()=>{
//     //console.log({green,violet,red,zero,one,two,three,four,five,six,seven,eight,nine});
// });







    // then((data)=>console.log(data[0]['total_sum']));


// aggregate([{ $match: { Period: period} }, { $group: { _id: "$Period" ,TotalSum: { $sum: "$total_amount" } } } ]);
// Object.values(data)[0]['total_sum']
// console.log(JSON.stringify(sum));

function addMinutes(date, minutes) {
  const dateCopy = new Date(date);
  dateCopy.setMinutes(date.getMinutes() + minutes);
  return dateCopy;
}
const getPeriod = () => {
  const date = new Date();
  let diff = (new Date()).getTimezoneOffset();
  let sum = 330 + diff;
  const newDate = addMinutes(date, sum);
  const months = ["01", "02", "03", "04", "05", "06", "07", "08", "09", "10", "11", "12"];
  const days = ["00", "01", "02", "03", "04", "05", "06", "07", "08", "09", "10", "11", "12", "13", "14", "15", "16", "17", "18", "19", "20", "21", "22", "23", "24", "25", "26", "27", "28", "29", "30", "31"];
  let y = newDate.getFullYear();
  let m = months[newDate.getMonth()];
  let d = days[newDate.getDate()];
  const min = ((newDate.getHours()) * 60) + (newDate.getMinutes());
  let minBythree = Math.floor(min / 3) + 1;
  if (minBythree.toString().length === 1) {
    minBythree = `00${minBythree}`;
  } else if (minBythree.toString().length === 2) {
    minBythree = `0${minBythree}`
  }
  return `${y}${m}${d}${minBythree}`;
}
const getSum = async(val)=>{
  let res = await BetParityModel.aggregate([{ $match: {$and:[{ Period: period},{value:val}] }}, {$group : {_id : "$Period", total_sum : {$sum : "$total_amount"}}}]);
  return res;
}

let period = getPeriod();
let target=0;
let ProfitOrLoss = 0;
const getToday = ()=>{
  const date = new Date();
  let diff = (new Date()).getTimezoneOffset();
  let sum = 330 + diff;
  const newDate = addMinutes(date, sum);
  const months = ["01", "02", "03", "04", "05", "06", "07", "08", "09", "10", "11", "12"];
  const days = ["00", "01", "02", "03", "04", "05", "06", "07", "08", "09", "10", "11", "12", "13", "14", "15", "16", "17", "18", "19", "20", "21", "22", "23", "24", "25", "26", "27", "28", "29", "30", "31"];
  let y = newDate.getFullYear();
  let m = months[newDate.getMonth()];
  let d = days[newDate.getDate()];
  
  return `${d}${m}${y}`;
}
let todayNum = getToday();

const getTodayPL = async ()=>{
  let y = await PandLModel.find({dateStr:todayNum});
  return y;
}

let getPL = getTodayPL().then((finalData)=>{
  if(finalData[0]  !== undefined){
     ProfitOrLoss = finalData[0].ProfitOrLoss;
     target =  finalData[0].Target;
  }else{
    const dayData = PandLModel({dateStr:todayNum,ProfitOrLoss:0,Target:0});
    const save = dayData.save();
  }
});

let green = getSum('Green').then((data)=>{
if(data[0]  !== undefined){
      green = data[0]['total_sum'];
  }else{
      green = 0;
  }
});

let violet = getSum('Violet').then((data)=>{
  if(data[0]  !== undefined){
  violet = data[0]['total_sum'];
  }else{
  violet = 0;
  }
});

let red = getSum('Red').then((data)=>{
  if(data[0]  !== undefined){
  red = data[0]['total_sum'];
  }else{
  red = 0;
  }
  });

let zero = getSum('0').then((data)=>{
  if(data[0]  !== undefined){
      zero = data[0]['total_sum'];
      }else{
      zero = 0;
      }
  });

let one = getSum('1').then((data)=>{
  if(data[0]  !== undefined){
      one = data[0]['total_sum'];
      }else{
      one = 0;
      }
   });

let two = getSum('2').then((data)=>{
  if(data[0]  !== undefined){
      two = data[0]['total_sum'];
      }else{
      two = 0;
      }
   });

let three = getSum('3').then((data)=>{
  if(data[0]  !== undefined){
      three = data[0]['total_sum'];
      }else{
      three = 0;
      }
   });

let four = getSum('4').then((data)=>{
  if(data[0]  !== undefined){
      four =  data[0]['total_sum'];
      }else{
      four = 0;
      }
   });

let five = getSum('5').then((data)=>{
  if(data[0]  !== undefined){
      five = data[0]['total_sum'];
      }else{
      five = 0;
      }
  });

let six = getSum('6').then((data)=>{
  if(data[0]  !== undefined){
      six = data[0]['total_sum'];
      }else{
      six = 0;
      }
  });

let seven = getSum('7').then((data)=>{
  if(data[0]  !== undefined){
      seven = data[0]['total_sum'];
      }else{
      seven = 0;
      }
  });

let eight = getSum('8').then((data)=>{
  if(data[0]  !== undefined){
      eight = data[0]['total_sum'];
      }else{
      eight = 0;
      }
  });

let nine = getSum('9').then((data)=>{
  if(data[0]  !== undefined){
      nine = data[0]['total_sum'];
      }else{
      nine = 0;
      }
  });

function numGen(){
  return Math.floor(Math.random()*10);
}


Promise.all([getPL,green,violet,red,zero,one,two,three,four,five,six,seven,eight,nine]).then(()=>{
  let resultNum;
  let toGive;
  let totalBetAmount = green + violet + red + zero + one + two + three + four + five + six + seven + eight + nine;
  // ProfitOrLoss - target
  // target
 

 // ProfitOrLoss = ProfitLoss - target;
 if(target === 0 ){
    //no targert is setted or target achieved whatever so do soft trading
    // now update profitOrLoss variable only
    do{
        resultNum =  numGen();
        switch (resultNum) {
          case 0:
            toGive = (violet * 5) + (red * 1.5) + (zero * 10);
            break;
          case 1:
            toGive = (green * 2) + (one * 10);
            break;
          case 2:
            toGive = (red * 2) + (two * 10);
            break;
          case 3:
            toGive = (green * 2) + (three * 10);
            break;
          case 4:
            toGive = (red * 2) + (four * 10);
            break;
          case 5:
            toGive = (violet * 5) + (green * 1.5) + (five * 10);
            break;
          case 6:
            toGive = (red * 2) + (six * 10);
            break;
          case 7:
            toGive = (green * 2) + (seven * 10);
            break;
          case 8:
            toGive = (red * 2) + (eight * 10);
            break;
          case 9:
            toGive = (green * 2) + (nine * 10);
            break;
        }
      console.log('to give is ',toGive);
     }while(toGive>(totalBetAmount + ProfitOrLoss));
     ProfitOrLoss = ProfitOrLoss + totalBetAmount - toGive;
     console.log('Profit is ',ProfitOrLoss);
     await PandLModel.update({dateStr:todayNum},{$set:{ProfitOrLoss:ProfitOrLoss}});
     
 }else if(ProfitOrLoss >target){
     //target achieved successfully here so do soft trading from here
     //make target = 0;
     // update ProfitOrLoss varible in database as well
     // make a new entry in database that targe achieved successfully
     //update one database and add one entry in database
     do{
        resultNum =  numGen();
        switch (resultNum) {
          case 0:
            toGive = (violet * 5) + (red * 1.5) + (zero * 10);
            break;
          case 1:
            toGive = (green * 2) + (one * 10);
            break;
          case 2:
            toGive = (red * 2) + (two * 10);
            break;
          case 3:
            toGive = (green * 2) + (three * 10);
            break;
          case 4:
            toGive = (red * 2) + (four * 10);
            break;
          case 5:
            toGive = (violet * 5) + (green * 1.5) + (five * 10);
            break;
          case 6:
            toGive = (red * 2) + (six * 10);
            break;
          case 7:
            toGive = (green * 2) + (seven * 10);
            break;
          case 8:
            toGive = (red * 2) + (eight * 10);
            break;
          case 9:
            toGive = (green * 2) + (nine * 10);
            break;
        }
      console.log('to give is ',toGive);
     }while(toGive>totalBetAmount);
     let currTime = new Date().getTime();
     await TargetsModel.insertOne({dateStr:todayNum,time:currTime,TargetMoney:target,Period:period});
     ProfitOrLoss = totalBetAmount - toGive + ProfitOrLoss - target; 
     target = 0;
     await PandLModel.update({dateStr:todayNum},{$set:{ProfitOrLoss:ProfitOrLoss,Target:target}});
     
 }else{
     //part of hard tradigs come here only;
     // target is active here only so we cannot sum the totalBetAmount + ProfitOrLoss
     // UPDATE ProfitOrLoss here only i think
     do{
        resultNum =  numGen();
        switch (resultNum) {
          case 0:
            toGive = (violet * 5) + (red * 1.5) + (zero * 10);
            break;
          case 1:
            toGive = (green * 2) + (one * 10);
            break;
          case 2:
            toGive = (red * 2) + (two * 10);
            break;
          case 3:
            toGive = (green * 2) + (three * 10);
            break;
          case 4:
            toGive = (red * 2) + (four * 10);
            break;
          case 5:
            toGive = (violet * 5) + (green * 1.5) + (five * 10);
            break;
          case 6:
            toGive = (red * 2) + (six * 10);
            break;
          case 7:
            toGive = (green * 2) + (seven * 10);
            break;
          case 8:
            toGive = (red * 2) + (eight * 10);
            break;
          case 9:
            toGive = (green * 2) + (nine * 10);
            break;
        }
      console.log('to give is ',toGive);
     }while(toGive>totalBetAmount);
     ProfitOrLoss = ProfitOrLoss + totalBetAmount - toGive;
     await PandLModel.update({dateStr:todayNum},{$set:{ProfitOrLoss:ProfitOrLoss}});
     console.log(ProfitOrLoss);
 }


//  Period:String,
//  totalP:Number,
//  win_number:Number,
//  price:Number,
 


 console.log(resultNum);
//   console.log('remaining amount is ',totalBetAmount - toGive);
//   console.log('final result is ',resultNum);
//   console.log('final to give number is ',toGive);
//   console.log('total bet amount is ',totalBetAmount);
//   console.log(JSON.stringify({green,violet,red,zero,one,two,three,four,five,six,seven,eight,nine}));
//   console.log('target ',target,' ProfitOrLoss ',ProfitOrLoss);

});