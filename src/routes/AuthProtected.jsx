/* eslint-disable react/prop-types */
import { useSelector } from "react-redux";
import { Navigate, useLocation } from "react-router-dom";
import { useProfile } from "../components/hooks/userHooks";

const AuthProtected = ({ children }) => {
  const location = useLocation();
  // const { userProfile, loading } = useProfile();
  const { loading } = useProfile();

  const state = useSelector((state) => state.auth);

  const { user, accessToken } = state || {};

  if (loading) {
    return;
  }

  return !user && !accessToken && !loading ? (
    <Navigate to={{ pathname: "/register", state: { from: location } }} />
  ) : (
    children
  );
};

export default AuthProtected;
