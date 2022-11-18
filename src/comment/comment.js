import Reaction from "../reaction/reaction"
import Image  from "../image/image"

const Comment =(props)=>{
    const {src,name,comment,time,reactionCount} = props
    return(
        <div className="flex mb-2">
            <Image src={src} classStyle="w-12 rounded-full h-12 mr-3"/>
            <div className="flex flex-col">
                <div className="flex items-center">
                    <h3 className="font-bold mr-3 text-md">{name}</h3>
                    <p className="text-slate-500 font-semibold text-sm">{time} ago</p>
                </div>
                <p className="text-md font-medium">{comment}</p>
                <div className="flex mt-2">
                    <Reaction count={reactionCount}/>
                    <p className="ml-5 font-semibold cursor-pointer">Reply</p>
                </div>
            </div>
        </div>
    )
}

export default Comment