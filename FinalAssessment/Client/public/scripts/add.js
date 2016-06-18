var React=require('react');
var SearchInput=require('./searchInput');
var Reflux=require('reflux');
var Actions=require('./actions');
var Store=require('./store');


var Add = React.createClass({
  mixins:[Reflux.listenTo(Store,"onStore")],
    getInitialState:function(){
      return{
        newMovie:[],
          added:false
      }
    },

    onStore: function(data){
      this.setState({newMovie:data.movieList});
      this.setState({added:data.added});
    },

  render :function(){
    return(<div>


        <div className="newAdd">
        // <div className="moviePoster col-lg-4">
        //   <img src={this.state.newMovie.Poster && this.state.newMovie.Poster != "" ? this.state.newMovie.Poster : '/images/image-placeholder.png' } id='posterImage' alt='Movie Poster' className="img-circle" />
        // </div>
        <form id="addMovieForm">

        <div className="movieDetails col-lg-8">
          <div className="row">
            <div className="col-lg-12 editItem">
                <input type="text" className="form-control" defaultValue={this.state.blogBody.Title}
                name="Title" id="blogTitle" title="Movie Title" placeholder="Title" />
            </div>
          </div>
          <div className="row">
            <div className="col-lg-12 editItem">
                <input type="textarea" className="form-control" defaultValue={this.state.blogBody.Content}
                name="Content" id="blogContent" content="blog  content" placeholder="Description" />
            </div>
          </div>
          <div className="row text-center editButtonGroup">
            <input type="button" className="btn btn-primary editButtons" onClick={this.saveAction} name="Publish" id="btnSave" value="Save" />

          </div>

          </div>
        </form>
        <BlogList />
      </div>
        
    );
  },

saveAction: function(){
var e= $('#addMovieForm').serialize();
console.log(e);
Actions.addMovie(e);
},
handleResult :function(e){
Actions.searchMovie(e);
}
});

module.exports=Add;
