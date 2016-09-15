var React=require('react');
var Gc=require('./Gc');

var Movielist=React.createClass({

render:function(){
return(
  <div>
  {this.props.movieArr1.map(function(arr) {
   return (
     <div>

     <Gc Title={arr.Title} />
     <Gc Year={arr.Year} />
     <Gc imdbID={arr.imdbID} />
     <Gc Type={arr.Type} />
     <Gc Poster={arr.Poster} />
     </div>
   );
 })}
 </div>
);
}
});

module.exports=Movielist;
