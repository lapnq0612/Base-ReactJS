import React, { FC } from 'react';

const App: FC = () => {
    const fullname = 'My test';
    return (
        <div>
            <h1>{fullname}</h1>
            <h2>POST: {process.env.HOST}</h2>
        </div>
    );
};

export default App;
