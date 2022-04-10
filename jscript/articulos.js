 export const articulos = async () => {
    const urlBase= "https://workshop-1-f10.herokuapp.com/articulos"
    
    const res = await fetch(urlBase)
    
    const  results  = await res.json()
    
    return results
}