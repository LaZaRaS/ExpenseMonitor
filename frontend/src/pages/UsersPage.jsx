import UserForm from '../components/UserForm'
import UserList from '../components/UserList'

function UsersPage({ users, onRefresh }) {
  return (
    <section className="bg-white p-6 rounded-xl shadow-sm">
      <h2
      className="text-2xl font-bold text-gray-800 mb-6 pb-3 border-b-2 border-gray-200"
      >
        Add User
      </h2>
      <UserForm onUserCreated={onRefresh} />
      <UserList users={users} onUserDeleted={onRefresh} />
    </section>
  )
}

export default UsersPage