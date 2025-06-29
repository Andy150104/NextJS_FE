"use client";
import React, { useState } from "react";
import { useSpring, useTrail, animated } from "@react-spring/web";
import {
  Form,
  Input,
  Select,
  Slider,
  Switch,
  Button,
  Tag,
  Upload,
  Typography,
} from "antd";
import { PlusOutlined, UploadOutlined } from "@ant-design/icons";
import type { UploadFile } from "antd/es/upload/interface";

const { TextArea } = Input;
const { Title, Text } = Typography;

const skillsList = [
  "Java",
  "C#",
  "C++",
  "Grammar",
  "Vietnamese",
  "Research",
  "Writing",
  "Firebase",
  "Working in Group",
];
const degreeList = [
  { value: "daihoc", label: "Đại học" },
  { value: "caodang", label: "Cao đẳng" },
  { value: "thpt", label: "THPT" },
];
const genderList = [
  { value: "none", label: "Không yêu cầu" },
  { value: "male", label: "Nam" },
  { value: "female", label: "Nữ" },
];

// Heroicons SVG cho sidebar
const icons = {
  dashboard: (
    <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M3 13h8V3H3v10zm0 8h8v-6H3v6zm10 0h8v-10h-8v10zm0-18v6h8V3h-8z" /></svg>
  ),
  calendar: (
    <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" /></svg>
  ),
  users: (
    <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M17 20h5v-2a4 4 0 00-3-3.87M9 20H4v-2a4 4 0 013-3.87m9-7a4 4 0 11-8 0 4 4 0 018 0z" /></svg>
  ),
  settings: (
    <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M12 8c-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4-1.79-4-4-4zm0 0V4m0 16v-4m8-4h-4m-8 0H4" /></svg>
  ),
  doc: (
    <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M7 7h10M7 11h10M7 15h6M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
  ),
  lock: (
    <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M12 15v2m6-6V7a6 6 0 10-12 0v4m12 0a2 2 0 012 2v6a2 2 0 01-2 2H6a2 2 0 01-2-2v-6a2 2 0 012-2h12z" /></svg>
  ),
};

