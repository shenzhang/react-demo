import React from 'react'
import PropTypes from 'prop-types'

import { Input, Button, Icon } from 'antd'

const Demo = ({ onIncrease, onDecrease, value = 0 }) => {
    return (
        <div>
            <Input prefix={<Icon type="user" />} style={{ width: 200 }} value={value} />
            <Button type="primary" style={{ marginLeft: 10 }} onClick={onIncrease}>Increase</Button>
            <Button type="primary" style={{ marginLeft: 10 }} onClick={onDecrease}>Decrease</Button>
        </div>
    );
};

Demo.propTypes = {
    onIncrease: PropTypes.func.isRequired,
    onDecrease: PropTypes.func.isRequired,
    value: PropTypes.number
}

export default Demo;