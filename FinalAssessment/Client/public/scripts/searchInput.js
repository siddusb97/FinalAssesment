var React= require('react');


var SearchInput=React.createClass({
  render:function(){
      return(
        <div className="search">
        <h1><strong> Top 10 Movies</strong> </h1>
        <form>
        <input type="text" className="form-control input-lg search-box" value={this.props.filterText} onChange={this.handleChange} ref="filterTextInput" id='movList' autocomplete="on" onSelect={this.handleSelect} />
        <input type="button" value="Search & Save" onClick={this.handleResult.bind(this,this.state.filterText)} className='btn btn-primary btn-lg btn-block'/>
        </form>
        </div>
      );
    },
    getInitialState: function(){
    return {  filterText : null};
    },
  handleSelect : function(e){
return this.setState( {filterText:e.target.value });
  },


    handleChange : function(e){
      var Title=e.target.value;
      console.log(Title);
        $.ajax({
          url :'/api/movies/filter',
          method :'POST',
          data :'Title='+Title,
          success:function(data){
            console.log(data);
            $( "#movList" ).autocomplete({
      source: data
    }).bind(this);
          }
        });

      this.setState( {filterText:e.target.value });

    },
    handleResult : function(e){
      this.props.onClick(this.state.filterText);
    }
});

module.exports=SearchInput;
