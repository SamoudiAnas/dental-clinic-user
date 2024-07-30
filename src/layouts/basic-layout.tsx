import Footer from "@/components/layouts/footer";
import Header from "@/components/layouts/header/header";
import withAuth from "@/hooks/with-auth";
import { AnimatePresence, motion } from "framer-motion";
import { useRouter } from "next/router";
import { Fragment } from "react";

interface BasicLayoutProps {
  children: React.ReactNode;
  isTransparentBg?: boolean;
}

const BasicLayoutComp = ({ children, isTransparentBg }: BasicLayoutProps) => {
  const { pathname } = useRouter();

  return (
    <Fragment>
      <Header isTransparentBg={isTransparentBg} />
      {children}
      <Footer />
    </Fragment>
  );
};

const BasicLayout = withAuth(BasicLayoutComp);

export default BasicLayout;
