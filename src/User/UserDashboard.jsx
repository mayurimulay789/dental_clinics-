import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import axios from 'axios';

 const UserDashboard = () => {
  const [profile, setProfile] = useState(null);
  const { user } = useSelector((state) => state.auth);

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const { data } = await axios.get('http://localhost:5000/api/users/profile', {
          headers: { Authorization: `Bearer ${user.token}` },
        });
        setProfile(data);
      } catch (error) {
        console.error('Error fetching profile:', error);
      }
    };
    fetchProfile();
  }, [user]);

  if (!profile) return <div>Loading...</div>;

  return (
    <div className="container mx-auto mt-8">
      <h1 className="mb-4 text-3xl font-bold">User Dashboard</h1>
      <div>
        <p><strong>Name:</strong> {profile.name}</p>
        <p><strong>Email:</strong> {profile.email}</p>
        <p><strong>Role:</strong> {profile.role}</p>
      </div>
    </div>
  );
};

export default UserDashboard;