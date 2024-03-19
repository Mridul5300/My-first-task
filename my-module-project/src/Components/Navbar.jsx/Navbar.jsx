import { useState } from "react";
import { CgMenuLeftAlt} from "react-icons/cg";
import { RxCross1 } from "react-icons/rx";
import Priceoption from "../Priceoption/Priceoption";
import { LineChart, Line,XAxis,YAxis } from 'recharts';

const Navbar = () => {
        const [open, setOpen] = useState(false)
     const routes = [
          { id: 1, path: '/', name: 'Home' },
          { id: 2, path: '/about', name: 'About' },
          { id: 3, path: '/services', name: 'Services' },
          { id: 4, path: '/contact', name: 'Contact' },
          { id: 5, path: '*', name: 'NotFound' }
        ];

        const Pricecaption =[
          
               {
                 "id": 1,
                 "name": "Basic Membership",
                 "price": "$30/month",
                 "features": [
                   "Access to cardio equipment",
                   "Access to weightlifting area",
                   "Locker room access",
                   "Online workout tracking",
                   "Discounts on merchandise"
                 ]
               },
               {
                 "id": 2,
                 "name": "Standard Membership",
                 "price": "$50/month",
                 "features": [
                   "Access to all basic membership features",
                   "Group fitness classes included",
                   "Sauna and steam room access",
                   "Nutrition consultation",
                   "Towel service"
                 ]
               },
               {
                 "id": 3,
                 "name": "Premium Membership",
                 "price": "$80/month",
                 "features": [
                   "Access to all standard membership features",
                   "Personal training session once a month",
                   "Smoothie bar access",
                   "Unlimited guest passes",
                   "Priority class booking"
                 ]
               },
               {
                 "id": 4,
                 "name": "Student Membership",
                 "price": "$25/month",
                 "features": [
                   "Access to cardio equipment",
                   "Access to weightlifting area",
                   "Locker room access",
                   "Discounts on merchandise",
                   "Valid student ID required"
                 ]
               },
               {
                 "id": 5,
                 "name": "Family Membership",
                 "price": "$120/month",
                 "features": [
                   "Access to all basic membership features for family members",
                   "Discounts on merchandise",
                   "Childcare services available",
                   "Flexible scheduling for family classes",
                   "Free family fitness events"
                 ]
               },
               {
                 "id": 6,
                 "name": "Senior Membership",
                 "price": "$20/month",
                 "features": [
                   "Access to cardio equipment",
                   "Access to weightlifting area",
                   "Locker room access",
                   "Discounts on merchandise",
                   "Senior citizen discounts apply"
                 ]
               }
             ]
             const data = [
              { name: 'Student 1', mathMark: 85 },
              { name: 'Student 2', mathMark: 90 },
              { name: 'Student 3', mathMark: 75 },
              { name: 'Student 4', mathMark: 60 },
              { name: 'Student 5', mathMark: 70 },
              { name: 'Student 6', mathMark: 80 },
              { name: 'Student 7', mathMark: 95 },
              { name: 'Student 8', mathMark: 55 },
              { name: 'Student 9', mathMark: 65 },
              { name: 'Student 10', mathMark: 88 }
            ];        
     return (
          <>
               <nav>  
                 <div className="flex justify-between">
                    <div className="my-10 py-1 mx-4">
                      <h2 className="text-2xl">Mr Treaders</h2>
                    </div>
                    <div>
                    <div className="md:hidden p-10 "  onClick={() => setOpen(!open)}>

                    {
                    open === true ?  <RxCross1 className="text-4xl"></RxCross1> : <CgMenuLeftAlt className="text-4xl"></CgMenuLeftAlt>
                  }
               </div>
               <ul className={`md:flex md:justify-between absolute md:static md:my-12  duration-1000
               ${open ? 'top-20' : '-top-72' }
               `}>
                

               {
               routes.map(route => <li className="mr-11" key={route.id}>
                    <a href={route.path}>{route.name}</a>
               </li>)
               }
               </ul>
                    </div>
                    
                    </div>
               </nav>
               <main>
                    <div className="my-4">
                         <h2 className="text-5xl text-center">Best Price in The Town</h2>
                    </div>
                    <div className="grid md:grid-cols-2 gap-6 m-12">
                        {
                          
                          Pricecaption.map(option => <Priceoption key={option.id} option={option}></Priceoption>)
                        } 
                    </div>

                      <div className="mx-10">
                        <LineChart width={400} height={400} data={data}>
                          <Line type="monotone" dataKey='mathMark'></Line>
                            <XAxis dataKey="name" />
                            <YAxis />
                        </LineChart>
                      </div>
                 
               </main>
          </>
     
     );
};

export default Navbar;