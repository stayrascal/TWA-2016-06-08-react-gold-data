import React from 'react';
import ItemView from './ItemView.jsx';

class PreviewPage extends React.Component {


    renderItems() {
        return this.props.items.map(item => {
            return <ItemView item={item} key={item.index}/>
        })
    }

    render() {
        return (
            <div className="container preview-page hidden">
                <div className="row box">{this.renderItems()}</div>
            </div>

        )

    }
}

export default PreviewPage;