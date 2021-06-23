import  Navbar from '../components/Navbar.tsx';
import  Footer from '../components/Footer.tsx';

export default function Page() {
    return (
        <div>
            <Navbar transparent={false} />
            <div className="flex flex-row justify-center items-center pt-24 pb-16 bg-gray-100">
            <div className="w-full md:w-4/12 px-4 text-center item-center align-center">
                <div className="relative zoom flex flex-col min-w-0 break-words bg-white w-full mb-8 shadow-lg rounded-lg">
                    <div className="px-4 py-5 flex-auto">
                        <div className="text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-blue-400">
                        <i className="fas fa-wrench"></i>
                        </div>
                        <h6 className="text-4xl font-semibold">
                        Page Under Construction
                        </h6>
                        <p className="mt-2 mb-4 text-lg text-gray-600">
                        Sorry for the inconvenience.Please try again Later.
                        </p>
                    </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
  }