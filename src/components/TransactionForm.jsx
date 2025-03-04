import { useState } from "react";
import { Button, Card, Col, Form, Row } from "react-bootstrap";
import InputField from "./InputField";
import { createTransaction } from "../axios/transactionAxios";
import { toast } from "react-toastify";

const initialFormData = {
  title: '',
  type: 'expense',
  amount: 0,
  date: null,
}

const TransactionForm = (props) => {
  // eslint-disable-next-line react/prop-types
  const { userId } = props

  const [formData, setFormData] = useState(initialFormData)
  const {title, type, amount, date } = formData

  // Handle on Change
  const handleOnChange = (e) => {
    const { value, name } = e.target

    setFormData({
      ...formData,
      [name]: value
    })
  }

  // handleOnSubmit
  const handleOnSubmit = async(e) => {
    e.preventDefault()

    //send API request
    const response = await createTransaction({ ...formData, userId })

    // Handle Error
    if(response.status === "error"){
      toast.error(response.message)
    }
    // Handle Success
    toast.success(response.message)
  }
  
  return ( 
    <Card>
      <Card.Body>
        <Form onSubmit={handleOnSubmit}>
          <Row>
            <Col>
              <InputField 
                label="Title"
                inputFieldAttributes={{
                  type: 'text',
                  name: 'title',
                  placeholder: 'Enter transaction title',
                  required: true,
                  value: title,
                  onChange: handleOnChange
                }}
              />
            </Col>

            <Col>
                <Form.Group>
                  <Form.Label className="fw-bold">
                    Type
                  </Form.Label>
                  <Form.Select
                    name="type"
                    value={type}
                    onChange={handleOnChange}
                  >
                    <option value="expense">Expense</option>
                    <option value="income">Income</option>
                  </Form.Select>
                </Form.Group>
            </Col>
          </Row>

          <Row>
            <Col>
              <InputField 
                label="Amount"
                inputFieldAttributes={{
                  type: 'number',
                  name: 'amount',
                  required: true,
                  value: amount,
                  onChange: handleOnChange
                }}
              />
            </Col>

            <Col>
              <InputField 
                label="Date"
                inputFieldAttributes={{
                  type: 'date',
                  name: 'date',
                  required: true,
                  value: date,
                  onChange: handleOnChange
                }}
              />
            </Col>
          </Row>

          <Row>
            <Button variant="primary" type="submit">
              Add Transaction
            </Button>
          </Row>
        </Form>
      </Card.Body>
    </Card>
   );
}
 
export default TransactionForm;