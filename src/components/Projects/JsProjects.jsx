import React from 'react'
import { FaRegStar } from 'react-icons/fa'
import Magnet from '../effects/Magnet'
import BlurText from '../effects/BlurText'
import { GrTechnology } from 'react-icons/gr'
import { BiCategory } from 'react-icons/bi'
// ------------Icons----------
import ReactIcon from '../../assets/images/react.svg'
import FigmaIcon from '../../assets/images/FigmaIcon.svg'
import TailwindCss from '../../assets/images/TailwindCssIcon.svg'
import reduxIcon from '../../assets/images/ReduxIcon.svg'
import JsIcon from '../../assets/images/JsIcon.jpg'
import HtmlIcon from '../../assets/images/HtmlIcon.svg'
import CssIcon from '../../assets/images/CssIcon.svg'
import Bootstrap from '../../assets/images/BootStrapIcon.svg'
import firebase from '../../assets/images/FirebaseIcon.svg'
import AosIcon from '../../assets/images/AosIcon.png'
import ProjectImg1 from '../../assets/images/Project1.jpg'
import NoteAppThumb from '../../assets/images/NoteAppThumb.png'
import HectoCommerce from '../../assets/images/HectoThumbnail.png'
import prideAgency from '../../assets/images/PrideAgencyThumb.png'
import appManagement from '../../assets/images/AppManagementThumb.png'

import todoList from '../../assets/images/todoListJS.png'
import weather from '../../assets/images/weatherJS.png'
import guessGame from '../../assets/images/guessingGameJS.png'
import imageSearch from '../../assets/images/imageSearchJS.png'
import newsSearch from '../../assets/images/newsSearchJS.png'

