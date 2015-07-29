//Template.draggableElement.rendered = function(){
//
//};

Template.dragDrop.rendered = function(){
    var containers = [
        document.querySelector('.draggable__container'),
        document.querySelector('.droppable__zone')
    ];
    //var elems = document.querySelectorAll('.draggable__component');
    //for(var i = 0; i < elems.length; i++ ){
    //
    //    containers.push(elems[i]);
    //}
    var dropZone = document.querySelector('.droppable__zone');

    dragula(containers, {
        revertOnSpill: true,
        copy:true,
        accepts: function(el, target, source, sibling){

            //
            //console.log('el =>', el);
            //console.log('target =>', target);
            //console.log('source =>', source);
            //console.log('sibling =>', sibling);

            if (dropZone.querySelectorAll('.content').length > 0
                && $(el).hasClass('.content')){
                return false;
            }
            else if(dropZone.querySelectorAll('.content').length > 0
                && !$(el).hasClass('.content')){
                return target.childElementCount < 2;
            }
            else if(target.querySelectorAll('.content').length === 0) {
                return target.childElementCount < 3;
            } else {
                return false;
            }

        }
    });
};


