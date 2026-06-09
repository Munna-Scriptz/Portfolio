import React from 'react'
import { BiCategory } from 'react-icons/bi'
import { FiArrowUpRight, FiCode, FiExternalLink } from 'react-icons/fi'
import { GrTechnology } from 'react-icons/gr'
import { Link } from 'react-router'

const ProjectCard = ({
  project,
  index = 0,
  layout = 'feature',
  scrollPreview = false,
  primaryAction,
  secondaryAction,
}) => {
  const isGrid = layout === 'grid'
  const isReverse = project.Direction?.includes('reverse')
  const technologies = project.technologies?.filter(Boolean) || []
  const aosDirection = project.AosDir || 'fade-up'

  const defaultPrimary = project.liveLink
    ? { label: 'Open project', href: project.liveLink }
    : null
  const defaultSecondary = project.GithubRepo
    ? { label: 'GitHub repo', href: project.GithubRepo }
    : null

  const actions = [primaryAction || defaultPrimary, secondaryAction || defaultSecondary].filter(Boolean)

  const renderAction = (action, actionIndex) => {
    const actionClass = actionIndex === 0
      ? 'bg-Primary text-brand hover:bg-coffee'
      : 'border border-Primary/15 bg-white/60 text-Primary hover:border-coffee hover:text-coffee'

    const content = (
      <>
        <span>{action.label}</span>
        {actionIndex === 0 ? <FiArrowUpRight aria-hidden="true" /> : <FiExternalLink aria-hidden="true" />}
      </>
    )

    const className = `inline-flex min-h-11 items-center justify-center gap-2 rounded-full px-5 font-poppins text-[11px] md:text-xs font-bold uppercase transition ${actionClass}`

    if (action.to) {
      return (
        <Link key={action.label} to={action.to} className={className}>
          {content}
        </Link>
      )
    }

    return (
      <a key={action.label} href={action.href} target="_blank" rel="noreferrer" className={className}>
        {content}
      </a>
    )
  }

  return (
    <article
      className={`group overflow-hidden rounded-[26px] border border-Primary/10 bg-[#f4f1e8]/80 shadow-[0_22px_70px_rgba(22,22,22,0.08)] transition duration-300 hover:-translate-y-1 hover:border-coffee/30 hover:shadow-[0_30px_90px_rgba(22,22,22,0.14)] ${isGrid ? 'flex h-full flex-col' : 'grid gap-0 lg:grid-cols-2'}`}
    >
      <div
        className={`relative bg-Primary/5 p-3 ${!isGrid && isReverse ? 'lg:order-2' : ''}`}
        data-aos={aosDirection}
        data-aos-offset="180"
        data-aos-easing="ease-in-sine"
      >
        <div className="absolute left-6 top-6 z-10 inline-flex items-center gap-2 rounded-full border border-white/20 bg-Primary/80 px-3 py-2 font-poppins text-[11px] font-bold uppercase text-brand backdrop-blur">
          <FiCode aria-hidden="true" />
          {String(index + 1).padStart(2, '0')}
        </div>

        {scrollPreview ? (
          <div className="screen min-h-[320px] rounded-[20px] border border-Primary/10 bg-white cursor-none">
            <img src={project.ProjectImage} alt={`${project.ProjectName} preview`} />
          </div>
        ) : (
          <div className={`${isGrid ? 'aspect-[4/3]' : 'aspect-[16/11]'} overflow-hidden rounded-[20px] border border-Primary/10 bg-white`}>
            <img
              className="h-full w-full object-cover transition duration-500 group-hover:scale-[1.04]"
              src={project.ProjectImage}
              alt={`${project.ProjectName} preview`}
              loading="lazy"
            />
          </div>
        )}

        {scrollPreview && (
          <p className="mt-3 text-center font-poppins text-xs font-semibold text-Primary/50">
            Hover or tap the preview to scroll
          </p>
        )}
      </div>

      <div className={`flex flex-col p-5 md:p-8 ${isGrid ? '' : 'lg:p-10'}`}>
        <div className="mb-5 flex flex-wrap items-center gap-3">
          {project.type && (
            <span className="inline-flex items-center gap-2 rounded-full border border-coffee/20 bg-coffee/10 px-3 py-2 font-poppins text-xs font-bold uppercase text-coffee">
              <BiCategory aria-hidden="true" />
              {project.type}
            </span>
          )}
          <span className="inline-flex items-center gap-2 rounded-full border border-Primary/10 bg-white/55 px-3 py-2 font-poppins text-xs font-bold uppercase text-Primary/65">
            <GrTechnology aria-hidden="true" />
            {technologies.length} tools
          </span>
        </div>

        <h3 className={`${isGrid ? 'text-[34px]' : 'text-[30px] md:text-[42px] lg:text-[54px]'} font-soldier font-semibold uppercase leading-[0.9] text-Primary`}>
          {project.ProjectName}
        </h3>

        <p className={`${isGrid ? 'text-sm leading-6' : 'text-sm md:text-base leading-5.5 md:leading-7 lg:text-[17px] lg:leading-8'} mt-5 font-poppins text-Primary/70`}>
          {project.Description}
        </p>

        <div className="mt-6 flex flex-wrap items-center gap-1.5 md:gap-2">
          {technologies.map((img, techIndex) => (
            <span
              key={`${project.ProjectName}-${techIndex}`}
              className="flex size-10 items-center justify-center rounded-full border border-Primary/10 bg-white/70"
            >
              <img className="max-h-5 max-w-5 rounded-full object-contain" src={img} alt="" loading="lazy" />
            </span>
          ))}
        </div>

        <div className="mt-8 flex flex-wrap gap-3">
          {actions.map(renderAction)}
        </div>
      </div>
    </article>
  )
}

export default ProjectCard
