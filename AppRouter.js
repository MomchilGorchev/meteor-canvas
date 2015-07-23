Router.configure({
    layoutTemplate: "mainLayout",
    loadingTemplate: "loading"
    //notFoundTemplate: "missing"
});

Router.map(function(){

    this.route('drag-n-drop', {
        path: '/drag-n-drop',
        template: 'dragDrop'
    });

    this.route('canvas', {
        path: '/canvas'
    });

});