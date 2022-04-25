import { Fragment } from "react";
import Head from "next/head";
import SearchBar from "../../components/SearchBar";

const AddItem = (): JSX.Element => {
  return (
    <div>
      <Head>
        <title>Next-Typescript-Demo</title>
        <meta name="description" content="Generated by create next app" />
        <link
          href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css"
          rel="stylesheet"
          integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC"
          crossOrigin="anonymous"
        ></link>
        <link rel="icon" href="/favicon.ico" />
        <script
          src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js"
          integrity="sha384-MrcW6ZMFYlzcLA8Nl+NtUVF0sA7MsXsP1UyJoMp4YLEuNSfAP+JcXn/tWtIaxVXM"
          crossOrigin="anonymous"
        ></script>
      </Head>
      <h2 className="additem__container--title">Add Item</h2>
      <SearchBar buttonname="add"/>
    </div>
  );
};
export default AddItem;
