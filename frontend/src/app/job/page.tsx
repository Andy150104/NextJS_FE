"use client";
import React from "react";
import {
  Form,
  Input,
  Select,
  Checkbox,
  Slider,
  Button,
  Pagination,
} from "antd";
import {
  EnvironmentOutlined,
  DollarOutlined,
  ClockCircleOutlined,
  AppstoreOutlined,
} from "@ant-design/icons";
import BaseScreen from "../../layout/BaseScreen";

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
    category: "IT",
    logo: "/public/globe.svg",
  },
  {
    title: "Internal Integration Planner",
    company: "Mraz, Quigley and Feest Inc.",
    location: "Texas, USA",
    salary: "$48000-$50000",
    type: "Full time",
    time: "15 min ago",
    category: "IT",
    logo: "/public/globe.svg",
  },
  {
    title: "District Intranet Director",
    company: "VonRueden - Weber Co",
    location: "Florida, USA",
    salary: "$42000-$48000",
    type: "Full time",
    time: "24 min ago",
    category: "IT",
    logo: "/public/globe.svg",
  },
  {
    title: "Corporate Tactics Facilitator",
    company: "Cormier, Turner and Flatley Inc",
    location: "Boston, USA",
    salary: "$38000-$40000",
    type: "Full time",
    time: "26 min ago",
    category: "Commerce",
    logo: "/public/globe.svg",
  },
  {
    title: "Forward Accounts Consultant",
    company: "Miller Group",
    location: "Boston, USA",
    salary: "$45000-$48000",
    type: "Full time",
    time: "30 min ago",
    category: "Financial services",
    logo: "/public/globe.svg",
  },
];

const sidebarFilters = [
  {
    title: "Lĩnh vực",
    options: [
      "Thương mại",
      "Đa phương tiện",
      "Phần mềm",
      "Giáo dục",
      "Financial Services",
    ],
  },
  {
    title: "Loại hình",
    options: ["Full time", "Part time", "Freelance", "Seasonal", "Fixed-Price"],
  },
  {
    title: "Experience Level",
    options: ["No-experience", "Fresher", "Intermediate", "Expert"],
  },
  {
    title: "Date Posted",
    options: [
      "All",
      "Last Hour",
      "Last 24 Hours",
      "Last 7 Days",
      "Last 30 Days",
    ],
  },
];

const tipFormatter = (v?: number) => v !== undefined ? `${v.toLocaleString()} VND` : '';

const infoIconClass = "text-[#5da38f] text-lg mr-1";
const infoTextClass = "text-[15px] font-medium text-[#5a6e6c] flex items-center gap-1";

