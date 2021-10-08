import React, { useEffect, useState } from "react";
import "./App.css";
import LoadingTable from "./component/LoadingTable";
import TableComponent from "./component/TableComponent";
import axios from "axios";

function App() {
  const apiUrl = "https://api.sigpa.org/alpha.php";
  const TableLoading = LoadingTable(TableComponent);
  const [appState, setAppState] = useState({
    loading: false,
    datas: null,
  });


  useEffect(() => {
    setAppState({ loading: true });
    axios
      .get(apiUrl)
      .then((datas) => {
        const allData = datas.data;
        setAppState({ loading: false, datas: allData });
      })
      .catch((error) => console.log(error));
  }, [setAppState]);

  return (
    <div className="bg-white h-full">
      <div className="bg-white container mx-auto h-full px-4 sm:px-8 max-w-1xl  flex flex-col items-center justify-center">
        <div className="py-8">
          <div className="-mx-4 sm:-mx-8 px-4 sm:px-8 py-4 overflow-x-auto">
            <div className="inline-block shadow overflow-hidden my-8 w-full">
              <img className="object-cover w-full"
                src="https://www.ripleybelieves.com/img/society-2018/what-is-unesco.jpg"
                alt="logo unesco"
              />
            </div>
            <TableLoading isLoading={appState.loading} datas={appState.datas} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
