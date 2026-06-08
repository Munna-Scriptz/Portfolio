import React from 'react'
import { SiExpress, SiMongodb, SiNodedotjs, SiVercel } from 'react-icons/si'
import { TbApi, TbBrandFramerMotion } from 'react-icons/tb'
import ScrollFloat from '../effects/ScrollFloat'
import GithubActivity from './GithubActivity'
import ReactImg from '../../assets/images/react.svg'
import JsIcon from '../../assets/images/JsIcon.jpg'
import NextJsIcon from '../../assets/images/NextJsIcon.svg'
import TailwindCssIcon from '../../assets/images/TailwindCssIcon.svg'
import BootstrapIcon from '../../assets/images/BootStrapIcon.svg'
import GsapIcon from '../../assets/images/GsapIcon.png'
import CssIcon from '../../assets/images/CssIcon.svg'
import HtmlIcon from '../../assets/images/HtmlIcon.svg'
import FigmaIcon from '../../assets/images/FigmaIcon.svg'
import VsCodeIcon from '../../assets/images/VsCodeICon.svg'
import GithubIcon from '../../assets/images/GithubIcon.svg'
import ReduxIcon from '../../assets/images/ReduxIcon.svg'
import FirebaseIcon from '../../assets/images/FirebaseIcon.svg'
import AosIcon from '../../assets/images/AosIcon.png'

const skillGroups = [
  {
    title: 'Frontend',
    summary: 'Interfaces, motion, responsive systems, and polished user experiences.',
    skills: [
      { name: 'React', image: ReactImg },
      { name: 'Next.js', image: NextJsIcon },
      { name: 'JavaScript', image: JsIcon },
      { name: 'HTML', image: HtmlIcon },
      { name: 'CSS', image: CssIcon },
      { name: 'Tailwind CSS', image: TailwindCssIcon },
      { name: 'Bootstrap', image: BootstrapIcon },
      { name: 'Redux', image: ReduxIcon },
    ],
  },
  {
    title: 'Backend',
    summary: 'APIs, server logic, authentication flows, and application data handling.',
    skills: [
      { name: 'REST APIs', icon: TbApi },
      { name: 'Node.js', icon: SiNodedotjs },
      { name: 'Express', icon: SiExpress },
      { name: 'Firebase', image: FirebaseIcon },
    ],
  },
  {
    title: 'Database',
    summary: 'Structured data, realtime services, and project-ready persistence.',
    skills: [
      { name: 'Firebase DB', image: FirebaseIcon },
      { name: 'MongoDB', icon: SiMongodb },
    ],
  },
  {
    title: 'Tools',
    summary: 'Design handoff, code workflow, animation tooling, and deployment.',
    skills: [
      { name: 'Figma', image: FigmaIcon },
      { name: 'VS Code', image: VsCodeIcon },
      { name: 'GitHub', image: GithubIcon },
      { name: 'GSAP', image: GsapIcon },
      { name: 'AOS', image: AosIcon },
      { name: 'Framer Motion', icon: TbBrandFramerMotion },
      { name: 'Vercel', icon: SiVercel },
    ],
  },
]

const SkillIcon = ({ skill }) => {
  if (skill.image) {
    return <img src={skill.image} alt="" />
  }

  const Icon = skill.icon
  return <Icon aria-hidden="true" />
}

export const Skills = () => {
  return (
    <section className="skills-section md:pt-20 pt-25">
      <div className="container">
        <div className="skills-section__header">
          <p className="font-poppins text-Primary font-semibold lg:text-2xl text-lg">
            <ScrollFloat
              animationDuration={1}
              ease="back.inOut(2)"
              scrollStart="center bottom+=80%"
              scrollEnd="bottom bottom-=80%"
              stagger={0.03}
            >
              MY SKILLS
            </ScrollFloat>
          </p>
          <h2 className="font-soldier text-Primary font-medium lg:text-5xl text-[30px] uppercase">
            <ScrollFloat
              animationDuration={1}
              ease="back.inOut(2)"
              scrollStart="center bottom+=30%"
              scrollEnd="bottom bottom-=60%"
              stagger={0.03}
            >
              Technologies & expertise
            </ScrollFloat>
          </h2>
        </div>

        <div className="skills-layout">
          <div className="skills-grid">
            {skillGroups.map((group) => (
              <article className="skill-group" data-aos="fade-up" key={group.title}>
                <div className="skill-group__header">
                  <span>{group.title}</span>
                  <p>{group.summary}</p>
                </div>

                <div className="skill-group__items">
                  {group.skills.map((skill) => (
                    <div className="skill-pill" key={`${group.title}-${skill.name}`}>
                      <span className="skill-pill__icon">
                        <SkillIcon skill={skill} />
                      </span>
                      <span>{skill.name}</span>
                    </div>
                  ))}
                </div>
              </article>
            ))}
          </div>

          <GithubActivity />
        </div>
      </div>
    </section>
  )
}
