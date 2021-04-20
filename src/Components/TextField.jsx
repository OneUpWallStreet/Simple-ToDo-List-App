import React from 'react'


class TextField extends React.Component{


    constructor(props){
        super(props)

        this.state = {
            text: ""
        }
        
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
        this.handleSubmitComplete = this.handleSubmitComplete.bind(this)
        this.handleSubmitAll = this.handleSubmitAll.bind(this)
    }

        handleChange = async function(e){        
            await this.setState({text: e.target.value})
            await this.props.ChangeText(this.state.text)

        }

        handleSubmitAll(){
            this.props.ShowAllList()
        }

        handleSubmitComplete(){
            this.props.ShowCompletedList()
        }

        handleSubmit(e){
            
            this.props.handleAdd()
            this.setState({text: ""})
            this.props.clearText()
            
            
        }

    render(){

        return(
            <div className = "pt-6">
                
                <div className = " bg-gray-50 border-2 border-indigo-600 p-6 max-w-2xl mx-auto bg-white rounded-xl shadow-md flex-auto items-center space-x-4">
                
                {/* Text-Field */}
                <input className = "rounded-md focus:ring-2 focus:ring-blue-600"  type = "text" placeholder = "Enter To Do" onChange = {this.handleChange} value = {this.state.text}/>
                
                {/* Buttons */}
                <button className = "px-4 py-1 text-sm text-purple-600 font-semibold rounded-full border border-purple-200 hover:text-white hover:bg-purple-600 hover:border-transparent focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-offset-2" onClick = {this.handleSubmit}>Submit</button>
                <button className = "px-4 py-1 text-sm text-purple-600 font-semibold rounded-full border border-purple-200 hover:text-white hover:bg-purple-600 hover:border-transparent focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-offset-2" onClick = {this.handleSubmitComplete}>Completed Items</button>
                <button className = "px-4 py-1 text-sm text-purple-600 font-semibold rounded-full border border-purple-200 hover:text-white hover:bg-purple-600 hover:border-transparent focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-offset-2" onClick = {this.handleSubmitAll}>Show All</button>
                
                </div>
            </div>
            
        )
    }
}

export default TextField