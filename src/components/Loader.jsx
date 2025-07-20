import React from 'react'

const Loader = () => {
  return (
    <>
            {/* <!-- ------Loader------- --> */}
    <div className="loader">
      <div className="revealer"></div>
    <div className="loader-text-wrapper">
      <div className="loader-text">
        <h3>MUNNA</h3>
      </div>
    </div>
    <div className="progress-wrapper">
      <div className="progress-line-wrapper">
        <span className="progress-line" id="progress-bar"></span>
      </div>
    </div>
  </div>
    </>
  )
}

export default Loader