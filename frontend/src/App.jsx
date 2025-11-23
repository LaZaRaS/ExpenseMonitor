import { useState, useEffect } from 'react'
import { getUsers, getExpenses } from './api/api'
import UsersPage from './pages/UsersPage'
import ExpensesPage from './pages/ExpensesPage'
import './App.css'

console.log('App.jsx loaded')
function App() {
  const [tab, setTab] = useState('users')
  const [users, setUsers] = useState([])
  const [expenses, setExpenses] = useState([])

  const fetchAll = () => {
    getUsers().then(setUsers)
    getExpenses().then(setExpenses)
  }

  useEffect(() => {
    fetchAll()
  }, [])

  return (
    <div className="app">
      <h1>Expense Share Monitor</h1>

      <nav className="tabs">
        {['users', 'expenses'].map(t => (
          <button
            key={t}
            className={tab === t ? 'active' : ''}
            onClick={() => setTab(t)}
          >
            {t.charAt(0).toUpperCase() + t.slice(1)}
          </button>
        ))}
      </nav>

      {tab === 'users' && (
        <UsersPage users={users} onRefresh={fetchAll} />
      )}

      {tab === 'expenses' && (
        <ExpensesPage expenses={expenses} users={users} onRefresh={fetchAll} />
      )}
    </div>
  )
}

export default App
