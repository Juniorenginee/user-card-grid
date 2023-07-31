import React, { useState } from 'react';
import Navbar from './Navbar';
import UserGrid from './UserGrid';
import { getUsers } from './api';
import styled from 'styled-components'; // Import the styled-components library
import './App.css';

const LoaderContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 200px;
`;

const App = () => {
  const [users, setUsers] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const handleGetUsers = async () => {
    setIsLoading(true);
    try {
      const response = await getUsers(1); // Fetch users from page 1
      setUsers(response.data.data);
      setIsLoading(false);
    } catch (error) {
      console.error('Error fetching users:', error);
      setIsLoading(false);
    }
  };

  return (
    <div className="App">
      <Navbar onGetUsers={handleGetUsers} />
      {isLoading ? (
        <LoaderContainer>
          {/* Adjust the size and color of the loader as needed */}
          <div className="loader" />
        </LoaderContainer>
      ) : (
        <UserGrid users={users} />
      )}
    </div>
  );
};

export default App;
