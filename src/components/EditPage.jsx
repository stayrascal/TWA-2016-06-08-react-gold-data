import React from 'react'
import Item from './Item.jsx';
import DialogButton from '../components/dialog/DialogButton.jsx';

class EditPage extends React.Component {

    renderItems() {
        return this.props.items.map(item => {
            return <Item
                item={item}
                key={item.index}
                remove={this.props.remove}
                edit={this.props.edit}
            />
        })
    }

    render() {
        return (
            <div className="container edit-page">
                <DialogButton />
                <div className="row box">{this.renderItems()}</div>
            </div>

        )

    }
}

export default EditPage;