import React from 'react';

const FAQ = () => {
    return (
        <section className="dark:bg-gray-800 dark:text-gray-100">
            <div className="container flex flex-col justify-center p-4 mx-auto md:p-8">
                <p className="p-2 text-sm font-medium tracking-wider text-center uppercase">How it works</p>
                <h2 className="mb-12 text-4xl font-bold leading-none text-center sm:text-5xl">Frequently Asked Questions</h2>
                <div className="flex flex-col divide-y sm:px-8 lg:px-12 xl:px-32 divide-gray-700">
                    <details>
                        <summary className="py-2 outline-none cursor-pointer focus:underline"><b>What is cors?</b></summary>
                        <div className="px-4 pb-4">
                            <p>The word CORS stands for <b>“Cross-Origin Resource Sharing”</b>.It allows us to relax the security applied to an API. This is done by bypassing the Access-Control-Allow-Origin headers, which specify which origins can access the API.</p>
                        </div>
                    </details>
                    <details>
                        <summary className="py-2 outline-none cursor-pointer focus:underline"><b>Why are you using firebase? What other options do you have to implement authentication?</b></summary>
                        <div className="px-4 pb-4">
                            <p>Firebase helps you develop high-quality apps, grow your user base,and high quality security system. Usually, authentication by a server entails the use of a user name and password. Other ways to authenticate can be through cards, retina scans, voice recognition, and fingerprints.</p>
                        </div>
                    </details>
                    <details>
                        <summary className="py-2 outline-none cursor-pointer focus:underline"><b>How does the private route work?</b></summary>
                        <div className="px-4 pb-4 space-y-2">
                            The private route component is similar to the public route, the only change is that redirect URL and authenticate condition. If the user is not authenticated he will be redirected to the login page and the user can only access the authenticated routes If he is authenticated (Logged in)
                        </div>
                    </details>
                    <details>
                        <summary className="py-2 outline-none cursor-pointer focus:underline"><b>What is Node? How does Node work?</b></summary>
                        <div className="px-4 pb-4 space-y-2">
                            It is a used as backend service where javascript works on the server-side of the application. Node. js runs on chrome v8 engine which converts javascript code into machine code, it is highly scalable, lightweight, fast, and data-intensive
                        </div>
                    </details>
                </div>
            </div>
        </section>
    );
};

export default FAQ;