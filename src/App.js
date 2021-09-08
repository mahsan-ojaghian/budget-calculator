import './App.css';
import React,{useState} from 'react';
import ExpenseList from './components/ExpenseList';
import Alert from './components/Alert';
import ExpenseForm from './components/ExpenseForm';
import { v4 as uuidv4 }  from 'uuid';

const initialExpenses = [
  {
    id:uuidv4(),charge:"rent",amount:1600
  },
  {
    id:uuidv4(),charge:"car payment",amount:400
  },
  {
    id:uuidv4(),charge:"credit card bill",amount:1200
  }
]
console.log(initialExpenses);






function App() {
const [expenses,setExpenses] = useState(initialExpenses);
const [charge,setCharge] = useState('');
const [amount,setAmount] = useState('');


const handleCharge = e =>{
  setCharge(e.target.value);
}
const handleAmount = e =>{
  setAmount(e.target.value);
}
const handleSubmit = (e)=>{
  e.preventDefault();
}
  return (
    <>
     <Alert></Alert>
     <h1>Budget Calculator</h1>
     <main className="App">
     <ExpenseForm
     charge={charge}
     amount={amount}
     handleAmount={handleAmount}
     handleCharge={handleCharge}
     handleSubmit={handleSubmit}
     />
     <ExpenseList expenses={expenses}/>
     </main>
     <h1>
       Total spending: <span className="total">
         $
         {expenses.reduce((acc,curr)=>{
         return (acc =+ curr.amount);
         },0)}
       </span>
     </h1>
     
    </>
  );
}

export default App;
