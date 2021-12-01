import React from 'react'
import { marked } from 'marked'

const Post = ({article}) => {
    
    const {types, description, pics, details} =article.fields
    const postDescription = marked(description)
    const postDetail = marked(details)
    return (
        <div className='post'>
        <h2 className='title'>{types}</h2> 
        <section dangerouslySetInnerHTML={{ __html: postDescription}} /> 
        {pics && <img className='artPics' src={pics.fields.file.url} alt={types} title={types} />}
        <p dangerouslySetInnerHTML= {{ __html: postDetail}} />
        </div>
    )
}


export default Post