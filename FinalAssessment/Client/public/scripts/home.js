var React=require('react');
var MovieList=require('./movieList');
var Actions=require('./actions');


var Home = React.createClass({
  render :function(){
    return(
    <div >
     <MovieList bAction={false} />
    </div>
    );
  }

});

module.exports=Home;
