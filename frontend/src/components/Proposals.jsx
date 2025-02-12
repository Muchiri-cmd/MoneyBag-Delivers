import { useEffect,useState } from 'react';
import axios from 'axios'
const Proposals = () => {
  // const proposals = [
  //   {
  //     name: "Alice Johnson",
  //     phone: "1234567890",
  //     email: "alice.johnson@gmail.com",
  //     socials: { insta: "@alice", linkedin: "@alicejohnson" },
  //     status: "Pending",
  //   },
  //   {
  //     name: "Bob Williams",
  //     phone: "9876543210",
  //     email: "bob.williams@gmail.com",
  //     socials: { facebook: "@bobwilliams", tiktok: "@bob_on_tiktok" },
  //     status: "Approved",
  //   },
  //   {
  //     name: "Claire Smith",
  //     phone: "5554443333",
  //     email: "claire.smith@gmail.com",
  //     socials: { x: "@clairesmith" },
  //     status: "Rejected",
  //   },
  // ];

  const [proposals,setProposals ] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:8000/proposals/')
      .then(res => setProposals(res.data))
  },[])


  return (
    <div className="w-[80%] m-auto mt-8">
      <h1 className="text-2xl font-bold mb-4 text-center">Proposals Table</h1>
      <table className="table-auto w-full border-collapse border border-gray-300 shadow-lg text-center">
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
              <td className="border border-gray-300 px-4 py-2">{proposal.prospect.name}</td>
              <td className="border border-gray-300 px-4 py-2">{proposal.prospect.phone}</td>
              <td className="border border-gray-300 px-4 py-2">{proposal.prospect?.email ? proposal.prospect?.email : 'N/A'}</td>
              <td className="border border-gray-300 px-4 py-2">
                {proposal.prospect && (
                  <ul className="list-decimal pl-4">
                    {[
                       { name: "LinkedIn", url: proposal.prospect.linkedIn },
                       { name: "X (Twitter)", url: proposal.prospect.x },
                       { name: "TikTok", url: proposal.prospect.tiktok },
                       { name: "Instagram", url: proposal.prospect.ig }
                    ]
                      .filter(social => social.url)
                      .map((item,index) => (
                        <li key={index}>
                           <a
                              href={item.url}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-blue-500 hover:underline"
                            >
                              {item.name}
                            </a>
                        </li>
                      ))
                    }
                  </ul>
                )}
              </td>
              <td className="border border-gray-300 px-4 py-2">
                  <span
                    className={`px-2 py-1 rounded text-white ${
                      {
                        Draft: "bg-gray-500",
                        Sent: "bg-blue-500",
                        Viewed: "bg-indigo-500",
                        "Under Review": "bg-purple-500",
                        Declined: "bg-red-500",
                        "On Hold": "bg-yellow-500",
                        Expired: "bg-gray-700",
                        Won: "bg-green-500",
                        Lost: "bg-black"
                      }[proposal.status] || "bg-gray-400"
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
