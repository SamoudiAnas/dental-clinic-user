import { useRouter } from "next/router";
import { ComponentType, useEffect } from "react";

import { decode } from "jsonwebtoken";
import { useAuthStore } from "@/stores";
import { DecodedToken } from "@/typings/interface";

const PROTECTED_PATHS = ["/my-appointments", "/new-appointment"];

const checkIfRouteIsProtected = (pathname: string) => {
  return PROTECTED_PATHS.some((path) => pathname.startsWith(path));
};

const withAuth = <P extends object>(WrappedComponent: ComponentType<P>) => {
  return (props: P) => {
    const { pathname, push } = useRouter();
    const { user, setUser } = useAuthStore();

    useEffect(() => {
      const token = localStorage.getItem("token") as string | undefined;

      // If there is no token and the route is protected, redirect to login
      if (!token && checkIfRouteIsProtected(pathname)) {
        push("/login");
      }

      // If there is a token, decode it and set the user
      if (token) {
        try {
          const decoded = decode(token ?? "") as DecodedToken;
          setUser(decoded);
        } catch (error) {
          localStorage.delete("token");
          push("/login");
        }
      }
    }, []);

    // If there is no user and the route is protected, return null
    if (!user && checkIfRouteIsProtected(pathname)) return null;

    // If there is a user and the route is protected, return the component
    // If there is no user and the route is not protected, return the component
    return <WrappedComponent {...props} />;
  };
};

export default withAuth;
