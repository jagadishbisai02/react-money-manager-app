import './index.css'

const MoneyDetails = props => {
  const {transactionDetails} = props
  const {amount, expenses} = transactionDetails

  return (
    <div className="money-details-list">
      <div className="balance-container">
        <img
          src="https://assets.ccbp.in/frontend/react-js/money-manager/balance-image.png"
          alt="balance"
        />
        <div className="balance-detail">
          <h1 className="heading">Balance</h1>
          <p className="rupees">Rs {amount - expenses}</p>
        </div>
      </div>
      <div className="income-container">
        <img
          src="https://assets.ccbp.in/frontend/react-js/money-manager/income-image.png"
          alt="income"
        />
        <div className="income-detail">
          <h1 className="heading">Your Income</h1>
          <p className="rupees">Rs {amount}</p>
        </div>
      </div>
      <div className="expense-container">
        <img
          src="https://assets.ccbp.in/frontend/react-js/money-manager/expenses-image.png"
          alt="expenses"
        />
        <div className="expense-detail">
          <h1 className="heading">Your Expenses</h1>
          <p className="rupees">Rs {expenses}</p>
        </div>
      </div>
    </div>
  )
}

export default MoneyDetails
