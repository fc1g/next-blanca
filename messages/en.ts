import { Translation } from '@/server/types/Translation';

export default JSON.parse(`{
  "header": {
    "nav": {
      "home": "Home",
      "about": "About",
      "surrounding": "Surrounding",
      "contacts": "Contacts"
    },
    "hamburger": "Mobile menu",
    "langList": {
      "en": "English",
      "pl": "Polish",
      "es": "Spanish"
    }
  },
  "homepage": {
    "hero": {
      "title": {
        "firstPart": "We make your",
        "vacation": "vacation",
        "lastPart": "better"
      },
      "subtitle": "Feel at home, away from home",
      "moreInfo": "More info"
    },
    "testimonials": {
      "title": "Our testimonials",
      "subtitle": "Check out our testimonials from our Facebook page",
      "leaveReview": "Leave review",
      "kuba": {
        "title": "House very well maintained",
        "text": "Highly recommend, includes all the necessary things to stay with a child! Very nice and quick contact with the owners, who will help solve any possible problem.",
        "userName": "Kuba",
        "imgAltText": ""
      },
      "monika": {
        "title": "Luxuriously furnished house",
        "text": "I highly recommend a vacation in this beautiful house. Charming town, beach, and plenty of water activities. Perfect place to relax and get away from everyday life.",
        "userName": "Monika",
        "imgAltText": ""
      },
      "nik": {
        "title": "Literally everything you need",
        "text": "The neighborhood is quiet. Lots of restaurants. Very helpful staff. The owner to get along in every subject. Ms. Anita very helpful you can always ask for help.",
        "userName": "Nik",
        "imgAltText": ""
      },
      "adam": {
        "title": "A great place for vacation",
        "text": "You live comfortably, conveniently, two bathrooms, there is internet, well, and there is a warm pool, close to markets, close to the sea, there is a place to park a car.",
        "userName": "Adam",
        "imgAltText": ""
      }
    }
  },
  "about": {
    "gallery": {
      "loungeFromOutside": "A contemporary living room featuring a white couch and table, creating a sleek and minimalist ambiance.",
      "lounge": "A modern living room with white walls and a large television",
      "diningRoom": "Clean and modern dining room setup with elegant furniture.",
      "kitchen": "A well-lit kitchen with a wooden table and chairs, creating a cozy and inviting dining area.",
      "doubleRoom": "Luxurious bedroom featuring a large bed",
      "twinRoomDark": "Two beds in a room with a colorful wall mural. A vibrant and cozy space for relaxation and rest.",
      "twinRoomLight": "A cozy bedroom with two beds and a stylish rug, creating a comfortable and inviting atmosphere.",
      "bathFirst": "A luxurious bathroom with elegant marble walls and pristine white fixtures.",
      "bathSecond": "Luxurious white bathroom featuring marble walls and floor.",
      "terasaEnter": "A modern home with a patio and stairs leading to the entrance.",
      "terasa": "Rooftop patio with lounge chairs and table, perfect for relaxing outdoors.",
      "pool": "Stylish villa with swimming pool and patio, offering a serene and elegant outdoor space."
    },
    "information": {
      "house": {
        "title": "House",
        "text": {
          "firstPart": "The house has everything you need for a carefree vacation. There are three bedrooms (for 8 people), two bathrooms, a huge and spacious terrace, and a heated swimming pool. Even in winter, you can relax and swim in water with a temperature of 30 degrees.",
          "secondPart": "The house has all the necessary equipment. If you have a small child, there are toys, strollers, a high chair, and a bottle warmer for them. Unfortunately, we do not allow pets."
        }
      },
      "surrounding": {
        "title": "Surrounding",
        "text": {
          "firstPart": "Our beautiful house is in the well-developed town of San Pedro del Pinatar. It offers everything for an unforgettable vacation, with shopping centers, restaurants, parks, and the beach all within walking distance. Information about nearby attractions is available below.",
          "secondPart": "There are many parking spaces near the house. The nearest airports are Alicante and Murcia. If you need a car, you can arrange a transfer with the Calma company."
        }
      },
      "rentInfo": {
        "title": "Rental information",
        "text": {
          "firstPart": "It's worth mentioning that we are on both Booking and Airbnb. If you don't feel confident, you can book the property through these two services. However, to save money, feel free to book directly with us by sending a message or giving us a call to arrange the dates.",
          "secondPart": "Once you are ready to make a reservation, contact Mrs. Anita Kołodziejczyk. She is responsible for your booking and will be on-site to assist you with your reservation."
        }
      },
      "transfer": {
        "title": "Transfer",
        "text": {
          "firstPart": "You can rent a car from the airport. I can recommend companies, or you can choose a car from well-known rentals on site, such as Odkryj Auto or Record Go. The bus to the town runs infrequently, but it goes directly or via Murcia, offering a convenient option if needed.",
          "secondPart": "Transfers and car rentals (Viva Cars, !Hola!, Alicante Taxi, Calma) are also available. Contact via WhatsApp or Messenger. After landing, head to the airport's upper level, where you'll usually wait for the car at Starbucks."
        }
      }
    }
  },
  "contacts": {
    "monthPriceTitle": "Month price (monthly)",
    "charts": {
      "title": "Contacts Charts"
    },
    "months": {
      "october": "October",
      "november": "November",
      "christmasNewYear": "Christmas and New Year (2 weeks)",
      "march": "March",
      "april": "April"
    },
    "fullPrice": "full price",
    "deposit": "Deposit: Refundable after the stay, 300 euros.",
    "information": {
      "title": "Booking Procedure",
      "subtitle": "How to Book Your Reservation: Step-by-Step Guide",
      "firstCol": "We are available on Booking.com and Airbnb. If you prefer to save money, please contact us directly for booking or assistance. Check the details, such as airlines, departure city, and flight times, to book your dates accordingly.",
      "secondCol": "The standard check-in time is 16:00, and check-out is at 11:00. After purchasing your ticket, you can always contact us, and we will try to accommodate your schedule.",
      "thirdCol": "The cleaning fee is 140 euros (one-time fee), and the linen set is 13 euros per person. For stays longer than 10 days, we offer a 5% discount off the total cost.",
      "fourthCol": "Individual discounts may be possible for fewer people in exceptional cases. The additional charge for the 9th person is 40 euros per day, but only in exceptional circumstances.",
      "fifthCol": "Regarding payments, the first transfer is about 20-30% of the total amount and is expected within 72 hours. The second transfer is half of the remaining amount and is due about halfway to your arrival date.",
      "sixthCol": "The third transfer is the final installment before your arrival, as the total amount must be credited to our account for check-in. If you have any questions or special requests, feel free to reach out to us at any time."
    },
    "accordion": {
      "phone": "Phone",
      "email": "Mail",
      "important": {
        "firstPart": "Please be patient;",
        "secondPart": "each of us, besides renting, has another job."
      },
      "firstContact": {
        "customeField": "Address",
        "title": "Still have questions ? Call Ewelina Kwaśna",
        "langPreference": "Ms. Ewelina speaks Polish, so if you have any questions, it’s better to write in Polish."
      },
      "secondContact": {
        "title": "For reservations, contact Anita Kolodziejczyk",
        "customeField": "Web page",
        "langPreference": "Ms. Anita speaks Polish, Spanish, and English, so if you have any questions, it’s better to write."
      }
    }
  },
  "surrounding": {
    "filtersMenu": {
      "filters": "Filters:",
      "sort": "Sort",
      "limit": "Limit",
      "sortTypes": {
        "low": "Distance: Low to High",
        "high": "Distance: High to Low"
      },
      "limitTypes": {
        "three": "3 Items on page",
        "nine": "9 Items on page"
      }
    },
    "pagination": {
      "previous": "Previous",
      "next": "Next"
    },
    "placeMoreInfo": "More info",
    "placeGenerateRoute": "Generate route",
    "placeHouse": "House"
  },
  "admin": {
    "calendar": {
      "welcome": "Welcome",
      "adminGreet": "I am glad to see you",
      "from": "From",
      "to": "To",
      "initialDate": "Initial date",
      "deadlineDate": "Deadline date"
    },
    "surrounding": {
      "title": "Title",
      "subtitle": "Subtitle",
      "description": "Description",
      "imageAltText": "Image alt text",
      "image": "Image",
      "distance": "Distance",
      "routeLink": "Route link",
      "coords": {
        "lat": "Latitude",
        "lng": "Longitude"
      }
    },
    "form": {
      "submit": "Submit",
      "submitting": "Submitting"
    }
  },
  "footer": {
    "copyrights": "All Rights Reserverd. Built with"
  },
  "error": {
    "message": "We are already working to solve the problem.",
    "reset": "Reset",
    "empty": "This list is empty",
    "pity": "Unfortunately, an error occurred."
  }
}`) as Translation;
