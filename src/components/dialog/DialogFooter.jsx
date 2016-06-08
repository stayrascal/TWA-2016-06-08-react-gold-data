import React from 'react'

class DialogFooter extends React.Component{

    addItem() {
        this.props.addItem()
    }

    render() {
        return (
            <div className="modal-footer">
                <button type="button" className="btn btn-default" data-dismiss="modal">Close</button>
                <button type="button" className="btn btn-primary" onclick={this.addItem}>Choose</button>
            </div>
        )
    }
}

export default DialogFooter;