Template.draggableElement.rendered = function(){

    $('.draggable__component.header').draggable({
        containment: 'body',
        cursor: 'crosshair',
        revert: 'invalid',
        zIndex: 100,
        start: function(ev, ui){
            ui.helper.addClass('dragging');
        }
    });

    $('.draggable__component.content').draggable({
        containment: 'body',
        cursor: 'crosshair',
        revert: 'invalid',
        zIndex: 100,
        start: function(ev, ui){
            ui.helper.addClass('dragging');
        }
    });

    $('.draggable__component.footer').draggable({
        containment: 'body',
        cursor: 'crosshair',
        revert: 'invalid',
        zIndex: 100,
        start: function(ev, ui){
            ui.helper.addClass('dragging');
        }
    });


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