import { useState } from 'react'
import './App.css'
import Background from './components/Background'
import Card from './components/Card'
import './index.css'
import fronturl from './images/bg-card-front.png'
import backurl from './images/bg-card-back.png'
import Form from './components/Form'
import CardNumber from './components/CardNumber'

function App() {
  const [name, setName] = useState("");
  const [cardNum, setCardnum] = useState("");
  const [month, setMonth] = useState("");
  const [yr, setYr] = useState("");
  const [cvc, setCvc] = useState("");

  const handleNameChange = ((event) => {
    setName(event.target.value);
  });

  const handleCardNumChange = ((event) => {
    setCardnum(event.target.value);
  })

  const handleMonthChange = ((event) => {
    setMonth(event.target.value);
  })

  const handleYrChange = ((event) => {
    setYr(event.target.value);
  })

  const handleCvcChange = ((event) => {
    setCvc(event.target.value);
  })

  const handleOnSubmit = ((event) => {
    event.preventDefault();
    console.log([{key: "name", value:name}, 
                  {key: "cardNum", value:cardNum},
                  {key: "month", value:month},
                  {key: "year", value:yr},
                  {key: "cvc", value:cvc}]);
  })

  return (
    <>
      <Background></Background>
      <Card className="front-card" bg_image={fronturl}>
        <CardNumber name={name} cardNum={cardNum} month={month} yr={yr}></CardNumber>
      </Card>
      <Card className="back-card" bg_image={backurl}>
        <div className='cvcdisplay'>{cvc.length>0 ? cvc : "000"}</div>
      </Card>
      <Form onNameChange = {handleNameChange} onCardNumChange = {handleCardNumChange}
      onMonthChange = {handleMonthChange} onYrChange = {handleYrChange} 
      onCvcChange = {handleCvcChange} onSubmit = {handleOnSubmit}></Form>
    </>
  )
}

export default App
