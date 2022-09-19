import React, { useEffect } from 'react'

const Mycontent = () => {
    let isLoading = true;
    let API = "https://api.tvmaze.com/search/shows?q=friends"

    const fetchApiData = async (url) => {
        try {
            const res = await fetch(url)
            const data = await res.json();
            console.log(data)
            isLoading = false
        } catch (err){
            console.log(err)
        }
    }

    useEffect(() => {
      fetchApiData(API)
    }, [])
    

    if(isLoading){
        return <><h3>Loading......</h3></>
      }
  return (
    <div>Mycontent</div>
  )
}

export default Mycontent