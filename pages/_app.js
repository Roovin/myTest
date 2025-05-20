import "@/styles/globals.css";
import Head from "next/head";
import Layout from "@/components/common/Layout";

export default function App({ Component, pageProps }) {
  return (
    <>
        <Head />
        <Layout>
            <Component {...pageProps} />
        </Layout>
    </>
) ;

}