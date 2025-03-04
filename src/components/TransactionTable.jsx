/* eslint-disable react/prop-types */
import { useState } from "react";
import { Button, Form, Table } from "react-bootstrap";

const TransactionTable = (props) => {
  const { transactions = [] } = props

  const [selectedtransactionIds, setSelectedTransactionIds] = useState([])

  // toggleSelectedTransactionIds
  const toggleSelectedTransactionIds = (transactionId) => {
    const isIdSelected = selectedtransactionIds.includes(transactionId)

    // either you add to array or you remove from the array
    isIdSelected
      ? setSelectedTransactionIds(selectedtransactionIds.filter(id => id !== transactionId))
      : setSelectedTransactionIds([...selectedtransactionIds, transactionId])
  }

  console.log("selectedtransactionIds", selectedtransactionIds);
  
  return ( 
    <Table striped bordered hover className="text-center">
      <thead>
        <tr>
          <th>#</th>
          <th>Date</th>
          <th>Title</th>
          <th>Type</th>
          <th>Amount</th>
          <th>
            {!!selectedtransactionIds.length && <Button
              variant="outline-danger"
            >
              Delete Selected
            </Button>}
          </th>
        </tr>
      </thead>
      <tbody>
        {/* Empty State */}
        {!transactions.length && <h2>No Records found!!</h2>}
        
        {transactions.map((transaction, index) => (
          <tr key={transaction._id}>
          <td>{index + 1}</td>
          <td>{new Date(transaction.date).toLocaleDateString()}</td>
          <td>{transaction.title}</td>
          <td>{transaction.type}</td>
          <td>
            {
              transaction.type === "expense"
                ? <span className="text-danger">{transaction.amount}</span>
                : <span className="text-success">{transaction.amount}</span>
            }
          </td>
          <td>
            <Form>
              <Form.Check
                type="checkbox"
                name={transaction._id}
                onClick={() => toggleSelectedTransactionIds(transaction._id)}
              />
            </Form>
          </td>
        </tr>
        ))}
        
      </tbody>
    </Table>
   );
}
 
export default TransactionTable;