import Head from 'next/head'
import styles from '../styles/Home.module.css'
import  Navbar from '../components/Navbar.tsx';
import  Footer from '../components/Footer.tsx';
// import  PostCard from '../components/PostCard.js';
import  VisaCards from '../components/visalist';
import { getSortedPostsData } from '../lib/posts';

export async function getStaticProps() {
  const allPostsData = getSortedPostsData()
  return {
    props: {
      allPostsData,
    },
  }
}

export default function Home({ allPostsData }) {
 return (
   <div>
      <Head>
        <title>Building Blocks Immigration - Best Immigration Consultants for Canadian Visa & PR</title>
        <meta name="description" content="Official Website of Building Blocks Immigration. Best Immigration Consultants for Canadian Visa and PR. Migrate to Canada"/>
        <meta name="keywords" content="Building Blocks Immigration, Immigration, Visa, Canada"/>
        <meta property="og:type" content="website"/>
        <meta property="og:title" content="Building Blocks Immigration - Best Immigration Consultants for Canadian Visa & PR"/>
        <meta property="og:url" content="http://www.buildingblocksimmigration.com" />
        <meta property="og:description" content="Official Website of Building Blocks Immigration. Best Immigration Consultants for Canadian Visa and PR. Migrate to Canada"/>    
        
        </Head>
      <Navbar transparent={false} />
         <div className="hero-image">
            <div className="hero-text">
               <h1 className="text-2xl md:text-5xl">Immigrate to Canada</h1>
               <h3 className="text-xl" >With the Best Immigration Consultants</h3>
               <button className="bg-black bg-opacity-40 hover:bg-black hover:bg-opacity-80 hover:text-white py-2 px-4 border border-gray-900 hover:border-transparent rounded">Explore Options</button>
            </div>
         </div>

         <div
            className="top-auto bottom-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden"
            style={{ height: "70px" }}
            >
            <svg
               className="absolute bottom-0 overflow-hidden"
               xmlns="http://www.w3.org/2000/svg"
               preserveAspectRatio="none"
               version="1.1"
               viewBox="0 0 2560 100"
               x="0"
               y="0"
            >
               <polygon
               className="text-gray-300 fill-current"
               points="2560 0 2560 100 0 100"
               ></polygon>
            </svg>
         </div>
         <Paths />
         <VisaCards visas={allPostsData}/>
         <Footer />
   </div>

 )
}

const Paths = () => <section className="pb-20 red -mt-24">
  <div className="container mx-auto px-4">
    <div className="flex flex-wrap">
      <div className="lg:pt-12 pt-6 w-full md:w-4/12 px-4 text-center">
        <div className="relative zoom flex flex-col min-w-0 break-words bg-white w-full mb-8 shadow-lg rounded-lg">
          <div className="px-4 py-5 flex-auto">
            <div className="text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-red-400">
              <i className="fas fa-graduation-cap"></i>
            </div>
            <h6 className="text-xl font-semibold">Study in Canada</h6>
            <p className="mt-2 mb-4 text-gray-600">
              Explore options to study in Canada.
              </p>
          </div>
        </div>
      </div>

      <div className="w-full md:w-4/12 px-4 text-center">
        <div className="relative zoom flex flex-col min-w-0 break-words bg-white w-full mb-8 shadow-lg rounded-lg">
          <div className="px-4 py-5 flex-auto">
            <div className="text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-blue-400">
              <i className="fas fa-briefcase"></i>
            </div>
            <h6 className="text-xl font-semibold">
              Work in Canada
              </h6>
            <p className="mt-2 mb-4 text-gray-600">
              Get a Work Permit to Work in Canada
              </p>
          </div>
        </div>
      </div>

      <div className="pt-6 w-full md:w-4/12 px-4 text-center">
        <div className="relative zoom flex flex-col min-w-0 break-words bg-white w-full mb-8 shadow-lg rounded-lg">
          <div className="px-4 py-5 flex-auto">
            <div className="text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-green-400">
              <i className="fas fa-plane"></i>
            </div>
            <h6 className="text-xl font-semibold">
              Visit Canada
              </h6>
            <p className="mt-2 mb-4 text-gray-600">
              Visitors Visa!
              </p>
          </div>
        </div>
      </div>
    </div>


    <div className="flex flex-wrap items-center mt-2">
      <div className="w-full md:w-5/12 px-4 mr-auto ml-auto">
        <div className="text-gray-600 p-3 text-center inline-flex items-center justify-center w-16 h-16 mb-6 shadow-lg rounded-full bg-gray-100">
          <i className="fas fa-user-friends text-xl"></i>
        </div>
        <h3 className="text-3xl mb-2 font-semibold leading-normal text-white">
          Plan your jouney to Canada with us
          </h3>
        <p className="text-lg font-light leading-relaxed mt-4 mb-4 text-white">
           We know, leaving your home and settling at a new place is not an easy task. 
          </p>
        <p className="text-lg font-light leading-relaxed mt-0 mb-4 text-white">
        Don&apos;t let any frauds come in your way to Canada. Plan your Journey with step-by-step guidance from the best and registered consultants at Building Blocks Immigration.
          </p>
        <a
          href="/contact"
          className="font-bold text-gray-100 mt-8"
        >
          Get in touch!
          </a>
      </div>

      <div className="w-full md:w-4/12 px-4 mr-auto ml-auto">
        <div className="relative flex flex-col min-w-0 break-words  w-full mb-6 shadow-lg rounded-lg blue">
          <img
            alt="..."
            src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1051&q=80"
            className="w-full align-middle rounded-t-lg"
          />
          <blockquote className="relative p-8 mb-4">
            <svg
              preserveAspectRatio="none"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 583 95"
              className="absolute left-0 w-full block"
              style={{
                height: "95px",
                top: "-94px"
              }}
            >
              <polygon
                points="-30,95 583,95 583,65"
                className="blue-text fill-current"
              ></polygon>
            </svg>
            <h4 className="text-xl font-bold text-white">
              Guidance and Planning
              </h4>
            <p className="text-md font-light mt-2 text-white">
               We help you to achieve your goals settle for a wonderful life, as soon as possible and at reasonable cost.
              </p>
          </blockquote>
        </div>
      </div>

    </div>
  </div>
</section>