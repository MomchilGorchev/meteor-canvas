Template.draggableElement.rendered = function(){

    var options = {
        containment: 'body',
        cursor: 'crosshair',
        revert: 'invalid',
        zIndex: 100,
        start: function(ev, ui){
            ui.helper.addClass('dragging');
        }
    };

    $('.draggable__component.header').draggable(options);

    $('.draggable__component.content').draggable(options);

    $('.draggable__component.footer').draggable(options);

};

Template.dragDrop.rendered = function(){

    $('.droppable__header').droppable({
        zIndex: 60,
        accept: ".draggable__component.header"
    });

    $('.droppable__content').droppable({
        zIndex: 60,
        accept: '.draggable__component.content'
    });

    $('.droppable__footer').droppable({
        zIndex: 60,
        accept: '.draggable__component.footer'
    });
};