var React = require('react');
var ReactDOM = require('react-dom');

var Card = require('./card');


var List = React.createClass({


render: function(){

return(
       <div>
              
              <Card text={this.props.cards}/>
              
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