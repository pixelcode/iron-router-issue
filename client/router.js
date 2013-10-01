Router.map(function() {
    this.route('home', {
        path: '/'
    });
});

Router.map(function() {
    this.route('profile', {
        path: '/profile/',
        controller: 'ProfileController',
        action: 'show'
    });
});

ProfileController = RouteController.extend({
    data: function() {
        return Meteor.user();
    },
    show: function() {
        if (Meteor.user()) {
            this.render();
        } else {
            Router.go("home");
        }
    }
});
