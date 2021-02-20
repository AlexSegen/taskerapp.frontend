import { useContext } from 'react';
import { AuthContext } from '../context/AuthContext';

export const useAuth = () => {
  const ctx = useContext(AuthContext);

  // const tokenData = SetUser.getPermissions();

  // const checkPermissions = permission => tokenData.permissions.includes(permission);

  // const isAdmin = tokenData.role === "admin";

  return {
    ...ctx,
    //permissions: tokenData.permissions,
    //isAdmin,
    //checkPermissions
  };
};