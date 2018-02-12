// State argument is not application state, only the state this
// reducer is responsible for

// WHAT OUR ACTION CREATOR DISPATCHES TO
export default function(state = null, action) {

    // USES CASE AND SWITCH TO DETERMINE ACTION TYPE
    switch (action.type) {
        case 'BOOK_SELECTED':
            return action.payload;
    }

    return state;
}

// THE ACTION AUTOMATICALLY GETS SENT TO ALL REDUCERS, WHICH ASSEMBLE STATE