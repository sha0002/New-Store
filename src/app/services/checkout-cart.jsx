export const handleCheckout = async (body)=>{
    const res = await fetch('/api/CheckOut',{
        method:"POST",
        headers:{
            "Content-Type":"application/json"
        },
        body:JSON.stringify(body)
    })
    const result = await res.json()
    return result.sessions_url
}