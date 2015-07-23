Template.draggableElement.rendered = function(){

    $('.draggable__component.header').draggable({
        containment: '#dnd-container',
        cursor: 'crosshair',
        revert: 'invalid',

        zIndex: 100
    });

    $('.draggable__component.content').draggable({
        containment: '#dnd-container',
        cursor: 'crosshair',
        revert: 'invalid',

        zIndex: 100
    });

    $('.draggable__component.footer').draggable({
        containment: '#dnd-container',
        cursor: 'crosshair',
        revert: 'invalid',

        zIndex: 100
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