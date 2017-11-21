import React, { Component } from 'react'
import { Input, Button, Icon } from 'antd'
import store from '../store'
import { increase, decrease } from './actions'

class Test extends Component {
    constructor(props) {
        super(props);

        this.state = { value: store.getState().value };
    }

    componentDidMount() {
        store.subscribe(() => {
            this.setState({
                value: store.getState().value
            });
        });
    }

    onIncrease() {
        store.dispatch(increase());
    }

    onDecrease() {
        store.dispatch(decrease());
    }

    render() {
        return (
            <div>
                <Input prefix={<Icon type="user" />} style={{ width: 200 }} value={this.state.value} />
                <Button type="primary" style={{ marginLeft: 10 }} onClick={this.onIncrease}>Increase</Button>
                <Button type="primary" style={{ marginLeft: 10 }} onClick={this.onDecrease}>Decrease</Button>
            </div>
        );
    }
}

export default Test;