import React, { useEffect, useMemo, useState } from 'react'
import { FaGithub } from 'react-icons/fa'
import { FiArrowUpRight, FiGitCommit, FiGitPullRequest, FiRefreshCw, FiStar } from 'react-icons/fi'

const GITHUB_USERNAME = 'Munna-Scriptz'
const GITHUB_PROFILE = `https://github.com/${GITHUB_USERNAME}`

const eventLabels = {
  PushEvent: 'Pushed commits',
  CreateEvent: 'Created repository',
  PullRequestEvent: 'Pull request activity',
  IssuesEvent: 'Issue activity',
  WatchEvent: 'Starred repository',
}

const formatDate = (dateString) => {
  return new Intl.DateTimeFormat('en', {
    month: 'short',
    day: 'numeric',
    hour: 'numeric',
    minute: '2-digit',
  }).format(new Date(dateString))
}

const getEventIcon = (type) => {
  if (type === 'PushEvent') return <FiGitCommit aria-hidden="true" />
  if (type === 'PullRequestEvent') return <FiGitPullRequest aria-hidden="true" />
  if (type === 'WatchEvent') return <FiStar aria-hidden="true" />
  return <FiRefreshCw aria-hidden="true" />
}

const ScrollingGithubBall = () => {
  const [profile, setProfile] = useState(null)
  const [events, setEvents] = useState([])
  const [status, setStatus] = useState('loading')

  useEffect(() => {
    const controller = new AbortController()

    const loadGithubActivity = async () => {
      try {
        const [profileResponse, eventsResponse] = await Promise.all([
          fetch(`https://api.github.com/users/${GITHUB_USERNAME}`, {
            signal: controller.signal,
          }),
          fetch(`https://api.github.com/users/${GITHUB_USERNAME}/events/public?per_page=8`, {
            signal: controller.signal,
          }),
        ])

        if (!profileResponse.ok || !eventsResponse.ok) {
          throw new Error('GitHub request failed')
        }

        const [profileData, eventsData] = await Promise.all([
          profileResponse.json(),
          eventsResponse.json(),
        ])

        setProfile(profileData)
        setEvents(Array.isArray(eventsData) ? eventsData : [])
        setStatus('ready')
      } catch (error) {
        if (error.name === 'AbortError') return
        setStatus('error')
      }
    }

    loadGithubActivity()

    return () => controller.abort()
  }, [])

  const activityStats = useMemo(() => {
    const commits = events.reduce((total, event) => {
      if (event.type !== 'PushEvent') return total
      return total + (event.payload?.commits?.length || 0)
    }, 0)

    const activeRepos = new Set(events.map((event) => event.repo?.name).filter(Boolean)).size

    return [
      { label: 'Public repos', value: profile?.public_repos ?? '--' },
      { label: 'Recent commits', value: commits || '--' },
      { label: 'Active repos', value: activeRepos || '--' },
    ]
  }, [events, profile])

  return (
    <div className="github-activity" data-aos="fade-up">
      <div className="github-activity__header">
        <div className="github-activity__identity">
          <span className="github-activity__avatar" aria-hidden="true">
            {profile?.avatar_url ? <img src={profile.avatar_url} alt="" /> : <FaGithub />}
          </span>
          <div>
            <p className="github-activity__eyebrow">GitHub activity</p>
            <h3>{profile?.name || GITHUB_USERNAME}</h3>
          </div>
        </div>

        <a
          href={GITHUB_PROFILE}
          target="_blank"
          rel="noreferrer"
          className="github-activity__link"
          aria-label="Open GitHub profile"
        >
          <FiArrowUpRight aria-hidden="true" />
        </a>
      </div>

      <div className="github-activity__stats">
        {activityStats.map((stat) => (
          <div key={stat.label}>
            <strong>{stat.value}</strong>
            <span>{stat.label}</span>
          </div>
        ))}
      </div>

      <div className="github-activity__feed">
        {status === 'loading' && (
          <p className="github-activity__message">Loading live GitHub activity...</p>
        )}

        {status === 'error' && (
          <p className="github-activity__message">
            GitHub activity is unavailable right now. Visit the profile for the latest updates.
          </p>
        )}

        {status === 'ready' && events.length === 0 && (
          <p className="github-activity__message">No recent public activity found.</p>
        )}

        {status === 'ready' &&
          events.slice(0, 4).map((event) => (
            <a
              href={`https://github.com/${event.repo?.name || GITHUB_USERNAME}`}
              target="_blank"
              rel="noreferrer"
              className="github-activity__event"
              key={event.id}
            >
              <span className="github-activity__event-icon">{getEventIcon(event.type)}</span>
              <span>
                <strong>{eventLabels[event.type] || event.type.replace('Event', '')}</strong>
                <small>{event.repo?.name || GITHUB_USERNAME} - {formatDate(event.created_at)}</small>
              </span>
            </a>
          ))}
      </div>
    </div>
  )
}

export default ScrollingGithubBall
