 var React=require('react');
var ReactDOM=require('react-dom');
var Router=require('react-router').Router;
var IndexRoute=require('react-router').IndexRoute;
var Route=require('react-router').Route;
var browserHistory=require('react-router').browserHistory;
var Home=require('./home');
var Add=require('./add');
var Delete=require('./delete');
var NavBar=require('./navbar');
var Login=require('./login');
var Register=require('./register');

var Container=React.createClass({
  render:function(){
    return(
      <div>
        <NavBar/>
        {this.props.children}
      </div>
    );  }
});



ReactDOM.render((
  <Router history={browserHistory}>
    <Route path="/" component={Container}>
    <IndexRoute component={Login}/>
      <Route path="/home" component={Home} />
      <Route path="/add" component={Add} />
      <Route path="/delete" component={Delete} />
      <Route path="/login" component={Login} />
        <Route path="/register" component={Register} />
    </Route>
  </Router>
),
  document.getElementById('content12'));
