import { Link } from "react-router-dom"

function Footer(){

    return(
        <div className='w-full h-auto sm:h-80 bg-[#1b1d22] text-[#a2a7a7]  p-5 pb-0 mb-0 '>
        <section className='w-full   border-1 grid     grid-rows-4  sm:grid-rows-1  sm:grid-cols-4 gap-4'>
            <div className='flex border-1 justify-center sm:justify-end items-center'><img className='w-[150px] h-[150px] border-2'></img> </div>

            <div className='flex flex-col border-1 justify-center items-start pl-6'>
                <span className=' sm:text-2xl font[Nunito]  ml-3 mb-3'>Activity</span> 
                <span className='sm:text-[18px] font[Nunito] '>Our Activity is legalised based<br/> on the Algerian law,<br/> and has been verified by<br/> authorities and global organizations</span>
            </div>

            <div className='flex flex-col border-1 justify-center items-start pl-6'>
                <span className='text-2xl font[Nunito]  ml-3 mb-3'>Connect</span> 
                <span className='text-[18px] font[Nunito] '><a>Email us at : <span className='text-[#00703c] font-medium'>GreenFuture@gmail.com</span></a><br/>Phone number <span className='font-semibold'>444-555-789-153</span><br/><span className=''><i>Address Oran Senia 01 rue tassoulli abdelah</i></span><br/> you are welcome to Ask any Question</span>
            </div>

            <section className='grid grid-cols-2 border-1'>
                <div className='flex flex-col  justify-center items-start gap-5 pl-6 p-1'>
                    <span className='text-2xl text-white font-extralight'>News Letter Sign Up</span>
                    <input type='text' placeholder='Enter you First name...' className='bg-white border-2 p-3 rounded-xl hover:border-[#00703c] hover:border-2 focus:border-green-500 outline-none focus:ring focus:ring-[#00703c] ' ></input>
                    <input type='text' placeholder='Enter email address' className='bg-white  border-2 p-3 rounded-xl hover:border-[#00703c] hover:border-2 focus:border-green-500 outline-none focus:ring focus:ring-[#00703c] ' ></input>
                </div>
                <Link to="/Login">
                <button  className=" text-sm sm:w-auto h-15 place-self-center   sm:text-2xl  bg-[#00703c] rounded-md text-white m-5  py-[10px]  px-[30px]">
                    Sign up
                </button></Link>
            </section>
        </section>
        
        
        <div className='w-full h-10   sm:flex  items-center justify-center mt-5 mb-0 pb-0 bottom-0 hidden'>
            <div className='flex w-6/10 justify-between'>
                <span className=' h-10 '>
                <span className=' text-black font-semibold text-2xl m-2'>Share</span>

                <div className='inline-block px-2  align-bottom '>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 3791 3729" shape-rendering="geometricPrecision" text-rendering="geometricPrecision" width="32" height="32"image-rendering="optimizeQuality" fill-rule="evenodd" clip-rule="evenodd"><path d="M713 1152c197 0 375 80 504 209 29 29 56 61 80 95l1125-468c-36-85-55-178-55-275 0-197 80-375 209-504S2883 0 3080 0s375 80 504 209 209 307 209 504-80 375-209 504-307 209-504 209-375-80-504-209c-22-22-43-46-62-71l-1132 471c29 77 45 161 45 248 0 54-6 106-17 157l1131 530c11-13 23-26 36-39 129-129 307-209 504-209s375 80 504 209 209 307 209 504-80 375-209 504-307 209-504 209-375-80-504-209-209-307-209-504c0-112 26-219 73-313l-1092-512c-34 66-78 126-130 177-129 129-307 209-504 209s-375-80-504-209S2 2062 2 1865s80-375 209-504 307-209 504-209zm2742-815c-96-96-229-156-376-156s-280 60-376 156-156 229-156 376 60 280 156 376 229 156 376 156 280-60 376-156 156-229 156-376-60-280-156-376zm0 2303c-96-96-229-156-376-156s-280 60-376 156-156 229-156 376 60 280 156 376 229 156 376 156 280-60 376-156 156-229 156-376-60-280-156-376zM1089 1488c-96-96-229-156-376-156s-280 60-376 156-156 229-156 376 60 280 156 376 229 156 376 156 280-60 376-156 156-229 156-376-60-280-156-376z" fill-rule="nonzero"/></svg>
                </div>

                <div className='inline-block px-2 border-l-1 border-r-1 align-bottom '>
                        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" shape-rendering="geometricPrecision" text-rendering="geometricPrecision" image-rendering="optimizeQuality" fill-rule="evenodd" clip-rule="evenodd" viewBox="0 0 640 640"><path d="M640.012 121.513c-23.528 10.524-48.875 17.516-75.343 20.634 27.118-16.24 47.858-41.977 57.756-72.615-25.347 14.988-53.516 25.985-83.363 31.866-24-25.5-58.087-41.35-95.848-41.35-72.508 0-131.21 58.736-131.21 131.198 0 10.228 1.134 20.232 3.355 29.882-109.1-5.528-205.821-57.757-270.57-137.222a131.423 131.423 0 0 0-17.764 66c0 45.497 23.102 85.738 58.347 109.207-21.508-.638-41.74-6.638-59.505-16.359v1.642c0 63.627 45.225 116.718 105.32 128.718-11.008 2.988-22.63 4.642-34.606 4.642-8.48 0-16.654-.874-24.78-2.35 16.783 52.11 65.233 90.095 122.612 91.205-44.989 35.245-101.493 56.233-163.09 56.233-10.63 0-20.988-.65-31.334-1.89 58.229 37.359 127.206 58.997 201.31 58.997 241.42 0 373.552-200.069 373.552-373.54 0-5.764-.13-11.35-.366-16.996 25.642-18.343 47.87-41.493 65.469-67.844l.059-.059z" /></svg>
                </div>
                
                <div className='inline-block px-2  border-r-1 align-bottom '>
                <svg xmlns="http://www.w3.org/2000/svg" shape-rendering="geometricPrecision" text-rendering="geometricPrecision" image-rendering="optimizeQuality" width="32" height="32"fill-rule="evenodd" clip-rule="evenodd" viewBox="0 0 509 507.14"><path fill-rule="nonzero" d="M509 254.5C509 113.94 395.06 0 254.5 0S0 113.94 0 254.5C0 373.86 82.17 474 193.02 501.51V332.27h-52.48V254.5h52.48v-33.51c0-86.63 39.2-126.78 124.24-126.78 16.13 0 43.95 3.17 55.33 6.33v70.5c-6.01-.63-16.44-.95-29.4-.95-41.73 0-57.86 15.81-57.86 56.91v27.5h83.13l-14.28 77.77h-68.85v174.87C411.35 491.92 509 384.62 509 254.5z"/></svg>
                </div>

                <div className='inline-block px-2  border-r-1 align-bottom '>
                    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" shape-rendering="geometricPrecision" text-rendering="geometricPrecision" image-rendering="optimizeQuality" fill-rule="evenodd" clip-rule="evenodd" viewBox="0 0 640 640"><path d="M633.468 192.038s-6.248-44.115-25.477-63.485c-24.366-25.477-51.65-25.642-64.123-27.118-89.493-6.52-223.904-6.52-223.904-6.52h-.236s-134.352 0-223.893 6.52c-12.52 1.523-39.768 1.63-64.123 27.118-19.24 19.37-25.358 63.485-25.358 63.485S-.012 243.806-.012 295.681v48.509c0 51.768 6.366 103.643 6.366 103.643s6.248 44.114 25.358 63.52c24.355 25.477 56.363 24.65 70.655 27.367 51.237 4.89 217.644 6.366 217.644 6.366s134.529-.237 224.022-6.638c12.52-1.477 39.756-1.63 64.123-27.119 19.24-19.37 25.476-63.532 25.476-63.532S640 396.03 640 344.154v-48.508c-.13-51.769-6.497-103.643-6.497-103.643l-.035.035zm-379.8 211.007V223.173L426.56 313.41l-172.892 89.635z"/></svg>
                </div>

                <div className='inline-block px-2  border-r-1 align-bottom '>
                    <svg xmlns="http://www.w3.org/2000/svg" shape-rendering="geometricPrecision" text-rendering="geometricPrecision" image-rendering="optimizeQuality" width="32" height="32"fill-rule="evenodd" clip-rule="evenodd" viewBox="0 0 449.45 515.38"><path fill-rule="nonzero" d="M382.31 103.3c-27.76-18.1-47.79-47.07-54.04-80.82-1.35-7.29-2.1-14.8-2.1-22.48h-88.6l-.15 355.09c-1.48 39.77-34.21 71.68-74.33 71.68-12.47 0-24.21-3.11-34.55-8.56-23.71-12.47-39.94-37.32-39.94-65.91 0-41.07 33.42-74.49 74.48-74.49 7.67 0 15.02 1.27 21.97 3.44V190.8c-7.2-.99-14.51-1.59-21.97-1.59C73.16 189.21 0 262.36 0 352.3c0 55.17 27.56 104 69.63 133.52 26.48 18.61 58.71 29.56 93.46 29.56 89.93 0 163.08-73.16 163.08-163.08V172.23c34.75 24.94 77.33 39.64 123.28 39.64v-88.61c-24.75 0-47.8-7.35-67.14-19.96z"/></svg>
                </div>
            </span>
            <span className='text-[12px] flex items-center'>
                View page in : <strong className='mx-0.5'>English</strong> spanish
            </span>
        </div>
        
    </div>

        
    </div>
    )
}
export default Footer