import React from 'react'
import ContactBan from '../components/Contact/ContactBan'
import ContactMe from '../components/home/ContactMe'
import ExploreMyWork from '../components/common/ExploreMyWork'

const Contact = () => {
  return (
    <>
        <ContactBan/>
        <div id='Contact-Section'>
            <ContactMe/>
        </div>
        <div className='pb-[130px]'>
            <ExploreMyWork/>
        </div>
    </>
  )
}

export default Contact