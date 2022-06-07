import React, { useState,useEffect } from 'react'
import axios from 'axios'

const TODO = () => {
    const [text,setText] = useState('');
    const [data, setData] = useState([]);
    const handleSubmit = (e)=>{
        e.preventDefault()
        const payload = {
            input : text,
            status : false 
        }
        axios.post(`http://localhost:8080/todo`,payload).then(
            
            setData([...data, payload] )
        )
        setText('')
    }

    const getData = ()=>{
        axios.get(`http://localhost:8080/todo`).then(({data})=>{
            setData(data)
        })
    }
    useEffect(()=>{
        getData();
    }, [])

    const handleDelete = (id)=>{
        axios.delete(`http://localhost:8080/todo/${id}`)
        
        let filterData = data.filter((el)=>{
            return id!==el.id
        }) 
        setData([...filterData])
    }

    const toggle = (id)=>{
        data.map((el)=>id==el.id? el.status= !el.status : el )
        setData([...data])
    }

  return (
    <div>
        <form onSubmit={handleSubmit}>
            <input type="text" name="input" value={text} onChange={(e)=>setText(e.target.value)} />
            <input type="submit" />
        </form>
        <div >
            {data.map((el)=>(
                <div style={{display:"flex",margin:"auto", width: "30%"}} key={el.id}>{el.input} <p>{el.status? "Completed" : "Not completed"}</p><input type='checkbox' onClick={()=>toggle(el.id)}/><button onClick={()=> handleDelete(el.id)}>Delete</button></div>
            
            ) )}    
        </div>
      
    </div>
  )
}

export default TODO
