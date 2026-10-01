import React, { useEffect, useState } from 'react';
import {
  FiCheck,
  FiCopy,
  FiEdit2,
  FiMoreVertical,
  FiRefreshCw,
  FiUser,
  FiMail,
  FiTag,
  FiClock,
  FiTrash2
} from 'react-icons/fi';
import { toast } from 'react-toastify';
import { contactServices } from '../api';

const AdminMessages = () => {
  const [messages, setMessages] = useState([]);
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);
  const [loading, setLoading] = useState(true);
  const [deletingId, setDeletingId] = useState(null);
  const [openMenuId, setOpenMenuId] = useState(null);
  const [copiedEmail, setCopiedEmail] = useState(null);

  const loadMessages = async (nextPage = 1, append = false) => {
    setLoading(true);

    try {
      const res = await contactServices.getContacts({
        page: nextPage,
        limit: 6,
      });

      const incoming = res?.data?.contacts || [];

      setMessages((prev) =>
        append ? [...prev, ...incoming] : incoming
      );

      setHasMore(res?.data?.hasMore || false);
      setPage(nextPage);
    } catch (error) {
      toast.error(error.message || 'Failed to load messages');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadMessages(1, false);
  }, []);

  const handleDelete = async (id) => {
    setDeletingId(id);
    setOpenMenuId(null);

    try {
      await contactServices.deleteContact(id);

      toast.success('Message deleted successfully');

      setMessages((prev) =>
        prev.filter((message) => message._id !== id)
      );
    } catch (error) {
      toast.error(error.message || 'Failed to delete message');
    } finally {
      setDeletingId(null);
    }
  };

  const handleCopyEmail = async (email) => {
    try {
      await navigator.clipboard.writeText(email);

      setCopiedEmail(email);
      toast.success('Email copied');

      setTimeout(() => {
        setCopiedEmail(null);
      }, 1500);
    } catch (error) {
      toast.error('Failed to copy email');
    }
  };

  const formatDate = (date) => {
    if (!date) return 'Unknown date';

    return new Intl.DateTimeFormat('en-US', {
      dateStyle: 'medium',
      timeStyle: 'short',
    }).format(new Date(date));
  };

  const DigitalFormatDate = (date) => {
    if (!date) return 'Unknown date';

    const now = new Date();
    const past = new Date(date);
    const diffInSeconds = Math.floor((now - past) / 1000);

    // If date is in the future or invalid
    if (isNaN(past.getTime()) || diffInSeconds < 0) return 'Just now';

    const minutes = Math.floor(diffInSeconds / 60);
    const hours = Math.floor(diffInSeconds / 3600);
    const days = Math.floor(diffInSeconds / 86400);
    const weeks = Math.floor(days / 7);
    const months = Math.floor(days / 30);
    const years = Math.floor(days / 365);

    if (diffInSeconds < 60) return 'Just now';
    if (minutes < 60) return `${minutes}m ago`;
    if (hours < 24) return `${hours}h ago`;
    if (days < 7) return `${days}d ago`;
    if (weeks < 4) return `${weeks}w ago`;
    if (months < 12) return `${months}mo ago`;

    return `${years}y ago`;
  };

  return (
    <div className="p-4 md:p-8">
      <div className="mb-7 flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <h1 className="mt-1 text-3xl font-bold text-slate-900">
            Admin Messages
          </h1>
        </div>

        <button
          type="button"
          onClick={() => loadMessages(1, false)}
          disabled={loading}
          className="hidden sm:inline-flex items-center justify-center gap-2 rounded-xl border border-slate-200 px-4 py-3 text-sm font-semibold text-slate-700 transition hover:bg-slate-50 disabled:opacity-60"
        >
          <FiRefreshCw className={loading ? 'animate-spin' : ''} />
          Refresh
        </button>
      </div>

      {loading && !messages.length ? (
        <div className="grid min-h-48 place-items-center rounded-2xl border border-slate-200 bg-white shadow-sm">
          <div className="h-8 w-8 animate-spin rounded-full border-4 border-slate-200 border-t-red-500" />
        </div>
      ) : messages.length ? (
        <div className="space-y-4">
          {messages.map((message) => (
            <div
              key={message._id}
              className="group rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition-all duration-200 hover:border-slate-300 hover:shadow-md"
            >
              {/* Card Header */}
              <div className="flex items-start justify-between gap-4">
                <div className="min-w-0 flex-1">
                  {/* Name + Subject */}
                  <div className="flex flex-wrap items-center gap-2.5">
                    <div className="flex items-center gap-1.5 text-slate-900">
                      <FiUser className="h-4 w-4 text-indigo-600 shrink-0" />
                      <h3 className="text-base font-bold text-slate-900">
                        {message.name}
                      </h3>
                    </div>

                    <span className="inline-flex items-center gap-1.5 rounded-md bg-indigo-50 px-2.5 py-1 text-xs font-semibold text-indigo-700 ring-1 ring-inset ring-indigo-700/10">
                      <FiTag className="h-3 w-3 text-indigo-500 shrink-0" />
                      {message.subject}
                    </span>
                  </div>

                  {/* Email + Copy */}
                  <div className="mt-2.5 flex flex-wrap items-center gap-2">
                    <div className="flex items-center gap-1.5 text-slate-600">
                      <FiMail className="h-3.5 w-3.5 text-slate-400 shrink-0" />
                      <span className="text-sm font-medium text-slate-600">
                        {message.email}
                      </span>
                    </div>

                    <button
                      type="button"
                      onClick={() => handleCopyEmail(message.email)}
                      className="inline-flex items-center gap-1 rounded-md bg-slate-100 px-2 py-0.5 text-xs font-semibold text-slate-600 transition hover:bg-slate-200 hover:text-slate-900 active:scale-95"
                      title="Copy email"
                    >
                      {copiedEmail === message.email ? (
                        <>
                          <FiCheck className="text-emerald-600" />
                          <span className="text-emerald-700">Copied</span>
                        </>
                      ) : (
                        <>
                          <FiCopy className="text-slate-400" />
                          <span>Copy</span>
                        </>
                      )}
                    </button>
                  </div>
                </div>

                {/* Date + Menu */}
                <div className="flex items-center gap-3">
                  <div className="hidden items-center gap-1.5 text-xs font-medium text-slate-400 sm:flex">
                    <FiClock className="h-3.5 w-3.5 shrink-0" />
                    <span>{DigitalFormatDate(message.createdAt)}</span>
                    /
                    <span>{formatDate(message.createdAt)}</span>
                  </div>

                  <div className="relative">
                    <button
                      type="button"
                      onClick={() =>
                        setOpenMenuId(openMenuId === message._id ? null : message._id)
                      }
                      className="grid h-8 w-8 place-items-center rounded-lg border border-slate-200 text-slate-500 transition hover:border-slate-300 hover:bg-slate-100 hover:text-slate-900"
                      aria-label="Message options"
                    >
                      <FiMoreVertical />
                    </button>

                    {/* Dropdown Menu */}
                    {openMenuId === message._id && (
                      <div className="absolute right-0 z-30 mt-2 w-40 overflow-hidden rounded-xl border border-slate-200 bg-white p-1 shadow-lg">
                        <button
                          type="button"
                          onClick={() => {
                            setOpenMenuId(null);
                            toast.info('Edit is not available yet');
                          }}
                          className="flex w-full items-center gap-2.5 rounded-lg px-3 py-2 text-xs font-medium text-slate-700 transition hover:bg-slate-100"
                        >
                          <FiEdit2 className="text-slate-400" />
                          Edit
                        </button>

                        <div className="my-1 border-t border-slate-100" />

                        <button
                          type="button"
                          onClick={() => handleDelete(message._id)}
                          disabled={deletingId === message._id}
                          className="flex w-full items-center gap-2.5 rounded-lg px-3 py-2 text-xs font-medium text-rose-600 transition hover:bg-rose-50 disabled:opacity-60"
                        >
                          <FiTrash2 />
                          {deletingId === message._id ? 'Deleting...' : 'Delete'}
                        </button>
                      </div>
                    )}
                  </div>
                </div>
              </div>

              {/* Date for Mobile */}
              <div className="mt-2.5 flex items-center gap-1.5 text-xs font-medium text-slate-400 sm:hidden">
                <FiClock className="h-3.5 w-3.5 shrink-0" />
                <span>{DigitalFormatDate(message.createdAt)}</span>
                /
                <span>Sent {formatDate(message.createdAt)}</span>
              </div>

              {/* Message Content Box */}
              <div className="mt-4 rounded-xl border-l-4 border-indigo-500 bg-slate-50 p-4">
                <p className="whitespace-pre-line text-sm leading-relaxed text-slate-800">
                  {message.message}
                </p>
              </div>
            </div>
          ))}

          {/* Load More Button */}
          {hasMore && (
            <div className="flex justify-center pt-2">
              <button
                type="button"
                onClick={() => loadMessages(page + 1, true)}
                disabled={loading}
                className="rounded-xl bg-slate-900 px-6 py-2.5 text-xs font-bold uppercase tracking-wider text-white shadow-sm transition hover:bg-slate-800 disabled:cursor-not-allowed disabled:opacity-60"
              >
                {loading ? 'Loading...' : 'Load more messages'}
              </button>
            </div>
          )}
        </div>
      ) : (
        <div className="rounded-2xl border border-dashed border-slate-300 bg-white p-8 text-center text-sm text-slate-500 shadow-sm">
          No messages found.
        </div>
      )}
    </div>
  );
};

export default AdminMessages;