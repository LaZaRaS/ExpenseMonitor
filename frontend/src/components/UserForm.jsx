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
    <form onSubmit={handleSubmit}>
      <input
        placeholder="Name"
        value={form.name}
        onChange={e => setForm({ ...form, name: e.target.value })}
        required
      />
      <input
        placeholder="Username"
        value={form.username}
        onChange={e => setForm({ ...form, username: e.target.value })}
        required
      />
      <input
        placeholder="Password"
        type="password"
        value={form.password}
        onChange={e => setForm({ ...form, password: e.target.value })}
        required
      />
      <button type="submit">Add User</button>
    </form>
  )
}

export default UserForm