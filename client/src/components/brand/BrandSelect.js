import React from 'react'
import { connect } from 'react-redux'
import { Select } from 'antd'
import { changeBrand } from './actions'

const brands = [
	'阿迪达斯',
	'耐克',
	'阿斯克斯'
];

class BrandSelect extends React.Component {
	render() {
		return (
			<div style={{ display: 'inline-block' }}>
				<span>品 牌:</span>
				&nbsp;
				<Select style={{ width: 120 }} defaultValue={this.props.selected} onChange={this.props.changeBrand}>
				{
					brands.map(brand => <Select.Option key={brand} value={brand}>{brand}</Select.Option>)
				}
				</Select>
			</div>
		);
	}
}

const mapStateToProps = (state) => {
	return {
		selected: state.selectedBrand ? state.selectedBrand : brands[0]
	}
};

const mapDispatchToProps = (dispatch, ownProps) => {
	return {
		changeBrand: (brand) => dispatch(changeBrand(brand))
	};
};


export default connect(mapStateToProps, mapDispatchToProps)(BrandSelect);