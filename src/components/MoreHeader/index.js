import React, { Component } from 'react';
import { Link } from 'react-router';

/* component styles */
import { styles } from './styles.scss';

export class MoreHeader extends Component {
    render() {
        return (
            <header className="head">
                <div className="container">
                    阳光校园
                </div>
            </header>
        );
    }
}
