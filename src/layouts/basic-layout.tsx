import Footer from "@/components/layouts/footer";
import Header from "@/components/layouts/header/header";
import { API_URL } from "@/constants/api";
import { queryKeys } from "@/constants/queryKeys";
import { useAuthStore } from "@/stores";
import { User } from "@/typings/types";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { Fragment, useEffect } from "react";

interface BasicLayoutProps {
  children: React.ReactNode;
  isTransparentBg?: boolean;
}

const getUser = async () => {
  const res = await axios.get(API_URL + "/auth/user", {
    withCredentials: true,
  });
  return res.data as User;
};

const BasicLayout = ({ children, isTransparentBg }: BasicLayoutProps) => {
  const { setUser } = useAuthStore();

  const { data } = useQuery({
    queryKey: [queryKeys.user],
    queryFn: getUser,
    retry: false,
    staleTime: 1000 * 60 * 60 * 24, // 24 hours
  });

  useEffect(() => {
    if (data) {
      setUser(data);
    }
  }, [data, setUser]);

  return (
    <Fragment>
      <Header isTransparentBg={isTransparentBg} />
      {children}
      <Footer />
    </Fragment>
  );
};

export default BasicLayout;
