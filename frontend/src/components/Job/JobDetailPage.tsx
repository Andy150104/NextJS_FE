"use client";

import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import BaseScreen from "../../layout/BaseScreen";
import { Api } from "../../api/api";
import { JobDetail } from "../../api/api";

const icons = {
    category: (
        <svg className="w-5 h-5 text-teal-500" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
            <path d="M3 7V6a2 2 0 012-2h2a2 2 0 012 2v1m0 0v1a2 2 0 01-2 2H5a2 2 0 01-2-2V7m6 0h6m0 0V6a2 2 0 012-2h2a2 2 0 012 2v1m0 0v1a2 2 0 01-2 2h-2a2 2 0 01-2-2V7m0 0h-6" />
        </svg>
    ),
    time: (
        <svg className="w-5 h-5 text-teal-500" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
            <circle cx="12" cy="12" r="10" />
            <path d="M12 6v6l4 2" />
        </svg>
    ),
    salary: (
        <svg className="w-5 h-5 text-teal-500" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
            <rect x="2" y="7" width="20" height="10" rx="2" />
            <path d="M16 3v4M8 3v4m-4 8v2a2 2 0 002 2h12a2 2 0 002-2v-2" />
        </svg>
    ),
    location: (
        <svg className="w-5 h-5 text-teal-500" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
            <path d="M12 21c-4.418 0-8-4.03-8-9a8 8 0 1116 0c0 4.97-3.582 9-8 9z" />
            <circle cx="12" cy="12" r="3" />
        </svg>
    ),
};

interface JobDetailPageProps {
    id: string;
}

const JobDetailPage: React.FC<JobDetailPageProps> = ({ id }) => {
    const router = useRouter();
    const [job, setJob] = useState<JobDetail | null>(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchJob = async () => {
            try {
                const api = new Api();
                const res = await api.request({
                    method: "GET",
                    path: `/api/v1/Job/${id}`,
                    secure: true,
                    format: "json",
                });

                if (res.data.success && res.data.response) {
                    setJob(res.data.response);
                } else {
                    setJob(null);
                }
            } catch (error) {
                console.error("Error loading job detail:", error);
                setJob(null);
            } finally {
                setLoading(false);
            }
        };

        fetchJob();
    }, [id]);

    if (loading) {
        return (
            <BaseScreen>
                <div className="text-center py-20">Đang tải thông tin công việc...</div>
            </BaseScreen>
        );
    }

    if (!job) {
        return (
            <BaseScreen>
                <div className="min-h-screen px-2 md:px-0 flex justify-center items-center">
                    <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-md p-6 border border-gray-100 dark:border-slate-700 text-center">
                        <h2 className="text-2xl font-bold text-red-500 mb-4">Job Not Found</h2>
                        <p className="text-gray-600 dark:text-gray-300 mb-6">Không tìm thấy công việc này.</p>
                        <button onClick={() => router.push("/job")} className="bg-teal-500 hover:bg-teal-600 text-white px-6 py-2 rounded-lg font-semibold">
                            Quay lại danh sách
                        </button>
                    </div>
                </div>
            </BaseScreen>
        );
    }

    const responsibilities = job.keyResponsibility?.split(",").map(i => i.trim());
    const skills = job.professionalSkill?.split(",").map(i => i.trim());

    return (
        <BaseScreen>
            <div className="max-w-5xl mx-auto px-4 py-10">
                <div className="bg-white dark:bg-slate-800 rounded-2xl shadow p-6 border border-gray-100 dark:border-slate-700">
                    <h1 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">{job.title}</h1>
                    <p className="text-sm text-gray-500 mb-4">{job.companyName}</p>

                    <div className="flex flex-wrap gap-6 text-gray-700 dark:text-gray-300 text-sm mb-6">
                        <div className="flex items-center gap-2">{icons.category}<span>{job.industry}</span></div>
                        <div className="flex items-center gap-2">{icons.time}<span>{job.type}</span></div>
                        <div className="flex items-center gap-2">{icons.salary}<span>{job.salary}</span></div>
                        <div className="flex items-center gap-2">{icons.location}<span>{job.address}</span></div>
                    </div>

                    <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">Mô tả công việc</h2>
                    <p className="text-base text-gray-700 dark:text-gray-300 mb-6">{job.jobDescription}</p>

                    <div className="grid md:grid-cols-2 gap-6 mb-6">
                        <div>
                            <h3 className="font-semibold text-gray-900 dark:text-white mb-2">Trách nhiệm chính</h3>
                            <ul className="list-disc list-inside space-y-1 text-sm text-gray-700 dark:text-gray-300">
                                {responsibilities?.map((r, i) => <li key={i}>{r}</li>)}
                            </ul>
                        </div>
                        <div>
                            <h3 className="font-semibold text-gray-900 dark:text-white mb-2">Kỹ năng chuyên môn</h3>
                            <ul className="list-disc list-inside space-y-1 text-sm text-gray-700 dark:text-gray-300">
                                {skills?.map((s, i) => <li key={i}>{s}</li>)}
                            </ul>
                        </div>
                    </div>

                    <div className="mt-4 text-sm text-gray-500">
                        <p><strong>Bằng cấp yêu cầu:</strong> {job.degreeRequirement}</p>
                        <p><strong>Kinh nghiệm:</strong> {job.experienceRequirement}</p>
                        <p><strong>Ngày đăng:</strong> {new Date(job.createdAt).toLocaleDateString("vi-VN")}</p>
                    </div>

                    <div className="mt-6">
                        <button className="bg-teal-500 hover:bg-teal-600 text-white px-6 py-2 rounded-lg font-semibold">
                            Ứng tuyển ngay
                        </button>
                    </div>
                </div>
            </div>
        </BaseScreen>
    );
};

export default JobDetailPage;
