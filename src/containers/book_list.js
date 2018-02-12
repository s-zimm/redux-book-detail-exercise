import React, { Component } from 'react';
import { connect } from 'react-redux';
import { selectBook } from '../actions/index';
import { bindActionCreators } from 'redux';

class BookList extends Component {
    renderList() {
        return this.props.books.map((book) => {
            return <li key={book.title} className="list-group-item">{book.title}</li>
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

function mapDispatchToProps(state) {
    // Whenever selectBook is called, the result should be passed to 
    // all of our reducers
    return bindActionCreators({ selectBook: selectBook }, dispatch);
}


// connect takes a function and component and creates the link to
// the state within Redux
export default connect(mapStateToProps, mapDispatchToProps)(BookList);