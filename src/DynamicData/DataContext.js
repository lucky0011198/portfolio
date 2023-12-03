import React, { createContext, useContext, useState, useEffect } from 'react';
import { fetchData } from './api'; 
import Info from '../Content';
const DataContext = createContext();

export const DataProvider = ({ children }) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  function fetchDataFromApi() {

  fetch("https://lucky0011198.github.io/Dynamic-Data-For-Portfolio/Data.json", {
    method: 'GET',
    redirect: 'follow'
  })
  .then(response => response.text())
  .then((result) => {
    console.log(result)
    setData(JSON.parse(result))
  })


    // try {
    //   const response = await fetch(
    //     'https://lucky0011198.github.io/Dynamic-Data-For-Portfolio/Data.json',{
    //       method: 'GET',
    //       redirect: 'follow'
    //     }
    //   );
    //   const json = await response.text();
    //   setData(JSON.parse(json));
    //   setLoading(false);
    // } catch (error) {
    //   setData(Info);
    //   console.log(error)
    //   setError(error);
    //   setLoading(false);
    // }
  };

  useEffect(() => {

    // async function fetchDataFromApi() {
    //   try {
    //     const fetchedData = await fetchData();
    //     setData(fetchedData);
    //     setLoading(false);
    //   } catch (error) {
    //     setError(error);
    //     setLoading(false);
    //   }
    // }

    fetchDataFromApi()
  }, []);

  return (
    <DataContext.Provider value={{ data, loading, error }}>
      {children}
    </DataContext.Provider>
  );
};

export const useDataContext = () => {
  return useContext(DataContext);
};
