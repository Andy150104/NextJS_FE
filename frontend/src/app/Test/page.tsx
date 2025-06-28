'use client';
import React, { useState } from 'react';
import { Button, Checkbox, ConfigProvider, Form, Input, Modal, Space } from 'antd';
import { FormProps } from 'antd/lib';
import { createStyles, useTheme } from 'antd-style';

type FieldType = {
  username?: string;
  password?: string;
  remember?: string;
};

const onFinish: FormProps<FieldType>['onFinish'] = (values) => {
  console.log('Success:', values);
};

const onFinishFailed: FormProps<FieldType>['onFinishFailed'] = (errorInfo) => {
  console.log('Failed:', errorInfo);
};

const useStyle = createStyles(({ token }) => ({
  'my-modal-body': {
    background: token.blue1,
    padding: token.paddingSM,
  },
  'my-modal-mask': {
    boxShadow: `inset 0 0 15px #fff`,
  },
  'my-modal-header': {
    borderBottom: `1px dotted ${token.colorPrimary}`,
  },
  'my-modal-footer': {
    color: token.colorPrimary,
  },
  'my-modal-content': {
    border: '1px solid #333',
  },
}));

export default function MyFormWithModal() {
  const [isModalOpen, setIsModalOpen] = useState([false, false]);
  const { styles } = useStyle();
  const token = useTheme();

  const toggleModal = (idx: number, open: boolean) => {
    setIsModalOpen(prev => {
      const next = [...prev];
      next[idx] = open;
      return next;
    });
  };

  const classNames = {
    body: styles['my-modal-body'],
    mask: styles['my-modal-mask'],
    header: styles['my-modal-header'],
    footer: styles['my-modal-footer'],
    content: styles['my-modal-content'],
  };

  const modalStyles = {
    header: {
      borderLeft: `5px solid ${token.colorPrimary}`,
      borderRadius: 0,
      paddingInlineStart: 5,
    },
    body: {
      boxShadow: 'inset 0 0 5px #999',
      borderRadius: 5,
    },
    mask: {
      backdropFilter: 'blur(10px)',
    },
    footer: {
      borderTop: '1px solid #333',
    },
    content: {
      boxShadow: '0 0 30px #999',
    },
  };

  return (
    <>
      {/* Phần Form */}
      <Form
        name="basic"
        labelCol={{ span: 8 }}
        wrapperCol={{ span: 16 }}
        style={{ maxWidth: 600, marginBottom: 24 }}
        initialValues={{ remember: true }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
      >
        <Form.Item<FieldType>
          label="Username"
          name="username"
          rules={[{ required: true, message: 'Please input your username!' }]}
        >
          <Input />
        </Form.Item>

        <Form.Item<FieldType>
          label="Password"
          name="password"
          rules={[{ required: true, message: 'Please input your password!' }]}
        >
          <Input.Password />
        </Form.Item>

        <Form.Item<FieldType> name="remember" valuePropName="checked" label={null}>
          <Checkbox>Remember me</Checkbox>
        </Form.Item>

        <Form.Item label={null}>
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        </Form.Item>
      </Form>

      {/* Nút bật Modal */}
      <Space style={{ marginBottom: 16 }}>
        <Button type="primary" onClick={() => toggleModal(0, true)}>
          Open Modal
        </Button>
        <Button type="primary" onClick={() => toggleModal(1, true)}>
          ConfigProvider Modal
        </Button>
      </Space>

      {/* Modal 1: trực tiếp với classNames, styles */}
      <Modal
        title="Basic Modal"
        open={isModalOpen[0]}
        onOk={() => toggleModal(0, false)}
        onCancel={() => toggleModal(0, false)}
        footer="Footer"
        classNames={classNames}
        styles={modalStyles}
      >
        <p>Some contents...</p>
        <p>Some contents...</p>
        <p>Some contents...</p>
      </Modal>

      {/* Modal 2: thông qua ConfigProvider */}
      <ConfigProvider modal={{ classNames, styles: modalStyles }}>
        <Modal
          title="ConfigProvider Modal"
          open={isModalOpen[1]}
          onOk={() => toggleModal(1, false)}
          onCancel={() => toggleModal(1, false)}
          footer="Footer"
        >
          <p>Some contents...</p>
          <p>Some contents...</p>
          <p>Some contents...</p>
        </Modal>
      </ConfigProvider>
    </>
  );
}
