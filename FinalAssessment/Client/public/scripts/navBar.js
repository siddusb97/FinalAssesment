var React=require('react');
var Link=require('react-router').Link;
var Navbar=React.createClass({
  render:function(){
    return(
      <div className={"container"}>
      <div className={'row'}>
        <div className={'col-md-12'}>
          <nav className={'navbar navbar-default navbar-inverse'} role="navigation">
            <div className={'navbar-header'}>
              <button type="button" className={'navbar-toggle'} data-toggle="collapse" data-target="#bs-example-navbar-collapse-1">
                 <span className={'sr-only'}>Toggle navigation</span><span className={'icon-bar'}></span><span className={'icon-bar'}></span><span className={'icon-bar'}></span>
              </button> <Link to="/" className={'navbar-brand'}><strong>Digital India </strong></Link>
            </div>
            <div className={'collapse navbar-collapse'} id="bs-example-navbar-collapse-1">
              <ul className={'nav navbar-nav'}>
            
              <li>
                <Link to="/post">Add Post</Link>
              </li>
                </ul>

            </div>
          </nav>
        </div>
      </div>

      </div>
    );
  }

});

module.exports=Navbar;
