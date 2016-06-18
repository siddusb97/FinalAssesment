
var React= require('react');
var MovieList=require('./movieList');
var Actions=require('./actions');

var Delete = React.createClass({
  render :function(){
    return(
      <div>
       <MovieList bAction={true} deleteAction={this.deleteAction} />
      </div>
      );
    },
    deleteAction :function(deleteKeys){
      console.log(deleteKeys);
      Actions.delete(deleteKeys);
    }

  });
module.exports=Delete;
