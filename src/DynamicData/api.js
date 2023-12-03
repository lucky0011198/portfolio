// api.js
// export async function fetchData() {
//   let requestOptions = {
//     method: 'GET',
//     redirect: 'follow'
//   };
//     try {
//       const response = await fetch("https://lucky0011198.github.io/Dynamic-Data-For-Portfolio/Data.json", requestOptions);
//       const data = await response.json();
//       console.log(data)
//       return data;
//     } catch (error) {
//       console.error('Error fetching data:', error);
//       throw error;
//     }
//   }
  
  export async function fetchData() {
    try {
      const response = await fetch(
        'https://lucky0011198.github.io/Dynamic-Data-For-Portfolio/Data.json',
      );
      const json = await response.json();
      console.log(json);
      return json;
    } catch (error) {
      console.log(error);
    }
  };
