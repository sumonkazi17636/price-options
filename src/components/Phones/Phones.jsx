import { useEffect, useState } from "react";
import axios from "axios";
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';


const Phones = () => {
    const [phones,setPhones] = useState([])
    useEffect(()=>{
        axios.get('https://openapi.programming-hero.com/api/phones?search=iphone')
        .then(data=>{
            const phoneData = data.data.data;
            const phoneWithFakeData = phoneData.map(phone=>{
                const obj ={
                    name:phone.phone_name,
                    price:parseInt(phone.slug.split('-')[1])
                }
                return obj;
            })
            console.log(phoneWithFakeData)
            setPhones(phoneWithFakeData)
        })
    },[])
    return (
        <div>
            <h2 className="text-5xl mb-6">Phones:{phones.length}</h2>
             <BarChart width={1400} height={500} data={phones}>
                <Bar dataKey="price" fill="#8884d8"/>
                <XAxis dataKey="name"></XAxis>
                <YAxis dataKey={'price'}></YAxis>
                <Tooltip></Tooltip>
             </BarChart>
             
        </div>
    );
};

export default Phones;