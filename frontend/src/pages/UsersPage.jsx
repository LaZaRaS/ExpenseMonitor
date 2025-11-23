import UserForm from '../components/UserForm'
import UserList from '../components/UserList'

function UsersPage({ users, onRefresh }) {
  return (
    <section>
      <h2>Users</h2>
      <UserForm onUserCreated={onRefresh} />
      <UserList users={users} onUserDeleted={onRefresh} />
    </section>
  )
}

export default UsersPage