import React, { Component } from 'react';


export const uploadFile = async (state, props) => {
    const data = new FormData()
    data.append('file', state.selectedFile)
    const result = await fetch("http://localhost:3000/uploadResume", {
        method: "POST",
        headers: {
            "Authorization": `Bearer ${localStorage.getItem('user_token')}`
        },
        body: data
    })
    if (result.ok) {
        return{
            selectedFile: null,
            uploadMsgVisible: true,
            successMsg: "Resume is uploaded"
        }

    }
    else {
        const err = await result.json()
        return {
            selectedFile: null,
            uploadMsgVisible: true,
            errorMsg: err
        }
    }
}

const endsWith = (str, suffix)  => {
    return str.toString().indexOf(suffix, str.length - suffix.length) !== -1;
}

export const chooseFile = (file) => {
    if (endsWith(file['name'], '.doc') || endsWith(file['name'], '.pdf')) {
        return{
            selectedFile: file
        }
    }
    else {
        return {
            errorMsg: { upload_error: "Accepts only Word documents (.doc) and PDF (.pdf)" },
            uploadMsgVisible: true
        }
    }

}


