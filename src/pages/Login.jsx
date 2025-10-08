import { useState } from 'react'
import { Nav } from '../componentes/Nav'

export const Login = () => {
const [formData, setFormData] = useState(
  {
    val1:'',
    val2:'',
    val3:''
  })
const [data, setData] = useState([{val1:'val1',val2:'val2',val3:'val3'}])
  const doIt =(e)=>{
    e.preventDefault()
    if (formData.val1 === '' || formData.val2 === '' || formData.val3 === '')
      console.log('faltan datos')
    else
    setData(()=>[...data,formData])
    console.table(data)
  }
  

  const handleChange = (e) =>{
    const {name,value} = e.target
    setFormData({...formData,
      [name]:value,
    })
  }



  return (
    <div className='text-white bg-[#333] min-h-screen'>
        <Nav />
        <div> 
          <form onSubmit={doIt}>
            <input
              className='border w-35 m-1' 
              name='val1'
              value={formData.val1} 
              onChange={handleChange} />
            <input 
              className='border w-35 m-1' 
              name='val2' 
              value={formData.val2}
              onChange={handleChange} />
            <input 
              className='border w-35 m-1' 
              name='val3' 
              value={formData.val3}
              onChange={handleChange} />
            <input 
              className='border m-1' 
              type='submit'  
              value='enviar' />
          </form>
        </div>
        <div className='flex'>
        {data.map((d,index)=><div className='flex' key={index} >
          <div className=' m-1 p-1 border-1'>{d.val1}</div>
          <div className=' m-1 p-1 border-1'>{d.val2}</div>
          <div className=' m-1 p-1 border-1'>{d.val3}</div> </div>)}        
        </div>
    </div>
  )
}

//