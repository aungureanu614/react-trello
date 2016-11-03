var React = require('react');
var TestUtils = require('react-addons-test-utils');
var should = require('chai').should();

var ListContainer = require('../js/components/list-container');



describe('ListContainer component', function() {
    it('Renders ListContainer component',  function() {
    	var title = "A Test Title";
        var cards = ["Test1", "Test2", "Test3"];
        var text = "Test4";

        var onAddSubmit = function(){return onAddSubmit;};
        var onAddInputChanged = function(){return onAddInputChanged;};

    	var renderer = TestUtils.createRenderer();
        renderer.render(<ListContainer title={title} />);
        var result = renderer.getRenderOutput();

        var list_title = result.props.children[0];
        list_title.type.should.equal("h2");
        list_title.props.children.should.equal(title);
       
        //how to check that functions are working?
             
    });
});
