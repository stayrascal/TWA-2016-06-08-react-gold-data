import React from 'react'

class DialogBody extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            type: 'date'
        };
    }

    onTypeChange(e) {
        var type = e.currentTarget.value;
        this.setState({type: type});
    }

    addItem() {
        this.props.add(this.state.type);
        this.props.close();
    }

    render() {
        return (
            <div className="modal-content">
                <div className="modal-header">
                    <button type="button" className="close" data-dismiss="modal" aria-label="Close"
                            aria-hidden="true">x
                    </button>
                    <h4 className="modal-title">Please choose which component you want to add</h4>
                </div>

                <div className="row">
                    <div className="modal-body">
                        <label className="radio-inline">
                            <input type="radio" name="component-type" value="date" checked={this.state.type == 'date'}
                                   onChange={this.onTypeChange.bind(this)}/>DatePicker
                        </label>
                        <label className="radio-inline">
                            <input type="radio" name="component-type" value="text" checked={this.state.type == 'text'}
                                   onChange={this.onTypeChange.bind(this)}/>Text
                        </label>
                    </div>
                </div>

                <div className="modal-footer">
                    <button type="button" className="btn btn-default" data-dismiss="modal">Close</button>
                    <button type="button" className="btn btn-primary" onClick={this.addItem.bind(this)}>Choose</button>
                </div>
            </div>

        )
    }
}

export default DialogBody;