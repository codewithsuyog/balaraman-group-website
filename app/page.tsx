import React from 'react';
import { Button } from 'react-bootstrap';

const HomePage = () => {
    return (
        <div style={{ textAlign: 'center', padding: '50px' }}>
            <h1>Welcome to Our Website!</h1>
            <p>Your journey to excellence starts here.</p>
            <Button variant="primary" size="lg">Get Started</Button>
        </div>
    );
};

export default HomePage;
