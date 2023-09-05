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
          'X-RapidAPI-Key': process.env.REACT_APP_RAPIDAPI_TRAVEL_API_KEY,
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
