import React from 'react'
import LatestJobCards from './LatestJobCards';

function LatestJob() {
  const randomJobs  = [1,2,3,4,5,6,7,8,9,10];
  return (
    <div className='px-24 py-10'>
      <h1 className='text-3xl font-semibold'> <span className='text-[#1937D6]'>Latest &Top</span> Job Openings</h1>
      <div className='grid grid-cols-4 p-10 '>
        {randomJobs.slice(0,8).map((item,index) =>(
          <LatestJobCards  key={index}  />
        ))}
      </div>
    </div>
  )
}

export default LatestJob