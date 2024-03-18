import { useState } from "react";
import { CgMenuLeftAlt} from "react-icons/cg";
import { RxCross1 } from "react-icons/rx";

const Navbar = () => {
        const [open, setOpen] = useState(false)
     const routes = [
          { id: 1, path: '/', name: 'Home' },
          { id: 2, path: '/about', name: 'About' },
          { id: 3, path: '/services', name: 'Services' },
          { id: 4, path: '/contact', name: 'Contact' },
          { id: 5, path: '*', name: 'NotFound' }
        ];

        const Priceoption =[
          
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
             
        
        

     return (
          <nav>

               <div className="md:hidden p-10"  onClick={() => setOpen(!open)}>

                    {
                         open === true ? <RxCross1 className="text-3xl"></RxCross1> 
                         : <CgMenuLeftAlt className="text-3xl" ></CgMenuLeftAlt>
                         
                    }
               
               </div>
               <ul className={`md:flex absolute md:static md:my-12 px-12 duration-1000
               ${open ? 'top-20' : '-top-72' }
               `}>
               {
                    routes.map(route => <li className="mr-11" key={route.id}>
                         <a href={route.path}>{route.name}</a>
                    </li>)
               }
               </ul>

               <main>
                    
               </main>
          </nav>
     
     );
};

export default Navbar;