import React from 'react'
import NavBar from "./shared/NavBar";
import AppliedJobTable from './AppliedJobTable';


function Profile() {
    let skills = ["Html","CSS","JavaScript","Reactjs","Java"];
    let resume = true;

  return (
    <>
        <NavBar/>
        <div className=' px-24  cursor-default '>
            <div className='border-2 border-[#dbdbdb] p-6 rounded-md bg-[#f8f8f8] mb-5'>
            <div className=' flex items-cener justify-between px-10'>
            <div className='flex items-center gap-5'>
            <div className="w-20 h-20 rounded-full border-2 bg-[url('avtar.png')] bg-cover bg-center" >
            </div>
            <div>
                <h1>Full Name</h1>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repudiandae </p>
            </div>
            </div>
            <div className='border-2 border-[#dbdbdb] h-fit px-4 rounded-md'>
            <i className="ri-pencil-line text-2xl cursor-pointer"></i>
            </div>
            </div>
            <div className='p-8'>
                <div className='flex items-center gap-5 mb-2'>
                <i class="ri-mail-fill text-2xl"></i>
                <h1 className='text-[#585858] text-lg'>xyz@gmail.com</h1>
                </div>
                <div className='flex items-center gap-5'>
                <i class="ri-contacts-fill text-2xl"></i>
                <h1 className='text-[#585858] text-lg'>0123456789</h1>
                </div>
            </div>

            <div className='px-8 mb-4'>
                <h1 className='font-semibold text-xl mb-2'>Skills</h1>
                {
                    skills.length !==0 ? (
                        <div className='flex items-center gap-2'>
                    {skills.map((skill,index)=>(
                        <div key={index} className='bg-black text-[#dbdbdb] font-semibold px-4  rounded-full'>{skill}</div>
                    ))}
                </div>
                    ) : "NA"
                }
            </div>
            <div className='px-8 flex items-center gap-4'>
                <h1 className='font-semibold text-xl'>Resume</h1>
                {
                    resume ? (
                        <a href="https://www.google.com/" target='blank'>My resume</a>
                    ): "NA"
                }
            </div>
            </div>
            <div>
                <h1 className=' text-2xl font-semibold mb-2'>Applied Job</h1>
                <AppliedJobTable/>
            </div>
        </div>
    </>
  )
}

export default Profile