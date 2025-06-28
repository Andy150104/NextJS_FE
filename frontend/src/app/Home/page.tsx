// MyForm.tsx
"use client";
import React from "react";
import { Form, Button } from "antd";
import BaseControlTextField from "Nova/components/BaseControl/BasecontrolTextField";
import BaseScreen from "Nova/layout/BaseScreen";

const xmlColumns = {
  Password: {
    id: "password",
    name: "Password",
    rules: "required",
  },
  ConfirmPassword: {
    id: "confirmPassword",
    name: "Confirm Password",
    rules: "required|confirm_password:password",
  },
} as const;

export default function MyForm() {
  const [form] = Form.useForm();

  const onFinish = (values: unknown) => {
    console.log("submit data:", values);
  };

  return (
    <div className="dark:bg-slate-900">
      <BaseScreen>
        <Form form={form} onFinish={onFinish} layout="horizontal">
          <BaseControlTextField
            xmlColumn={xmlColumns.Password}
            maxlength={50}
            placeholder="Password"
          />

          <BaseControlTextField
            xmlColumn={xmlColumns.ConfirmPassword}
            maxlength={50}
            placeholder="Confirm Password"
          />

          <Form.Item>
            <Button type="primary" htmlType="submit">
              Submit
            </Button>
          </Form.Item>
        </Form>
      </BaseScreen>
    </div>
  );
}
