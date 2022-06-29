import React,{useEffect,useState} from 'react'
import './RowPost.css'
import { imageUrl } from '../../constance/constance';
import axios from '../axios'
function RowPost(props) {
  const[movie,setMovie]=useState([])
  useEffect(() => {
    axios.get(props.url).then((response)=>{
      console.log(response.data)
      setMovie(response.data.results)
    })
  }, []);
  return (
    <div className='row'>
        <h1>{props.title}</h1>
        <div className='posters'>
          {
            movie.map((obj)=>
            <img className={props.isSmall ? 'small-poster':'poster'} src={`${imageUrl+obj.backdrop_path }`} alt="" />
               ) 
          }
        </div>
    </div>
  )
}

export default RowPost