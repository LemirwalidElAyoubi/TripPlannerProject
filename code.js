const axios = require("axios");
const readline = require("readline");

class TripPlanner {
  constructor(apiKey) {
    this.apiKey = apiKey;
    this.attractions = [
      {
        name: "Al Ahsa Oasis",
        location: "Al Riyadh",
        category: "Cultural Immersions",
        when: "Sunrise",
      },
      {
        name: "Al Bid'",
        location: "Tabuk",
        category: "Historical Tours",
        when: "Day",
      },
      {
        name: "Al Khobar",
        location: "Al Sharqiyah",
        category: "Urban Explorations",
        when: "Sunset",
      },
      {
        name: "Al Lith",
        location: "Makkah",
        category: "Diving Expeditions - Red Sea",
        when: "Sunset",
      },
      {
        name: "Al Majma'ah",
        location: "Al Riyadh",
        category: "Historical Tours",
        when: "Day",
      },
      {
        name: "Al Namas",
        location: "Asir",
        category: "Wildlife Safaris",
        when: "Sunrise",
      },
      {
        name: "Al Ula Old Town",
        location: "Al Madinah",
        category: "Historical Tours",
        when: "Day",
      },
      {
        name: "Al-Aridah",
        location: "Jizan",
        category: "Urban Explorations",
        when: "Day",
      },
      {
        name: "Al-Awamiyah",
        location: "Al Sharqiyah",
        category: "Urban Explorations",
        when: "Day",
      },
      {
        name: "Al-Fara'ah",
        location: "Asir",
        category: "Cultural Immersions",
        when: "Day",
      },
      {
        name: "Al-Kharj",
        location: "Al Riyadh",
        category: "Urban Explorations",
        when: "Sunset",
      },
      {
        name: "Al-Muzahmiyya",
        location: "Al Riyadh",
        category: "Cultural Immersions",
        when: "Day",
      },
      {
        name: "Al-Qatif",
        location: "Al Sharqiyah",
        category: "Urban Explorations",
        when: "Sunset",
      },
      {
        name: "Al-Quway'iyah",
        location: "Al Riyadh",
        category: "Cultural Immersions",
        when: "Day",
      },
      {
        name: "Al-Uyun",
        location: "Al Sharqiyah",
        category: "Urban Explorations",
        when: "Day",
      },
      {
        name: "Badanah",
        location: "Makkah",
        category: "Cultural Immersions",
        when: "Day",
      },
      {
        name: "Baljurashi",
        location: "Al Bahah",
        category: "Cultural Immersions",
        when: "Day",
      },
      {
        name: "Dawadmi",
        location: "Al Riyadh",
        category: "Urban Explorations",
        when: "Day",
      },
      {
        name: "Dhee Ayn Village",
        location: "Al Bahah",
        category: "Historical Tours",
        when: "Day",
      },
      {
        name: "Diriyah",
        location: "Al Riyadh",
        category: "Historical Tours",
        when: "Day",
      },
      {
        name: "Farasan Islands",
        location: "Jizan",
        category: "Dolphin Watching - Red Sea",
        when: "Sunrise",
      },
      {
        name: "Habala",
        location: "Asir",
        category: "Mountain Climbing",
        when: "Sunrise",
      },
      {
        name: "Haql",
        location: "Tabuk",
        category: "Diving Expeditions - Red Sea",
        when: "Sunset",
      },
      {
        name: "Jazan City",
        location: "Jizan",
        category: "Urban Explorations",
        when: "Sunset",
      },
      {
        name: "Jubbah",
        location: "Ha'il",
        category: "Historical Tours",
        when: "Day",
      },
      {
        name: "Muhayil",
        location: "Asir",
        category: "Cultural Immersions",
        when: "Day",
      },
      {
        name: "Test Test Location because no more data",
        location: "Al Riyadh",
        category: "Cultural Immersions",
        when: "Day",
      },
      {
        name: "Qurayyat",
        location: "Al Jawf",
        category: "Urban Explorations",
        when: "Day",
      },
      {
        name: "Raghbah",
        location: "Al Riyadh",
        category: "Cultural Immersions",
        when: "Day",
      },
      {
        name: "Rijal Almaa",
        location: "Asir",
        category: "Historical Tours",
        when: "Day",
      },
      {
        name: "Sakaka",
        location: "Al Jawf",
        category: "Urban Explorations",
        when: "Day",
      },
      {
        name: "Shaqraa",
        location: "Al Riyadh",
        category: "Urban Explorations",
        when: "Day",
      },
      {
        name: "Shuqaiq",
        location: "Jizan",
        category: "Diving Expeditions - Red Sea",
        when: "Sunset",
      },
      {
        name: "Tarout Island",
        location: "Al Sharqiyah",
        category: "Dolphin Watching - Red Sea",
        when: "Sunrise",
      },
      {
        name: "Tayma",
        location: "Tabuk",
        category: "Historical Tours",
        when: "Day",
      },
      {
        name: "Thadiq",
        location: "Al Riyadh",
        category: "Urban Explorations",
        when: "Day",
      },
      {
        name: "Tumair",
        location: "Al Riyadh",
        category: "Urban Explorations",
        when: "Day",
      },
      {
        name: "Uqair",
        location: "Al Sharqiyah",
        category: "Diving Expeditions - Red Sea",
        when: "Sunset",
      },
      {
        name: "Ushaiqer",
        location: "Al Riyadh",
        category: "Historical Tours",
        when: "Day",
      },
    ];

    this.moodToCategory = {
      Adrenaline: "Mountain Climbing",
      "Camel Trekking": "Exploration",
      "Cultural Immersions": "Cultural Immersions",
      "Desert Adventures": "Exploration",
      "Diving Expeditions - Red Sea": "Diving Expeditions - Red Sea",
      "Dolphin Watching - Red Sea": "Dolphin Watching - Red Sea",
      "Historical Tours": "Historical Tours",
      "Hot Air Ballooning": "Exploration",
      "Mountain Climbing": "Mountain Climbing",
      "Off-Roading": "Exploration",
      Sandboarding: "Exploration",
      "Stargazing Tours": "Chill",
      "Traditional Cuisine Tours": "Culture",
      Trips: "Exploration",
      "Urban Explorations": "Urban Explorations",
      "Wildlife Safaris": "Wildlife Safaris",
    };

    this.categoryDurations = {
      "Mountain Climbing": 3,
      Exploration: 2,
      "Cultural Immersions": 2,
      "Diving Expeditions - Red Sea": 2,
      "Dolphin Watching - Red Sea": 1,
      "Historical Tours": 2,
      Chill: 2,
      Culture: 3,
      "Wildlife Safaris": 2,
    };

    this.timeConversion = {
      "2h": 2,
      "4h": 4,
      "half day": 6,
      "full day": 9,
    };

    this.populateCoordinates();
  }

  async populateCoordinates() {
    for (const attraction of this.attractions) {
      const address = `${attraction.name}, ${attraction.location}`;
      const geocodeResult = await this.geocode(address);
      if (geocodeResult) {
        const location = geocodeResult[0].geometry.location;
        attraction.latitude = location.lat;
        attraction.longitude = location.lng;
      } else {
        attraction.latitude = null;
        attraction.longitude = null;
      }
    }
  }

  async geocode(address) {
    const url = `https://maps.googleapis.com/maps/api/geocode/json?address=${encodeURIComponent(
      address
    )}&key=${this.apiKey}`;
    try {
      const response = await axios.get(url);
      return response.data.results;
    } catch (error) {
      console.error(`Error geocoding address ${address}:`, error);
      return null;
    }
  }

  async getDistance(origin, destination) {
    if (
      !origin.latitude ||
      !origin.longitude ||
      !destination.latitude ||
      !destination.longitude
    ) {
      return null;
    }
    const origins = `${origin.latitude},${origin.longitude}`;
    const destinations = `${destination.latitude},${destination.longitude}`;
    const url = `https://maps.googleapis.com/maps/api/distancematrix/json?origins=${origins}&destinations=${destinations}&key=${this.apiKey}`;
    try {
      const response = await axios.get(url);
      if (response.data.rows[0].elements[0].status === "OK") {
        return response.data.rows[0].elements[0].distance.value;
      } else {
        return null;
      }
    } catch (error) {
      console.error(
        `Error getting distance from ${origins} to ${destinations}:`,
        error
      );
      return null;
    }
  }

  async recommendAttractions(mood, tripDuration, location, when) {
    const category = this.moodToCategory[mood];
    const totalAvailableTime =
      this.timeConversion[tripDuration.toLowerCase()] || 0;

    const possibleMatches = this.attractions.filter(
      (attraction) =>
        attraction.category === category &&
        attraction.location === location &&
        attraction.when === when
    );

    if (possibleMatches.length === 0) {
      console.log("No exact matches found, finding alternatives...");
      possibleMatches.push(
        ...this.attractions.filter(
          (attraction) =>
            attraction.category === category && attraction.location === location
        )
      );
    }

    let finalAttractions = [];
    let timeSpent = 0;

    for (const attraction of possibleMatches) {
      if (timeSpent >= totalAvailableTime) break;
      const distance = await this.getDistance(
        { latitude: attraction.latitude, longitude: attraction.longitude },
        { latitude: 0, longitude: 0 }
      );
      const estimatedTime = distance / 1000; // Assuming travel speed of 1000 meters per hour
      if (estimatedTime <= totalAvailableTime - timeSpent) {
        finalAttractions.push(attraction);
        timeSpent += this.categoryDurations[attraction.category] || 2; // Default to 2 hours if not specified
      }
    }

    if (finalAttractions.length === 0) {
      console.log(
        "No available attractions found for the given mood, trip duration, and location."
      );
    } else {
      console.log("Recommended Tour:");
      for (const attraction of finalAttractions) {
        console.log(
          `Spend ${this.categoryDurations[attraction.category] || 2} hours at ${
            attraction.name
          }`
        );
      }
    }
  }
}

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const tripPlanner = new TripPlanner("AIzaSyBks-gFEmIsCVp68MMtX2JYwJrv6znoW8Q");

