var React = require('react');
var ListItem = require('./ListItem.jsx');
var HTTP = require ('../services/httpservice');

var List = React.createClass({
    getInitialState: function() {
        return {list:[]}
    },
    componentWillMount: function() {
        HTTP.get('/list')
        .then(function(data) {
            this.setState({list: data});
        }.bind(this));
    },
    render: function() {
        var itemList = this.state.list.map(function(item) {
            return <ListItem key={item.id} bone={item.text} />;
    });

    return (<ul>{itemList}</ul>);
  }
});

module.exports = List;
