import React, { createContext, useContext, useState } from 'react';

const UserContext = createContext();

export const UserProvider = ({ children }) => {
  // Mock user info
  const [user, setUser] = useState({
    name: 'Taro',
    avatar: '',
    // Thêm các trường khác nếu cần
  });

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUser = () => useContext(UserContext); 