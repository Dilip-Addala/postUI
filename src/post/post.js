import Image from "../image/image";
import Reaction from "../reaction/reaction";
import Comment from "../comment/comment";
import { faFaceSmile } from "@fortawesome/free-regular-svg-icons";
import { faShare } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Post = () => {
  return (
    <div className="w-52 md:w-2/6 bg-white h-full w-full rounded-xl p-3 flex flex-col justify-evenly">
      <div className="flex items-center mb-3">
        <Image
          src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1600"
          classStyle="w-14 rounded-full h-14 mr-3"
        />
        <div className="flex flex-col">
          <h2 className="text-lg font-bold">Wade Warren</h2>
          <p className="text-slate-500 font-semibold">July 17, 2018</p>
        </div>
      </div>
      <h1 className="text-2xl font-extrabold mb-3">
        Web Design templates Selection
      </h1>
      <div className="">
        <div className="grid gap-1 flex grid-cols-3 mb-1">
          <Image
            src="https://images.pexels.com/photos/3484061/pexels-photo-3484061.jpeg?auto=compress&cs=tinysrgb&w=1600"
            classStyle="rounded-tl-lg"
          />
          <Image
            src="https://images.pexels.com/photos/4245826/pexels-photo-4245826.jpeg?auto=compress&cs=tinysrgb&w=1600"
            classStyle="h-full"
          />
          <Image
            src="https://images.pexels.com/photos/2387418/pexels-photo-2387418.jpeg?auto=compress&cs=tinysrgb&w=1600"
            classStyle="rounded-tr-lg h-full"
          />
        </div>
        <div className="grid gap-1 flex grid-cols-2">
          <Image
            src="https://images.pexels.com/photos/15286/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=1600"
            classStyle="rounded-bl-lg "
          />
          <Image
            src="https://images.pexels.com/photos/6043246/pexels-photo-6043246.jpeg?auto=compress&cs=tinysrgb&w=1600"
            classStyle=" rounded-br-lg "
          />
        </div>
      </div>
      <p className="text-md font-medium mb-3">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolor magna alique
      </p>
      <Reaction count="34" />
      <div className="flex items-center justify-between bg-slate-200 rounded-lg p-3 h-12 mb-3 mt-1">
        <input
          placeholder="write a comment"
          className="outline-none border-none bg-slate-200 placeholder-slate-700 font-semibold mr-3 flex flex-grow"
        />
        <div className="flex items-center">
          <FontAwesomeIcon
            icon={faFaceSmile}
            className="ml-3 text-xl cursor-pointer"
          />
          <FontAwesomeIcon
            icon={faShare}
            className="ml-3 text-xl cursor-pointer text-blue-600"
          />
        </div>
      </div>
      <Comment
        src=" https://images.pexels.com/photos/7562313/pexels-photo-7562313.jpeg?auto=compress&cs=tinysrgb&h=566.525&fit=crop&w=633.175&dpr=1"
        name="Leslie Alexander"
        comment="Lorem ipsum dolor sit amet, consectetur."
        time="25 minutes"
        reactionCount="12"
      />
      <Comment
        src="https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=1600"
        name="Tina Mills"
        comment="Dolor sit ameteiusmod consectetur adipiscing elit."
        time="3 minutes"
        reactionCount="0"
      />
      <button className="bg-slate-200 p-3 rounded-lg font-semibold ">
        Show more comments
      </button>
    </div>
  );
};

export default Post;
