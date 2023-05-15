import Button from '../Button/Button'
import './ErrorModule.css'

const ErrorModule =({title,message,onConfirm})=>{
    return (
        <div >
            <div className='backdrop' onClick={onConfirm}/>
            <div className='modal'>
            <header className='header'><h2>{title}</h2></header>
            <div className='contents'><div className='content'><p>{message}</p></div>
            <footer className='actions'>
                <Button onClick={onConfirm}>Okay</Button>
            </footer></div>
            
            </div> 
        </div>
    )
      
}

export default ErrorModule