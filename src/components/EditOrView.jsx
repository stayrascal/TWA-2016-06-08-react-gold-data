import React from 'react'

class EditOrView extends React.Component {

    showEditPage () {
        $('.edit-page').show();
        $('.preview-page').hide();
    }

    showPreviewPage () {
        $('.preview-page').removeClass('hidden');
        $('.preview-page').show();
        $('.edit-page').hide();
    }

    render () {
        return (
            <div className="row">
                <div className="col-md-6">
                    <button type="button" className="btn btn-lg btn-block edit" onClick={this.showEditPage}>Edit
                    </button>
                </div>
                <div className="col-md-6">
                    <button type="button" className="btn btn-lg btn-block preview" data-toggle="modal" onClick={this.showPreviewPage}>Preview
                    </button>
                </div>
            </div>
        )
    }
}

export default EditOrView;