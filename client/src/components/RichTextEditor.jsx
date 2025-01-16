import React from 'react';
import ReactQuill from 'react-quill';

const RichTextEditor = ({input, setInput}) => {
    const handleChange = (content) => {
        setInput({...input, description:content});
    }
   
    return <ReactQuill theme="snow" value={input.description} onChange={handleChange} />;
}

export default RichTextEditor;