"use client";
import React from "react";
import BaseScreen from "Nova/layout/BaseScreen";
import {
  HiBriefcase,
  HiUserGroup,
  HiBuildingOffice2,
  HiCurrencyDollar,
  HiClock,
  HiOutlineBookmark,
  HiOutlineShoppingBag,
  HiOutlineBuildingOffice2,
  HiAcademicCap,
} from "react-icons/hi2"; // hoặc hi nếu dùng hi thôi
import { HiLocationMarker } from "react-icons/hi";
import { GiMetalBar, GiPlantRoots } from "react-icons/gi";
import { FaHotel, FaMoneyBillWave, FaTruck } from "react-icons/fa";

const jobs = [
  {
    id: 1,
    posted: "10 min ago",
    logo: "https://via.placeholder.com/40", // thay thành URL logo thật
    title: "Forward Security Director",
    company: "Bauch, Schuppe and Schulist Co",
    category: "Hotels & Tourism",
    type: "Full time",
    salary: "$40000-$42000",
    location: "New-York, USA",
  },
  {
    id: 2,
    posted: "12 min ago",
    logo: "https://via.placeholder.com/40",
    title: "Regional Creative Facilitator",
    company: "Wisozk - Becker Co",
    category: "Media",
    type: "Part time",
    salary: "$28000-$32000",
    location: "Los-Angeles, USA",
  },
  {
    id: 2,
    posted: "12 min ago",
    logo: "https://via.placeholder.com/40",
    title: "Regional Creative Facilitator",
    company: "Wisozk - Becker Co",
    category: "Media",
    type: "Part time",
    salary: "$28000-$32000",
    location: "Los-Angeles, USA",
  },
  {
    id: 2,
    posted: "12 min ago",
    logo: "https://via.placeholder.com/40",
    title: "Regional Creative Facilitator",
    company: "Wisozk - Becker Co",
    category: "Media",
    type: "Part time",
    salary: "$28000-$32000",
    location: "Los-Angeles, USA",
  },
  {
    id: 2,
    posted: "12 min ago",
    logo: "https://via.placeholder.com/40",
    title: "Regional Creative Facilitator",
    company: "Wisozk - Becker Co",
    category: "Media",
    type: "Part time",
    salary: "$28000-$32000",
    location: "Los-Angeles, USA",
  },
];
const categories = [
  { name: "Agriculture", jobs: 1254, icon: <GiPlantRoots /> },
  { name: "Metal Production", jobs: 816, icon: <GiMetalBar /> },
  { name: "Commerce", jobs: 2082, icon: <HiOutlineShoppingBag /> },
  { name: "Construction", jobs: 1520, icon: <HiOutlineBuildingOffice2 /> },
  { name: "Hotels & Tourism", jobs: 1022, icon: <FaHotel /> },
  { name: "Education", jobs: 1496, icon: <HiAcademicCap /> },
  { name: "Financial Services", jobs: 1529, icon: <FaMoneyBillWave /> },
  { name: "Transport", jobs: 1244, icon: <FaTruck /> },
];

