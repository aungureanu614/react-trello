var React = require('react');
var ReactDOM = require('react-dom');

var Card = require('./card');

var List = React.createClass({


render: function(){

return(
       <div>
              <h2>{this.props.title}</h2>
              <Card text={this.props.cards[0]}/>
              <Card text={this.props.cards[1]}/>
              <Card text={this.props.cards[2]}/>
              <br/>

              <form>
                     <input type="text" onChange={this.props.onAddInputChanged}></input>
                     <button onClick={this.props.onAddSubmit}>Submit</button>
              </form>

       </div>
       )
}
});

module.exports = List;