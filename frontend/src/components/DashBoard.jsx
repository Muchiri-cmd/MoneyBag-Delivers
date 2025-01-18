const DashBoard = () => {
  return (
    <div className='w-[80%] m-auto'>
      <h1 className='text-3xl font-bold text-center'>DashBoard</h1>
      <div className='flex'>
        {/* Cards to show number of prospets,proposals etc and a stats graph */}
        <div className='w-1/2 p-4'>
          <div className='bg-white p-4 rounded-lg shadow-md'>
            <h2 className='text-xl font-bold'>Prospects</h2>
            <p className='text-3xl font-bold'>100</p>
          </div>
        </div>
        <div className='w-1/2 p-4'>
          <div className='bg-white p-4 rounded-lg shadow-md'>
            <h2 className='text-xl font-bold'>Proposals</h2>
            <p className='text-3xl font-bold'>50</p>
          </div>
        </div>  
      </div>
       {/* Stats Graph */}
       <div className='w-full p-4'>
          <div className='bg-white p-4 rounded-lg shadow-md'>
            <h2 className='text-xl font-bold'>Stats</h2>
            <div className='h-96'></div>
          </div>
      </div>
    </div>
  )
}

export default DashBoard
