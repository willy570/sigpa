import React, { useState, useEffect} from 'react'

import axios from "axios";
import LoadingTable from "../component/LoadingTable";
import Mtable from "../component/Mtable";
import ChartComponent from "../component/ChartCompent";
import InscritChartComponent from '../component/InscritChartCompent';

export const Home = () => {
    const apiUrl = "https://api.sigpa.org/alpha.php";
    const inscritUrl = "https://api.sigpa.org/alpha.php/inscrit.php";
    const TableLoading = LoadingTable(Mtable);
    const [appState, setAppState] = useState({
      loading: false,
      datas: null,
      inscritdata:null
    });

    useEffect(() =>{
      setAppState({ loading: true });
      Promise.all([
        axios.get(apiUrl),
        axios.get(inscritUrl),
      ]).then((datas) =>{
        console.log(datas[0]);
        console.log(datas[1]);
        const allData = datas[0].data;
         const inscrits = datas[1].data;
        setAppState({ loading: false,datas: allData, inscritdata: inscrits });
       
      }).catch(function (error) {
       
        console.log(error);
    });
      
    },[setAppState])
  
    /* useEffect(() => {
      setAppState({ loading: true });
      axios.get(apiUrl).then((datas) => {
        const allData = datas.data;
        setAppState({ loading: false, datas: allData });
      });

    }, [setAppState]);
    useEffect(() =>{
        setAppState({ loading: true });
      axios.get(inscritUrl).then((datas) => {
        const allData = datas.data;
        setAppState({ loading: false, datas: allData });
      });
    }, [setAppState]) */
  return (
    <div> 
        <div className="bg-gray-50 h-auto ml-5 mr-5">
          <div className="containter px-7 bg-white mx-auto">
            <div className="grid grid-cols-3 my-8">
              <div className="w-3/12"></div>
              <div className="inline-block shadow overflow-hidden w-full">
                <img
                  className="w-full object-cover"
                  src="imgs/UNESCO_logo_hor_blue.jpg"
                  alt="logo unesco"
                />
              </div>
              <div className="w-3/12"></div>
            </div>
    
            <div className="grid grid-cols-2 gap-2 mb-5">
              <div className="shadow">
                <TableLoading isLoading={appState.loading} datas={appState.datas} />
              </div>
              <div className="shadow">
                <ChartComponent chartDatas={appState.datas}/>
              </div>
            </div>
            <div className="m-5">
                <h1 className="text-3xl subpixel-antialiased font-semibold font-nono underline decoration-pink-500">Nombre d'inscrit</h1>
            </div>
            <div className="grid grid-cols-1  mb-5">
               
          
              <div className="shadow">
                  <InscritChartComponent datas={appState.inscritdata}/>
              
              </div>
             
            </div>
          </div>
        </div>
      </div>
  )
}


