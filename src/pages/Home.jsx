
import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";

const Home = () => {
  const [value, setvalue] = useState([]);
  const [search, setsearch] = useState('burger');
  console.log(search)

  async function fetchRecipe(){
    let res=await fetch(`https://api.edamam.com/search?q=${search}&app_id=fd94191c&app_key=41752054e8b72a12550d671bfe12e433`)
    let data=await res.json()
    // console.log(data.hits)
    setvalue(data.hits)
  }
  useEffect(()=>{
    fetchRecipe()
  },[search])
  console.log(value)
  let searchref=useRef()
  const handlSearch=(e)=>{
    e.preventDefault();
    
    let searchvalue=searchref.current.value
     setsearch(searchvalue)
    console.log(searchvalue)
  }
  

  return (
    <div>
    <form className="d-flex d-flex w-50 p-3 m-auto mt-3 mb-3"  role="search">
    <input ref={searchref} className="form-control me-2" type="search" placeholder="Search Recipe here..." aria-label="Search" />
    <button onClick={handlSearch} className="btn btn-outline-success" type="submit">Search</button>
  </form>
    <div className="row row-cols-3d-flex justify-content-center gap-3 bg-info">
     {value.map((ele)=>{
     return <div className="card" style={{width: '23rem'}}>
  <img style={{borderRadius:"50%"}}src={ele.recipe.image} className="card-img-top " alt="..." />
  <div className="card-body">
    <h5 className="card-title">{ele.recipe.label}</h5>
    <Link style={{borderRadius:"20px"}} to='/SingleRecpie' state={ele} className="btn btn-primary">View Recipe</Link>
  </div>

</div>
})}
</div>
</div>
      
   
  )
}

export default Home
