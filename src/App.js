import React from 'react';
import './App.css';

// function HelloWorld(props){
//   return (
//   <div id="hello">
//   <h3>{props.subtitle}</h3>
//     {props.mytext}
    
//     </div>
//   )
//   }


 class HelloWorld extends React.Component{
  state={
    show:true
  }
  cambiarstatus = ()=>{
    this.setState({show:!this.state.show})
  }
 
   render(){
    if(this.state.show){
    return(
      <div id="hello">
          <h3>{this.props.subtitle}</h3>
          {this.props.mytext}  
          <button onClick={this.cambiarstatus}>Cambiar status</button>
      </div>
    )
  }
  else
  {
    return <h3>no hay datos
    <button onClick={this.cambiarstatus}>regresar </button>
    </h3>
  }

  }
}


function App() {
  return (
    <div>This is my component: 
      <HelloWorld mytext="hola mundo " subtitle="loremp ispum" /> 
      <HelloWorld mytext="hola!" subtitle="componente nuevo" />
     </div>
  );
}

export default App;
