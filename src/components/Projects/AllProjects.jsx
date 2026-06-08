import React, { useState } from 'react'
import { FaRegStar } from 'react-icons/fa'
import { FiGrid, FiLayers } from 'react-icons/fi'
import nextIcon from '../../assets/images/NextJsIcon.svg'
import ReactIcon from '../../assets/images/react.svg'
import JsIcon from '../../assets/images/JsIcon.jpg'
import HtmlIcon from '../../assets/images/HtmlIcon.svg'
import JsProjects from './JsProjects'
import ReactProjects from './ReactProjects'
import HtmlCssProjects from './HtmlCssProjects'
import NextProject from './NextProject'

const AllProjects = () => {
    const [reactLe, setReactLe] = useState(0)
    const [nextLe, setNextLe] = useState(0)
    const [jsLe, setJsLe] = useState(0)
    const [htmlLe, setHtmlLe] = useState(0)
    const [selected, setSelected] = useState('top')

    const totalProjects = nextLe + reactLe + jsLe + htmlLe

    const selectProjectBtn = [
        { id: 'top', label: 'Top Projects', count: nextLe + reactLe, icon: <FaRegStar /> },
        { id: 'next', label: 'Next.js', count: nextLe, icon: <img className="size-5 rounded-full" src={nextIcon} alt="Next.js" /> },
        { id: 'react', label: 'React', count: reactLe, icon: <img className="size-5" src={ReactIcon} alt="React" /> },
        { id: 'js', label: 'JavaScript', count: jsLe, icon: <img className="size-5 rounded-full" src={JsIcon} alt="JavaScript" /> },
        { id: 'html', label: 'HTML/CSS', count: htmlLe, icon: <img className="size-5" src={HtmlIcon} alt="HTML" /> },
    ]

    return (
        <section className='my-[112px] overflow-hidden'>
            <div className="container">
                <div id="Projects-Header-Row" className="rounded-[28px] border border-Primary/10 bg-[#f2f0e9]/70 p-5 shadow-[0_24px_70px_rgba(22,22,22,0.08)] md:p-8">
                    <div className="flex flex-col justify-between gap-8 lg:flex-row lg:items-end">
                        <div className="max-w-3xl">
                            <span className="inline-flex items-center gap-2 rounded-full border border-coffee/25 bg-coffee/10 px-4 py-2 font-poppins text-xs font-bold uppercase text-coffee">
                                <FiLayers aria-hidden="true" />
                                Portfolio archive
                            </span>
                            <h2 className='mt-5 text-second font-soldier lg:text-[66px] text-[42px] leading-[0.9] font-semibold uppercase' data-aos="fade-up">
                                Project work across modern web stacks
                            </h2>
                            <p className="mt-5 max-w-2xl font-poppins text-sm leading-7 text-Primary/70 md:text-base">
                                Browse production-style builds, landing pages, apps, and JavaScript experiments with clear previews, tools, and direct project links.
                            </p>
                        </div>
                        <div className="grid grid-cols-2 gap-3 sm:flex">
                            <div className="rounded-2xl border border-Primary/10 bg-white/45 px-5 py-4">
                                <strong className="block font-soldier text-4xl leading-none text-Primary">{totalProjects || '--'}</strong>
                                <span className="mt-1 block font-poppins text-xs font-semibold uppercase text-Primary/60">Projects</span>
                            </div>
                            <div className="rounded-2xl border border-Primary/10 bg-white/45 px-5 py-4">
                                <strong className="block font-soldier text-4xl leading-none text-Primary">4</strong>
                                <span className="mt-1 block font-poppins text-xs font-semibold uppercase text-Primary/60">Stacks</span>
                            </div>
                        </div>
                    </div>

                    <div data-aos="fade-up" className='mt-8'>
                        <div className="flex items-center gap-2 overflow-x-auto rounded-2xl border border-Primary/10 bg-Primary p-2">
                            {selectProjectBtn.map((btn) => (
                                <button
                                    key={btn.id}
                                    onClick={() => setSelected(btn.id)}
                                    className={`shrink-0 py-3 px-4 duration-300 flex items-center gap-2 rounded-xl font-manrope text-xs font-bold cursor-pointer ${selected === btn.id
                                        ? 'bg-coffee text-white shadow-lg shadow-coffee/25'
                                        : 'bg-brand/10 text-brand/75 hover:bg-brand/20 hover:text-brand'
                                        }`}
                                >
                                    {btn.icon}
                                    <span>{btn.label}</span>
                                    <span className={`rounded-full px-2 py-0.5 text-[11px] ${selected === btn.id ? 'bg-white/20' : 'bg-black/15'}`}>
                                        {btn.count || 0}
                                    </span>
                                </button>
                            ))}
                        </div>
                    </div>
                </div>

                <div id='Projects-Cards-Row' className={`mt-[80px] ${selected === 'top' ? 'block' : 'hidden'}`}>
                    <NextProject proLength={(len) => setNextLe(len)} />
                    <div className='my-20 flex items-center gap-4'>
                        <span className="flex size-11 items-center justify-center rounded-full bg-Primary text-brand">
                            <FiGrid aria-hidden="true" />
                        </span>
                        <div className='h-px flex-1 bg-Primary/20'></div>
                    </div>
                    <ReactProjects proLength={(len) => setReactLe(len)} />
                </div>

                <div className={`${selected === 'next' ? 'block' : 'hidden'}`}>
                    <NextProject />
                </div>

                <div className={`${selected === 'react' ? 'block' : 'hidden'}`}>
                    <ReactProjects />
                </div>

                <div className={`${selected === 'js' ? 'block' : 'hidden'}`}>
                    <JsProjects proLength={(len) => setJsLe(len)} />
                </div>

                <div className={`${selected === 'html' ? 'block' : 'hidden'}`}>
                    <HtmlCssProjects proLength={(len) => setHtmlLe(len)} />
                </div>
            </div>
        </section>
    )
}

export default AllProjects
