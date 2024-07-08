import React from 'react'
import { useParams } from 'react-router-dom'
import articleContent from '../../utils/Content'
function Services(){
  const {title} = useParams();
  const article = articleContent.find((article)=> article.name === title)
  if(!article) return <h2 className='font-bold text-2xl text-center pt-5'>Article does not exist.</h2>
  return (
    <div>
      <h1>Services page {article.title}</h1>
    {article.content.map((para,index)=>(
      <p key={index}>{para}</p>
    ))}
        </div>
  )
}

export default Services