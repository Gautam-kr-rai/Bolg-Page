import { useContext } from "react";
import { useRef } from "react";
import { PostList } from "../store/pos-list-store";

const Createpost = () => {
       
     const {addPost}=useContext(PostList)
      
      const userIdElement = useRef();
      const posTitileElement = useRef();
      const postBodyElement = useRef();
      const reactionsElement = useRef();
      const tagsElement = useRef();

      const  handleSubmit =(event)=>{
             event.preventDefault();
             const userId = userIdElement.current.value;

             const postTitle = posTitileElement.current.value;
             const postBody = postBodyElement.current.value;
             const reactions = reactionsElement.current.value;
        const tags = tagsElement.current.value.split(' '); 

        userIdElement.current.value="";
        posTitileElement.current.value="";
        postBodyElement.current.value="";
        reactionsElement.current.value="";
        tagsElement.current.value="";



        addPost(userId,postTitle,postBody,reactions,tags)
      }

  return (
    <>
      <form className="create-post"   onSubmit={handleSubmit}>
         
      <div className="mb-3">
          <label htmlFor="userId" className="form-label">User Id</label>
          <input type="text" 
               ref = {userIdElement}
          className="form-control" id="userId" 
           placeholder="Enter your user id"/>
          
        </div>
        
        <div className="mb-3">
          <label htmlFor="title" className="form-label">Post Title</label>
          <input type="text" 
              ref={posTitileElement}
          className="form-control" id="title" 
           placeholder="how are you feeling today.."/>
          
        </div>
        <div className="mb-3">
          <label htmlFor="body" className="form-label">Post content</label>
          <textarea rows={4} type="text" 
          
           ref={postBodyElement}
          className="form-control" id="Body" 
           placeholder="Tell us more about it.."/>
          
        </div>
        <div className="mb-3">
          <label htmlFor="reactions" className="form-label">No. of Ractions</label>
          <input type="text"
             ref={reactionsElement}
          className="form-control" id="reactions" 
           placeholder="how many people reacted to this post "/>
          
        </div>
        <div className="mb-3">
          <label htmlFor="tags" className="form-label">Enter hashtag u want heilight</label>
          <input type="text"
             ref={tagsElement} 
          className="form-control" id="tags" 
           placeholder="Enter your tag using space "/>
          
        </div>
        <button type="submit" className="btn btn-primary">post</button>
      </form>
    </>
  )
}
export default Createpost;