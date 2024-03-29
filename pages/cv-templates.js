// pages/cv-template.js

import React from 'react';
import Head from 'next/head';
import IndexNavbar from "components/Navbars/IndexNavbar.js";

const CVTemplatePage = () => {
    return (
        <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100">
            <Head>
                <title>CV Template</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <IndexNavbar fixed />
            <main className="flex flex-col items-center justify-center w-full flex-1 px-20 text-center">
                <h1 className="text-3xl font-bold mb-8">CV Template</h1>
                <iframe
                    style={{ width: '100%', height: "100vh" }}
                    className="w-full h-full border-none"
                    src="https://www.livecareer.co.uk/lp/lukrsmlp09.aspx?utm_source=google&utm_medium=sem&utm_campaign=167812362&utm_term=cv%20templates%20free&network=g&device=c&adposition=&adgroupid=10186095522&placement=&adid=554649453295&gad_source=1&gclid=Cj0KCQjwzZmwBhD8ARIsAH4v1gUillLLedYmok8zMD6bz_KWyqJPQe3KplVhVtQrPAmJc2_3qQjgj3IaAiflEALw_wcB"
                    title="CV Template"
                    allowFullScreen
                />
            </main>
        </div>
    );
};

export default CVTemplatePage;
