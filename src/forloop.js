var indents = [];
for (var i = 0; i < this.props.level; i++) {
  indents.push(<span className='indent' key={i}></span>);
}
return (
   <div>
    {indents}
    "testing this out"
   </div>
);
