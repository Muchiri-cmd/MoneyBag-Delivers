import React from 'react'

const Proposals = () => {
  const proposals = [
    {
      name: "Alice Johnson",
      phone: "1234567890",
      email: "alice.johnson@gmail.com",
      socials: { insta: "@alice", linkedin: "@alicejohnson" },
      status: "Pending",
    },
    {
      name: "Bob Williams",
      phone: "9876543210",
      email: "bob.williams@gmail.com",
      socials: { facebook: "@bobwilliams", tiktok: "@bob_on_tiktok" },
      status: "Approved",
    },
    {
      name: "Claire Smith",
      phone: "5554443333",
      email: "claire.smith@gmail.com",
      socials: { x: "@clairesmith" },
      status: "Rejected",
    },
  ];

  return (
    <div className="w-[80%] m-auto mt-8">
      <h1 className="text-2xl font-bold mb-4 text-center">Proposals Table</h1>
      {/* Proposals Table */}
      <table className="table-auto w-full border-collapse border border-gray-300 shadow-lg">
        <thead>
          <tr className="bg-gray-100">
            <th className="border border-gray-300 px-4 py-2">Name</th>
            <th className="border border-gray-300 px-4 py-2">Phone</th>
            <th className="border border-gray-300 px-4 py-2">Email</th>
            <th className="border border-gray-300 px-4 py-2">Socials</th>
            <th className="border border-gray-300 px-4 py-2">Status</th>
            <th className="border border-gray-300 px-4 py-2">Actions</th>
          </tr>
        </thead>
        <tbody>
          {proposals.map((proposal, index) => (
            <tr key={index} className="hover:bg-gray-50">
              <td className="border border-gray-300 px-4 py-2">{proposal.name}</td>
              <td className="border border-gray-300 px-4 py-2">{proposal.phone}</td>
              <td className="border border-gray-300 px-4 py-2">{proposal.email}</td>
              <td className="border border-gray-300 px-4 py-2">
                {Object.entries(proposal.socials).map(([platform, handle], idx) => (
                  <div key={idx}>
                    <span className="font-bold capitalize">{platform}: </span>
                    {handle}
                  </div>
                ))}
              </td>
              <td className="border border-gray-300 px-4 py-2">
                <span
                  className={`px-2 py-1 rounded text-white ${
                    proposal.status === "Pending"
                      ? "bg-yellow-500"
                      : proposal.status === "Approved"
                      ? "bg-green-500"
                      : "bg-red-500"
                  }`}
                >
                  {proposal.status}
                </span>
              </td>
              <td className="border border-gray-300 px-4 py-2">
                <button className="bg-blue-500 text-white px-3 py-1 rounded hover:bg-blue-600">
                  Update Status
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Proposals
