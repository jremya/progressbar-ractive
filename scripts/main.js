var progressbars = [
            { name: 'progress1', amount: 0 },
            { name: 'progress2', amount: 0 },
	    { name: 'progress3', amount: 0 }
        ];
		
var ractive = new Ractive({
    el: '#container',
    template: '#template',
    data: {
        progressbars: progressbars,
	selectedProgress: 0,
        amounts: [ +25, +10, -10, -25 ]
    },
    adjust: function ( d ) {
        var selected = this.get( 'selectedProgress' );
		
        var keypath = 'progressbars[' + selected + '].amount';
		
        this.add( keypath, d );	

	if(ractive.get('progressbars[' + selected + '].amount') < 0 ){
	    ractive.set('progressbars[' + selected + '].amount', 0);	
	}				
    }
});
