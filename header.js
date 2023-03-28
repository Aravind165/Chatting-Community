import React, { useState } from 'react';
import { MdCreate,MdSearch } from "react-icons/md";
import Modal from "react-responsive-modal";
import 'react-responsive-modal/styles.css'
import CloseIcon from '@mui/icons-material/Close';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import ExpandMore from '@mui/icons-material/ExpandMore';
import PeopleAltOutlined from '@mui/icons-material/PeopleAltOutlined';
import Input from '@mui/icons-material/Input';
import "./header.css"
import axios from 'axios'
const mystyle={
    width:"200px",
    height:"30px",
    backgroundColor: "#b0bec5",
    border: "0px solid black",
    borderRadius:"10px"
}
function Head(){
    const [isModalOpen,setIsModalOpen]= useState(false); 
    const [inputUrl,setInputUrl]= useState("");
    const [question,setQuestion] = useState("");
    const Close=(<CloseIcon/ >)
    const handleSubmit=async()=>{
        if(question!==""){
            await axios.post('/api/question')
            setIsModalOpen(false);
        }
    }
    return (
        <div className='qHeader'>
            <div className='qHeader__content'>
                <div className='qHeader__logo'>
                    <h3>Quora Clone</h3>
                </div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                    <div className="qHeader__search">
                        <div id='pair'>
                        <input type="text" placeholder="    Search Here"></input>
                        </div>
                    </div>
                    <div className='qHeader__create'>
                        <div id='pair1'>
                            <button style={mystyle} onClick={()=> setIsModalOpen(true)}><h4>Create Post</h4></button>
                            
                        </div>
                        <Modal 
                            open={isModalOpen}
                            closeIcon={Close}
                            onClose={()=>setIsModalOpen(false)}
                            closeOnEsc
                            center
                            closeOnOverlayClick={false}
                            styles={{
                                overlay:{
                                    height:"auto",
                                },
                            }}>
                                <div className='modal__title'>
                                    <h5>Share ur post</h5>
                                    <h5>Share ur link</h5>
                                </div>
                                <div className='modal__info'>
                                    <AccountCircleIcon className='avatar' />
                                    <div className='modal__scop'>
                                        <PeopleAltOutlined />
                                        <p>Public</p>
                                        <ExpandMore />
                                    </div>
                                </div>
                                <div className='modal___Field'>
                                    <input value={question} onChange = {(e) => setQuestion(e.target.value)}  style={{marginTop:"20px",border:"none",borderBottom:"1px solid lightgray"}}type="text" placeholder="   write ur post" />
                                    <div style={{
                                        display:"flex",
                                        flexDirection:"column",
                                        marginTop:"20px",
                                    }}><input type="text" value={inputUrl} onChange={(e)=> setInputUrl(e.target.value)} placeholder='   optional:put ur link' />
                                    
                                        {inputUrl !== "" && (<img style={{
                                            height:"40vh",
                                            objectFit:"contain",
                                        }} src={inputUrl} alt='displayimage' />
                                    )}
                                    </div>
                                </div>
                            <div style={{
                                display:"flex",
                                flexDirection:'column',
                                justifyContent:"center",
                                alignContent:"center",
                            }} className='modal__buttons'>
                                <button type="submit" style={{
                                    backgroundColor:"black",
                                    color:"white",
                                    width:"200px",
                                    height:"20px",
                                    borderRadius:"10px",
                                    padding:"10px",
                                    display:"flex",
                                    alignItems:"center",
                                    justifyContent:"center",
                                }}className='add' onClick={handleSubmit } >Add Post</button>
                                <button className='cancle' style={{width:"80px",borderRadius:"10px",marginTop:"10px"}} onClick={()=> setIsModalOpen(false)} >Cancel</button>
                                
                            </div>
                        </Modal>
                    </div>
            </div>

           
        </div>
    )
}
export default Head;
