import React from 'react'

const Contact = () => {
  return (
    <>
      <section id='Contact' className='mt-[100px]'>
        <div className="container">
          <div id="LeftSide" className='w-[700px] flex flex-col gap-[20px]'>
            <div className='border-1 border-borderCol p-[20px] rounded-xl'>
              <div className='flex items-center gap-[24px]'>
                <p className='text-second'>01</p>
                <h2 className='text-second text-[26px] font-poppins font-medium'>What's your name? *</h2>
              </div>
              <input type="user" className='w-full py-[15px] text-[24px] text-borderCol pl-[40px] outline-none' placeholder='John Smith'/>
            </div>
            <div className='border-1 border-borderCol p-[20px] rounded-xl'>
              <div className='flex items-center gap-[24px]'>
                <p className='text-second'>02</p>
                <h2 className='text-second text-[26px] font-poppins font-medium'>What's your Email? *</h2>
              </div>
              <input type="user" className='w-full py-[15px] text-[24px] text-borderCol pl-[40px] outline-none' placeholder='Eren@gmail.com'/>
            </div>
            <div className='border-1 border-borderCol p-[20px] rounded-xl'>
              <div className='flex items-center gap-[24px]'>
                <p className='text-second'>03</p>
                <h2 className='text-second text-[26px] font-poppins font-medium'>What would you like to talk about? *</h2>
              </div>
              <input type="user" className='w-full py-[15px] text-[24px] text-borderCol pl-[40px] outline-none' placeholder='John Smith'/>
            </div>
            <div className='border-1 border-borderCol p-[20px] rounded-xl'>
              <div className='flex items-center gap-[24px]'>
                <p className='text-second'>04</p>
                <h2 className='text-second text-[26px] font-poppins font-medium'>Your message *</h2>
              </div>
              <textarea name="TextArea" cols={20} rows={10} maxLength={2000} className='w-full pt-[15px] text-[24px] text-borderCol pl-[40px] outline-none' placeholder='Hello, How can u help me with...'></textarea>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Contact