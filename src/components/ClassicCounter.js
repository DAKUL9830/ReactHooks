import React,{Component} from 'react'


 class ClassicCounter extends Component{

    constructor(props){
        super(props)
        this.state={
            counter:0
        }
       
    }
    componentDidMount(){
        this.interval= setInterval(this.tick,1000)
    }
    componentWillUnmount(){
        clearInterval(this.interval)
    }
    tick=()=>{
        this.setState({
            counter:this.state.counter+1
        })
     }
    render(){
    return (
        <div>
            {this.state.counter}
        </div>
    )
    }
}

export default ClassicCounter
