 
import { Container } from "react-bootstrap";
import TopNavbar from "../components/TopNavbar";
import TransactionForm from "../components/TransactionForm";
import { useEffect, useState } from "react";
import TransactionTable from "../components/TransactionTable";
import { getTransactions } from "../axios/transactionAxios";
import { useSelector } from "react-redux";

const TransactionPage = () => {
  const [transactions, setTransactions] = useState([])

  // Get the currentUser from redux store
  const { currentUser } = useSelector(state => state.user)
  
  const fetchTransactions = async() => {
    const response = await getTransactions(currentUser.id)

    if(response.status === "success"){
      setTransactions(response.data)
    }
  }

  useEffect(()=>{
    fetchTransactions()
  }, [])

  return ( 
      <Container>
        <TopNavbar userName={currentUser.name} />

        {/* Transaction Form */}
        <TransactionForm userId={currentUser.id} fetchTransactions={fetchTransactions} />

        {/* Transaction Table */}
        <TransactionTable transactions={transactions} />
      </Container>
   );
}
 
export default TransactionPage;