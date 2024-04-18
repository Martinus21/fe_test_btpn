const initialState = {
    listContact: null,
    detailContact: null,
};

const reducer = ((state = initialState, action) => {
    let { type, data } = action;
    switch (type) {
        case "SET_CONTACT":
            return {
                listContact: data
            }
        case "SET_CONTACT_DETAIL":
            return {
                ...state,
                detailContact: data
            }
        case "SET_CONTACT_ADD": 
            return {
                ...state,
                list: data
            }
        default : 
            return state;
    }
})

export default reducer;
