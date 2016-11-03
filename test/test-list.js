var React = require('react');
var TestUtils = require('react-addons-test-utils');
var should = require('chai').should();

var List = require('../js/components/list');



describe('List component', function() {
    it('Renders List component',  function() {
    	var card = ["Test", "Test2", "Test3"];

    	var renderer = TestUtils.createRenderer();
        renderer.render(<List card={card} />);
        var result = renderer.getRenderOutput();

        var form = result.props.children[2];
        form.type.should.equal("form");
        var form_input = form.props.children[0];
        form_input.type.should.equal("input");
        var form_button = form.props.children[1];
        form_button.type.should.equal("button");

        var test = form_input.type.text;
        test = "giraffe";
        test.should.equal(test);

        // how to check for button clicked

        TestUtils.isElementOfType(result, React);
        
                   
    });
});
