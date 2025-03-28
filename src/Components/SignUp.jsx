

function SignUp(){
    return(
        <section className=' w-full border-b-[1px] bg-white flex items-center justify-center p-20 pr-25 font-[Nunito]'>
                <div className='border-x-5 border-[hsl(150,60%,20%)] ml-5 flex justify-between w-8/10'>
                    <div className=' text-sm sm:text-2xl text-center  items-center ml-4 mt-3 max-w-4xl'>
                    Stay in the Loop. Sign up for the Nature News email and receive conservation stories each month.
                    </div>
                    <div>
                        <input type='text' placeholder='Email address' className=' hidden  border-1 p-2  sm:inline-block' ></input>
                        <button  className=" text-sm sm:w-auto   sm:text-2xl  bg-[#00703c] rounded-md text-white m-5  py-[10px]  px-[30px]">
                            Sign up
                        </button>
                    </div>
                </div>
            </section>
    )
}
export default SignUp