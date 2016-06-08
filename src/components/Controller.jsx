import React from 'react';
import Dialog from '../components/dialog/Dialog.jsx';
import EditOrView from '../components/EditOrView.jsx';

class Controller extends React.Component {

    render() {
        return (
            <div className="container">
                <EditOrView
                    changeStatus={this.props.changeStatus}
                />
                <Dialog
                    items={this.props.items}
                    add={this.props.add}
                />
            </div>
        )
    }
}

export default Controller;