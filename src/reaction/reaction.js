import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Reaction = props =>{
    const {count} = props
    return(
        <div className="flex items-center">
            <FontAwesomeIcon icon={faHeart} className="text-red-600 cursor-pointer"/>
            <h1 className="font-bold ml-2">{count}</h1>
        </div>
    )
}


export default Reaction