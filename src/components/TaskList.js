import React, { Component } from 'react';

export default class TaskList extends Component{
    constructor(props){
        super(props)
    }

    render(){
        const {itemClick,taskList,delItem} = this.props;
        return (
            <div className="taskList">
                {
                    taskList.map((item,index)=>{
                        let checkClass = item.close ? 'checked' :'check'
                        let textClass = item.close ? 'textCheck' : ''
                        return(
                            <div className="taskItem" key={item.id}>
                                <div onClick={()=>{itemClick(item.id)}} className={checkClass}></div>
                                <span className={textClass}>{item.value}</span>
                                <div className="destroy" onClick={()=>{delItem(item.id)}}></div>
                            </div>
                        )
                    })
                }
            </div>
        )
    }
}