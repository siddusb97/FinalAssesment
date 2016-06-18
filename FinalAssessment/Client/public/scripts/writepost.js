var React=require('react');
var Footer=require('./footer');
var Reflux=require('reflux');
var actions=require('./actions');
var PostsList=require('./postlist');
var CreatePost=React.createClass({
  addPost:function(){
    var adddata=$('#addPost').serialize();
    actions.addPost(adddata);
    $('input[type="text"]').val('');
    $('textarea').val('');
    $('#add_msg').removeClass('hidden');
    setTimeout(function(){$('#add_msg').addClass('hidden');}, 2000);
  },
  render:function(){
    return(

      <div>
      <div className={"container"}>
          <div className={"row"}>
              <div className={"col-lg-8 col-lg-offset-2 col-md-10 col-md-offset-1"}>
                  <div className={"post-preview"}>

                        <h1>Write and publish your post here:</h1>
                        <form id="addPost">
                        <div className={'form-group row'}>
                           <label for="actors" className={'col-md-4 form-control-label'}>Title: </label>
                           <div className={'col-md-8 actors'}>
                              <input type="text" className={'form-control input-tag'} name="Title" required="required"/>
                           </div>
                        </div>
                        <div className={'form-group row'}>
                           <label for="actors" className={'col-md-4 form-control-label'}>Subtitle: </label>
                           <div className={'col-md-8 actors'}>
                              <input type="text" className={'form-control input-tag'} name="Subtitle" required="required"/>
                           </div>
                        </div>
                        <div className={'form-group row'}>
                           <label for="actors" className={'col-md-4 form-control-label'}>Description: </label>
                           <div className={'col-md-8 actors'}>
                              <textarea className={'form-control input-tag'} name="Description" required="required" rows="25" cols="20">
                              </textarea>
                           </div>
                        </div>
                        <div className={'form-group row'}>
                           <label for="actors" className={'col-md-4 form-control-label'}>Author: </label>
                           <div className={'col-md-8 actors'}>
                              <input type="text" className={'form-control input-tag'} name="Author" required="required"/>
                           </div>
                        </div>
                        <div className={'form-group row'}>

                           <div className={'col-md-12 actors'}>
                              <input type="button" value="Publish" className={"btn btn-block btn-info"} onClick={this.addPost}/>
                           </div>
                        </div>
                          <div className={"text-center"}><h3 id="add_msg" className={"hidden"}>Your post published successfully :)</h3></div>
                        </form>

                  </div>
              </div>
          </div>
      </div>
      <PostsList />
      <hr/>
      
      </div>

    );
  }

});
module.exports=CreatePost;
