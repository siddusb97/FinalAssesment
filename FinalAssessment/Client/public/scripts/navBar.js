var React=require('react');
var Link=require('react-router').Link;

var NavBar = React.createClass({
  render :function(){
    return(
      <div>
      <nav className="navbar navbar-default">
       <div className="container-fluid">
         <div className="navbar-header">
           <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar">
             <span className="sr-only">Toggle navigation</span>
             <span className="icon-bar"></span>
             <span className="icon-bar"></span>
             <span className="icon-bar"></span>
           </button>

         </div>
         <div id="navbar" className="navbar-collapse">
           <ul className="nav navbar-nav">
           <li className="">
         <Link to="/home" onClick={this.changeActiveLI}>Home</Link></li>
        <li><Link to="/add" onClick={this.changeActiveLI}>Add</Link></li>
        <li><Link to="/delete" onClick={this.changeActiveLI}>Delete</Link></li>
        <li><Link to="/login" onClick={this.changeActiveLI}>Login</Link></li>
          <li><Link to="/register" onClick={this.changeActiveLI}>Register</Link></li>

           </ul>

         </div>
       </div>
     </nav>
     </div>
    );
  },
  changeActiveLI : function(e) {
    $('#navbar ul li.active').removeClass('active');
    $(e.target).parent().addClass('active');
  }
});

module.exports=NavBar;
