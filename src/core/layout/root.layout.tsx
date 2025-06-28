import type {FC, PropsWithChildren} from 'react';

const RootLayoutApp: FC<PropsWithChildren> = ({children}) => {
  return (
    <html lang="en">
    <body>{children}</body>
    </html>
  );
};

export default RootLayoutApp;