export default function JobBoard() {
  return (
    <BaseScreen>
      {/* Hero/Header section */}
      <section className="w-full bg-black dark:bg-[#181a20] flex items-center justify-center py-16 md:py-24 mb-8">
        <p className="text-white text-4xl md:text-5xl font-bold text-center">Công việc</p>
      </section>
      <div className="bg-[#f6f8fa] dark:bg-[#181a20] min-h-screen py-8">
        <div className="max-w-7xl mx-auto flex gap-8 px-4">
          {/* Sidebar */}
          <aside className="w-80 flex-shrink-0">
            <div className="bg-white dark:bg-[#23272f] rounded-2xl shadow border border-gray-100 dark:border-[#333] p-6 mb-6 transition-colors">
              <h2 className="font-semibold text-lg mb-4 text-gray-800 dark:text-gray-100">Tìm kiếm công việc</h2>
              <Form layout="vertical">
                <Form.Item>
                  <Input placeholder="Job title or company" allowClear className="rounded-lg bg-[#f7fafc] dark:bg-[#23272f] border border-gray-200 dark:border-[#444] text-gray-800 dark:text-gray-100 focus:border-[#5da38f] focus:shadow-md transition" />
                </Form.Item>
                <Form.Item label={<span className="text-gray-700 dark:text-gray-200">Địa điểm</span>}>
                  <Select placeholder="Choose city" allowClear className="rounded-lg bg-[#f7fafc] dark:bg-[#23272f] border border-gray-200 dark:border-[#444] text-gray-800 dark:text-gray-100 focus:border-[#5da38f] transition">
                    <Select.Option value="">Choose city</Select.Option>
                  </Select>
                </Form.Item>
                {sidebarFilters.map((filter) => (
                  <Form.Item label={<span className="text-gray-700 dark:text-gray-200">{filter.title}</span>} key={filter.title} className="mb-2">
                    <Checkbox.Group style={{ width: '100%' }}>
                      <div className="flex flex-col gap-1">
                        {filter.options.map((item) => (
                          <Checkbox value={item} key={item} className="text-gray-700 dark:text-gray-200">{item}</Checkbox>
                        ))}
                      </div>
                    </Checkbox.Group>
                  </Form.Item>
                ))}
                <Form.Item label={<span className="text-gray-700 dark:text-gray-200">Lương</span>} className="mb-2">
                  <Slider range min={0} max={100000} defaultValue={[0, 100000]} tipFormatter={tipFormatter} 
                    trackStyle={[{ background: 'linear-gradient(90deg,#5da38f,#4285f4)' }]} 
                    handleStyle={[{ borderColor: '#5da38f', background: '#fff' }]} 
                    railStyle={{ background: '#e0f4ef' }}
                  />
                  <Button type="primary" block className="mt-2 rounded-lg bg-gradient-to-r from-[#5da38f] to-[#4285f4] border-none text-white font-semibold shadow hover:from-[#4285f4] hover:to-[#5da38f] transition-all">Apply</Button>
                </Form.Item>
              </Form>
            </div>
            <div className="rounded-2xl shadow border border-gray-100 dark:border-[#333] p-6 flex flex-col items-center bg-gradient-to-br from-[#e0f4ef] to-[#f7fafc] dark:from-[#23272f] dark:to-[#23272f] transition-colors">
              <span className="font-semibold text-base mb-2 text-[#222] dark:text-white">WE ARE HIRING</span>
              <span className="text-xs text-gray-500 dark:text-gray-300 mb-2">Apply Today!</span>
              <div className="w-16 h-16 bg-gray-200 dark:bg-[#444] rounded-full mb-2" />
            </div>
          </aside>
          {/* Main Content */}
          <main className="flex-1">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
              <span className="text-sm text-gray-500 mb-2 md:mb-0">Showing 6-6 of 10 results</span>
              <div className="flex gap-2">
                <Button className="bg-[#6fc7b5] text-white font-semibold border-none px-6 rounded-lg hover:bg-[#5da38f]">Làm Lại Bài Test</Button>
                <Select defaultValue="latest" style={{ minWidth: 160 }} className="rounded-lg">
                  <Select.Option value="latest">Sort by latest</Select.Option>
                </Select>
              </div>
            </div>
            <div className="flex flex-col gap-6">
              {jobs.map((job, i) => (
                <div
                  key={i}
                  className="relative bg-white shadow-sm px-7 py-6 flex flex-col gap-4"
                  style={{ boxShadow: '0 4px 24px 0 rgba(90, 110, 108, 0.06)' }}
                >
                  {/* Badge thời gian */}
                  <span className="absolute top-5 left-6 bg-[#d6f5ea] text-[#4ca187] text-[15px] font-semibold px-4 py-1 rounded-full" style={{letterSpacing: 0.2}}>
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
                    <img src={job.logo} alt="logo" className="w-14 h-14 rounded-full object-cover" />
                    <div>
                      <div className="text-xl font-bold text-[#222] mb-0.5">{job.title}</div>
                      <div className="text-[16px] text-[#5a6e6c]">{job.company}</div>
                    </div>
                  </div>
                  {/* Info row */}
                  <div className="flex flex-wrap gap-x-8 gap-y-2 items-center mt-1">
                    <span className={infoTextClass}><AppstoreOutlined className={infoIconClass} />{job.category}</span>
                    <span className={infoTextClass}><ClockCircleOutlined className={infoIconClass} />{job.type}</span>
                    <span className={infoTextClass}><DollarOutlined className={infoIconClass} />{job.salary}</span>
                    <span className={infoTextClass}><EnvironmentOutlined className={infoIconClass} />{job.location}</span>
                  </div>
                  {/* Job Details button */}
                  <div className="flex justify-end mt-1">
                    <Button type="primary" className="bg-[#4285f4] border-none rounded-xl px-7 py-2 text-base font-semibold hover:bg-[#2563eb] transition-all shadow-sm">Job Details</Button>
                  </div>
                </div>
              ))}
            </div>
            <div className="flex justify-center items-center gap-2 mt-8">
              <Pagination current={1} total={12} pageSize={6} showSizeChanger={false} />
            </div>
          </main>
        </div>
      </div>
    </BaseScreen>
  );
}
