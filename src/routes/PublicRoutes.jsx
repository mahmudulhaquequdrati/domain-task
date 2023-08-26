/* eslint-disable react/prop-types */
import { useSelector } from "react-redux";
import { Navigate, useLocation } from "react-router-dom";
import { useProfile } from "../components/hooks/userHooks";

// do profType validation here

const PublicRoute = ({ children }) => {
  const location = useLocation();
  const { loading } = useProfile();

  const state = useSelector((state) => state.auth);

  const { user, accessToken } = state || {};

  if (loading) {
    return;
  }

  return user && accessToken && !loading ? (
    <Navigate to={{ pathname: "/", state: { from: location } }} />
  ) : (
    children
  );
};

export default PublicRoute;
