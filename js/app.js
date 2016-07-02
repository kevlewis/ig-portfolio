$(function() {
 
    //Set up instafeed
    var feed = new Instafeed({
        // clientId: '4ac90f2e6c0543ccabce6da17bfd6ad4',
        target: document.getElementsByClassName('instafeed')[0],
        get: 'user',
        userID: '2735032382',
        accessToken: '2735032382.4ac90f2.6bc0e104e743419cb420fa57d10b3c6d',
        useHttp: true,
        links: true,
        limit: 8,
        sortBy: 'most-recent',
        resolution: 'standard_resolution',
        template: '<div class="col-xs-12 col-sm-6 col-md-4 col-lg-3"><div class="photo-box"><div class="image-wrap"><a href="{{link}}"><img src="{{image}}"></a><div class="likes">{{likes}} Likes</div></div><div class="description">{{caption}}<div class="date">{{model.date}}</div></div></div></div>',
        
    });
    feed.run();
 
});