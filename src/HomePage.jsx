import React from 'react'
import TextField from './Components/TextField'
import PrintItems from './Components/PrintItems'
import { list } from 'postcss'


class HomePage extends React.Component{


    constructor(){
        super()

    this.state = {

        list: [],
        text: "",
        completed_list: [],
        showCompletedList: false

    }

    this.handleAdd = this.handleAdd.bind(this)
    this.ChangeText = this.ChangeText.bind(this)
    this.clearText = this.clearText.bind(this)
    this.DeleteItem = this.DeleteItem.bind(this)
    this.GetCompletedList = this.GetCompletedList.bind(this)
    this.CompleteItem = this.CompleteItem.bind(this)
    this.ShowCompletedList = this.ShowCompletedList.bind(this)
    this.ShowAllList = this.ShowAllList.bind(this)
    }

    //Show all elements i.e. completed items and non-completed items
    ShowAllList(){
        this.setState({showCompletedList: false})
    }

    //Show Completed List in PrintItems.jsx
    ShowCompletedList(){
        this.setState({showCompletedList: true})
        
    }

    //Get a new list with only the completed items
    GetCompletedList(){

        var list_temp = []

        this.state.list.forEach(item => {

            const newItem = {

                id: list_temp.length,
                value: item.value,
                completed: item.completed,
                showCompletedList: "To Do",
                icon: item.icon

            }

            if(item.completed === "Done"){
                list_temp.push(newItem)
            }
            
        })

        this.setState({completed_list: list_temp})

    }

    //Set an already existing item's value to true
    CompleteItem = async function(value){

        var list_temp = []

        this.state.list.forEach(item => {
        

            if(item.value === value){
                const newItem = {
                    id: list_temp.length,
                    value: item.value,
                    completed: "Done",
                    icon: " 🏆 "
                }
                console.log(newItem)
                list_temp.push(newItem)
            }
            else{
                const newItem = {
                    id: list_temp.length,
                    value: item.value,
                    completed: item.completed,
                    icon: item.icon
                }

                list_temp.push(newItem)
            }



        })
        console.log("end: ",list_temp)
        await this.setState({list: list_temp})

        this.GetCompletedList()

    }

    DeleteItem(value){


        var list_temp = []

        this.state.list.forEach(item => {

            const newItem = {
                
                id: list_temp.length,
                value: item.value,
                completed: item.completed,
                icon: item.completed
            }   

            if(item.value !== value){
                list_temp.push(newItem)
            }

        }

        )

        this.setState({list: list_temp})
        this.GetCompletedList()

    }

    ChangeText(input){
        this.setState({text: input})

    }

    clearText(){
        this.setState({text: ""})

    }

    handleAdd(){
        

        if(this.state.text === ""){
            return
        }

        const newItem = {
            id: this.state.list.length,
            value: this.state.text,
            completed: "To Do",
            icon: " ✅ "
        }


        this.setState(state => ({
            list: this.state.list.concat(newItem),
            completed_list: this.state.list.concat(newItem)
        }))

        this.GetCompletedList()
    }

    render(){
        return(
            <div>
                <TextField ShowAllList = {this.ShowAllList} ShowCompletedList = {this.ShowCompletedList} ChangeText = {this.ChangeText} handleAdd = {this.handleAdd} clearText = {this.clearText} list = {this.state.list}/>
                <PrintItems showCompletedList = {this.state.showCompletedList}  ShowCompletedList = {this.ShowCompletedList} CompleteItem = {this.CompleteItem} GetCompletedList = {this.GetCompletedList}  DeleteItem = {this.DeleteItem} completed_list = {this.state.completed_list}  items = {this.state.list}/>
            </div>
        )
    }

}

export default HomePage