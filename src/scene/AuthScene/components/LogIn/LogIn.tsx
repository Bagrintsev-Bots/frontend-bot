'use client';

import { observer } from 'mobx-react-lite';
import { Button, Flex, Form, FormProps, Input, Typography } from 'antd';
import { useForm } from 'antd/es/form/Form';
import Link from 'next/link';

const { Title } = Typography;

export const LogIn = observer(() => {
  const [form] = useForm();

  const onFinish: FormProps['onFinish'] = (values) => {
    console.log(values);
  };

  return (
    <Flex style={{ height: '100vh' }} justify='center' align='center'>
      <Form form={form} onFinish={onFinish}>
        <Flex vertical justify='center' gap={20} style={{ width: 300 }}>
          <Title level={5} style={{ textAlign: 'center' }}>
            Log In
          </Title>
          <Form.Item name='email' noStyle required>
            <Input type='email' placeholder='Email' />
          </Form.Item>

          <Form.Item name='password' noStyle required>
            <Input.Password placeholder='Password' />
          </Form.Item>

          <Button htmlType='submit' type='primary'>
            Log In
          </Button>
        </Flex>
        <Link href='/register' style={{ textAlign: 'center' }}>
          Don't have an account? Sign up
        </Link>
      </Form>
    </Flex>
  );
});
