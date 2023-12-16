import React, { useEffect, useState } from 'react'
import ExpenseForm from '../components/ExpenseForm/ExpenseForm';
import Expense from '../components/Expense/Expense';
import { useAuth } from '../store/auth-context';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import { expenseActions, profeleActions } from '../store';


const Expenses = () => {
  const authState=useSelector(state=>state.auth);
  const expenseState = useSelector((state) => state.expense);
  const profileState = useSelector((state) => state.profile);
  const dispatch=useDispatch();
  useEffect(()=>{
    const fetch=async ()=>{
      const userPath=authState.email.split('@')[0];
      const response=await axios.get(`https://expense-tracker-cfb73-default-rtdb.firebaseio.com/${userPath}.json`);
      console.log(response);
      for (const key in response.data){
        dispatch(expenseActions.addExpense({ ...response.data[key], id: key }));
      }
    }
    fetch();

  },[])
  const premiumHandler=()=>{
    console.log(`you are a premium user`);
    dispatch(profeleActions.premiumUser());
  }
  return (
    <>
      {!profileState.isPremium && +expenseState.totalExpense > 10000 && <button className="border border-red-500 text-red-500 rounded m-auto  block text-2xl" onClick={premiumHandler}>Get Premium</button>}
      {authState.isLogin && (
        <div className="bg-green-200 h-screen p-2">
          <ExpenseForm />
          <Expense />
        </div>
      )}
    </>
  );
}

export default Expenses