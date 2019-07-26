import React, { Component } from 'react';

class Header extends Component {

    constructor(props){
        super(props);
        this.state = {
            count: 1
        }
    }

    change = () => {
        this.setState({count: this.state.count+1}, ()=>{
        });
        console.log(this.state.count, 'one')

        this.setState({count: this.state.count+1}, ()=>{
        })
        console.log(this.state.count,'two')

        setTimeout(() => {
            this.setState({count: this.state.count + 1});
            console.log(this.state.count);  // 第 3 次 log->2
      
            this.setState({count: this.state.count + 1});
            console.log(this.state.count);  // 第 4 次 log->3
          }, 0);
    }

    render(){
        return (
            <div onClick={this.change}>
                {this.state.count}
            </div>
        )
    }
}

export default Header;