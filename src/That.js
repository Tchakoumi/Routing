import React from 'react'

function That(props) {
    console.log(props)
    return (
        <div>
            Others Detail page
        </div>
    )
}

export default That;

// Button: onclick={()=> {props.history.push('/routeYouWant')}}
// Link: <Link to='/routeYouWant'>Word to lead to the link</Link>