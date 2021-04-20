
import React from 'react'


class PrintItems extends React.Component{


    constructor(props){

        super(props)

        this.printAllList = this.printAllList.bind(this)
        this.HandleX = this.HandleX.bind(this)
    }

    HandleX(value){
        this.props.DeleteItem(value)
    }

    HandleTick(value){
        this.props.CompleteItem(value)
        
    }


    printCompletedList(){
        console.log("here is completed list: ",this.props.completed_list)
        console.log("this is the noraml list: ",this.props.items)
        
        return(
            <div className = "bg-yellow-100 p-6 border-2 border-yellow-600 max-w-2xl mx-auto bg-white rounded-xl shadow-md flex-auto items-center space-x-4">
                <ul className = "py-2">
                {this.props.completed_list.map(item => <p className = "py-2" key = {item.id}>
                <p className = "font-semibold">{item.value}</p>
                {item.completed}
                <br/>
                <button className = "px-4 py-1 text-sm text-purple-600 font-semibold rounded-sm border border-purple-200 hover:text-white hover:bg-red-600 hover:border-transparent focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-offset-2" onClick = {() => this.HandleX(item.value)}>
                    Delete
                </button>
                <button className = "px-4 py-1">
                    {item.icon} 
                </button>
                </p>)
                }
            </ul>
            </div>
            
        )
    }


    printAllList(){

        return(
            <div className = "bg-purple-100 p-6 border-2 border-indigo-600 max-w-2xl mx-auto bg-white rounded-xl shadow-md flex-auto items-center space-x-4">
                <ul className = "py-2">
                {this.props.items.map(item => <p className = "py-2" key = {item.id}>
                
                <p className = "font-semibold">{item.value}</p>
                {item.completed}
                <br/>
                <button className = "px-4 py-1 text-sm text-purple-600 font-semibold rounded-sm border border-purple-200 hover:text-white hover:bg-red-600 hover:border-transparent focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-offset-2" onClick = {() => this.HandleX(item.value)}>
                    Delete
                </button>
                <button className = "px-4 py-1" onClick = {() => this.HandleTick(item.value)}>
                    {item.icon} 
                </button>
                </p>)
                }
            </ul>
            </div>
            
        )
        
    }

    render(){
        console.log("Is dasdait true: ",this.props.showCompletedList)
        if(this.props.showCompletedList === true & this.props.completed_list.length !== 0){
            return(
                <div>
                    {this.printCompletedList()}
                </div>
            )
        }

        else if(this.props.showCompletedList == false & this.props.items.length !== 0){
            return(
                <div>
                    {this.printAllList()}
                </div>
            )
        }
        else {
            return(
                <div>

                </div>
            )
        }

    }

}

export default PrintItems