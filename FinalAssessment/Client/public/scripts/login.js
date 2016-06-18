var React=require('react');
var Reflux=require('reflux');
var Store=require('./store');
var Actions=require('./actions');
var browserHistory=require('react-router').browserHistory;

var Login = React.createClass({
 mixins : [Reflux.listenTo(Store,"onStore")],

 onStore : function(data){
   console.log("in store");
   this.setState({
   loginData:data.username,
   msg : data.msg
 });
 browserHistory.push('/home');
},

 getInitialState: function(){
   return {
     loginData: null,
     msg : 'login'
   }
 },
handleLoginAuth : function(){
 var value = $('#loginData').serialize();
 Actions.handleLoginAuth(value);
},

 render : function(){
   return(
     <div>
     {this.state.msg=='login'?
       <div>
     <h2 className="page-header">Account Login</h2>
     <form id="loginData">
     <div className="form-group">
   <label>Username</label>
   <input type="text" className="form-control" name="username" placeholder="Username"/>
   </div>
   <div className="form-group">
   <label>Password</label>
   <input type="password" className="form-control" name="password" placeholder="Password"/>
   </div>
   <button type="button" onClick={this.handleLoginAuth} className="btn btn-default">Submit</button>
   </form>
     </div>:<div><h3>Hello{this.state.msg}</h3></div>}
     </div>
   );
 }
});
module.exports=Login;
