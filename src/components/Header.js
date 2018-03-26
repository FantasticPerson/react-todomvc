import React, { Component } from 'react';

export default class Header extends Component{
    constructor(props){
        super(props)
    }

    componentDidMount(){

    }

    inputKeyDown(e){
        const {addTask} = this.props
        if(e.keyCode == 13){
            let value = e.target.value.trim()
            if(value.length > 0){
                addTask(value)
                e.target.value = ''
            }
        }
    }

    render(){
        const {isAllClose,completeAll} = this.props;

        let btnClass = isAllClose ? 'toggle-close' : 'toggle-all'

        return (
            <div>
                <div className={btnClass} onClick={()=>{completeAll()}}></div>
                <input 
                    className="new-todo" 
                    type="text" 
                    placeholder="What need to be done?"
                    onKeyDown={this.inputKeyDown.bind(this)}
                ></input>
            </div>
        )
    }
}