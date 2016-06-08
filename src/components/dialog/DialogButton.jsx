import React from 'react'

class DialogButton extends React.Component {

    render() {
        return (
            <div className="row">
                <div className="alert-info">
                    <button type="button" className="btn btn-info btn-lg btn-block add-component" data-toggle="modal"
                            data-target="#myModal">Add
                    </button>
                </div>
            </div>
        )
    }
}

export default DialogButton;