var React = require('react');
var TestUtils = require('react-addons-test-utils');
var should = require('chai').should();

var Board = require('../js/components/board');


describe('Board component', function() {
    it('Renders a board component',  function() {
    	var title = "Title Test";
    	var lists = ["List1", "List2", "List3"];

    	var renderer = TestUtils.createRenderer();
        renderer.render(<Board title={title} lists={lists} />);
        var result = renderer.getRenderOutput(); 

        var board_title = result.props.children[0];
        board_title.type.should.equal("h1");
        board_title.props.children.should.equal(title);

        var board_list = result.props.children[1];
        for(var i = 0; i < board_list.length; i++){
      	board_list[i].props.title.should.equal("List"+ i);
    }

             
    });
});
