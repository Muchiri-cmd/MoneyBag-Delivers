
const Prospects = () => {
  const prospects = [
    {
      name: "John Doe",
      phone: "1234567890",
      email: "johndoe@gmail.com",
      socials: { insta: "@johndoe", x: "@johndoe", tiktok: "@johndoe", linkedin: "@johndoe", facebook: "@johndoe" },
      comments: "Interested in our services",
    },
    {
      name: "Jane Doe",
      phone: "1234567890",
      email: "janedoe@gmail.com",
      socials: { insta: "@janedoe", facebook: "@janedoe" },
      comments: "Interested in our services",
    },
    {
      name: "John Smith",
      phone: "1234567890",
      email: "johnsmith@gmail.com",
      socials: { x: "@johnsmith", tiktok: "@johnsmith", linkedin: "@johnsmith" },
      comments: "Interested in our services",
    },
  ];

  return (
    <div className="w-[80%] m-auto">
      {/* Prospects Table */}
      <h1 className="text-3xl text-center font-bold mt-4">Prospects</h1>
      <table className="table-auto w-full border-collapse border border-gray-300 shadow-lg mt-4">
        <thead>
          <tr className="bg-gray-100">
            <th className="border border-gray-300 px-4 py-2">Name</th>
            <th className="border border-gray-300 px-4 py-2">Phone</th>
            <th className="border border-gray-300 px-4 py-2">Email</th>
            <th className="border border-gray-300 px-4 py-2">Socials</th>
            <th className="border border-gray-300 px-4 py-2">Comments</th>
            <th className="border border-gray-300 px-4 py-2">Actions</th>
          </tr>
        </thead>
        <tbody>
          {prospects.map((prospect, index) => (
            <tr key={index} className="hover:bg-gray-50">
              <td className="border border-gray-300 px-4 py-2">{prospect.name}</td>
              <td className="border border-gray-300 px-4 py-2">{prospect.phone}</td>
              <td className="border border-gray-300 px-4 py-2">{prospect.email}</td>
              <td className="border border-gray-300 px-4 py-2">
                {Object.entries(prospect.socials).map(([platform, handle], idx) => (
                  <div key={idx}>
                    <span className="font-bold capitalize">{platform}: </span>
                    {handle}
                  </div>
                ))}
              </td>
              <td className="border border-gray-300 px-4 py-2">{prospect.comments}</td>
              <td className="border border-gray-300 px-2 py-2 space-x-2">
                <button className="bg-blue-500 text-white px-3 py-1 rounded hover:bg-blue-600">Edit</button>
                <button className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600">Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Prospects;

