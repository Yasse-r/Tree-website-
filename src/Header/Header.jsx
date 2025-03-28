
import tree_logo from '../assets/pine-tree2.png'


function Header(){

    
    
    return(
        <div className=" h-18 text-2xl font-[Nunito] text-black w-full  bg-gradient-to-r from-[#236144] via-[hsl(139,54%,39%)] to-emerald-500  flex items-center justify-center">
           <section className=" w-[75%]  flex justify-between items-center">
                <div className="m-2 ">
                🌳green🌲tree🌳
                </div>
                <section className=" flex gap-4 ">
                
                    <nav className="hidden sm:flex gap-4 mr-2">
                        
                        <p className="   hover:text-[#c7c7c7] ">Home Page</p>
                        <p className= " hover:text-[#c7c7c7] ">about us</p>
                        <p className=" hover:text-[#c7c7c7] ">Contact us</p>
                
                    </nav>

                

                    
                
                </section>
            
           </section>
           <button  className=" text-sm sm:w-auto ml-3.5  sm:text-2xl  rounded-md bg-[#00703c] hover:text-[#c7c7c7] flex items-center justify-center py-[10px]  px-[30px]">
                    Donate
            </button>
            <div className="flex flex-row items-center ml-2.5 sm:min-w-[190px] mr-2 ">
                <article className='text-sm sm:m-0.5 sm:text-2xl rounded-md bg-[#00703c] hover:text-[#c7c7c7] py-[10px]  px-[30px]'>Login</article>
                <div className="hidden sm:flex flex-row   rounded-md   ml-2.5 w-auto p-1 bg-[hsl(30,40%,50%)]">
                    <img src={tree_logo} alt="tree image" />
                    <article className='pr-1'>0</article>
                </div>
            </div>
            <button  className=" ml-3.5 text-3xl block sm:hidden pt-1.5 hover:text-[hsl(117,0%,30%)]">
                    &#9776;
                    </button>
        </div>
    )
}
export default Header