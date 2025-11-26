const API = '/api'

// Users
export const createUser = (user) => fetch(`${API}/users`, {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify(user)
}).then(r => r.json())

export const getUser = (id) => fetch(`${API}/users/${id}`).then(r => r.json())

export const getUsers = () => fetch(`${API}/users`).then(r => r.json())

export const deleteUser = (id) => fetch(`${API}/users/${id}`, { method: 'DELETE' })
.then(r => { if (!r.ok) throw new Error('Delete failed'); return r })

// Expenses
export const createExpense = (expense, userId) => fetch(`${API}/expenses?userId=${userId}`, {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify(expense)
}).then(r => r.json())

export const getExpensesByUser = (userId) => fetch(`${API}/expenses/user/${userId}`).then(r => r.json())

export const getExpenses = () => fetch(`${API}/expenses`).then(r => r.json())

export const deleteExpense = (id) => fetch(`${API}/expenses/${id}`, { method: 'DELETE' })