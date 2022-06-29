import React,{useEffect, useState} from 'react'
import { APIKEY,imageUrl} from '../../constance/constance';
import './Baner.css'
import axios from '../axios'
function Baner() {
  const [movie, setMovie] = useState();
  useEffect(() => {
    axios.get(`trending/all/week?api_key=${APIKEY}&language=en-US`).then((responce)=>{     
      let x = Math.floor((Math.random() * 20) + 1);
      console.log(responce.data.results[x])
      setMovie(responce.data.results[x])
    })
    
  }, []);
  return (
    <div
    style={{backgroundImage:`url(${movie ? imageUrl+movie.backdrop_path:""})`}}
     className='baner'>
        <div className='content'>
            <h1 className='title'>{movie ? movie.title:""}</h1>
            <div className='content-buttons'>
                <button className='buttons'>play</button>
                <button className='buttons'>My list</button>
            </div>
            <h1 className='discription'>{movie ? movie.overview:""}</h1>
        </div>
        <div className="fade-bottom">
        </div>
    </div>
  )
}

export default Baner