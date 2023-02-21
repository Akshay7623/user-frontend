exports = async function(changeEvent) {
  const parity = context.services.get('Cluster0').db("test").collection("parityrecords");
  const user = context.services.get('Cluster0').db("test").collection("users");
  
  const docId = changeEvent.documentKey._id;
  
  const getBetDoc = async()=>{
    return await parity.find({_id:docId}).toArray();
  }
  
  const updateWallet = async(userId,newBal)=>{
    await user.updateOne({_id:BSON.ObjectId(userId)},{$set:{wallet:newBal}});
  }
  
  
 getBetDoc().then((betDoc)=>{
   let userId = betDoc[0].userId;
   let betType = betDoc[0].betType;
   let total_amount = betDoc[0].total_amount;
   let result = betDoc[0].result;
   
   console.log('user id is ',userId);
   console.log('bet type is ',betType);
   console.log('total amount is ',total_amount);
    const getUserDoc = async ()=>{
    return await user.find({_id:BSON.ObjectId(userId)}).toArray();
    }
    
    getUserDoc().then((userDoc)=>{
    let wallet = userDoc[0].wallet;
    console.log('wallet balance is ',wallet);
    console.log('result is ',result);
    
    if(result==='win'){
     if(betType === 'number'){
      const newBal = wallet + (total_amount - ((total_amount*2)/100))*9;
      console.log('new bal is ',newBal);
      updateWallet(userId,newBal).then(()=>{
        console.log('its done');
      });
      
      
     }else{
      const newBal = wallet + (total_amount - ((total_amount*2)/100))*2;
      console.log('new bal is ',newBal);
      updateWallet(userId,newBal).then(()=>{
        console.log('its done');
      })
     }
      
    }
    });
 });
};
