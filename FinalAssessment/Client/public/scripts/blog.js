var React=require('react');
var ReactDOM=require('react-dom');
var PostsList=require('./postlist');
var WritePost=require('./writepost');
var Router = require('react-router').Router;
var Route = require('react-router').Route;
var Link = require('react-router').Link;
var IndexRoute=require('react-router').IndexRoute;
var browserHistory = require('react-router').browserHistory;
var Reflux=require('reflux');
var PostsList=require('./postlist');
var CreatePost=require('./writepost');
var Navbar=require('./navbar');
var Container=React.createClass({

    render:function(){
      return(
        <div>
            <Navbar/>
            {this.props.children}
          </div>
      );
    }
});

//Render final component
ReactDOM.render(
  (
    <Router history={browserHistory}>
      <Route path="/" component={Container}>
      <IndexRoute component={PostsList}/>

      <Route path="post" component={CreatePost}/>
      </Route>

    </Router>),
  document.getElementById('content')
);
