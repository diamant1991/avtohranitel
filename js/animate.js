$('.feat-block')
         .waypoint( function(dir) {
             if ( dir === 'down' )
                 $(this)
                 .removeClass('fadeOut')
                 .addClass('fadeIn');
             else
                 $(this)
                 .removeClass('fadeIn')
                 .addClass('fadeOut');
         }, {
             offset: '80%'
         })
 
         .waypoint( function(dir) {
             if ( dir === 'down' )
                 $(this)
                 .removeClass('fadeIn')
                 .addClass('fadeOut');
             else
                 $(this)
                 .removeClass('fadeOut')
                 .addClass('fadeIn');
         }, {
             offset: -50
         })