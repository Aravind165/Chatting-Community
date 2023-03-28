import React, { useState } from 'react';
import "./Post.css";
import { MdAccountCircle, MdArrowDownward, MdArrowDropDown, MdArrowUpward, MdChatBubbleOutline, MdMoreHoriz, MdOutlineArrowDownward, MdOutlineArrowUpward, MdOutlineMoreHoriz, MdOutlineRepeatOn, MdShare} from "react-icons/md";
import Modal from "react-responsive-modal";
import 'react-responsive-modal/styles.css';
import CloseIcon from '@mui/icons-material/Close';
function Post(){
    const [isModalOpen,setIsModalOpen]= useState(false); 
    const Close=(<CloseIcon/ >)

    return(
        <div className="post">
            <div className="post__info">
                <MdAccountCircle size={"2em"} />
                <h4>User Name</h4>
                <small>Time Stamp</small>
            </div>
            <div className="post__body">
                <p>
                    This is post.
                </p>
            </div>
            <div className="post__footer">
                <div className="post__footerAction">
                    <MdOutlineArrowUpward size={"1.5em"}/>
                    <MdOutlineArrowDownward size={"1.5em"}/>
                </div>
                <MdOutlineRepeatOn size={"1.5em"} />
                <MdChatBubbleOutline size={"1.5em"} />
                <div className="post__footerLeft">
                    <MdShare size={"1.5em"} />
                    <MdOutlineMoreHoriz size={"1.5em"}/>
                </div>
            </div>
            <p style={{
                color: "rgba(0,0,0,0.5)",
                fontSize: "12px",
                fontWeight: "bold",
                margin:"10px 0"
            }}>1Comment</p>
            <div style={{
                marginTop:"5px",
                padding: "5px 0px 0px 20px",
                borderTop: "1px solid black"
            }}className="post__answer">
                <div style={{
                    display: "flex",
                    flexDirection: "column",
                    width: "100%",
                    padding: "10px 5px",
                }} className="post__answer-container">
                    <div style={{
                    display: "flex",
                    alignItems: "center",
                    marginBottom:"10px",
                    fontSize:"12px",
                    fontWeight: "600",
                    color:"#888"
                }} className="post__answered">
                        <MdAccountCircle size={"2em"}/>
                        <div style={{
                            margin: "0px 10px"
                        }}className="post-info">
                            <p>
                                username
                            </p>
                            <span>TimeStamp</span>
                        </div>
                    </div>
                    <div className="post-answer">Comments section</div>
                </div>
            </div>
        </div>
    )
}

export default Post;