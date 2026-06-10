import React, { useEffect, useMemo, useState } from 'react'
import { FiGrid, FiLayers } from 'react-icons/fi'
import { api, categoryServices } from '../../api'
import ProjectCard from './ProjectCard'

const normalizeProject = (project) => ({
    ProjectImage: project.thumbnail,
    ProjectName: project.title,
    Description: project.description,
    technologies: project.technologies || [],
    type: project.type || project.badge || 'Project',
    liveLink: project.liveLink,
    GithubRepo: project.githubRepo,
})


const AllProjects = () => {
    const [categories, setCategories] = useState([])
    const [projects, setProjects] = useState([])
    const [selected, setSelected] = useState('6a2823ca63bc33c979653720')
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState('')

    useEffect(() => {
        let active = true

        const fetchProjects = async () => {
            try {
                setLoading(true)
                setError('')

                const [categoryRes, projectRes] = await Promise.all([
                    categoryServices.getCategories(),
                    api.get(`/projects`, {
                        params: {
                            limit: 1000,
                            category: selected,
                        },
                    }),
                ])
                const categoryData = categoryRes?.data || categoryRes || []
                const projectData = projectRes?.data?.data?.projects || []

                if (!active) return

                setCategories(categoryData)
                setProjects(projectData)
            } catch (err) {
                if (!active) return
                setError(err.message || 'Failed to load projects')
            } finally {
                if (active) setLoading(false)
            }
        }

        fetchProjects()

        return () => {
            active = false
        }
    }, [selected])

    const totalProjects = projects.length

    const categoryButtons = useMemo(() => {
        return categories.map((category) => ({
            id: String(category._id),
            label: category.name,
            count: category.totalProjects || 0,
            icon: <FiLayers aria-hidden="true" />,
        })).reverse()
    }, [categories, totalProjects])

    const visibleProjects = projects.map(normalizeProject)

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
                            <h2 className='mt-5 text-second font-soldier lg:text-[66px] md:text-[42px] text-3xl font-semibold uppercase' data-aos="fade-up">
                                Project & works
                            </h2>
                            <p className="mt-4 md:mt-5 max-w-2xl font-poppins text-sm md:leading-7 leadin-6 text-Primary/70 md:text-base">
                                Browse live projects grouped by category directly from the server.
                            </p>
                        </div>
                        <div className="grid grid-cols-2 gap-3 sm:flex">
                            <div className="rounded-2xl border border-Primary/10 bg-white/45 px-5 py-4">
                                <strong className="block font-soldier text-4xl leading-none text-Primary">{totalProjects || '--'}</strong>
                                <span className="mt-1 block font-poppins text-xs font-semibold uppercase text-Primary/60">Projects</span>
                            </div>
                            <div className="rounded-2xl border border-Primary/10 bg-white/45 px-5 py-4">
                                <strong className="block font-soldier text-4xl leading-none text-Primary">{categories.length || '--'}</strong>
                                <span className="mt-1 block font-poppins text-xs font-semibold uppercase text-Primary/60">Categories</span>
                            </div>
                        </div>
                    </div>

                    <div data-aos="fade-up" className='mt-8'>
                        <div className="flex items-center gap-2 overflow-x-auto rounded-2xl border border-Primary/10 bg-Primary p-2"
                            style={{
                                overflow: "auto",
                                scrollbarWidth: "thin",
                                scrollbarColor: "rgba(156,163,175,.5) transparent",
                                msOverflowStyle: "none",
                            }}>
                            {categoryButtons.map((btn) => (
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

                {loading ? (
                    <div className="mt-[80px] rounded-[28px] border border-Primary/10 bg-white/50 p-8 font-poppins text-sm text-Primary/70">
                        Loading projects...
                    </div>
                ) : error ? (
                    <div className="mt-[80px] rounded-[28px] border border-red-200 bg-red-50 p-8 font-poppins text-sm text-red-700">
                        {error}
                    </div>
                ) : (
                    <div id='Projects-Cards-Row' className="mt-[80px]">
                        <div className='mb-20 flex items-center gap-4'>
                            <span className="flex size-11 items-center justify-center rounded-full bg-Primary text-brand">
                                <FiGrid aria-hidden="true" />
                            </span>
                            <div className='h-px flex-1 bg-Primary/20'></div>
                        </div>
                        {visibleProjects.length > 0 ? (
                            <div className='flex flex-col gap-10'>
                                {visibleProjects.map((project, index) => (
                                    <ProjectCard key={`${project.ProjectName}-${index}`} project={project} index={index} />
                                ))}
                            </div>
                        ) : (
                            <div className="rounded-[28px] border border-Primary/10 bg-white/50 p-8 font-poppins text-sm text-Primary/70">
                                No projects found in this category.
                            </div>
                        )}
                    </div>
                )}
            </div>
        </section>
    )
}

export default AllProjects
