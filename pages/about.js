import  Navbar from '../components/Navbar.tsx';
import  Footer from '../components/Footer.tsx';


export default function Page () {
    return (
        <div>
            <Navbar transparent={false} />
            <div className="hero-image">
                <div className="hero-text">
                <h1 className="text-6xl md:text-8xl uppercase tracking-widest">About Us</h1>
                
                
                </div>
            </div>
            <About />
            <Director />
            <Footer />
        </div>
    )
}



const About = () => <section className=" bg-gray-300 -mt-48">
  <div className="container mx-auto px-4">
    <div className="flex flex-wrap">

      <div className="w-full px-4 ">
        <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-8 shadow-lg rounded-lg">
          <div className="px-10 py-10 flex-auto">

            <h2 className="text-3xl font-semibold">
              Who We Are
              </h2>
            <p className="text-lg mt-2 mb-5">
            Building Blocks Immigration is a Canadian Company that offers professional consultation services in all immigration matters. We are physically located in Toronto, Ontario, we offer in-person as well as virtual consultation that allows us to work with you as per your preference and convenience. We offer services in English, Hindi, Punjabi, and Urdu.
            </p>
         

            <h2 className="text-3xl mt-5 font-semibold">
              Why Us
              </h2>
            <p className="text-lg mt-2 mb-5">At Building Blocks Immigration, we walk the journey with you towards building your future from initial consultation to post settlement. We pride ourselves in helping our clients achieve their goals by walking them through various programs and options suited to their needs, made available by the Immigration, Refugees and Citizenship Canada. We turn your dreams into reality by listening to you, understanding your case, and recommending the best pathway that fits your education, work experience, status, and ambitions in Canada. By retaining us for your representation, you are bringing years of experience, depth of knowledge and professionalism to your correspondences with immigration officials.
            </p>
            <hr />


            <h2 className="text-3xl mt-5 font-semibold">
              Our Mission
            </h2>
            <p className="text-lg mt-2 mb-5">To provide a seamless and stress-free journey to Canada.</p>
            

            <h2 className="text-3xl mt-5 font-semibold">
              Our Vision
            </h2>
            <p className="text-lg mt-2 mb-5">Helping people all over the world fulfil their dream of starting a new life in Canada.</p>


            <h2 className="text-3xl mt-5 font-semibold">
              Our Values
            </h2>
            <div className="text-lg mt-2 px-8 mb-5">

                <dl>
                    <dt><strong>Excellence: </strong></dt>
                    <dd>-&ensp;&ensp;&ensp;We strive to provide best customer service and care through continuous improvement. We work hard to help our clients achieve their goals. We keep our clients informed about the changes in policies and help them make informed decisions.</dd>

                    <dt><strong>Integrity: </strong></dt>
                    <dd>-&ensp;&ensp;&ensp; We strive for highest level of integrity. Our processes and procedures are simple, efficient, and transparent. We inform our clients of their rights and options, letting them know the programs they qualify for and their chances at success</dd>

                    <dt><strong>Respect: </strong></dt>
                    <dd>-&ensp;&ensp;&ensp;We treat all our clients with dignity and respect by offering personalized services and one-on-one guidance to every case. We always maintain trust and confidentiality.</dd>
                    </dl>
            </div>


          </div>
        </div>
      </div>


    </div>
    </div>
    </section>

const Director = () => <section className="pb-20 bg-gray-300">
<div className="container mx-auto px-4">
  <div className="flex flex-wrap">

    <div className="w-full px-4 ">
      <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-8 shadow-lg rounded-lg">
        <div className="px-10 py-10 flex-auto">
       

          <h2 className="text-3xl mt-5 font-semibold">
            Director
            </h2>
            <div className="text-lg mt-2 mb-5">
                <p>
                Jyoti Palta, the founder, and director of Building Blocks Immigration is a Regulated Canadian Immigration Consultant (RCIC) and a member in good standing with the Immigration Consultants of Canada Regulatory Council (ICCRC).

                </p><p>She is also a member of the Canadian Association of Professional Immigration Consultants (CAPIC).

                </p><br/><p>As a landed immigrant herself, Jyoti knows how difficult it can be to start a new life in a new country with new hopes and dreams. She knows it is not easy to trust someone when your ambitions, dreams and goals are at stake. Immigration process can be complex and confusing and sometimes it feels like there is no light at the end of the tunnel. It is her experience with the process that led her to pursue a career in immigration, she aims to make the process simpler and easy to understand for people like her who dream of a new life in Canada.

                </p><br/><p>Under her guidance we at Building Blocks Immigration, make sure you get personalized services, we listen to you and offer you advise based on your credentials and dreams. We pick the right building blocks for your strong foundation.
                </p><br/><p>Verify membership: <a href="">Find an Immigration pro</a>

                </p>
            </div>

        </div>
      </div>
    </div>


  </div>
  </div>
  </section>

    