import ExpenseForm from '../components/ExpenseForm'
import ExpenseList from '../components/ExpenseList'

function ExpensesPage({ expenses, users, onRefresh }) {
  return (
    <section className="bg-white p-6 rounded-xl shadow-sm">
      <h2
      className="text-2xl font-bold text-gray-800 mb-6 pb-3 border-b-2 border-gray-200"
      >
        Expenses
        </h2>
      <ExpenseForm users={users} onExpenseCreated={onRefresh} />
      <ExpenseList expenses={expenses} onExpenseDeleted={onRefresh} />
    </section>
  )
}

export default ExpensesPage