export default function DashboardEmployer() {
  const [form] = Form.useForm();
  const [skills, setSkills] = useState(["IELTS 7.0"]);
  const [inputSkill, setInputSkill] = useState("");
  const [fileList, setFileList] = useState<UploadFile[]>([]);

  // Animation for sections
  const sectionTrail = useTrail(4, {
    from: { opacity: 0, y: 40 },
    to: { opacity: 1, y: 0 },
    config: { mass: 1, tension: 220, friction: 24 },
    delay: 200,
  });

  // Sidebar animation
  const sidebarSpring = useSpring({
    from: { x: -80, opacity: 0 },
    to: { x: 0, opacity: 1 },
    config: { mass: 1, tension: 200, friction: 24 },
    delay: 100,
  });

  // Handle skill add
  const handleSkillAdd = (value: string) => {
    if (value && !skills.includes(value)) {
      setSkills([...skills, value]);
    }
    setInputSkill("");
  };
  // Handle skill remove
  const handleSkillRemove = (removedSkill: string) => {
    setSkills(skills.filter((skill) => skill !== removedSkill));
  };

  // Handle file upload
  const handleUploadChange = ({ fileList }: { fileList: UploadFile[] }) => setFileList(fileList);

  // Handle form submit
  const onFinish = (values: Record<string, unknown>) => {
    // Xử lý dữ liệu đăng tin ở đây
    alert("Chỉnh sửa thành công!\n" + JSON.stringify({ ...values, skills, fileList }, null, 2));
  };

  return (
    <div className="flex min-h-screen bg-[#f7f8fa] dark:bg-slate-900">
      {/* Sidebar */}
      <animated.aside
        style={sidebarSpring}
        className="w-64 bg-white dark:bg-slate-800 flex flex-col justify-between py-8 px-6 rounded-3xl m-4 ml-2 shadow-none border-none min-h-[96vh]"
      >
        <div>
          <div className="flex items-center gap-3 mb-10">
            <img src="/logo.png" alt="Logo" className="w-8 h-8 rounded-full" />
            <span className="text-2xl font-extrabold text-[#2d3a8c]">StudyWork</span>
          </div>
          <nav className="flex flex-col gap-1 mt-8">
            <a href="/dashboard-employer" className="flex items-center font-semibold text-[#7c3aed] bg-[#f3e8ff] rounded-xl px-4 py-2 mb-1">
              {icons.dashboard} Tin tuyển dụng
            </a>
            <a href="#" className="flex items-center font-medium text-gray-500 hover:text-[#7c3aed] hover:bg-[#f3e8ff] rounded-xl px-4 py-2">
              {icons.calendar} Lịch hẹn phỏng vấn
            </a>
            <a href="#" className="flex items-center font-medium text-gray-500 hover:text-[#7c3aed] hover:bg-[#f3e8ff] rounded-xl px-4 py-2">
              {icons.users} Danh sách nhân viên
            </a>
          </nav>
          <div className="mt-10 border-t border-gray-100 dark:border-slate-700 pt-6 flex flex-col gap-1">
            <a href="#" className="flex items-center text-xs text-gray-400 hover:text-[#7c3aed] py-1">
              {icons.settings} Cài đặt
            </a>
            <a href="#" className="flex items-center text-xs text-gray-400 hover:text-[#7c3aed] py-1">
              {icons.doc} Điều khoản dịch vụ
            </a>
            <a href="#" className="flex items-center text-xs text-gray-400 hover:text-[#7c3aed] py-1">
              {icons.lock} Chính sách quyền riêng tư
            </a>
          </div>
        </div>
        <div className="flex items-center gap-3 mt-10">
          <img src="https://randomuser.me/api/portraits/women/44.jpg" alt="avatar" className="w-9 h-9 rounded-full" />
          <div>
            <div className="font-semibold text-gray-700 dark:text-white text-sm">Maria Kelly</div>
            <div className="text-xs text-gray-400">Maria1kyle@mail.com</div>
          </div>
        </div>
      </animated.aside>

      {/* Main content */}
      <main className="flex-1 flex flex-col items-center py-10 px-2 md:px-10">
        <animated.div style={sectionTrail[0]} className="w-full max-w-3xl mb-8">
          <Title level={2} className="!mb-2 !font-extrabold !text-[#2d3a8c] dark:!text-white">Chỉnh sửa tin tuyển dụng</Title>
          <Text className="text-gray-500 dark:text-slate-300">Hãy thêm mô tả chi tiết để các ứng viên hiểu rõ công việc</Text>
        </animated.div>
        <Form
          form={form}
          layout="vertical"
          className="w-full max-w-3xl bg-white dark:bg-slate-800 rounded-2xl p-8 border border-gray-100 dark:border-slate-700"
          onFinish={onFinish}
        >
          {/* Thông tin công ty */}
          <animated.div style={sectionTrail[1]} className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
            <Form.Item
              label={<span className="font-semibold text-gray-700">Tên doanh nghiệp</span>}
              name="companyName"
              rules={[{ required: true, message: "Vui lòng nhập tên doanh nghiệp" }]}
            >
              <Input placeholder="FPT Software" className="rounded-lg" />
            </Form.Item>
            <Form.Item
              label={<span className="font-semibold text-gray-700">Địa chỉ</span>}
              name="address"
              rules={[{ required: true, message: "Vui lòng nhập địa chỉ" }]}
            >
              <Input placeholder="Saigon Hitech Park, Thủ Đức, TP.HCM" className="rounded-lg" />
            </Form.Item>
          </animated.div>

          {/* Nội dung tuyển dụng */}
          <animated.div style={sectionTrail[2]} className="mb-8">
            <Form.Item
              label={<span className="font-semibold text-gray-700">Nội dung</span>}
              name="description"
              rules={[{ required: true, message: "Vui lòng nhập nội dung tuyển dụng" }]}
            >
              <TextArea rows={4} maxLength={2000} showCount placeholder="Hãy viết gì đó" className="rounded-lg" />
            </Form.Item>
          </animated.div>

          {/* Kỹ năng tuyển dụng */}
          <animated.div style={sectionTrail[2]} className="mb-8">
            <label className="block font-semibold mb-2 text-gray-700">Kỹ năng tuyển dụng</label>
            <div className="flex flex-wrap gap-2 mb-2">
              {skills.map((skill) => (
                <Tag
                  key={skill}
                  closable
                  onClose={() => handleSkillRemove(skill)}
                  className="bg-[#f3e8ff] text-[#7c3aed] border-none rounded-xl px-4 py-1 text-base font-medium"
                >
                  {skill}
                </Tag>
              ))}
            </div>
            <Input.Search
              placeholder="Thêm kỹ năng..."
              enterButton={<PlusOutlined />}
              value={inputSkill}
              onChange={(e) => setInputSkill(e.target.value)}
              onSearch={handleSkillAdd}
              className="max-w-xs"
              list="skills-list"
            />
            <datalist id="skills-list">
              {skillsList.map((s) => (
                <option value={s} key={s} />
              ))}
            </datalist>
          </animated.div>

          {/* Yêu cầu ứng viên */}
          <animated.div style={sectionTrail[3]} className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            <Form.Item label={<span className="font-semibold text-gray-700">Bằng cấp</span>} name="degree" initialValue={degreeList[0].value}>
              <Select options={degreeList} className="rounded-lg" />
            </Form.Item>
            <Form.Item label={<span className="font-semibold text-gray-700">Độ tuổi</span>} name="age" initialValue={[15, 21]}>
              <Slider range min={15} max={40} marks={{ 15: "15", 21: "21", 30: "30", 40: "40" }} />
            </Form.Item>
            <Form.Item label={<span className="font-semibold text-gray-700">Giới tính</span>} name="gender" initialValue={genderList[0].value}>
              <Select options={genderList} className="rounded-lg" />
            </Form.Item>
          </animated.div>

          {/* Thông tin thêm */}
          <animated.div style={sectionTrail[3]} className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
            <Form.Item label={<span className="font-semibold text-gray-700">Giới thiệu bản thân</span>} name="about">
              <Switch checkedChildren="Yêu cầu" unCheckedChildren="Không" />
            </Form.Item>
            <Form.Item label={<span className="font-semibold text-gray-700">File PDF bằng cấp</span>} name="degreeFile">
              <Upload
                fileList={fileList}
                onChange={handleUploadChange}
                beforeUpload={() => false}
                accept=".pdf"
                maxCount={1}
              >
                <Button icon={<UploadOutlined />}>Tải lên PDF</Button>
              </Upload>
            </Form.Item>
          </animated.div>

          <Form.Item className="flex justify-end">
            <Button type="primary" htmlType="submit" size="large" className="px-10 rounded-xl bg-[#7c3aed] hover:bg-[#6d28d9] border-none">
              Chỉnh sửa
            </Button>
          </Form.Item>
        </Form>
      </main>
    </div>
  );
}
