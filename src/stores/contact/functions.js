import { baseAxios } from '../index'

export const getAllContact = (dispatch) => {
    baseAxios.get("/contact")
    .then((res) => {
        dispatch({type: "SET_CONTACT", data: res.data.data.reverse()})
    })
    .catch((err) => {
        console.log("FAILED GET LIST : ", err)
    })
}

export const getOneContact = (dispatch, id) => {
    baseAxios.get(`/contact/${id}`)
    .then((res) => {
        dispatch({type: "SET_CONTACT_DETAIL", data: res.data})
    })
    .catch((err) => {
        console.log("FAILED GET DETAIL : ", err)
    })
}

export const addContact = (dispatch, data, navigate) => {
    baseAxios.post("/contact", data)
    .then((res) => {
        navigate('/')
    })
    .catch((err) => {
        console.log("FAILED ADD : ", err)
    })
}

export const editContact = (dispatch, data, navigate, id) => {
    baseAxios.put(`/contact/${id}`, data)
    .then((res) => {
        navigate('/')
    })
    .catch((err) => {
        console.log("FAILED : ", err)
    })
}

export const deleteContact = (dispatch, id) => {
    baseAxios.delete(`/contact/${id}`)
    .then((res) => {
        getAllContact(dispatch)
    })
    .catch((err) => {
        console.log("DELETE ERROR : ", err)
    })
}