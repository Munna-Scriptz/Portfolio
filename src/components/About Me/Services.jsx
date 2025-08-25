import React from 'react'
import lines from '../../assets/images/TextLines.svg'
const Services = () => {
  return (
    <>
    <div className="traineeship py-10 mt-[70px]">
      <div className="container">
        <div className="process-row flex md:flex-row gap-y-5 items-center justify-between flex-col gap-2">
          {/* Card 01 */}
          <div className="activity animate-from-bottom__0 lg:w-[267px] w-full bg-brand lg:hover:w-[558px] hover:bg-Primary group ">
            <div className="relative-block">
              <div className="activity-icon">
                <img
                  alt="An image"
                  src="https://i.ibb.co/ZWp3Yts/ad-operations-process-strategy.png"
                />
              </div>
              <div className="inactive">
                <div className="title">Web App</div>
                <div className='mt-[20px] flex flex-col items-center gap-6'>
                  <img src={lines} alt="lines" />
                  <img src={lines} alt="lines" />
                  <img src={lines} alt="lines" />
                  <img src={lines} alt="lines" />
                </div>
              </div>
              <div className="active lg:group-hover:w-[340px]">
                <div className="title">Web App Development</div>
                <div className="sub-title">
                  Customer interactions, study and analysis of company branding
                  through creative briefs. Creation of mock-up designs by using
                  UI tools that simulate actions and pre-visualize the
                  reactions.
                </div>
              </div>
            </div>
          </div>

          {/* Card 02 */}
          <div className="activity animate-from-bottom__1 lg:w-[267px] w-full bg-brand lg:hover:w-[558px] hover:bg-Primary group ">
            <div className="relative-block">
              <div className="activity-icon">
                <img
                  alt="An image"
                  src="https://i.ibb.co/s2nghrT/ad-operations-process-strategy-activation.png"
                />
              </div>
              <div className="inactive">
                <div className="title">Api integration</div>
                <div className='mt-[20px] flex flex-col items-center gap-6'>
                  <img src={lines} alt="lines" />
                  <img src={lines} alt="lines" />
                  <img src={lines} alt="lines" />
                  <img src={lines} alt="lines" />
                </div>
              </div>
              <div className="active lg:group-hover:w-[340px]">
                <div className="title">Api integration in website</div>
                <div className="sub-title">
                  Customer interactions, study and analysis of company branding
                  through creative briefs. Creation of mock-up designs by using
                  UI tools that simulate actions and pre-visualize the
                  reactions.
                </div>
              </div>
            </div>
          </div>

          {/* Card 03 */}
          <div className="activity animate-from-bottom__2 lg:w-[267px] w-full bg-brand lg:hover:w-[558px] hover:bg-Primary group ">
            <div className="relative-block">
              <div className="activity-icon">
                <img
                  alt="An image"
                  src="https://i.ibb.co/ZWp3Yts/ad-operations-process-strategy.png"
                />
              </div>
              <div className="inactive">
                <div className="title">Figma to web </div>
                <div className='mt-[20px] flex flex-col items-center gap-6'>
                  <img src={lines} alt="lines" />
                  <img src={lines} alt="lines" />
                  <img src={lines} alt="lines" />
                  <img src={lines} alt="lines" />
                </div>
              </div>
              <div className="active lg:group-hover:w-[340px]">
                <div className="title">Converting figma to website</div>
                <div className="sub-title">
                  Customer interactions, study and analysis of company branding
                  through creative briefs. Creation of mock-up designs by using
                  UI tools that simulate actions and pre-visualize the
                  reactions.
                </div>
              </div>
            </div>
          </div>

          {/* Card 04 */}
          <div className="activity animate-from-bottom__3 lg:w-[267px] w-full bg-brand lg:hover:w-[558px] hover:bg-Primary group ">
            <div className="relative-block">
              <div className="activity-icon">
                <img
                  alt="An image"
                  src="https://i.ibb.co/s2nghrT/ad-operations-process-strategy-activation.png"
                />
              </div>
              <div className="inactive">
                <div className="title">Responsive</div>
                <div className='mt-[20px] flex flex-col items-center gap-6'>
                  <img src={lines} alt="lines" />
                  <img src={lines} alt="lines" />
                  <img src={lines} alt="lines" />
                  <img src={lines} alt="lines" />
                </div>
              </div>
              <div className="active lg:group-hover:w-[340px]">
                <div className="title">Responsive Web Design</div>
                <div className="sub-title">
                  Customer interactions, study and analysis of company branding
                  through creative briefs. Creation of mock-up designs by using
                  UI tools that simulate actions and pre-visualize the
                  reactions.
                </div>
              </div>
            </div>
          </div>

          {/* Card 05 */}
          <div className="activity animate-from-bottom__4 lg:w-[267px] w-full bg-brand lg:hover:w-[558px] hover:bg-Primary group ">
            <div className="relative-block">
              <div className="activity-icon">
                <img
                  alt="An image"
                  src="https://i.ibb.co/ZWp3Yts/ad-operations-process-strategy.png"
                />
              </div>
              <div className="inactive">
                <div className="title">UI / UX Design</div>
                <div className='mt-[20px] flex flex-col items-center gap-6'>
                  <img src={lines} alt="lines" />
                  <img src={lines} alt="lines" />
                  <img src={lines} alt="lines" />
                  <img src={lines} alt="lines" />
                </div>
              </div>
              <div className="active lg:group-hover:w-[340px]">
                <div className="title">UI / UX Design</div>
                <div className="sub-title">
                  Customer interactions, study and analysis of company branding
                  through creative briefs. Creation of mock-up designs by using
                  UI tools that simulate actions and pre-visualize the
                  reactions.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    </>
  )
}

export default Services