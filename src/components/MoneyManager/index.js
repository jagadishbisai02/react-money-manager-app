import {Component} from 'react'
import {v4 as uuidv4} from 'uuid'
import TransactionItem from '../TransactionItem'
import MoneyDetails from '../MoneyDetails'

import './index.css'

const transactionTypeOptions = [
  {
    optionId: 'INCOME',
    displayText: 'Income',
  },
  {
    optionId: 'EXPENSES',
    displayText: 'Expenses',
  },
]

class MoneyManager extends Component {
  state = {
    transactionType: transactionTypeOptions,
    income: 0,
    expenses: 0,
    transaction: [],
  }

  onAddTransaction = event => {
    event.preventDefault()
    const {amount, title, income, expenses, transactionType} = this.state

    const newTransaction = {
      id: uuidv4(),
      income,
      expenses,
      transactionType,
      amount,
      title,
    }

    this.setState(prevState => ({
      transaction: [...prevState.transaction, newTransaction],
    }))
  }

  onChangeTitle = event => {
    this.setState({title: event.target.value})
  }

  onChangeAmount = event => {
    this.setState({amount: event.target.value})
  }

  render() {
    const {transactionType, transaction} = this.state
    return (
      <div className="app-container">
        <div className="money-manager-container">
          <div className="person-details">
            <h1 className="person-name">Hi, Richard</h1>
            <p className="greeting">
              Welcome to Your
              <span className="money-manager"> Money Manager</span>
            </p>
          </div>
          <div className="money-details-container">
            <ul className="money-details">
              {transaction.map(eachTransaction => (
                <MoneyDetails
                  key={eachTransaction.id}
                  transactionDetails={eachTransaction}
                />
              ))}
            </ul>
          </div>
          <div className="transaction-history-container">
            <div className="add-transaction-container">
              <h1>Add Transaction</h1>
              <form type="form" onSubmit={this.onAddTransaction}>
                <label htmlFor="title">TITLE</label>
                <br />
                <input
                  type="text"
                  placeholder="TITLE"
                  className="input"
                  id="title"
                  onChange={this.onChangeTitle}
                />
                <br />
                <label htmlFor="amounts">AMOUNT</label>
                <br />
                <input
                  type="text"
                  placeholder="AMOUNT"
                  className="input"
                  id="amounts"
                  onChange={this.onChangeAmount}
                />
                <br />
                <label htmlFor="type">TYPE</label>
                <br />
                <select id="type" className="transaction-type">
                  {transactionType.map(eachType => (
                    <option
                      key={eachType.optionId}
                      className="type-transaction"
                    >
                      {eachType.displayText}
                    </option>
                  ))}
                </select>
              </form>
              <br />
              <button className="add-btn" type="submit">
                Add
              </button>
            </div>
            <div className="history-container">
              <h1 className="history-heading">History</h1>
              <ul className="history-titles">
                <li className="h-title">Title</li>
                <li className="h-title">Amount</li>
                <li className="h-title">Type</li>
              </ul>
              <ul className="transaction-details-container">
                {transaction.map(eachTransaction => (
                  <TransactionItem
                    key={eachTransaction.id}
                    transactionDetails={eachTransaction}
                  />
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default MoneyManager
