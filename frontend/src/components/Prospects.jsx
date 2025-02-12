import { useState,useEffect } from "react";
import axios from "axios";

const Prospects = () => {
  // const prospects = [
  //   {
  //     name: "John Doe",
  //     phone: "1234567890",
  //     email: "johndoe@gmail.com",
  //     socials: { insta: "@johndoe", x: "@johndoe", tiktok: "@johndoe", linkedin: "@johndoe", facebook: "@johndoe" },
  //     comments: "Interested in our services",
  //   },
  //   {
  //     name: "Jane Doe",
  //     phone: "1234567890",
  //     email: "janedoe@gmail.com",
  //     socials: { insta: "@janedoe", facebook: "@janedoe" },
  //     comments: "Interested in our services",
  //   },
  //   {
  //     name: "John Smith",
  //     phone: "1234567890",
  //     email: "johnsmith@gmail.com",
  //     socials: { x: "@johnsmith", tiktok: "@johnsmith", linkedin: "@johnsmith" },
  //     comments: "Interested in our services",
  //   },
  // ];
  const [prospects, setProspects] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:8000/prospects")
    .then((response) => {
      setProspects(response.data);
    })  
  },[])

  console.log('prospects:', prospects);

  return (
    <div className="w-[80%] m-auto">
      <h1 className="text-3xl text-center font-bold mt-4">Prospects</h1>
      <table className="table-auto w-full border-collapse border border-gray-300 shadow-lg mt-4 text-center">
        <thead>
          <tr className="bg-gray-100">
            <th className="border border-gray-300 px-4 py-2">Name</th>
            <th className="border border-gray-300 px-4 py-2">Phone</th>
            <th className="border border-gray-300 px-4 py-2">Email</th>
            <th className="border border-gray-300 px-4 py-2">Socials</th>
            <th className="border border-gray-300 px-4 py-2">Comments</th>
            <th className="border border-gray-300 px-4 py-2">Proposed</th>
            <th className="border border-gray-300 px-4 py-2">Actions</th>
          </tr>
        </thead>
        <tbody>
          {prospects.map((prospect, index) => (
            <tr key={index} className="hover:bg-gray-50">
              <td className="border border-gray-300 px-4 py-2">{prospect.name}</td>
              <td className="border border-gray-300 px-4 py-2">{prospect.phone}</td>
              <td className="border border-gray-300 px-4 py-2">{prospect.email ? prospect.email : 'N/A'}</td>
             
                 <td className="border border-gray-300 px-4 py-2">
                
                  <ul className="list-decimal pl-4">
                    {[
                       { name: "LinkedIn", url: prospect.linkedIn },
                       { name: "X (Twitter)", url: prospect.x },
                       { name: "TikTok", url: prospect.tiktok },
                       { name: "Instagram", url:prospect.ig }
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
                
              </td>
              <td className="border border-gray-300 px-4 py-2">{prospect.comments}</td>
              <td className="border border-gray-300 px-2 py-2 space-x-2">
                <button className="bg-blue-500 text-white px-3 py-1 rounded hover:bg-blue-600">Proposed</button>
              </td>
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

