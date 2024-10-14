import { Translation } from '@/server/types/Translation';

export default JSON.parse(`{
  "header": {
    "nav": {
      "home": "Dom",
      "about": "O nas",
      "surrounding": "Okolica",
      "contacts": "Kontakty"
    },
    "hamburger": "Menu mobilne"
  },
  "homepage": {
    "hero": {
      "title": {
        "firstPart": "Sprawiamy, że Twoje",
        "vacation": "wakacje",
        "lastPart": "są lepsze"
      },
      "subtitle": "Poczuj się jak w domu, z dala od domu",
      "moreInfo": "Więcej info"
    },
    "testimonials": {
      "title": "Nasze referencje",
      "subtitle": "Sprawdź nasze referencje na naszej stronie na Facebooku",
      "leaveReview": "Zostawić recenzję",
      "kuba": {
        "title": "Dom bardzo dobrze utrzymany",
        "text": "Gorąco polecam, świetne miejsce, zawiera wszystkie niezbędne rzeczy do pobytu z dzieckiem! Bardzo miły i szybki kontakt z właścicielami, którzy zaproponują i pomogą rozwiązać każdy możliwy problem.",
        "userName": "Kuba",
        "imgAltText": ""
      },
      "monika": {
        "title": "Nowy, luksusowo urządzony dom",
        "text": "Gorąco polecam wakacje w tym pięknym domu. Urokliwe miasteczko, plaża i wiele aktywności wodnych. Doskonałe miejsce do relaksu i oderwania się od codziennego życia.",
        "userName": "Monika",
        "imgAltText": ""
      },
      "nik": {
        "title": "Dosłownie wszystko, czego potrzebujesz",
        "text": "Okolica jest cicha. Wiele restauracji. Bardzo pomocny personel. Właściciel jest do dogadania we wszystkich sprawach. Pani Anita bardzo pomocna na miejscu, zawsze możesz poprosić o pomoc.",
        "userName": "Nik",
        "imgAltText": ""
      },
      "adam": {
        "title": "Wspaniałe miejsce na wakacje",
        "text": "Mieszka się wygodnie, wygodnie, są dwa łazienki, jest internet, no i jest ciepły basen, blisko rynki, blisko morze, jest miejsce na zaparkowanie samochodu. Polecam",
        "userName": "Adam",
        "imgAltText": ""
      }
    }
  },
  "about": {
    "gallery": {
      "loungeFromOutside": "Nowoczesny salon z białą sofą i stołem, tworzący elegancką i minimalistyczną atmosferę.",
      "lounge": "Nowoczesny salon z białymi ścianami i dużym telewizorem.",
      "diningRoom": "Czysty i nowoczesny układ jadalni z eleganckimi meblami.",
      "kitchen": "Jasna kuchnia z drewnianym stołem i krzesłami, tworząca przytulny i zachęcający do jedzenia klimat.",
      "doubleRoom": "Luksusowa sypialnia z dużym łóżkiem.",
      "twinRoomDark": "Dwa łóżka w pokoju z kolorowym murallem na ścianie. Energiczna i przytulna przestrzeń do relaksu i odpoczynku.",
      "twinRoomLight": "Przytulna sypialnia z dwoma łóżkami i stylowym dywanem, tworząca komfortową i przyjemną atmosferę.",
      "bathFirst": "Luksusowa łazienka z eleganckimi marmurowymi ścianami i nieskazitelnymi białymi armaturami.",
      "bathSecond": "Luksusowa łazienka w białym kolorze z marmurowymi ścianami i podłogą.",
      "terasaEnter": "Nowoczesny dom z tarasem i schodami prowadzącymi do wejścia.",
      "terasa": "Dachowy taras z leżakami i stołem, idealny do relaksu na świeżym powietrzu.",
      "pool": "Stylowa willa z basenem i patio, oferująca spokojną i elegancką przestrzeń na zewnątrz."
    },
    "information": {
      "house": {
        "title": "Dom",
        "text": {
          "firstPart": "Dom ma wszystko, czego potrzeba do beztroskiego wypoczynku. Są tu trzy sypialnie (dla 8 osób), dwie łazienki, ogromny przestronny taras do relaksu i podgrzewany basen, który zapewnia komfort nawet zimą, pozwalając na relaks i pływanie w 30-stopniowej wodzie",
          "secondPart": "Dom posiada wszystkie niezbędne wyposażenie. Jeśli masz małe dziecko, znajdziesz tam zabawki, wózki, wysokie krzesełko oraz podgrzewacz do butelek. Niestety, nie przyjmujemy zwierząt domowych."
        }
      },
      "surrounding": {
        "title": "Okolica",
        "text": {
          "firstPart": "Nasz piękny dom znajduje się w dobrze rozwiniętym mieście San Pedro del Pinatar. Oferuje wszystko, czego potrzeba do niezapomnianych wakacji - centra handlowe, kawiarnie, restauracje, parki oraz plaża są wszystkie w zasięgu spaceru. Informacje o pobliskich atrakcjach znajdują się poniżej.",
          "secondPart": "W pobliżu domu znajduje się wiele miejsc parkingowych. Najbliższe lotniska to Alicante (1 godzina drogi) i Murcja (36 minut drogi). Jeśli potrzebujesz samochodu, możesz zorganizować transfery z firmą Calma."
        }
      },
      "rentInfo": {
        "title": "Informacje o wynajmie",
        "text": {
          "firstPart": "Warto wspomnieć, że jesteśmy obecni zarówno na Booking.com, jak i Airbnb. Jeśli nie masz pewności, możesz zarezerwować naszą nieruchomość przez te dwie popularne usługi. Jednakże, aby zaoszczędzić pieniądze, możesz bezpiecznie zarezerwować bezpośrednio u nas, wysyłając wiadomość lub dzwoniąc, aby ustalić daty.",
          "secondPart": "Gdy będziesz gotowy do dokonania rezerwacji, proszę skontaktować się z panią Anitą Violetta Kołodziejczyk. Ona jest odpowiedzialna za Twoją rezerwację i będzie na miejscu, aby pomóc Ci w dokonaniu rezerwacji."
        }
      },
      "transfer": {
        "title": "Transfer",
        "text": {
          "firstPart": "Z lotniska można wynająć auto. Mogę polecić firmy lub wybrać samochód z znanych wypożyczalni na miejscu, na przykład: Odkryj Auto, Record Go. Autobus do miasta kursuje rzadko, ale bezpośrednio lub przez Murcię.",
          "secondPart": "Transfery i wypożyczalnie aut (Viva Cars, !Hola!, Alicante Taxi, Calma) są również dostępne. Kontakt przez WhatsApp lub Messenger. Po wylądowaniu udaj się na górny poziom lotniska, gdzie zazwyczaj czeka się na samochód w Starbucks."
        }
      }
    }
  },
  "contacts": {
    "monthPriceTitle": "Cena miesięczna (miesięcznie)",
    "months": {
      "october": "Październik",
      "november": "Listopad",
      "christmasNewYear": "Święta Bożego Narodzenia i Nowy Rok (2 tygodnie)",
      "march": "Marzec",
      "april": "Kwiecień"
    },
    "fullPrice": "pełna cena",
    "deposit": "Zadatek: Zwracany po pobycie, 300 euro.",
    "information": {
      "title": "Procedura rezerwacji",
      "subtitle": "Jak dokonać rezerwacji: Przewodnik krok po kroku",
      "firstCol": "Jesteśmy dostępni na Booking.com i Airbnb. Jeśli wolisz zaoszczędzić, skontaktuj się z nami bezpośrednio w celu dokonania rezerwacji lub uzyskania pomocy. Sprawdź szczegóły, takie jak linie lotnicze, miasto wylotu i godziny lotów, aby odpowiednio zarezerwować terminy.",
      "secondCol": "Standardowa godzina zameldowania to 16:00, a wymeldowania to 11:00. Po zakupie biletu zawsze możesz się z nami skontaktować, a my postaramy się dostosować do Twojego harmonogramu.",
      "thirdCol": "Opłata za sprzątanie wynosi 140 euro (jednorazowa opłata), a zestaw pościeli to 13 euro za osobę. Przy pobytach dłuższych niż 10 dni oferujemy 5% zniżki od całkowitego kosztu.",
      "fourthCol": "Indywidualne zniżki mogą być możliwe w przypadku mniejszej liczby osób w wyjątkowych sytuacjach. Dodatkowa opłata za 9. osobę wynosi 40 euro dziennie, ale tylko w wyjątkowych okolicznościach.",
      "fifthCol": "W przypadku płatności, pierwszy przelew wynosi około 20-30% całkowitej kwoty i jest oczekiwany w ciągu 72 godzin. Drugi przelew to połowa pozostałej kwoty i jest wymagalny w połowie terminu przed datą przyjazdu.",
      "sixthCol": "Trzeci przelew to ostateczna rata przed przyjazdem, ponieważ cała kwota musi zostać zaksięgowana na naszym koncie, aby zameldowanie było możliwe. Jeśli masz jakiekolwiek pytania lub specjalne prośby, skontaktuj się z nami w dowolnym momencie."
    },
    "accordion": {
      "phone": "Telefon",
      "email": "E-mail",
      "important": {
        "firstPart": "Prosimy o cierpliwość;",
        "secondPart": "Każdy z nas, oprócz wynajmu, ma inne zajęcie."
      },
      "firstContact": {
        "title": "Masz jeszcze pytania? Zadzwoń do Eweliny Kwaśnej",
        "customeField": "Adres",
        "langPreference": "Pani Ewelina mówi po polsku, więc jeśli masz jakieś pytania, lepiej napisać po polsku."
      },
      "secondContact": {
        "title": "W sprawie rezerwacji skontaktuj się z Anitą Kołodziejczyk.",
        "customeField": "Strona",
        "langPreference": "Pani Anita mówi po polsku, hiszpańsku i angielsku, więc jeśli masz jakieś pytania, lepiej napisać."
      }
    }
  },
  "surrounding": {
    "filtersMenu": {
      "filters": "Filtry:",
      "sort": "Sortuj",
      "limit": "Limit",
      "sortTypes": {
        "low": "Dystans: od najm. do najw.",
        "high": "Dystans: od najw. do najm."
      },
      "limitTypes": {
        "three": "3 Pozycje na stronie",
        "nine": "9 Pozycje na stronie"
      }
    },
    "pagination": {
      "previous": "Poprzedni",
      "next": "Następny"
    },
    "placeMoreInfo": "Więcej info",
    "placeGenerateRoute": "Generowanie trasy",
    "placeHouse": "Dom"
  },
  "admin": {
    "calendar": {
      "welcome": "Witamy",
      "adminGreet": "Cieszę się, że cię widzę",
      "from": "Od",
      "to": "Do",
      "initialDate": "Data początkowa",
      "deadlineDate": "Ostateczny termin"
    },
    "surrounding": {
      "title": "Tytuł",
      "subtitle": "Podtytuł",
      "description": "Opis",
      "imageAltText": "Tekst alternatywny obrazu",
      "image": "Obraz",
      "distance": "Odległość",
      "routeLink": "Link trasy",
      "coords": {
        "lat": "Szerokość geograficzna",
        "lng": "Długość geograficzna"
      }
    }
  },
  "footer": {
    "copyrights": "Wszelkie prawa zastrzeżone. Zbudowany przy użyciu"
  },
  "error": {
    "message": "Już pracujemy nad rozwiązaniem problemu.",
    "reset": "Reset",
    "empty": "Ta lista jest pusta"
  }
}`) as Translation;
