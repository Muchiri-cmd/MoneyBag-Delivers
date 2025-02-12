
const Home = () => {
  return (
    <div className='w-[80%] m-auto'>
      <h1 className='text-4xl font-bold text-center mt-24'>Welcome to Freelancer</h1>
      <p className='text-xl text-center mt-4'>The best place to manage and track your prospect clients and proposals</p>
      <h2 className='text-center mt-20 font-bold text-3xl'>Process</h2>
      
      <div className='flex gap-4'>
        <div className='flex-1 text-center mt-8 px-6 py-20 rounded-md shadow-md shadow-gray-300 hover:-translate-y-1.5'>
          <h3 className='text-2xl font-bold'>1. Identify Prospects</h3>
          <p className='mt-4'>Add a client to the list of potential clients</p>
        </div>
        <div className='flex-1 text-center mt-8 px-6 py-20 rounded-md shadow-md shadow-gray-300 hover:-translate-y-1.5'>
          <h3 className='text-2xl font-bold'>2. Make Proposal and update proposal status</h3>
          <p className='mt-4'>Update Client Proposal Status</p>
        </div>
        <div className='flex-1 text-center mt-8 px-6 py-20 rounded-md shadow-md shadow-gray-300 hover:-translate-y-1.5'>
          <h3 className='text-2xl font-bold'>3. Track the Proposals</h3>
          <p className='mt-4'>Track the proposals status and Prospects Info</p>
        </div>
      </div>
    </div>
  )
}

export default Home
