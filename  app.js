var React = require("react"), Dom = React.DOM;
var LogOutButton = require('./src/logout');
var events = require('api/events');

var Main = React.createClass({
    // this mixin provides this.emitLogout, and if we set onLogout it'll be called when "logout" is emitted
    mixins: [events.mixinFor("logout")],

    getInitialState: function(){
        return {
            user: null
        };
    },
    logIn: function(){
        this.setState({
            user: {name: "foobar"}
        });
    },

    // update our state when the login event is emitted
    onLogout: function(){
        this.setState({
            user: null
        });  
    },
    render: function() {
        var user = this.state.user;

        return Dom.div(null, 
            user && Dom.span(null, "Hi " + user.name),
            user && LogOutButton(),
            !user && Dom.button({onClick: this.logIn},
            "log in")
        );
    }
});

React.renderComponent(Main(), document.body);