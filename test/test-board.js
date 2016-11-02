var React = require('react');
var TestUtils = require('react-addons-test-utils');
var should = require('chai').should();

var Board = require('../js/components/board');


describe('Board component', function() {
    it('Renders a board component',  function() {
    	var title = "Title Test";

    	var renderer = TestUtils.createRenderer();
        renderer.render(<Board title={title} />);
        var result = renderer.getRenderOutput();       
       
    });
});
