"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { Form, message } from "antd";
import BaseControlTextField from "Nova/components/BaseControl/BasecontrolTextField";
import { useAuthStore } from "Nova/store/AuthStore/AuthStore";
import Image from "next/image";
import {
  useSprings,
  useTransition,
  useTrail,
  useSpring,
  animated,
  easings,
} from "@react-spring/web";

const xmlColumns = {
  email: { id: "email", name: "Email", rules: "required" },
  password: { id: "password", name: "Password", rules: "required" },
} as const;

type LoginFormValues = { email: string; password: string };

const transPercent = (x: number, y: number) =>
  `translate3d(${x}%,${y}%,0) translate3d(-50%,-50%,0)`;

export default function LoginPage() {
  // 1. Khởi tạo message API + contextHolder
  const [messageApi, contextHolder] = message.useMessage();

  const [form] = Form.useForm<LoginFormValues>();
  const router = useRouter();
  const login = useAuthStore((state) => state.login);

  const onFinish = async (values: LoginFormValues) => {
    try {
      await login(values.email, values.password);
      // dùng messageApi để hiển thị toast
      messageApi.success("Đăng nhập thành công!");
    } catch {
      messageApi.error("Đăng nhập thất bại, vui lòng kiểm tra lại email/mật khẩu.");
    }
  };

  // Bubbles setup
  const bubbleCount = 7;
  const colors = Array.from({ length: bubbleCount }).map(
    () => `hsla(${Math.random() * 360}, 70%, 65%, 0.3)`
  );
  const sizes = Array.from({ length: bubbleCount }).map(
    () => 80 + Math.random() * 200
  );
  const xRange: [number, number] = [-250, 250];
  const yRange: [number, number] = [-250, 250];
  const randomInRange = ([min, max]: [number, number]) =>
    min + Math.random() * (max - min);

  const bubbleSprings = useSprings(
    bubbleCount,
    Array.from({ length: bubbleCount }).map(() => {
      const duration = 5000 + Math.random() * 3000;
      return {
        from: { xy: [randomInRange(xRange), randomInRange(yRange)], scale: 0.5 },
        to: async (next) => {
          while (true) {
            await next({
              xy: [randomInRange(xRange), randomInRange(yRange)],
              scale: 1 + Math.random() * 0.5,
            });
          }
        },
        config: { duration, easing: easings.easeInOutSine },
        delay: Math.random() * duration,
        loop: true,
      };
    })
  );

  // Form transition
  const transitions = useTransition(true, {
    from: { opacity: 0, transform: "scale(0.8)" },
    enter: { opacity: 1, transform: "scale(1)" },
    config: { mass: 1, tension: 280, friction: 60 },
    delay: 300,
  });

  // Trail cho các field
  const fields = [
    <BaseControlTextField
      xmlColumn={xmlColumns.email}
      maxlength={50}
      placeholder="Enter your Email"
      key="email"
    />,
    <BaseControlTextField
      xmlColumn={xmlColumns.password}
      maxlength={50}
      placeholder="Enter your Password"
      key="password"
    />,
  ];
  const trail = useTrail(fields.length, {
    from: { opacity: 0, transform: "translate3d(0,20px,0)" },
    to: { opacity: 1, transform: "translate3d(0,0,0)" },
    config: { mass: 1, tension: 200, friction: 20 },
    delay: 600,
  });

  // Button spring
  const [hovered, setHovered] = useState(false);
  const btnStyle = useSpring({
    transform: hovered ? "scale(1.05)" : "scale(1)",
    config: { tension: 300, friction: 10 },
  });

  const FormCardContent = (
    <div className="relative w-full max-w-md bg-white bg-opacity-90 dark:bg-gray-800 dark:bg-opacity-90 backdrop-blur-md rounded-3xl shadow-2xl p-6 sm:p-8">
      <h2 className="text-center text-2xl sm:text-3xl font-bold mb-6 text-gray-800 dark:text-gray-100">
        Welcome to Lorem!
      </h2>
      <Form<LoginFormValues> form={form} onFinish={onFinish} layout="vertical">
        {trail.map((style, idx) => (
          <animated.div key={idx} style={style}>
            {fields[idx]}
          </animated.div>
        ))}
        <div className="mt-6 sm:mt-8">
          <animated.button
            type="submit"
            style={btnStyle}
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
            className="w-full py-4 font-semibold text-white rounded-full bg-gradient-to-r from-teal-400 to-blue-500 hover:from-teal-500 hover:to-blue-600 transition"
          >
            Đăng nhập
          </animated.button>
        </div>
      </Form>
    </div>
  );

  return (
    <>
      {/* 2. Chỗ mount toast container */}
      {contextHolder}

      <div className="flex flex-col md:flex-row min-h-screen">
        {/* Mobile hero + form */}
        <div className="relative flex-1 h-screen md:h-auto overflow-hidden">
          <Image
            src="https://static-cse.canva.com/blob/1256338/studyingtips1.jpg"
            alt="Hero"
            fill
            className="object-cover brightness-90 dark:brightness-75"
          />
          <div className="absolute inset-0 bg-gradient-to-tr from-pink-500 via-red-400 to-yellow-300 opacity-50 dark:opacity-40" />
          <div className="absolute bottom-8 left-6 md:bottom-12 md:left-12 text-white">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold drop-shadow-2xl">
              Lorem Ipsum is simply
            </h1>
            <p className="mt-2 sm:mt-3 text-base sm:text-lg md:text-xl drop-shadow-lg">
              Lorem Ipsum is simply
            </p>
          </div>
          <div className="absolute inset-0 flex items-center justify-center p-4 md:hidden">
            {transitions((style, item) =>
              item ? <animated.div style={style}>{FormCardContent}</animated.div> : null
            )}
          </div>
        </div>

        {/* Desktop panel với bubbles */}
        <div className="hidden md:flex flex-1 items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-gray-900 dark:to-gray-800 p-8 relative overflow-hidden">
          {bubbleSprings.map((props, idx) => (
            <animated.div
              key={idx}
              style={{
                transform: props.xy.to(transPercent),
                scale: props.scale,
                position: "absolute",
                width: `${sizes[idx]}px`,
                height: `${sizes[idx]}px`,
                backgroundColor: colors[idx],
                filter: "blur(12px)",
                boxShadow: `0 0 20px ${colors[idx]}`,
                borderRadius: "50%",
              }}
            />
          ))}
          {transitions((style, item) =>
            item ? <animated.div style={style}>{FormCardContent}</animated.div> : null
          )}
        </div>
      </div>
    </>
  );
}
