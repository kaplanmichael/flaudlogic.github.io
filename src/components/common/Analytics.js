import React from 'react';

export default class Analytics extends React.Component {
    render () {
        return (
            <div dangerouslySetInnerHTML={{ __html: '<!-- comment text -->' }} />
        );
    }

}