import React from 'react'
import ReactDom from 'react-dom'
import './index.css'
import {data} from './books'
import Book from './Book'
function  BookList() {

  return (
    <section className='booklist'>
      {data.map((book)=>{
        return(
          <Book key={book.id} book={book}/>

        )
        
      })}

      {/* <Book title={firstBook.title} author={firstBook.author||"elias"} img={firstBook.img}/>
      <Book title={secondBook.title} author={secondBook.author} img={secondBook.img}>
        <p style={{marginTop:"20px"}}>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sint optio dolorum recusandae. Iusto quod expedita nesciunt earum veniam eius laudantium!</p>

      </Book> */}


    </section>
    )
  
}



ReactDom.render(<BookList/>,document.getElementById("root"))