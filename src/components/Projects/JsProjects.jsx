import React, { useEffect } from 'react'
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
import masterCard from '../../assets/images/masterCardJS.png'
import numberGuess from '../../assets/images/numberGuessJS.png'
import numberCounter from '../../assets/images/numberCounterJS.png'
import calculator from '../../assets/images/calculatorJS.png'

const JsProjects = ({ proLength }) => {
  const JsProjectsData = [
    {
      'ProjectImage': todoList,
      'ProjectName': 'To-Do List App',
      'Description': 'A To-Do List App built with Vanilla JavaScript featuring add, edit, update, complete, and delete options, designed with a clean and responsive interface for easy task management.',
      'technologies': [JsIcon, FigmaIcon, HtmlIcon, CssIcon],
      'type': 'To-Do List',
      'liveLink': 'https://munna-scriptz.github.io/To-Do-List/',
      'GithubRepo': 'https://github.com/Munna-Scriptz'
    },
    {
      'ProjectImage': weather,
      'ProjectName': 'Live Weather Check',
      'Description': 'A weather website built with Vanilla JavaScript and API integration to check live weather forecasts. Its a clean and simple tool for getting up-to-date weather info fast.',
      'technologies': [JsIcon, FigmaIcon, HtmlIcon, CssIcon],
      'type': 'Weather With API',
      'liveLink': 'https://munna-scriptz.github.io/Weather/',
      'GithubRepo': 'https://github.com/Munna-Scriptz',
    },
    {
      'ProjectImage': guessGame,
      'ProjectName': 'Drag & Drop Guessing Game',
      'Description': 'An amazing Drag-and-Drop Guessing Game built with Vanilla JavaScript. This interactive game lets you test your knowledge and challenges you to correctly match items using a smooth and intuitive drag-and-drop interface.',
      'technologies': [JsIcon, HtmlIcon, CssIcon],
      'type': 'Game',
      'liveLink': 'https://munna-scriptz.github.io/Js_Games/',
      'GithubRepo': 'https://github.com/Munna-Scriptz'
    },
    {
      'ProjectImage': imageSearch,
      'ProjectName': 'Image Gallery With API',
      'Description': `A sleek Image Search Engine built with Vanilla JavaScript and API integration. Just type in what you're looking for, and it pulls up high-quality images instantly. It's a fast and easy way to find what you need.`,
      'technologies': [JsIcon, HtmlIcon, CssIcon],
      'type': 'Image Search Engine',
      'liveLink': 'https://munna-scriptz.github.io/Js_Games/Search_Engine/Search.html',
      'GithubRepo': 'https://github.com/Munna-Scriptz'
    },
    {
      'ProjectImage': newsSearch,
      'ProjectName': 'News Feed With API',
      'Description': 'A clean and fast News Search Engine built with Vanilla JavaScript and API integration. Just enter a topic, and it instantly pulls up the latest headlines and articles, making it a super easy way to stay informed.',
      'technologies': [JsIcon, HtmlIcon, CssIcon],
      'type': 'News Search Engine',
      'liveLink': 'https://munna-scriptz.github.io/Js_Games/News-App/index.html',
      'GithubRepo': 'https://github.com/Munna-Scriptz'
    },
    {
      'ProjectImage': masterCard,
      'ProjectName': 'Master Card Generator',
      'Description': 'A MasterCard generator built with a Constructor Function. Just fill out your information to generate a virtual card, making it a straightforward and practical tool for creating and displaying card details.',
      'technologies': [JsIcon, HtmlIcon, CssIcon],
      'type': 'Card Generator',
      'liveLink': 'https://munna-scriptz.github.io/Id_card_generator/',
      'GithubRepo': 'https://github.com/Munna-Scriptz'
    },
    {
      'ProjectImage': numberGuess,
      'ProjectName': 'Number Guessing Game',
      'Description': `An interactive two-player guessing game built with Vanilla JavaScript. The first player enters a secret number between 1 and 10, and the second player wins by correctly guessing the hidden value. It's a simple, conditional logic-based game.`,
      'technologies': [JsIcon, HtmlIcon, CssIcon],
      'type': 'Guess Game',
      'liveLink': 'https://munna-scriptz.github.io/number-guessing-game/',
      'GithubRepo': 'https://github.com/Munna-Scriptz'
    },
    {
      'ProjectImage': numberCounter,
      'ProjectName': 'Number Counter',
      'Description': `A versatile number counter built with Vanilla JavaScript. Input your desired number to count up to it with full control over the speed and duration of the animation, all handled by a simple interval.`,
      'technologies': [JsIcon, HtmlIcon, CssIcon],
      'type': 'Number Counter',
      'liveLink': 'https://munna-scriptz.github.io/Number-Counter/',
      'GithubRepo': 'https://github.com/Munna-Scriptz'
    },
    {
      'ProjectImage': calculator,
      'ProjectName': 'Calculator With JS',
      'Description': `A classic calculator app built with Vanilla JavaScript. It can perform basic arithmetic operations like addition, subtraction, multiplication, and division, all with a clean, user-friendly interface.`,
      'technologies': [JsIcon, HtmlIcon, CssIcon],
      'type': 'Calculator',
      'liveLink': 'https://munna-scriptz.github.io/calculator-js/',
      'GithubRepo': 'https://github.com/Munna-Scriptz'
    },
  ]

  useEffect(() => {
    if (typeof proLength === "function") {
      proLength(JsProjectsData.length);
    }
  }, [proLength]);
  return (
    <>
      <section id='JsProjects' className='mt-[82px]'>
        <div>
          <div id="JsProjects-Row">
            {/* ----------------------JavaScript Projects Header------------------------- */}
            <div className='flex items-center justify-center gap-5 mb-[60px]'>
              <h2 className='text-second font-soldier lg:text-[46px] md:block hidden text-[32px] font-medium text-center' data-aos="fade-up"> JavaScript Projects — Logic Turned Into Art</h2>
              <img className='w-[45px]' src={JsIcon} alt="JsIcon" />
              <h2 className='text-second font-soldier lg:text-[46px] md:hidden block text-[32px] font-medium text-center' data-aos="fade-up">JavaScript Projects</h2>
            </div>
            {/* ----------------------JavaScript Projects------------------------- */}
            <div className='w-full grid grid-cols-1 sm:grid-cols-2 gap-6 place-items-center'>
              {
                JsProjectsData.map((items, i) => (
                  <div key={i} className={`flex items-center flex-col lg:gap-7 gap-5 lg:h-[700px] h-[550px]`}>
                    <div className='lg:w-[560px] w-full' data-aos="fade-up">
                      <img className='rounded-xl' src={items.ProjectImage} alt="Project Image" />
                    </div>

                    <div className='lg:w-[560px] w-full'>
                      <h2 className='font-soldier lg:text-[36px] text-[32px] text-Primary font-medium mb-4 uppercase'><BlurText text={items.ProjectName} delay={280} animateBy="words" direction="bottom" /></h2>
                      <h2 className='font-poppins lg:text-[17px] text-[14px] text-Primary font-normal mb-4'><BlurText text={items.Description} delay={50} animateBy="words" direction="bottom" /></h2>
                      <div className='flex items-center gap-4 mb-4'>
                        <p className='font-poppins lg:text-[18px] text-[13px] text-second font-medium flex items-center gap-2'><BiCategory /> Type : {items.type}</p>
                      </div>
                      <div className='flex items-center gap-4'>
                        <p className='font-poppins lg:text-[18px] text-[14px] text-second font-medium flex items-center gap-2'><GrTechnology /> Tools Used :</p>
                        <div className='lg:w-[30px] w-[22px] flex items-center gap-2'>
                          {
                            items.technologies.map((img, i) => (
                              <img src={img} key={i} />
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