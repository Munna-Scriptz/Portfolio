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
          <div className='font-poppins text-Primary text-lg font-semibold uppercase'><ScrollFloat animationDuration={1} ease='back.inOut(2)' scrollStart='center bottom+=50%' scrollEnd='bottom bottom-=40%' stagger={0.03}>What I Do</ScrollFloat></div>
            <div className='flex items-center justify-between'>
              <div className='font-soldier text-Primary lg:text-[152px] text-[64px] font-medium uppercase'><ScrollFloat animationDuration={1} ease='back.inOut(2)' scrollStart='center bottom+=50%' scrollEnd='bottom bottom-=40%' stagger={0.03}>Services</ScrollFloat></div>
              <MdOutlineArrowBack data-aos="fade-up" className='hidden md:block text-[200px] md:text-[300px] rotate-[-45deg] text-borderCol'/>
            </div>
            <ScrollReveal containerClassName='font-poppins text-second lg:text-xl text-lg lg:w-[400px] uppercase lg:ml-[100px]'>
              Comprehensive digital services to boost your online presence and achieve impactful results.
          </ScrollReveal>
        </div>
        {/* --------------Services Card-------------- */}

        <div className='mt-13 lg:hidden flex items-center flex-col gap-6'>
          <div className='bg-Primary p-6 pb-10 rounded-md' data-aos="fade-up">
            <div className="text-brand font-soldier mb-6 text-2xl" data-aos="fade-up">Web App Development</div>
              <p className="text-brand font-poppins" data-aos="fade-up">
                Customer interactions, study and analysis of company branding
                through creative briefs. Creation of mock-up designs by using
                UI tools that simulate actions and pre-visualize the
                reactions.
              </p>
          </div>
          <div className='bg-Primary p-6 pb-10 rounded-md' data-aos="fade-up">
            <div className="text-brand font-soldier mb-6 text-2xl" data-aos="fade-up">Api integration in website</div>
              <p className="text-brand font-poppins" data-aos="fade-up">
                API integration services focus on connecting different software applications and platforms to work together seamlessly. It allows businesses to automate workflows, enable real-time data sharing, and extend functionality by bringing in third-party tools or services.
              </p>
          </div>
          <div className='bg-Primary p-6 pb-10 rounded-md' data-aos="fade-up">
            <div className="text-brand font-soldier mb-6 text-2xl" data-aos="fade-up">Converting figma to website</div>
              <p className="text-brand font-poppins" data-aos="fade-up">
                Converting Figma to a website involves transforming design files into fully functional, responsive web pages. It ensures pixel-perfect accuracy, optimized code, and smooth user experiences across all devices, while maintaining the original design vision and brand identity.
              </p>
          </div>
        </div>

    </div>
    </section>
    <div className="traineeship py-10 mt-[70px] lg:block hidden">
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
                  API integration services focus on connecting different software applications and platforms to work together seamlessly. It allows businesses to automate workflows, enable real-time data sharing, and extend functionality by bringing in third-party tools or services.
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
                  Converting Figma to a website involves transforming design files into fully functional, responsive web pages. It ensures pixel-perfect accuracy, optimized code, and smooth user experiences across all devices, while maintaining the original design vision and brand identity.
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
                  Responsive web design makes websites adapt smoothly to any device or screen size. It ensures a consistent user experience with flexible layouts and intuitive navigation.
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