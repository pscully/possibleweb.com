import React from 'react';

const PricingTable = (props) => {
    const {
        type,
        price,
        subtext,
        benefitOne,
        benefitTwo,
        benefitThree,
        buttonText
    } = props;

    if (type === "monthly") {
        return (
            <div className="antialiased max-w-6xl mx-auto my-6">
                                            <div className="relative block md:flex items-center">
                                                <div className="w-full relative z-1 bg-bluedark rounded shadow-lg overflow-hidden">
                                                    <div className="text-lg font-medium uppercase p-8 text-center text-white border-b border-gray-200 tracking-wide">
                                                        Monthly No Contract
                                                    </div>
                                                    <div className="block sm:flex md:block lg:flex items-center justify-center">
                            
                                                        <div className="mt-4 mb-8 sm:m-8 md:m-0 md:mt-4 md:mb-8 lg:m-8 text-center">
                                                            <div className="inline-flex items-center">
                                                                <span className="text-3xl font-medium text-white">${price}</span>
                                                                <span className="text-xl ml-2 text-white">per month</span>
                                                            </div>
                                                            <span className="block text-sm text-white mt-2">
                                                                {subtext}
                                                            </span>
                                                        </div>
                                                    </div>
                                                    <div className="flex justify-center mt-3">
                                                        <ul>
                                                            <li className="flex items-center">
                                                                <div className="bg-green-200 rounded-full p-2 fill-current text-green-700">
                                                                    <svg
                                                                        className="w-4 h-4"
                                                                        xmlns="http://www.w3.org/2000/svg"
                                                                        viewBox="0 0 24 24"
                                                                        className="icon-umbrella">
                                                                        <path
                                                                            className="primary"
                                                                            d="M11 3.05V2a1 1 0 0 1 2 0v1.05A10 10 0 0 1 22 13c0 1.33-2 1.33-2 0a2 2 0 1 0-4 0c0 1.33-2 1.33-2 0a2 2 0 1 0-4 0c0 1.33-2 1.33-2 0a2 2 0 1 0-4 0c0 1.33-2 1.33-2 0a10 10 0 0 1 9-9.95z"
                                                                        />
                                                                        <path
                                                                            className="secondary"
                                                                            d="M11 14a1 1 0 0 1 2 0v5a3 3 0 0 1-6 0 1 1 0 0 1 2 0 1 1 0 0 0 2 0v-5z"
                                                                        />
                                                                    </svg>
                                                                </div>
                                                                <span className="text-white text-lg ml-3">
                                                                    {benefitOne}
                                                                </span>
                                                            </li>
                                                            <li className="flex items-center mt-3">
                                                                <div className="bg-green-200 rounded-full p-2 fill-current text-green-700">
                                                                    <svg
                                                                        className="w-4 h-4"
                                                                        xmlns="http://www.w3.org/2000/svg"
                                                                        viewBox="0 0 24 24"
                                                                        className="icon-shopping-bag">
                                                                        <path
                                                                            className="primary"
                                                                            d="M5 8h14a1 1 0 0 1 1 .92l1 12A1 1 0 0 1 20 22H4a1 1 0 0 1-1-1.08l1-12A1 1 0 0 1 5 8z"
                                                                        />
                                                                        <path
                                                                            className="secondary"
                                                                            d="M9 10a1 1 0 0 1-2 0V7a5 5 0 1 1 10 0v3a1 1 0 0 1-2 0V7a3 3 0 0 0-6 0v3z"
                                                                        />
                                                                    </svg>
                                                                </div>
                                                                <span className="text-white text-lg ml-3">
                                                                {benefitTwo}
                                                                </span>
                                                            </li>
                                                            <li className="flex items-center mt-3">
                                                                <div className="bg-green-200 rounded-full p-2 fill-current text-green-700">
                                                                    <svg
                                                                        className="w-4 h-4"
                                                                        xmlns="http://www.w3.org/2000/svg"
                                                                        viewBox="0 0 24 24"
                                                                        className="icon-pie-chart">
                                                                        <path
                                                                            className="primary"
                                                                            d="M14 13h6.78a1 1 0 0 1 .97 1.22A10 10 0 1 1 9.78 2.25a1 1 0 0 1 1.22.97V10a3 3 0 0 0 3 3z"
                                                                        />
                                                                        <path
                                                                            className="secondary"
                                                                            d="M20.78 11H14a1 1 0 0 1-1-1V3.22a1 1 0 0 1 1.22-.97c3.74.85 6.68 3.79 7.53 7.53a1 1 0 0 1-.97 1.22z"
                                                                        />
                                                                    </svg>
                                                                </div>
                                                                <span className="text-white text-lg ml-3">
                                                                {benefitThree}
                                                                </span>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                    <a
                                                        className="block flex items-center justify-center bg-gray-200 hover:bg-gray-300 p-8 text-md font-semibold text-ctapink uppercase mt-16"
                                                        href="https://possibleweb.spp.io/order/DYG3OV">
                                                        <span>{buttonText}</span>
                                                        <span className="font-medium text-ctapink ml-2">
                                                            ➔
                                                        </span>
                                                    </a>
                                                </div>
                                                {/* <div className="w-full md:w-1/2 relative z-0 px-8 md:px-0 md:py-16">
                                                    <div className="bg-blue-900 text-white rounded-b md:rounded-b-none md:rounded-r shadow-lg overflow-hidden">
                                                        <div className="text-lg font-medium uppercase p-8 text-center border-b border-blue-800 tracking-wide">
                                                            Not sure?
                                                        </div>
                                                        <div className="text-center text-sm sm:text-md max-w-sm mx-auto mt-8 text-blue-200 px-8 lg:px-0">
                                                            Get a 15 min no obligation consultation.
                                                        </div>
                                                        <div className="mt-8 border border-blue-800 mx-8 lg:mx-16 flex flex-wrap">
                                                            <div className="flex items-center justify-center w-1/2 text-center p-4 border-r border-b border-blue-800">
                                                                Care Questions
                                                            </div>
                                                            <div className="flex items-center justify-center w-1/2 text-center p-4 border-b border-blue-800">
                                                                Specific Goals
                                                            </div>
                                                            <div className="flex items-center justify-center w-1/2 text-center p-4 border-r border-blue-800">
                                                                Pricing Assistance
                                                            </div>
                                                            <div className="flex items-center justify-center w-1/2 text-center p-4">
                                                                Fast Answers
                                                            </div>
                                                        </div>
                                                        <a
                                                            className="block flex items-center justify-center bg-blue-800 hover:bg-blue-700 p-8 text-md font-semibold text-gray-300 uppercase mt-8"
                                                            href="https://patrick.possibleweb.com/">
                                                            <span>Book Now</span>
                                                            <span className="font-medium text-gray-300 ml-2">
                                                                ➔
                                                            </span>
                                                        </a>
                                                    </div>
                                                </div> */}
                                            </div>
                                        </div>
        )
    }

    if (type === "single") {
        return (
            <div className="antialiased max-w-6xl mx-auto my-6">
                                            <div className="relative block md:flex items-center">
                                                <div className="w-full relative z-1 bg-bluedark rounded shadow-xl overflow-hidden">
                                                    <div className="text-lg font-medium uppercase p-8 text-center text-white border-b border-gray-200 tracking-wide">
                                                        One Time Payment
                                                    </div>
                                                    <div className="block sm:flex md:block lg:flex items-center justify-center">
                            
                                                        <div className="mt-4 mb-8 sm:m-8 md:m-0 md:mt-4 md:mb-8 lg:m-8 text-center">
                                                            <div className="inline-flex items-center">
                                                                <span className="text-3xl font-medium text-white">${price}</span>
                                                                <span className="text-xl ml-2 text-white">one time</span>
                                                            </div>
                                                            <span className="block text-sm text-white mt-2">
                                                                {subtext}
                                                            </span>
                                                        </div>
                                                    </div>
                                                    <div className="flex justify-center mt-3">
                                                        <ul>
                                                            <li className="flex items-center">
                                                                <div className="bg-green-200 rounded-full p-2 fill-current text-green-700">
                                                                    <svg
                                                                        className="w-4 h-4"
                                                                        xmlns="http://www.w3.org/2000/svg"
                                                                        viewBox="0 0 24 24"
                                                                        className="icon-umbrella">
                                                                        <path
                                                                            className="primary"
                                                                            d="M11 3.05V2a1 1 0 0 1 2 0v1.05A10 10 0 0 1 22 13c0 1.33-2 1.33-2 0a2 2 0 1 0-4 0c0 1.33-2 1.33-2 0a2 2 0 1 0-4 0c0 1.33-2 1.33-2 0a2 2 0 1 0-4 0c0 1.33-2 1.33-2 0a10 10 0 0 1 9-9.95z"
                                                                        />
                                                                        <path
                                                                            className="secondary"
                                                                            d="M11 14a1 1 0 0 1 2 0v5a3 3 0 0 1-6 0 1 1 0 0 1 2 0 1 1 0 0 0 2 0v-5z"
                                                                        />
                                                                    </svg>
                                                                </div>
                                                                <span className="text-white text-lg ml-3">
                                                                    {benefitOne}
                                                                </span>
                                                            </li>
                                                            <li className="flex items-center mt-3">
                                                                <div className="bg-green-200 rounded-full p-2 fill-current text-green-700">
                                                                    <svg
                                                                        className="w-4 h-4"
                                                                        xmlns="http://www.w3.org/2000/svg"
                                                                        viewBox="0 0 24 24"
                                                                        className="icon-shopping-bag">
                                                                        <path
                                                                            className="primary"
                                                                            d="M5 8h14a1 1 0 0 1 1 .92l1 12A1 1 0 0 1 20 22H4a1 1 0 0 1-1-1.08l1-12A1 1 0 0 1 5 8z"
                                                                        />
                                                                        <path
                                                                            className="secondary"
                                                                            d="M9 10a1 1 0 0 1-2 0V7a5 5 0 1 1 10 0v3a1 1 0 0 1-2 0V7a3 3 0 0 0-6 0v3z"
                                                                        />
                                                                    </svg>
                                                                </div>
                                                                <span className="text-white text-lg ml-3">
                                                                    {benefitTwo}
                                                                </span>
                                                            </li>
                                                            <li className="flex items-center mt-3">
                                                                <div className="bg-green-200 rounded-full p-2 fill-current text-green-700">
                                                                    <svg
                                                                        className="w-4 h-4"
                                                                        xmlns="http://www.w3.org/2000/svg"
                                                                        viewBox="0 0 24 24"
                                                                        className="icon-pie-chart">
                                                                        <path
                                                                            className="primary"
                                                                            d="M14 13h6.78a1 1 0 0 1 .97 1.22A10 10 0 1 1 9.78 2.25a1 1 0 0 1 1.22.97V10a3 3 0 0 0 3 3z"
                                                                        />
                                                                        <path
                                                                            className="secondary"
                                                                            d="M20.78 11H14a1 1 0 0 1-1-1V3.22a1 1 0 0 1 1.22-.97c3.74.85 6.68 3.79 7.53 7.53a1 1 0 0 1-.97 1.22z"
                                                                        />
                                                                    </svg>
                                                                </div>
                                                                <span className="text-white text-lg ml-3">
                                                                    {benefitThree}
                                                                </span>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                    <a
                                                        className="block flex items-center justify-center bg-gray-200 hover:bg-gray-300 p-8 text-md font-semibold text-ctapink uppercase mt-16"
                                                        href="https://possibleweb.spp.io/order/DYG3OV">
                                                        <span>{buttonText}</span>
                                                        <span className="font-medium text-ctapink ml-2">
                                                            ➔
                                                        </span>
                                                    </a>
                                                </div>
                                                {/* <div className="w-full md:w-1/2 relative z-0 px-8 md:px-0 md:py-16">
                                                    <div className="bg-blue-900 text-white rounded-b md:rounded-b-none md:rounded-r shadow-lg overflow-hidden">
                                                        <div className="text-lg font-medium uppercase p-8 text-center border-b border-blue-800 tracking-wide">
                                                            Not sure?
                                                        </div>
                                                        <div className="text-center text-sm sm:text-md max-w-sm mx-auto mt-8 text-blue-200 px-8 lg:px-0">
                                                            Get a 15 min no obligation consultation.
                                                        </div>
                                                        <div className="mt-8 border border-blue-800 mx-8 lg:mx-16 flex flex-wrap">
                                                            <div className="flex items-center justify-center w-1/2 text-center p-4 border-r border-b border-blue-800">
                                                                Care Questions
                                                            </div>
                                                            <div className="flex items-center justify-center w-1/2 text-center p-4 border-b border-blue-800">
                                                                Specific Goals
                                                            </div>
                                                            <div className="flex items-center justify-center w-1/2 text-center p-4 border-r border-blue-800">
                                                                Pricing Assistance
                                                            </div>
                                                            <div className="flex items-center justify-center w-1/2 text-center p-4">
                                                                Fast Answers
                                                            </div>
                                                        </div>
                                                        <a
                                                            className="block flex items-center justify-center bg-blue-800 hover:bg-blue-700 p-8 text-md font-semibold text-gray-300 uppercase mt-8"
                                                            href="https://patrick.possibleweb.com/">
                                                            <span>Book Now</span>
                                                            <span className="font-medium text-gray-300 ml-2">
                                                                ➔
                                                            </span>
                                                        </a>
                                                    </div>
                                                </div> */}
                                            </div>
                                        </div>
        )
    }
    
}

export default PricingTable;