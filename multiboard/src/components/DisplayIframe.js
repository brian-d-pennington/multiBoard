import React from 'react';

class DisplayIframe extends React.Component {
    iframe = () => {
        return {
          __html: this.props.iframe
        }
      }
    
    render() {
    return (
        <div>
            <div dangerouslySetInnerHTML={ this.iframe() } />
        </div>
    );
    }
}

export default DisplayIframe;