async function promptUser() {
  console.log(
    "Available Moods:  Adrenaline, Camel Trekking, Cultural Immersions, Desert Adventures, Diving Expeditions - Red Sea, Dolphin Watching - Red Sea, Historical Tours, Hot Air Ballooning, Mountain Climbing, Off-Roading, Sandboarding, Stargazing Tours, Traditional Cuisine Tours, Trips, Urban Explorations, Wildlife Safaris"
  );

  rl.question("What mood are you in? ", async (mood) => {
    console.log(
      "Available Locations:  Al Riyadh, Tabuk, Al Sharqiyah, Makkah, Asir, Al Madinah, Jizan, Al Bahah, Ha'il, Al Jawf, Najran, Qasim"
    );

    rl.question("Where are you? ", async (location) => {
      console.log("Available When Options:  Day, Late Night, Sunrise, Sunset");

      rl.question("When do you plan to go? ", async (when) => {
        console.log("Available Time Options:  2h, 4h, half day, full day");

        rl.question("How much time do you have? ", async (tripDuration) => {
          await tripPlanner.recommendAttractions(
            mood,
            tripDuration,
            location,
            when
          );
          rl.close();
        });
      });
    });
  });
}

promptUser();

//const tripPlanner = new TripPlanner("AIzaSyBks-gFEmIsCVp68MMtX2JYwJrv6znoW8Q");

//const tripPlanner = new TripPlanner("AIzaSyBks-gFEmIsCVp68MMtX2JYwJrv6znoW8Q");

// const { Client } = require("@googlemaps/google-maps-services-js");
// const readline = require("readline");

// class TripPlanner {
//   constructor(apiKey) {
//     this.gmaps = new Client({ params: { key: apiKey } });
//     this.attractions = [
//       {
//         name: "Al Ahsa Oasis",
//         location: "Al Riyadh",
//         category: "Cultural Immersions",
//         when: "Sunrise",
//       },
//       {
//         name: "Al Bid'",
//         location: "Tabuk",
//         category: "Historical Tours",
//         when: "Day",
//       },
//       {
//         name: "Al Khobar",
//         location: "Al Sharqiyah",
//         category: "Urban Explorations",
//         when: "Sunset",
//       },
//       {
//         name: "Al Lith",
//         location: "Makkah",
//         category: "Diving Expeditions - Red Sea",
//         when: "Sunset",
//       },
//       {
//         name: "Al Majma'ah",
//         location: "Al Riyadh",
//         category: "Historical Tours",
//         when: "Day",
//       },
//       {
//         name: "Al Namas",
//         location: "Asir",
//         category: "Wildlife Safaris",
//         when: "Sunrise",
//       },
//       {
//         name: "Al Ula Old Town",
//         location: "Al Madinah",
//         category: "Historical Tours",
//         when: "Day",
//       },
//       {
//         name: "Al-Aridah",
//         location: "Jizan",
//         category: "Urban Explorations",
//         when: "Day",
//       },
//       {
//         name: "Al-Awamiyah",
//         location: "Al Sharqiyah",
//         category: "Urban Explorations",
//         when: "Day",
//       },
//       {
//         name: "Al-Fara'ah",
//         location: "Asir",
//         category: "Cultural Immersions",
//         when: "Day",
//       },
//       {
//         name: "Al-Kharj",
//         location: "Al Riyadh",
//         category: "Urban Explorations",
//         when: "Sunset",
//       },
//       {
//         name: "Al-Muzahmiyya",
//         location: "Al Riyadh",
//         category: "Cultural Immersions",
//         when: "Day",
//       },
//       {
//         name: "Al-Qatif",
//         location: "Al Sharqiyah",
//         category: "Urban Explorations",
//         when: "Sunset",
//       },
//       {
//         name: "Al-Quway'iyah",
//         location: "Al Riyadh",
//         category: "Cultural Immersions",
//         when: "Day",
//       },
//       {
//         name: "Al-Uyun",
//         location: "Al Sharqiyah",
//         category: "Urban Explorations",
//         when: "Day",
//       },
//       {
//         name: "Badanah",
//         location: "Makkah",
//         category: "Cultural Immersions",
//         when: "Day",
//       },
//       {
//         name: "Baljurashi",
//         location: "Al Bahah",
//         category: "Cultural Immersions",
//         when: "Day",
//       },
//       {
//         name: "Dawadmi",
//         location: "Al Riyadh",
//         category: "Urban Explorations",
//         when: "Day",
//       },
//       {
//         name: "Dhee Ayn Village",
//         location: "Al Bahah",
//         category: "Historical Tours",
//         when: "Day",
//       },
//       {
//         name: "Diriyah",
//         location: "Al Riyadh",
//         category: "Historical Tours",
//         when: "Day",
//       },
//       {
//         name: "Farasan Islands",
//         location: "Jizan",
//         category: "Dolphin Watching - Red Sea",
//         when: "Sunrise",
//       },
//       {
//         name: "Habala",
//         location: "Asir",
//         category: "Mountain Climbing",
//         when: "Sunrise",
//       },
//       {
//         name: "Haql",
//         location: "Tabuk",
//         category: "Diving Expeditions - Red Sea",
//         when: "Sunset",
//       },
//       {
//         name: "Jazan City",
//         location: "Jizan",
//         category: "Urban Explorations",
//         when: "Sunset",
//       },
//       {
//         name: "Jubbah",
//         location: "Ha'il",
//         category: "Historical Tours",
//         when: "Day",
//       },
//       {
//         name: "Muhayil",
//         location: "Asir",
//         category: "Cultural Immersions",
//         when: "Day",
//       },
//       {
//         name: "Qurayyat",
//         location: "Al Jawf",
//         category: "Urban Explorations",
//         when: "Day",
//       },
//       {
//         name: "Raghbah",
//         location: "Al Riyadh",
//         category: "Cultural Immersions",
//         when: "Day",
//       },
//       {
//         name: "Rijal Almaa",
//         location: "Asir",
//         category: "Historical Tours",
//         when: "Day",
//       },
//       {
//         name: "Sakaka",
//         location: "Al Jawf",
//         category: "Urban Explorations",
//         when: "Day",
//       },
//       {
//         name: "Shaqraa",
//         location: "Al Riyadh",
//         category: "Urban Explorations",
//         when: "Day",
//       },
//       {
//         name: "Shuqaiq",
//         location: "Jizan",
//         category: "Diving Expeditions - Red Sea",
//         when: "Sunset",
//       },
//       {
//         name: "Tarout Island",
//         location: "Al Sharqiyah",
//         category: "Dolphin Watching - Red Sea",
//         when: "Sunrise",
//       },
//       {
//         name: "Tayma",
//         location: "Tabuk",
//         category: "Historical Tours",
//         when: "Day",
//       },
//       {
//         name: "Thadiq",
//         location: "Al Riyadh",
//         category: "Urban Explorations",
//         when: "Day",
//       },
//       {
//         name: "Tumair",
//         location: "Al Riyadh",
//         category: "Urban Explorations",
//         when: "Day",
//       },
//       {
//         name: "Uqair",
//         location: "Al Sharqiyah",
//         category: "Diving Expeditions - Red Sea",
//         when: "Sunset",
//       },
//       {
//         name: "Ushaiqer",
//         location: "Al Riyadh",
//         category: "Historical Tours",
//         when: "Day",
//       },
//     ];

//     this.moodToCategory = {
//       Adrenaline: "Mountain Climbing",
//       "Camel Trekking": "Exploration",
//       "Cultural Immersions": "Cultural Immersions",
//       "Desert Adventures": "Exploration",
//       "Diving Expeditions - Red Sea": "Diving Expeditions - Red Sea",
//       "Dolphin Watching - Red Sea": "Dolphin Watching - Red Sea",
//       "Historical Tours": "Historical Tours",
//       "Hot Air Ballooning": "Exploration",
//       "Mountain Climbing": "Mountain Climbing",
//       "Off-Roading": "Exploration",
//       Sandboarding: "Exploration",
//       "Stargazing Tours": "Chill",
//       "Traditional Cuisine Tours": "Culture",
//       Trips: "Exploration",
//       "Urban Explorations": "Urban Explorations",
//       "Wildlife Safaris": "Wildlife Safaris",
//     };

//     this.categoryDurations = {
//       "Mountain Climbing": 3,
//       Exploration: 2,
//       "Cultural Immersions": 2,
//       "Diving Expeditions - Red Sea": 2,
//       "Dolphin Watching - Red Sea": 1,
//       "Historical Tours": 2,
//       Chill: 2,
//       Culture: 3,
//       "Wildlife Safaris": 2,
//     };

//     this.timeConversion = {
//       "2h": 2,
//       "4h": 4,
//       "half day": 6,
//       "full day": 9,
//     };

//     this.populateCoordinates();
//   }

//   async populateCoordinates() {
//     for (const attraction of this.attractions) {
//       const address = `${attraction.name}, ${attraction.location}`;
//       try {
//         const geocodeResult = await this.gmaps.geocode({
//           params: { address, key: this.gmaps.params.key },
//         });
//         if (geocodeResult.data.results.length > 0) {
//           const location = geocodeResult.data.results[0].geometry.location;
//           attraction.latitude = location.lat;
//           attraction.longitude = location.lng;
//         } else {
//           attraction.latitude = null;
//           attraction.longitude = null;
//         }
//       } catch (error) {
//         console.error(`Error fetching coordinates for ${address}: ${error}`);
//         attraction.latitude = null;
//         attraction.longitude = null;
//       }
//     }
//   }

//   async getDistance(origin, destination) {
//     const originCoords = [origin.latitude, origin.longitude];
//     const destinationCoords = [destination.latitude, destination.longitude];
//     if (originCoords.includes(null) || destinationCoords.includes(null)) {
//       return null;
//     }
//     try {
//       const distanceResult = await this.gmaps.distanceMatrix({
//         params: {
//           origins: [originCoords],
//           destinations: [destinationCoords],
//           key: this.gmaps.params.key,
//         },
//       });
//       const status = distanceResult.data.rows[0].elements[0].status;
//       if (status === "OK") {
//         return distanceResult.data.rows[0].elements[0].distance.value;
//       } else {
//         return null;
//       }
//     } catch (error) {
//       console.error(`Error getting distance: ${error}`);
//       return null;
//     }
//   }

//   async recommendAttractions(mood, tripDuration, location, when) {
//     const category = this.moodToCategory[mood];
//     const totalTimeAvailable = this.timeConversion[tripDuration];

