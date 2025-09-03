import React from 'react'
import lines from '../../assets/images/TextLines.svg'
import { MdOutlineArrowBack } from 'react-icons/md'
import ScrollFloat from '../effects/ScrollFloat'
import ScrollReveal from '../effects/ScrollReveal'
const Services = () => {
  return (
    <>
    <section id='Services' className='mt-[112px]'>
      <div className="container">
        {/* --------------Header-------------- */}
        <div>
          <p className='font-poppins text-Primary text-lg font-semibold uppercase'><ScrollFloat animationDuration={1} ease='back.inOut(2)' scrollStart='center bottom+=50%' scrollEnd='bottom bottom-=40%' stagger={0.03}>What I Do</ScrollFloat></p>
            <div className='flex items-center justify-between'>
              <h2 className='font-soldier text-Primary lg:text-[152px] text-[64px] font-medium uppercase'><ScrollFloat animationDuration={1} ease='back.inOut(2)' scrollStart='center bottom+=50%' scrollEnd='bottom bottom-=40%' stagger={0.03}>Services</ScrollFloat></h2>
              <MdOutlineArrowBack data-aos="fade-up" className='hidden md:block text-[200px] md:text-[300px] rotate-[-45deg] text-borderCol'/>
            </div>
            <ScrollReveal containerClassName='font-poppins text-second lg:text-xl text-lg lg:w-[400px] uppercase lg:ml-[100px]'>
              Comprehensive digital services to boost your online presence and achieve impactful results.
          </ScrollReveal>
        </div>
        {/* --------------Services Card-------------- */}
      </div>
    </section>
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