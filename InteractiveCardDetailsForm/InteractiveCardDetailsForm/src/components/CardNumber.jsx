import React from 'react'

const CardNumber = ({name, cardNum, month, yr}) => {

    function formatCardNum(cardNum) {
        let finalString = "";
        for (let i=0; i<cardNum.length; i++) {
            if (i%4===0 && i!==0) {
                finalString += ' ';
            }
            finalString += cardNum[i];
        }
        return finalString;
    }
    let finalCardNum = formatCardNum(cardNum);
  return (
    <>
        <div className='ultimateCardDiv'>
        <div className='cardNumber'>{cardNum.length>0 ? finalCardNum : "0000 0000 0000 0000"}</div>
        <div className='cardNameExp'> 
            <div className='cardName'>{name.length>0 ? name:"Jane Appleseed"}</div>
            <div className='expdate'>{month.length>0 ? month : "00"}/{yr.length>0 ?yr:"00"}</div>
        </div>
        </div>
    </>
    
  )
}

export default CardNumber