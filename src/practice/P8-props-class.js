import React , {Component} from 'react'
class P8 extends Component{
    render(){
        const {name,heroName}=this.props
        return(
          <div className='center'>
            <h3>{name} aka {heroName}</h3>
          </div>
        )
    }
}

export default P8