/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from "react";
import { Navigate, useOutlet } from "react-router-dom";
import { setToken } from "../../services/authSlice";
import { useAppDispatch } from "../../services";
import { useAuth } from "../../utils/useAuth";
import { getCurrentUser } from "../../services/authSlice/api";

export const ProtectedLayout = () => {
  const { token } = useAuth() as any;
  const outlet = useOutlet();
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (token) {
      dispatch(getCurrentUser());
      dispatch(setToken(token));
    }
  }, []);

  if (!token) {
    return <Navigate to="/login" />;
  }

  return <div>{outlet}</div>;
};
