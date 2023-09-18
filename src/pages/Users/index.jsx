import { Link } from 'react-router-dom';
import { useUsersQuery } from '../../services/useUsersQuery';

export default function Users() {
  const { data, status } = useUsersQuery();

  return (
    <div className="flex flex-col gap-4">
      <div>
        <Link
          to={'/'}
          className="border bg-blue-600 text-white rounded-md px-3 py-2"
        >
          Back to Home
        </Link>
      </div>

      <div className="container bg-white rounded-md p-5">
        <div className="flex flex-col gap-5">
          <span className="text-2xl font-bold">Users List</span>

          <table className="table-auto ">
            <thead>
              <tr className="text-left bg-gray-100">
                <th className="px-4 py-2 border">Name</th>
                <th className="px-4 py-2 border">Username</th>
                <th className="px-4 py-2 border">Email</th>
                <th className="px-4 py-2 border">Phone</th>
                <th className="px-4 py-2 border">Website</th>
              </tr>
            </thead>
            <tbody>
              {status === 'loading' ? (
                <tr>
                  <td
                    data-testid="users-loading"
                    className="border px-4 py-2"
                    colSpan={5}
                  >
                    Loading...
                  </td>
                </tr>
              ) : status === 'error' ? (
                <tr>
                  <td
                    data-testid="users-error"
                    className="border px-4 py-2"
                    colSpan={5}
                  >
                    Data failed to load
                  </td>
                </tr>
              ) : data.length === 0 ? (
                <tr>
                  <td
                    data-testid="users-null"
                    className="border px-4 py-2"
                    colSpan={5}
                  >
                    Data not found
                  </td>
                </tr>
              ) : (
                data.map((user, i) => (
                  <tr key={i} data-testid={`user-${i}`}>
                    <td className="border px-4 py-2">{user.name}</td>
                    <td className="border px-4 py-2">{user.username}</td>
                    <td className="border px-4 py-2">{user.email}</td>
                    <td className="border px-4 py-2">{user.phone}</td>
                    <td className="border px-4 py-2">{user.website}</td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
