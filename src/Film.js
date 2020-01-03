import React, {Component} from 'react'


class Film extends Component {
    constructor(props) {
        super(props);
        this.state = {
        title: '',
        poster: '',
        comment: '',
        } 
        this.onChange = this.onChange.bind(this);
        this.submitForm = this.submitForm.bind(this);
    }

    onChange(e) {
        this.setState({
            [e.target.name]: e.target.value,
        });
    }
    
    submitForm = (e) => {
         const config = {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(this.state),
        };
        const url = "https://post-a-form.herokuapp.com/api/movies/";
        fetch(url, config)
            .then(res => res.json())
            .then(res => {
                if (res.error) {
                    alert(res.error);
                } else {
                    alert(`Your film has been added successfully!`);
                }
            }).catch(e => {
                console.error(e);
                alert(`There was an error adding your film`);
            });
        e.preventDefault();
    }
     
    render(){
        return(
            <div className="Form">
            <h1>My favourite film</h1>
            <form onSubmit={this.submitForm}>
                <fieldset>
                    <legend>
                        Information
                    </legend>
                    <div className="form-data">
                        <label htmlFor="title">
                            Name
                        </label>
                        <input
                            type="text"
                            id="title"
                            name="title"
                            onChange={this.onChange}
                            value={this.state.title}
                        />
                    </div>
                    <div className="form-data">
                        <label htmlFor="poster">
                            Poster
                        </label>
                        <input
                            type="text"
                            id="poster"
                            name="poster"
                            onChange={this.onChange}
                            value={this.state.poster}
                        />
                    </div>
                    <div className="form-data">
                        <label htmlFor="comment">
                            Comment
                        </label>
                        <textarea id="comment" name="comment" 
                        onChange={this.onChange} 
                        value={this.state.comment}
                        />
                    </div>
                    <hr />
                    <div className="form-data">
                    <input type="submit" value="Send" />
                    </div>
                </fieldset>
            </form>
            </div>
        )
    }
}


export default Film;