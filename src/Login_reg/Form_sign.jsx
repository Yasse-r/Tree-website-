import forest_up from '../assets/forest_up.jpg'

const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = {
      name: e.target.name.value,
      email: e.target.email.value,
      password: e.target.password.value,
      phone: e.target.phone.value,
      donations: e.target.donations.value,
    };

    const res = await fetch("http://localhost/tree/Register.php", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });

    const result = await res.text();
    console.log(result);
  };
//#adf0be
//00703c
//#186e39
function Form_sign(){
 return(
    <>
    <div className='border-[1px] p-9  w-full bg-white text-5xl font-Arial flex flex-col justify-center items-center'>
                <article className='m-2 text-xl font-stretch-125%'>To Help Us</article>
                <article className='text-center'><strong>Sign In</strong></article>
            </div>
    <div style={{ backgroundImage: `url(${forest_up})` }} className="bg-cover  bg-center  flex items-center justify-center  w-full h-[750px] ">
        <div className='bg-[#186e39] w-1/2 rounded-4xl h-4/5 m-1.5 mt-15'>
            <form onSubmit={handleSubmit} className='flex flex-col items-center p-3'>
                
                <span className='w-2/3'>
                <label for="name" className='text-white sm:text-2xl font[Nunito]'>Name : </label><br></br>
                <input id="name" name='name' type='text' placeholder='Enter you First name...' className=' m-1.5 bg-white border-2 p-3 rounded-xl hover:border-[#00703c] hover:border-2 focus:border-green-500 outline-none focus:ring focus:ring-[#00703c] w-full' ></input>
                </span>
                <span className='w-2/3'>
                <label for="email" className='text-white sm:text-2xl font[Nunito]'>Email : </label><br></br>
                <input id='email' name='email' type='text' placeholder='Enter email address' className='bg-white m-1.5 w-full border-2 p-3 rounded-xl hover:border-[#00703c] hover:border-2 focus:border-green-500 outline-none focus:ring focus:ring-[#00703c] ' ></input>
                </span>
                <span className='w-2/3'>
                <label for="password" className='text-white sm:text-2xl font[Nunito]'>Password : </label><br></br>
                <input id='password' name='password' type='password' placeholder='your password' className='bg-white m-1.5 w-full border-2 p-3 rounded-xl hover:border-[#00703c] hover:border-2 focus:border-green-500 outline-none focus:ring focus:ring-[#00703c] ' ></input>
                </span>
                <span className='w-2/3'>
                <label for="phone" className='text-white sm:text-2xl font[Nunito]'>Password : </label><br></br>
                <input id='phone' name='phone' type='tel' placeholder='e.g. 05566778899' pattern='[0-9]{10}' className='bg-white m-1.5 w-full border-2 p-3 rounded-xl hover:border-[#00703c] hover:border-2 focus:border-green-500 outline-none focus:ring focus:ring-[#00703c] ' ></input>
                </span>

                <span className='w-2/3'>
                <label for="donations" className='text-white sm:text-2xl font[Nunito]'>Password : </label><br></br>
                <input id='donations' name='donations' type='number' placeholder=''  className='bg-white m-1.5 w-full border-2 p-3 rounded-xl hover:border-[#00703c] hover:border-2 focus:border-green-500 outline-none focus:ring focus:ring-[#00703c] ' ></input>
                </span>

                <span className='w-2/3'>
                <input type='submit' value="Sign in" className=" text-sm sm:w-auto h-15 place-self-center hover:border-3 hover:border-green-500  sm:text-2xl  text-[#00703c] rounded-md bg-white m-5  p-3.5">
                </input>
                </span>
            </form>
        </div>
    </div>
   
    </>
 )
}
export default Form_sign