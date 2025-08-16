'use client';

import { observer } from 'mobx-react-lite';
import { Button, Flex, Form, FormProps, Input } from 'antd';
import { useForm } from 'antd/es/form/Form';

export const LogIn = observer(() => {
  const [form] = useForm();

  const onFinish: FormProps['onFinish'] = (values) => {
    console.log(values);
  };

  return (
    <Flex style={{ height: '100vh' }} justify='center' align='center'>
      <Form form={form} onFinish={onFinish}>
        <Flex vertical justify='center' gap={20}>
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
      </Form>
    </Flex>
  );
});
