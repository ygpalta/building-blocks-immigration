import  Navbar from '../../components/Navbar.tsx';
import  Footer from '../../components/Footer.tsx';
import { getAllPostIds, getPostData } from '../../lib/posts'
import Head from 'next/head'

export async function getStaticProps({ params }) {
    const postData = await getPostData(params.id)
    return {
      props: {
        postData
      }
    }
  }

export async function getStaticPaths() {
    const paths = getAllPostIds()
    return {
      paths,
      fallback: false
    }
  }

  
export default function Page({ postData }) {
    return (
        <div>
        <Head>
        <title>{postData.title}</title>
        </Head>
            <Navbar transparent={false} />
            <div className="flex flex-row justify-left items-center pt-24 pb-16 bg-gray-100">
            <div className="w-3/4 px-4 text-center item-center align-center">
                <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-8 shadow-lg rounded-lg">
                    <div className="px-10 py-8 flex-auto">
                        <div className="text-white p-3 text-left inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-blue-400">
                        <i className="fas fa-wrench"></i>
                        </div>
                        <h6 className="text-4xl font-semibold">
                        {postData.title}
                        </h6>
                        <p className="mt-2 mb-4 text-lg text-gray-600">
                        {postData.about}
                        </p>
                        <article style={{listStyleType : "circle" }} className="text-xl text-justify list-inside">
                          <div dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
                        </article>
                        
                    </div>
                    </div>
                </div>
            </div>
            <Footer />
            {/* <div dangerouslySetInnerHTML={{ __html: postData.contentHtml }} /> */}
        </div>
    )
  }