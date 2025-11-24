import { deleteUser } from '../api/api'

function UserList({ users, onUserDeleted }) {
  const handleDelete = async (id) => {
    await deleteUser(id)
    onUserDeleted()
  }

  return (
    <ul className="space-y-0">
      {users.map(user => (
        <li key={user.id}
        className="flex justify-between items-center p-4 border-b border-gray-100 last:border-b-0 hover:bg-gray-50 transition-colors"
        >
          <span className="text-gray-700">
            <strong className="font-semibold text-gray-900">{user.name}</strong> (@{user.username}) - ID: {user.id}
          </span>
          <button onClick={() => handleDelete(user.id)}
            className="px-4 py-2 bg-red-500 text-white font-semibold rounded-lg hover:bg-red-600 hover:-translate-y-0.5 transition-all duration-200 text-sm"
          >
            Delete
          </button>
        </li>
      ))}
    </ul>
  )
}

export default UserList