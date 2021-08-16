import Head from 'next/head'
import styles from '../styles/Home.module.css'
import  Navbar from '../components/Navbar.tsx';
import  Footer from '../components/Footer.tsx';
// import  PostCard from '../components/PostCard.js';
// import  Visalist from '../components/visalist';
// import { getSortedPostsData } from '../lib/posts';

export default function Contact () {
    return (
        <div>
            <Head>
            <title>Contact Us - Building Blocks Immigration</title>
            </Head>
            <Navbar transparent={false} />
            <div className="hero-contact">
                <div className="hero-text">
                <h1 className="text-2xl md:text-5xl">Contact Us</h1>
                <h3 className="text-xl" >Let's Plan your journey together</h3>
                </div>
            </div>
            

            <div className="flex flex-row justify-center items-center pt-0 pb-16 bg-white">
            <div className="w-full -mt-24 px-8 md:px-16 text-center item-center align-center">
                <div className="relative grid grid-cols-4  flex-initial min-w-0 break-words bg-gray-200 w-full mb-8 shadow-lg rounded-lg">
                    <div className=" col-span-4 md:col-span-2 m-2 py-5 md:ml-10 rounded-lg">
                        <Form />
                        
                    </div>

                    <div className=" col-span-4 md:col-span-2 py-8 m-2 px-6 md:mt-24 flex flex-col flex-wrap justify-start">                    
                        <div className="relative flex justify-between content-around item-baseline py-4 px-4 mb-8 shadow-2xl bg-white rounded-lg">
                            <h6 className="text-2xl item-start m-3 font-semibold item-end">
                            Book 30-Min Consultation (Free)
                            </h6>
                            <button className="red hover:bg-red-900 text-white border text-xl font-semibold p-2 rounded"><a href="https://probooking.io/meet/buildingblocks/30+Minutes+Initial+Consultation"> Book Now</a></button>
                        </div>

                        <div className="relative flex justify-between content-around item-baseline py-4 px-4 mb-8 shadow-2xl bg-white rounded-lg">
                            <h6 className="text-2xl item-start m-3 font-semibold item-end">
                            Book 1 hour Consultation ($50)
                            </h6>
                            <button className="red hover:bg-red-900 text-white border text-xl font-semibold p-2 rounded"><a href="https://probooking.io/meet/buildingblocks/60+Minutes+Deep+Dive"> Book Now</a></button>
                        </div>

                        <div className="relative flex justify-between content-around item-baseline py-4 px-4 mb-8 shadow-2xl bg-white rounded-lg">
                            <h6 className="text-2xl item-start m-3 font-semibold item-end">
                            Fill Assesment Form
                            </h6>
                            <button className="red hover:bg-red-900 text-white border text-xl font-semibold p-2 rounded"><a href="https://casecloud.ca/form/formshare?formId=6c9bda54-6459-4e25-b321-26368a535c0f&siteId=CCP20211497">Access here</a></button>
                        </div>   
                    </div>
                    </div>
                </div>
            </div>

            <Footer />
        </div>
    )
}


const Form = () => <section>
    <form action="https://getform.io/f/e89cd11e-dbf1-4cf5-95c1-5a7749473836" method="POST" class=" shadow-2xl rounded w-full  px-8 pt-6 pb-8 mb-4">
    <h1 className="text-4xl font-semibold mb-4">Get in touch</h1>
    <div class="mb-4">
      <label class="block text-left text-sm font-bold mb-2" >
        Name
      </label>
      <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="Name" type="text" name="Name" placeholder="Your Name" />
    </div>

    <div class="mb-4">
      <label class="block text-left text-sm font-bold mb-2" for="Phone">
        Phone
      </label>
      <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="Phone" type="text" name="Phone" placeholder="Phone" />
    </div>

    <div class="mb-4">
      <label class="block text-left text-sm font-bold mb-2" for="Email">
        E-mail
      </label>
      <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="Email" type="text" name="Email" placeholder="email" />
    </div>

    <div class="mb-4">
      <label class="block text-left text-sm font-bold mb-2" for="Subject">
        Subject
      </label>
      <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="Subject" type="text" name="Subject" placeholder="Subject" />
    </div>

    <div class="mb-4">
      <label class="block text-left text-sm font-bold mb-2" for="Message">
        Message
      </label>
      <textarea class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="Message" type="text" name="Message" placeholder="Your Message Here" />
    </div>


    <div class="flex items-center justify-between">
      <button class="red hover:bg-red-900 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="submit">
        Submit
      </button>
    </div>
  </form>
</section>
