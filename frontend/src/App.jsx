import { useState, useEffect } from 'react'
import { getUsers, getExpenses } from './api/api'
import UsersPage from './pages/UsersPage'
import ExpensesPage from './pages/ExpensesPage'

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
    <div className="min-h-screen bg-gradient-to-br from-cyan-400 to-sky-600 p-6">
      <div className="max-w-4xl mx-auto bg-gray-100 backdrop-blur rounded-2xl shadow-2xl p-8">
      <h1 className="text-4xl font-bold text-center mb-8 bg-gradient-to-r from-cyan-400 to-sky-600 bg-clip-text text-transparent">
        Expense Share Monitor
      </h1>
      <nav className="flex gap-2 mb-8 border-b-2 border-gray-400">
        {['users', 'expenses'].map(t => (
          <button
            key={t}
            className={`px-6 py-3 font-semibold rounded-t-lg transition-all duration-200
              ${tab === t ? 'bg-gradient-to-r from-sky-600 to-cyan-400 text-white'
                  : 'text-gray-600 hover:bg-gray-100'}`}
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
    </div>
  )
}

export default App
