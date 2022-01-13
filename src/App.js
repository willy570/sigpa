import React, { useEffect, useState } from "react";
import "./App.css";
import axios from "axios";
import LoadingTable from "./component/LoadingTable";
import Mtable from "./component/Mtable";
import ChartComponent from "./component/ChartCompent";

function App() {
  const apiUrl = "https://api.sigpa.org/alpha.php";
  const TableLoading = LoadingTable(Mtable);
  const [appState, setAppState] = useState({
    loading: false,
    datas: null,
  });

  useEffect(() => {
    setAppState({ loading: true });
    axios.get(apiUrl).then((datas) => {
      const allData = datas.data;
      setAppState({ loading: false, datas: allData });
    });
  }, [setAppState]);

  return (
    <div className="bg-gray-50 h-auto">
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
      </div>
    </div>
  );
}

export default App;
