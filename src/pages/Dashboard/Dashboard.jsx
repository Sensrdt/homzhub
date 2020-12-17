import React, { Component } from 'react';
import { Line } from 'react-chartjs-2';
import Options from '../../components/OptionSelector/Options';
import { data, data1, data2, data3, data4 } from '../../constants';

export default class Dashboard extends Component {
	constructor(props) {
		super(props);
		this.state = {
			value: { label: 'This month', value: 0, earning: 100, paid: 1000 },
		};
	}

	options = [
		{ label: 'This month', value: 0, earning: 100, paid: 1000 },
		{ label: 'Last month', value: 1, earning: 200, paid: 2000 },
		{ label: 'This quarter', value: 2, earning: 300, paid: 3000 },
		{ label: 'This year', value: 3, earning: 400, paid: 4000 },
		{ label: 'Last year', value: 4, earning: 500, paid: 5000 },
	];
	onvalueChange = (value) => {
		this.setState({ ...this.state, value: value });
	};

	render() {
		console.log(this.state);
		return (
			<div className='dashboard-container'>
				<Options
					valueChange={(value) => this.onvalueChange(value)}
					options={this.options}
					value={this.state.value}
				/>

				{/* {this.state.value.value === 0 ? (
					<div>
						<div className='display-amount'>
							<h1>
								<span>Total Earning </span>
								{this.state.value.earning}
							</h1>
							<h1>
								<span> Amount Paid</span> {this.state.value.paid}
							</h1>
						</div>
						<Line ref='chart' data={data} />
					</div>
				) : this.state.value.value === 1 ? (
					<div>
						<div className='display-amount'>
							<h1>
								<span>Total Earning </span>
								{this.state.value.earning}
							</h1>
							<h1>
								<span> Amount Paid</span> {this.state.value.paid}
							</h1>
						</div>
						<Line ref='chart' data={data1} />
					</div>
				) : this.state.value.value === 2 ? (
					<div>
						<div className='display-amount'>
							<h1>
								<span>Total Earning </span>
								{this.state.value.earning}
							</h1>
							<h1>
								<span> Amount Paid</span> {this.state.value.paid}
							</h1>
						</div>
						<Line ref='chart' data={data2} />
					</div>
				) : this.state.value.value === 3 ? (
					<div>
						<div className='display-amount'>
							<h1>
								<span>Total Earning </span>
								{this.state.value.earning}
							</h1>
							<h1>
								<span> Amount Paid</span> {this.state.value.paid}
							</h1>
						</div>
						<Line ref='chart' data={data3} />
					</div>
				) : (
					<div>
						<div className='display-amount'>
							<h1>
								<span>Total Earning </span>
								{this.state.value.earning}
							</h1>
							<h1>
								<span> Amount Paid</span> {this.state.value.paid}
							</h1>
						</div>
						<Line ref='chart' data={data4} />
					</div>
				)} */}

				<div className='display-amount'>
					<h1>
						<span>Total Earning </span>
						{this.state.value.earning}
					</h1>
					<h1>
						<span> Amount Paid</span> {this.state.value.paid}
					</h1>
				</div>

				<div className='chart'>
					<Line
						ref='chart'
						width={10}
						height={2}
						data={
							this.state.value.value === 0
								? data
								: this.state.value.value === 1
								? data1
								: this.state.value.value === 2
								? data2
								: this.state.value.value === 3
								? data3
								: data4
						}
					/>
				</div>
			</div>
		);
	}
}
