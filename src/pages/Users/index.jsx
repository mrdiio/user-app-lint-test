import { useQuery } from 'react-query';
import { Link } from 'react-router-dom';

export default function Users() {
  const { data, isLoading } = useQuery(
    'users/get',
    async () => {
      const res = await fetch('https://jsonplaceholder.typicode.com/users');
      const data = await res.json();
      return data;
    },
    {
      retry: 1,
      refetchOnWindowFocus: false,
    }
  );

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
          {/* table of users */}

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
              {isLoading ? (
                <tr>
                  <td
                    data-testid="loading"
                    className="border px-4 py-2"
                    colSpan={5}
                  >
                    Loading...
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
