import { deleteUser } from '../api/api'

function UserList({ users, onUserDeleted }) {
  const [error, setError] = useState('')

  const handleDelete = async (id, name) => {
    setError('')
    try {
      const response = await deleteUser(id)
      if(!response.ok) {
      setError(`Can't delete ${name}: Associated with expenses`)
      }  
      onUserDeleted()
    }
    catch(err) {
      setError(`Can't delete ${name}: Associated with expenses`)
    }
  }

  return (
    <div>
      {error && (
        <div className="bg-red-100 border-2 border-red-500 text-red-900 px-5 py-4 rounded-lg mb-6 font-medium">
          {error}
        </div>
      )}
      <ul className="space-y-0">
        {users.map(user => (
          <li key={user.id}
          className="flex justify-between items-center p-4 border-b border-gray-100 last:border-b-0 hover:bg-gray-50 transition-colors"
          >
            <span className="text-gray-700">
              <strong className="font-semibold text-gray-900">{user.name}</strong> (@{user.username}) - ID: {user.id}
            </span>
            <button onClick={() => handleDelete(user.id, user.name)}
              className="px-4 py-2 bg-red-500 text-white font-semibold rounded-lg hover:bg-red-600 hover:-translate-y-0.5 transition-all duration-200 text-sm"
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default UserList