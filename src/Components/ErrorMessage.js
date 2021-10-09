 import React from 'react';
import Alert from 'react-bootstrap/Alert'

class ErrorMessage extends React.Component {

    render() {
        return (
            <>
                {(this.props.errorAlert) ?
                    <Alert variant="danger" onClose={this.props.onErrorClose} dismissible>
                        <Alert.Heading></Alert.Heading>
                        <p>
                            {this.props.errorCode}
                        </p>
                    </Alert>
                    : ''
                }
            </>


        )
    }
}

export default ErrorMessage;
