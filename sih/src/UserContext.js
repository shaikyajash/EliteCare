import React, { createContext, useContext, useState, useEffect } from 'react';
import { endPoints, axiosInstance } from './services/api'; 

export const UserContext = createContext(null);

const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const storedUser = localStorage.getItem('user');
    const token = document.cookie.match(/token=([^;]+)/)?.[1];

    if (storedUser && token) {
      setUser(JSON.parse(storedUser));
    }
  }, []);

  const login = async (email, password) => {
    const response = await axiosInstance.post(endPoints.LOGIN, { email, password });
    const { token, user } = response.data;
    localStorage.setItem('user', JSON.stringify(user));
    document.cookie = `token=${token}`;
    setUser(user);

  };

  const signup = async (name, email, password) => {
    const response = await axiosInstance.post(endPoints.SIGNUP, { name, email, password });
    const { token, user } = response.data;
    localStorage.setItem('user', JSON.stringify(user));
    document.cookie = `token=${token}`;
    setUser(user);  
  };

  const logout = async () => {
    localStorage.removeItem('user');
    document.cookie = 'token=;expires=Thu, 01 Jan 1970 00:00:01 GMT;';
    setUser(null);
  };

  return (
    <UserContext.Provider value={{ user, login, signup, logout }}>
      {children}
    </UserContext.Provider>
  );
}

// Custom hook to use user context
export function useUser() {
  return useContext(UserContext);
}

// Ensure these lines do not conflict
export { UserProvider }; // Only export UserProvider here
