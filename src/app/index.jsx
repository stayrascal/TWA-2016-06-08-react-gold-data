import React from 'react';
import {render} from 'react-dom';
import Controller from '../components/Controller.jsx';
import EditPage from '../components/EditPage.jsx';
import PreviewPage from '../components/PreviewPage.jsx';


class App extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            status: 'edit',
            items: [{
                type: 'date',
                value: '2016-12-11',
                index: 1465224234195
            }, {
                type: 'text',
                value: 'hello world',
                index: 1465224234196
            }]
        };
    }

    updateItem(itemIndex, value) {
        let item = this.state.items.filter(item => item.index === itemIndex)[0];
        item.value = value;
        this.setState(this.state);
    }

    addItem(type) {
        let item = {'type': type, 'value': '', 'index': new Date().getTime()};
        this.state.items.push(item);
        this.setState(this.state);
    }


    removeItem(index) {
        let items = this.state.items.filter(item => item.index !== index);
        this.setState({items: items});
    }

    changeStatus(status) {
        this.setState({
            status: status
        })
    }

    renderContent() {
        if (this.state.status === 'edit') {
            return <EditPage
                items={this.state.items}
                edit={this.updateItem.bind(this)}
                remove={this.removeItem.bind(this)}
            />
        } else {
            return <PreviewPage
                items={this.state.items}
            />
        }
    }

    render() {
        return (
            <div>
                <Controller
                    items={this.state.items}
                    add={this.addItem.bind(this)}
                    changeStatus={this.changeStatus.bind(this)}
                />
                {this.renderContent()}
            </div>

        )
    }
}

render(<App />, document.getElementById('content'));