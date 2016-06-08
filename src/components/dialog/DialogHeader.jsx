import React from 'react';

class DialogHeader extends React.Component {

    render() {
        return (
            <div className="modal-header">
                <button type="button" className="close" data-dismiss="modal" aria-label="Close" aria-hidden="true">x
                </button>
                <h4 className="modal-title">Please choose which component you want to add</h4>
            </div>
        )
    }
}

export default DialogHeader;