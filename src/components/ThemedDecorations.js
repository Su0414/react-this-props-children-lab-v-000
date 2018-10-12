// Code ThemedDecoration Component Here
import React from 'react';

class ThemedDecoration extends React.Component{
    render() {
        const childrenWithExtraProp = React.Children.map(this.props.children, child => React.cloneElement(child, {
            className: this.props.theme,
          }));

        return (
            <div className="theme">
                {childrenWithExtraProp}
            </div>
        )
    }
}

export default ThemedDecoration;
