import React, { Component } from 'react';
import { connect } from 'react-redux';
import { selectBook } from '../actions/index';
import { bindActionCreators } from 'redux';

class BookList extends Component {
    renderList() {
        return this.props.books.map((book) => {
            return (<li
                        // ONCLICK IS STEP 1
                        onClick={() => this.props.selectBook(book)} 
                        key={book.title} 
                        className="list-group-item">
                        {book.title}
                    </li>)
            })
    }

    render() {
        return (
                <ul className="list-group col-sm-4">
                    {this.renderList()}
                </ul>
            )
    }
}

// first arg always state
function mapStateToProps(state) {
    // Whatever is returned will show up as props in BookList
    // Takes application state and puts them as props inside our component we created

    return {
        books: state.books
    }
}

// Anything returned from this function will end up as props on the
// BookList container

// STEP .5: THIS FUNCTION ALLOWS US TO USE OUR ACTION CREATORS
function mapDispatchToProps(dispatch) {
    // Whenever selectBook is called, the result should be passed to 
    // all of our reducers
    return bindActionCreators({ selectBook: selectBook }, dispatch);
}


// connect takes a function and component and creates the link to
// the state within Redux

// Promote BookList from a component to container - it needs to know 
// about this new dispatch method, selectBook. Make it available as a prop
export default connect(mapStateToProps, mapDispatchToProps)(BookList);