import React, { useEffect, useState } from 'react';
import { fetchLinkedInProfile } from '../api/dataService';

const LinkedInProfile = () => {
  const [profile, setProfile] = useState(null);

  useEffect(() => {
    const loadProfile = async () => {
      const data = await fetchLinkedInProfile();
      setProfile(data);
    };

    loadProfile();
  }, []);

  return (
    <div>
      <h2>LinkedIn Profile</h2>
      {profile ? <pre>{JSON.stringify(profile, null, 2)}</pre> : <p>Loading...</p>}
    </div>
  );
};

export default LinkedInProfile;