//     if (!category || !totalTimeAvailable) {
//       console.log("Invalid mood or time duration.");
//       return [];
//     }

//     const possibleMatches = this.attractions.filter(
//       (attraction) =>
//         attraction.category === category &&
//         attraction.location === location &&
//         attraction.when.toLowerCase() === when.toLowerCase()
//     );

//     if (possibleMatches.length === 0) {
//       console.log("No attractions match the given mood, location, and time.");
//       return [];
//     }

//     // Sort the attractions randomly
//     possibleMatches.sort(() => Math.random() - 0.5);

//     const recommendedTour = [];
//     let remainingTime = totalTimeAvailable;

//     for (const attraction of possibleMatches) {
//       if (remainingTime <= 0) break;

//       const category = attraction.category || "";
//       const duration = this.categoryDurations[category] || 0;

//       if (remainingTime >= duration) {
//         recommendedTour.push({ name: attraction.name, duration });
//         remainingTime -= duration;
//       }
//     }

//     // Add additional attractions from the same location to fill up the remaining time
//     const sameLocationAttractions = possibleMatches.filter(
//       (attraction) =>
//         attraction.name !== recommendedTour[recommendedTour.length - 1]?.name
//     );
//     while (remainingTime > 0 && sameLocationAttractions.length > 0) {
//       const nextAttraction = sameLocationAttractions.shift(); // Get the next available attraction

//       const nextCategory = nextAttraction.category || "";
//       const nextDuration = this.categoryDurations[nextCategory] || 0;

//       if (remainingTime >= nextDuration) {
//         recommendedTour.push({
//           name: nextAttraction.name,
//           duration: nextDuration,
//         });
//         remainingTime -= nextDuration;
//       } else {
//         break; // Break if no more time is available for a new attraction
//       }
//     }

//     return recommendedTour;
//   }
// }

// const rl = readline.createInterface({
//   input: process.stdin,
//   output: process.stdout,
// });

// function getUserPreference() {
//   return new Promise((resolve) => {
//     const moods = [
//       "Adrenaline",
//       "Camel Trekking",
//       "Cultural Immersions",
//       "Desert Adventures",
//       "Diving Expeditions - Red Sea",
//       "Dolphin Watching - Red Sea",
//       "Historical Tours",
//       "Hot Air Ballooning",
//       "Mountain Climbing",
//       "Off-Roading",
//       "Sandboarding",
//       "Stargazing Tours",
//       "Traditional Cuisine Tours",
//       "Trips",
//       "Urban Explorations",
//       "Wildlife Safaris",
//     ];
//     const locations = [
//       "Al Riyadh",
//       "Tabuk",
//       "Al Sharqiyah",
//       "Makkah",
//       "Asir",
//       "Al Madinah",
//       "Jizan",
//       "Al Bahah",
//       "Ha'il",
//       "Al Jawf",
//       "Najran",
//       "Qasim",
//     ];
//     const whenOptions = ["Day", "Late Night", "Sunrise", "Sunset"];
//     const timeOptions = ["2h", "4h", "half day", "full day"];

//     const promptUser = (question) => {
//       return new Promise((resolve) =>
//         rl.question(question, (answer) => resolve(answer.trim()))
//       );
//     };

//     (async () => {
//       console.log("Available Moods: ", moods.join(", "));
//       let mood;
//       do {
//         mood = await promptUser("What mood are you in? ");
//         if (!moods.includes(mood))
//           console.log("Invalid mood. Please choose from the available moods.");
//       } while (!moods.includes(mood));

//       console.log("Available Locations: ", locations.join(", "));
//       let location;
//       do {
//         location = await promptUser("Where are you? ");
//         if (!locations.includes(location))
//           console.log(
//             "Invalid location. Please choose from the available locations."
//           );
//       } while (!locations.includes(location));

//       console.log("Available When Options: ", whenOptions.join(", "));
//       let when;
//       do {
//         when = (await promptUser("When do you plan to go? ")).toLowerCase();
//         when = when.charAt(0).toUpperCase() + when.slice(1);
//         if (!whenOptions.includes(when))
//           console.log(
//             "Invalid time option. Please choose from the available options."
//           );
//       } while (!whenOptions.includes(when));

//       console.log("Available Time Options: ", timeOptions.join(", "));
//       let tripDuration;
//       do {
//         tripDuration = await promptUser("How much time do you have? ");
//         if (!timeOptions.includes(tripDuration))
//           console.log(
//             "Invalid time option. Please choose from the available options."
//           );
//       } while (!timeOptions.includes(tripDuration));

//       rl.close();
//       resolve({ mood, tripDuration, location, when });
//     })();
//   });
// }

// async function main() {
//   const apiKey = "AIzaSyBks-gFEmIsCVp68MMtX2JYwJrv6znoW8Q"; // Replace with your actual API key
//   const planner = new TripPlanner(apiKey);

//   const { mood, tripDuration, location, when } = await getUserPreference();
//   const recommendedTour = await planner.recommendAttractions(
//     mood,
//     tripDuration,
//     location,
//     when
//   );

//   if (recommendedTour.length > 0) {
//     console.log("Recommended Tour:");
//     recommendedTour.forEach((attraction, index) => {
//       if (index === 0) {
//         console.log(
//           `Spend ${attraction.duration} hour${
//             attraction.duration > 1 ? "s" : ""
//           } at ${attraction.name}`
//         );
//       } else {
//         console.log(
//           `Then go to ${attraction.name} and spend ${attraction.duration} hour${
//             attraction.duration > 1 ? "s" : ""
//           } there`
//         );
//       }
//     });
//   } else {
//     console.log("No recommendations available.");
//   }
// }

// main();

// const { Client } = require("@googlemaps/google-maps-services-js");
// const readline = require("readline");

// class TripPlanner {
//   constructor(apiKey) {
//     this.gmaps = new Client({ params: { key: apiKey } });
//     this.attractions = [
//       {
//         name: "Al Ahsa Oasis",
//         location: "Al Riyadh",
//         category: "Cultural Immersions",
//         when: "Sunrise",
//       },
//       {
//         name: "Al Bid'",
//         location: "Tabuk",
//         category: "Historical Tours",
//         when: "Day",
//       },
//       {
//         name: "Al Khobar",
//         location: "Al Sharqiyah",
//         category: "Urban Explorations",
//         when: "Sunset",
//       },
//       {
//         name: "Al Lith",
//         location: "Makkah",
//         category: "Diving Expeditions - Red Sea",
//         when: "Sunset",
//       },
//       {
//         name: "Al Majma'ah",
//         location: "Al Riyadh",
//         category: "Historical Tours",
//         when: "Day",
//       },
//       {
//         name: "Al Namas",
//         location: "Asir",
//         category: "Wildlife Safaris",
//         when: "Sunrise",
//       },
//       {
//         name: "Al Ula Old Town",
//         location: "Al Madinah",
//         category: "Historical Tours",
//         when: "Day",
//       },
//       {
//         name: "Al-Aridah",
//         location: "Jizan",
//         category: "Urban Explorations",
//         when: "Day",
//       },
//       {
//         name: "Al-Awamiyah",
//         location: "Al Sharqiyah",
//         category: "Urban Explorations",
//         when: "Day",
//       },
//       {
//         name: "Al-Fara'ah",
//         location: "Asir",
//         category: "Cultural Immersions",
//         when: "Day",
//       },
//       {
//         name: "Al-Kharj",
//         location: "Al Riyadh",
//         category: "Urban Explorations",
//         when: "Sunset",
//       },
//       {
//         name: "Al-Muzahmiyya",
//         location: "Al Riyadh",
//         category: "Cultural Immersions",
//         when: "Day",
//       },
//       {
//         name: "Al-Qatif",
//         location: "Al Sharqiyah",
//         category: "Urban Explorations",
//         when: "Sunset",
//       },
//       {
//         name: "Al-Quway'iyah",
//         location: "Al Riyadh",
//         category: "Cultural Immersions",
//         when: "Day",
//       },
//       {
//         name: "Al-Uyun",
//         location: "Al Sharqiyah",
//         category: "Urban Explorations",
//         when: "Day",
//       },
//       {
//         name: "Badanah",
//         location: "Makkah",
//         category: "Cultural Immersions",
//         when: "Day",
//       },
//       {
//         name: "Baljurashi",
//         location: "Al Bahah",
//         category: "Cultural Immersions",
//         when: "Day",
//       },
//       {
//         name: "Dawadmi",
//         location: "Al Riyadh",
//         category: "Urban Explorations",
//         when: "Day",
//       },
//       {
//         name: "Dhee Ayn Village",
//         location: "Al Bahah",
//         category: "Historical Tours",
//         when: "Day",
//       },
//       {
//         name: "Diriyah",
//         location: "Al Riyadh",
//         category: "Historical Tours",
//         when: "Day",
//       },
//       {
//         name: "Farasan Islands",
//         location: "Jizan",
//         category: "Dolphin Watching - Red Sea",
//         when: "Sunrise",
//       },
//       {
//         name: "Habala",
//         location: "Asir",
//         category: "Mountain Climbing",
//         when: "Sunrise",
//       },
//       {
//         name: "Haql",
//         location: "Tabuk",
//         category: "Diving Expeditions - Red Sea",
//         when: "Sunset",
//       },
//       {
//         name: "Jazan City",
//         location: "Jizan",
//         category: "Urban Explorations",
//         when: "Sunset",
//       },
//       {
//         name: "Jubbah",
//         location: "Ha'il",
//         category: "Historical Tours",
//         when: "Day",
//       },
//       {
//         name: "Muhayil",
//         location: "Asir",
//         category: "Cultural Immersions",
//         when: "Day",
//       },
//       {
//         name: "Qurayyat",
//         location: "Al Jawf",
//         category: "Urban Explorations",
//         when: "Day",
//       },
//       {
//         name: "Raghbah",
//         location: "Al Riyadh",
//         category: "Cultural Immersions",
//         when: "Day",
//       },
//       {
//         name: "Rijal Almaa",
//         location: "Asir",
//         category: "Historical Tours",
//         when: "Day",
//       },
//       {
//         name: "Sakaka",
//         location: "Al Jawf",
//         category: "Urban Explorations",
//         when: "Day",
//       },
//       {
//         name: "Shaqraa",
//         location: "Al Riyadh",
//         category: "Urban Explorations",
//         when: "Day",
//       },
//       {
//         name: "Shuqaiq",
//         location: "Jizan",
//         category: "Diving Expeditions - Red Sea",
//         when: "Sunset",
//       },
//       {
//         name: "Tarout Island",
//         location: "Al Sharqiyah",
//         category: "Dolphin Watching - Red Sea",
//         when: "Sunrise",
//       },
//       {
//         name: "Tayma",
//         location: "Tabuk",
//         category: "Historical Tours",
//         when: "Day",
//       },
//       {
//         name: "Thadiq",
//         location: "Al Riyadh",
//         category: "Urban Explorations",
//         when: "Day",
//       },
//       {
//         name: "Tumair",
//         location: "Al Riyadh",
//         category: "Urban Explorations",
//         when: "Day",
//       },
//       {
//         name: "Uqair",
//         location: "Al Sharqiyah",
//         category: "Diving Expeditions - Red Sea",
//         when: "Sunset",
//       },
//       {
//         name: "Ushaiqer",
//         location: "Al Riyadh",
//         category: "Historical Tours",
//         when: "Day",
//       },
//     ];

