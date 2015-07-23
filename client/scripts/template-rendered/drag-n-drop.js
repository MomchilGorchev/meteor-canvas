Template.draggableElement.rendered = function(){

    $('.draggable__component').draggable({
        containment: '#dnd-container',
        cursor: 'crosshair',
        revert: 'invalid',
        snap: true,
        snapMode: 'outer',
        snapTolerance: 20,
        zIndex: 100
    });


};

Template.dragDrop.rendered = function(){

    $('.droppable__zone').droppable({
        zIndex: 60
    }).sortable();
};