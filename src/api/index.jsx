import axios from "axios";

const GetHotelsData = async (latitude, longitude) => {
  try {
    const {
      data: { data },
    } = await axios.get(
      "https://travel-advisor.p.rapidapi.com/restaurants/list-by-latlng",
      {
        // method: "GET",
        url: "https://travel-advisor.p.rapidapi.com/restaurants/list-by-latlng",
        // url: 'https://travel-advisor.p.rapidapi.com/hotels/list-by-latlng',
        params: {
          latitude: latitude,
          longitude: longitude,

          limit: '30',
          // currency: 'USD',
          // distance: '2',
          // open_now: 'false',
          // lunit: 'km',
          // lang: 'en_US'
        },
        headers: {
          // 'X-RapidAPI-Key': '870802e1afmshea42dfcce80c856p18270cjsndf4cfaf46923',   nikola.vuletic82
          // 'X-RapidAPI-Key': '6ffb7f2b39mshdae315b36d0452dp1a8e3fjsnbf5e819af236',   nikola.vuletic.akvia
                            // "7e62f59f63msh1c905264fef8196p178da3jsn98288327e497",   viavsnikola.vuletic 
          // "X-RapidAPI-Key": '917b765184mshbe09b7d42d98d26p1eaaa0jsn81787e831ac4',   momo, ana english next
          'X-RapidAPI-Key': '9d685bfa9fmshcc02f1e361a8f53p126d65jsnd35a55061c28',
          "X-RapidAPI-Host": "travel-advisor.p.rapidapi.com",
        },
      }
    );

    console.log(data);
    return data;
  } catch (error) {
    console.log(error.response);
  }
};

export default GetHotelsData;
