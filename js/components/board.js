var React = require('react');
var ReactDOM = require('react-dom');

var List = require('./list');

	var Board = React.createClass({

       onAddInputChanged: function(){
              console.log("On Add Input Changed Callback!");
       },

       onAddSubmit: function(e){
              e.preventDefault();
              console.log("On Add Submit Callback!");
       },          

	render: function(){

       
	
       return(
       	<div>
                     <h1>{this.props.title}</h1>
       		<List title={this.props.lists[0]} cards={["List1 Card1", "List1 Card2", "List1 Card3"]} onAddInputChanged={this.onAddInputChanged} onAddSubmit={this.onAddSubmit}/>
       		<List title={this.props.lists[1]} cards={["List2 Card1", "List2 Card2", "List2 Card3"]} onAddInputChanged={this.onAddInputChanged} onAddSubmit={this.onAddSubmit}/>
       		<List title={this.props.lists[2]} cards={["List3 Card1", "List3 Card2", "List3 Card3"]} onAddInputChanged={this.onAddInputChanged} onAddSubmit={this.onAddSubmit}/>
       	</div>
       	)
	}
});

module.exports = Board;