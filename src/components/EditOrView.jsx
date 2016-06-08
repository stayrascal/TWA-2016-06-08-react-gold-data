import React from 'react'

class EditOrView extends React.Component {

    showEditPage() {
        this.props.changeStatus('edit');
    }

    showPreviewPage() {
        this.props.changeStatus('preview');
    }

    render() {
        return (
            <div className="row">
                <div className="col-md-6">
                    <button type="button" className="btn btn-lg btn-block edit" onClick={this.showEditPage.bind(this)}>Edit
                    </button>
                </div>
                <div className="col-md-6">
                    <button type="button" className="btn btn-lg btn-block preview" data-toggle="modal"
                            onClick={this.showPreviewPage.bind(this)}>Preview
                    </button>
                </div>
            </div>
        )
    }
}

export default EditOrView;