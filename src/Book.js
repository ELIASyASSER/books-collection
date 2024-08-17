
const Book = (props)=>{
    //attribute,event handler
    //onClick,onMouseOver
    const {img,title,author,children} = props.book
      return <article className='book'>
            <img src={img}/>
            <h1>{title}</h1>
            <h4 style={{color:'#888',fontSize: '18px',
            marginTop:'2rem',letterSpacing:'1.5px'}}>{author||"elias"}</h4>
            {/* {children} */}
            <button type='button' onClick={function () {
              alert("Added to The Shopping Cart")
            }}>Add To My Cart</button>
            </article>
    }

export default Book