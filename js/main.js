// For any third party dependencies, like jQuery, place them in the js folder.

// Configure loading modules from the lib directory,
// except for 'app' ones, which are in a sibling
// directory.
requirejs.config({
    baseUrl: 'js',
    paths: {
          jquery: 'vendors/jquery.min',
       bootstrap: 'vendors/bootstrap.min'
    },
    "shim": {
		        "bootstrap": ["jquery"]
	        }
});

// Start loading the main app file. Put all of
// your application logic in there.
//requirejs(['app/main']);

require(['PlaylistView', 'bootstrap'], function(PlaylistView){

   $(function(){

     var playlist = new PlaylistView();

   });

});