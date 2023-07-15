import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

function Logout()
{
    const redi = useNavigate();

    useEffect(()=>{
        // sessionStorage.removeItem('user_id');
        // redi('/');
        const storedUserId = sessionStorage.getItem('user_id');
        // console.log('Stored User ID:', storedUserId);

        sessionStorage.removeItem('user_id');
        sessionStorage.removeItem('appointment_id');
        // const storedUserId1 = sessionStorage.getItem('user_id');
        // console.log('Stored User ID:', storedUserId1);
        redi('/');
    })
    return(
        <>
            {/* sessionStorage.removeItem('user_id'); */}
        </>
    )
}

export default Logout;