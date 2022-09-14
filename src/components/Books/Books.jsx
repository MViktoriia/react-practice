import { Component } from 'react';
import FormAddBook from './FormAddBook';
import { nanoid } from 'nanoid';

export default class Books extends Component {
    state = {
        books: [],
    };

    addBook = (book) => {
        this.setState((prevState) => {
            const newBook = {
                id: nanoid(),
                ...book
            }


            return {
                books: [...prevState.books, newBook]
            }

        })
    };
    

    render() {
        const { addBook } = this;
        return (
            <>
                <FormAddBook onSubmit={addBook} />
            </>
        )
    };
}
