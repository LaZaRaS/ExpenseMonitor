import { deleteExpense } from '../api/api'

function ExpenseList({ expenses, onExpenseDeleted }) {
  const handleDelete = async (id) => {
    await deleteExpense(id)
    onExpenseDeleted()
  }

  return (
    <ul>
      {expenses.map(exp => (
        <li key={exp.id}>
          <span>
            <strong>{exp.description}</strong> - ${exp.amount}
            {' '}(Paid by: {exp.paidUser?.name || 'Unknown'},  
            Date: {exp.expenseDate})
          </span>
          <button onClick={() => handleDelete(exp.id)}>Delete</button>
        </li>
      ))}
    </ul>
  )
}

export default ExpenseList