import planting from '../assets/planting.jpg'


function Motive(){
    return(
        <span style={{ backgroundImage: `url(${planting})` }} className="bg-cover  bg-center  items-center  w-full h-[750px] grid grid-rows-1 grid-cols-2">
                        <div></div>
                        <div className=' font-[Nunito] max-w-3xl text-right text-black text-4xl sm:text-7xl  p-5 mt-15'>
                        "The best time to<br/> plant a tree was 20<br/> years ago, The<br/> second best time is<br/> Now"
                        </div>
                    </span>
    )
}
export default Motive