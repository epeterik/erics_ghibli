import React from 'react';
import '../ui-toolkit/css/nm-cx/main.css';

export const ErrorEncountered = (props) => {
    if (props.isError)
    {
        return (
            <h1>An error was encountered while communicating with Studio Ghibli :(</h1>
            );
    }
    else
    {
        return (
            <div></div>
        );
    }
}