import React from 'react';
import "./footer.css"
import { FiUsers } from "react-icons/fi";
import { MdAccountCircle,MdCreate,MdHome,MdNotificationsNone } from "react-icons/md";
function Foot(){
    return (
        <div className='qFooter'>
            <div className='qFooter__content'>
                <div className='qFooter__home'>
                    <MdHome size={"2em"} />
                </div>
                <div className='qFooter__friends'>
                    <FiUsers size={"2em"} />
                </div>
                <div className='qFooter__create'>
                    <MdCreate size={"2em"} />
                </div>
                <div className='qFooter__notification'>
                    <MdNotificationsNone size={"2em"} />
                </div>
                <div className='qFooter__avatar'>
                    <MdAccountCircle size={"2em"} />
                </div>
            </div>
        </div>
    )
}
export default Foot;
