"use client";
import React, { useState } from "react";
import { Button, Select, Pagination } from "antd";
import BaseScreen from "../../layout/BaseScreen";
import { useTransition, animated, useSpring } from '@react-spring/web';

const jobs = [
  {
    title: ".Net Developer",
    company: "Bauch, Schuppe and Schulist Co",
    location: "New-York, USA",
    salary: "$40000-$42000",
    type: "Full time",
    time: "10 min ago",
    category: "Hotels & Tourism",
    logo: "/globe.svg",
  },
  {
    title: "Regional Creative Facilitator",
    company: "Wisozk - Becker Co",
    location: "Los- Angeles, USA",
    salary: "$28000-$32000",
    type: "Part time",
    time: "12 min ago",
    category: "Media",
    logo: "/globe.svg",
  },
  {
    title: "Internal Integration Planner",
    company: "Mraz, Quigley and Feest Inc.",
    location: "Texas, USA",
    salary: "$48000-$50000",
    type: "Full time",
    time: "15 min ago",
    category: "Construction",
    logo: "/globe.svg",
  },
  {
    title: "District Intranet Director",
    company: "VonRueden - Weber Co",
    location: "Florida, USA",
    salary: "$42000-$48000",
    type: "Full time",
    time: "24 min ago",
    category: "Commerce",
    logo: "/globe.svg",
  },
  {
    title: "Corporate Tactics Facilitator",
    company: "Cormier, Turner and Flatley Inc",
    location: "Boston, USA",
    salary: "$38000-$40000",
    type: "Full time",
    time: "26 min ago",
    category: "Commerce",
    logo: "/globe.svg",
  },
  {
    title: "Forward Accounts Consultant",
    company: "Miller Group",
    location: "Boston, USA",
    salary: "$45000-$48000",
    type: "Full time",
    time: "30 min ago",
    category: "Financial services",
    logo: "/globe.svg",
  },
];

const infoIconClass = "text-[#5da38f] text-lg mr-1";
const infoTextClass = "text-[15px] font-medium text-[#5a6e6c] dark:text-gray-200 flex items-center gap-1";

