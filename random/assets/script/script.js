function my(){
    var jsonContent = {
    
        "featured": [
            {
                "name": "Thomas Edison",
                "email": "ThomasEdison@gmail.com",
                "mobile": "9773021005",
                "address": "9369 saddle dr",
                "birthdate": "26th march, 1999",
                "gender": "Male",
                "language": "English",
                "country": "india"
            },
            {
                "name": "Manan Sharma",
                "email": "Manan197@gmail.com",
                "mobile": "9773021004",
                "address": "007, bond street",
                "birthdate": "10th october,1998",
                "gender": "male",
                "language": "English",
                "country": "India"
            },
            {
                "name": "Abraham Loncoln",
                "email": "abraham1457@yahoo.com",
                "mobile": "9773021003",
                "address": "vikram park, block no. 50",
                "birthdate": "19th july, 1987",
                "gender": "Male",
                "language": "Espaniol",
                "country": "Spain"
            },
            {
                "name": "John wick",
                "email": "Johanwick@gmail.com",
                "mobile": "9773021002",
                "address": "walking bridge, 19906",
                "birthdate": "15th august, 1994",
                "gender": "Male",
                "language": "English",
                "country": "England"
            },
            {
                "name": "Fate ali khan",
                "email": "fateali@yahoo.in",
                "mobile": "9773021001",
                "address": "paddle st.",
                "birthdate": "30th june, 1998",
                "gender": "Male",
                "language": "Arabic",
                "country": "Afghanistan"
            },
            {
                "name": "Lao tzu.",
                "email": "laotzu@gmail.com",
                "mobile": "9773021000",
                "address": "Paddle rd, 1960",
                "birthdate": "19June , 1978",
                "gender": "Male",
                "language": "Hindi",
                "country": "India"
            },
            {
                "name": "Carlie sandburg",
                "email": "CarlySandburg@gmail.com",
                "mobile": "9773021009",
                "address": "9586 preston Rd",
                "birthdate": "21st march, 1998",
                "gender": "female",
                "language": "English",
                "country": "Los Angeles"
            },
            {
                "name": "Rishiraj Kashyap",
                "email": "Aristotle123@yahoo.in",
                "mobile": "9773021008",
                "address": "lower parel, Mumbai",
                "birthdate": "12th may, 1996",
                "gender": "Male",
                "language": "Hindi",
                "country": "India"
            },
            {
                "name": "Dhairya patel",
                "email": "Dhairya_patel@gmail.com",
                "mobile": "9773021005",
                "address": "1/6 no khuno",
                "birthdate": "26th march, 1999",
                "gender": "Male",
                "language": "English",
                "country": "india"
            },
            {
                "name": "Ishaan kaur",
                "email": "Ishaankaur@gmail.com",
                "mobile": "97730212341",
                "address": "007, bond street",
                "birthdate": "10th october,1998",
                "gender": "Male",
                "language": "English",
                "country": "India"
            },
            {
                "name": "Ismeet singh",
                "email": "Ismeet_cool@gmail.com",
                "mobile": "9773021003",
                "address": "vikram park, block no. 50",
                "birthdate": "19th july, 1987",
                "gender": "Male",
                "language": "Punjabi",
                "country": "India"
            },
            {
                "name": "Mihir singh",
                "email": "Mihir_shady@gmail.com",
                "mobile": "9773021002",
                "address": "walking bridge, 19906",
                "birthdate": "15th august, 1994",
                "gender": "Male",
                "language": "English",
                "country": "England"
            },
            {
                "name": "Yusuf pathan",
                "email": "Yusuf_dongri@yahoo.in",
                "mobile": "9773021001",
                "address": "paddle st.",
                "birthdate": "30th june, 1998",
                "gender": "Male",
                "language": "Arabic",
                "country": "Afghanistan"
            },
            {
                "name": "mitsu patel",
                "email": "Mitsu_sassy@gmail.com",
                "mobile": "9773021000",
                "address": "Paddle rd, 1960",
                "birthdate": "19June , 1978",
                "gender": "Female",
                "language": "Hindi",
                "country": "India"
            },
            {
                "name": "Carlie sandburg",
                "email": "CarlySandburg@gmail.com",
                "mobile": "9773021009",
                "address": "9586 preston Rd",
                "birthdate": "21st march, 1998",
                "gender": "female",
                "language": "English",
                "country": "Los Angeles"
            },
            {
                "name": "Rishiraj singh",
                "email": "RIshiraj_ultimate@gmail.com",
                "mobile": "9773021008",
                "address": "lower parel, Mumbai",
                "birthdate": "12th may, 1996",
                "gender": "Male",
                "language": "Hindi",
                "country": "India"
            }
        ]
    }
    


    var random = jsonContent.featured[Math.floor(Math.random() * jsonContent.featured.length)];
    
    document.getElementById("fullname").innerHTML = random['name'];


    document.getElementById("email").innerHTML = random['email'];
    document.getElementById("mobile").innerHTML = random['mobile'];
    document.getElementById("address").innerHTML = random['address'];
    document.getElementById("birthdate").innerHTML = random['birthdate'];
    document.getElementById("gender").innerHTML = random['gender'];
    document.getElementById("language").innerHTML = random['language'];
    document.getElementById("country").innerHTML = random['country'];
}
    