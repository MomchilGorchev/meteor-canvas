Template.home.helpers({
    reactiveRotate: function() {
        return {
            value: [0, 0, 1],
            transition: { duration: 1000, curve: 'spring' },
            callback: function() {
                console.log('Rotating...!')
            }  // optional
        };
    },

    reactivePosition: function(){
        return {
            values: [0, 2, 2],
            transition: { duration: 800, curve: 'spring'},
            callback: function(){
                console.log('Scaling...!')
            }
        };
    }
});