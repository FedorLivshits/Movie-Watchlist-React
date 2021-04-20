const AppReducer = (state, action) => {
    switch (action.type) {
        case "ADD_MOVIE_TO_WATCHLIST":
            return {
                ...state,
                watchList: [action.payload, ...state.watchList ],
            };
        case "SEND_MOVIE_TO_WATCHED":
            return {
                ...state,
                watched: [action.payload, ...state.watched ],
            };
        case "REMOVE_MOVIE_FROM_WATCHLIST":
            return {
                ...state,
                watchList: state.watchList.filter(movie => movie.id !== action.payload),
            };
        case "REMOVE_MOVIE_FROM_WATCHED":
            return {
                ...state,
                watched: state.watched.filter(movie => movie.id !== action.payload),
            };
        case "ADD_MOVIE_TO_WATCHED":
            return {
                ...state,
                watchList: state.watchList.filter(movie => movie.id !== action.payload.id),
               watched: [...state.watched, action.payload]
            };
        case "RETURN_TO_WATCH_LIST":
            return {
                ...state,
                watchList: [...state.watchList, action.payload],
                watched: state.watched.filter(movie => movie.id !== action.payload.id)
            };
        default:
            return state;
    }
};

export default AppReducer;