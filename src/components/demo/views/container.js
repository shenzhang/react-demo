import { connect } from 'react-redux'
import Demo from './demo'
import { increase, decrease } from '../actions'

const mapStateToProps = state => {
    return {
        value: state.value
    }
};

const mapDispatchToProps = {
    onIncrease: () => increase(),
    onDecrease: () => decrease()
};

const DemoContainer = connect(mapStateToProps, mapDispatchToProps)(Demo);

export default DemoContainer;