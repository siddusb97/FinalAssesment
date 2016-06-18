var React=require('react');
var Reflux=require('reflux');
var Store=require('./store');
var Actions=require('./actions');

var Register=React.createClass({
  mixins:[Reflux.listenTo(Store,'onStore')],

  getInitialState:function(){
    return {
      msg:"registration"
    }
  },
  onStore:function(data){

    this.setState({msg:data.msg});
  },

handleRegistration: function(){
  var value = $('#registartionData').serialize();
  Actions.handleRegistration(value);
},

render: function(){
  return (
    <div>
    {this.state.msg=='registration'?
      <div>
    <h2 className="page-header">Registration Form</h2>
    <form id="registartionData">
    <div className="form-group">
  <label>Name</label>
  <input type="text" className="form-control" name="name" placeholder="Name"/>
  </div>
  <div className="form-group">
<label>Email</label>
<input type="text" className="form-control" name="email" placeholder="Email"/>
</div>
    <div className="form-group">
  <label>Username</label>
  <input type="text" className="form-control" name="username" placeholder="Username"/>
  </div>
  <div className="form-group">
<label>Password</label>
<input type="password" className="form-control" name="password1" placeholder=""/>
</div>
  <div className="form-group">
  <label>Confirm Password</label>
  <input type="password" className="form-control" name="password2" placeholder=""/>
  </div>
  <button type="button" onClick={this.handleRegistration} className="btn btn-default">Register</button>
  </form>
    </div>:<div><h3>Hello{this.state.msg}</h3></div>}
    </div>
  );
}

});
module.exports=Register;
