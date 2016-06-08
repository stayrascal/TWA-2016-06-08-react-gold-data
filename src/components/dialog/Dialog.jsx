import React from 'react';
import DialogBody from './DialogBody.jsx';
import DialogHeader from './DialogHeader.jsx';
import DialogFooter from './DialogFooter.jsx';

class Dialog extends React.Component{


    closeDialog (){
        $('#myModal').modal('toggle');
    }

    render() {
        return (
            <div className="modal fade" role="dialog" id="myModal">
                <div className="modal-dialog">
                    <DialogBody items={this.props.items} close={this.closeDialog} add={this.props.add}/>
                </div>
            </div>
        )
    }
}

export default Dialog