import React, { Component } from 'react';

export default class Footer extends Component{
    constructor(props){
        super(props)
    }

    onFilterChange(cfilter){
        const {filter,filterChange} = this.props;
        if(cfilter != filter){
            filterChange(cfilter)
        }
    }

    render(){
        const {itemNum,filter,hasTask} = this.props;
        let footerClass = hasTask ? 'footer footers' :'footer'

        return (
            <div className={footerClass}>
                <span className="itemNumber">{itemNum+' items left'}</span>
                <ul className="filters">
                    <li onClick={()=>{this.onFilterChange('all')}} className={filter=='all' ? 'selected' : ''}>All</li>
                    <li onClick={()=>{this.onFilterChange('active')}} className={filter=='active' ? 'selected' : ''}>Active</li>
                    <li onClick={()=>{this.onFilterChange('close')}} className={filter=='close' ? 'selected' : ''}>Completed</li>
                </ul>
            </div>
        )
    }
}