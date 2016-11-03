var React = require('react');
var TestUtils = require('react-addons-test-utils');
var should = require('chai').should();

var Card = require('../js/components/card');



describe('Card component', function() {
    it('Renders Card component',  function() {
    	
    	var renderer = TestUtils.createRenderer();
        renderer.render(<Card />);
        var result = renderer.getRenderOutput();

        var card = result.type.should.equal("div");
        
             
    });
});
