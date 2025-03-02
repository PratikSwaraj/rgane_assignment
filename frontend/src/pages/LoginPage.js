// src/pages/LoginPage.js
import React from 'react';

const LoginPage = () => {
    return (
        <div style={styles.container}>
            <a href="http://localhost:3000/auth/linkedin" style={styles.button}>Login with LinkedIn</a>
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
    button: {
        padding: '10px 20px',
        backgroundColor: '#0073b1',
        color: '#fff',
        textDecoration: 'none',
        borderRadius: '5px',
    },
};

export default LoginPage;
