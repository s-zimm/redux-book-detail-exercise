export function selectBook(book) {
    // selectBook is an action creator, it needs to return an action,
    // an object with a type property

    // STEP 2: WHAT IS CALLED FROM ONCLICK IN CONTAINER
    // DISPATCHES ACTION
    return {
        type: 'BOOK_SELECTED',
        payload: book
    }
}