import Footer from "@/components/common/Footer";
import Header from "@/components/common/Header";

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
