var React=require('react')

var Gc=React.createClass({

render: function(){
  return (
       <div>

             <div className="row">
              <div className="col-sm-4 pull-left">
              <img src={this.props.Poster} id="movieimg"/>
              </div>
              <div className="col-sm-8" id = "moviedesc">
                            <h3>{this.props.Title}</h3>
                              <h3> {this.props.Year}</h3>
                               <h3>{this.props.Type}</h3>
                </div>
              </div>
     </div>
   );
}
});
module.exports=Gc;
