'use client';

import { observer } from 'mobx-react-lite';
import { Button, Flex, Form, Input, Switch, Typography } from 'antd';

const { Title, Text } = Typography;

export const Profile = observer(() => {
  const [formProfile] = Form.useForm();
  const [formSettingsProfile] = Form.useForm();

  return (
    <Flex vertical style={{ width: '50%' }}>
      <Title level={3}>Personal Account</Title>

      <Form form={formProfile} layout='vertical'>
        <Title level={5}>Profile</Title>

        <Form.Item name='username' label='Username'>
          <Input />
        </Form.Item>
        <Form.Item name='email' label='Email'>
          <Input type='email' />
        </Form.Item>
        <Form.Item name='password' label='Password'>
          <Input.Password />
        </Form.Item>

        <Button type='primary' htmlType='submit'>
          Update Profile
        </Button>
      </Form>

      <Form
        form={formSettingsProfile}
        onFinish={(values) => {
          console.log(values);
        }}
        layout='vertical'
      >
        <Title level={5}>API Keys</Title>

        <Form.Item name='apiKey' label='API Key'>
          <Input.Password />
        </Form.Item>
        <Form.Item name='secretKey' label='Secret Key'>
          <Input.Password />
        </Form.Item>

        <Title level={5}>Notifications</Title>

        <Flex vertical gap={20}>
          <Form.Item name='showEmailNotifications' noStyle>
            <Flex gap={10}>
              <Switch defaultChecked={false} />
              <Text>Email notifications</Text>
            </Flex>
          </Form.Item>
          <Form.Item name='telegranAlert' noStyle>
            <Flex gap={10}>
              <Switch defaultChecked={false} />
              <Text>Telegram Alerts</Text>
            </Flex>
          </Form.Item>
        </Flex>

        <Button type='primary' htmlType='submit' style={{ marginTop: 10 }}>
          Save Settings
        </Button>
      </Form>
    </Flex>
  );
});
