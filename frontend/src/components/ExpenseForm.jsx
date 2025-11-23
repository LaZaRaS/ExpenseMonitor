import { useState } from 'react'
import { createExpense } from '../api/api'

function ExpenseForm({ users, onExpenseCreated }) {
  const [form, setForm] = useState({
    description: '',
    userId: '',
    amount: '',
    expenseDate: '',
  })

  const handleSubmit = async (e) => {
    e.preventDefault()
    const expense = {
      description: form.description,
      amount: parseFloat(form.amount),
      expenseDate: form.expenseDate
    }
    await createExpense(expense, form.userId)
    setForm({ description: '', userId: '', amount: '', expenseDate: ''})
    onExpenseCreated()
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        placeholder="Description"
        value={form.description}
        onChange={e => setForm({ ...form, description: e.target.value })}
        required
      />
      <select
        value={form.userId}
        onChange={e => setForm({ ...form, userId: e.target.value })}
        required
      >
        <option value="">Paid By</option>
        {users.map(u => (
          <option key={u.id} value={u.id}>{u.name}</option>
        ))}
      </select>
      <input
        placeholder="Amount"
        type="number"
        step="0.01"
        value={form.amount}
        onChange={e => setForm({ ...form, amount: e.target.value })}
        required
      />
      <input
        type="date"
        value={form.expenseDate}
        onChange={e => setForm({ ...form, expenseDate: e.target.value })}
        required
      />
      <button type="submit">Add Expense</button>
    </form>
  )
}

export default ExpenseForm