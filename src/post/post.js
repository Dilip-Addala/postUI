import Profile from "../profile/profile"
import Image from "../image/image"

const Post = ()=>{
    return (
        <div className="w-52 bg-slate-200 h-full w-full rounded-xl p-3">
            <Profile/>
            <h1>Web Design templates selection</h1>
            <div className="flex flex-wrap">
                <Image src="" alt="" className=""/>
            </div>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolor magna alique</p>
            
        </div>
    )
}

export default Post