var React = require('react');
var ReactDOM = require('react-dom');

var List = require('./list');

	var Board = React.createClass({
	render: function(){

       return(
       		<div>
       			<List />
       			<List />
       			<List />
       		</div>
       	)
	}
});

module.exports = Board;