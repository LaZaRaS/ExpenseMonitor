import ExpenseForm from '../components/ExpenseForm'
import ExpenseList from '../components/ExpenseList'

function ExpensesPage({ expenses, users, onRefresh }) {
  return (
    <section>
      <h2>Expenses</h2>
      <ExpenseForm users={users} onExpenseCreated={onRefresh} />
      <ExpenseList expenses={expenses} onExpenseDeleted={onRefresh} />
    </section>
  )
}

export default ExpensesPage