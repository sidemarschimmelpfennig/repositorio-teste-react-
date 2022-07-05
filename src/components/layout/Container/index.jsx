import './style.css'



function Container(props){

return (
    <div className='container model'>
        {props.children}
    </div>
)


}

export default Container