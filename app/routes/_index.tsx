import type { V2_MetaFunction } from "@remix-run/node";
import { Link } from "@remix-run/react";
import logo from "../images/logo.svg";
import insta from "../images/insta.svg";
import linkedin from "../images/linkedin.svg";
import stage32 from "../images/stage32.svg";
import livelong from "../images/Live Long cover - Rustic.png"
import logofacingright from  "../images/writer_sketch-removebg-preview.png";
import awards from "../images/awards";


export const meta: V2_MetaFunction = () => [{ title: "Whataline" }];
export default function Index() {
  return (
    <main className="relative min-h-screen bg-[#ECEBEC] sm:flex sm:items-center sm:justify-center">
     
      <div className="relative sm:pb-16 sm:pt-8">
        <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
          <nav className="bg-[#ECEBEC] border-b-2 border-pink-500 dark:bg-gray-900">
                <div className="max-w-screen-xl flex flex-wrap items-center mx-auto p-4 justify-between">
                  <div className="flex items-center">
                    <a href="https://whataline.com/" className="flex items-center">
                        <img src={logo} className="h-14 mr-3" alt="Whataline" />
                    </a>
                 
                    <ul className="flex p-4 md:p-0 ml-10 items-center">
                      <li><img src={insta} className="h-6 mr-10" alt="instagram" /></li>
                      <li><img src={linkedin} className="h-8 mr-10" alt="linkedin" /></li>
                      <li><img src={stage32} className="h-6 mr-10" alt="stage 32" /></li>
                    </ul>
                  </div>
                  <button data-collapse-toggle="navbar-default" type="button" className="inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-default" aria-expanded="false">
                    <span className="sr-only">Open main menu</span>
                    <svg className="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd"></path></svg>
                  </button>
                  <div className="hidden w-full md:block md:w-auto justify-items-end" id="navbar-default">
                    <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-[#ECEBEC] dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
                      <li>
                        <a href="#" className="block py-2 pl-3 pr-4 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-white md:dark:text-blue-500" aria-current="page">Home</a>
                      </li>
                      <li>
                        <a href="#" className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">About</a>
                      </li>
                      <li>
                        <a href="#" className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Services</a>
                      </li>
                      <li>
                        <a href="#" className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Contact</a>
                      </li>
                    </ul>
                  </div>
                </div>
          </nav>
          <div className="flex justify-normal mx-auto max-w-7xl border-b-2 border-pink-500">
            <a href="#" className="m-6 bg-pink-500 border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-[#E45286] dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
                <div className="md:flex-row md:max-w-xl flex flex-col items-start">
                  <img className="object-cover w-full h-96 md:h-auto md:w-40 md:rounded-none m-5  border-gray-200 border-4" src={livelong} alt="Live Long"/>
                  <div className="flex flex-col justify-between p-4 leading-normal">
                    <div className="max-w-s flex px-4 pb-4">
                      <h5 className=" text-2xl font-serif font-bold tracking-tight text-white dark:text-white px-4">
                        Live Long</h5>
                    </div>
                      <p className="mb-3 font-normal font-sans text-white dark:text-gray-400 px-4">Trapped in a temporal loop following a fatal accident, a beleaguered florist makes the ultimate sacrifice to free herself and save her soulmate from repeated death.</p>
                  </div> 
                </div>
                <div className="flex justify-center w-full divide-x divide-blue-200 pb-4 text-white">
                  <p className="px-4">Feature</p>
                  <p className="px-4">Romance</p>
                  <p className="px-4">Dramedy</p>
                </div>
            </a>
            <a href="#" className="flex flex-col items-start max-w-xl m-6 bg-[#ECEBEC] border hover:bg-[#ECEBEC] dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
                <div className="max-w-s flex p-4">
                  <hr className="h-0.5 bg-black w-10 my-auto inline-block mr-4"></hr>
                  <h5 className="inline-block text-2xl font-bold font-serif tracking-tight text-gray-900 dark:text-white">
                    Welcome to Kat's world</h5>
                </div>
                <p className="font-normal font-serif  text-gray-700 dark:text-gray-400">Sometimes funny, sometimes messy. Always entertaining.
                <br/><br/> 
Kat Rollinson is an award-winning screenwriter who continues to amass an impressive portfolio of features, pilots and shorts. She specialises in poignant comedy, romance and drama, often with a twist of magical realism. Her
flair for creating quirky storylines and layered characters has resulted in incredible feedback, which has acknowledged her organic, charming, masterful storytelling that oozes full of life.</p>
            </a>
          </div>
        </div>

        <div className="mx-auto max-w-7xl px-4 py-2 sm:px-6 lg:px-8 flex justify-normal">
          <div className="mt-6 flex flex-wrap justify-center w-5/6 gap-8">
            {
             awards.map((img) => (
              <a
               // key={img.href}
               href="test.com"
                className="flex h-32 w-32 justify-center p-1"
              >
                <img src={img} className="object-contain" />
              </a>
            ))}
          </div>
          <div className="w-1/6 flex">
            <img src={logofacingright} alt="" />
          </div>
        </div>
      </div>
    </main>
  );
}
