import React, { Component } from 'react';

class AddMovie extends Component{

    submitForm=(e)=>{
        e.preventDefault();
        fetch('/add', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body:JSON.stringify({
                movieName: e.target.movieName.value,
                genre: e.target. genre.value,
                mainActor: e.target. mainActor.value,
                mainActress: e.target.mainActress.value,
                supportingActor: e.target.supportingActor.value,
                supportingActress: e.target.supportingActress.value,
            }),
        })
            .then(this.props.updateDatabaseData());
    };

    render(){
        return(
            <div>
            </div>
    );
    }
}

export default AddMovie;







