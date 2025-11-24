import { useState } from 'react'
import { createUser } from '../api/api'

function UserForm({ onUserCreated }) {
  const [form, setForm] = useState({ name: '', username: '', password: '' })

  const handleSubmit = async (e) => {
    e.preventDefault()
    await createUser(form)
    setForm({ name: '', username: '', password: '' })
    onUserCreated()
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-wrap gap-3 mb-6"> 
      <input
        placeholder="Name"
        value={form.name}
        onChange={e => setForm({ ...form, name: e.target.value })}
        required
        className="flex-1 min-w-[150px] px-4 py-3 border-2 border-gray-200 rounded-lg focus:outline-none focus:border-purple-600 focus:ring-2 focus:ring-purple-200 transition-all"
      />
      <input
        placeholder="Username"
        value={form.username}
        onChange={e => setForm({ ...form, username: e.target.value })}
        required
        className="flex-1 min-w-[150px] px-4 py-3 border-2 border-gray-200 rounded-lg focus:outline-none focus:border-purple-600 focus:ring-2 focus:ring-purple-200 transition-all"
      />
      <input
        placeholder="Password"
        type="password"
        value={form.password}
        onChange={e => setForm({ ...form, password: e.target.value })}
        required
        className="flex-1 min-w-[150px] px-4 py-3 border-2 border-gray-200 rounded-lg focus:outline-none focus:border-purple-600 focus:ring-2 focus:ring-purple-200 transition-all"
      />
      <button type="submit" className="px-6 py-3 bg-gradient-to-r from-sky-600 to-cyan-400 text-white font-semibold rounded-lg hover:-translate-y-1 hover:shadow-lg transition-all duration-200"
      >
        Add User
      </button>
    </form>
  )
}

export default UserForm