//     this.moodToCategory = {
//       Adrenaline: "Mountain Climbing",
//       "Camel Trekking": "Exploration",
//       "Cultural Immersions": "Cultural Immersions",
//       "Desert Adventures": "Exploration",
//       "Diving Expeditions - Red Sea": "Diving Expeditions - Red Sea",
//       "Dolphin Watching - Red Sea": "Dolphin Watching - Red Sea",
//       "Historical Tours": "Historical Tours",
//       "Hot Air Ballooning": "Exploration",
//       "Mountain Climbing": "Mountain Climbing",
//       "Off-Roading": "Exploration",
//       Sandboarding: "Exploration",
//       "Stargazing Tours": "Chill",
//       "Traditional Cuisine Tours": "Culture",
//       Trips: "Exploration",
//       "Urban Explorations": "Urban Explorations",
//       "Wildlife Safaris": "Wildlife Safaris",
//     };

//     this.categoryDurations = {
//       "Mountain Climbing": 3,
//       Exploration: 2,
//       "Cultural Immersions": 2,
//       "Diving Expeditions - Red Sea": 2,
//       "Dolphin Watching - Red Sea": 1,
//       "Historical Tours": 2,
//       Chill: 2,
//       Culture: 3,
//       "Wildlife Safaris": 2,
//     };

//     this.timeConversion = {
//       "2h": 2,
//       "4h": 4,
//       "half day": 6,
//       "full day": 9,
//     };

//     this.populateCoordinates();
//   }

//   async populateCoordinates() {
//     for (const attraction of this.attractions) {
//       const address = `${attraction.name}, ${attraction.location}`;
//       try {
//         const geocodeResult = await this.gmaps.geocode({
//           params: { address, key: this.gmaps.params.key },
//         });
//         if (geocodeResult.data.results.length > 0) {
//           const location = geocodeResult.data.results[0].geometry.location;
//           attraction.latitude = location.lat;
//           attraction.longitude = location.lng;
//         } else {
//           attraction.latitude = null;
//           attraction.longitude = null;
//         }
//       } catch (error) {
//         console.error(`Error fetching coordinates for ${address}: ${error}`);
//         attraction.latitude = null;
//         attraction.longitude = null;
//       }
//     }
//   }

//   async getDistance(origin, destination) {
//     const originCoords = [origin.latitude, origin.longitude];
//     const destinationCoords = [destination.latitude, destination.longitude];
//     if (originCoords.includes(null) || destinationCoords.includes(null)) {
//       return null;
//     }
//     try {
//       const distanceResult = await this.gmaps.distanceMatrix({
//         params: {
//           origins: [originCoords],
//           destinations: [destinationCoords],
//           key: this.gmaps.params.key,
//         },
//       });
//       const status = distanceResult.data.rows[0].elements[0].status;
//       if (status === "OK") {
//         return distanceResult.data.rows[0].elements[0].distance.value;
//       } else {
//         return null;
//       }
//     } catch (error) {
//       console.error(`Error getting distance: ${error}`);
//       return null;
//     }
//   }

//   async recommendAttractions(mood, tripDuration, location, when) {
//     const category = this.moodToCategory[mood];

//     const totalTimeAvailable = this.timeConversion[tripDuration];
//     if (!category || !totalTimeAvailable) {
//       console.log("Invalid mood or time duration.");
//       return [];
//     }

//     const possibleMatches = this.attractions.filter(
//       (attraction) =>
//         attraction.category === category &&
//         attraction.location === location &&
//         attraction.when.toLowerCase() === when.toLowerCase()
//     );

//     if (possibleMatches.length === 0) {
//       console.log("No attractions match the given mood, location, and time.");
//       return [];
//     }

//     // Sort the attractions randomly
//     possibleMatches.sort(() => Math.random() - 0.5);

//     const recommendedTour = [];
//     let remainingTime = totalTimeAvailable;

//     for (const attraction of possibleMatches) {
//       if (remainingTime <= 0) break;

//       const category = attraction.category || "";
//       const duration = this.categoryDurations[category] || 0;

//       if (remainingTime >= duration) {
//         recommendedTour.push({ name: attraction.name, duration });
//         remainingTime -= duration;
//       }
//     }

//     // Ensure the duration is met
//     while (remainingTime > 0 && possibleMatches.length > 0) {
//       const nextAttraction = possibleMatches.shift(); // Get the next available attraction

//       const nextCategory = nextAttraction.category || "";
//       const nextDuration = this.categoryDurations[nextCategory] || 0;

//       if (remainingTime >= nextDuration) {
//         recommendedTour.push({
//           name: nextAttraction.name,
//           duration: nextDuration,
//         });
//         remainingTime -= nextDuration;
//       } else {
//         break; // Break if no more time is available for a new attraction
//       }
//     }

//     return recommendedTour;
//   }
// }

// const rl = readline.createInterface({
//   input: process.stdin,
//   output: process.stdout,
// });

// function getUserPreference() {
//   return new Promise((resolve) => {
//     const moods = [
//       "Adrenaline",
//       "Camel Trekking",
//       "Cultural Immersions",
//       "Desert Adventures",
//       "Diving Expeditions - Red Sea",
//       "Dolphin Watching - Red Sea",
//       "Historical Tours",
//       "Hot Air Ballooning",
//       "Mountain Climbing",
//       "Off-Roading",
//       "Sandboarding",
//       "Stargazing Tours",
//       "Traditional Cuisine Tours",
//       "Trips",
//       "Urban Explorations",
//       "Wildlife Safaris",
//     ];
//     const locations = [
//       "Al Riyadh",
//       "Tabuk",
//       "Al Sharqiyah",
//       "Makkah",
//       "Asir",
//       "Al Madinah",
//       "Jizan",
//       "Al Bahah",
//       "Ha'il",
//       "Al Jawf",
//       "Najran",
//       "Qasim",
//     ];
//     const whenOptions = ["Day", "Late Night", "Sunrise", "Sunset"];
//     const timeOptions = ["2h", "4h", "half day", "full day"];

//     const promptUser = (question) => {
//       return new Promise((resolve) =>
//         rl.question(question, (answer) => resolve(answer.trim()))
//       );
//     };

//     (async () => {
//       console.log("Available Moods: ", moods.join(", "));
//       let mood;
//       do {
//         mood = await promptUser("What mood are you in? ");
//         if (!moods.includes(mood))
//           console.log("Invalid mood. Please choose from the available moods.");
//       } while (!moods.includes(mood));

//       console.log("Available Locations: ", locations.join(", "));
//       let location;
//       do {
//         location = await promptUser("Where are you? ");
//         if (!locations.includes(location))
//           console.log(
//             "Invalid location. Please choose from the available locations."
//           );
//       } while (!locations.includes(location));

//       console.log("Available When Options: ", whenOptions.join(", "));
//       let when;
//       do {
//         when = (await promptUser("When do you plan to go? ")).toLowerCase();
//         when = when.charAt(0).toUpperCase() + when.slice(1);
//         if (!whenOptions.includes(when))
//           console.log(
//             "Invalid time option. Please choose from the available options."
//           );
//       } while (!whenOptions.includes(when));

//       console.log("Available Time Options: ", timeOptions.join(", "));
//       let tripDuration;
//       do {
//         tripDuration = await promptUser("How much time do you have? ");
//         if (!timeOptions.includes(tripDuration))
//           console.log(
//             "Invalid time option. Please choose from the available options."
//           );
//       } while (!timeOptions.includes(tripDuration));

//       rl.close();
//       resolve({ mood, tripDuration, location, when });
//     })();
//   });
// }

// async function main() {
//   const apiKey = "AIzaSyBks-gFEmIsCVp68MMtX2JYwJrv6znoW8Q"; // Replace with your actual API key
//   const planner = new TripPlanner(apiKey);

//   const { mood, tripDuration, location, when } = await getUserPreference();
//   const recommendedTour = await planner.recommendAttractions(
//     mood,
//     tripDuration,
//     location,
//     when
//   );

//   if (recommendedTour.length > 0) {
//     console.log("Recommended Tour:");
//     recommendedTour.forEach((attraction, index) => {
//       if (index === 0) {
//         console.log(
//           `Spend ${attraction.duration} hour${
//             attraction.duration > 1 ? "s" : ""
//           } at ${attraction.name}`
//         );
//       } else {
//         console.log(
//           `Then go to ${attraction.name} and spend ${attraction.duration} hour${
//             attraction.duration > 1 ? "s" : ""
//           } there`
//         );
//       }
//     });
//   } else {
//     console.log("No recommendations available.");
//   }
// }

// main();

// const { Client } = require("@googlemaps/google-maps-services-js");
// const readline = require("readline");

