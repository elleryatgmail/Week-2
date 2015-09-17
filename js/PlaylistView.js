define(['jquery','Playlist'], function($,Playlist){


  var PlaylistView = function(){
    // initialize
    this.playlist = new Playlist();
    this.listenAddSong();

    this.updatePlaylist();

  };


PlaylistView.prototype.listenAddSong = function(){
  var that = this;
  $('#addSongForm').on('submit', function(event){
    that.playlist.addSong($('#song').val());
	that.updatePlaylist();
    $('#song').val('');

    return false;
  });
};



PlaylistView.prototype.updatePlaylist = function() {
	this.playlist.updatePlaylist();
    this.updatePlaylistDom();
}


PlaylistView.prototype.updatePlaylistDom = function(){
  var that = this;
  console.log(this.playlist.playlist);
  var playlistDom = this.playlist.playlist.map(function(song, index){
    var removeButton = document.createElement("button");
    removeButton.appendChild(document.createTextNode("remove"));
    $(removeButton).click(function(){
      that.playlist.removeSong(index);
      that.updatePlaylistDom();
    });
    $(removeButton).addClass("btn");

    var li = document.createElement('li');
	console.log(song.title);
    li.appendChild(document.createTextNode(song));
    li.appendChild(removeButton);
    return li;
  });

  $('#currentPlaylist').html(playlistDom);

};

   return PlaylistView;
});
