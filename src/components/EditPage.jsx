import React from 'react'
import Item from './Item.jsx';

class EditPage extends React.Component {

    removeItem(key) {
        this.props.items.forEach((item, i) => {
           if (item.index == key){
               this.props.items.splice(i,1);
           }
        });

        this.props.edit();
    }

    renderItems() {
        return this.props.items.map(item => {
            return <Item item={item} key={item.index} remove={this.removeItem.bind(this)} edit={this.props.edit}/>
        })
    }

    render() {
        return (
            <div className="container edit-page">
                <div className="row box">{this.renderItems()}</div>
            </div>

        )

    }
}

export default EditPage;