export default function MyForm() {
  return (
    <BaseScreen>
      {/* HERO */}
      <div className="relative w-full h-screen">
        <img
          src="https://www.yarooms.com/hs-fs/hubfs/colleagues%20working%20on%20a%20project%20in%20the%20office.png?width=928&height=523&name=colleagues%20working%20on%20a%20project%20in%20the%20office.png"
          alt="Hero background"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black opacity-60" />

        <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-4">
          <p className="text-white font-bold drop-shadow-lg text-5xl md:text-7xl mb-8">
            FPT đồng hành cùng bạn chinh
            <br></br>
            phục công việc mơ ước!
          </p>

          <div className="w-full max-w-2xl">
            <form className="flex">
              <input
                type="text"
                placeholder="Search Job"
                className="flex-grow px-4 py-3 rounded-l-lg focus:outline-none"
              />
              <button
                type="submit"
                className="flex items-center bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-r-lg"
              >
                <HiBriefcase className="mr-2" /> Search Job
              </button>
            </form>
          </div>

          <div className="mt-12 flex space-x-12 text-white">
            <div className="flex items-center space-x-7">
              <HiBriefcase className="text-3xl" />
              <div className="text-left">
                <div className="text-2xl font-semibold">25,850</div>
                <div className="text-sm">Jobs</div>
              </div>
            </div>

            <div className="flex items-center space-x-7">
              <HiUserGroup className="text-3xl" />
              <div className="text-left">
                <div className="text-2xl font-semibold">10,250</div>
                <div className="text-sm">Candidates</div>
              </div>
            </div>

            <div className="flex items-center space-x-7">
              <HiBuildingOffice2 className="text-3xl" />
              <div className="text-left">
                <div className="text-2xl font-semibold">18,400</div>
                <div className="text-sm">Companies</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          {/* Tiêu đề */}
          <div className="flex justify-between items-center mb-8">
            <p className="text-3xl font-bold text-gray-800">Công Việc</p>
            <a
              href="/jobs"
              className="text-green-600 hover:underline text-sm font-medium"
            >
              Xem tất cả
            </a>
          </div>

          {/* Danh sách việc làm */}
          <div className="space-y-5">
            {jobs.map((job) => (
              <div
                key={job.id}
                className="flex justify-between items-center bg-white shadow-sm hover:shadow-md transition rounded-2xl px-6 py-6 border border-gray-100"
              >
                {/* Bên trái: Thông tin việc */}
                <div className="flex items-start gap-4">
                  <img
                    src={job.logo}
                    alt="Logo"
                    className="w-10 h-10 rounded-full object-cover mt-1"
                  />
                  <div>
                    {/* Thời gian */}
                    <span className="inline-block text-xs text-green-700 bg-green-100 rounded-full px-3 py-1 mb-1 font-medium">
                      {job.posted}
                    </span>
                    <h3 className="text-lg font-semibold text-gray-900">
                      {job.title}
                    </h3>
                    <p className="text-sm text-gray-500">{job.company}</p>

                    {/* Chi tiết */}
                    <div className="flex flex-wrap gap-x-5 gap-y-2 mt-3 text-sm text-gray-600">
                      <div className="flex items-center gap-1">
                        <HiBriefcase className="text-base" />
                        <span>{job.category}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <HiClock className="text-base" />
                        <span>{job.type}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <HiCurrencyDollar className="text-base" />
                        <span>{job.salary}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <HiLocationMarker className="text-base" />
                        <span>{job.location}</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Bên phải: Bookmark + nút */}
                <div className="flex flex-col items-end justify-between gap-3">
                  <HiOutlineBookmark className="text-gray-400 hover:text-green-600 text-xl cursor-pointer" />
                  <button className="bg-green-600 hover:bg-green-700 text-white text-sm font-semibold px-4 py-2 rounded-md">
                    Job Details
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* Category */}
      <section
        className="py-16 opacity-90"
        style={{ backgroundColor: "#ecfdf5" }}
      >
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 mb-2">
            Tìm kiếm theo lĩnh vực
          </h2>
          <p className="text-gray-500 mb-10">
            At eu lobortis pretium tincidunt amet lacus ut aenean aliquet.
            Blandit a massa elementum id scelerisque.
          </p>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
            {categories.map((cat) => (
              <div
                key={cat.name}
                className="bg-white rounded-xl shadow-sm hover:shadow-md transition p-6 flex flex-col items-center justify-center"
              >
                <div className="text-4xl text-green-600 mb-4">{cat.icon}</div>
                <h3 className="text-base font-semibold text-gray-800">
                  {cat.name}
                </h3>
                <span className="text-sm text-green-600 mt-1">
                  {cat.jobs} jobs
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          {/* Hình ảnh */}
          <div className="rounded-2xl overflow-hidden shadow-lg w-full h-[300px] bg-gray-200 animate-pulse" />

          {/* Nội dung bên phải */}
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Phát triển bởi sinh viên FPT – Vì tương lai nghề nghiệp của bạn!
            </h2>
            <p className="text-gray-600 mb-6 leading-relaxed">
              Nền tảng FCareer được xây dựng với tâm huyết và chuyên môn của
              sinh viên Đại học FPT – nơi kết nối cơ hội nghề nghiệp, kỹ năng cá
              nhân và công nghệ AI để giúp bạn dễ dàng tìm thấy công việc phù
              hợp với bản thân.
            </p>
            <div className="flex gap-4">
              <a
                href="/jobs"
                className="bg-green-600 hover:bg-green-700 text-white px-5 py-2 rounded-md font-medium text-sm"
              >
                Tìm Việc
              </a>
              <a
                href="/about"
                className="text-green-600 hover:underline font-medium text-sm"
              >
                Xem thêm
              </a>
            </div>
          </div>
        </div>
      </section>
    </BaseScreen>
  );
}
