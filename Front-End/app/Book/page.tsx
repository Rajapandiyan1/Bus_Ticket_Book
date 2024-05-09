"use client"
import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.css'
function Page() {
    const [data, setData] = useState({seat:0, name: "", from: "", to: "" ,cab:"",dates:"",time:"Start : 0:00 to End : 0:00 ",price:0})
    const [err, setErr] = useState({seatReq:false, nameReq: false, fromReq: false, toReq: false ,same:false,cab:false});
    let suces="bg-green-100 border border-green-400 text-green-700 my-3 px-4 py-3  rounded w-full absolute";
    let warin="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative"
    let [sucess,setsuccess]=useState(false);
    let [bus,setbus]=useState([]);
    let [seat,setseat]=useState([]);
    let [response,setres]=useState("");
    let [reseat,setreseat]=useState([]);


function checkseat() {

    setData((prev)=>{
        if(prev.from != '' && prev.to !=''  && prev.dates != ''){
            getseat()
        }
        return prev;
    })
}

function getTime() {
    setData((prev)=>{
        if(prev.from != '' && prev.to !='' && prev.cab != '' && prev.dates != ''){
            getseat()
            setData((prev)=>{
                let cab=prev.cab;
                bus.map((datas)=>{
                    if(cab==`Bus - ${(datas.Bus)}`){
                        let bustime;
                        if(data.from=="pudukkottai"){
                            bustime=`Start : ${datas.pud_chenn.start_time} to End : ${datas.pud_chenn.end_time}`
                        }
                        else{
                            bustime=`Start : ${datas.chenn_pud.start_time} to End : ${datas.chenn_pud.end_time}`  
                        }
                        setData((prev)=>{
                            
                           return {...prev,price:datas.seat_price,time:bustime }
                        })
                    }
                    return datas;
                })
                return prev;
            })
        }else{
            setData((prev)=>{
                return {...prev,price:0,time:"Start : 0:00 to End : 0:00 "}
            })
        }
return prev;
    })

}

    useEffect(()=>{
        const currentTimeMillis = Date.now();
        const currentDate = new Date(currentTimeMillis);
        
        const year = currentDate.getFullYear();
        const month = (currentDate.getMonth() + 1).toString().padStart(2, '0'); // Adding 1 because months are zero-based
        const day = currentDate.getDate().toString().padStart(2, '0');
        
        const formattedDate = `${year}-${month}-${day}`;
        
       setData((prev)=>{return {...prev,dates:formattedDate}}); 
        fetch("http://localhost:3001/Bus_details").then((data)=>{
            return data.json();
        }).then((data)=>{
setbus(data.data)
        })
    },[])
        function book(e) {
            e.preventDefault();

        // Check if any field is empty
            if (data.name === "") {
            setErr(prev => ({ ...prev, nameReq: true }));
            } else {
            setErr(prev => ({ ...prev, nameReq: false }));
            }
            
            if(data.seat===0){
                setErr(prev => ({ ...prev, seatReq: true }));
                }else{
                setErr(prev => ({ ...prev, seatReq: false })); 
                }
            if(data.from===data.to){
            setErr(prev => ({ ...prev, same: true }));
            }else{
            setErr(prev => ({ ...prev, same: false })); 
            }
            if(data.cab===""){
            setErr(prev => ({ ...prev, cab: true }));
            }else{
            setErr(prev => ({ ...prev, cab: false }));
            }
            if (data.from === "") {
            setErr(prev => ({ ...prev, fromReq: true }));
            } else {
            setErr(prev => ({ ...prev, fromReq: false }));
            }
            if (data.to === "") {
            setErr(prev => ({ ...prev, toReq: true }));
            } else {
            setErr(prev => ({ ...prev, toReq: false }));
            }

        // If all fields are filled, proceed with form submission
            if (data.name !== "" && data.from != data.to && data.from !== "" && data.to !== "" && !err.same && data.cab!="" && data.seat!=0) {
            


                setData((prev)=>{
                    let cab = prev.cab;
                
                   let Busdata= bus.find((datas)=>{
                        if(`Bus - ${datas.Bus}`==cab){
                            return datas;
                        }
                    });
                    let datee=data.dates;
        
                    fetch("http://localhost:3001/book_Ticket",{
                    method:"POST",
                    body:JSON.stringify({...data,Busdata}),
                    headers:{
                        "Content-Type":"application/json"
                    }
                }).then((res)=>{
                    return res.json()
                }).then((datas)=>{
                    setsuccess(true);
                
                    setres(datas);
                    setseat([]);
                    setTimeout(()=>{
                    setsuccess(false)
                    },3000)
                }).finally(()=>{
                    
        const currentTimeMillis = Date.now();
        const currentDate = new Date(currentTimeMillis);
        
        const year = currentDate.getFullYear();
        const month = (currentDate.getMonth() + 1).toString().padStart(2, '0'); // Adding 1 because months are zero-based
        const day = currentDate.getDate().toString().padStart(2, '0');
        
        const formattedDate = `${year}-${month}-${day}`;
                    setData({price:0, name: "", from: "", to: "" ,cab:"",seat:0,dates:formattedDate,time:"Start : 0:00 to End : 0:00 "})
    
                })
                return prev
                });


        }
    }
function getseat() {
    setData((prev)=>{
        let cab = prev.cab;
    
       let Busdata= bus.find((datas)=>{
            if(`Bus - ${datas.Bus}`==cab){
                return datas;
            }
        });
        let datee=data.dates;
        fetch("http://localhost:3001/seat",{body:JSON.stringify({dates:datee,Busdata,"from":data.from}),method:"POST",headers:{"Content-Type":"application/json"}}).then((data)=>{
        return data.json()
    }).then((data)=>{
        let copy=[...data.seatAvailable];
setseat([]);
setseat(copy);
setTimeout(() => {
setseat(copy);
}, 1000);



    })
        return prev;
    })
    
}
    return (
        <>
        <div>
       {sucess && <div className={sucess ? suces : warin} role="alert">
    <strong className="font-bold">Success: {response.Ok}</strong>
    <span className="block sm:inline">Your action was successful.</span>
    </div>}
        </div>
        <div className=" flex justify-center items-center">
            <div className="container mx-auto 100vh mt-3 mb-3">
                <form method='POST' className="max-w-lg mx-auto">
                <div className="mb-3">
                    <label htmlFor="city" className="block text-sm font-medium text-gray-700">Enter you Name</label>
                        <input type="text" value={data.name} onChange={(e) => setData(prev => ({ ...prev, name: e.target.value }))} id="name" name="name" className={"mt-2 shadow appearance-none  rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" + (err.nameReq ? " border-red-500" : "")} />
                        {err.nameReq && <p className="text-red-500 text-xs italic mt-2">Name field is required</p>}
                    </div>
                   
                    <div className="row">
                        <div className="col-6">
                    <div className="mb-3">
                    <label htmlFor="city" className="block text-sm font-medium text-gray-700">Select From city:</label>
            <select id="city" value={data.from} onChange={(e) => {setData((prev) => {getTime();return{ ...prev, from: e.target.value }}); }} name="city" className="mt-2 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500">
        <option selected value="">Select One</option>
        
        <option value="pudukkottai">Pudukkottai</option>
        <option value="chennai">Chennai</option>
        </select>
            {err.fromReq && <p className="text-red-500 text-xs italic mt-2">From field is required</p>}
                    </div>

                        </div>
                        <div className="col-6">
                    <div className=" my-1">
                    <label htmlFor="city" className="block text-sm font-medium text-gray-700">Select To city:</label>
                    {/* } */}
                    <select id="city" value={data.to} onChange={(e) => {setData((prev) => {getTime();return { ...prev, to: e.target.value }})}} name="city" className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500">
  <option selected value="">Select One</option>

    <option value="pudukkottai">Pudukkottai</option>
    <option value="Chennai">Chennai</option>
  </select>
  
                        {err.toReq && <p className="text-red-500 text-xs italic mt-2">To field is required</p>}
                        
                        
                    </div>
                        </div>
                        
                    {err.same && !err.fromReq && !err.toReq  && <p className="text-red-500 text-xs italic mt-2">Sorry ! you have  selected  start address and  end address equal, so can you change from or to address</p>}
                    </div>
      


                    <div className="row my-1">
                    <label htmlFor="city" className="col-6 text-sm font-medium text-gray-700">Select Cab</label>
                     
               <label htmlFor="city" className=" col-6  text-sm font-medium text-gray-700">Select To Date :</label>      
                    <div className="col-6">
                    {/* {(e) => {setData((prev) => {{ ...prev, cab: e.target.value })); getseat()} }} */}
                    <div className="mb-1">
                <select id="city" value={data.cab} onChange={(e)=>{ setData((prev)=>{checkseat(); getTime();return {...prev,cab:e.target.value}}); }} name="city" className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500">
                <option selected value="">Select One</option>
                {bus.map((data,arr)=>{
            return <option key={arr} value={`Bus - ${(arr+1)}`}>
               BUS - {data.Bus}
            </option>
        })}
        </select>
                                                
        {err.cab && <p className="text-red-500 text-xs italic mt-1">Taxi  field is required</p>}
                    </div>
                        </div>  
                        <div className="col-6">
                        {/* setData(prev) => ({ ...prev, dates: e.target.value }));getseat()} */}
    <input type="date"  value={data.dates} onChange={(e) => {setData((prev)=>{
        getTime(); getseat();
        return {...prev,dates: new Date(e.target.value).toISOString().slice(0, 10).replace("/","-") }}); }} className="border  border-gray-300 rounded-md py-2 px-4 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"/>
                        </div>
           
                    
</div>

<div className="row">
    <div className="col-6 ">
    <label htmlFor="city" className=" text-sm font-medium text-gray-700"> Start Time and End Time</label>  

                    <div className=" mt-1"><input disabled={true} style={{fontSize:"12px"}} type="text" value={data.time}  id="name" name="name" className={"shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" + (err.nameReq ? " border-red-500" : "")} /></div>
    
    
        </div>
    <div className="col-6 ">
    <div className="mb-3">
                    <label htmlFor="city" className="block text-sm font-medium text-gray-700">Seat Price</label>
                        <input type="text" disabled={true} value={data.price} id="name" name="name" className={"mt-2 shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" + (err.nameReq ? " border-red-500" : "")} />
                    </div>
    </div>
</div>
                    


                    

<div className="mb-2">
                    <label htmlFor="city" className="block text-sm font-medium text-gray-700">Select You seat</label>
                <select id="city"value={data.seat} onChange={(e) => {setData(prev => ({ ...prev, seat:Number( e.target.value) })); }} name="city" className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500">
                <option selected value={""}>Select One</option>
                {seat.map((data,arr)=>{
        
                    
            return (data==true) ? <option key={arr} value={arr+1}> Seat - {arr+1}</option> : <></>
        })}
        </select>
                                                
        {err.seatReq && <p className="text-red-500 text-xs italic mt-2">Seat  field is required</p>}
                    </div>

                    <div className="flex items-center justify-center">
                        <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" onClick={(e) => book(e)}>Submit</button>
                    </div>
                </form>
            </div>
        </div>
        </>
    );
}

export default Page;