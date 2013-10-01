Template.header.events({
    'click #home': function(e) {
        e.preventDefault();
        Router.go("home");
    },
    'click #profile': function(e) {
        e.preventDefault();
        Router.go("profile");
    }
});