// class TripPlanner {
//   constructor(apiKey) {
//     this.gmaps = new Client({ params: { key: apiKey } });
//     this.attractions = [
//       {
//         name: "Al Ahsa Oasis",
//         location: "Al Riyadh",
//         category: "Cultural Immersions",
//         when: "Sunrise",
//       },
//       {
//         name: "Al Bid'",
//         location: "Tabuk",
//         category: "Historical Tours",
//         when: "Day",
//       },
//       {
//         name: "Al Khobar",
//         location: "Al Sharqiyah",
//         category: "Urban Explorations",
//         when: "Sunset",
//       },
//       {
//         name: "Al Lith",
//         location: "Makkah",
//         category: "Diving Expeditions - Red Sea",
//         when: "Sunset",
//       },
//       {
//         name: "Al Majma'ah",
//         location: "Al Riyadh",
//         category: "Historical Tours",
//         when: "Day",
//       },
//       {
//         name: "Al Namas",
//         location: "Asir",
//         category: "Wildlife Safaris",
//         when: "Sunrise",
//       },
//       {
//         name: "Al Ula Old Town",
//         location: "Al Madinah",
//         category: "Historical Tours",
//         when: "Day",
//       },
//       {
//         name: "Al-Aridah",
//         location: "Jizan",
//         category: "Urban Explorations",
//         when: "Day",
//       },
//       {
//         name: "Al-Awamiyah",
//         location: "Al Sharqiyah",
//         category: "Urban Explorations",
//         when: "Day",
//       },
//       {
//         name: "Al-Fara'ah",
//         location: "Asir",
//         category: "Cultural Immersions",
//         when: "Day",
//       },
//       {
//         name: "Al-Kharj",
//         location: "Al Riyadh",
//         category: "Urban Explorations",
//         when: "Sunset",
//       },
//       {
//         name: "Al-Muzahmiyya",
//         location: "Al Riyadh",
//         category: "Cultural Immersions",
//         when: "Day",
//       },
//       {
//         name: "Al-Qatif",
//         location: "Al Sharqiyah",
//         category: "Urban Explorations",
//         when: "Sunset",
//       },
//       {
//         name: "Al-Quway'iyah",
//         location: "Al Riyadh",
//         category: "Cultural Immersions",
//         when: "Day",
//       },
//       {
//         name: "Al-Uyun",
//         location: "Al Sharqiyah",
//         category: "Urban Explorations",
//         when: "Day",
//       },
//       {
//         name: "Badanah",
//         location: "Makkah",
//         category: "Cultural Immersions",
//         when: "Day",
//       },
//       {
//         name: "Baljurashi",
//         location: "Al Bahah",
//         category: "Cultural Immersions",
//         when: "Day",
//       },
//       {
//         name: "Dawadmi",
//         location: "Al Riyadh",
//         category: "Urban Explorations",
//         when: "Day",
//       },
//       {
//         name: "Dhee Ayn Village",
//         location: "Al Bahah",
//         category: "Historical Tours",
//         when: "Day",
//       },
//       {
//         name: "Diriyah",
//         location: "Al Riyadh",
//         category: "Historical Tours",
//         when: "Day",
//       },
//       {
//         name: "Farasan Islands",
//         location: "Jizan",
//         category: "Dolphin Watching - Red Sea",
//         when: "Sunrise",
//       },
//       {
//         name: "Habala",
//         location: "Asir",
//         category: "Mountain Climbing",
//         when: "Sunrise",
//       },
//       {
//         name: "Haql",
//         location: "Tabuk",
//         category: "Diving Expeditions - Red Sea",
//         when: "Sunset",
//       },
//       {
//         name: "Jazan City",
//         location: "Jizan",
//         category: "Urban Explorations",
//         when: "Sunset",
//       },
//       {
//         name: "Jubbah",
//         location: "Ha'il",
//         category: "Historical Tours",
//         when: "Day",
//       },
//       {
//         name: "Muhayil",
//         location: "Asir",
//         category: "Cultural Immersions",
//         when: "Day",
//       },
//       {
//         name: "Qurayyat",
//         location: "Al Jawf",
//         category: "Urban Explorations",
//         when: "Day",
//       },
//       {
//         name: "Raghbah",
//         location: "Al Riyadh",
//         category: "Cultural Immersions",
//         when: "Day",
//       },
//       {
//         name: "Rijal Almaa",
//         location: "Asir",
//         category: "Historical Tours",
//         when: "Day",
//       },
//       {
//         name: "Sakaka",
//         location: "Al Jawf",
//         category: "Urban Explorations",
//         when: "Day",
//       },
//       {
//         name: "Shaqraa",
//         location: "Al Riyadh",
//         category: "Urban Explorations",
//         when: "Day",
//       },
//       {
//         name: "Shuqaiq",
//         location: "Jizan",
//         category: "Diving Expeditions - Red Sea",
//         when: "Sunset",
//       },
//       {
//         name: "Tarout Island",
//         location: "Al Sharqiyah",
//         category: "Dolphin Watching - Red Sea",
//         when: "Sunrise",
//       },
//       {
//         name: "Tayma",
//         location: "Tabuk",
//         category: "Historical Tours",
//         when: "Day",
//       },
//       {
//         name: "Thadiq",
//         location: "Al Riyadh",
//         category: "Urban Explorations",
//         when: "Day",
//       },
//       {
//         name: "Tumair",
//         location: "Al Riyadh",
//         category: "Urban Explorations",
//         when: "Day",
//       },
//       {
//         name: "Uqair",
//         location: "Al Sharqiyah",
//         category: "Diving Expeditions - Red Sea",
//         when: "Sunset",
//       },
//       {
//         name: "Ushaiqer",
//         location: "Al Riyadh",
//         category: "Historical Tours",
//         when: "Day",
//       },
//     ];

//     this.moodToCategory = {
//       Adrenaline: "Mountain Climbing",
//       "Camel Trekking": "Exploration",
//       "Cultural Immersions": "Cultural Immersions",
//       "Desert Adventures": "Exploration",
//       "Diving Expeditions - Red Sea": "Diving Expeditions - Red Sea",
//       "Dolphin Watching - Red Sea": "Dolphin Watching - Red Sea",
//       "Historical Tours": "Historical Tours",
//       "Hot Air Ballooning": "Exploration",
//       "Mountain Climbing": "Mountain Climbing",
//       "Off-Roading": "Exploration",
//       Sandboarding: "Exploration",
//       "Stargazing Tours": "Chill",
//       "Traditional Cuisine Tours": "Culture",
//       Trips: "Exploration",
//       "Urban Explorations": "Urban Explorations",
//       "Wildlife Safaris": "Wildlife Safaris",
//     };

//     this.categoryDurations = {
//       "Mountain Climbing": 3,
//       Exploration: 2,
//       "Cultural Immersions": 2,
//       "Diving Expeditions - Red Sea": 2,
//       "Dolphin Watching - Red Sea": 1,
//       "Historical Tours": 2,
//       Chill: 2,
//       Culture: 3,
//       "Wildlife Safaris": 2,
//     };

//     this.timeConversion = {
//       "2h": 2,
//       "4h": 4,
//       "half day": 6,
//       "full day": 9,
//     };

//     this.populateCoordinates();
//   }

//   async populateCoordinates() {
//     for (const attraction of this.attractions) {
//       const address = `${attraction.name}, ${attraction.location}`;
//       try {
//         const geocodeResult = await this.gmaps.geocode({
//           params: { address, key: this.gmaps.params.key },
//         });
//         if (geocodeResult.data.results.length > 0) {
//           const location = geocodeResult.data.results[0].geometry.location;
//           attraction.latitude = location.lat;
//           attraction.longitude = location.lng;
//         } else {
//           attraction.latitude = null;
//           attraction.longitude = null;
//         }
//       } catch (error) {
//         console.error(`Error fetching coordinates for ${address}: ${error}`);
//         attraction.latitude = null;
//         attraction.longitude = null;
//       }
//     }
//   }

//   async getDistance(origin, destination) {
//     const originCoords = [origin.latitude, origin.longitude];
//     const destinationCoords = [destination.latitude, destination.longitude];
//     if (originCoords.includes(null) || destinationCoords.includes(null)) {
//       return null;
//     }
//     try {
//       const distanceResult = await this.gmaps.distanceMatrix({
//         params: {
//           origins: [originCoords],
//           destinations: [destinationCoords],
//           key: this.gmaps.params.key,
//         },
//       });
//       const status = distanceResult.data.rows[0].elements[0].status;
//       if (status === "OK") {
//         return distanceResult.data.rows[0].elements[0].distance.value;
//       } else {
//         return null;
//       }
//     } catch (error) {
//       console.error(`Error getting distance: ${error}`);
//       return null;
//     }
//   }

//   async recommendAttractions(mood, tripDuration, location, when) {
//     const category = this.moodToCategory[mood];

//     const totalTimeAvailable =
//       this.timeConversion[tripDuration.toLowerCase()] || 0;

//     if (!category) {
//       console.log("No matching category for the mood.");
//       return [];
//     }

//     const possibleMatches = this.attractions.filter(
//       (attraction) =>
//         attraction.category === category &&
//         attraction.location === location &&
//         attraction.when.toLowerCase() === when.toLowerCase()
//     );

//     if (possibleMatches.length === 0) {
//       console.log("No attractions match the given mood, location, and time.");
//       return [];
//     }

//     // Sort the attractions randomly
//     possibleMatches.sort(() => Math.random() - 0.5);

//     const recommendedTour = [];
//     let remainingTime = totalTimeAvailable;

//     for (const attraction of possibleMatches) {
//       if (remainingTime <= 0) break;

//       const category = attraction.category || "";
//       const duration = this.categoryDurations[category] || 0;

//       if (remainingTime >= duration) {
//         recommendedTour.push({ name: attraction.name, duration });
//         remainingTime -= duration;
//       }
//     }

//     return recommendedTour;
//   }
// }

// const rl = readline.createInterface({
//   input: process.stdin,
//   output: process.stdout,
// });

// function getUserPreference() {
//   return new Promise((resolve) => {
//     const moods = [
//       "Adrenaline",
//       "Camel Trekking",
//       "Cultural Immersions",
//       "Desert Adventures",
//       "Diving Expeditions - Red Sea",
//       "Dolphin Watching - Red Sea",
//       "Historical Tours",
//       "Hot Air Ballooning",
//       "Mountain Climbing",
//       "Off-Roading",
//       "Sandboarding",
//       "Stargazing Tours",
//       "Traditional Cuisine Tours",
//       "Trips",
//       "Urban Explorations",
//       "Wildlife Safaris",
//     ];
//     const locations = [
//       "Al Riyadh",
//       "Tabuk",
//       "Al Sharqiyah",
//       "Makkah",
//       "Asir",
//       "Al Madinah",
//       "Jizan",
//       "Al Bahah",
//       "Ha'il",
//       "Al Jawf",
//       "Najran",
//       "Qasim",
//     ];
//     const whenOptions = ["Day", "Late Night", "Sunrise", "Sunset"];
//     const timeOptions = ["2h", "4h", "half day", "full day"];

