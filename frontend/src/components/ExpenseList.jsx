import { deleteExpense } from '../api/api'

function ExpenseList({ expenses, onExpenseDeleted }) {
  const handleDelete = async (id) => {
    await deleteExpense(id)
    onExpenseDeleted()
  }

  return (
    <ul className="space-y-0">
      {expenses.map(exp => (
        <li key={exp.id}
        className="flex justify-between items-center p-4 border-b border-gray-100 last:border-b-0 hover:bg-gray-50 transition-colors"
        >
          <span className="text-gray-700">
            <strong className="font-semibold text-gray-900">{exp.description}</strong> - ${exp.amount}
            {' '}(Paid by: {exp.paidUser?.name || 'Unknown'},  
            Date: {exp.expenseDate})
          </span>
          <button onClick={() => handleDelete(exp.id)}
          className="px-4 py-2 bg-red-500 text-white font-semibold rounded-lg hover:bg-red-600 hover:-translate-y-0.5 transition-all duration-200 text-sm whitespace-nowrap"
          >
            Delete
          </button>
        </li>
      ))}
    </ul>
  )
}

export default ExpenseList