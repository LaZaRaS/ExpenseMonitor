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
    <form onSubmit={handleSubmit} className="flex flex-wrap gap-3 mb-6">
      <input
        placeholder="Description"
        value={form.description}
        onChange={e => setForm({ ...form, description: e.target.value })}
        required
        className="flex-1 min-w-[200px] px-4 py-3 border-2 border-gray-200 rounded-lg focus:outline-none focus:border-sky-200 focus:ring-2 focus:ring-sky-600 transition-all"
      />
      <select
        value={form.userId}
        onChange={e => setForm({ ...form, userId: e.target.value })}
        required
        className="flex-1 min-w-[200px] px-4 py-3 border-2 border-gray-200 rounded-lg focus:outline-none focus:border-sky-200 focus:ring-2 focus:ring-sky-600 transition-all"
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
        className="flex-1 min-w-[200px] px-4 py-3 border-2 border-gray-200 rounded-lg focus:outline-none focus:border-sky-200 focus:ring-2 focus:ring-sky-600 transition-all"
      />
      <input
        type="date"
        value={form.expenseDate}
        onChange={e => setForm({ ...form, expenseDate: e.target.value })}
        required
        className="flex-1 min-w-[200px] px-4 py-3 border-2 border-gray-200 rounded-lg focus:outline-none focus:border-sky-200 focus:ring-2 focus:ring-sky-600 transition-all"
      />
      <button type="submit"
      className="px-6 py-3 bg-gradient-to-r from-sky-600 to-cyan-400 text-white font-semibold rounded-lg hover:-translate-y-1 hover:shadow-lg transition-all duration-200"
      >
        Add Expense
      </button>
    </form>
  )
}

export default ExpenseForm