//     const promptUser = (question) => {
//       return new Promise((resolve) =>
//         rl.question(question, (answer) => resolve(answer.trim()))
//       );
//     };

//     (async () => {
//       console.log("Available Moods: ", moods.join(", "));
//       let mood;
//       do {
//         mood = await promptUser("What mood are you in? ");
//         if (!moods.includes(mood))
//           console.log("Invalid mood. Please choose from the available moods.");
//       } while (!moods.includes(mood));

//       console.log("Available Locations: ", locations.join(", "));
//       let location;
//       do {
//         location = await promptUser("Where are you? ");
//         if (!locations.includes(location))
//           console.log(
//             "Invalid location. Please choose from the available locations."
//           );
//       } while (!locations.includes(location));

//       console.log("Available When Options: ", whenOptions.join(", "));
//       let when;
//       do {
//         when = (await promptUser("When do you plan to go? ")).toLowerCase();
//         when = when.charAt(0).toUpperCase() + when.slice(1);
//         if (!whenOptions.includes(when))
//           console.log(
//             "Invalid time option. Please choose from the available options."
//           );
//       } while (!whenOptions.includes(when));

//       console.log("Available Time Options: ", timeOptions.join(", "));
//       let tripDuration;
//       do {
//         tripDuration = await promptUser("How much time do you have? ");
//         if (!timeOptions.includes(tripDuration))
//           console.log(
//             "Invalid time option. Please choose from the available options."
//           );
//       } while (!timeOptions.includes(tripDuration));

//       rl.close();
//       resolve({ mood, tripDuration, location, when });
//     })();
//   });
// }

// async function main() {
//   const apiKey = "AIzaSyBks-gFEmIsCVp68MMtX2JYwJrv6znoW8Q"; // Replace with your actual API key
//   const planner = new TripPlanner(apiKey);

//   const { mood, tripDuration, location, when } = await getUserPreference();
//   const recommendedTour = await planner.recommendAttractions(
//     mood,
//     tripDuration,
//     location,
//     when
//   );

//   if (recommendedTour.length > 0) {
//     console.log("Recommended Tour:");
//     recommendedTour.forEach((attraction, index) => {
//       if (index === 0) {
//         console.log(
//           `Spend ${attraction.duration} hour${
//             attraction.duration > 1 ? "s" : ""
//           } at ${attraction.name}`
//         );
//       } else {
//         console.log(
//           `Then go to ${attraction.name} and spend ${attraction.duration} hour${
//             attraction.duration > 1 ? "s" : ""
//           } there`
//         );
//       }
//     });
//   } else {
//     console.log("No recommendations available.");
//   }
// }

// main();

// const { Client } = require("@googlemaps/google-maps-services-js");
// const client = new Client({});

// class TripPlanner {
//   constructor(apiKey) {
//     this.gmaps = client;
//     this.apiKey = apiKey;
//     this.attractions = [
//       {
//         name: "Al Ahsa Oasis",
//         location: "Al Riyadh",
//         category: "Cultural Immersions",
//         when: "Sunrise",
//       },
//       {
//         name: "Al Bid'",
//         location: "Tabuk",
//         category: "Historical Tours",
//         when: "Day",
//       },
//       {
//         name: "Al Khobar",
//         location: "Al Sharqiyah",
//         category: "Urban Explorations",
//         when: "Sunset",
//       },
//       {
//         name: "Al Lith",
//         location: "Makkah",
//         category: "Diving Expeditions - Red Sea",
//         when: "Sunset",
//       },
//       {
//         name: "Al Majma'ah",
//         location: "Al Riyadh",
//         category: "Historical Tours",
//         when: "Day",
//       },
//       {
//         name: "Al Namas",
//         location: "Asir",
//         category: "Wildlife Safaris",
//         when: "Sunrise",
//       },
//       {
//         name: "Al Ula Old Town",
//         location: "Al Madinah",
//         category: "Historical Tours",
//         when: "Day",
//       },
//       {
//         name: "Al-Aridah",
//         location: "Jizan",
//         category: "Urban Explorations",
//         when: "Day",
//       },
//       {
//         name: "Al-Awamiyah",
//         location: "Al Sharqiyah",
//         category: "Urban Explorations",
//         when: "Day",
//       },
//       {
//         name: "Al-Fara'ah",
//         location: "Asir",
//         category: "Cultural Immersions",
//         when: "Day",
//       },
//       {
//         name: "Al-Kharj",
//         location: "Al Riyadh",
//         category: "Urban Explorations",
//         when: "Sunset",
//       },
//       {
//         name: "Al-Muzahmiyya",
//         location: "Al Riyadh",
//         category: "Cultural Immersions",
//         when: "Day",
//       },
//       {
//         name: "Al-Qatif",
//         location: "Al Sharqiyah",
//         category: "Urban Explorations",
//         when: "Sunset",
//       },
//       {
//         name: "Al-Quway'iyah",
//         location: "Al Riyadh",
//         category: "Cultural Immersions",
//         when: "Day",
//       },
//       {
//         name: "Al-Uyun",
//         location: "Al Sharqiyah",
//         category: "Urban Explorations",
//         when: "Day",
//       },
//       {
//         name: "Badanah",
//         location: "Makkah",
//         category: "Cultural Immersions",
//         when: "Day",
//       },
//       {
//         name: "Baljurashi",
//         location: "Al Bahah",
//         category: "Cultural Immersions",
//         when: "Day",
//       },
//       {
//         name: "Dawadmi",
//         location: "Al Riyadh",
//         category: "Urban Explorations",
//         when: "Day",
//       },
//       {
//         name: "Dhee Ayn Village",
//         location: "Al Bahah",
//         category: "Historical Tours",
//         when: "Day",
//       },
//       {
//         name: "Diriyah",
//         location: "Al Riyadh",
//         category: "Historical Tours",
//         when: "Day",
//       },
//       {
//         name: "Farasan Islands",
//         location: "Jizan",
//         category: "Dolphin Watching - Red Sea",
//         when: "Sunrise",
//       },
//       {
//         name: "Habala",
//         location: "Asir",
//         category: "Mountain Climbing",
//         when: "Sunrise",
//       },
//       {
//         name: "Haql",
//         location: "Tabuk",
//         category: "Diving Expeditions - Red Sea",
//         when: "Sunset",
//       },
//       {
//         name: "Jazan City",
//         location: "Jizan",
//         category: "Urban Explorations",
//         when: "Sunset",
//       },
//       {
//         name: "Jubbah",
//         location: "Ha'il",
//         category: "Historical Tours",
//         when: "Day",
//       },
//       {
//         name: "Muhayil",
//         location: "Asir",
//         category: "Cultural Immersions",
//         when: "Day",
//       },
//       {
//         name: "Qurayyat",
//         location: "Al Jawf",
//         category: "Urban Explorations",
//         when: "Day",
//       },
//       {
//         name: "Raghbah",
//         location: "Al Riyadh",
//         category: "Cultural Immersions",
//         when: "Day",
//       },
//       {
//         name: "Rijal Almaa",
//         location: "Asir",
//         category: "Historical Tours",
//         when: "Day",
//       },
//       {
//         name: "Sakaka",
//         location: "Al Jawf",
//         category: "Urban Explorations",
//         when: "Day",
//       },
//       {
//         name: "Shaqraa",
//         location: "Al Riyadh",
//         category: "Urban Explorations",
//         when: "Day",
//       },
//       {
//         name: "Shuqaiq",
//         location: "Jizan",
//         category: "Diving Expeditions - Red Sea",
//         when: "Sunset",
//       },
//       {
//         name: "Tarout Island",
//         location: "Al Sharqiyah",
//         category: "Dolphin Watching - Red Sea",
//         when: "Sunrise",
//       },
//       {
//         name: "Tayma",
//         location: "Tabuk",
//         category: "Historical Tours",
//         when: "Day",
//       },
//       {
//         name: "Thadiq",
//         location: "Al Riyadh",
//         category: "Urban Explorations",
//         when: "Day",
//       },
//       {
//         name: "Tumair",
//         location: "Al Riyadh",
//         category: "Urban Explorations",
//         when: "Day",
//       },
//       {
//         name: "Uqair",
//         location: "Al Sharqiyah",
//         category: "Diving Expeditions - Red Sea",
//         when: "Sunset",
//       },
//       {
//         name: "Ushaiqer",
//         location: "Al Riyadh",
//         category: "Historical Tours",
//         when: "Day",
//       },
//     ];

//     this.moodToCategory = {
//       Adrenaline: "Mountain Climbing",
//       "Camel Trekking": "Exploration",
//       "Cultural Immersions": "Cultural Immersions",
//       "Desert Adventures": "Exploration",
//       "Diving Expeditions - Red Sea": "Diving Expeditions - Red Sea",
//       "Dolphin Watching - Red Sea": "Dolphin Watching - Red Sea",
//       "Historical Tours": "Historical Tours",
//       "Hot Air Ballooning": "Exploration",
//       "Mountain Climbing": "Mountain Climbing",
//       "Off-Roading": "Exploration",
//       Sandboarding: "Exploration",
//       "Stargazing Tours": "Chill",
//       "Traditional Cuisine Tours": "Culture",
//       Trips: "Exploration",
//       "Urban Explorations": "Urban Explorations",
//       "Wildlife Safaris": "Wildlife Safaris",
//     };

//     this.populateCoordinates();
//   }

//   async populateCoordinates() {
//     for (const attraction of this.attractions) {
//       const address = `${attraction.name}, ${attraction.location}`;
//       try {
//         const geocodeResult = await this.gmaps.geocode({
//           params: {
//             address: address,
//             key: this.apiKey,
//           },
//         });

//         if (geocodeResult.data.results.length > 0) {
//           const location = geocodeResult.data.results[0].geometry.location;
//           attraction.latitude = location.lat;
//           attraction.longitude = location.lng;
//         } else {
//           attraction.latitude = null;
//           attraction.longitude = null;
//         }
//       } catch (error) {
//         console.error(`Error getting coordinates for ${address}: ${error}`);
//         attraction.latitude = null;
//         attraction.longitude = null;
//       }
//     }
//   }

