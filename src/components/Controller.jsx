import React from 'react';
import Dialog from '../components/dialog/Dialog.jsx';
import DialogButton from '../components/dialog/DialogButton.jsx';
import EditOrView from '../components/EditOrView.jsx';

class Controller extends React.Component {

    render() {
        return (
            <div className="container">
                <EditOrView />
                <Dialog items={this.props.items} add={this.props.add}/>
                <DialogButton />
            </div>
        )
    }
}

export default Controller;