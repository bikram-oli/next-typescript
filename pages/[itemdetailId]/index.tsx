import React from "react";
import Head from "next/head";
import { NextPage } from "next";
import { GetStaticPaths, GetStaticProps } from "next";
import { ParsedUrlQuery } from "querystring";
import { useRouter } from "next/router";
import { Datas } from "../../public/data"


interface props{
    fetchedDatas: any
}

const ItemDetail: NextPage<props> = (props) => {
  const router = useRouter();
  const id = router.asPath;


  const {fetchedDatas} = props;
//   const filteredData = fetchedDatas.filter(()=> value.title)

  return (
    <div>
      <div>
        <Head>
          <title>{id}</title>
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
      </div>
      <section className="d-flex justify-content-center">
        <div className="itemdetail card text-center">
          <img
            src="https://travelandleisureasia.com/wp-content/uploads/2020/03/7.png"
            className="card-img-top"
            alt="..."
          />
          <div className="card-body">
            <h5 className="card-title text-primary">{}</h5>
            <p className="card-text text-wrapper">
              Lorem ipsum odor amet, consectetuer adipiscing elit. Cras augue
              bibendum ac quisque penatibus consequat. Vivamus cursus mi mi
              pulvinar eros. Ad et montes donec; potenti eros hac. Per ridiculus
              pulvinar sem natoque maximus dis vestibulum dis. Venenatis natoque
              porta aenean elementum elit ut leo porta aenean. Ultrices
              venenatis sed eros finibus egestas curae blandit facilisi
              suspendisse. Sem congue torquent litora parturient inceptos urna
              venenatis.
            </p>
            <p className="card-text">
              <small className="text-muted">Last updated 3 mins ago</small>
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};
// export async function getStaticPaths(params:any) {
//     return{
//         paths: [
//             {
//                 params: 'm1'
//             },
//             {
//                 params: 'm2'
//             },
//         ]
// }

export async function getStaticProps(){
    //fetchig data
    return{
        props:{
           fetchedDatas: Datas
        }
    }
}

export default ItemDetail;
