import React, { ReactNode } from "react";
import { FaTachometerAlt, FaUsers, FaFileAlt, FaCog } from "react-icons/fa";

interface ManagementLayoutProps {
    title?: string;
    children: ReactNode;
}

const menu = [
    { label: "Dashboard", icon: <FaTachometerAlt />, path: "/admin/dashboard" },
    { label: "Quản lý người dùng", icon: <FaUsers />, path: "/admin/users" },
    { label: "Quản lý bài viết", icon: <FaFileAlt />, path: "/admin/posts" },
    { label: "Cài đặt", icon: <FaCog />, path: "/admin/settings" },
];

export default function ManagementLayout({ title = "Quản lý", children }: ManagementLayoutProps) {
    return (
        <div className="min-h-screen bg-gray-50 dark:bg-slate-900 flex">
            {/* Sidebar */}
            <aside className="hidden md:flex flex-col w-64 h-screen bg-white dark:bg-slate-800 border-r border-gray-100 dark:border-slate-700 shadow-sm fixed left-0 top-0 z-20">
                <div className="h-16 flex items-center justify-center border-b border-gray-100 dark:border-slate-700">
                    <span className="text-2xl font-bold text-teal-600 tracking-wide">Admin</span>
                </div>
                <nav className="flex-1 py-6 px-2 space-y-1">
                    {menu.map((item) => (
                        <a
                            key={item.label}
                            href={item.path}
                            className="flex items-center gap-3 px-4 py-2 rounded-lg text-gray-700 dark:text-gray-200 hover:bg-teal-50 dark:hover:bg-slate-700 transition font-medium"
                        >
                            <span className="text-lg">{item.icon}</span>
                            <span>{item.label}</span>
                        </a>
                    ))}
                </nav>
            </aside>
            {/* Main Content */}
            <div className="flex-1 md:ml-64 flex flex-col min-h-screen">
                {/* Top Bar */}
                <header className="w-full h-16 flex items-center px-6 bg-white dark:bg-slate-800 shadow-sm border-b border-gray-100 dark:border-slate-700 sticky top-0 z-10">
                    <h1 className="text-xl font-bold text-gray-900 dark:text-white tracking-wide">{title}</h1>
                </header>
                <main className="flex-1 p-4 md:p-10">{children}</main>
            </div>
        </div>
    );
} 