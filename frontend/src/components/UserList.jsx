import { deleteUser } from '../api/api'

function UserList({ users, onUserDeleted }) {
  const handleDelete = async (id) => {
    await deleteUser(id)
    onUserDeleted()
  }

  return (
    <ul>
      {users.map(user => (
        <li key={user.id}>
          <span>
            <strong>{user.name}</strong> (@{user.username}) - ID: {user.id}
          </span>
          <button onClick={() => handleDelete(user.id)}>Delete</button>
        </li>
      ))}
    </ul>
  )
}

export default UserList