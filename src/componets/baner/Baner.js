import React,{useEffect} from 'react'
import './Baner.css'
function Baner() {
  useEffect(() => {
    
    
  }, []);
  return (
    <div className='baner'>
        <div className='content'>
            <h1 className='title'>Title</h1>
            <div className='content-buttons'>
                <button className='buttons'>play</button>
                <button className='buttons'>My list</button>
            </div>
            <h1 className='discription'>In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without</h1>
        </div>
        <div className="fade-bottom">
        </div>
    </div>
  )
}

export default Baner