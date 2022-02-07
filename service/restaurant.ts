// new fsq3ad/s/hl4fEOTiC7M/oOnOALg9l0jKFydL3++GnnYYAM=
class RestaurantApi {
  async getSpecificRestaurant(id: number) {
    try {
      const response = await fetch(
        `https://api.foursquare.com/v3/places/${id}`,
        {
          headers: {
            Authorization: "fsq3g4k/pK2iC2+/skcrQVVERi+Y1wCfzVZW3q5Ox97kp8c=",
          },
        }
      )
        .then((response) => {
          return response.json();
        })
        .then((data) => {
          return data;
        });
      return await response;
    } catch (e) {
      console.log(e);
    }
  }
  async filterRestaurantsByCategory(category: string) {
    try {
      const response = await fetch(
        `https://api.foursquare.com/v3/places/search?ll=50.450001%2C30.523333&categories=${category}&sort=RATING&limit=50`,
        {
          headers: {
            Authorization: "fsq3g4k/pK2iC2+/skcrQVVERi+Y1wCfzVZW3q5Ox97kp8c=",
          },
        }
      )
        .then((response) => {
          return response.json();
        })
        .then((data) => {
          return data.results;
        });
      return await response;
    } catch (e) {
      console.log(e);
    }
  }
}

const restaurantsApi = new RestaurantApi();
export default restaurantsApi;
