import React from 'react'
import './Tag.css'
export const Tag = ({tagName, selectTag, selected}) => {
  const tagStyle = {
    HTML: {backgroundColor: "#fda821"},
    CSS: {backgroundColor: "#15d4c8"},
    JAVASCRIPT: {backgroundColor: "#ffd12c"},
    REACT: {backgroundColor: "#4cdafc"},
    Default: {backgroundColor: "#f9f9f9"},
  }
  return (
    <button type='button' 
    style={selected? tagStyle[tagName]:tagStyle.Default}
    className='tag' onClick={()=>selectTag(tagName)}>
    {tagName}
</button>
  )
}
