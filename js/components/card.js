var React = require('react');
var ReactDOM = require('react-dom');

var Card = React.createClass({
	render: function(){

       return(
       		<div>
       			{this.props.text}

       		</div>
       	)
	}
});

module.exports = Card;