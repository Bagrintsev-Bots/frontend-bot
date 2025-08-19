import RootLayoutApp from '../core/layout/root.layout';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang='en'>
      <body>
        <RootLayoutApp>{children}</RootLayoutApp>
      </body>
    </html>
  );
}
