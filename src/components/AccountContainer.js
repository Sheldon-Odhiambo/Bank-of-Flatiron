import React, {  useState } from "react";
import TransactionsList from "./TransactionsList";
import Search from "./Search";
import AddTransactionForm from "./AddTransactionForm";

function AccountContainer() {
  const [transaction, setTransaction] =useState([])
  const [search, setSearch] =useState("")
  
  return (
    <div>
      <Search search={search} setSearch={setSearch} />
      <AddTransactionForm transactions={transaction} setTransactions={setTransaction} />
      <TransactionsList transactions={transaction}/>
    </div>
  );
}

export default AccountContainer;
