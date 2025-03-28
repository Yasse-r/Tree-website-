import forest_up from '../assets/forest_up.jpg'
import forest_top from '../assets/forest_top.jpg'
import planting from '../assets/planting.jpg'
import best_smile from '../assets/best_smile.jpg'
import Footer from '../Footer/Footer.jsx'
import TreesCounter from '../Components/TreesCounter.jsx'
import SocialBar from '../Components/SocialBar.jsx'
import Motive from '../Components/Motive.jsx'
import SignUp from '../Components/SignUp.jsx'

function Home_Page(){






    return(
        <span >

            <div className='border-[1px] p-9  w-full bg-white text-5xl font-Arial flex flex-col justify-center items-center'>
                <article className='m-2 text-xl font-stretch-125%'>HOW TO HELP</article>
                <article className='text-center'><strong>In Flourishing Algeria</strong></article>
            </div>


            <span style={{ backgroundImage: `url(${forest_top})` }} className="bg-cover  bg-center flex items-center justify-center w-full h-[750px] ">
                <span className='  '>
                    <article className='text-center sm:text-left font-semibold text-[45px] text-white '>
        	            Together We Can Plant More Trees
                    </article>
                    <article className='   font-[Nunito] text-white text-4xl sm:w-125 text-center sm:ml-25 mt-4'>
                    Help Restore our country's forests and Empower Reforestation , we know we can do it with your help.
                    </article>
                </span> 
            </span>


            <div className='bg-radial-[at_50%_50%] from-[hsl(145,50%,40%)] to-[hsl(150,60%,20%)] to-75% h-48 text-white text-2xl p-6 flex flex-col justify-evenly  items-center'>
                <article className='text-center font-[Nunito]'>
                    Planting trees restores nature and builds a greener future. Join us in making a difference—donate today!
                    </article>
                <button  className=" text-sm sm:w-auto   sm:text-2xl  text-[#00703c] rounded-md bg-white hover:  py-[10px]  px-[30px]">
                    Donate
                 </button>
            </div>



            <section className='w-full bg-white flex items-center justify-center pt-15 sm:p-20  pb-5'>
                <span className='flex justify-evenly border-2'>
                    <img src='' alt='Logo' className=' w-[150px] h-[150px] border-2 m-8 mr-20 '></img>
                    <article className='text-xl sm:text-3xl font-[Nunito] max-w-3xl mt-5'>
                        <strong>What's our mission ?</strong><br/>
                    Every <span className='text-[#00703c] '>tree</span> planted is a step towards a healthier planet. Join us in restoring <span className='text-[#00703c] '>nature</span>, reducing carbon footprints, and creating a <span className='text-[#00703c] '>greener</span> future for generations to come. Together, we can make the world a more vibrant and sustainable place—one <span className='text-[#00703c] '>tree</span> at a time.
                    </article>
                </span>
            </section>



            <SignUp></SignUp>

            

            <Motive></Motive>


            <SocialBar></SocialBar>
            

           
            <TreesCounter></TreesCounter>

            <Footer></Footer>

        </span>    
    )
}

export default Home_Page