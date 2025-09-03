import React from 'react'
import ContactBan from '../components/Contact/ContactBan'
import ContactMe from '../components/home/ContactMe'
import ExploreMyWork from '../components/common/ExploreMyWork'

const Contact = () => {
  return (
    <>
        <ContactBan/>
        <ContactMe/>
        <div className='pb-[130px]'>
            <ExploreMyWork/>
        </div>
    </>
  )
}

export default Contact