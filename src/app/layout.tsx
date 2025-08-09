import RootLayoutApp from "../core/layout/root.layout";

export default function RootLayout({children}: { children: React.ReactNode;
}) {
  return (
    <RootLayoutApp>{children}</RootLayoutApp>
  );
}