//   async getDistance(origin, destination) {
//     const originCoords = [origin.latitude, origin.longitude];
//     const destinationCoords = [destination.latitude, destination.longitude];

//     if (originCoords.includes(null) || destinationCoords.includes(null)) {
//       return null;
//     }

//     try {
//       const distanceResult = await this.gmaps.distanceMatrix({
//         params: {
//           origins: [originCoords],
//           destinations: [destinationCoords],
//           key: this.apiKey,
//         },
//       });

//       if (distanceResult.data.rows[0].elements[0].status === "OK") {
//         const distance =
//           distanceResult.data.rows[0].elements[0].distance?.value;
//         return distance;
//       } else {
//         return null;
//       }
//     } catch (error) {
//       console.error(`Error getting distance: ${error}`);
//       return null;
//     }
//   }

//   async recommendAttractions(mood, tripDuration, location, when) {
//     const category = this.moodToCategory[mood];

//     const categoryDurations = {
//       "Mountain Climbing": 3,
//       Exploration: 2,
//       "Cultural Immersions": 2,
//       "Diving Expeditions - Red Sea": 2,
//       "Dolphin Watching - Red Sea": 1,
//       "Historical Tours": 2,
//       Chill: 2,
//       Culture: 3,
//       "Wildlife Safaris": 2,
//     };

//     const timeConversion = {
//       "2h": 2,
//       "4h": 4,
//       "half day": 6,
//       "full day": 9,
//     };

//     const totalTimeAvailable = timeConversion[tripDuration.toLowerCase()] || 0;

//     const possibleMatches = this.attractions.filter(
//       (attraction) =>
//         attraction.category === category &&
//         attraction.location === location &&
//         attraction.when === when
//     );

//     if (possibleMatches.length === 0) {
//       console.log("No exact match found. Please adjust your preferences.");
//       return [];
//     }

//     const exactMatch =
//       possibleMatches[Math.floor(Math.random() * possibleMatches.length)];
//     const exactMatchDuration = categoryDurations[category] || 0;
//     let remainingTime = totalTimeAvailable - exactMatchDuration;

//     const attractionsInLocation = this.attractions.filter(
//       (attraction) =>
//         attraction !== exactMatch && attraction.location === location
//     );

//     attractionsInLocation.sort(() => Math.random() - 0.5);

//     const distancesToOtherAttractions = await Promise.all(
//       attractionsInLocation.map(async (attraction) => {
//         const distance = await this.getDistance(exactMatch, attraction);
//         return { attraction, distance };
//       })
//     );

//     const validDistances = distancesToOtherAttractions.filter(
//       ({ distance }) => distance !== null
//     );
//     validDistances.sort((a, b) => a.distance - b.distance);

//     const recommendedTour = [(exactMatch.name, exactMatchDuration)];

//     for (const { attraction, distance } of validDistances) {
//       const category = attraction.category || "";
//       const duration = categoryDurations[category] || 0;

//       if (remainingTime >= duration) {
//         recommendedTour.push([attraction.name, duration]);
//         remainingTime -= duration;
//       }

//       if (remainingTime <= 0) break;
//     }

//     return recommendedTour;
//   }
// }

// // Helper function to get user preferences
// async function getUserPreference() {
//   const moods = [
//     "Adrenaline",
//     "Camel Trekking",
//     "Cultural Immersions",
//     "Desert Adventures",
//     "Diving Expeditions - Red Sea",
//     "Dolphin Watching - Red Sea",
//     "Historical Tours",
//     "Hot Air Ballooning",
//     "Mountain Climbing",
//     "Off-Roading",
//     "Sandboarding",
//     "Stargazing Tours",
//     "Traditional Cuisine Tours",
//     "Trips",
//     "Urban Explorations",
//     "Wildlife Safaris",
//   ];
//   const locations = [
//     "Al Riyadh",
//     "Tabuk",
//     "Al Sharqiyah",
//     "Makkah",
//     "Asir",
//     "Al Madinah",
//     "Jizan",
//     "Al Bahah",
//     "Ha'il",
//     "Al Jawf",
//     "Najran",
//     "Qasim",
//   ];
//   const whenOptions = ["Day", "Late Night", "Sunrise", "Sunset"];
//   const timeOptions = ["2h", "4h", "half day", "full day"];

//   // Here you can use your preferred method of getting input from the user, e.g., prompt in Node.js
//   const prompt = require("prompt-sync")();
//   console.log("Available Moods: ", moods.join(", "));
//   let mood = prompt("What mood are you in? ").trim();

//   while (!moods.includes(mood)) {
//     console.log("Invalid mood. Please choose from the available moods.");
//     mood = prompt("What mood are you in? ").trim();
//   }

//   console.log("Available Locations: ", locations.join(", "));
//   let location = prompt("Where are you? ").trim();

//   while (!locations.includes(location)) {
//     console.log(
//       "Invalid location. Please choose from the available locations."
//     );
//     location = prompt("Where are you? ").trim();
//   }

//   console.log("Available When Options: ", whenOptions.join(", "));
//   let when = prompt("When do you plan to go? ").trim().toLowerCase();
//   when = when.charAt(0).toUpperCase() + when.slice(1);

//   while (!whenOptions.includes(when)) {
//     console.log(
//       "Invalid time option. Please choose from the available options."
//     );
//     when = prompt("When do you plan to go? ").trim().toLowerCase();
//     when = when.charAt(0).toUpperCase() + when.slice(1);
//   }

//   console.log("Available Time Options: ", timeOptions.join(", "));
//   let tripDuration = prompt("How much time do you have? ").trim();

//   while (!timeOptions.includes(tripDuration)) {
//     console.log(
//       "Invalid time option. Please choose from the available options."
//     );
//     tripDuration = prompt("How much time do you have? ").trim();
//   }

//   return { mood, tripDuration, location, when };
// }

// // Main function
// async function main() {
//   const apiKey = "AIzaSyBks-gFEmIsCVp68MMtX2JYwJrv6znoW8Q"; // Replace with your actual API key
//   const planner = new TripPlanner(apiKey);

//   const { mood, tripDuration, location, when } = await getUserPreference();

//   const recommendedTour = await planner.recommendAttractions(
//     mood,
//     tripDuration,
//     location,
//     when
//   );

//   if (recommendedTour.length > 0) {
//     console.log("Recommended Tour:");
//     console.log(
//       `Spend ${recommendedTour[0][1]} hours at ${recommendedTour[0][0]}`
//     );
//     for (let i = 1; i < recommendedTour.length; i++) {
//       console.log(
//         `Then go to ${recommendedTour[i][0]} and spend ${
//           recommendedTour[i][1]
//         } hour${recommendedTour[i][1] > 1 ? "s" : ""} there`
//       );
//     }
//   } else {
//     console.log("No recommendations available.");
//   }
// }

// main();

// const { Client } = require("@googlemaps/google-maps-services-js");
// const readline = require("readline");

// class TripPlanner {
//   constructor(apiKey) {
//     this.gmaps = new Client({ params: { key: apiKey } });
//     this.attractions = [
//       {
//         name: "Al Ahsa Oasis",
//         location: "Al Riyadh",
//         category: "Cultural Immersions",
//         when: "Sunrise",
//       },
//       {
//         name: "Al Bid'",
//         location: "Tabuk",
//         category: "Historical Tours",
//         when: "Day",
//       },
//       {
//         name: "Al Khobar",
//         location: "Al Sharqiyah",
//         category: "Urban Explorations",
//         when: "Sunset",
//       },
//       {
//         name: "Al Lith",
//         location: "Makkah",
//         category: "Diving Expeditions - Red Sea",
//         when: "Sunset",
//       },
//       {
//         name: "Al Majma'ah",
//         location: "Al Riyadh",
//         category: "Historical Tours",
//         when: "Day",
//       },
//       {
//         name: "Al Namas",
//         location: "Asir",
//         category: "Wildlife Safaris",
//         when: "Sunrise",
//       },
//       {
//         name: "Al Ula Old Town",
//         location: "Al Madinah",
//         category: "Historical Tours",
//         when: "Day",
//       },
//       {
//         name: "Al-Aridah",
//         location: "Jizan",
//         category: "Urban Explorations",
//         when: "Day",
//       },
//       {
//         name: "Al-Awamiyah",
//         location: "Al Sharqiyah",
//         category: "Urban Explorations",
//         when: "Day",
//       },
//       {
//         name: "Al-Fara'ah",
//         location: "Asir",
//         category: "Cultural Immersions",
//         when: "Day",
//       },
//       {
//         name: "Al-Kharj",
//         location: "Al Riyadh",
//         category: "Urban Explorations",
//         when: "Sunset",
//       },
//       {
//         name: "Al-Muzahmiyya",
//         location: "Al Riyadh",
//         category: "Cultural Immersions",
//         when: "Day",
//       },
//       {
//         name: "Al-Qatif",
//         location: "Al Sharqiyah",
//         category: "Urban Explorations",
//         when: "Sunset",
//       },
//       {
//         name: "Al-Quway'iyah",
//         location: "Al Riyadh",
//         category: "Cultural Immersions",
//         when: "Day",
//       },
//       {
//         name: "Al-Uyun",
//         location: "Al Sharqiyah",
//         category: "Urban Explorations",
//         when: "Day",
//       },
//       {
//         name: "Badanah",
//         location: "Makkah",
//         category: "Cultural Immersions",
//         when: "Day",
//       },
//       {
//         name: "Baljurashi",
//         location: "Al Bahah",
//         category: "Cultural Immersions",
//         when: "Day",
//       },
//       {
//         name: "Dawadmi",
//         location: "Al Riyadh",
//         category: "Urban Explorations",
//         when: "Day",
//       },
//       {
//         name: "Dhee Ayn Village",
//         location: "Al Bahah",
//         category: "Historical Tours",
//         when: "Day",
//       },
//       {
//         name: "Diriyah",
//         location: "Al Riyadh",
//         category: "Historical Tours",
//         when: "Day",
//       },
//       {
//         name: "Farasan Islands",
//         location: "Jizan",
//         category: "Dolphin Watching - Red Sea",
//         when: "Sunrise",
//       },
//       {
//         name: "Habala",
//         location: "Asir",
//         category: "Mountain Climbing",
//         when: "Sunrise",
//       },
//       {
//         name: "Haql",
//         location: "Tabuk",
//         category: "Diving Expeditions - Red Sea",
//         when: "Sunset",
//       },
//       {
//         name: "Jazan City",
//         location: "Jizan",
//         category: "Urban Explorations",
//         when: "Sunset",
//       },
//       {
//         name: "Jubbah",
//         location: "Ha'il",
//         category: "Historical Tours",
//         when: "Day",
//       },
//       {
//         name: "Muhayil",
//         location: "Asir",
//         category: "Cultural Immersions",
//         when: "Day",
//       },
//       {
//         name: "Qurayyat",
//         location: "Al Jawf",
//         category: "Urban Explorations",
//         when: "Day",
//       },
//       {
//         name: "Raghbah",
//         location: "Al Riyadh",
//         category: "Cultural Immersions",
//         when: "Day",
//       },
//       {
//         name: "Rijal Almaa",
//         location: "Asir",
//         category: "Historical Tours",
//         when: "Day",
//       },
//       {
//         name: "Sakaka",
//         location: "Al Jawf",
//         category: "Urban Explorations",
//         when: "Day",
//       },
//       {
//         name: "Shaqraa",
//         location: "Al Riyadh",
//         category: "Urban Explorations",
//         when: "Day",
//       },
//       {
//         name: "Shuqaiq",
//         location: "Jizan",
//         category: "Diving Expeditions - Red Sea",
//         when: "Sunset",
//       },
//       {
//         name: "Tarout Island",
//         location: "Al Sharqiyah",
//         category: "Dolphin Watching - Red Sea",
//         when: "Sunrise",
//       },
//       {
//         name: "Tayma",
//         location: "Tabuk",
//         category: "Historical Tours",
//         when: "Day",
//       },
//       {
//         name: "Thadiq",
//         location: "Al Riyadh",
//         category: "Urban Explorations",
//         when: "Day",
//       },
//       {
//         name: "Tumair",
//         location: "Al Riyadh",
//         category: "Urban Explorations",
//         when: "Day",
//       },
//       {
//         name: "Uqair",
//         location: "Al Sharqiyah",
//         category: "Diving Expeditions - Red Sea",
//         when: "Sunset",
//       },
//       {
//         name: "Ushaiqer",
//         location: "Al Riyadh",
//         category: "Historical Tours",
//         when: "Day",
//       },
//     ];

