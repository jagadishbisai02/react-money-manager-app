import './index.css'

const TransactionItem = props => {
  const {transactionDetails, transactionTypeOptions} = props
  const {title, amount} = transactionDetails
  const {type} = transactionTypeOptions

  return (
    <li className="transaction-item-list">
      <p className="title">{title}</p>
      <p className="amount">Rs {amount}</p>
      <p className="type">{type}</p>
      <img
        src="https://assets.ccbp.in/frontend/react-js/money-manager/delete.png"
        alt="delete"
        className="delete-icon"
      />
    </li>
  )
}

export default TransactionItem
