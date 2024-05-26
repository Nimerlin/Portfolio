import styles from './styles.module.css';
import Image from 'next/image';

export default function Blogcard({ imageSrc, title, desc }) {

    return (

        <>
            <div className="relative flex w-80 flex-col bg-[#919396] m-4 border-[#2e2f36] border-4 rounded-3xl shadow-md">
                <div className="relative  -mt-6 h-40 overflow-hidden rounded-xl bg-blue-gray-500 bg-clip-border text-white shadow-lg shadow-blue-gray-500/40 bg-gradient-to-r from-blue-500 to-blue-600">
                <Image 
               src={imageSrc} 
               width={320}
               height={160}
               alt='blog image'
               />
                </div>
                <div className="p-6">
                    <h5 className="mb-2 block font-sans text-xl font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased">
                        {title}
                    </h5>
                    <p className="block font-sans text-base font-light leading-relaxed text-inherit antialiased">
                        {desc}
                    </p>
                    <button data-ripple-light="true" type="button" className="rounded-lg bg-blue-500 py-3 px-6  mt-3 text-center align-middle font-sans text-xs font-bold  text-white shadow-md shadow-blue-500/20 transition-all hover:shadow-lg hover:shadow-blue-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none">
                        Read More
                    </button>
                </div> 
            </div>
        </>


    )

}