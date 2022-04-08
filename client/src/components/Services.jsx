import {BsShieldFillCheck} from 'react-icons/bs'
import {BiSearchAlt} from 'react-icons/bi'
import {RiHeart2Fill} from 'react-icons/ri' 


const Services = () =>{
    const ServiceCard = ({color,title,icon,subtitle}) =>(
        <div className="flex flex-row justify-start items-center white-glassmorphism p-3 m-2 cursor-pointer hover:shadow-xl">
            <div className={`w-10 h-10 rounded-full flex justify-center items-center ${color}`}>
                {icon}
            </div>
            <div className="ml-5 flex flex-col flex-1">
                <h1 className="mt-2 text-white text-lg">{title}</h1>
                <p className="mt-2 text-white text-sm md:w-9/12" > {subtitle}</p>
            </div>
        </div>
        
    )
    return (
         <div className = "flex w-full justify-between items-center gradient-bg-services">
             <div className = "flex md:flex-row flex-col items-center justify-between md:p-20 py-12 px-4">
                <div className="flex-1 flex flex-col justify-start items-start">
                    <h1 className="text-white text-3xl sm:text-5xl py-2  ">Easy to use and intuitive
                        
                    </h1>
                </div>
             </div>
             <div className="flex-1 flex flex-col justify-between items-center ">
                 <ServiceCard
                   color="bg-[#2952E3]"
                   title="Security ensured"
                   icon={<BsShieldFillCheck fontSize={21} className="text-white"/>}
                   subtitle=""/> 
                 <ServiceCard
                   color="bg-[#2952E3]"
                   title="Fast transactions"
                   icon={<RiHeart2Fill fontSize={21} className="text-white"/>}
                   subtitle=""/>
                
             </div>
         </div>
    );
}

export default Services; 