'use client';

import {observer} from "mobx-react-lite";
import {Button, Flex, Form, Input} from "antd";

export const LogIn = observer(() => {

  return (
    <Flex
      style={{ height: '100vh' }}
      justify="center"
      align="center"
    >
      <Form >
        <Flex
          vertical
          justify="center"
          gap={20}
        >
          <Form.Item key='email' noStyle>
            <Input
              placeholder="Email"
            />
          </Form.Item>

          <Form.Item key='password' noStyle>
            <Input.Password
              placeholder="Password"
            />
          </Form.Item>

          <Button htmlType="submit" type='primary'>Log In</Button>
        </Flex>
      </Form>
    </Flex>)
});
