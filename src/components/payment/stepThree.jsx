import React, { useEffect, useState } from 'react'
import './stepThree.css'
import {FaCheck} from 'react-icons/fa6'
import { useSelector, useDispatch } from 'react-redux'
import { verifyPaymentAsync } from '../../redux/paymentSlice'
import Progress from '../progress'
import { useNavigate } from 'react-router-dom'
import {  toast } from "react-toastify";



export default function StepThree({values}) {
    const [verify, setVerify] = useState(false)
    const {isVerified} = useSelector(state=>state.payment)
    const dispatch = useDispatch()
    console.log('verify',isVerified)
    console.log('ref',values.ref)
    const navigate = useNavigate()
   

  

    useEffect(()=>{  
        setVerify(true)
           toast.info("Verifying...");
            dispatch(verifyPaymentAsync({ref:values.ref}))
    }, [dispatch])

    useEffect(()=>{
        if(isVerified){
          
          
        }
    }, [isVerified])

    
  return (
   <>
   <Progress  percentage='100%' current='3' last='3'/>
    <div className='three'>
         <div className="three-top">
         {
            verify && (
             <div>Verifying...</div>
            )
        }

        {
          isVerified && (
            <div>Thank you {values.name}, please make sure you stamp your Nacos due receipt.</div>
          )
        }
         </div>
       {
        isVerified ? (
          <div className="three-buttons">
          <button className="prev-btn" disabled >Go Back</button>
          <button
            className="continue-btn"
            onClick={()=>{
              window.location.replace('/')
            }}
          >
            Go to Homepage
          </button>
        </div>
        ) : (
          <div className="three-buttons">
          <button className="prev-btn" disabled >Go Back</button>
          <button
            className="continue-btn"
          >
            Loading...
          </button>
        </div>
        )
       }
    </div>
   </>
  )
}
