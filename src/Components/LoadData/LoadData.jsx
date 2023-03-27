import React, { useEffect, useState } from 'react';
import Button from '../Button/Button';
import Modal from '../Modal/Modal';
import ShowData from '../ShowData/ShowData';

const LoadData = () => {
    const [showAll, setShowAll] = useState(false)
    const [users,setUsers] = useState([]);
    const [uniqueId,setUniqueId] = useState(null)
    const [singleModal,setModal] = useState({})
    

    useEffect(()=>{
        fetch(`https://openapi.programming-hero.com/api/ai/tool/${uniqueId}`)
        .then(res=>res.json())
        .then(data => setModal(data.data))
    },[uniqueId])


    useEffect(()=>{
        const loadData = async() =>{
            const res = await fetch(`https://openapi.programming-hero.com/api/ai/tools`);
            const data = await res.json();
            setUsers(data.data.tools)
        }
        loadData();
    },[])
    return (
        <>
        <div className=' grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-evenly gap-20 mt-20 mx-20'>
            {
                users.slice(0,showAll ? 12 : 6 ).map((user,index)=><ShowData user={user} key={index} setUniqueId={setUniqueId} ></ShowData>)
            }
        </div>
        {
            !showAll && (
                <span onClick={()=>setShowAll(true)}><Button>See More</Button></span>
            )
        }
        <Modal singleModal={singleModal}></Modal>
        </>
    );
};

export default LoadData;