import React,{useEffect,useState} from 'react'
import './RowPost.css'
import { imageUrl,APIKEY,baseUrl } from '../../constance/constance';
import axios from '../axios'
import YouTube from 'react-youtube'
function RowPost(props) {
  const[movie,setMovie]=useState([])
  const[ytkey,setYtkey]=useState('')
  useEffect(() => {
    axios.get(props.url).then((response)=>{
      console.log(response.data)
      setMovie(response.data.results)
    })
  }, []);
  const opts = {
    height: '390',
    width: '100%',
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 1,
    },
  };

  const handleTriler=(id)=>{
    console.log(id)
    axios.get(`movie/${id}/videos?api_key=${APIKEY}&language=en-US`).then((response)=>{
      console.log(response.data)
      if(response.data.results.length!==0){
        setYtkey(response.data.results[0])
      }
    })
  }
  return (
    <div className='row'>
        <h1>{props.title}</h1>
        <div className='posters'>
          {
            movie.map((obj)=>
            <img onClick={()=>handleTriler(obj.id)} className={props.isSmall ? 'small-poster':'poster'} src={`${imageUrl+obj.backdrop_path }`} alt=""/>
            ) 
          }
        </div>
       {ytkey && <YouTube videoId={ytkey.key} opts={opts} />}
    </div>
  )
}

export default RowPost