var React = require('react');

var NavThirdLevel = React.createClass({
	render: function () {
		return (
				<li>
					<a href={this.props.button.href}>{this.props.button.buttonName}</a>
				</li>
		)
	}
});

module.exports = NavThirdLevel;