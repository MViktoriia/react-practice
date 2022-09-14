import { Component } from 'react'
import { nanoid } from 'nanoid';

export default class FormAddBook extends Component {

    state = {
        title: '',
        author: '',
    }

    handleChange = (e) => {
        const { name, value } = e.target;
        this.setState({
            [name]: value,
        })
    }

    handleSubmit = (e) => {
        e.preventDefault();
        const { title, author } = this.state;

        this.props.onSubmit({ title, author });
        

        this.setState({
            title: '',
            author: '',
        })

    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <div>
                    <label> Title:
                        <input id={nanoid()} type="text" name="title" value={this.state.title} onChange={this.handleChange} />
                    </label>
                </div>
                <div>
                    <label> Autor:
                        <input id={nanoid()} type="text" name="author" value={this.state.author} onChange={this.handleChange} />
                    </label>
                </div>
                <button type="submit" >Add book</button>
            </form>
        )
    }
};
