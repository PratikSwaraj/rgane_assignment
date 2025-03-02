// src/pages/HomePage.js
import React from 'react';
import { Link } from 'react-router-dom';

const HomePage = () => {
    return (
        <div style={styles.container}>
            <h1 style={styles.heading}>Welcome to the Job Posting Platform</h1>
            <p style={styles.paragraph}>Find your next job or browse talented candidates!</p>
            <div style={styles.buttons}>
                <Link to="/login" style={styles.button}>Login with LinkedIn</Link>
                <Link to="/profile" style={styles.button}>View Profile</Link>
            </div>
        </div>
    );
};

const styles = {
    container: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        minHeight: '100vh',
        backgroundColor: '#f0f0f0',
    },
    heading: {
        fontSize: '2.5rem',
        margin: '20px 0',
    },
    paragraph: {
        fontSize: '1.2rem',
        margin: '10px 0',
        textAlign: 'center',
    },
    buttons: {
        display: 'flex',
        gap: '20px',
    },
    button: {
        padding: '10px 20px',
        backgroundColor: '#0073b1',
        color: '#fff',
        textDecoration: 'none',
        borderRadius: '5px',
    },
};

export default HomePage;
