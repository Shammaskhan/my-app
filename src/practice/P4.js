import React,{Component} from 'react'
class Welcome extends Component{
    render(){
        return(
            <div className='center'>
                <h1>{this.props.name} aka {this.props.heroName}</h1>
            </div>
        )
    }
}
export default Welcome