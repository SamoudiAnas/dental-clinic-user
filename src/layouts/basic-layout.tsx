import Footer from "@/components/layouts/footer";
import Header from "@/components/layouts/header";

interface BasicLayoutProps {
  children: React.ReactNode;
  isTransparentBg?: boolean;
}

export default function BasicLayout({
  children,
  isTransparentBg,
}: BasicLayoutProps) {
  return (
    <>
      <Header isTransparentBg={isTransparentBg} />
      {children}
      <Footer />
    </>
  );
}