//     this.moodToCategory = {
//       Adrenaline: "Mountain Climbing",
//       "Camel Trekking": "Exploration",
//       "Cultural Immersions": "Cultural Immersions",
//       "Desert Adventures": "Exploration",
//       "Diving Expeditions - Red Sea": "Diving Expeditions - Red Sea",
//       "Dolphin Watching - Red Sea": "Dolphin Watching - Red Sea",
//       "Historical Tours": "Historical Tours",
//       "Hot Air Ballooning": "Exploration",
//       "Mountain Climbing": "Mountain Climbing",
//       "Off-Roading": "Exploration",
//       Sandboarding: "Exploration",
//       "Stargazing Tours": "Chill",
//       "Traditional Cuisine Tours": "Culture",
//       Trips: "Exploration",
//       "Urban Explorations": "Urban Explorations",
//       "Wildlife Safaris": "Wildlife Safaris",
//     };

//     this.categoryDurations = {
//       "Mountain Climbing": 3,
//       Exploration: 2,
//       "Cultural Immersions": 2,
//       "Diving Expeditions - Red Sea": 2,
//       "Dolphin Watching - Red Sea": 1,
//       "Historical Tours": 2,
//       Chill: 2,
//       Culture: 3,
//       "Wildlife Safaris": 2,
//     };

//     this.timeConversion = {
//       "2h": 2,
//       "4h": 4,
//       "half day": 6,
//       "full day": 9,
//     };

//     this.populateCoordinates();
//   }

//   async populateCoordinates() {
//     for (const attraction of this.attractions) {
//       const address = `${attraction.name}, ${attraction.location}`;
//       try {
//         const geocodeResult = await this.gmaps.geocode({
//           params: { address, key: this.gmaps.params.key },
//         });
//         if (geocodeResult.data.results.length > 0) {
//           const location = geocodeResult.data.results[0].geometry.location;
//           attraction.latitude = location.lat;
//           attraction.longitude = location.lng;
//         } else {
//           attraction.latitude = null;
//           attraction.longitude = null;
//         }
//       } catch (error) {
//         console.error(`Error fetching coordinates for ${address}: ${error}`);
//         attraction.latitude = null;
//         attraction.longitude = null;
//       }
//     }
//   }

//   async getDistance(origin, destination) {
//     const originCoords = [origin.latitude, origin.longitude];
//     const destinationCoords = [destination.latitude, destination.longitude];
//     if (originCoords.includes(null) || destinationCoords.includes(null)) {
//       return null;
//     }
//     try {
//       const distanceResult = await this.gmaps.distanceMatrix({
//         params: {
//           origins: [originCoords],
//           destinations: [destinationCoords],
//           key: this.gmaps.params.key,
//         },
//       });
//       const status = distanceResult.data.rows[0].elements[0].status;
//       if (status === "OK") {
//         return distanceResult.data.rows[0].elements[0].distance.value;
//       } else {
//         return null;
//       }
//     } catch (error) {
//       console.error(`Error getting distance: ${error}`);
//       return null;
//     }
//   }

//   async recommendAttractions(mood, tripDuration, location, when) {
//     const category = this.moodToCategory[mood];

//     const totalTimeAvailable =
//       this.timeConversion[tripDuration.toLowerCase()] || 0;

//     if (!category) {
//       console.log("No matching category for the mood.");
//       return [];
//     }

//     const possibleMatches = this.attractions.filter(
//       (attraction) =>
//         attraction.category === category &&
//         attraction.location === location &&
//         attraction.when.toLowerCase() === when.toLowerCase()
//     );

//     if (possibleMatches.length === 0) {
//       console.log("No attractions match the given mood, location, and time.");
//       return [];
//     }

//     // Sort the attractions randomly
//     possibleMatches.sort(() => Math.random() - 0.5);

//     const recommendedTour = [];
//     let remainingTime = totalTimeAvailable;

//     for (const attraction of possibleMatches) {
//       if (remainingTime <= 0) break;

//       const category = attraction.category || "";
//       const duration = this.categoryDurations[category] || 0;

//       if (remainingTime >= duration) {
//         recommendedTour.push({ name: attraction.name, duration });
//         remainingTime -= duration;
//       }
//     }

//     return recommendedTour;
//   }
// }

// const rl = readline.createInterface({
//   input: process.stdin,
//   output: process.stdout,
// });

// function getUserPreference() {
//   return new Promise((resolve) => {
//     const moods = [
//       "Adrenaline",
//       "Camel Trekking",
//       "Cultural Immersions",
//       "Desert Adventures",
//       "Diving Expeditions - Red Sea",
//       "Dolphin Watching - Red Sea",
//       "Historical Tours",
//       "Hot Air Ballooning",
//       "Mountain Climbing",
//       "Off-Roading",
//       "Sandboarding",
//       "Stargazing Tours",
//       "Traditional Cuisine Tours",
//       "Trips",
//       "Urban Explorations",
//       "Wildlife Safaris",
//     ];
//     const locations = [
//       "Al Riyadh",
//       "Tabuk",
//       "Al Sharqiyah",
//       "Makkah",
//       "Asir",
//       "Al Madinah",
//       "Jizan",
//       "Al Bahah",
//       "Ha'il",
//       "Al Jawf",
//       "Najran",
//       "Qasim",
//     ];
//     const whenOptions = ["Day", "Late Night", "Sunrise", "Sunset"];
//     const timeOptions = ["2h", "4h", "half day", "full day"];

//     const promptUser = (question) => {
//       return new Promise((resolve) =>
//         rl.question(question, (answer) => resolve(answer.trim()))
//       );
//     };

//     (async () => {
//       console.log("Available Moods: ", moods.join(", "));
//       let mood;
//       do {
//         mood = await promptUser("What mood are you in? ");
//         if (!moods.includes(mood))
//           console.log("Invalid mood. Please choose from the available moods.");
//       } while (!moods.includes(mood));

//       console.log("Available Locations: ", locations.join(", "));
//       let location;
//       do {
//         location = await promptUser("Where are you? ");
//         if (!locations.includes(location))
//           console.log(
//             "Invalid location. Please choose from the available locations."
//           );
//       } while (!locations.includes(location));

//       console.log("Available When Options: ", whenOptions.join(", "));
//       let when;
//       do {
//         when = (await promptUser("When do you plan to go? ")).toLowerCase();
//         when = when.charAt(0).toUpperCase() + when.slice(1);
//         if (!whenOptions.includes(when))
//           console.log(
//             "Invalid time option. Please choose from the available options."
//           );
//       } while (!whenOptions.includes(when));

//       console.log("Available Time Options: ", timeOptions.join(", "));
//       let tripDuration;
//       do {
//         tripDuration = await promptUser("How much time do you have? ");
//         if (!timeOptions.includes(tripDuration))
//           console.log(
//             "Invalid time option. Please choose from the available options."
//           );
//       } while (!timeOptions.includes(tripDuration));

//       rl.close();
//       resolve({ mood, tripDuration, location, when });
//     })();
//   });
// }

// async function main() {
//   const apiKey = "AIzaSyBks-gFEmIsCVp68MMtX2JYwJrv6znoW8Q"; // Replace with your actual API key
//   const planner = new TripPlanner(apiKey);

//   const { mood, tripDuration, location, when } = await getUserPreference();
//   const recommendedTour = await planner.recommendAttractions(
//     mood,
//     tripDuration,
//     location,
//     when
//   );

//   if (recommendedTour.length > 0) {
//     console.log("Recommended Tour:");
//     for (let i = 0; i < recommendedTour.length; i++) {
//       console.log(
//         `Spend ${recommendedTour[i].duration} hour${
//           recommendedTour[i].duration > 1 ? "s" : ""
//         } at ${recommendedTour[i].name}`
//       );
//       if (i < recommendedTour.length - 1) {
//         console.log(`Then go to the next attraction.`);
//       }
//     }
//   } else {
//     console.log("No recommendations available.");
//   }
// }

// main();