export default function MyJobPage() {
  const [chatOpen, setChatOpen] = useState(false);
  const chatTransition = useTransition(chatOpen, {
    from: { opacity: 0, transform: 'translateY(40px) scale(0.95)' },
    enter: { opacity: 1, transform: 'translateY(0px) scale(1)' },
    leave: { opacity: 0, transform: 'translateY(40px) scale(0.95)' },
    config: { tension: 300, friction: 28 },
  });

  // Animation for job cards
  const jobCardsTransition = useTransition(jobs, {
    from: { opacity: 0, transform: 'translateY(40px) scale(0.97)' },
    enter: { opacity: 1, transform: 'translateY(0px) scale(1)' },
    trail: 80,
    config: { tension: 260, friction: 24 },
  });

  // Button spring for hover effect
  const buttonSpring = useSpring({
    from: { scale: 1 },
    to: { scale: 1 },
    config: { tension: 300, friction: 18 },
  });

  return (
    <BaseScreen>
      {/* Header section */}
      <section className="w-full bg-black dark:bg-[#181a20] flex items-center justify-center py-16 md:py-20 mb-8">
        <p className="text-white text-4xl md:text-5xl font-bold text-center drop-shadow-lg tracking-tight">Công việc phù hợp cho bạn</p>
      </section>
      <div className="bg-white dark:bg-[#181a20] min-h-screen py-8">
        <div className="max-w-5xl mx-auto px-2 md:px-4">
          {/* Top controls */}
          <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6 gap-3">
            <span className="text-sm text-gray-500 mb-2 md:mb-0">Showing 6-6 of 10 results</span>
            <div className="flex gap-2 flex-wrap">
              <animated.div style={buttonSpring}>
                <Button className="bg-[#6fc7b5] text-white font-semibold border-none px-6 rounded-lg hover:bg-[#5da38f] transition-transform duration-150 active:scale-95">Làm Lại Bài Test</Button>
              </animated.div>
              <Select defaultValue="latest" style={{ minWidth: 160 }} className="rounded-lg">
                <Select.Option value="latest">Sort by latest</Select.Option>
              </Select>
            </div>
          </div>
          {/* Job List with animation */}
          <div className="flex flex-col gap-8">
            {jobCardsTransition((style, job) => (
              <animated.div
                key={job.title}
                style={style}
                className="relative bg-white dark:bg-[#23272f] shadow-sm px-7 py-6 flex flex-col gap-4 rounded-2xl transition-colors group hover:shadow-lg hover:-translate-y-1 duration-200 border border-transparent hover:border-[#5da38f]"
              >
                {/* Badge thời gian */}
                <span className="absolute top-5 left-6 bg-[#d6f5ea] text-[#4ca187] text-[15px] font-semibold px-4 py-1 rounded-full shadow-sm" style={{letterSpacing: 0.2}}>
                  {job.time}
                </span>
                {/* Bookmark icon */}
                <span className="absolute top-5 right-6">
                  <svg width="28" height="28" fill="none" stroke="#7b8a8a" strokeWidth="2" viewBox="0 0 24 24">
                    <path d="M6 4a2 2 0 0 0-2 2v14l8-5.333L20 20V6a2 2 0 0 0-2-2H6z"/>
                    <path d="M17 8h-6m6 4h-6" stroke="#5da38f" strokeWidth="2"/>
                  </svg>
                </span>
                {/* Logo + Title + Company */}
                <div className="flex items-center gap-4 mt-4">
                  <img src={job.logo} alt="logo" className="w-14 h-14 rounded-full object-cover border-2 border-[#e0f4ef] group-hover:border-[#5da38f] transition" />
                  <div>
                    <div className="text-xl font-bold text-[#222] dark:text-white mb-0.5 tracking-tight group-hover:text-[#4285f4] transition">{job.title}</div>
                    <div className="text-[16px] text-[#5a6e6c] dark:text-gray-300">{job.company}</div>
                  </div>
                </div>
                {/* Info row */}
                <div className="flex flex-wrap gap-x-8 gap-y-2 items-center mt-1">
                  <span className={infoTextClass}><span className={infoIconClass}>🏢</span>{job.category}</span>
                  <span className={infoTextClass}><span className={infoIconClass}>⏰</span>{job.type}</span>
                  <span className={infoTextClass}><span className={infoIconClass}>💰</span>{job.salary}</span>
                  <span className={infoTextClass}><span className={infoIconClass}>📍</span>{job.location}</span>
                </div>
                {/* Job Details button */}
                <div className="flex justify-end mt-1">
                  <Button type="primary" className="bg-[#4285f4] border-none rounded-xl px-7 py-2 text-base font-semibold hover:bg-[#2563eb] transition-all shadow-sm active:scale-95">Job Details</Button>
                </div>
              </animated.div>
            ))}
          </div>
          {/* Pagination */}
          <div className="flex justify-center items-center gap-2 mt-8">
            <Pagination current={1} total={12} pageSize={6} showSizeChanger={false} />
          </div>
        </div>
      </div>
      {/* Chat Button & Window */}
      <div>
        {/* Chat Floating Button */}
        {!chatOpen && (
          <button
            onClick={() => setChatOpen(true)}
            className="fixed bottom-8 right-8 z-50 w-14 h-14 rounded-full bg-[#4285f4] hover:bg-[#2563eb] flex items-center justify-center shadow-lg transition-colors border-4 border-white dark:border-[#181a20] active:scale-95"
            aria-label="Open chat"
          >
            <svg width="32" height="32" fill="none" viewBox="0 0 24 24">
              <circle cx="12" cy="12" r="12" fill="#4285f4" />
              <path d="M7 10h10M7 14h6" stroke="#fff" strokeWidth="2" strokeLinecap="round" />
            </svg>
          </button>
        )}
        {/* Chat Window with animation */}
        {chatTransition((style, item) =>
          item ? (
            <animated.div style={style} className="fixed bottom-8 right-8 z-50 w-[350px] max-w-[95vw] bg-white dark:bg-[#23272f] rounded-2xl shadow-2xl border border-gray-200 dark:border-[#333] flex flex-col overflow-hidden animate-fade-in">
              {/* Header */}
              <div className="flex items-center justify-between bg-[#4285f4] px-4 py-3">
                <span className="text-white font-semibold">AI Assistant</span>
                <span className="text-xs text-white/80">● A few minutes</span>
                <button onClick={() => setChatOpen(false)} className="ml-2 text-white hover:text-gray-200 text-lg font-bold">×</button>
              </div>
              {/* Chat Content */}
              <div className="flex-1 p-4 flex flex-col gap-2 bg-[#f6f8fa] dark:bg-[#23272f]">
                <div className="flex items-start gap-2">
                  <span className="mt-1 text-yellow-400">⚡</span>
                  <div className="bg-white dark:bg-[#23272f] rounded-lg px-3 py-2 shadow text-sm max-w-[80%]">
                    Tôi có thể giúp gì cho bạn
                  </div>
                </div>
                <div className="flex items-start gap-2">
                  <span className="mt-1 text-blue-500">●</span>
                  <div className="bg-[#e6f0fd] dark:bg-[#2a3342] rounded-lg px-3 py-2 shadow text-sm max-w-[80%] text-blue-700 dark:text-blue-200">
                    Tôi muốn làm Backend, đề xuất đi
                  </div>
                  <span className="text-xs text-gray-400 self-end">2m ago. Seen</span>
                </div>
                <div className="flex items-start gap-2">
                  <span className="mt-1 text-yellow-400">⚡</span>
                  <div className="bg-white dark:bg-[#23272f] rounded-lg px-3 py-2 shadow text-sm max-w-[80%]">
                    <div>Dưới đây là những công việc backend phù hợp:</div>
                    <div className="mt-1">1. Junior .Net Developer<br/>2. Java Developer</div>
                    <div className="mt-2">Bạn có muốn tiếp tục được đề xuất những công việc về mảng đó hay không?</div>
                    <div className="flex gap-2 mt-2">
                      <button className="bg-[#4ca187] hover:bg-[#388e6c] text-white text-xs font-semibold px-3 py-1 rounded transition-transform active:scale-95">Áp Dụng</button>
                      <button className="bg-gray-200 dark:bg-[#444] hover:bg-gray-300 dark:hover:bg-[#555] text-gray-700 dark:text-gray-200 text-xs font-semibold px-3 py-1 rounded transition-transform active:scale-95">Từ Chối</button>
                    </div>
                  </div>
                </div>
              </div>
              {/* Input */}
              <div className="border-t border-gray-200 dark:border-[#333] bg-white dark:bg-[#23272f] px-3 py-2 flex items-center gap-2">
                <input
                  type="text"
                  placeholder="Type a reply..."
                  className="flex-1 bg-transparent outline-none text-sm px-2 py-1"
                />
                <button className="text-[#4285f4] font-bold text-lg" disabled>➤</button>
              </div>
            </animated.div>
          ) : null
        )}
      </div>
    </BaseScreen>
  );
}
