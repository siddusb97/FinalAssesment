var React=require('react');
var Footer=require('./footer');
var Reflux=require('reflux');
var actions=require('./actions');
var store=require('./store');
var PostsList=React.createClass({
  mixins:[Reflux.listenTo(store,"onStore")],
  getInitialState:function(){
    return{
      postlist:[]
    }
  },
  onStore:function(data){
    this.setState({
      postlist:data.list
    });
  },
  componentDidMount:function(){
    actions.getPosts();
  },
  render:function(){
    return(
      <div>
      <div className={"container"}>
          <div className={"row"}>
            {this.state.postlist.length>0?
              <div className={"col-lg-8 col-lg-offset-2 col-md-10 col-md-offset-1"}>
              {
                this.state.postlist.map(function(post){
                  return(
                    <div key={post._id}>
                  <div className={"post-preview"}>
                      <a href="#" data-toggle="modal" data-target={"#"+post._id}>
                          <h2 className={"post-title"}>
                              {post.title}
                          </h2>
                          <h3 className={"post-subtitle"}>
                              {post.subtitle}
                          </h3>
                      </a>
                      <p className={"post-meta"}>Posted by <strong>{post.author}</strong> on {post.date}</p>
                  </div>
                  <hr/>
                  <div className={"modal fade"} id={post._id} tabindex="-1" role="dialog" aria-labelledby="myModalLabel">
                     <div className={"modal-dialog"} role="document">
                        <div className={"modal-content"}>
                           <div className={"modal-header"}>
                              <button type="button" className={"close"} data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
                              <h3 className={"modal-title"} id="myModalLabel">{post.title}</h3> {post.subtitle}
                           </div>
                           <div className={"modal-body"}>
                              <p>{post.body}</p>
                           </div>
                           <div className={"modal-footer"}>
                              <button type="button" className={"btn btn-danger"} data-dismiss="modal">Close</button>
                           </div>
                        </div>
                     </div>
                  </div>
                  </div>
                );
              })
                }


              </div>:<div className={"text-center"}><h1>No Posts available to show :( </h1></div>}
          </div>
      </div>

      <hr/>
      <Footer/>
      </div>

    );
  }

});

module.exports=PostsList;
