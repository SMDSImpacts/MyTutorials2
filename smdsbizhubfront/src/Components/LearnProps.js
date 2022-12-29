import {Component} from 'react';

class Messsage extends Component{
    render(){
        return <h1>Interesting: {this.props.namecode} {this.props.name}</h1>;
                          
    }
}

export default Messsage;