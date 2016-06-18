var Reflux=require('reflux');

var Actions=require('./actions');

var store=Reflux.createStore({
listenables:Actions,
data:{
  list:[],
  movieList:[],
  added:false,
  loginData:null,
  msg:"login"
},
onList:function(){
  $.ajax({
     url: '/api/movies',
     method: 'GET',
     success: function(data) {
       console.log(data);
       this.data.list=data;
       this.trigger(this.data);
     }.bind(this),
     error: function(xhr, status, err) {
       console.error( status, err.toString());
     }.bind(this)
   });
},

onDelete:function(deleteKeys){
  $.ajax({
 method : 'DELETE',
 url : '/api/movies/deleteMultiple/'+deleteKeys.toArray(),
 success : this.onList()
   });
},

onSearchMovie:function(Title){
  $.ajax({
    url :'/api/movies',
    method :'POST',
    data :'Title='+Title,
    success:function(data){
      this.data.movieList=data;
      this.trigger(this.data);
    }.bind(this)
  });
},
onAddMovie:function(e){
  console.log("++++++++++++gggggggg");
  $.ajax({
    url :'/api/movies/update',
    method :'POST',
    data :e,
    success:function(data){
      console.log(data);
      this.data.movieList={};
      this.data.added=true;
      this.trigger(this.data);
    }.bind(this)
});
},
onHandleRegistration :function(e){
  $.ajax({

    url :'/user/register',
    method :'POST',
    data :e,
    success:function(data){
      console.log("+++++---"+data.toString());
      alert("Registration successful");
        console.log(this.data);
      this.data.msg="Success";

      this.trigger(this.data);
    }.bind(this)
  });
},
handleLoginAuth :function(e){
  $.ajax({

    url :'/user/login',
    method :'POST',
    data :e,
    success:function(data){
      console.log("+++++---"+data.toString());
      alert("Login successful");
      console.log("after log in "+data);
      this.data.msg="Success";
console.log(data.token);
window.localStorage.setItem("token",data.token);
      this.trigger(this.data);
    }.bind(this)
  });
}


});


module.exports=store;
