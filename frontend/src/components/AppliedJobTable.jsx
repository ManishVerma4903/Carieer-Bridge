import React from 'react'

function AppliedJobTable() {
  return (
    <div >
        <table className='w-full table-fixed'>
                <tr className='text-[#989898] w-fit h-12 '>
                    <th>Date</th>
                    <th>Job Role</th>
                    <th>Company</th>
                    <th>Status</th>
                </tr>
                <tbody className='text-center font-medium'>
                    {
                        [11,2,3,4].map((item,index)=>(
                            <tr key={index} className='h-12 border-t-2'>
                                <td >15-05-2024</td>
                                <td>Frontend Developer</td>
                                <td>Google</td>
                                <td><div className='bg-black w-fit m-auto text-white  px-3  rounded-full'>Selected</div></td>
                            </tr>
                        ))
                    }
                </tbody>
        </table>
        <h1 className='text-center mt-5'>A list of your applied jobs</h1>
    </div>
  )
}

export default AppliedJobTable