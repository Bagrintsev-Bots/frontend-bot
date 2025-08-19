'use client';

import type { FC } from 'react';
import { useForm } from 'antd/es/form/Form';
import { Button, Flex, Form, FormProps, Input } from 'antd';

export const Register: FC = () => {
  const [form] = useForm();

  const onFinish: FormProps['onFinish'] = (values) => {
    console.log(values);
  };

  return (
    <Flex style={{ height: '100vh' }} justify='center' align='center'>
      <Form form={form} onFinish={onFinish}>
        <Flex vertical justify='center' gap={20}>
          <Form.Item name='username' noStyle required>
            <Input type='text' placeholder='Username' />
          </Form.Item>

          <Form.Item name='email' noStyle required>
            <Input type='email' placeholder='Email' />
          </Form.Item>

          <Form.Item name='password' noStyle required>
            <Input.Password placeholder='Password' />
          </Form.Item>

          <Button htmlType='submit' type='primary'>
            Register
          </Button>
        </Flex>
      </Form>
    </Flex>
  );
};
