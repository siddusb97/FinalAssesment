var Reflux=require('reflux');
var actions=require('./actions');
var store=Reflux.createStore({
  listenables:actions,
  data:{
    list:[]
  },

  onAddPost:function(formdata){
    $.ajax({
        url: '/addPost',
        method: 'post',
        data:formdata,
        success: function(data) {
          this.onGetPosts();
        }.bind(this),
        error: function(xhr, status, err) {
          console.error(this.props.url, status, err.toString());
        }.bind(this)
      });

  },
  onGetPosts:function(){
    $.ajax({
        url: '/getPosts',
        method: 'get',
        success: function(data) {
          this.data.list=data;
          this.trigger(this.data);
        }.bind(this),
        error: function(xhr, status, err) {
          console.error(this.props.url, status, err.toString());
        }.bind(this)
      });
  }

});

module.exports=store;
