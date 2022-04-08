import logo from '../../images/logo.gif'

const Footer = () =>{
    return (
        <div className="w-full flex md:justify-center justify-between items-center flex-col p-4 gradient-bg-footer">
             <div className="w-full flex sm:flex-row flex-col justify-between items-center my-4">
                 <div className="flex flex-[0.5] justify-center items-center">
                       
                 </div>
             <div className="flex flex-1 justify-evenly items-center flex-wrap sm:mt-0 mt-5 w-full"> 
             </div>
         </div>  
    <div className="sm:w-[90%] w-full h-[0.25px] bg-gray-400 mt-5 " /> 
    <div className="sm:w-[90%] w-full flex justify-between items-center mt-3"> 
      <a href="https://www.linkedin.com/in/gabitanul/" target="_blank" > <p className="text-white text-right text-xs">Tutorial pursued by Gabi (LinkedIn)</p></a> 
    </div>
  </div>
    );
}

export default Footer; 