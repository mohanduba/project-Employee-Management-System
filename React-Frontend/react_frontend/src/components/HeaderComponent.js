import React, { Component } from 'react'

export default class HeaderComponent extends Component{
    render(){
        return(
            <div>
                <header>
                    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                        <a href="" className="navbar-brand">Employee Management Application</a>
                    </nav>
                </header>
            </div>
        )
    }
}
