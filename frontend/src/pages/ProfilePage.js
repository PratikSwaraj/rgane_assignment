import React, { useEffect, useState } from 'react';
import axios from 'axios';

const ProfilePage = () => {
    const [profile, setProfile] = useState(null);

    useEffect(() => {
        axios.get('/profile')
            .then(response => setProfile(response.data))
            .catch(error => console.error('Error fetching profile:', error));
    }, []);


    return (
        <div>
            <h1>Profiles</h1>

            {profile ? (
        <div>
            <p>Name: {profile.displayName}</p>
            <p>Email: {profile.emails[0].value}</p>
            </div>
        ) : (
            <p>Loading...</p>
        )}
        </div>
    );
};

export default ProfilePage;
