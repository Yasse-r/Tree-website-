import best_smile from '../assets/best_smile.jpg'

function TreesCounter(){

    return(
         <span style={{ backgroundImage: `url(${best_smile})` }} className="bg-cover  bg-center   w-full h-[850px] flex flex-col items-center justify-center">
                        <div className='text-7xl text-white font-[Nunito] flex items-center flex-col  pr-1.5'>
                            <span className='m-3'>We have planted 122.325 tree</span>
                            
                            <span className='m-1'>Join us !</span>
                        </div>
                        <div className=''>
                        <button  className=" text-sm sm:w-auto  m-15 sm:text-2xl  text-[#00703c] rounded-md bg-white hover:bg-[#00703c] hover:text-white  py-[10px]  px-[30px]">
                            Why trees ?
                         </button>
                         <button  className=" text-sm sm:w-auto  m-15 sm:text-2xl  text-[#00703c] rounded-md bg-white hover:bg-[#00703c] hover:text-white  py-[10px]  px-[30px]">
                            How to help ?
                         </button>
                         
                         </div>
                    </span>
    )
}

export default TreesCounter