const JsProjects = () => {
    const JsProjectsData = [
        {
          'ProjectImage' : todoList,
          'ProjectName' : 'To-Do List App',
          'Description' : 'A To-Do List App built with Vanilla JavaScript featuring add, edit, update, complete, and delete options, designed with a clean and responsive interface for easy task management.',
          'technologies' : [JsIcon, FigmaIcon , HtmlIcon , CssIcon],
          'type' : 'To-Do List',
          'liveLink' : 'https://munna-scriptz.github.io/To-Do-List/',
          'GithubRepo' : 'https://github.com/Munna-Scriptz'
        },
        {
          'ProjectImage' : weather,
          'ProjectName' : 'Live Weather Check',
          'Description' : 'A weather website built with Vanilla JavaScript and API integration to check live weather forecasts. Its a clean and simple tool for getting up-to-date weather info fast.',
          'technologies' : [JsIcon,  FigmaIcon , HtmlIcon , CssIcon],
          'type' : 'Weather With API',
          'liveLink' : 'https://munna-scriptz.github.io/Weather/',
          'GithubRepo' : 'https://github.com/Munna-Scriptz',
        },
        {
          'ProjectImage' : guessGame,
          'ProjectName' : 'Drag & Drop Guessing Game',
          'Description' : 'An amazing Drag-and-Drop Guessing Game built with Vanilla JavaScript. This interactive game lets you test your knowledge and challenges you to correctly match items using a smooth and intuitive drag-and-drop interface.',
          'technologies' : [JsIcon , HtmlIcon , CssIcon],
          'type' : 'Game',
          'liveLink' : 'https://munna-scriptz.github.io/Js_Games/',
          'GithubRepo' : 'https://github.com/Munna-Scriptz'
        },
        {
          'ProjectImage' : imageSearch,
          'ProjectName' : 'Image Gallery With API',
          'Description' : `A sleek Image Search Engine built with Vanilla JavaScript and API integration. Just type in what you're looking for, and it pulls up high-quality images instantly. It's a fast and easy way to find what you need.`,
          'technologies' : [JsIcon , HtmlIcon , CssIcon],
          'type' : 'Image Search Engine',
          'liveLink' : 'https://munna-scriptz.github.io/Js_Games/Search_Engine/Search.html',
          'GithubRepo' : 'https://github.com/Munna-Scriptz'
        },
        {
          'ProjectImage' : newsSearch,
          'ProjectName' : 'News Feed With API',
          'Description' : 'A clean and fast News Search Engine built with Vanilla JavaScript and API integration. Just enter a topic, and it instantly pulls up the latest headlines and articles, making it a super easy way to stay informed.',
          'technologies' : [ JsIcon , HtmlIcon , CssIcon],
          'type' : 'News Search Engine',
          'liveLink' : 'https://munna-scriptz.github.io/Js_Games/News-App/index.html',
          'GithubRepo' : 'https://github.com/Munna-Scriptz'
        },
    ]
  return (
    <>
        <section id='JsProjects' className='mt-[82px]'>
            <div>
                <div id="JsProjects-Row">
                    {/* ----------------------JavaScript Projects Header------------------------- */}
                    <div className='flex items-center justify-center gap-5 mb-[60px]'>
                        <h2 className='text-second font-soldier lg:text-[46px] md:block hidden text-[32px] font-medium text-center' data-aos="fade-up"> JavaScript Projects — Built with Passion</h2> 
                        <img className='w-[45px]' src={JsIcon} alt="JsIcon" />
                        <h2 className='text-second font-soldier lg:text-[46px] md:hidden block text-[32px] font-medium text-center' data-aos="fade-up">JavaScript Projects</h2> 
                    </div>
                    {/* ----------------------JavaScript Projects------------------------- */}
                    <div className='w-full grid grid-cols-1 sm:grid-cols-2 gap-6 place-items-center'>
                        {
                            JsProjectsData.map((items, i)=>(
                                <div key={i} className={`flex items-center flex-col lg:gap-7 gap-5 h-[700px]`}>
                                    <div className='lg:w-[560px] w-full'>
                                        <img className='rounded-xl' src={items.ProjectImage} alt="Project Image" />
                                    </div>
                                    
                                    <div className='lg:w-[560px] w-full'>
                                        <h2 className='font-soldier lg:text-[36px] text-[32px] text-Primary font-medium mb-4 uppercase'><BlurText text={items.ProjectName} delay={280} animateBy="words" direction="bottom"/></h2>
                                        <h2 className='font-poppins lg:text-[17px] text-[14px] text-Primary font-normal mb-4'><BlurText text={items.Description} delay={50} animateBy="words" direction="bottom"/></h2>
                                        <div className='flex items-center gap-4 mb-4'>
                                            <p className='font-poppins lg:text-[18px] text-[13px] text-second font-medium flex items-center gap-2'><BiCategory /> Type : {items.type}</p>
                                        </div>
                                        <div className='flex items-center gap-4'>
                                            <p className='font-poppins lg:text-[18px] text-[14px] text-second font-medium flex items-center gap-2'><GrTechnology /> Tools Used :</p>
                                            <div className='lg:w-[30px] w-[22px] flex items-center gap-2'>
                                                {
                                                    items.technologies.map((img , i)=>(
                                                        <img src={img} key={i}/>
                                                    ))
                                                }
                                            </div>
                                        </div>
                                        <div className='mt-7 flex items-center lg:gap-4 gap-2'>
                                            <Magnet padding={30} disabled={false} magnetStrength={5}>
                                                <a href={items.liveLink} target='_blank' to={'/projects'} className='ContactButton font-poppins lg:px-[24px] py-[8px] px-[15px] font-medium lg:text-base text-sm text-Primary hover-this'>OPEN PROJECT</a>
                                            </Magnet>
                                            <Magnet padding={10} disabled={false} magnetStrength={5}>
                                                <a href={`${items.GithubRepo}`} target='_blank' className='DownloadCv font-poppins font-medium lg:text-base text-sm text-Primary hover-brown'>
                                                    <span>GITHUB REPO</span>
                                                </a>
                                            </Magnet>
                                        </div>
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                </div>
            </div>
        </section>
    </>
  )
}

export default JsProjects