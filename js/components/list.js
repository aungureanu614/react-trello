var React = require('react');
var ReactDOM = require('react-dom');

var Card = require('./card');

	var List = React.createClass({
	render: function(){

       return(
       		<div>
       			<Card />
       			<Card />
       			<Card />
       		</div>
       	)
	}
});

module.exports = List;