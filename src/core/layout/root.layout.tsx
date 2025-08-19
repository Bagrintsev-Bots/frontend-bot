import type { FC, PropsWithChildren } from 'react';
import { ConfigProvider } from 'antd';

const RootLayoutApp: FC<PropsWithChildren> = ({ children }) => {
  return (
    <ConfigProvider
      theme={{
        components: {
          Button: {
            borderRadius: 25,
          },
        },
      }}
    >
      <body>{children}</body>
    </ConfigProvider>
  );
};

export default RootLayoutApp;
