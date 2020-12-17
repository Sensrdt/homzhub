import React, { Component } from 'react';
import Select from 'react-select';

export default class Options extends Component {
	render() {
		console.log(this.props);
		return (
			<div>
				<Select
					options={this.props.options}
					value={this.props.value}
					onChange={(value) => this.props.valueChange(value)}
					defaultValue={{ label: 2002, value: 2002 }}
				/>
			</div>
		);
	}
}
