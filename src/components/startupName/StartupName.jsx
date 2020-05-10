import React from 'react';

import './startup-name.css';

export const StartupName = ({ startupName }) => {
    return (
        <div className="result-card">
            {startupName}
        </div>
    )
}