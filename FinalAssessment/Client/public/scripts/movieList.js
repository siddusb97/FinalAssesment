var React=require('react');
var Reflux=require('reflux');
var Actions=require('./actions');
var Store=require('./store');


var BlogList=React.createClass({
mixins:[Reflux.listenTo(Store,"onStore")],
  getInitialState:function(){
    return{
      data:[]
    }
  },
  componentDidMount:function(){
    console.log("h");
    Actions.list();
  },
  onStore: function(data){
    this.setState({data:data.list});

  },
  showSelection : function() {

    $('input[name="movieID"]').attr('checked', 'checked');
  console.log($('input[name="movieID"]:checked').serialize());
  },
  deleteAction : function() {
    var checkedValues = $('input[name="movieID"]:checked').map(function() {
     return $(this).val();
   });
    this.props.deleteAction(checkedValues);
  },
  render:function(){
    return(
<div className="search-output ">
// <div className="row">
// <div className={this.props.bAction ? "col-lg-8 show" : "col-lg-8 hide"}>
//         <button onClick={this.showSelection} className="btn btn-primary">Select All</button>
//       </div>
//   <div className={this.props.bAction ? "col-lg-4 show " : "col-lg-8 hide"}>
//   <button onClick={this.deleteAction} className="btn btn-danger pull-right">Delete</button>
//   </div>
//   </div>
{this.state.data.map(function(result){
return (<div key={result._id} className="row stle">

  <div className="col-lg-8">
  <h3>{result.Title}</h3>
  <h5>{result.Content}</h5>

      </div>

  </div>

);
}.bind(this))}
</div>
    );
  }
});

module.exports=BlogList;
