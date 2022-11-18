const Image =(props)=>{
    const {src, alt, classname} = props
    return (
        <img src={src} alt={alt} classname={classname}/>
    )
}

export default Image