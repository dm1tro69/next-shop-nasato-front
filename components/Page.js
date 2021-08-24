import React from 'react';
import Head from "next/head";
import Title from "./Title";
import NavBar from "./NavBar";

const Page = ({title, children}) => {
    return (
        <>
            <Head>
                <title>{title}-Next shop</title>
            </Head>
            <header>
                <NavBar/>
            </header>
            <main className={'px-6 py-4'}>
                <Title>{title}</Title>
                {children}
            </main>
        </>
    );
};

export default Page;
