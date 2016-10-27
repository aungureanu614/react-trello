var React = require('react');
var ReactDOM = require('react-dom');

var List = require('./list');

var ListContainer = React.createClass({
	getInitialState: function(){
		return{
			text: " ",
			cards: []
		};
	},

	onAddInputChanged: function(event){
              this.setState({
              	text: event.target.value
              })
              
              console.log("On Add Input Changed Callback!")
       },

       onAddSubmit: function(e){
              e.preventDefault();
              var cards = this.state.cards;
              cards.push(this.state.text);
          	   this.setState({
          	   	 cards: cards
          	   })
              console.log(this.state.cards);
       },          

	
	render: function(){
		return(
			<div>
				<h2>{this.props.title}</h2>
				<List cards={this.state.cards} onAddInputChanged={this.onAddInputChanged} onAddSubmit={this.onAddSubmit}/>
				
			</div>
			) 
	}

});

module.exports = ListContainer;