import React, { Component } from 'react';
import './App.css';
import Header from './components/Header'
import TaskList from './components/TaskList'
import Footer from './components/Footer'

const FILTER_ALL = 'all';
const FILTER_CLOSED = 'close';
const FILTER_ACTIVE = 'active';

class App extends Component {
  constructor(props){
    super(props)
    this.taskId = 0;
    this.state = {
      taskList: [],
      closeAll:false,
      filter:FILTER_ALL
    }
  }

  filterChange(filter){
    console.log(filter)
    this.setState({
      filter:filter
    })
  }

  getIsAllClose(){
    let taskList = this.state.taskList;
    for(let i = 0;i<taskList.length;i++){
      if(!taskList[i].close){
        return false
      }
    }
    return true
  }

  completeAll(){
    let complete = this.getIsAllClose()
    console.log(complete)
    let taskList = this.state.taskList;
    for(let i=0;i<taskList.length;i++){
      taskList[i].close = !complete
    }
    this.setState({taskList:taskList})
  }

  onDelte(id){
    let taskList = this.state.taskList;
    let index = -1;
    let item = taskList.find((item,i)=>{
      if(item.id == id){
        index = i;
        return true
      }
      return false
    })
    if(index >= 0){
      taskList.splice(index,1)
      this.setState({
        taskList:taskList
      })
    }
  }

  onItemClick(id){
    let taskList = this.state.taskList;
    let item = taskList.find((item)=>{
      return item.id == id
    })
    if(item){
      item.close = !item.close;
      this.setState({taskList:taskList})
    }
  }

  addTask(value){
    let taskList = this.state.taskList;
    let newItem = {
      id:this.taskId++,
      value:value,
      close:false
    }
    console.log(taskList)
    taskList.unshift(newItem)
    this.setState({taskList:taskList})
  }

  getLeftItem(){
    let taskList = this.state.taskList;
    let leftItem = []
    for(let i =0;i<taskList.length;i++){
      if(!taskList[i].close){
        leftItem.push(taskList[i])
      }
    }
    console.log(leftItem.length)
    return leftItem
  }

  getFilterItemList(){
    let itemList = []
    const {filter,taskList} = this.state
    taskList.map((item)=>{
      if(filter == FILTER_ALL){
        itemList.push(item)
      } else if(filter == FILTER_ACTIVE){
        if(!item.close){
          itemList.push(item)
        }
      } else {
        if(item.close){
          itemList.push(item)
        }
      }
    })
    return itemList
  }

  render() {
    const {taskList,filter} = this.state;
    let allComplete = this.getIsAllClose()
    let leftItem = this.getLeftItem()
    let filterItem = this.getFilterItemList()

    return (
      <div className="App">
        <h1 className="title">todos</h1>
        <div className="todoMVC">
          <Header isAllClose={this.getIsAllClose()} completeAll={this.completeAll.bind(this)} addTask={this.addTask.bind(this)}></Header>
          <TaskList taskList={filterItem} itemClick={this.onItemClick.bind(this)} delItem={this.onDelte.bind(this)}></TaskList>
          <Footer filter={filter} itemNum={leftItem.length} hasTask={taskList.length >0} allColse={allComplete} filterChange={this.filterChange.bind(this)}></Footer>
        </div>
      </div>
    );
  }
}

export default App;
