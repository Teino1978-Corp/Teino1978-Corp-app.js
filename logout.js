var React = require("react"), Dom = React.DOM;
var events = require('api/events');

var Logout = React.createClass({
    mixins: [events.mixinFor("logout")],
    render: function() {
        window.x = this

        // directly bind our event to a button click event
        return Dom.button({
            onClick: this.emitLogout
        }, 'log out');
    }
});

module.exports = Logout;