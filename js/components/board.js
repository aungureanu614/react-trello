var React = require('react');
var ReactDOM = require('react-dom');

var ListContainer = require('./list-container');

	var Board = React.createClass({

       
	render: function(){
	
       return(
       	<div>
                   <h1>{this.props.title}</h1>
                   
       		<ListContainer title={this.props.lists[0]} />
                     <ListContainer title={this.props.lists[1]} />
                     <ListContainer title={this.props.lists[2]} />
       	      
              </div>
       	)
	}
});

module.exports = Board;