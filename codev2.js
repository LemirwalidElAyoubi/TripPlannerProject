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
    const totalAvailableTime = this.timeConversion[tripDuration.toLowerCase()];

    let possibleMatches = this.attractions.filter(
      (attraction) =>
        attraction.category === category &&
        attraction.location === location &&
        attraction.when.toLowerCase() === when.toLowerCase()
    );

    if (possibleMatches.length === 0) {
      console.log("No exact matches found, finding alternatives...");
      possibleMatches = this.attractions.filter(
        (attraction) =>
          attraction.location === location &&
          attraction.when.toLowerCase() === when.toLowerCase()
      );
    }

    let finalAttractions = [];
    let timeSpent = 0;

    if (possibleMatches.length > 0) {
      const bestFit = possibleMatches[0];
      finalAttractions.push(bestFit);
      timeSpent += this.categoryDurations[bestFit.category] || 2; // Default to 2 hours if not specified

      const otherAttractions = this.attractions.filter(
        (attraction) =>
          attraction.location === bestFit.location &&
          attraction.name !== bestFit.name
      );

      for (const attraction of otherAttractions) {
        if (timeSpent >= totalAvailableTime) break;
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
