const data = [
    {
        state: 'Andhra Pradesh',
        district: 'Guntur',
        market: 'Pidugurala(Palnadu)',
        commodity: 'Dry Chillies'
    },
    {
        state: 'Andhra Pradesh',
        district: 'Kurnool',
        market: 'Adoni',
        commodity: 'Cotton'
    },
    {
        state: 'Andhra Pradesh',
        district: 'West Godavari',
        market: 'Gopalavaram',
        commodity: 'Lemon'
    },
    {
        state: 'Andhra Pradesh',
        district: 'East Godavari',
        market: 'Ambajipeta',
        commodity: 'Banana'
    },
    {
        state: 'Andhra Pradesh',
        district: 'East Godavari',
        market: 'Prattipadu',
        commodity: 'Paddy(Dhan)(Common)'
    },
    {
        state: 'Andhra Pradesh',
        district: 'Kurnool',
        market: 'Kurnool',
        commodity: 'Dry Chillies'
    },
    {
        state: 'Andhra Pradesh',
        district: 'Chittor',
        market: 'Chittoor',
        commodity: 'Gur(Jaggery)'
    },
    {
        state: 'Andhra Pradesh',
        district: 'East Godavari',
        market: 'Pithapuram',
        commodity: 'Paddy(Dhan)(Common)'
    },
    {
        state: 'Andhra Pradesh',
        district: 'Kurnool',
        market: 'Adoni',
        commodity: 'Castor Seed'
    },
    {
        state: 'Andhra Pradesh',
        district: 'Kurnool',
        market: 'Kurnool',
        commodity: 'Groundnut'
    },
    {
        state: 'Andhra Pradesh',
        district: 'Cuddapah',
        market: 'Cuddapah',
        commodity: 'Groundnut'
    },
    {
        state: 'Andhra Pradesh',
        district: 'East Godavari',
        market: 'Sampara',
        commodity: 'Paddy(Dhan)(Common)'
    },
    {
        state: 'Andhra Pradesh',
        district: 'Guntur',
        market: 'Tenali',
        commodity: 'Black Gram (Urd Beans)(Whole)'
    },
    {
        state: 'Andhra Pradesh',
        district: 'Guntur',
        market: 'Tenali',
        commodity: 'Lemon'
    },
    {
        state: 'Andhra Pradesh',
        district: 'Kurnool',
        market: 'Adoni',
        commodity: 'Groundnut'
    },
    {
        state: 'Andhra Pradesh',
        district: 'Visakhapatnam',
        market: 'Anakapally',
        commodity: 'Gur(Jaggery)'
    },
    {
        state: 'Andhra Pradesh',
        district: 'West Godavari',
        market: 'Denduluru',
        commodity: 'Lime'
    },
    {
        state: 'Chattisgarh',
        district: 'Balod',
        market: 'Balod',
        commodity: 'Paddy(Dhan)(Common)'
    },
    {
        state: 'Chattisgarh',
        district: 'Bilaspur',
        market: 'Tiphra',
        commodity: 'Banana'
    },
    {
        state: 'Chattisgarh',
        district: 'Bilaspur',
        market: 'Tiphra',
        commodity: 'Bitter gourd'
    },
    {
        state: 'Chattisgarh',
        district: 'Bilaspur',
        market: 'Tiphra',
        commodity: 'Cluster beans'
    },
    {
        state: 'Chattisgarh',
        district: 'Bilaspur',
        market: 'Tiphra',
        commodity: 'Pomegranate'
    },
    {
        state: 'Chattisgarh',
        district: 'Dantewada',
        market: 'Gidam',
        commodity: 'Tamarind Seed'
    },
    {
        state: 'Chattisgarh',
        district: 'Durg',
        market: 'Durg',
        commodity: 'Guava'
    },
    {
        state: 'Chattisgarh',
        district: 'Durg',
        market: 'Durg',
        commodity: 'Little gourd (Kundru)'
    },
    {
        state: 'Chattisgarh',
        district: 'Durg',
        market: 'Durg',
        commodity: 'Onion'
    },
    {
        state: 'Chattisgarh',
        district: 'Durg',
        market: 'Durg',
        commodity: 'Pumpkin'
    },
    {
        state: 'Chattisgarh',
        district: 'Durg',
        market: 'Durg',
        commodity: 'Raddish'
    },
    {
        state: 'Chattisgarh',
        district: 'Janjgir',
        market: 'Baradwar',
        commodity: 'Paddy(Dhan)(Common)'
    },
    {
        state: 'Chattisgarh',
        district: 'Kabirdham',
        market: 'Kawardha',
        commodity: 'Arhar (Tur/Red Gram)(Whole)'
    },
    {
        state: 'Chattisgarh',
        district: 'Kanker',
        market: 'Charama',
        commodity: 'Paddy(Dhan)(Common)'
    },
    {
        state: 'Chattisgarh',
        district: 'Kanker',
        market: 'Korar',
        commodity: 'Maize'
    },
    {
        state: 'Chattisgarh',
        district: 'Mahasamund',
        market: 'Bagbahra',
        commodity: 'Paddy(Dhan)(Common)'
    },
    {
        state: 'Chattisgarh',
        district: 'Mahasamund',
        market: 'Komakhan',
        commodity: 'Paddy(Dhan)(Common)'
    },
    {
        state: 'Chattisgarh',
        district: 'Mahasamund',
        market: 'Tendukona',
        commodity: 'Paddy(Dhan)(Common)'
    },
    {
        state: 'Chattisgarh',
        district: 'Raipur',
        market: 'Abhanpur',
        commodity: 'Paddy(Dhan)(Common)'
    },
    {
        state: 'Chattisgarh',
        district: 'Durg',
        market: 'Durg',
        commodity: 'Mango'
    },
    {
        state: 'Chattisgarh',
        district: 'Gariyaband',
        market: 'Gariyaband',
        commodity: 'Paddy(Dhan)(Common)'
    },
    {
        state: 'Chattisgarh',
        district: 'Kabirdham',
        market: 'Kawardha',
        commodity: 'Bengal Gram(Gram)(Whole)'
    },
    {
        state: 'Chattisgarh',
        district: 'Kanker',
        market: 'Sambalpur',
        commodity: 'Maize'
    },
    {
        state: 'Chattisgarh',
        district: 'Mahasamund',
        market: 'Mahasamund',
        commodity: 'Paddy(Dhan)(Common)'
    },
    {
        state: 'Chattisgarh',
        district: 'Narayanpur',
        market: 'Narayanpur',
        commodity: 'Millets'
    },
    {
        state: 'Chattisgarh',
        district: 'Raigarh',
        market: 'Gharghoda',
        commodity: 'Maize'
    },
    {
        state: 'Chattisgarh',
        district: 'Rajnandgaon',
        market: 'Gandai',
        commodity: 'Wheat'
    },
    {
        state: 'Chattisgarh',
        district: 'Rajnandgaon',
        market: 'Rajnandgaon',
        commodity: 'Lemon'
    },
    {
        state: 'Chattisgarh',
        district: 'Rajnandgaon',
        market: 'Rajnandgaon',
        commodity: 'Onion'
    },
    {
        state: 'Chattisgarh',
        district: 'Sukma',
        market: 'Kukanar',
        commodity: 'Mahua Seed(Hippe seed)'
    },
    {
        state: 'Chattisgarh',
        district: 'Sukma',
        market: 'Sukma',
        commodity: 'Mahua Seed(Hippe seed)'
    },
    {
        state: 'Chattisgarh',
        district: 'Surajpur',
        market: 'Surajpur',
        commodity: 'Mahua'
    },
    {
        state: 'Chattisgarh',
        district: 'Balodabazar',
        market: 'Bhatgaon',
        commodity: 'Paddy(Dhan)(Common)'
    },
    {
        state: 'Chattisgarh',
        district: 'Balrampur',
        market: 'Ramanujganj',
        commodity: 'Corriander seed'
    },
    {
        state: 'Chattisgarh',
        district: 'Bastar',
        market: 'Jagdalpur',
        commodity: 'Dry Chillies'
    },
    {
        state: 'Chattisgarh',
        district: 'Bastar',
        market: 'Karpawand',
        commodity: 'Paddy(Dhan)(Common)'
    },
    {
        state: 'Chattisgarh',
        district: 'Bilaspur',
        market: 'Bilaspur',
        commodity: 'Paddy(Dhan)(Common)'
    },
    {
        state: 'Chattisgarh',
        district: 'Bilaspur',
        market: 'Tiphra',
        commodity: 'Bhindi(Ladies Finger)'
    },
    {
        state: 'Chattisgarh',
        district: 'Bilaspur',
        market: 'Tiphra',
        commodity: 'Capsicum'
    },
    {
        state: 'Chattisgarh',
        district: 'Bilaspur',
        market: 'Tiphra',
        commodity: 'Cauliflower'
    },
    {
        state: 'Chattisgarh',
        district: 'Bilaspur',
        market: 'Tiphra',
        commodity: 'Lemon'
    },
    {
        state: 'Chattisgarh',
        district: 'Bilaspur',
        market: 'Tiphra',
        commodity: 'Potato'
    },
    {
        state: 'Chattisgarh',
        district: 'Bilaspur',
        market: 'Tiphra',
        commodity: 'Pumpkin'
    },
    {
        state: 'Chattisgarh',
        district: 'Dhamtari',
        market: 'Belargaon',
        commodity: 'Paddy(Dhan)(Common)'
    },
    {
        state: 'Chattisgarh',
        district: 'Dhamtari',
        market: 'Boraee',
        commodity: 'Paddy(Dhan)(Common)'
    },
    {
        state: 'Chattisgarh',
        district: 'Dhamtari',
        market: 'Gattasilli',
        commodity: 'Paddy(Dhan)(Common)'
    },
    {
        state: 'Chattisgarh',
        district: 'Durg',
        market: 'Durg',
        commodity: 'Cabbage'
    },
    {
        state: 'Chattisgarh',
        district: 'Durg',
        market: 'Durg',
        commodity: 'Capsicum'
    },
    {
        state: 'Chattisgarh',
        district: 'Durg',
        market: 'Durg',
        commodity: 'Cauliflower'
    },
    {
        state: 'Chattisgarh',
        district: 'Rajnandgaon',
        market: 'Rajnandgaon',
        commodity: 'Mousambi(Sweet Lime)'
    },
    {
        state: 'Chattisgarh',
        district: 'Rajnandgaon',
        market: 'Rajnandgaon',
        commodity: 'Potato'
    },
    {
        state: 'Chattisgarh',
        district: 'Rajnandgaon',
        market: 'Rajnandgaon',
        commodity: 'Raddish'
    },
    {
        state: 'Chattisgarh',
        district: 'Sukma',
        market: 'Konta',
        commodity: 'Mahua Seed(Hippe seed)'
    },
    {
        state: 'Chattisgarh',
        district: 'Surguja',
        market: 'Ambikapur',
        commodity: 'Kodo Millet(Varagu)'
    },
    {
        state: 'Chattisgarh',
        district: 'Bilaspur',
        market: 'Bilaspur',
        commodity: 'Wheat'
    },
    {
        state: 'Chattisgarh',
        district: 'Bilaspur',
        market: 'Tiphra',
        commodity: 'Apple'
    },
    {
        state: 'Chattisgarh',
        district: 'Bilaspur',
        market: 'Tiphra',
        commodity: 'Brinjal'
    },
    {
        state: 'Chattisgarh',
        district: 'Bilaspur',
        market: 'Tiphra',
        commodity: 'Cabbage'
    },
    {
        state: 'Chattisgarh',
        district: 'Bilaspur',
        market: 'Tiphra',
        commodity: 'Drumstick'
    },
    {
        state: 'Chattisgarh',
        district: 'Bilaspur',
        market: 'Tiphra',
        commodity: 'Green Chilli'
    },
    {
        state: 'Chattisgarh',
        district: 'Bilaspur',
        market: 'Tiphra',
        commodity: 'Onion'
    },
    {
        state: 'Chattisgarh',
        district: 'Dhamtari',
        market: 'Belarbahara',
        commodity: 'Paddy(Dhan)(Common)'
    },
    {
        state: 'Chattisgarh',
        district: 'Dhamtari',
        market: 'Nagari',
        commodity: 'Paddy(Dhan)(Common)'
    },
    {
        state: 'Chattisgarh',
        district: 'Durg',
        market: 'Durg',
        commodity: 'Banana - Green'
    },
    {
        state: 'Chattisgarh',
        district: 'Durg',
        market: 'Durg',
        commodity: 'Bottle gourd'
    },
    {
        state: 'Chattisgarh',
        district: 'Durg',
        market: 'Durg',
        commodity: 'Coriander(Leaves)'
    },
    {
        state: 'Chattisgarh',
        district: 'Durg',
        market: 'Durg',
        commodity: 'Cucumbar(Kheera)'
    },
    {
        state: 'Chattisgarh',
        district: 'Durg',
        market: 'Durg',
        commodity: 'Lemon'
    },
    {
        state: 'Chattisgarh',
        district: 'Durg',
        market: 'Durg',
        commodity: 'Papaya (Raw)'
    },
    {
        state: 'Chattisgarh',
        district: 'Durg',
        market: 'Durg',
        commodity: 'Pomegranate'
    },
    {
        state: 'Chattisgarh',
        district: 'Durg',
        market: 'Durg',
        commodity: 'Wheat'
    },
    {
        state: 'Chattisgarh',
        district: 'Gariyaband',
        market: 'Devbhog',
        commodity: 'Paddy(Dhan)(Common)'
    },
    {
        state: 'Chattisgarh',
        district: 'Janjgir',
        market: 'Naila',
        commodity: 'Paddy(Dhan)(Common)'
    },
    {
        state: 'Chattisgarh',
        district: 'Kabirdham',
        market: 'Kawardha',
        commodity: 'Lak(Teora)'
    },
    {
        state: 'Chattisgarh',
        district: 'Kanker',
        market: 'Lakhanpuri',
        commodity: 'Paddy(Dhan)(Common)'
    },
    {
        state: 'Chattisgarh',
        district: 'Korba',
        market: 'Katghora',
        commodity: 'Mahua'
    },
    {
        state: 'Chattisgarh',
        district: 'Mahasamund',
        market: 'Pithoura',
        commodity: 'Paddy(Dhan)(Common)'
    },
    {
        state: 'Chattisgarh',
        district: 'Rajnandgaon',
        market: 'Rajnandgaon',
        commodity: 'Apple'
    },
    {
        state: 'Chattisgarh',
        district: 'Rajnandgaon',
        market: 'Rajnandgaon',
        commodity: 'Cabbage'
    },
    {
        state: 'Chattisgarh',
        district: 'Janjgir',
        market: 'Akaltara',
        commodity: 'Paddy(Dhan)(Common)'
    },
    {
        state: 'Chattisgarh',
        district: 'Jashpur',
        market: 'Pathalgaon',
        commodity: 'Ragi (Finger Millet)'
    },
    {
        state: 'Chattisgarh',
        district: 'Kabirdham',
        market: 'Pandariya',
        commodity: 'Same/Savi'
    },
    {
        state: 'Chattisgarh',
        district: 'Kanker',
        market: 'Bhanupratappur',
        commodity: 'Maize'
    },
    {
        state: 'Chattisgarh',
        district: 'Kanker',
        market: 'Narharpur',
        commodity: 'Paddy(Dhan)(Common)'
    },
    {
        state: 'Chattisgarh',
        district: 'Mungeli',
        market: 'Lormi',
        commodity: 'Paddy(Dhan)(Common)'
    },
    {
        state: 'Chattisgarh',
        district: 'Rajnandgaon',
        market: 'Rajnandgaon',
        commodity: 'Banana'
    },
    {
        state: 'Chattisgarh',
        district: 'Rajnandgaon',
        market: 'Rajnandgaon',
        commodity: 'Brinjal'
    },
    {
        state: 'Chattisgarh',
        district: 'Sukma',
        market: 'Doranpal',
        commodity: 'Mahua Seed(Hippe seed)'
    },
    {
        state: 'Chattisgarh',
        district: 'Bastar',
        market: 'Muli',
        commodity: 'Paddy(Dhan)(Common)'
    },
    {
        state: 'Chattisgarh',
        district: 'Bilaspur',
        market: 'Tiphra',
        commodity: 'Papaya'
    },
    {
        state: 'Chattisgarh',
        district: 'Dhamtari',
        market: 'Dhamtari',
        commodity: 'Paddy(Dhan)(Common)'
    },
    {
        state: 'Chattisgarh',
        district: 'Durg',
        market: 'Durg',
        commodity: 'Apple'
    },
    {
        state: 'Chattisgarh',
        district: 'Durg',
        market: 'Durg',
        commodity: 'Bitter gourd'
    },
    {
        state: 'Chattisgarh',
        district: 'Durg',
        market: 'Durg',
        commodity: 'Carrot'
    },
    {
        state: 'Chattisgarh',
        district: 'Durg',
        market: 'Durg',
        commodity: 'Garlic'
    },
    {
        state: 'Chattisgarh',
        district: 'Durg',
        market: 'Durg',
        commodity: 'Green Chilli'
    },
    {
        state: 'Chattisgarh',
        district: 'Durg',
        market: 'Durg',
        commodity: 'Mousambi(Sweet Lime)'
    },
    {
        state: 'Chattisgarh',
        district: 'Durg',
        market: 'Durg',
        commodity: 'Bhindi(Ladies Finger)'
    },
    {
        state: 'Chattisgarh',
        district: 'Durg',
        market: 'Durg',
        commodity: 'Brinjal'
    },
    {
        state: 'Chattisgarh',
        district: 'Durg',
        market: 'Durg',
        commodity: 'Chikoos(Sapota)'
    },
    {
        state: 'Gujarat',
        district: 'Amreli',
        market: 'Bagasara',
        commodity: 'Bajra(Pearl Millet/Cumbu)'
    },
    {
        state: 'Gujarat',
        district: 'Amreli',
        market: 'Bagasara',
        commodity: 'Corriander seed'
    },
    {
        state: 'Gujarat',
        district: 'Amreli',
        market: 'Bagasara',
        commodity: 'Cotton'
    },
    {
        state: 'Gujarat',
        district: 'Amreli',
        market: 'Bagasara',
        commodity: 'Soyabean'
    },
    {
        state: 'Gujarat',
        district: 'Anand',
        market: 'Anand(Veg,Yard,Anand)',
        commodity: 'Bottle gourd'
    },
    {
        state: 'Gujarat',
        district: 'Anand',
        market: 'Anand(Veg,Yard,Anand)',
        commodity: 'Brinjal'
    },
    {
        state: 'Gujarat',
        district: 'Anand',
        market: 'Anand(Veg,Yard,Anand)',
        commodity: 'Green Chilli'
    },
    {
        state: 'Gujarat',
        district: 'Anand',
        market: 'Anand(Veg,Yard,Anand)',
        commodity: 'Potato'
    },
    {
        state: 'Gujarat',
        district: 'Banaskanth',
        market: 'Deesa(Bhildi)',
        commodity: 'Bajra(Pearl Millet/Cumbu)'
    },
    {
        state: 'Gujarat',
        district: 'Banaskanth',
        market: 'Deesa(Deesa Veg Yard)',
        commodity: 'Cauliflower'
    },
    {
        state: 'Gujarat',
        district: 'Banaskanth',
        market: 'Deesa(Deesa Veg Yard)',
        commodity: 'Lemon'
    },
    {
        state: 'Gujarat',
        district: 'Banaskanth',
        market: 'Deesa(Deesa Veg Yard)',
        commodity: 'Orange'
    },
    {
        state: 'Gujarat',
        district: 'Banaskanth',
        market: 'Deesa(Deesa Veg Yard)',
        commodity: 'Pomegranate'
    },
    {
        state: 'Gujarat',
        district: 'Dahod',
        market: 'Dahod',
        commodity: 'Arhar (Tur/Red Gram)(Whole)'
    },
    {
        state: 'Gujarat',
        district: 'Dahod',
        market: 'Dahod',
        commodity: 'Bengal Gram(Gram)(Whole)'
    },
    {
        state: 'Gujarat',
        district: 'Dahod',
        market: 'Dahod',
        commodity: 'Paddy(Dhan)(Common)'
    },
    {
        state: 'Gujarat',
        district: 'Dahod',
        market: 'Dahod(Veg. Market)',
        commodity: 'Cabbage'
    },
    {
        state: 'Gujarat',
        district: 'Dahod',
        market: 'Dahod(Veg. Market)',
        commodity: 'Coriander(Leaves)'
    },
    {
        state: 'Gujarat',
        district: 'Dahod',
        market: 'Dahod(Veg. Market)',
        commodity: 'Drumstick'
    },
    {
        state: 'Gujarat',
        district: 'Dahod',
        market: 'Dahod(Veg. Market)',
        commodity: 'Lemon'
    },
    {
        state: 'Gujarat',
        district: 'Dahod',
        market: 'Dahod(Veg. Market)',
        commodity: 'Potato'
    },
    {
        state: 'Gujarat',
        district: 'Dahod',
        market: 'Dahod(Veg. Market)',
        commodity: 'Pumpkin'
    },
    {
        state: 'Gujarat',
        district: 'Gandhinagar',
        market: 'Dehgam',
        commodity: 'Bajra(Pearl Millet/Cumbu)'
    },
    {
        state: 'Gujarat',
        district: 'Gandhinagar',
        market: 'Dehgam',
        commodity: 'Paddy(Dhan)(Common)'
    },
    {
        state: 'Gujarat',
        district: 'Gandhinagar',
        market: 'Mansa(Manas Veg Yard)',
        commodity: 'Ridgeguard(Tori)'
    },
    {
        state: 'Gujarat',
        district: 'Jamnagar',
        market: 'Dhrol',
        commodity: 'Cummin Seed(Jeera)'
    },
    {
        state: 'Gujarat',
        district: 'Jamnagar',
        market: 'Jamnagar',
        commodity: 'Ajwan'
    },
    {
        state: 'Gujarat',
        district: 'Jamnagar',
        market: 'Jamnagar',
        commodity: 'Cummin Seed(Jeera)'
    },
    {
        state: 'Gujarat',
        district: 'Jamnagar',
        market: 'Jamnagar',
        commodity: 'Ground Nut Seed'
    },
    {
        state: 'Gujarat',
        district: 'Junagarh',
        market: 'Talalagir',
        commodity: 'Brinjal'
    },
    {
        state: 'Gujarat',
        district: 'Junagarh',
        market: 'Talalagir',
        commodity: 'Cabbage'
    },
    {
        state: 'Gujarat',
        district: 'Junagarh',
        market: 'Talalagir',
        commodity: 'Kartali (Kantola)'
    },
    {
        state: 'Gujarat',
        district: 'Mehsana',
        market: 'Visnagar',
        commodity: 'Bajra(Pearl Millet/Cumbu)'
    },
    {
        state: 'Gujarat',
        district: 'Mehsana',
        market: 'Visnagar',
        commodity: 'Potato'
    },
    {
        state: 'Gujarat',
        district: 'Mehsana',
        market: 'Visnagar',
        commodity: 'Wheat'
    },
    {
        state: 'Gujarat',
        district: 'Morbi',
        market: 'Vankaner',
        commodity: 'Wheat'
    },
    {
        state: 'Gujarat',
        district: 'Patan',
        market: 'Sami',
        commodity: 'Suva (Dill Seed)'
    },
    {
        state: 'Gujarat',
        district: 'Patan',
        market: 'Siddhpur',
        commodity: 'Bajra(Pearl Millet/Cumbu)'
    },
    {
        state: 'Gujarat',
        district: 'Rajkot',
        market: 'Jasdan',
        commodity: 'Green Gram (Moong)(Whole)'
    },
    {
        state: 'Gujarat',
        district: 'Rajkot',
        market: 'Jasdan',
        commodity: 'Groundnut'
    },
    {
        state: 'Gujarat',
        district: 'Rajkot',
        market: 'Jasdan',
        commodity: 'Soyabean'
    },
    {
        state: 'Gujarat',
        district: 'Rajkot',
        market: 'Jasdan',
        commodity: 'Wheat'
    },
    {
        state: 'Gujarat',
        district: 'Rajkot',
        market: 'Morbi',
        commodity: 'Bajra(Pearl Millet/Cumbu)'
    },
    {
        state: 'Gujarat',
        district: 'Rajkot',
        market: 'Morbi',
        commodity: 'Bengal Gram(Gram)(Whole)'
    },
    {
        state: 'Gujarat',
        district: 'Rajkot',
        market: 'Morbi',
        commodity: 'Bottle gourd'
    },
    {
        state: 'Gujarat',
        district: 'Rajkot',
        market: 'Morbi',
        commodity: 'Groundnut'
    },
    {
        state: 'Gujarat',
        district: 'Rajkot',
        market: 'Rajkot',
        commodity: 'Ground Nut Seed'
    },
    {
        state: 'Gujarat',
        district: 'Rajkot',
        market: 'Rajkot',
        commodity: 'Jowar(Sorghum)'
    },
    {
        state: 'Gujarat',
        district: 'Rajkot',
        market: 'Rajkot',
        commodity: 'Methi Seeds'
    },
    {
        state: 'Gujarat',
        district: 'Rajkot',
        market: 'Rajkot(Ghee Peeth)',
        commodity: 'Bhindi(Ladies Finger)'
    },
    {
        state: 'Gujarat',
        district: 'Rajkot',
        market: 'Rajkot(Ghee Peeth)',
        commodity: 'Brinjal'
    },
    {
        state: 'Gujarat',
        district: 'Rajkot',
        market: 'Rajkot(Ghee Peeth)',
        commodity: 'Onion'
    },
    {
        state: 'Gujarat',
        district: 'Rajkot',
        market: 'Rajkot(Ghee Peeth)',
        commodity: 'Potato'
    },
    {
        state: 'Gujarat',
        district: 'Surat',
        market: 'Surat',
        commodity: 'Cauliflower'
    },
    {
        state: 'Gujarat',
        district: 'Surat',
        market: 'Surat',
        commodity: 'Cluster beans'
    },
    {
        state: 'Gujarat',
        district: 'Surat',
        market: 'Surat',
        commodity: 'Mango (Raw-Ripe)'
    },
    {
        state: 'Gujarat',
        district: 'Surat',
        market: 'Surat',
        commodity: 'Peas cod'
    },
    {
        state: 'Gujarat',
        district: 'Surat',
        market: 'Surat',
        commodity: 'Pointed gourd (Parval)'
    },
    {
        state: 'Gujarat',
        district: 'Surat',
        market: 'Surat',
        commodity: 'Sweet Potato'
    },
    {
        state: 'Gujarat',
        district: 'Surendranagar',
        market: 'Dhragradhra',
        commodity: 'Isabgul (Psyllium)'
    },
    {
        state: 'Gujarat',
        district: 'Surendranagar',
        market: 'Vadhvan',
        commodity: 'Carrot'
    },
    {
        state: 'Gujarat',
        district: 'Surendranagar',
        market: 'Vadhvan',
        commodity: 'Cauliflower'
    },
    {
        state: 'Gujarat',
        district: 'Surendranagar',
        market: 'Vadhvan',
        commodity: 'Coriander(Leaves)'
    },
    {
        state: 'Gujarat',
        district: 'Surendranagar',
        market: 'Vadhvan',
        commodity: 'Green Chilli'
    },
    {
        state: 'Gujarat',
        district: 'Surendranagar',
        market: 'Vadhvan',
        commodity: 'Methi(Leaves)'
    },
    {
        state: 'Gujarat',
        district: 'Surendranagar',
        market: 'Vadhvan',
        commodity: 'Papaya (Raw)'
    },
    {
        state: 'Gujarat',
        district: 'Vadodara(Baroda)',
        market: 'Padra',
        commodity: 'Bottle gourd'
    },
    {
        state: 'Gujarat',
        district: 'Vadodara(Baroda)',
        market: 'Padra',
        commodity: 'Brinjal'
    },
    {
        state: 'Gujarat',
        district: 'Vadodara(Baroda)',
        market: 'Padra',
        commodity: 'Lemon'
    },
    {
        state: 'Gujarat',
        district: 'Vadodara(Baroda)',
        market: 'Padra',
        commodity: 'Little gourd (Kundru)'
    },
    {
        state: 'Gujarat',
        district: 'Vadodara(Baroda)',
        market: 'Padra',
        commodity: 'Onion'
    },
    {
        state: 'Gujarat',
        district: 'Vadodara(Baroda)',
        market: 'Padra',
        commodity: 'Tomato'
    },
    {
        state: 'Gujarat',
        district: 'Amreli',
        market: 'Amreli',
        commodity: 'Methi Seeds'
    },
    {
        state: 'Gujarat',
        district: 'Amreli',
        market: 'Amreli',
        commodity: 'Sesamum(Sesame,Gingelly,Til)'
    },
    {
        state: 'Gujarat',
        district: 'Rajkot',
        market: 'Jasdan',
        commodity: 'Mustard'
    },
    {
        state: 'Gujarat',
        district: 'Rajkot',
        market: 'Morbi',
        commodity: 'Bhindi(Ladies Finger)'
    },
    {
        state: 'Gujarat',
        district: 'Rajkot',
        market: 'Morbi',
        commodity: 'Cotton'
    },
    {
        state: 'Gujarat',
        district: 'Rajkot',
        market: 'Morbi',
        commodity: 'Green Chilli'
    },
    {
        state: 'Gujarat',
        district: 'Rajkot',
        market: 'Morbi',
        commodity: 'Guar'
    },
    {
        state: 'Gujarat',
        district: 'Rajkot',
        market: 'Morbi',
        commodity: 'Sesamum(Sesame,Gingelly,Til)'
    },
    {
        state: 'Gujarat',
        district: 'Rajkot',
        market: 'Rajkot',
        commodity: 'Green Gram (Moong)(Whole)'
    },
    {
        state: 'Gujarat',
        district: 'Rajkot',
        market: 'Rajkot',
        commodity: 'Sesamum(Sesame,Gingelly,Til)'
    },
    {
        state: 'Gujarat',
        district: 'Rajkot',
        market: 'Rajkot',
        commodity: 'Wheat'
    },
    {
        state: 'Gujarat',
        district: 'Rajkot',
        market: 'Rajkot(Ghee Peeth)',
        commodity: 'Lemon'
    },
    {
        state: 'Gujarat',
        district: 'Sabarkantha',
        market: 'Khedbrahma',
        commodity: 'Bajra(Pearl Millet/Cumbu)'
    },
    {
        state: 'Gujarat',
        district: 'Sabarkantha',
        market: 'Khedbrahma',
        commodity: 'Wheat'
    },
    {
        state: 'Gujarat',
        district: 'Surat',
        market: 'Bardoli(Katod)',
        commodity: 'Brinjal'
    },
    {
        state: 'Gujarat',
        district: 'Surat',
        market: 'Surat',
        commodity: 'Banana - Green'
    },
    {
        state: 'Gujarat',
        district: 'Surat',
        market: 'Surat',
        commodity: 'Beetroot'
    },
    {
        state: 'Gujarat',
        district: 'Surat',
        market: 'Surat',
        commodity: 'Carrot'
    },
    {
        state: 'Gujarat',
        district: 'Surat',
        market: 'Surat',
        commodity: 'Cowpea(Veg)'
    },
    {
        state: 'Gujarat',
        district: 'Surat',
        market: 'Surat',
        commodity: 'Lemon'
    },
    {
        state: 'Gujarat',
        district: 'Surat',
        market: 'Surat',
        commodity: 'Onion'
    },
    {
        state: 'Gujarat',
        district: 'Surat',
        market: 'Surat',
        commodity: 'Pegeon Pea (Arhar Fali)'
    },
    {
        state: 'Gujarat',
        district: 'Surat',
        market: 'Surat',
        commodity: 'Pumpkin'
    },
    {
        state: 'Gujarat',
        district: 'Surat',
        market: 'Surat',
        commodity: 'Sponge gourd'
    },
    {
        state: 'Gujarat',
        district: 'Surendranagar',
        market: 'Chotila',
        commodity: 'Wheat'
    },
    {
        state: 'Gujarat',
        district: 'Surendranagar',
        market: 'Dasada Patadi',
        commodity: 'Castor Seed'
    },
    {
        state: 'Gujarat',
        district: 'Surendranagar',
        market: 'Dhragradhra',
        commodity: 'Castor Seed'
    },
    {
        state: 'Gujarat',
        district: 'Surendranagar',
        market: 'Dhragradhra',
        commodity: 'Cummin Seed(Jeera)'
    },
    {
        state: 'Haryana',
        district: 'Gurgaon',
        market: 'Pataudi',
        commodity: 'Cabbage'
    },
    {
        state: 'Haryana',
        district: 'Gurgaon',
        market: 'Pataudi',
        commodity: 'Mango'
    },
    {
        state: 'Haryana',
        district: 'Hissar',
        market: 'Barwala(Hisar)',
        commodity: 'Cabbage'
    },
    {
        state: 'Haryana',
        district: 'Hissar',
        market: 'Barwala(Hisar)',
        commodity: 'Onion'
    },
    {
        state: 'Haryana',
        district: 'Hissar',
        market: 'Barwala(Hisar)',
        commodity: 'Round gourd'
    },
    {
        state: 'Haryana',
        district: 'Hissar',
        market: 'Barwala(Hisar)',
        commodity: 'Tomato'
    },
    {
        state: 'Haryana',
        district: 'Hissar',
        market: 'Hansi',
        commodity: 'Cucumbar(Kheera)'
    },
    {
        state: 'Haryana',
        district: 'Hissar',
        market: 'Hansi',
        commodity: 'Peas Wet'
    },
    {
        state: 'Haryana',
        district: 'Hissar',
        market: 'Hansi',
        commodity: 'Tinda'
    },
    {
        state: 'Haryana',
        district: 'Hissar',
        market: 'Uklana',
        commodity: 'Cucumbar(Kheera)'
    },
    {
        state: 'Haryana',
        district: 'Hissar',
        market: 'Uklana',
        commodity: 'Mango'
    },
    {
        state: 'Haryana',
        district: 'Hissar',
        market: 'Uklana',
        commodity: 'Onion'
    },
    {
        state: 'Haryana',
        district: 'Jhajar',
        market: 'Bahadurgarh',
        commodity: 'Brinjal'
    },
    {
        state: 'Haryana',
        district: 'Jhajar',
        market: 'Bahadurgarh',
        commodity: 'Cucumbar(Kheera)'
    },
    {
        state: 'Haryana',
        district: 'Jhajar',
        market: 'Bahadurgarh',
        commodity: 'Lemon'
    },
    {
        state: 'Haryana',
        district: 'Jhajar',
        market: 'Bahadurgarh',
        commodity: 'Mango'
    },
    {
        state: 'Haryana',
        district: 'Jhajar',
        market: 'Bahadurgarh',
        commodity: 'Onion'
    },
    {
        state: 'Haryana',
        district: 'Jhajar',
        market: 'Bahadurgarh',
        commodity: 'Tinda'
    },
    {
        state: 'Haryana',
        district: 'Jind',
        market: 'Jind',
        commodity: 'Potato'
    },
    {
        state: 'Haryana',
        district: 'Jind',
        market: 'Narwana',
        commodity: 'Bottle gourd'
    },
    {
        state: 'Haryana',
        district: 'Jind',
        market: 'Narwana',
        commodity: 'Brinjal'
    },
    {
        state: 'Haryana',
        district: 'Jind',
        market: 'Safidon',
        commodity: 'Tomato'
    },
    {
        state: 'Haryana',
        district: 'Kaithal',
        market: 'Cheeka',
        commodity: 'Onion'
    },
    {
        state: 'Haryana',
        district: 'Kaithal',
        market: 'Dhand',
        commodity: 'Potato'
    },
    {
        state: 'Haryana',
        district: 'Kaithal',
        market: 'Siwan',
        commodity: 'Bhindi(Ladies Finger)'
    },
    {
        state: 'Haryana',
        district: 'Karnal',
        market: 'Gharaunda',
        commodity: 'Potato'
    },
    {
        state: 'Haryana',
        district: 'Kurukshetra',
        market: 'Ladwa',
        commodity: 'Apple'
    },
    {
        state: 'Haryana',
        district: 'Kurukshetra',
        market: 'Ladwa',
        commodity: 'Brinjal'
    },
    {
        state: 'Haryana',
        district: 'Kurukshetra',
        market: 'Ladwa',
        commodity: 'Mousambi(Sweet Lime)'
    },
    {
        state: 'Haryana',
        district: 'Kurukshetra',
        market: 'Ladwa',
        commodity: 'Pumpkin'
    },
    {
        state: 'Haryana',
        district: 'Kurukshetra',
        market: 'Pehowa',
        commodity: 'Tomato'
    },
    {
        state: 'Haryana',
        district: 'Kurukshetra',
        market: 'Shahabad',
        commodity: 'Cauliflower'
    },
    {
        state: 'Haryana',
        district: 'Kurukshetra',
        market: 'Shahabad',
        commodity: 'Peas Wet'
    },
    {
        state: 'Haryana',
        district: 'Kurukshetra',
        market: 'Shahabad',
        commodity: 'Pumpkin'
    },
    {
        state: 'Haryana',
        district: 'Kurukshetra',
        market: 'Shahabad',
        commodity: 'Raddish'
    },
    {
        state: 'Haryana',
        district: 'Mahendragarh-Narnaul',
        market: 'Mohindergarh',
        commodity: 'Apple'
    },
    {
        state: 'Haryana',
        district: 'Mahendragarh-Narnaul',
        market: 'Mohindergarh',
        commodity: 'Garlic'
    },
    {
        state: 'Haryana',
        district: 'Mahendragarh-Narnaul',
        market: 'Mohindergarh',
        commodity: 'Mango (Raw-Ripe)'
    },
    {
        state: 'Haryana',
        district: 'Mahendragarh-Narnaul',
        market: 'Mohindergarh',
        commodity: 'Spinach'
    },
    {
        state: 'Haryana',
        district: 'Mahendragarh-Narnaul',
        market: 'Mohindergarh',
        commodity: 'Tomato'
    },
    {
        state: 'Haryana',
        district: 'Mahendragarh-Narnaul',
        market: 'Narnaul',
        commodity: 'Coriander(Leaves)'
    },
    {
        state: 'Haryana',
        district: 'Mahendragarh-Narnaul',
        market: 'Narnaul',
        commodity: 'Green Chilli'
    },
    {
        state: 'Haryana',
        district: 'Mahendragarh-Narnaul',
        market: 'Narnaul',
        commodity: 'Tinda'
    },
    {
        state: 'Haryana',
        district: 'Mewat',
        market: 'Punhana',
        commodity: 'Bhindi(Ladies Finger)'
    },
    {
        state: 'Haryana',
        district: 'Mewat',
        market: 'Punhana',
        commodity: 'Brinjal'
    },
    {
        state: 'Haryana',
        district: 'Ambala',
        market: 'Ambala Cantt.',
        commodity: 'Bhindi(Ladies Finger)'
    },
    {
        state: 'Haryana',
        district: 'Ambala',
        market: 'Ambala Cantt.',
        commodity: 'Bitter gourd'
    },
    {
        state: 'Haryana',
        district: 'Ambala',
        market: 'Shahzadpur',
        commodity: 'Bhindi(Ladies Finger)'
    },
    {
        state: 'Haryana',
        district: 'Ambala',
        market: 'Shahzadpur',
        commodity: 'Cabbage'
    },
    {
        state: 'Haryana',
        district: 'Bhiwani',
        market: 'Bhiwani',
        commodity: 'Cabbage'
    },
    {
        state: 'Haryana',
        district: 'Bhiwani',
        market: 'Siwani',
        commodity: 'Guar Seed(Cluster Beans Seed)'
    },
    {
        state: 'Haryana',
        district: 'Fatehabad',
        market: 'Fatehabad',
        commodity: 'Apple'
    },
    {
        state: 'Haryana',
        district: 'Fatehabad',
        market: 'Fatehabad',
        commodity: 'Potato'
    },
    {
        state: 'Haryana',
        district: 'Palwal',
        market: 'Hodal',
        commodity: 'Cucumbar(Kheera)'
    },
    {
        state: 'Haryana',
        district: 'Palwal',
        market: 'Hodal',
        commodity: 'Paddy(Dhan)(Common)'
    },
    {
        state: 'Haryana',
        district: 'Palwal',
        market: 'Palwal',
        commodity: 'Pomegranate'
    },
    {
        state: 'Haryana',
        district: 'Palwal',
        market: 'Palwal',
        commodity: 'Potato'
    },
    {
        state: 'Haryana',
        district: 'Panchkula',
        market: 'New Grain Market , Panchkula',
        commodity: 'Onion'
    },
    {
        state: 'Haryana',
        district: 'Panchkula',
        market: 'Raipur Rai',
        commodity: 'Mango'
    },
    {
        state: 'Haryana',
        district: 'Panipat',
        market: 'Samalkha',
        commodity: 'Tomato'
    },
    {
        state: 'Haryana',
        district: 'Rohtak',
        market: 'Meham',
        commodity: 'Mango'
    },
    {
        state: 'Haryana',
        district: 'Rohtak',
        market: 'Rohtak',
        commodity: 'Mango'
    },
    {
        state: 'Haryana',
        district: 'Rohtak',
        market: 'Rohtak',
        commodity: 'Potato'
    },
    {
        state: 'Haryana',
        district: 'Sonipat',
        market: 'Ganaur',
        commodity: 'Apple'
    },
    {
        state: 'Haryana',
        district: 'Sonipat',
        market: 'Ganaur',
        commodity: 'Bhindi(Ladies Finger)'
    },
    {
        state: 'Haryana',
        district: 'Sonipat',
        market: 'Ganaur',
        commodity: 'Cucumbar(Kheera)'
    },
    {
        state: 'Haryana',
        district: 'Sonipat',
        market: 'Gohana',
        commodity: 'Brinjal'
    },
    {
        state: 'Haryana',
        district: 'Sonipat',
        market: 'Gohana',
        commodity: 'Chikoos(Sapota)'
    },
    {
        state: 'Haryana',
        district: 'Sonipat',
        market: 'Gohana',
        commodity: 'Tinda'
    },
    {
        state: 'Haryana',
        district: 'Yamuna Nagar',
        market: 'Chhachrauli',
        commodity: 'Cucumbar(Kheera)'
    },
    {
        state: 'Haryana',
        district: 'Yamuna Nagar',
        market: 'Chhachrauli',
        commodity: 'Potato'
    },
    {
        state: 'Haryana',
        district: 'Yamuna Nagar',
        market: 'Chhachrauli',
        commodity: 'Tomato'
    },
    {
        state: 'Haryana',
        district: 'Yamuna Nagar',
        market: 'Jagadhri',
        commodity: 'Bottle gourd'
    },
    {
        state: 'Haryana',
        district: 'Yamuna Nagar',
        market: 'Jagadhri',
        commodity: 'Mango'
    },
    {
        state: 'Haryana',
        district: 'Yamuna Nagar',
        market: 'Jagadhri',
        commodity: 'Pomegranate'
    },
    {
        state: 'Haryana',
        district: 'Yamuna Nagar',
        market: 'Jagadhri',
        commodity: 'Tomato'
    },
    {
        state: 'Haryana',
        district: 'Yamuna Nagar',
        market: 'Sadhaura',
        commodity: 'Mango'
    },
    {
        state: 'Haryana',
        district: 'Palwal',
        market: 'Hodal',
        commodity: 'Lemon'
    },
    {
        state: 'Haryana',
        district: 'Palwal',
        market: 'Hodal',
        commodity: 'Tomato'
    },
    {
        state: 'Haryana',
        district: 'Palwal',
        market: 'Palwal',
        commodity: 'Mango'
    },
    {
        state: 'Haryana',
        district: 'Palwal',
        market: 'Palwal',
        commodity: 'Onion'
    },
    {
        state: 'Haryana',
        district: 'Panchkula',
        market: 'New Grain Market , Panchkula',
        commodity: 'Tomato'
    },
    {
        state: 'Haryana',
        district: 'Panchkula',
        market: 'New Grain Market , Panchkula',
        commodity: 'Water Melon'
    },
    {
        state: 'Haryana',
        district: 'Panipat',
        market: 'Panipat',
        commodity: 'Mango'
    },
    {
        state: 'Haryana',
        district: 'Panipat',
        market: 'Panipat',
        commodity: 'Potato'
    },
    {
        state: 'Haryana',
        district: 'Panipat',
        market: 'Samalkha',
        commodity: 'Brinjal'
    },
    {
        state: 'Haryana',
        district: 'Panipat',
        market: 'Samalkha',
        commodity: 'Sponge gourd'
    },
    {
        state: 'Haryana',
        district: 'Rohtak',
        market: 'Rohtak',
        commodity: 'Onion'
    },
    {
        state: 'Haryana',
        district: 'Rohtak',
        market: 'Rohtak',
        commodity: 'Tomato'
    },
    {
        state: 'Haryana',
        district: 'Sonipat',
        market: 'Ganaur',
        commodity: 'Capsicum'
    },
    {
        state: 'Haryana',
        district: 'Sonipat',
        market: 'Ganaur',
        commodity: 'Garlic'
    },
    {
        state: 'Haryana',
        district: 'Sonipat',
        market: 'Ganaur',
        commodity: 'Green Chilli'
    },
    {
        state: 'Haryana',
        district: 'Sonipat',
        market: 'Ganaur',
        commodity: 'Mango (Raw-Ripe)'
    },
    {
        state: 'Haryana',
        district: 'Sonipat',
        market: 'Ganaur',
        commodity: 'Mousambi(Sweet Lime)'
    },
    {
        state: 'Haryana',
        district: 'Sonipat',
        market: 'Ganaur',
        commodity: 'Onion'
    },
    {
        state: 'Haryana',
        district: 'Sonipat',
        market: 'Ganaur',
        commodity: 'Water Melon'
    },
    {
        state: 'Haryana',
        district: 'Sonipat',
        market: 'Ganaur',
        commodity: 'Yam (Ratalu)'
    },
    {
        state: 'Haryana',
        district: 'Yamuna Nagar',
        market: 'Chhachrauli',
        commodity: 'Mango'
    },
    {
        state: 'Haryana',
        district: 'Yamuna Nagar',
        market: 'Chhachrauli',
        commodity: 'Ridgeguard(Tori)'
    },
    {
        state: 'Haryana',
        district: 'Yamuna Nagar',
        market: 'Jagadhri',
        commodity: 'Apple'
    },
    {
        state: 'Himachal Pradesh',
        district: 'Chamba',
        market: 'Chamba',
        commodity: 'Apple'
    },
    {
        state: 'Himachal Pradesh',
        district: 'Chamba',
        market: 'Chamba',
        commodity: 'Mango'
    },
    {
        state: 'Himachal Pradesh',
        district: 'Chamba',
        market: 'Chamba',
        commodity: 'Onion'
    },
    {
        state: 'Himachal Pradesh',
        district: 'Chamba',
        market: 'Chamba',
        commodity: 'Papaya'
    },
    {
        state: 'Himachal Pradesh',
        district: 'Hamirpur',
        market: 'Hamirpur',
        commodity: 'Apple'
    },
    {
        state: 'Himachal Pradesh',
        district: 'Hamirpur',
        market: 'Hamirpur',
        commodity: 'Banana'
    },
    {
        state: 'Himachal Pradesh',
        district: 'Hamirpur',
        market: 'Hamirpur',
        commodity: 'Mango'
    },
    {
        state: 'Himachal Pradesh',
        district: 'Hamirpur',
        market: 'Hamirpur',
        commodity: 'Papaya'
    },
    {
        state: 'Himachal Pradesh',
        district: 'Hamirpur',
        market: 'Hamirpur(Nadaun)',
        commodity: 'Capsicum'
    },
    {
        state: 'Himachal Pradesh',
        district: 'Hamirpur',
        market: 'Hamirpur(Nadaun)',
        commodity: 'Colacasia'
    },
    {
        state: 'Himachal Pradesh',
        district: 'Hamirpur',
        market: 'Hamirpur(Nadaun)',
        commodity: 'Green Chilli'
    },
    {
        state: 'Himachal Pradesh',
        district: 'Hamirpur',
        market: 'Hamirpur(Nadaun)',
        commodity: 'Potato'
    },
    {
        state: 'Himachal Pradesh',
        district: 'Hamirpur',
        market: 'Hamirpur(Nadaun)',
        commodity: 'Squash(Chappal Kadoo)'
    },
    {
        state: 'Himachal Pradesh',
        district: 'Hamirpur',
        market: 'Hamirpur(Nadaun)',
        commodity: 'Tomato'
    },
    {
        state: 'Himachal Pradesh',
        district: 'Kangra',
        market: 'Kangra',
        commodity: 'Lemon'
    },
    {
        state: 'Himachal Pradesh',
        district: 'Kangra',
        market: 'Kangra',
        commodity: 'Pear(Marasebu)'
    },
    {
        state: 'Himachal Pradesh',
        district: 'Kangra',
        market: 'Kangra',
        commodity: 'Pineapple'
    },
    {
        state: 'Himachal Pradesh',
        district: 'Kangra',
        market: 'Kangra',
        commodity: 'Plum'
    },
    {
        state: 'Himachal Pradesh',
        district: 'Kangra',
        market: 'Kangra',
        commodity: 'Tinda'
    },
    {
        state: 'Himachal Pradesh',
        district: 'Kangra',
        market: 'Kangra(Jaisinghpur)',
        commodity: 'Capsicum'
    },
    {
        state: 'Himachal Pradesh',
        district: 'Kangra',
        market: 'Kangra(Jaisinghpur)',
        commodity: 'Carrot'
    },
    {
        state: 'Himachal Pradesh',
        district: 'Kangra',
        market: 'Kangra(Jaisinghpur)',
        commodity: 'Mango'
    },
    {
        state: 'Himachal Pradesh',
        district: 'Kangra',
        market: 'Kangra(Jaisinghpur)',
        commodity: 'Mousambi(Sweet Lime)'
    },
    {
        state: 'Himachal Pradesh',
        district: 'Kullu',
        market: 'Kullu',
        commodity: 'Pumpkin'
    },
    {
        state: 'Himachal Pradesh',
        district: 'Kullu',
        market: 'Kullu',
        commodity: 'Tomato'
    },
    {
        state: 'Himachal Pradesh',
        district: 'Mandi',
        market: 'Mandi(Mandi)',
        commodity: 'Banana'
    },
    {
        state: 'Himachal Pradesh',
        district: 'Mandi',
        market: 'Mandi(Mandi)',
        commodity: 'Bhindi(Ladies Finger)'
    },
    {
        state: 'Himachal Pradesh',
        district: 'Mandi',
        market: 'Mandi(Mandi)',
        commodity: 'Cabbage'
    },
    {
        state: 'Himachal Pradesh',
        district: 'Mandi',
        market: 'Mandi(Mandi)',
        commodity: 'Pumpkin'
    },
    {
        state: 'Himachal Pradesh',
        district: 'Mandi',
        market: 'Mandi(Mandi)',
        commodity: 'Raddish'
    },
    {
        state: 'Himachal Pradesh',
        district: 'Mandi',
        market: 'Mandi(Mandi)',
        commodity: 'Tomato'
    },
    {
        state: 'Himachal Pradesh',
        district: 'Shimla',
        market: 'Shimla',
        commodity: 'Papaya'
    },
    {
        state: 'Himachal Pradesh',
        district: 'Sirmore',
        market: 'Paonta Sahib',
        commodity: 'Carrot'
    },
    {
        state: 'Himachal Pradesh',
        district: 'Sirmore',
        market: 'Paonta Sahib',
        commodity: 'Colacasia'
    },
    {
        state: 'Himachal Pradesh',
        district: 'Sirmore',
        market: 'Paonta Sahib',
        commodity: 'Onion'
    },
    {
        state: 'Himachal Pradesh',
        district: 'Sirmore',
        market: 'Paonta Sahib',
        commodity: 'Tomato'
    },
    {
        state: 'Himachal Pradesh',
        district: 'Solan',
        market: 'Solan',
        commodity: 'Cabbage'
    },
    {
        state: 'Himachal Pradesh',
        district: 'Solan',
        market: 'Solan',
        commodity: 'Capsicum'
    },
    {
        state: 'Himachal Pradesh',
        district: 'Solan',
        market: 'Solan',
        commodity: 'Green Chilli'
    },
    {
        state: 'Himachal Pradesh',
        district: 'Solan',
        market: 'Solan',
        commodity: 'Onion'
    },
    {
        state: 'Himachal Pradesh',
        district: 'Una',
        market: 'Una',
        commodity: 'Capsicum'
    },
    {
        state: 'Himachal Pradesh',
        district: 'Una',
        market: 'Una',
        commodity: 'Green Chilli'
    },
    {
        state: 'Himachal Pradesh',
        district: 'Una',
        market: 'Una',
        commodity: 'Mango'
    },
    {
        state: 'Himachal Pradesh',
        district: 'Una',
        market: 'Una',
        commodity: 'Onion'
    },
    {
        state: 'Himachal Pradesh',
        district: 'Una',
        market: 'Una',
        commodity: 'Papaya'
    },
    {
        state: 'Himachal Pradesh',
        district: 'Una',
        market: 'Una',
        commodity: 'Pomegranate'
    },
    {
        state: 'Himachal Pradesh',
        district: 'Kangra',
        market: 'Kangra(Jaisinghpur)',
        commodity: 'Garlic'
    },
    {
        state: 'Himachal Pradesh',
        district: 'Kangra',
        market: 'Kangra(Jaisinghpur)',
        commodity: 'Guava'
    },
    {
        state: 'Himachal Pradesh',
        district: 'Kangra',
        market: 'Kangra(Jaisinghpur)',
        commodity: 'Lemon'
    },
    {
        state: 'Himachal Pradesh',
        district: 'Kangra',
        market: 'Kangra(Jaisinghpur)',
        commodity: 'Onion'
    },
    {
        state: 'Himachal Pradesh',
        district: 'Kangra',
        market: 'Kangra(Jaisinghpur)',
        commodity: 'Potato'
    },
    {
        state: 'Himachal Pradesh',
        district: 'Kullu',
        market: 'Kullu',
        commodity: 'Bhindi(Ladies Finger)'
    },
    {
        state: 'Himachal Pradesh',
        district: 'Kullu',
        market: 'Kullu',
        commodity: 'Green Chilli'
    },
    {
        state: 'Himachal Pradesh',
        district: 'Kullu',
        market: 'Kullu',
        commodity: 'Papaya'
    },
    {
        state: 'Himachal Pradesh',
        district: 'Mandi',
        market: 'Mandi(Mandi)',
        commodity: 'Bottle gourd'
    },
    {
        state: 'Himachal Pradesh',
        district: 'Mandi',
        market: 'Mandi(Mandi)',
        commodity: 'Capsicum'
    },
    {
        state: 'Himachal Pradesh',
        district: 'Shimla',
        market: 'Shimla',
        commodity: 'Cauliflower'
    },
    {
        state: 'Himachal Pradesh',
        district: 'Shimla',
        market: 'Shimla',
        commodity: 'Cucumbar(Kheera)'
    },
    {
        state: 'Himachal Pradesh',
        district: 'Shimla',
        market: 'Shimla',
        commodity: 'Green Chilli'
    },
    {
        state: 'Himachal Pradesh',
        district: 'Shimla',
        market: 'Shimla',
        commodity: 'Mousambi(Sweet Lime)'
    },
    {
        state: 'Himachal Pradesh',
        district: 'Shimla',
        market: 'Shimla',
        commodity: 'Spinach'
    },
    {
        state: 'Himachal Pradesh',
        district: 'Shimla',
        market: 'Shimla and Kinnaur(Rampur)',
        commodity: 'Capsicum'
    },
    {
        state: 'Himachal Pradesh',
        district: 'Sirmore',
        market: 'Paonta Sahib',
        commodity: 'Bhindi(Ladies Finger)'
    },
    {
        state: 'Himachal Pradesh',
        district: 'Solan',
        market: 'Solan',
        commodity: 'Banana'
    },
    {
        state: 'Himachal Pradesh',
        district: 'Solan',
        market: 'Solan',
        commodity: 'Brinjal'
    },
    {
        state: 'Himachal Pradesh',
        district: 'Solan',
        market: 'Solan',
        commodity: 'Cauliflower'
    },
    {
        state: 'Himachal Pradesh',
        district: 'Solan',
        market: 'Solan',
        commodity: 'Lemon'
    },
    {
        state: 'Himachal Pradesh',
        district: 'Solan',
        market: 'Solan',
        commodity: 'Mango'
    },
    {
        state: 'Himachal Pradesh',
        district: 'Solan',
        market: 'Solan',
        commodity: 'Pomegranate'
    },
    {
        state: 'Himachal Pradesh',
        district: 'Una',
        market: 'Una',
        commodity: 'Apple'
    },
    {
        state: 'Himachal Pradesh',
        district: 'Una',
        market: 'Una',
        commodity: 'Banana'
    },
    {
        state: 'Himachal Pradesh',
        district: 'Una',
        market: 'Una',
        commodity: 'Cabbage'
    },
    {
        state: 'Himachal Pradesh',
        district: 'Una',
        market: 'Una',
        commodity: 'Plum'
    },
    {
        state: 'Himachal Pradesh',
        district: 'Una',
        market: 'Una',
        commodity: 'Pumpkin'
    },
    {
        state: 'Himachal Pradesh',
        district: 'Chamba',
        market: 'Chamba',
        commodity: 'Bhindi(Ladies Finger)'
    },
    {
        state: 'Himachal Pradesh',
        district: 'Chamba',
        market: 'Chamba',
        commodity: 'Mashrooms'
    },
    {
        state: 'Himachal Pradesh',
        district: 'Chamba',
        market: 'Chamba',
        commodity: 'Sponge gourd'
    },
    {
        state: 'Himachal Pradesh',
        district: 'Hamirpur',
        market: 'Hamirpur',
        commodity: 'Bhindi(Ladies Finger)'
    },
    {
        state: 'Himachal Pradesh',
        district: 'Hamirpur',
        market: 'Hamirpur',
        commodity: 'Bitter gourd'
    },
    {
        state: 'Himachal Pradesh',
        district: 'Hamirpur',
        market: 'Hamirpur',
        commodity: 'Capsicum'
    },
    {
        state: 'Himachal Pradesh',
        district: 'Hamirpur',
        market: 'Hamirpur',
        commodity: 'Green Chilli'
    },
    {
        state: 'Himachal Pradesh',
        district: 'Hamirpur',
        market: 'Hamirpur',
        commodity: 'Onion'
    },
    {
        state: 'Himachal Pradesh',
        district: 'Hamirpur',
        market: 'Hamirpur',
        commodity: 'Pear(Marasebu)'
    },
    {
        state: 'Himachal Pradesh',
        district: 'Hamirpur',
        market: 'Hamirpur',
        commodity: 'Plum'
    },
    {
        state: 'Himachal Pradesh',
        district: 'Hamirpur',
        market: 'Hamirpur',
        commodity: 'Squash(Chappal Kadoo)'
    },
    {
        state: 'Himachal Pradesh',
        district: 'Hamirpur',
        market: 'Hamirpur',
        commodity: 'Tinda'
    },
    {
        state: 'Himachal Pradesh',
        district: 'Hamirpur',
        market: 'Hamirpur(Nadaun)',
        commodity: 'Garlic'
    },
    {
        state: 'Himachal Pradesh',
        district: 'Hamirpur',
        market: 'Hamirpur(Nadaun)',
        commodity: 'Onion'
    },
    {
        state: 'Himachal Pradesh',
        district: 'Kangra',
        market: 'Kangra',
        commodity: 'Capsicum'
    },
    {
        state: 'Himachal Pradesh',
        district: 'Kangra',
        market: 'Kangra',
        commodity: 'Green Chilli'
    },
    {
        state: 'Himachal Pradesh',
        district: 'Kangra',
        market: 'Kangra',
        commodity: 'Guava'
    },
    {
        state: 'Himachal Pradesh',
        district: 'Kangra',
        market: 'Kangra',
        commodity: 'Mango'
    },
    {
        state: 'Himachal Pradesh',
        district: 'Kangra',
        market: 'Kangra',
        commodity: 'Mousambi(Sweet Lime)'
    },
    {
        state: 'Himachal Pradesh',
        district: 'Kangra',
        market: 'Kangra',
        commodity: 'Papaya'
    },
    {
        state: 'Himachal Pradesh',
        district: 'Kangra',
        market: 'Kangra(Jaisinghpur)',
        commodity: 'Apple'
    },
    {
        state: 'Himachal Pradesh',
        district: 'Kangra',
        market: 'Kangra(Jaisinghpur)',
        commodity: 'Cauliflower'
    },
    {
        state: 'Himachal Pradesh',
        district: 'Mandi',
        market: 'Mandi(Mandi)',
        commodity: 'Cucumbar(Kheera)'
    },
    {
        state: 'Himachal Pradesh',
        district: 'Mandi',
        market: 'Mandi(Mandi)',
        commodity: 'French Beans (Frasbean)'
    },
    {
        state: 'Himachal Pradesh',
        district: 'Mandi',
        market: 'Mandi(Mandi)',
        commodity: 'Mango'
    },
    {
        state: 'Himachal Pradesh',
        district: 'Mandi',
        market: 'Mandi(Mandi)',
        commodity: 'Papaya'
    },
    {
        state: 'Jammu and Kashmir',
        district: 'Anantnag',
        market: 'Ashahipora (Anantnagh)',
        commodity: 'Papaya'
    },
    {
        state: 'Jammu and Kashmir',
        district: 'Jammu',
        market: 'Narwal Jammu (F&V)',
        commodity: 'Apple'
    },
    {
        state: 'Jammu and Kashmir',
        district: 'Jammu',
        market: 'Narwal Jammu (F&V)',
        commodity: 'Green Chilli'
    },
    {
        state: 'Jammu and Kashmir',
        district: 'Jammu',
        market: 'Narwal Jammu (F&V)',
        commodity: 'Little gourd (Kundru)'
    },
    {
        state: 'Jammu and Kashmir',
        district: 'Kathua',
        market: 'Kathua',
        commodity: 'Banana'
    },
    {
        state: 'Jammu and Kashmir',
        district: 'Kathua',
        market: 'Kathua',
        commodity: 'Pomegranate'
    },
    {
        state: 'Jammu and Kashmir',
        district: 'Pulwama',
        market: 'Shopian',
        commodity: 'Cherry'
    },
    {
        state: 'Jammu and Kashmir',
        district: 'Srinagar',
        market: 'Ganderbal',
        commodity: 'Pear(Marasebu)'
    },
    {
        state: 'Jammu and Kashmir',
        district: 'Srinagar',
        market: 'Parimpore',
        commodity: 'Bottle gourd'
    },
    {
        state: 'Jammu and Kashmir',
        district: 'Srinagar',
        market: 'Parimpore',
        commodity: 'Cabbage'
    },
    {
        state: 'Jammu and Kashmir',
        district: 'Srinagar',
        market: 'Parimpore',
        commodity: 'Cucumbar(Kheera)'
    },
    {
        state: 'Jammu and Kashmir',
        district: 'Srinagar',
        market: 'Parimpore',
        commodity: 'Papaya'
    },
    {
        state: 'Jammu and Kashmir',
        district: 'Srinagar',
        market: 'Parimpore',
        commodity: 'Water Melon'
    },
    {
        state: 'Jammu and Kashmir',
        district: 'Udhampur',
        market: 'Reasi',
        commodity: 'Bhindi(Ladies Finger)'
    },
    {
        state: 'Jammu and Kashmir',
        district: 'Udhampur',
        market: 'Reasi',
        commodity: 'Cucumbar(Kheera)'
    },
    {
        state: 'Jammu and Kashmir',
        district: 'Udhampur',
        market: 'Reasi',
        commodity: 'Knool Khol'
    },
    {
        state: 'Jammu and Kashmir',
        district: 'Udhampur',
        market: 'Reasi',
        commodity: 'Lemon'
    },
    {
        state: 'Jammu and Kashmir',
        district: 'Udhampur',
        market: 'Udhampur',
        commodity: 'Banana'
    },
    {
        state: 'Jammu and Kashmir',
        district: 'Udhampur',
        market: 'Udhampur',
        commodity: 'Bhindi(Ladies Finger)'
    },
    {
        state: 'Jammu and Kashmir',
        district: 'Udhampur',
        market: 'Udhampur',
        commodity: 'Cucumbar(Kheera)'
    },
    {
        state: 'Jammu and Kashmir',
        district: 'Udhampur',
        market: 'Udhampur',
        commodity: 'Garlic'
    },
    {
        state: 'Jammu and Kashmir',
        district: 'Udhampur',
        market: 'Reasi',
        commodity: 'Onion'
    },
    {
        state: 'Jammu and Kashmir',
        district: 'Udhampur',
        market: 'Reasi',
        commodity: 'Pomegranate'
    },
    {
        state: 'Jammu and Kashmir',
        district: 'Udhampur',
        market: 'Reasi',
        commodity: 'Sponge gourd'
    },
    {
        state: 'Jammu and Kashmir',
        district: 'Udhampur',
        market: 'Reasi',
        commodity: 'Water Melon'
    },
    {
        state: 'Jammu and Kashmir',
        district: 'Udhampur',
        market: 'Udhampur',
        commodity: 'Indian Beans (Seam)'
    },
    {
        state: 'Jammu and Kashmir',
        district: 'Jammu',
        market: 'Narwal Jammu (F&V)',
        commodity: 'Bhindi(Ladies Finger)'
    },
    {
        state: 'Jammu and Kashmir',
        district: 'Jammu',
        market: 'Narwal Jammu (F&V)',
        commodity: 'Bitter gourd'
    },
    {
        state: 'Jammu and Kashmir',
        district: 'Jammu',
        market: 'Narwal Jammu (F&V)',
        commodity: 'Mango'
    },
    {
        state: 'Jammu and Kashmir',
        district: 'Jammu',
        market: 'Narwal Jammu (F&V)',
        commodity: 'Potato'
    },
    {
        state: 'Jammu and Kashmir',
        district: 'Jammu',
        market: 'Narwal Jammu (F&V)',
        commodity: 'Pumpkin'
    },
    {
        state: 'Jammu and Kashmir',
        district: 'Jammu',
        market: 'Narwal Jammu (F&V)',
        commodity: 'Raddish'
    },
    {
        state: 'Jammu and Kashmir',
        district: 'Jammu',
        market: 'Narwal Jammu (F&V)',
        commodity: 'Tinda'
    },
    {
        state: 'Jammu and Kashmir',
        district: 'Kathua',
        market: 'Kathua',
        commodity: 'Cabbage'
    },
    {
        state: 'Jammu and Kashmir',
        district: 'Kathua',
        market: 'Kathua',
        commodity: 'Garlic'
    },
    {
        state: 'Jammu and Kashmir',
        district: 'Kathua',
        market: 'Kathua',
        commodity: 'Knool Khol'
    },
    {
        state: 'Jammu and Kashmir',
        district: 'Kathua',
        market: 'Kathua',
        commodity: 'Pineapple'
    },
    {
        state: 'Jammu and Kashmir',
        district: 'Kathua',
        market: 'Kathua',
        commodity: 'Potato'
    },
    {
        state: 'Jammu and Kashmir',
        district: 'Kathua',
        market: 'Kathua',
        commodity: 'Pumpkin'
    },
    {
        state: 'Jammu and Kashmir',
        district: 'Srinagar',
        market: 'Parimpore',
        commodity: 'Lemon'
    },
    {
        state: 'Jammu and Kashmir',
        district: 'Srinagar',
        market: 'Parimpore',
        commodity: 'Potato'
    },
    {
        state: 'Jammu and Kashmir',
        district: 'Srinagar',
        market: 'Parimpore',
        commodity: 'Spinach'
    },
    {
        state: 'Jammu and Kashmir',
        district: 'Anantnag',
        market: 'Ashahipora (Anantnagh)',
        commodity: 'Pineapple'
    },
    {
        state: 'Jammu and Kashmir',
        district: 'Baramulla',
        market: 'Nowpora',
        commodity: 'Pear(Marasebu)'
    },
    {
        state: 'Jammu and Kashmir',
        district: 'Baramulla',
        market: 'Nowpora',
        commodity: 'Plum'
    },
    {
        state: 'Jammu and Kashmir',
        district: 'Jammu',
        market: 'Narwal Jammu (F&V)',
        commodity: 'Carrot'
    },
    {
        state: 'Jammu and Kashmir',
        district: 'Jammu',
        market: 'Narwal Jammu (F&V)',
        commodity: 'Field Pea'
    },
    {
        state: 'Jammu and Kashmir',
        district: 'Jammu',
        market: 'Narwal Jammu (F&V)',
        commodity: 'Garlic'
    },
    {
        state: 'Jammu and Kashmir',
        district: 'Jammu',
        market: 'Narwal Jammu (F&V)',
        commodity: 'Mousambi(Sweet Lime)'
    },
    {
        state: 'Jammu and Kashmir',
        district: 'Kathua',
        market: 'Kathua',
        commodity: 'Cauliflower'
    },
    {
        state: 'Jammu and Kashmir',
        district: 'Kathua',
        market: 'Kathua',
        commodity: 'Indian Beans (Seam)'
    },
    {
        state: 'Jammu and Kashmir',
        district: 'Kathua',
        market: 'Kathua',
        commodity: 'Lemon'
    },
    {
        state: 'Jammu and Kashmir',
        district: 'Kathua',
        market: 'Kathua',
        commodity: 'Mango'
    },
    {
        state: 'Jammu and Kashmir',
        district: 'Kathua',
        market: 'Kathua',
        commodity: 'Onion'
    },
    {
        state: 'Jammu and Kashmir',
        district: 'Pulwama',
        market: 'Shopian',
        commodity: 'Plum'
    },
    {
        state: 'Jammu and Kashmir',
        district: 'Srinagar',
        market: 'Parimpore',
        commodity: 'Cauliflower'
    },
    {
        state: 'Jammu and Kashmir',
        district: 'Srinagar',
        market: 'Parimpore',
        commodity: 'Karbuja(Musk Melon)'
    },
    {
        state: 'Jammu and Kashmir',
        district: 'Srinagar',
        market: 'Parimpore',
        commodity: 'Mango'
    },
    {
        state: 'Jammu and Kashmir',
        district: 'Udhampur',
        market: 'Reasi',
        commodity: 'Apple'
    },
    {
        state: 'Jammu and Kashmir',
        district: 'Udhampur',
        market: 'Udhampur',
        commodity: 'Cabbage'
    },
    {
        state: 'Jammu and Kashmir',
        district: 'Udhampur',
        market: 'Udhampur',
        commodity: 'Onion'
    },
    {
        state: 'Jammu and Kashmir',
        district: 'Udhampur',
        market: 'Udhampur',
        commodity: 'Potato'
    },
    {
        state: 'Jammu and Kashmir',
        district: 'Udhampur',
        market: 'Udhampur',
        commodity: 'Tomato'
    },
    {
        state: 'Jammu and Kashmir',
        district: 'Jammu',
        market: 'Narwal Jammu (F&V)',
        commodity: 'Banana'
    },
    {
        state: 'Jammu and Kashmir',
        district: 'Jammu',
        market: 'Narwal Jammu (F&V)',
        commodity: 'Capsicum'
    },
    {
        state: 'Jammu and Kashmir',
        district: 'Jammu',
        market: 'Narwal Jammu (F&V)',
        commodity: 'Cauliflower'
    },
    {
        state: 'Jammu and Kashmir',
        district: 'Jammu',
        market: 'Narwal Jammu (F&V)',
        commodity: 'Colacasia'
    },
    {
        state: 'Jammu and Kashmir',
        district: 'Jammu',
        market: 'Narwal Jammu (F&V)',
        commodity: 'Cucumbar(Kheera)'
    },
    {
        state: 'Jammu and Kashmir',
        district: 'Jammu',
        market: 'Narwal Jammu (F&V)',
        commodity: 'Knool Khol'
    },
    {
        state: 'Jammu and Kashmir',
        district: 'Jammu',
        market: 'Narwal Jammu (F&V)',
        commodity: 'Lemon'
    },
    {
        state: 'Jammu and Kashmir',
        district: 'Jammu',
        market: 'Narwal Jammu (F&V)',
        commodity: 'Onion'
    },
    {
        state: 'Jammu and Kashmir',
        district: 'Jammu',
        market: 'Narwal Jammu (F&V)',
        commodity: 'Papaya'
    },
    {
        state: 'Jammu and Kashmir',
        district: 'Jammu',
        market: 'Narwal Jammu (F&V)',
        commodity: 'Pointed gourd (Parval)'
    },
    {
        state: 'Jammu and Kashmir',
        district: 'Jammu',
        market: 'Narwal Jammu (F&V)',
        commodity: 'Pomegranate'
    },
    {
        state: 'Jammu and Kashmir',
        district: 'Jammu',
        market: 'Narwal Jammu (F&V)',
        commodity: 'Round gourd'
    },
    {
        state: 'Jammu and Kashmir',
        district: 'Jammu',
        market: 'Narwal Jammu (F&V)',
        commodity: 'Tender Coconut'
    },
    {
        state: 'Jammu and Kashmir',
        district: 'Jammu',
        market: 'Narwal Jammu (F&V)',
        commodity: 'Tomato'
    },
    {
        state: 'Jammu and Kashmir',
        district: 'Kathua',
        market: 'Kathua',
        commodity: 'Bhindi(Ladies Finger)'
    },
    {
        state: 'Jammu and Kashmir',
        district: 'Kathua',
        market: 'Kathua',
        commodity: 'Capsicum'
    },
    {
        state: 'Jammu and Kashmir',
        district: 'Kathua',
        market: 'Kathua',
        commodity: 'Coriander(Leaves)'
    },
    {
        state: 'Jammu and Kashmir',
        district: 'Kathua',
        market: 'Kathua',
        commodity: 'Cucumbar(Kheera)'
    },
    {
        state: 'Jammu and Kashmir',
        district: 'Kathua',
        market: 'Kathua',
        commodity: 'Green Chilli'
    },
    {
        state: 'Jammu and Kashmir',
        district: 'Kathua',
        market: 'Kathua',
        commodity: 'Mousambi(Sweet Lime)'
    },
    {
        state: 'Jammu and Kashmir',
        district: 'Kathua',
        market: 'Kathua',
        commodity: 'Peas Wet'
    },
    {
        state: 'Jammu and Kashmir',
        district: 'Kathua',
        market: 'Kathua',
        commodity: 'Tomato'
    },
    {
        state: 'Jammu and Kashmir',
        district: 'Srinagar',
        market: 'Ganderbal',
        commodity: 'Apple'
    },
    {
        state: 'Jammu and Kashmir',
        district: 'Srinagar',
        market: 'Ganderbal',
        commodity: 'Plum'
    },
    {
        state: 'Jammu and Kashmir',
        district: 'Srinagar',
        market: 'Parimpore',
        commodity: 'Pomegranate'
    },
    {
        state: 'Jammu and Kashmir',
        district: 'Srinagar',
        market: 'Parimpore',
        commodity: 'Tomato'
    },
    {
        state: 'Jammu and Kashmir',
        district: 'Udhampur',
        market: 'Reasi',
        commodity: 'Banana'
    },
    {
        state: 'Jammu and Kashmir',
        district: 'Udhampur',
        market: 'Reasi',
        commodity: 'Capsicum'
    },
    {
        state: 'Jammu and Kashmir',
        district: 'Udhampur',
        market: 'Reasi',
        commodity: 'Cauliflower'
    },
    {
        state: 'Jammu and Kashmir',
        district: 'Udhampur',
        market: 'Reasi',
        commodity: 'Garlic'
    },
    {
        state: 'Jammu and Kashmir',
        district: 'Udhampur',
        market: 'Reasi',
        commodity: 'Papaya'
    },
    {
        state: 'Jammu and Kashmir',
        district: 'Udhampur',
        market: 'Udhampur',
        commodity: 'Bitter gourd'
    },
    {
        state: 'Jammu and Kashmir',
        district: 'Udhampur',
        market: 'Udhampur',
        commodity: 'Cauliflower'
    },
    {
        state: 'Jammu and Kashmir',
        district: 'Anantnag',
        market: 'Ashahipora (Anantnagh)',
        commodity: 'Banana'
    },
    {
        state: 'Jammu and Kashmir',
        district: 'Anantnag',
        market: 'Ashahipora (Anantnagh)',
        commodity: 'Mango'
    },
    {
        state: 'Jammu and Kashmir',
        district: 'Baramulla',
        market: 'Nowpora',
        commodity: 'Apple'
    },
    {
        state: 'Jammu and Kashmir',
        district: 'Jammu',
        market: 'Narwal Jammu (F&V)',
        commodity: 'Bottle gourd'
    },
    {
        state: 'Karnataka',
        district: 'Belgaum',
        market: 'Belgaum',
        commodity: 'Cabbage'
    },
    {
        state: 'Karnataka',
        district: 'Belgaum',
        market: 'Belgaum',
        commodity: 'Gur(Jaggery)'
    },
    {
        state: 'Karnataka',
        district: 'Bidar',
        market: 'Basava Kalayana',
        commodity: 'Bengal Gram(Gram)(Whole)'
    },
    {
        state: 'Karnataka',
        district: 'Chamrajnagar',
        market: 'Chamaraj Nagar',
        commodity: 'Green Chilli'
    },
    {
        state: 'Karnataka',
        district: 'Chamrajnagar',
        market: 'Chamaraj Nagar',
        commodity: 'Raddish'
    },
    {
        state: 'Karnataka',
        district: 'Chamrajnagar',
        market: 'Chamaraj Nagar',
        commodity: 'Tomato'
    },
    {
        state: 'Karnataka',
        district: 'Dharwad',
        market: 'Hubli (Amaragol)',
        commodity: 'Bengal Gram(Gram)(Whole)'
    },
    {
        state: 'Karnataka',
        district: 'Dharwad',
        market: 'Hubli (Amaragol)',
        commodity: 'Groundnut'
    },
    {
        state: 'Karnataka',
        district: 'Dharwad',
        market: 'Hubli (Amaragol)',
        commodity: 'Maize'
    },
    {
        state: 'Karnataka',
        district: 'Gadag',
        market: 'Gadag',
        commodity: 'Cabbage'
    },
    {
        state: 'Karnataka',
        district: 'Gadag',
        market: 'Gadag',
        commodity: 'Potato'
    },
    {
        state: 'Karnataka',
        district: 'Gadag',
        market: 'Gadag',
        commodity: 'Ridgeguard(Tori)'
    },
    {
        state: 'Karnataka',
        district: 'Gadag',
        market: 'Gadag',
        commodity: 'Tomato'
    },
    {
        state: 'Karnataka',
        district: 'Kolar',
        market: 'Kolar',
        commodity: 'Tomato'
    },
    {
        state: 'Karnataka',
        district: 'Tumkur',
        market: 'Tiptur',
        commodity: 'Copra'
    },
    {
        state: 'Karnataka',
        district: 'Udupi',
        market: 'Kundapura',
        commodity: 'Arecanut(Betelnut/Supari)'
    },
    {
        state: 'Karnataka',
        district: 'Belgaum',
        market: 'Belgaum',
        commodity: 'Cauliflower'
    },
    {
        state: 'Karnataka',
        district: 'Belgaum',
        market: 'Belgaum',
        commodity: 'Onion'
    },
    {
        state: 'Karnataka',
        district: 'Belgaum',
        market: 'Belgaum',
        commodity: 'Potato'
    },
    {
        state: 'Karnataka',
        district: 'Belgaum',
        market: 'Belgaum',
        commodity: 'Tomato'
    },
    {
        state: 'Karnataka',
        district: 'Bidar',
        market: 'Basava Kalayana',
        commodity: 'Jowar(Sorghum)'
    },
    {
        state: 'Karnataka',
        district: 'Bidar',
        market: 'Basava Kalayana',
        commodity: 'Safflower'
    },
    {
        state: 'Karnataka',
        district: 'Bidar',
        market: 'Bidar',
        commodity: 'Rice'
    },
    {
        state: 'Karnataka',
        district: 'Chamrajnagar',
        market: 'Chamaraj Nagar',
        commodity: 'Brinjal'
    },
    {
        state: 'Karnataka',
        district: 'Chamrajnagar',
        market: 'Chamaraj Nagar',
        commodity: 'Carrot'
    },
    {
        state: 'Karnataka',
        district: 'Chamrajnagar',
        market: 'Chamaraj Nagar',
        commodity: 'Cucumbar(Kheera)'
    },
    {
        state: 'Karnataka',
        district: 'Chamrajnagar',
        market: 'Chamaraj Nagar',
        commodity: 'Knool Khol'
    },
    {
        state: 'Karnataka',
        district: 'Dharwad',
        market: 'Hubli (Amaragol)',
        commodity: 'Black Gram (Urd Beans)(Whole)'
    },
    {
        state: 'Karnataka',
        district: 'Dharwad',
        market: 'Hubli (Amaragol)',
        commodity: 'Dry Chillies'
    },
    {
        state: 'Karnataka',
        district: 'Dharwad',
        market: 'Hubli (Amaragol)',
        commodity: 'Safflower'
    },
    {
        state: 'Karnataka',
        district: 'Dharwad',
        market: 'Hubli (Amaragol)',
        commodity: 'Soyabean'
    },
    {
        state: 'Karnataka',
        district: 'Gadag',
        market: 'Gadag',
        commodity: 'Black Gram (Urd Beans)(Whole)'
    },
    {
        state: 'Karnataka',
        district: 'Gadag', market: 'Gadag',
        commodity: 'Coriander(Leaves)'
    },
    {
        state: 'Karnataka',
        district: 'Gadag',
        market: 'Gadag',
        commodity: 'Green Chilli'
    },
    {
        state: 'Karnataka',
        district: 'Gadag',
        market: 'Gadag',
        commodity: 'Green Gram (Moong)(Whole)'
    },
    {
        state: 'Karnataka',
        district: 'Gadag',
        market: 'Gadag',
        commodity: 'Kulthi(Horse Gram)'
    },
    {
        state: 'Karnataka',
        district: 'Belgaum',
        market: 'Belgaum',
        commodity: 'Jowar(Sorghum)'
    },
    {
        state: 'Karnataka',
        district: 'Bidar',
        market: 'Basava Kalayana',
        commodity: 'Wheat'
    },
    {
        state: 'Karnataka',
        district: 'Bidar',
        market: 'Bidar',
        commodity: 'Bengal Gram(Gram)(Whole)'
    },
    {
        state: 'Karnataka',
        district: 'Bidar',
        market: 'Bidar',
        commodity: 'Wheat'
    },
    {
        state: 'Karnataka',
        district: 'Dharwad',
        market: 'Hubli (Amaragol)',
        commodity: 'Jowar(Sorghum)'
    },
    {
        state: 'Karnataka',
        district: 'Dharwad',
        market: 'Hubli (Amaragol)',
        commodity: 'Onion'
    },
    {
        state: 'Karnataka',
        district: 'Dharwad',
        market: 'Hubli (Amaragol)',
        commodity: 'Potato'
    },
    {
        state: 'Karnataka',
        district: 'Dharwad',
        market: 'Hubli (Amaragol)',
        commodity: 'Wheat'
    },
    {
        state: 'Karnataka',
        district: 'Gadag',
        market: 'Gadag',
        commodity: 'Bhindi(Ladies Finger)'
    },
    {
        state: 'Karnataka',
        district: 'Gadag',
        market: 'Gadag',
        commodity: 'Cowpea (Lobia/Karamani)'
    },
    {
        state: 'Karnataka',
        district: 'Gadag',
        market: 'Gadag',
        commodity: 'Groundnut'
    },
    {
        state: 'Karnataka',
        district: 'Mandya',
        market: 'Mandya',
        commodity: 'Gur(Jaggery)'
    },
    {
        state: 'Karnataka',
        district: 'Bidar',
        market: 'Bidar',
        commodity: 'Jowar(Sorghum)'
    },
    {
        state: 'Karnataka',
        district: 'Chamrajnagar',
        market: 'Chamaraj Nagar',
        commodity: 'Beans'
    },
    {
        state: 'Karnataka',
        district: 'Chamrajnagar',
        market: 'Chamaraj Nagar',
        commodity: 'Beetroot'
    },
    {
        state: 'Karnataka',
        district: 'Chamrajnagar',
        market: 'Chamaraj Nagar',
        commodity: 'Ridgeguard(Tori)'
    },
    {
        state: 'Karnataka',
        district: 'Dharwad',
        market: 'Hubli (Amaragol)',
        commodity: 'Green Gram (Moong)(Whole)'
    },
    {
        state: 'Karnataka',
        district: 'Gadag',
        market: 'Gadag',
        commodity: 'Soyabean'
    },
    {
        state: 'Karnataka',
        district: 'Belgaum',
        market: 'Belgaum',
        commodity: 'Capsicum'
    },
    {
        state: 'Karnataka',
        district: 'Bidar',
        market: 'Basava Kalayana',
        commodity: 'Arhar (Tur/Red Gram)(Whole)'
    },
    {
        state: 'Karnataka',
        district: 'Bidar',
        market: 'Bidar',
        commodity: 'Arhar (Tur/Red Gram)(Whole)'
    },
    {
        state: 'Karnataka',
        district: 'Bidar',
        market: 'Bidar',
        commodity: 'Soyabean'
    },
    {
        state: 'Karnataka',
        district: 'Chamrajnagar',
        market: 'Chamaraj Nagar',
        commodity: 'Cabbage'
    },
    {
        state: 'Karnataka',
        district: 'Chamrajnagar',
        market: 'Chamaraj Nagar',
        commodity: 'Gur(Jaggery)'
    },
    {
        state: 'Karnataka',
        district: 'Dharwad',
        market: 'Hubli (Amaragol)',
        commodity: 'Arhar (Tur/Red Gram)(Whole)'
    },
    {
        state: 'Karnataka',
        district: 'Gadag',
        market: 'Gadag',
        commodity: 'Jowar(Sorghum)'
    },
    {
        state: 'Karnataka',
        district: 'Gadag',
        market: 'Gadag',
        commodity: 'Onion'
    },
    {
        state: 'Karnataka',
        district: 'Gadag',
        market: 'Gadag',
        commodity: 'Safflower'
    },
    {
        state: 'Karnataka',
        district: 'Gadag',
        market: 'Gadag',
        commodity: 'Sunflower'
    },
    {
        state: 'Karnataka',
        district: 'Gadag',
        market: 'Gadag',
        commodity: 'Wheat'
    },
    {
        state: 'Karnataka',
        district: 'Udupi',
        market: 'Kundapura',
        commodity: 'Banana - Green'
    },
    {
        state: 'Kerala',
        district: 'Thirssur',
        market: 'Thrissur',
        commodity: 'Arecanut(Betelnut/Supari)'
    },
    {
        state: 'Kerala',
        district: 'Thirssur',
        market: 'Thrissur',
        commodity: 'Banana - Green'
    },
    {
        state: 'Kerala',
        district: 'Thirssur',
        market: 'Thrissur',
        commodity: 'Bitter gourd'
    },
    {
        state: 'Kerala',
        district: 'Thirssur',
        market: 'Thrissur',
        commodity: 'Brinjal'
    },
    {
        state: 'Kerala',
        district: 'Thirssur',
        market: 'Thrissur',
        commodity: 'Coconut Seed'
    },
    {
        state: 'Kerala',
        district: 'Thirssur',
        market: 'Thrissur',
        commodity: 'Mango (Raw-Ripe)'
    },
    {
        state: 'Kerala',
        district: 'Thirssur',
        market: 'Thrissur',
        commodity: 'Pineapple'
    },
    {
        state: 'Kerala',
        district: 'Thirssur',
        market: 'Wadakkanchery',
        commodity: 'Ashgourd'
    },
    {
        state: 'Kerala',
        district: 'Thiruvananthapuram',
        market: 'Attingal',
        commodity: 'Banana'
    },
    {
        state: 'Kerala',
        district: 'Thiruvananthapuram',
        market: 'Attingal',
        commodity: 'Bitter gourd'
    },
    {
        state: 'Kerala',
        district: 'Thiruvananthapuram',
        market: 'Attingal',
        commodity: 'Carrot'
    },
    {
        state: 'Kerala',
        district: 'Thiruvananthapuram',
        market: 'Attingal',
        commodity: 'Colacasia'
    },
    {
        state: 'Kerala',
        district: 'Thiruvananthapuram',
        market: 'Attingal',
        commodity: 'Duster Beans'
    },
    {
        state: 'Kerala',
        district: 'Thiruvananthapuram',
        market: 'Attingal',
        commodity: 'Snakeguard'
    },
    {
        state: 'Kerala',
        district: 'Thiruvananthapuram',
        market: 'Neyyatinkara',
        commodity: 'Brinjal'
    },
    {
        state: 'Kerala',
        district: 'Thiruvananthapuram',
        market: 'Neyyatinkara',
        commodity: 'Cabbage'
    },
    {
        state: 'Kerala',
        district: 'Thiruvananthapuram',
        market: 'Neyyatinkara',
        commodity: 'Carrot'
    },
    {
        state: 'Kerala',
        district: 'Thiruvananthapuram',
        market: 'Neyyatinkara',
        commodity: 'Tapioca'
    },
    {
        state: 'Kerala',
        district: 'Wayanad',
        market: 'Pulpally',
        commodity: 'Banana'
    },
    {
        state: 'Kerala',
        district: 'Wayanad',
        market: 'Pulpally',
        commodity: 'Cucumbar(Kheera)'
    },
    {
        state: 'Kerala',
        district: 'Alappuzha',
        market: 'Aroor',
        commodity: 'Banana'
    },
    {
        state: 'Kerala',
        district: 'Alappuzha',
        market: 'Aroor',
        commodity: 'Beetroot'
    },
    {
        state: 'Kerala',
        district: 'Alappuzha',
        market: 'Aroor',
        commodity: 'Cucumbar(Kheera)'
    },
    {
        state: 'Kerala',
        district: 'Alappuzha',
        market: 'Aroor',
        commodity: 'Drumstick'
    },
    {
        state: 'Kerala',
        district: 'Alappuzha',
        market: 'Aroor',
        commodity: 'French Beans (Frasbean)'
    },
    {
        state: 'Kerala',
        district: 'Alappuzha',
        market: 'Aroor',
        commodity: 'Garlic'
    },
    {
        state: 'Kerala',
        district: 'Alappuzha',
        market: 'Aroor',
        commodity: 'Lemon'
    },
    {
        state: 'Kerala',
        district: 'Alappuzha',
        market: 'Chengannur',
        commodity: 'Banana - Green'
    },
    {
        state: 'Kerala',
        district: 'Alappuzha',
        market: 'Chengannur',
        commodity: 'Cabbage'
    },
    {
        state: 'Kerala',
        district: 'Alappuzha',
        market: 'Chengannur',
        commodity: 'Capsicum'
    },
    {
        state: 'Kerala',
        district: 'Alappuzha',
        market: 'Chengannur',
        commodity: 'Potato'
    },
    {
        state: 'Kerala',
        district: 'Alappuzha',
        market: 'Harippad',
        commodity: 'Ashgourd'
    },
    {
        state: 'Kerala',
        district: 'Alappuzha',
        market: 'Harippad',
        commodity: 'Capsicum'
    },
    {
        state: 'Kerala',
        district: 'Alappuzha',
        market: 'Harippad',
        commodity: 'Ginger(Green)'
    },
    {
        state: 'Kerala',
        district: 'Alappuzha',
        market: 'Harippad',
        commodity: 'Green Chilli'
    },
    {
        state: 'Kerala',
        district: 'Alappuzha',
        market: 'Harippad',
        commodity: 'Lemon'
    },
    {
        state: 'Kerala',
        district: 'Alappuzha',
        market: 'Harippad',
        commodity: 'Pumpkin'
    },
    {
        state: 'Kerala',
        district: 'Alappuzha',
        market: 'Kayamkulam',
        commodity: 'Banana'
    },
    {
        state: 'Kerala',
        district: 'Alappuzha',
        market: 'Kayamkulam',
        commodity: 'Beetroot'
    },
    {
        state: 'Kerala',
        district: 'Alappuzha',
        market: 'Kayamkulam',
        commodity: 'Brinjal'
    },
    {
        state: 'Kerala',
        district: 'Alappuzha',
        market: 'Kayamkulam',
        commodity: 'Cowpea(Veg)'
    },
    {
        state: 'Kerala',
        district: 'Alappuzha',
        market: 'Kayamkulam',
        commodity: 'Cucumbar(Kheera)'
    },
    {
        state: 'Kerala',
        district: 'Alappuzha',
        market: 'Kayamkulam',
        commodity: 'Ginger(Green)'
    },
    {
        state: 'Kerala',
        district: 'Alappuzha',
        market: 'Kayamkulam',
        commodity: 'Green Chilli'
    },
    {
        state: 'Kerala',
        district: 'Ernakulam',
        market: 'Moovattupuzha',
        commodity: 'Banana - Green'
    },
    {
        state: 'Kerala',
        district: 'Ernakulam',
        market: 'Moovattupuzha',
        commodity: 'Cabbage'
    },
    {
        state: 'Kerala',
        district: 'Ernakulam',
        market: 'Moovattupuzha',
        commodity: 'Cauliflower'
    },
    {
        state: 'Kerala',
        district: 'Ernakulam',
        market: 'Moovattupuzha',
        commodity: 'Drumstick'
    },
    {
        state: 'Kerala',
        district: 'Ernakulam',
        market: 'Moovattupuzha',
        commodity: 'Pumpkin'
    },
    {
        state: 'Kerala',
        district: 'Ernakulam',
        market: 'Piravam',
        commodity: 'Banana - Green'
    },
    {
        state: 'Kerala',
        district: 'Ernakulam',
        market: 'Piravam',
        commodity: 'Beetroot'
    },
    {
        state: 'Kerala',
        district: 'Ernakulam',
        market: 'Piravam',
        commodity: 'Bitter gourd'
    },
    {
        state: 'Kerala',
        district: 'Ernakulam',
        market: 'Piravam',
        commodity: 'Tapioca'
    },
    {
        state: 'Kerala',
        district: 'Idukki',
        market: 'Thodupuzha',
        commodity: 'Banana'
    },
    {
        state: 'Kerala',
        district: 'Idukki',
        market: 'Thodupuzha',
        commodity: 'Bitter gourd'
    },
    {
        state: 'Kerala',
        district: 'Idukki',
        market: 'Thodupuzha',
        commodity: 'Coconut'
    },
    {
        state: 'Kerala',
        district: 'Idukki',
        market: 'Thodupuzha',
        commodity: 'Cucumbar(Kheera)'
    },
    {
        state: 'Kerala',
        district: 'Idukki',
        market: 'Thodupuzha',
        commodity: 'Green Chilli'
    },
    {
        state: 'Kerala',
        district: 'Idukki',
        market: 'Thodupuzha',
        commodity: 'Tomato'
    },
    {
        state: 'Kerala',
        district: 'Kannur',
        market: 'Irityy',
        commodity: 'Black pepper'
    },
    {
        state: 'Kerala',
        district: 'Kannur',
        market: 'Irityy',
        commodity: 'Cashewnuts'
    },
    {
        state: 'Kerala',
        district: 'Kannur',
        market: 'Kannur',
        commodity: 'Banana - Green'
    },
    {
        state: 'Kerala',
        district: 'Kannur',
        market: 'Payyannur',
        commodity: 'Arecanut(Betelnut/Supari)'
    },
    {
        state: 'Kerala',
        district: 'Kannur',
        market: 'Payyannur',
        commodity: 'Banana'
    },
    {
        state: 'Kerala',
        district: 'Kannur',
        market: 'Payyannur',
        commodity: 'Black pepper'
    },
    {
        state: 'Kerala',
        district: 'Kasargod',
        market: 'Kanjangadu',
        commodity: 'Arecanut(Betelnut/Supari)'
    },
    {
        state: 'Kerala',
        district: 'Kasargod',
        market: 'Kanjangadu',
        commodity: 'Black pepper'
    },
    {
        state: 'Kerala',
        district: 'Kasargod',
        market: 'Kanjangadu',
        commodity: 'Coconut Oil'
    },
    {
        state: 'Kerala',
        district: 'Kasargod',
        market: 'Kanjangadu',
        commodity: 'Pumpkin'
    },
    {
        state: 'Kerala',
        district: 'Kollam',
        market: 'Anchal',
        commodity: 'Amaranthus'
    },
    {
        state: 'Kerala',
        district: 'Kollam',
        market: 'Anchal',
        commodity: 'Banana'
    },
    {
        state: 'Kerala',
        district: 'Kollam',
        market: 'Anchal',
        commodity: 'Cucumbar(Kheera)'
    },
    {
        state: 'Kerala',
        district: 'Kollam',
        market: 'Anchal',
        commodity: 'Elephant Yam (Suran)'
    },
    {
        state: 'Kerala',
        district: 'Kollam',
        market: 'Anchal',
        commodity: 'Onion'
    },
    {
        state: 'Kerala',
        district: 'Kollam',
        market: 'Anchal',
        commodity: 'Tapioca'
    },
    {
        state: 'Kerala',
        district: 'Kollam',
        market: 'Kottarakkara',
        commodity: 'Bitter gourd'
    },
    {
        state: 'Kerala',
        district: 'Kollam',
        market: 'Kottarakkara',
        commodity: 'Cabbage'
    },
    {
        state: 'Kerala',
        district: 'Kollam',
        market: 'Kottarakkara',
        commodity: 'Carrot'
    },
    {
        state: 'Kerala',
        district: 'Kollam',
        market: 'Kottarakkara',
        commodity: 'Cucumbar(Kheera)'
    },
    {
        state: 'Kerala',
        district: 'Kollam',
        market: 'Kottarakkara',
        commodity: 'Drumstick'
    },
    {
        state: 'Kerala',
        district: 'Kollam',
        market: 'Kottarakkara',
        commodity: 'Little gourd (Kundru)'
    },
    {
        state: 'Kerala',
        district: 'Kollam',
        market: 'Sasthamkotta',
        commodity: 'Cowpea(Veg)'
    },
    {
        state: 'Kerala',
        district: 'Kollam',
        market: 'Sasthamkotta',
        commodity: 'Cucumbar(Kheera)'
    },
    {
        state: 'Kerala',
        district: 'Kollam',
        market: 'Sasthamkotta',
        commodity: 'Yam'
    },
    {
        state: 'Kerala',
        district: 'Kottayam',
        market: 'Kottayam',
        commodity: 'Cabbage'
    },
    {
        state: 'Kerala',
        district: 'Kozhikode(Calicut)',
        market: 'Palayam',
        commodity: 'Ashgourd'
    },
    {
        state: 'Kerala',
        district: 'Kozhikode(Calicut)',
        market: 'Palayam',
        commodity: 'Bhindi(Ladies Finger)'
    },
    {
        state: 'Kerala',
        district: 'Kozhikode(Calicut)',
        market: 'Palayam',
        commodity: 'Cauliflower'
    },
    {
        state: 'Kerala',
        district: 'Kozhikode(Calicut)',
        market: 'Palayam',
        commodity: 'Onion'
    },
    {
        state: 'Kerala',
        district: 'Kozhikode(Calicut)',
        market: 'Thamarassery',
        commodity: 'Bhindi(Ladies Finger)'
    },
    {
        state: 'Kerala',
        district: 'Kozhikode(Calicut)',
        market: 'Thamarassery',
        commodity: 'Cucumbar(Kheera)'
    },
    {
        state: 'Kerala',
        district: 'Kozhikode(Calicut)',
        market: 'Thamarassery',
        commodity: 'French Beans (Frasbean)'
    },
    {
        state: 'Kerala',
        district: 'Kozhikode(Calicut)',
        market: 'Thamarassery',
        commodity: 'Pumpkin'
    },
    {
        state: 'Kerala',
        district: 'Malappuram',
        market: 'Kondotty',
        commodity: 'Amaranthus'
    },
    {
        state: 'Kerala',
        district: 'Malappuram',
        market: 'Kondotty',
        commodity: 'Bhindi(Ladies Finger)'
    },
    {
        state: 'Kerala',
        district: 'Malappuram',
        market: 'Kondotty',
        commodity: 'Drumstick'
    },
    {
        state: 'Kerala',
        district: 'Malappuram',
        market: 'Kondotty',
        commodity: 'Garlic'
    },
    {
        state: 'Kerala',
        district: 'Malappuram',
        market: 'Kondotty',
        commodity: 'Green Chilli'
    },
    {
        state: 'Kerala',
        district: 'Malappuram',
        market: 'Kondotty',
        commodity: 'Potato'
    },
    {
        state: 'Kerala',
        district: 'Malappuram',
        market: 'Kondotty',
        commodity: 'Tomato'
    }, {
        state: 'Madhya Pradesh',
        district: 'Ashoknagar',
        market: 'Ashoknagar',
        commodity: 'Wheat'
    },
    {
        state: 'Madhya Pradesh',
        district: 'Badwani',
        market: 'Badwani',
        commodity: 'Brinjal'
    },
    {
        state: 'Madhya Pradesh',
        district: 'Badwani',
        market: 'Badwani',
        commodity: 'Cluster beans'
    },
    {
        state: 'Madhya Pradesh',
        district: 'Dewas',
        market: 'Haatpipliya',
        commodity: 'Bhindi(Ladies Finger)'
    },
    {
        state: 'Madhya Pradesh',
        district: 'Dewas',
        market: 'Haatpipliya',
        commodity: 'Ginger(Dry)'
    },
    {
        state: 'Madhya Pradesh',
        district: 'Dewas',
        market: 'Khategaon',
        commodity: 'Wheat'
    },
    {
        state: 'Madhya Pradesh',
        district: 'Indore',
        market: 'Indore(F&V)',
        commodity: 'Bitter gourd'
    },
    {
        state: 'Madhya Pradesh',
        district: 'Indore',
        market: 'Indore(F&V)',
        commodity: 'Coriander(Leaves)'
    },
    {
        state: 'Madhya Pradesh',
        district: 'Indore',
        market: 'Indore(F&V)',
        commodity: 'Cucumbar(Kheera)'
    },
    {
        state: 'Madhya Pradesh',
        district: 'Indore',
        market: 'Indore(F&V)',
        commodity: 'Papaya'
    },
    {
        state: 'Madhya Pradesh',
        district: 'Indore',
        market: 'Indore(F&V)',
        commodity: 'Pumpkin'
    },
    {
        state: 'Madhya Pradesh',
        district: 'Katni',
        market: 'Katni(F&V)',
        commodity: 'Amaranthus'
    },
    {
        state: 'Madhya Pradesh',
        district: 'Katni',
        market: 'Katni(F&V)',
        commodity: 'Bhindi(Ladies Finger)'
    },
    {
        state: 'Madhya Pradesh',
        district: 'Katni',
        market: 'Katni(F&V)',
        commodity: 'Capsicum'
    },
    {
        state: 'Madhya Pradesh',
        district: 'Katni',
        market: 'Katni(F&V)',
        commodity: 'Little gourd (Kundru)'
    },
    {
        state: 'Madhya Pradesh',
        district: 'Katni',
        market: 'Katni(F&V)',
        commodity: 'Ridgeguard(Tori)'
    },
    {
        state: 'Madhya Pradesh',
        district: 'Katni',
        market: 'Katni(F&V)',
        commodity: 'Spinach'
    },
    {
        state: 'Madhya Pradesh',
        district: 'Rajgarh',
        market: 'Kurawar',
        commodity: 'Bengal Gram(Gram)(Whole)'
    },
    {
        state: 'Madhya Pradesh',
        district: 'Sagar',
        market: 'Sagar(F&V)',
        commodity: 'Onion'
    },
    {
        state: 'Madhya Pradesh',
        district: 'Shajapur',
        market: 'Kalapipal',
        commodity: 'Bengal Gram(Gram)(Whole)'
    },
    {
        state: 'Madhya Pradesh',
        district: 'Shajapur',
        market: 'Kalapipal',
        commodity: 'Wheat'
    },
    {
        state: 'Madhya Pradesh',
        district: 'Sheopur',
        market: 'Vijaypur',
        commodity: 'Mustard'
    },
    {
        state: 'Madhya Pradesh',
        district: 'Badwani',
        market: 'Badwani',
        commodity: 'Bitter gourd'
    },
    {
        state: 'Madhya Pradesh',
        district: 'Badwani',
        market: 'Badwani',
        commodity: 'Tinda'
    },
    {
        state: 'Madhya Pradesh',
        district: 'Balaghat',
        market: 'Praswada',
        commodity: 'Paddy(Dhan)(Common)'
    },
    {
        state: 'Madhya Pradesh',
        district: 'Indore',
        market: 'Indore(F&V)',
        commodity: 'Bottle gourd'
    },
    {
        state: 'Madhya Pradesh',
        district: 'Indore',
        market: 'Indore(F&V)',
        commodity: 'Brinjal'
    },
    {
        state: 'Madhya Pradesh',
        district: 'Indore',
        market: 'Indore(F&V)',
        commodity: 'Mango'
    },
    {
        state: 'Madhya Pradesh',
        district: 'Katni',
        market: 'Katni(F&V)',
        commodity: 'Banana'
    },
    {
        state: 'Madhya Pradesh',
        district: 'Katni',
        market: 'Katni(F&V)',
        commodity: 'Lemon'
    },
    {
        state: 'Madhya Pradesh',
        district: 'Katni',
        market: 'Katni(F&V)',
        commodity: 'Onion'
    },
    {
        state: 'Madhya Pradesh',
        district: 'Katni',
        market: 'Katni(F&V)',
        commodity: 'Pear(Marasebu)'
    },
    {
        state: 'Madhya Pradesh',
        district: 'Katni',
        market: 'Katni(F&V)',
        commodity: 'Pomegranate'
    },
    {
        state: 'Madhya Pradesh',
        district: 'Katni',
        market: 'Katni(F&V)',
        commodity: 'Potato'
    },
    {
        state: 'Madhya Pradesh',
        district: 'Katni',
        market: 'Katni(F&V)',
        commodity: 'Pumpkin'
    },
    {
        state: 'Madhya Pradesh',
        district: 'Khargone',
        market: 'Sanawad',
        commodity: 'Soyabean'
    },
    {
        state: 'Madhya Pradesh',
        district: 'Panna',
        market: 'Simariya',
        commodity: 'Mustard'
    },
    {
        state: 'Madhya Pradesh',
        district: 'Rajgarh',
        market: 'Biaora',
        commodity: 'Bengal Gram(Gram)(Whole)'
    },
    {
        state: 'Madhya Pradesh',
        district: 'Rajgarh',
        market: 'Biaora',
        commodity: 'Lentil (Masur)(Whole)'
    },
    {
        state: 'Madhya Pradesh',
        district: 'Rajgarh',
        market: 'Kurawar',
        commodity: 'Soyabean'
    },
    {
        state: 'Madhya Pradesh',
        district: 'Sagar',
        market: 'Sagar(F&V)',
        commodity: 'Bottle gourd'
    },
    {
        state: 'Madhya Pradesh',
        district: 'Seoni',
        market: 'Lakhnadon',
        commodity: 'Wheat'
    },
    {
        state: 'Madhya Pradesh',
        district: 'Shajapur',
        market: 'Kalapipal',
        commodity: 'Lentil (Masur)(Whole)'
    },
    {
        state: 'Madhya Pradesh',
        district: 'Shajapur',
        market: 'Kalapipal',
        commodity: 'Mustard'
    },
    {
        state: 'Madhya Pradesh',
        district: 'Shajapur',
        market: 'Kalapipal',
        commodity: 'Onion'
    },
    {
        state: 'Madhya Pradesh',
        district: 'Shajapur',
        market: 'Kalapipal',
        commodity: 'Soyabean'
    },
    {
        state: 'Madhya Pradesh',
        district: 'Badwani',
        market: 'Badwani',
        commodity: 'Bottle gourd'
    },
    {
        state: 'Madhya Pradesh',
        district: 'Badwani',
        market: 'Badwani',
        commodity: 'Cucumbar(Kheera)'
    },
    {
        state: 'Madhya Pradesh',
        district: 'Badwani',
        market: 'Badwani',
        commodity: 'Pumpkin'
    },
    {
        state: 'Madhya Pradesh',
        district: 'Dhar',
        market: 'Gandhwani',
        commodity: 'Wheat'
    },
    {
        state: 'Madhya Pradesh',
        district: 'Indore',
        market: 'Indore(F&V)',
        commodity: 'Apple'
    },
    {
        state: 'Madhya Pradesh',
        district: 'Jhabua',
        market: 'Jhabua',
        commodity: 'Soyabean'
    },
    {
        state: 'Madhya Pradesh',
        district: 'Katni',
        market: 'Katni(F&V)',
        commodity: 'Carrot'
    },
    {
        state: 'Madhya Pradesh',
        district: 'Katni',
        market: 'Katni(F&V)',
        commodity: 'Cucumbar(Kheera)'
    },
    {
        state: 'Madhya Pradesh',
        district: 'Katni',
        market: 'Katni(F&V)',
        commodity: 'Green Chilli'
    },
    {
        state: 'Madhya Pradesh',
        district: 'Katni',
        market: 'Katni(F&V)',
        commodity: 'Jack Fruit'
    },
    {
        state: 'Madhya Pradesh',
        district: 'Katni',
        market: 'Katni(F&V)',
        commodity: 'Papaya'
    },
    {
        state: 'Madhya Pradesh',
        district: 'Katni',
        market: 'Katni(F&V)',
        commodity: 'Tomato'
    },
    {
        state: 'Madhya Pradesh',
        district: 'Khargone',
        market: 'Sanawad',
        commodity: 'Bengal Gram(Gram)(Whole)'
    },
    {
        state: 'Madhya Pradesh',
        district: 'Khargone',
        market: 'Sanawad',
        commodity: 'Green Gram (Moong)(Whole)'
    },
    {
        state: 'Madhya Pradesh',
        district: 'Panna',
        market: 'Ajaygarh',
        commodity: 'Arhar (Tur/Red Gram)(Whole)'
    },
    {
        state: 'Madhya Pradesh',
        district: 'Rajgarh',
        market: 'Biaora',
        commodity: 'Mustard'
    },
    {
        state: 'Madhya Pradesh',
        district: 'Ratlam',
        market: 'Ratlam',
        commodity: 'Wheat'
    },
    {
        state: 'Madhya Pradesh',
        district: 'Sagar',
        market: 'Sagar(F&V)',
        commodity: 'Brinjal'
    },
    {
        state: 'Madhya Pradesh',
        district: 'Sagar',
        market: 'Sagar(F&V)',
        commodity: 'Potato'
    },
    {
        state: 'Madhya Pradesh',
        district: 'Sagar',
        market: 'Sagar(F&V)',
        commodity: 'Spinach'
    },
    {
        state: 'Madhya Pradesh',
        district: 'Shajapur',
        market: 'Berachha',
        commodity: 'Soyabean'
    },
    {
        state: 'Madhya Pradesh',
        district: 'Khargone',
        market: 'Karhi',
        commodity: 'Green Gram (Moong)(Whole)'
    },
    {
        state: 'Madhya Pradesh',
        district: 'Rajgarh',
        market: 'Kurawar',
        commodity: 'Lentil (Masur)(Whole)'
    },
    {
        state: 'Madhya Pradesh',
        district: 'Rajgarh',
        market: 'Kurawar',
        commodity: 'Mustard'
    },
    {
        state: 'Madhya Pradesh',
        district: 'Rajgarh',
        market: 'Kurawar',
        commodity: 'Wheat'
    },
    {
        state: 'Madhya Pradesh',
        district: 'Sagar',
        market: 'Sagar(F&V)',
        commodity: 'Cauliflower'
    },
    {
        state: 'Madhya Pradesh',
        district: 'Sagar',
        market: 'Sagar(F&V)',
        commodity: 'Mango'
    },
    {
        state: 'Madhya Pradesh',
        district: 'Alirajpur',
        market: 'Alirajpur(F&V)',
        commodity: 'Potato'
    },
    {
        state: 'Madhya Pradesh',
        district: 'Badwani',
        market: 'Badwani',
        commodity: 'Green Chilli'
    },
    {
        state: 'Madhya Pradesh',
        district: 'Dewas',
        market: 'Haatpipliya',
        commodity: 'Cabbage'
    },
    {
        state: 'Madhya Pradesh',
        district: 'Indore',
        market: 'Indore(F&V)',
        commodity: 'Banana'
    },
    {
        state: 'Madhya Pradesh',
        district: 'Indore',
        market: 'Indore(F&V)',
        commodity: 'Cabbage'
    },
    {
        state: 'Madhya Pradesh',
        district: 'Indore',
        market: 'Indore(F&V)',
        commodity: 'Capsicum'
    },
    {
        state: 'Madhya Pradesh',
        district: 'Indore',
        market: 'Indore(F&V)',
        commodity: 'Cauliflower'
    },
    {
        state: 'Madhya Pradesh',
        district: 'Indore',
        market: 'Indore(F&V)',
        commodity: 'Ginger(Dry)'
    },
    {
        state: 'Madhya Pradesh',
        district: 'Indore',
        market: 'Indore(F&V)',
        commodity: 'Green Chilli'
    },
    {
        state: 'Madhya Pradesh',
        district: 'Indore',
        market: 'Indore(F&V)',
        commodity: 'Round gourd'
    },
    {
        state: 'Madhya Pradesh',
        district: 'Katni',
        market: 'Katni(F&V)',
        commodity: 'Bottle gourd'
    },
    {
        state: 'Madhya Pradesh',
        district: 'Katni',
        market: 'Katni(F&V)',
        commodity: 'Cabbage'
    },
    {
        state: 'Madhya Pradesh',
        district: 'Katni',
        market: 'Katni(F&V)',
        commodity: 'Colacasia'
    },
    {
        state: 'Madhya Pradesh',
        district: 'Katni',
        market: 'Katni(F&V)',
        commodity: 'Maize'
    },
    {
        state: 'Madhya Pradesh',
        district: 'Katni',
        market: 'Katni(F&V)',
        commodity: 'Mousambi(Sweet Lime)'
    },
    {
        state: 'Madhya Pradesh',
        district: 'Katni',
        market: 'Katni(F&V)',
        commodity: 'Pointed gourd (Parval)'
    },
    {
        state: 'Madhya Pradesh',
        district: 'Rajgarh',
        market: 'Biaora',
        commodity: 'Corriander seed'
    },
    {
        state: 'Madhya Pradesh',
        district: 'Rajgarh',
        market: 'Biaora',
        commodity: 'Soyabean'
    },
    {
        state: 'Madhya Pradesh',
        district: 'Rajgarh',
        market: 'Biaora',
        commodity: 'Wheat'
    },
    {
        state: 'Madhya Pradesh',
        district: 'Ratlam',
        market: 'Ratlam',
        commodity: 'Soyabean'
    },
    {
        state: 'Madhya Pradesh',
        district: 'Sagar',
        market: 'Sagar(F&V)',
        commodity: 'Green Chilli'
    },
    {
        state: 'Madhya Pradesh',
        district: 'Sagar',
        market: 'Sagar(F&V)',
        commodity: 'Lime'
    },
    {
        state: 'Madhya Pradesh',
        district: 'Seoni',
        market: 'Lakhnadon',
        commodity: 'Lentil (Masur)(Whole)'
    },
    {
        state: 'Madhya Pradesh',
        district: 'Alirajpur',
        market: 'Alirajpur(F&V)',
        commodity: 'Onion'
    },
    {
        state: 'Madhya Pradesh',
        district: 'Ashoknagar',
        market: 'Ashoknagar(F&V)',
        commodity: 'Green Chilli'
    },
    {
        state: 'Madhya Pradesh',
        district: 'Badwani',
        market: 'Badwani',
        commodity: 'Cauliflower'
    },
    {
        state: 'Madhya Pradesh',
        district: 'Badwani',
        market: 'Badwani',
        commodity: 'Sponge gourd'
    },
    {
        state: 'Maharashtra',
        district: 'Ahmednagar',
        market: 'Ahmednagar',
        commodity: 'Bitter gourd'
    },
    {
        state: 'Maharashtra',
        district: 'Ahmednagar',
        market: 'Ahmednagar',
        commodity: 'Marigold(Calcutta)'
    },
    {
        state: 'Maharashtra',
        district: 'Ahmednagar',
        market: 'Ahmednagar',
        commodity: 'Papaya'
    },
    {
        state: 'Maharashtra',
        district: 'Ahmednagar',
        market: 'Kopargaon',
        commodity: 'Onion'
    },
    {
        state: 'Maharashtra',
        district: 'Ahmednagar',
        market: 'Rahata',
        commodity: 'Bajra(Pearl Millet/Cumbu)'
    },
    {
        state: 'Maharashtra',
        district: 'Ahmednagar',
        market: 'Rahata',
        commodity: 'Garlic'
    },
    {
        state: 'Maharashtra',
        district: 'Ahmednagar',
        market: 'Rahuri(Vambori)',
        commodity: 'Bajra(Pearl Millet/Cumbu)'
    },
    {
        state: 'Maharashtra',
        district: 'Ahmednagar',
        market: 'Rahuri(Vambori)',
        commodity: 'Soyabean'
    },
    {
        state: 'Maharashtra',
        district: 'Ahmednagar',
        market: 'Shevgaon',
        commodity: 'Onion'
    },
    {
        state: 'Maharashtra',
        district: 'Ahmednagar',
        market: 'Shevgaon(Bodhegaon)',
        commodity: 'Wheat'
    },
    {
        state: 'Maharashtra',
        district: 'Ahmednagar',
        market: 'Shrirampur',
        commodity: 'Drumstick'
    },
    {
        state: 'Maharashtra',
        district: 'Ahmednagar',
        market: 'Shrirampur',
        commodity: 'Garlic'
    },
    {
        state: 'Maharashtra',
        district: 'Ahmednagar',
        market: 'Shrirampur',
        commodity: 'Ridgeguard(Tori)'
    },
    {
        state: 'Maharashtra',
        district: 'Amarawati',
        market: 'Amarawati',
        commodity: 'Bengal Gram(Gram)(Whole)'
    },
    {
        state: 'Maharashtra',
        district: 'Amarawati',
        market: 'Amarawati',
        commodity: 'Green Gram (Moong)(Whole)'
    },
    {
        state: 'Maharashtra',
        district: 'Amarawati',
        market: 'Amarawati',
        commodity: 'Groundnut'
    },
    {
        state: 'Maharashtra',
        district: 'Amarawati',
        market: 'Amarawati',
        commodity: 'Jowar(Sorghum)'
    },
    {
        state: 'Maharashtra',
        district: 'Amarawati',
        market: 'Amrawati(Frui & Veg. Market)',
        commodity: 'Mango (Raw-Ripe)'
    },
    {
        state: 'Maharashtra',
        district: 'Amarawati',
        market: 'Amrawati(Frui & Veg. Market)',
        commodity: 'Potato'
    },
    {
        state: 'Maharashtra',
        district: 'Amarawati',
        market: 'Amrawati(Frui & Veg. Market)',
        commodity: 'Tomato'
    },
    {
        state: 'Maharashtra',
        district: 'Aurangabad',
        market: 'Aurangabad',
        commodity: 'Cucumbar(Kheera)'
    },
    {
        state: 'Maharashtra',
        district: 'Aurangabad',
        market: 'Aurangabad',
        commodity: 'Garlic'
    },
    {
        state: 'Maharashtra',
        district: 'Aurangabad',
        market: 'Aurangabad',
        commodity: 'Green Chilli'
    },
    {
        state: 'Maharashtra',
        district: 'Aurangabad',
        market: 'Aurangabad',
        commodity: 'Mango'
    },
    {
        state: 'Maharashtra',
        district: 'Aurangabad',
        market: 'Aurangabad',
        commodity: 'Papaya'
    },
    {
        state: 'Maharashtra',
        district: 'Aurangabad', market: 'Aurangabad',
        commodity: 'Wheat'
    },
    {
        state: 'Maharashtra',
        district: 'Aurangabad',
        market: 'Vaijpur',
        commodity: 'Jowar(Sorghum)'
    },
    {
        state: 'Maharashtra',
        district: 'Aurangabad',
        market: 'Vaijpur',
        commodity: 'Onion'
    },
    {
        state: 'Maharashtra',
        district: 'Beed',
        market: 'Gevrai',
        commodity: 'Bajra(Pearl Millet/Cumbu)'
    },
    {
        state: 'Maharashtra',
        district: 'Beed',
        market: 'Majalgaon',
        commodity: 'Bajra(Pearl Millet/Cumbu)'
    },
    {
        state: 'Maharashtra',
        district: 'Buldhana',
        market: 'Malkapur',
        commodity: 'Bengal Gram(Gram)(Whole)'
    },
    {
        state: 'Maharashtra',
        district: 'Buldhana',
        market: 'Malkapur',
        commodity: 'Jowar(Sorghum)'
    },
    {
        state: 'Maharashtra',
        district: 'Chandrapur',
        market: 'Chandrapur(Ganjwad)',
        commodity: 'Cabbage'
    },
    {
        state: 'Maharashtra',
        district: 'Chandrapur',
        market: 'Pombhurni',
        commodity: 'Paddy(Dhan)(Common)'
    },
    {
        state: 'Maharashtra',
        district: 'Chandrapur',
        market: 'Varora',
        commodity: 'Rice'
    },
    {
        state: 'Maharashtra',
        district: 'Dhule',
        market: 'Dhule',
        commodity: 'Maize'
    },
    {
        state: 'Maharashtra',
        district: 'Hingoli',
        market: 'Gajanan Krushi Utpanna Bazar (India) Pvt Ltd ',
        commodity: 'Turmeric'
    },
    {
        state: 'Maharashtra',
        district: 'Jalana',
        market: 'Bhokardan',
        commodity: 'Soyabean'
    },
    {
        state: 'Maharashtra',
        district: 'Jalana',
        market: 'Jalana',
        commodity: 'Bengal Gram(Gram)(Whole)'
    },
    {
        state: 'Maharashtra',
        district: 'Jalgaon',
        market: 'Jalgaon',
        commodity: 'Brinjal'
    },
    {
        state: 'Maharashtra',
        district: 'Satara',
        market: 'Karad',
        commodity: 'Green Chilli'
    },
    {
        state: 'Maharashtra',
        district: 'Satara',
        market: 'Karad',
        commodity: 'Guar'
    },
    {
        state: 'Maharashtra',
        district: 'Satara',
        market: 'Karad',
        commodity: 'Tomato'
    },
    {
        state: 'Maharashtra',
        district: 'Sholapur',
        market: 'Akluj',
        commodity: 'Brinjal'
    },
    {
        state: 'Maharashtra',
        district: 'Sholapur',
        market: 'Akluj',
        commodity: 'Chilly Capsicum'
    },
    {
        state: 'Maharashtra',
        district: 'Sholapur',
        market: 'Akluj',
        commodity: 'Spinach'
    },
    {
        state: 'Maharashtra',
        district: 'Sholapur',
        market: 'Dudhani',
        commodity: 'Arhar (Tur/Red Gram)(Whole)'
    },
    {
        state: 'Maharashtra',
        district: 'Sholapur',
        market: 'Mangal Wedha',
        commodity: 'Cucumbar(Kheera)'
    },
    {
        state: 'Maharashtra',
        district: 'Sholapur',
        market: 'Mangal Wedha',
        commodity: 'Ridgeguard(Tori)'
    },
    {
        state: 'Maharashtra',
        district: 'Sholapur',
        market: 'Mangal Wedha',
        commodity: 'Tomato'
    },
    {
        state: 'Maharashtra',
        district: 'Sholapur',
        market: 'Sangola',
        commodity: 'Pomegranate'
    },
    {
        state: 'Maharashtra',
        district: 'Sholapur',
        market: 'Solapur',
        commodity: 'Bhindi(Ladies Finger)'
    },
    {
        state: 'Maharashtra',
        district: 'Sholapur',
        market: 'Solapur',
        commodity: 'Lime'
    },
    {
        state: 'Maharashtra',
        district: 'Vashim',
        market: 'Washim',
        commodity: 'Arhar (Tur/Red Gram)(Whole)'
    },
    {
        state: 'Maharashtra',
        district: 'Vashim',
        market: 'Washim',
        commodity: 'Bengal Gram(Gram)(Whole)'
    },
    {
        state: 'Maharashtra',
        district: 'Vashim',
        market: 'Washim',
        commodity: 'Black Gram (Urd Beans)(Whole)'
    },
    {
        state: 'Maharashtra',
        district: 'Vashim',
        market: 'Washim',
        commodity: 'Soyabean'
    },
    {
        state: 'Maharashtra',
        district: 'Wardha',
        market: 'Sindi(Selu)',
        commodity: 'Bengal Gram(Gram)(Whole)'
    },
    {
        state: 'Maharashtra',
        district: 'Nashik',
        market: 'Chandvad',
        commodity: 'Onion'
    },
    {
        state: 'Maharashtra',
        district: 'Nashik',
        market: 'Lasalgaon(Niphad)',
        commodity: 'Groundnut'
    },
    {
        state: 'Maharashtra',
        district: 'Nashik',
        market: 'Nasik',
        commodity: 'Bottle gourd'
    },
    {
        state: 'Maharashtra',
        district: 'Nashik',
        market: 'Pimpalgaon',
        commodity: 'Onion'
    },
    {
        state: 'Maharashtra',
        district: 'Nashik',
        market: 'Pimpalgaon',
        commodity: 'Pomegranate'
    },
    {
        state: 'Maharashtra',
        district: 'Nashik',
        market: 'Pimpalgaon Baswant(Saykheda)',
        commodity: 'Onion'
    },
    {
        state: 'Maharashtra',
        district: 'Pune',
        market: 'Pune',
        commodity: 'Green Peas'
    },
    {
        state: 'Maharashtra',
        district: 'Pune',
        market: 'Pune',
        commodity: 'Jowar(Sorghum)'
    },
    {
        state: 'Maharashtra',
        district: 'Pune',
        market: 'Pune(Moshi)',
        commodity: 'Banana'
    },
    {
        state: 'Maharashtra',
        district: 'Pune',
        market: 'Pune(Moshi)',
        commodity: 'Cauliflower'
    },
    {
        state: 'Maharashtra',
        district: 'Pune',
        market: 'Pune(Moshi)',
        commodity: 'Garlic'
    },
    {
        state: 'Maharashtra',
        district: 'Pune',
        market: 'Pune(Moshi)',
        commodity: 'Guar'
    },
    {
        state: 'Maharashtra',
        district: 'Pune',
        market: 'Pune(Moshi)',
        commodity: 'Lime'
    },
    {
        state: 'Maharashtra',
        district: 'Pune',
        market: 'Pune(Moshi)',
        commodity: 'Onion'
    },
    {
        state: 'Maharashtra',
        district: 'Pune',
        market: 'Pune(Pimpri)',
        commodity: 'Cabbage'
    },
    {
        state: 'Maharashtra',
        district: 'Raigad',
        market: 'Pen',
        commodity: 'Chilly Capsicum'
    },
    {
        state: 'Maharashtra',
        district: 'Sangli',
        market: 'Sangli(Phale, Bhajipura Market)',
        commodity: 'Onion'
    },
    {
        state: 'Maharashtra',
        district: 'Sangli',
        market: 'Sangli(Phale, Bhajipura Market)',
        commodity: 'Pineapple'
    },
    {
        state: 'Maharashtra',
        district: 'Satara',
        market: 'Karad',
        commodity: 'Bhindi(Ladies Finger)'
    },
    {
        state: 'Maharashtra',
        district: 'Satara',
        market: 'Karad',
        commodity: 'Bitter gourd'
    },
    {
        state: 'Maharashtra',
        district: 'Satara',
        market: 'Karad',
        commodity: 'Bottle gourd'
    },
    {
        state: 'Maharashtra',
        district: 'Satara',
        market: 'Karad',
        commodity: 'Brinjal'
    },
    {
        state: 'Maharashtra',
        district: 'Satara',
        market: 'Karad',
        commodity: 'Chilly Capsicum'
    },
    {
        state: 'Maharashtra',
        district: 'Jalgaon',
        market: 'Jalgaon',
        commodity: 'Lime'
    },
    {
        state: 'Maharashtra',
        district: 'Jalgaon',
        market: 'Jalgaon',
        commodity: 'Little gourd (Kundru)'
    },
    {
        state: 'Maharashtra',
        district: 'Jalgaon',
        market: 'Pachora',
        commodity: 'Bajra(Pearl Millet/Cumbu)'
    },
    {
        state: 'Maharashtra',
        district: 'Jalgaon',
        market: 'Pachora',
        commodity: 'Maize'
    },
    {
        state: 'Maharashtra',
        district: 'Jalgaon',
        market: 'Pachora',
        commodity: 'Sunflower'
    },
    {
        state: 'Maharashtra',
        district: 'Kolhapur',
        market: 'Kolhapur',
        commodity: 'Brinjal'
    },
    {
        state: 'Maharashtra',
        district: 'Kolhapur',
        market: 'Kolhapur',
        commodity: 'Green Chilli'
    },
    {
        state: 'Maharashtra',
        district: 'Kolhapur',
        market: 'Kolhapur',
        commodity: 'Tomato'
    },
    {
        state: 'Maharashtra',
        district: 'Latur',
        market: 'Aurad Shahajani',
        commodity: 'Bengal Gram(Gram)(Whole)'
    },
    {
        state: 'Maharashtra',
        district: 'Latur',
        market: 'Aurad Shahajani',
        commodity: 'Safflower'
    },
    {
        state: 'Maharashtra',
        district: 'Latur',
        market: 'Nilanga',
        commodity: 'Bengal Gram(Gram)(Whole)'
    },
    {
        state: 'Maharashtra',
        district: 'Latur',
        market: 'Nilanga',
        commodity: 'Jowar(Sorghum)'
    },
    {
        state: 'Maharashtra',
        district: 'Nagpur',
        market: 'Kamthi',
        commodity: 'Bhindi(Ladies Finger)'
    },
    {
        state: 'Maharashtra',
        district: 'Nagpur',
        market: 'Kamthi',
        commodity: 'Cabbage'
    },
    {
        state: 'Maharashtra',
        district: 'Nagpur',
        market: 'Kamthi',
        commodity: 'Cucumbar(Kheera)'
    },
    {
        state: 'Maharashtra',
        district: 'Nagpur',
        market: 'Nagpur',
        commodity: 'Apple'
    },
    {
        state: 'Maharashtra',
        district: 'Nagpur',
        market: 'Nagpur',
        commodity: 'Arhar (Tur/Red Gram)(Whole)'
    },
    {
        state: 'Maharashtra',
        district: 'Nagpur',
        market: 'Nagpur',
        commodity: 'Bengal Gram(Gram)(Whole)'
    },
    {
        state: 'Maharashtra',
        district: 'Nagpur',
        market: 'Nagpur',
        commodity: 'Cauliflower'
    },
    {
        state: 'Nagaland',
        district: 'Dimapur',
        market: 'Dimapur',
        commodity: 'Bhindi(Ladies Finger)'
    },
    {
        state: 'Nagaland',
        district: 'Dimapur',
        market: 'Dimapur',
        commodity: 'Brinjal'
    },
    {
        state: 'Nagaland',
        district: 'Dimapur',
        market: 'Niuland',
        commodity: 'Bitter gourd'
    },
    {
        state: 'Nagaland',
        district: 'Dimapur',
        market: 'Niuland',
        commodity: 'Leafy Vegetable'
    },
    {
        state: 'Nagaland',
        district: 'Kiphire',
        market: 'Kipheri',
        commodity: 'Banana'
    },
    {
        state: 'Nagaland',
        district: 'Kiphire',
        market: 'Kipheri',
        commodity: 'Tomato'
    },
    {
        state: 'Nagaland',
        district: 'Kohima',
        market: 'Jalukie',
        commodity: 'Bottle gourd'
    },
    {
        state: 'Nagaland',
        district: 'Kohima',
        market: 'Tseminyu',
        commodity: 'Chow Chow'
    },
    {
        state: 'Nagaland',
        district: 'Kohima',
        market: 'Tseminyu',
        commodity: 'Cucumbar(Kheera)'
    },
    {
        state: 'Nagaland',
        district: 'Kohima',
        market: 'Tseminyu',
        commodity: 'Pumpkin'
    },
    {
        state: 'Nagaland',
        district: 'Tuensang',
        market: 'Tuensang',
        commodity: 'Beans'
    },
    {
        state: 'Nagaland',
        district: 'Dimapur',
        market: 'Niuland',
        commodity: 'Brinjal'
    },
    {
        state: 'Nagaland',
        district: 'Dimapur',
        market: 'Niuland',
        commodity: 'Onion'
    },
    {
        state: 'Nagaland',
        district: 'Kohima',
        market: 'Jalukie',
        commodity: 'Papaya (Raw)'
    },
    {
        state: 'Nagaland',
        district: 'Kohima',
        market: 'Jalukie',
        commodity: 'Pineapple'
    },
    {
        state: 'Nagaland',
        district: 'Kohima',
        market: 'Tseminyu',
        commodity: 'Bottle gourd'
    },
    {
        state: 'Nagaland',
        district: 'Kohima',
        market: 'Tseminyu',
        commodity: 'Green Chilli'
    },
    {
        state: 'Nagaland',
        district: 'Longleng',
        market: 'Longleng',
        commodity: 'Banana'
    },
    {
        state: 'Nagaland',
        district: 'Longleng',
        market: 'Longleng',
        commodity: 'Leafy Vegetable'
    },
    {
        state: 'Nagaland',
        district: 'Mokokchung',
        market: 'Tuli',
        commodity: 'Ginger(Green)'
    },
    {
        state: 'Nagaland',
        district: 'Dimapur',
        market: 'Dimapur',
        commodity: 'Bottle gourd'
    },
    {
        state: 'Nagaland',
        district: 'Dimapur',
        market: 'Dimapur',
        commodity: 'Green Chilli'
    },
    {
        state: 'Nagaland',
        district: 'Dimapur',
        market: 'Dimapur',
        commodity: 'Leafy Vegetable'
    },
    {
        state: 'Nagaland',
        district: 'Dimapur',
        market: 'Dimapur',
        commodity: 'Pumpkin'
    },
    {
        state: 'Nagaland',
        district: 'Dimapur',
        market: 'Niuland',
        commodity: 'Arecanut(Betelnut/Supari)'
    },
    {
        state: 'Nagaland',
        district: 'Dimapur',
        market: 'Niuland',
        commodity: 'Banana - Green'
    },
    {
        state: 'Nagaland',
        district: 'Kiphire',
        market: 'Kipheri',
        commodity: 'Ginger(Green)'
    },
    {
        state: 'Nagaland',
        district: 'Kiphire',
        market: 'Kipheri',
        commodity: 'Leafy Vegetable'
    },
    {
        state: 'Nagaland',
        district: 'Kohima',
        market: 'Jalukie',
        commodity: 'Bitter gourd'
    },
    {
        state: 'Nagaland',
        district: 'Kohima',
        market: 'Jalukie',
        commodity: 'Leafy Vegetable'
    },
    {
        state: 'Nagaland',
        district: 'Kohima',
        market: 'Jalukie',
        commodity: 'Potato'
    },
    {
        state: 'Nagaland',
        district: 'Kohima',
        market: 'Tseminyu',
        commodity: 'Tomato'
    },
    {
        state: 'Nagaland',
        district: 'Mokokchung',
        market: 'Tuli',
        commodity: 'Arecanut(Betelnut/Supari)'
    },
    {
        state: 'Nagaland',
        district: 'Mokokchung',
        market: 'Tuli',
        commodity: 'Papaya (Raw)'
    },
    {
        state: 'Nagaland',
        district: 'Kiphire',
        market: 'Kipheri',
        commodity: 'Cabbage'
    },
    {
        state: 'Nagaland',
        district: 'Kohima',
        market: 'Jalukie',
        commodity: 'Pumpkin'
    },
    {
        state: 'Nagaland',
        district: 'Kohima',
        market: 'Tseminyu',
        commodity: 'Brinjal'
    },
    {
        state: 'Nagaland',
        district: 'Kohima',
        market: 'Tseminyu',
        commodity: 'Colacasia'
    },
    {
        state: 'Nagaland',
        district: 'Kohima',
        market: 'Tseminyu',
        commodity: 'Leafy Vegetable'
    },
    {
        state: 'Nagaland',
        district: 'Kohima',
        market: 'Tseminyu',
        commodity: 'Maize'
    },
    {
        state: 'Nagaland',
        district: 'Mokokchung',
        market: 'Tuli',
        commodity: 'Banana'
    },
    {
        state: 'Nagaland',
        district: 'Mokokchung',
        market: 'Tuli',
        commodity: 'Lemon'
    },
    {
        state: 'Nagaland',
        district: 'Tuensang',
        market: 'Tuensang',
        commodity: 'Leafy Vegetable'
    },
    {
        state: 'Nagaland',
        district: 'Tuensang',
        market: 'Tuensang',
        commodity: 'Potato'
    },
    {
        state: 'Nagaland',
        district: 'Zunheboto',
        market: 'Ghathashi',
        commodity: 'Papaya'
    },
    {
        state: 'Nagaland',
        district: 'Dimapur',
        market: 'Dimapur',
        commodity: 'Beans'
    },
    {
        state: 'Nagaland',
        district: 'Dimapur',
        market: 'Dimapur',
        commodity: 'Cucumbar(Kheera)'
    },
    {
        state: 'Nagaland',
        district: 'Dimapur',
        market: 'Niuland',
        commodity: 'Green Chilli'
    },
    {
        state: 'Nagaland',
        district: 'Dimapur',
        market: 'Niuland',
        commodity: 'Yam (Ratalu)'
    },
    {
        state: 'Nagaland',
        district: 'Kohima',
        market: 'Jalukie',
        commodity: 'Cabbage'
    },
    {
        state: 'Nagaland',
        district: 'Kohima',
        market: 'Jalukie',
        commodity: 'Green Chilli'
    },
    {
        state: 'Nagaland',
        district: 'Kohima',
        market: 'Jalukie',
        commodity: 'Onion'
    },
    {
        state: 'Nagaland',
        district: 'Kohima',
        market: 'Jalukie',
        commodity: 'Tomato'
    },
    {
        state: 'Nagaland',
        district: 'Kohima',
        market: 'Tseminyu',
        commodity: 'Banana - Green'
    },
    {
        state: 'Nagaland',
        district: 'Longleng',
        market: 'Longleng',
        commodity: 'Beans'
    },
    {
        state: 'Nagaland',
        district: 'Zunheboto',
        market: 'Ghathashi',
        commodity: 'Banana'
    },
    {
        state: 'Nagaland',
        district: 'Zunheboto',
        market: 'Ghathashi',
        commodity: 'Cucumbar(Kheera)'
    },
    {
        state: 'Nagaland',
        district: 'Zunheboto',
        market: 'Ghathashi',
        commodity: 'Tapioca'
    },
    {
        state: 'NCT of Delhi',
        district: 'Delhi',
        market: 'Azadpur',
        commodity: 'Banana'
    },
    {
        state: 'NCT of Delhi',
        district: 'Delhi',
        market: 'Azadpur',
        commodity: 'Bottle gourd'
    },
    {
        state: 'NCT of Delhi',
        district: 'Delhi',
        market: 'Azadpur',
        commodity: 'Cabbage'
    },
    {
        state: 'NCT of Delhi',
        district: 'Delhi',
        market: 'Azadpur',
        commodity: 'Cucumbar(Kheera)'
    },
    {
        state: 'NCT of Delhi',
        district: 'Delhi',
        market: 'Azadpur',
        commodity: 'Green Chilli'
    },
    {
        state: 'NCT of Delhi',
        district: 'Delhi',
        market: 'Azadpur',
        commodity: 'Guar'
    },
    {
        state: 'NCT of Delhi',
        district: 'Delhi',
        market: 'Azadpur',
        commodity: 'Mango'
    },
    {
        state: 'NCT of Delhi',
        district: 'Delhi',
        market: 'Azadpur',
        commodity: 'Mousambi(Sweet Lime)'
    },
    {
        state: 'NCT of Delhi',
        district: 'Delhi',
        market: 'Azadpur',
        commodity: 'Potato'
    },
    {
        state: 'NCT of Delhi',
        district: 'Delhi',
        market: 'Azadpur',
        commodity: 'Water Melon'
    },
    {
        state: 'NCT of Delhi',
        district: 'Delhi',
        market: 'Flower Market,Gazipur',
        commodity: 'Gladiolus Cut Flower'
    },
    {
        state: 'NCT of Delhi',
        district: 'Delhi',
        market: 'Flower Market,Gazipur',
        commodity: 'Carnation'
    },
    {
        state: 'NCT of Delhi',
        district: 'Delhi',
        market: 'Flower Market,Gazipur',
        commodity: 'Marigold(Calcutta)'
    },
    {
        state: 'NCT of Delhi',
        district: 'Delhi',
        market: 'Flower Market,Gazipur',
        commodity: 'Rose(Loose))'
    },
    {
        state: 'NCT of Delhi',
        district: 'Delhi',
        market: 'Flower Market,Gazipur',
        commodity: 'Tube Rose(Double)'
    },
    {
        state: 'NCT of Delhi',
        district: 'Delhi',
        market: 'Azadpur',
        commodity: 'Apple'
    },
    {
        state: 'NCT of Delhi',
        district: 'Delhi',
        market: 'Azadpur',
        commodity: 'Banana - Green'
    },
    {
        state: 'NCT of Delhi',
        district: 'Delhi',
        market: 'Azadpur',
        commodity: 'Beetroot'
    },
    {
        state: 'NCT of Delhi',
        district: 'Delhi',
        market: 'Azadpur',
        commodity: 'Bhindi(Ladies Finger)'
    },
    {
        state: 'NCT of Delhi',
        district: 'Delhi',
        market: 'Azadpur',
        commodity: 'Capsicum'
    },
    {
        state: 'NCT of Delhi',
        district: 'Delhi',
        market: 'Azadpur',
        commodity: 'Cauliflower'
    },
    {
        state: 'NCT of Delhi',
        district: 'Delhi',
        market: 'Azadpur',
        commodity: 'Lemon'
    },
    {
        state: 'NCT of Delhi',
        district: 'Delhi',
        market: 'Azadpur',
        commodity: 'Pumpkin'
    },
    {
        state: 'NCT of Delhi',
        district: 'Delhi',
        market: 'Azadpur',
        commodity: 'Spinach'
    },
    {
        state: 'NCT of Delhi',
        district: 'Delhi',
        market: 'Azadpur',
        commodity: 'Brinjal'
    },
    {
        state: 'NCT of Delhi',
        district: 'Delhi',
        market: 'Azadpur',
        commodity: 'Papaya'
    },
    {
        state: 'NCT of Delhi',
        district: 'Delhi',
        market: 'Azadpur',
        commodity: 'Peas Wet'
    },
    {
        state: 'NCT of Delhi',
        district: 'Delhi',
        market: 'Azadpur',
        commodity: 'Pineapple'
    },
    {
        state: 'NCT of Delhi',
        district: 'Delhi',
        market: 'Azadpur',
        commodity: 'Pointed gourd (Parval)'
    },
    {
        state: 'NCT of Delhi',
        district: 'Delhi',
        market: 'Azadpur',
        commodity: 'Raddish'
    },
    {
        state: 'NCT of Delhi',
        district: 'Delhi',
        market: 'Flower Market,Gazipur',
        commodity: 'Chrysanthemum(Loose)'
    },
    {
        state: 'NCT of Delhi',
        district: 'Delhi',
        market: 'Flower Market,Gazipur',
        commodity: 'Jarbara'
    },
    {
        state: 'NCT of Delhi',
        district: 'Delhi',
        market: 'Flower Market,Gazipur',
        commodity: 'Lotus'
    },
    {
        state: 'NCT of Delhi',
        district: 'Delhi',
        market: 'Flower Market,Gazipur',
        commodity: 'Patti Calcutta'
    },
    {
        state: 'NCT of Delhi',
        district: 'Delhi',
        market: 'Azadpur',
        commodity: 'Chikoos(Sapota)'
    },
    {
        state: 'NCT of Delhi',
        district: 'Delhi',
        market: 'Azadpur',
        commodity: 'Guava'
    },
    {
        state: 'NCT of Delhi',
        district: 'Delhi',
        market: 'Azadpur',
        commodity: 'Karbuja(Musk Melon)'
    },
    {
        state: 'NCT of Delhi',
        district: 'Delhi',
        market: 'Azadpur',
        commodity: 'Mango (Raw-Ripe)'
    },
    {
        state: 'NCT of Delhi',
        district: 'Delhi',
        market: 'Azadpur',
        commodity: 'Onion'
    },
    {
        state: 'NCT of Delhi',
        district: 'Delhi',
        market: 'Flower Market,Gazipur',
        commodity: 'Chrysanthemum'
    },
    {
        state: 'NCT of Delhi',
        district: 'Delhi',
        market: 'Flower Market,Gazipur',
        commodity: 'Lilly'
    },
    {
        state: 'NCT of Delhi',
        district: 'Delhi',
        market: 'Flower Market,Gazipur',
        commodity: 'Raibel'
    },
    {
        state: 'NCT of Delhi',
        district: 'Delhi',
        market: 'Flower Market,Gazipur',
        commodity: 'Tube Rose(Single)'
    },
    {
        state: 'NCT of Delhi',
        district: 'Delhi',
        market: 'Azadpur',
        commodity: 'Pomegranate'
    },
    {
        state: 'NCT of Delhi',
        district: 'Delhi',
        market: 'Azadpur',
        commodity: 'Sweet Pumpkin'
    },
    {
        state: 'NCT of Delhi',
        district: 'Delhi',
        market: 'Azadpur',
        commodity: 'Tender Coconut'
    },
    {
        state: 'NCT of Delhi',
        district: 'Delhi',
        market: 'Azadpur',
        commodity: 'Yam (Ratalu)'
    },
    {
        state: 'NCT of Delhi',
        district: 'Delhi',
        market: 'Flower Market,Gazipur',
        commodity: 'Anthorium'
    },
    {
        state: 'NCT of Delhi',
        district: 'Delhi',
        market: 'Flower Market,Gazipur',
        commodity: 'Jaffri'
    },
    {
        state: 'NCT of Delhi',
        district: 'Delhi',
        market: 'Flower Market,Gazipur',
        commodity: 'Orchid'
    },
    {
        state: 'NCT of Delhi',
        district: 'Delhi',
        market: 'Flower Market,Gazipur',
        commodity: 'Rose(Local)'
    },
    {
        state: 'NCT of Delhi',
        district: 'Delhi',
        market: 'Azadpur',
        commodity: 'Bitter gourd'
    },
    {
        state: 'NCT of Delhi',
        district: 'Delhi',
        market: 'Azadpur',
        commodity: 'Carrot'
    },
    {
        state: 'NCT of Delhi',
        district: 'Delhi',
        market: 'Azadpur',
        commodity: 'Coriander(Leaves)'
    },
    {
        state: 'NCT of Delhi',
        district: 'Delhi',
        market: 'Azadpur',
        commodity: 'Jamun(Narale Hannu)'
    },
    {
        state: 'Odisha',
        district: 'Angul',
        market: 'Angul(Atthamallick)',
        commodity: 'Bhindi(Ladies Finger)'
    },
    {
        state: 'Odisha',
        district: 'Angul',
        market: 'Angul(Atthamallick)',
        commodity: 'Potato'
    },
    {
        state: 'Odisha',
        district: 'Balasore',
        market: 'Jaleswar',
        commodity: 'Potato'
    },
    {
        state: 'Odisha',
        district: 'Dhenkanal',
        market: 'Hindol',
        commodity: 'Banana - Green'
    },
    {
        state: 'Odisha',
        district: 'Dhenkanal',
        market: 'Hindol',
        commodity: 'Bhindi(Ladies Finger)'
    },
    {
        state: 'Odisha',
        district: 'Dhenkanal',
        market: 'Hindol',
        commodity: 'Pointed gourd (Parval)'
    },
    {
        state: 'Odisha',
        district: 'Dhenkanal',
        market: 'Hindol',
        commodity: 'Pumpkin'
    },
    {
        state: 'Odisha',
        district: 'Gajapati',
        market: 'Kasinagar',
        commodity: 'Banana'
    },
    {
        state: 'Odisha',
        district: 'Gajapati',
        market: 'Kasinagar',
        commodity: 'Brinjal'
    },
    {
        state: 'Odisha',
        district: 'Gajapati',
        market: 'Parlakhemundi',
        commodity: 'Mango'
    },
    {
        state: 'Odisha',
        district: 'Gajapati',
        market: 'Parlakhemundi',
        commodity: 'Ox'
    },
    {
        state: 'Odisha',
        district: 'Keonjhar',
        market: 'Anandapur',
        commodity: 'Paddy(Dhan)(Common)'
    },
    {
        state: 'Odisha',
        district: 'Mayurbhanja',
        market: 'Karanjia',
        commodity: 'Apple'
    },
    {
        state: 'Odisha',
        district: 'Mayurbhanja',
        market: 'Karanjia',
        commodity: 'Egg'
    },
    {
        state: 'Odisha',
        district: 'Mayurbhanja',
        market: 'Karanjia',
        commodity: 'Paddy(Dhan)(Common)'
    },
    {
        state: 'Odisha',
        district: 'Mayurbhanja',
        market: 'Karanjia',
        commodity: 'Rice'
    },
    {
        state: 'Odisha',
        district: 'Nowarangpur',
        market: 'Nawarangpur',
        commodity: 'Maize'
    },
    {
        state: 'Odisha',
        district: 'Balasore',
        market: 'Jaleswar',
        commodity: 'Pumpkin'
    },
    {
        state: 'Odisha',
        district: 'Gajapati',
        market: 'Parlakhemundi',
        commodity: 'Brinjal'
    },
    {
        state: 'Odisha',
        district: 'Angul',
        market: 'Angul(Atthamallick)',
        commodity: 'Brinjal'
    },
    {
        state: 'Odisha',
        district: 'Balasore',
        market: 'Jaleswar',
        commodity: 'Cucumbar(Kheera)'
    },
    {
        state: 'Odisha',
        district: 'Balasore',
        market: 'Jaleswar',
        commodity: 'Garlic'
    },
    {
        state: 'Odisha',
        district: 'Balasore',
        market: 'Jaleswar',
        commodity: 'Onion'
    },
    {
        state: 'Odisha',
        district: 'Dhenkanal',
        market: 'Hindol',
        commodity: 'Beans'
    },
    {
        state: 'Odisha',
        district: 'Dhenkanal',
        market: 'Hindol',
        commodity: 'Brinjal'
    },
    {
        state: 'Odisha',
        district: 'Dhenkanal',
        market: 'Hindol',
        commodity: 'Cucumbar(Kheera)'
    },
    {
        state: 'Odisha',
        district: 'Dhenkanal',
        market: 'Hindol',
        commodity: 'Onion'
    },
    {
        state: 'Odisha',
        district: 'Dhenkanal',
        market: 'Hindol',
        commodity: 'Potato'
    },
    {
        state: 'Odisha',
        district: 'Dhenkanal',
        market: 'Hindol',
        commodity: 'Tomato'
    },
    {
        state: 'Odisha',
        district: 'Gajapati',
        market: 'Parlakhemundi',
        commodity: 'Cauliflower'
    },
    {
        state: 'Odisha',
        district: 'Gajapati',
        market: 'Parlakhemundi',
        commodity: 'Goat'
    },
    {
        state: 'Odisha',
        district: 'Keonjhar',
        market: 'Anandapur',
        commodity: 'Pumpkin'
    },
    {
        state: 'Odisha',
        district: 'Keonjhar',
        market: 'Anandapur',
        commodity: 'Ridgeguard(Tori)'
    },
    {
        state: 'Odisha',
        district: 'Mayurbhanja',
        market: 'Karanjia',
        commodity: 'Fish'
    },
    {
        state: 'Odisha',
        district: 'Nowarangpur',
        market: 'Nawarangpur',
        commodity: 'Gur(Jaggery)'
    },
    {
        state: 'Odisha',
        district: 'Angul',
        market: 'Angul(Atthamallick)',
        commodity: 'Onion'
    },
    {
        state: 'Odisha',
        district: 'Angul',
        market: 'Angul(Atthamallick)',
        commodity: 'Tomato'
    },
    {
        state: 'Odisha',
        district: 'Mayurbhanja',
        market: 'Karanjia',
        commodity: 'Bhindi(Ladies Finger)'
    },
    {
        state: 'Odisha',
        district: 'Balasore',
        market: 'Jaleswar',
        commodity: 'Brinjal'
    },
    {
        state: 'Odisha',
        district: 'Dhenkanal',
        market: 'Hindol',
        commodity: 'Bitter gourd'
    },
    {
        state: 'Odisha',
        district: 'Gajapati',
        market: 'Parlakhemundi',
        commodity: 'Banana - Green'
    },
    {
        state: 'Odisha',
        district: 'Gajapati',
        market: 'Parlakhemundi',
        commodity: 'Cabbage'
    },
    {
        state: 'Odisha',
        district: 'Gajapati',
        market: 'Parlakhemundi',
        commodity: 'Cock'
    },
    {
        state: 'Punjab',
        district: 'Sangrur',
        market: 'Ahmedgarh',
        commodity: 'Cauliflower'
    },
    {
        state: 'Punjab',
        district: 'Sangrur',
        market: 'Ahmedgarh',
        commodity: 'Maize'
    },
    {
        state: 'Punjab',
        district: 'Tarntaran',
        market: 'Patti',
        commodity: 'Bottle gourd'
    },
    {
        state: 'Punjab',
        district: 'Tarntaran',
        market: 'Patti',
        commodity: 'Onion'
    },
    {
        state: 'Punjab',
        district: 'Tarntaran',
        market: 'Tarantaran',
        commodity: 'Cauliflower'
    },
    {
        state: 'Punjab',
        district: 'Tarntaran',
        market: 'Tarantaran',
        commodity: 'Peas cod'
    },
    {
        state: 'Punjab',
        district: 'Amritsar',
        market: 'Rayya',
        commodity: 'Cauliflower'
    },
    {
        state: 'Punjab',
        district: 'Fazilka',
        market: 'Jalalabad',
        commodity: 'Bhindi(Ladies Finger)'
    },
    {
        state: 'Punjab',
        district: 'Fazilka',
        market: 'Jalalabad',
        commodity: 'Cauliflower'
    },
    {
        state: 'Punjab',
        district: 'Fazilka',
        market: 'Jalalabad',
        commodity: 'Mango'
    },
    {
        state: 'Punjab',
        district: 'Fazilka',
        market: 'Jalalabad',
        commodity: 'Pomegranate'
    },
    {
        state: 'Punjab',
        district: 'Fazilka',
        market: 'Jalalabad',
        commodity: 'Tinda'
    },
    {
        state: 'Punjab',
        district: 'Fazilka',
        market: 'Jalalabad',
        commodity: 'Tomato'
    },
    {
        state: 'Punjab',
        district: 'Amritsar',
        market: 'Rayya',
        commodity: 'Onion'
    },
    {
        state: 'Punjab',
        district: 'Bhatinda',
        market: 'Raman',
        commodity: 'Mango'
    },
    {
        state: 'Punjab',
        district: 'Fazilka',
        market: 'Jalalabad',
        commodity: 'Green Chilli'
    },
    {
        state: 'Punjab',
        district: 'Fazilka',
        market: 'Jalalabad',
        commodity: 'Papaya'
    },
    {
        state: 'Punjab',
        district: 'Fazilka',
        market: 'Jalalabad',
        commodity: 'Sweet Pumpkin'
    },
    {
        state: 'Punjab',
        district: 'Gurdaspur',
        market: 'Kalanaur',
        commodity: 'Green Chilli'
    },
    {
        state: 'Punjab',
        district: 'Ludhiana',
        market: 'Doraha',
        commodity: 'Lemon'
    },
    {
        state: 'Punjab',
        district: 'Tarntaran',
        market: 'Patti',
        commodity: 'Brinjal'
    },
    {
        state: 'Punjab',
        district: 'Tarntaran',
        market: 'Patti',
        commodity: 'Potato'
    },
    {
        state: 'Punjab',
        district: 'Tarntaran',
        market: 'Patti',
        commodity: 'Ridgeguard(Tori)'
    },
    {
        state: 'Punjab',
        district: 'Tarntaran',
        market: 'Tarantaran',
        commodity: 'Bhindi(Ladies Finger)'
    },
    {
        state: 'Punjab',
        district: 'Tarntaran',
        market: 'Tarantaran',
        commodity: 'Green Chilli'
    },
    {
        state: 'Punjab',
        district: 'Tarntaran',
        market: 'Tarantaran',
        commodity: 'Potato'
    },
    {
        state: 'Punjab',
        district: 'Amritsar',
        market: 'Rayya',
        commodity: 'Bhindi(Ladies Finger)'
    },
    {
        state: 'Punjab',
        district: 'Amritsar',
        market: 'Rayya',
        commodity: 'Brinjal'
    },
    {
        state: 'Punjab',
        district: 'Amritsar',
        market: 'Rayya',
        commodity: 'Raddish'
    },
    {
        state: 'Punjab',
        district: 'Amritsar',
        market: 'Rayya',
        commodity: 'Tomato'
    },
    {
        state: 'Punjab',
        district: 'Bhatinda',
        market: 'Raman',
        commodity: 'Potato'
    },
    {
        state: 'Punjab',
        district: 'Bhatinda',
        market: 'Raman',
        commodity: 'Tomato'
    },
    {
        state: 'Punjab',
        district: 'Fazilka',
        market: 'Jalalabad',
        commodity: 'Apple'
    },
    {
        state: 'Punjab',
        district: 'Fazilka',
        market: 'Jalalabad',
        commodity: 'Lemon'
    },
    {
        state: 'Punjab',
        district: 'Fazilka',
        market: 'Jalalabad',
        commodity: 'Pear(Marasebu)'
    },
    {
        state: 'Punjab',
        district: 'Ludhiana',
        market: 'Doraha',
        commodity: 'Bottle gourd'
    },
    {
        state: 'Punjab',
        district: 'Ludhiana',
        market: 'Doraha',
        commodity: 'Onion'
    },
    {
        state: 'Punjab',
        district: 'Ludhiana',
        market: 'Sahnewal',
        commodity: 'Onion'
    },
    {
        state: 'Punjab',
        district: 'Mansa',
        market: 'Mansa',
        commodity: 'Green Gram (Moong)(Whole)'
    },
    {
        state: 'Punjab',
        district: 'Sangrur',
        market: 'Ahmedgarh',
        commodity: 'Bhindi(Ladies Finger)'
    },
    {
        state: 'Punjab',
        district: 'Tarntaran',
        market: 'Patti',
        commodity: 'Colacasia'
    },
    {
        state: 'Punjab',
        district: 'Tarntaran',
        market: 'Patti',
        commodity: 'Green Chilli'
    },
    {
        state: 'Punjab',
        district: 'Tarntaran',
        market: 'Patti',
        commodity: 'Lemon'
    },
    {
        state: 'Punjab',
        district: 'Tarntaran',
        market: 'Patti',
        commodity: 'Pumpkin'
    },
    {
        state: 'Punjab',
        district: 'Tarntaran',
        market: 'Tarantaran',
        commodity: 'Brinjal'
    },
    {
        state: 'Punjab',
        district: 'Tarntaran',
        market: 'Tarantaran',
        commodity: 'Cucumbar(Kheera)'
    },
    {
        state: 'Punjab',
        district: 'Tarntaran',
        market: 'Tarantaran',
        commodity: 'Pumpkin'
    },
    {
        state: 'Punjab',
        district: 'Bhatinda',
        market: 'Raman',
        commodity: 'Banana'
    },
    {
        state: 'Punjab',
        district: 'Bhatinda',
        market: 'Raman',
        commodity: 'Onion'
    },
    {
        state: 'Punjab',
        district: 'Fazilka',
        market: 'Jalalabad',
        commodity: 'Bitter gourd'
    },
    {
        state: 'Punjab',
        district: 'Fazilka',
        market: 'Jalalabad',
        commodity: 'Cucumbar(Kheera)'
    },
    {
        state: 'Punjab',
        district: 'Fazilka',
        market: 'Jalalabad',
        commodity: 'Peas Wet'
    },
    {
        state: 'Punjab',
        district: 'Fazilka',
        market: 'Jalalabad',
        commodity: 'Plum'
    },
    {
        state: 'Punjab',
        district: 'Fazilka',
        market: 'Jalalabad',
        commodity: 'Potato'
    },
    {
        state: 'Punjab',
        district: 'Fazilka',
        market: 'Jalalabad',
        commodity: 'Pumpkin'
    },
    {
        state: 'Punjab',
        district: 'Fazilka',
        market: 'Jalalabad',
        commodity: 'Ridgeguard(Tori)'
    },
    {
        state: 'Punjab',
        district: 'Gurdaspur',
        market: 'Kalanaur',
        commodity: 'Bhindi(Ladies Finger)'
    },
    {
        state: 'Punjab',
        district: 'Ludhiana',
        market: 'Doraha',
        commodity: 'Banana'
    },
    {
        state: 'Punjab',
        district: 'Ludhiana',
        market: 'Doraha',
        commodity: 'Bhindi(Ladies Finger)'
    },
    {
        state: 'Punjab',
        district: 'Ludhiana',
        market: 'Doraha',
        commodity: 'Green Chilli'
    },
    {
        state: 'Punjab',
        district: 'Ludhiana',
        market: 'Doraha',
        commodity: 'Peas Wet'
    },
    {
        state: 'Punjab',
        district: 'Ludhiana',
        market: 'Sahnewal',
        commodity: 'Bitter gourd'
    },
    {
        state: 'Punjab',
        district: 'Tarntaran',
        market: 'Patti',
        commodity: 'Bhindi(Ladies Finger)'
    },
    {
        state: 'Punjab',
        district: 'Amritsar',
        market: 'Rayya',
        commodity: 'Green Chilli'
    },
    {
        state: 'Punjab',
        district: 'Amritsar',
        market: 'Rayya',
        commodity: 'Potato'
    },
    {
        state: 'Punjab',
        district: 'Fazilka',
        market: 'Jalalabad',
        commodity: 'Banana'
    },
    {
        state: 'Punjab',
        district: 'Fazilka',
        market: 'Jalalabad',
        commodity: 'Cabbage'
    },
    {
        state: 'Punjab',
        district: 'Fazilka',
        market: 'Jalalabad',
        commodity: 'Mousambi(Sweet Lime)'
    },
    {
        state: 'Punjab',
        district: 'Fazilka',
        market: 'Jalalabad',
        commodity: 'Onion'
    },
    {
        state: 'Punjab',
        district: 'Gurdaspur',
        market: 'Kalanaur',
        commodity: 'Bottle gourd'
    },
    {
        state: 'Punjab',
        district: 'Gurdaspur',
        market: 'Kalanaur',
        commodity: 'Brinjal'
    },
    {
        state: 'Punjab',
        district: 'Ludhiana',
        market: 'Doraha',
        commodity: 'Cucumbar(Kheera)'
    },
    {
        state: 'Punjab',
        district: 'Ludhiana',
        market: 'Doraha',
        commodity: 'Potato'
    },
    {
        state: 'Punjab',
        district: 'Ludhiana',
        market: 'Doraha',
        commodity: 'Tomato'
    },
    {
        state: 'Punjab',
        district: 'Ludhiana',
        market: 'Sahnewal',
        commodity: 'Potato'
    },
    {
        state: 'Punjab',
        district: 'Tarntaran',
        market: 'Patti',
        commodity: 'Bitter gourd'
    },
    {
        state: 'Punjab',
        district: 'Tarntaran',
        market: 'Patti',
        commodity: 'Capsicum'
    },
    {
        state: 'Punjab',
        district: 'Tarntaran',
        market: 'Patti',
        commodity: 'Cucumbar(Kheera)'
    },
    {
        state: 'Punjab',
        district: 'Tarntaran',
        market: 'Patti',
        commodity: 'Garlic'
    },
    {
        state: 'Punjab',
        district: 'Tarntaran',
        market: 'Patti',
        commodity: 'Round gourd'
    },
    {
        state: 'Punjab',
        district: 'Tarntaran',
        market: 'Tarantaran',
        commodity: 'Onion'
    },
    {
        state: 'Rajasthan',
        district: 'Ajmer',
        market: 'Bijay Nagar',
        commodity: 'Wheat'
    },
    {
        state: 'Rajasthan',
        district: 'Ajmer',
        market: 'Vijay Nagar(Gulabpura)',
        commodity: 'Barley (Jau)'
    },
    {
        state: 'Rajasthan',
        district: 'Ajmer',
        market: 'Vijay Nagar(Gulabpura)',
        commodity: 'Maize'
    },
    {
        state: 'Rajasthan',
        district: 'Baran',
        market: 'Baran',
        commodity: 'Garlic'
    },
    {
        state: 'Rajasthan',
        district: 'Baran',
        market: 'Baran',
        commodity: 'Mustard'
    },
    {
        state: 'Rajasthan',
        district: 'Jaipur',
        market: 'Kotputli',
        commodity: 'Mustard'
    },
    {
        state: 'Rajasthan',
        district: 'Jalore',
        market: 'Jalore',
        commodity: 'Bhindi(Ladies Finger)'
    },
    {
        state: 'Rajasthan',
        district: 'Jalore',
        market: 'Jalore',
        commodity: 'Bottle gourd'
    },
    {
        state: 'Rajasthan',
        district: 'Jalore',
        market: 'Jalore',
        commodity: 'Coriander(Leaves)'
    },
    {
        state: 'Rajasthan',
        district: 'Jalore',
        market: 'Jalore',
        commodity: 'Mango'
    },
    {
        state: 'Rajasthan',
        district: 'Jhalawar',
        market: 'Bhawani Mandi(Choumehla)',
        commodity: 'Mustard'
    },
    {
        state: 'Rajasthan',
        district: 'Sikar',
        market: 'Surajgarh',
        commodity: 'Mustard'
    },
    {
        state: 'Rajasthan',
        district: 'Tonk',
        market: 'Malpura',
        commodity: 'Jowar(Sorghum)'
    },
    {
        state: 'Rajasthan',
        district: 'Tonk',
        market: 'Tonk',
        commodity: 'Barley (Jau)'
    },
    {
        state: 'Rajasthan',
        district: 'Tonk',
        market: 'Uniyara',
        commodity: 'Wheat'
    },
    {
        state: 'Rajasthan',
        district: 'Ajmer',
        market: 'Bijay Nagar',
        commodity: 'Jowar(Sorghum)'
    },
    {
        state: 'Rajasthan',
        district: 'Ajmer',
        market: 'Bijay Nagar',
        commodity: 'Maize'
    },
    {
        state: 'Rajasthan',
        district: 'Ajmer',
        market: 'Kekri',
        commodity: 'Black Gram (Urd Beans)(Whole)'
    },
    {
        state: 'Rajasthan',
        district: 'Ajmer',
        market: 'Kekri',
        commodity: 'Green Gram (Moong)(Whole)'
    },
    {
        state: 'Rajasthan',
        district: 'Ajmer',
        market: 'Kekri',
        commodity: 'Wheat'
    },
    {
        state: 'Rajasthan',
        district: 'Baran',
        market: 'Baran',
        commodity: 'Black Gram (Urd Beans)(Whole)'
    },
    {
        state: 'Rajasthan',
        district: 'Baran',
        market: 'Baran',
        commodity: 'Soyabean'
    },
    {
        state: 'Rajasthan',
        district: 'Baran',
        market: 'Baran',
        commodity: 'Wheat'
    },
    {
        state: 'Rajasthan',
        district: 'Dausa',
        market: 'Lalsot',
        commodity: 'Bengal Gram(Gram)(Whole)'
    },
    {
        state: 'Rajasthan',
        district: 'Dausa',
        market: 'Lalsot',
        commodity: 'Mustard'
    },
    {
        state: 'Rajasthan',
        district: 'Hanumangarh',
        market: 'Goluwala',
        commodity: 'Bengal Gram(Gram)(Whole)'
    },
    {
        state: 'Rajasthan',
        district: 'Jaipur',
        market: 'Jaipur(Bassi)',
        commodity: 'Mustard'
    },
    {
        state: 'Rajasthan',
        district: 'Jaipur',
        market: 'Jaipur(Bassi)',
        commodity: 'Onion'
    },
    {
        state: 'Rajasthan',
        district: 'Jaipur',
        market: 'Jaipur(Bassi)',
        commodity: 'Tomato'
    },
    {
        state: 'Rajasthan',
        district: 'Jaipur',
        market: 'Kotputli',
        commodity: 'Bajra(Pearl Millet/Cumbu)'
    },
    {
        state: 'Rajasthan',
        district: 'Jaipur',
        market: 'Kotputli',
        commodity: 'Barley (Jau)'
    },
    {
        state: 'Rajasthan',
        district: 'Jaipur',
        market: 'Kotputli',
        commodity: 'Wheat'
    },
    {
        state: 'Rajasthan',
        district: 'Jalore',
        market: 'Jalore',
        commodity: 'Green Chilli'
    },
    {
        state: 'Rajasthan',
        district: 'Jalore',
        market: 'Jalore',
        commodity: 'Tinda'
    },
    {
        state: 'Rajasthan',
        district: 'Jalore',
        market: 'Jalore',
        commodity: 'Tomato'
    },
    {
        state: 'Rajasthan',
        district: 'Jhalawar',
        market: 'Bhawani Mandi(Choumehla)',
        commodity: 'Soyabean'
    },
    {
        state: 'Rajasthan',
        district: 'Jhalawar',
        market: 'Bhawani Mandi(Choumehla)',
        commodity: 'Wheat'
    },
    {
        state: 'Rajasthan',
        district: 'Swai Madhopur',
        market: 'Sawai Madhopur',
        commodity: 'Bajra(Pearl Millet/Cumbu)'
    },
    {
        state: 'Rajasthan',
        district: 'Swai Madhopur',
        market: 'Sawai Madhopur',
        commodity: 'Bengal Gram(Gram)(Whole)'
    },
    {
        state: 'Rajasthan',
        district: 'Swai Madhopur',
        market: 'Sawai Madhopur',
        commodity: 'Soyabean'
    },
    {
        state: 'Rajasthan',
        district: 'Tonk',
        market: 'Dooni',
        commodity: 'Barley (Jau)'
    },
    {
        state: 'Rajasthan',
        district: 'Tonk',
        market: 'Malpura',
        commodity: 'Bajra(Pearl Millet/Cumbu)'
    },
    {
        state: 'Rajasthan',
        district: 'Tonk',
        market: 'Tonk',
        commodity: 'Wheat'
    },
    {
        state: 'Rajasthan',
        district: 'Ajmer',
        market: 'Kekri',
        commodity: 'Bengal Gram(Gram)(Whole)'
    },
    {
        state: 'Rajasthan',
        district: 'Ajmer',
        market: 'Kekri',
        commodity: 'Mustard'
    },
    {
        state: 'Rajasthan',
        district: 'Ajmer',
        market: 'Vijay Nagar(Gulabpura)',
        commodity: 'Wheat'
    },
    {
        state: 'Rajasthan',
        district: 'Baran',
        market: 'Baran',
        commodity: 'Linseed'
    },
    {
        state: 'Rajasthan',
        district: 'Baran',
        market: 'Baran',
        commodity: 'Paddy(Dhan)(Common)'
    },
    {
        state: 'Rajasthan',
        district: 'Dausa',
        market: 'Lalsot',
        commodity: 'Bajra(Pearl Millet/Cumbu)'
    },
    {
        state: 'Rajasthan',
        district: 'Dausa',
        market: 'Lalsot',
        commodity: 'Barley (Jau)'
    },
    {
        state: 'Rajasthan',
        district: 'Hanumangarh',
        market: 'Goluwala',
        commodity: 'Barley (Jau)'
    },
    {
        state: 'Rajasthan',
        district: 'Hanumangarh',
        market: 'Goluwala',
        commodity: 'Guar Seed(Cluster Beans Seed)'
    },
    {
        state: 'Rajasthan',
        district: 'Hanumangarh',
        market: 'Goluwala',
        commodity: 'Potato'
    },
    {
        state: 'Rajasthan',
        district: 'Hanumangarh',
        market: 'Sangriya',
        commodity: 'Onion'
    },
    {
        state: 'Rajasthan',
        district: 'Jaipur',
        market: 'Jaipur(Bassi)',
        commodity: 'Bengal Gram(Gram)(Whole)'
    },
    {
        state: 'Rajasthan',
        district: 'Jalore',
        market: 'Bheenmal(Ranlwada)',
        commodity: 'Bajra(Pearl Millet/Cumbu)'
    },
    {
        state: 'Rajasthan',
        district: 'Jalore',
        market: 'Bheenmal(Ranlwada)',
        commodity: 'Groundnut'
    },
    {
        state: 'Rajasthan',
        district: 'Jalore',
        market: 'Jalore',
        commodity: 'Banana'
    },
    {
        state: 'Rajasthan',
        district: 'Jalore',
        market: 'Jalore',
        commodity: 'Cabbage'
    },
    {
        state: 'Rajasthan',
        district: 'Jalore',
        market: 'Jalore',
        commodity: 'Capsicum'
    },
    {
        state: 'Rajasthan',
        district: 'Tonk',
        market: 'Malpura',
        commodity: 'Wheat'
    },
    {
        state: 'Rajasthan',
        district: 'Tonk',
        market: 'Uniyara',
        commodity: 'Mustard'
    },
    {
        state: 'Rajasthan',
        district: 'Ajmer',
        market: 'Bijay Nagar',
        commodity: 'Barley (Jau)'
    },
    {
        state: 'Rajasthan',
        district: 'Ajmer',
        market: 'Bijay Nagar',
        commodity: 'Bengal Gram(Gram)(Whole)'
    },
    {
        state: 'Rajasthan',
        district: 'Ajmer',
        market: 'Bijay Nagar',
        commodity: 'Guar Seed(Cluster Beans Seed)'
    },
    {
        state: 'Rajasthan',
        district: 'Ajmer',
        market: 'Bijay Nagar',
        commodity: 'Mustard'
    },
    {
        state: 'Rajasthan',
        district: 'Baran',
        market: 'Baran',
        commodity: 'Bengal Gram(Gram)(Whole)'
    },
    {
        state: 'Rajasthan',
        district: 'Baran',
        market: 'Baran',
        commodity: 'Corriander seed'
    },
    {
        state: 'Rajasthan',
        district: 'Dausa',
        market: 'Lalsot',
        commodity: 'Wheat'
    },
    {
        state: 'Rajasthan',
        district: 'Hanumangarh',
        market: 'Goluwala',
        commodity: 'Onion'
    },
    {
        state: 'Rajasthan',
        district: 'Hanumangarh',
        market: 'Goluwala',
        commodity: 'Wheat'
    },
    {
        state: 'Rajasthan',
        district: 'Hanumangarh',
        market: 'Sangriya',
        commodity: 'Potato'
    },
    {
        state: 'Rajasthan',
        district: 'Jaipur',
        market: 'Jaipur(Bassi)',
        commodity: 'Bajra(Pearl Millet/Cumbu)'
    },
    {
        state: 'Rajasthan',
        district: 'Jaipur',
        market: 'Jaipur(Bassi)',
        commodity: 'Guar Seed(Cluster Beans Seed)'
    },
    {
        state: 'Rajasthan',
        district: 'Jaipur',
        market: 'Jaipur(Bassi)',
        commodity: 'Potato'
    },
    {
        state: 'Rajasthan',
        district: 'Jalore',
        market: 'Bheenmal(Ranlwada)',
        commodity: 'Castor Seed'
    },
    {
        state: 'Rajasthan',
        district: 'Jalore',
        market: 'Jalore',
        commodity: 'Cauliflower'
    },
    {
        state: 'Rajasthan',
        district: 'Jalore',
        market: 'Jalore',
        commodity: 'Lemon'
    },
    {
        state: 'Rajasthan',
        district: 'Swai Madhopur',
        market: 'Sawai Madhopur',
        commodity: 'Jowar(Sorghum)'
    },
    {
        state: 'Rajasthan',
        district: 'Swai Madhopur',
        market: 'Sawai Madhopur',
        commodity: 'Mustard'
    },
    {
        state: 'Rajasthan',
        district: 'Swai Madhopur',
        market: 'Sawai Madhopur',
        commodity: 'Wheat'
    },
    {
        state: 'Rajasthan',
        district: 'Tonk',
        market: 'Dooni',
        commodity: 'Maize'
    },
    {
        state: 'Rajasthan',
        district: 'Tonk',
        market: 'Dooni',
        commodity: 'Mustard'
    },
    {
        state: 'Rajasthan',
        district: 'Tonk',
        market: 'Dooni',
        commodity: 'Wheat'
    },
    {
        state: 'Rajasthan',
        district: 'Tonk',
        market: 'Malpura',
        commodity: 'Bengal Gram(Gram)(Whole)'
    },
    {
        state: 'Rajasthan',
        district: 'Tonk',
        market: 'Malpura',
        commodity: 'Mustard'
    },
    {
        state: 'Rajasthan',
        district: 'Baran',
        market: 'Baran',
        commodity: 'Green Gram (Moong)(Whole)'
    },
    {
        state: 'Rajasthan',
        district: 'Hanumangarh',
        market: 'Goluwala',
        commodity: 'Mustard'
    },
    {
        state: 'Rajasthan',
        district: 'Hanumangarh',
        market: 'Goluwala',
        commodity: 'Tomato'
    },
    {
        state: 'Rajasthan',
        district: 'Jaipur',
        market: 'Jaipur(Bassi)',
        commodity: 'Barley (Jau)'
    },
    {
        state: 'Rajasthan',
        district: 'Jaipur',
        market: 'Jaipur(Bassi)',
        commodity: 'Taramira'
    },
    {
        state: 'Rajasthan',
        district: 'Jaipur',
        market: 'Jaipur(Bassi)',
        commodity: 'Wheat'
    },
    {
        state: 'Rajasthan',
        district: 'Jalore',
        market: 'Jalore',
        commodity: 'Bitter gourd'
    },
    {
        state: 'Rajasthan',
        district: 'Jalore',
        market: 'Jalore',
        commodity: 'Brinjal'
    },
    {
        state: 'Rajasthan',
        district: 'Jalore',
        market: 'Jalore',
        commodity: 'Cucumbar(Kheera)'
    },
    {
        state: 'Rajasthan',
        district: 'Jalore',
        market: 'Jalore',
        commodity: 'Ginger(Green)'
    },
    {
        state: 'Rajasthan',
        district: 'Jalore',
        market: 'Jalore',
        commodity: 'Guar'
    },
    {
        state: 'Rajasthan',
        district: 'Jalore',
        market: 'Jalore',
        commodity: 'Onion'
    },
    {
        state: 'Rajasthan',
        district: 'Tonk',
        market: 'Malpura',
        commodity: 'Barley (Jau)'
    },
    {
        state: 'Rajasthan',
        district: 'Tonk',
        market: 'Malpura',
        commodity: 'Green Gram (Moong)(Whole)'
    },
    {
        state: 'Tamil Nadu',
        district: 'Madurai',
        market: 'Thirumangalam',
        commodity: 'Cotton'
    },
    {
        state: 'Tamil Nadu',
        district: 'Madurai',
        market: 'Thirumangalam',
        commodity: 'Paddy(Dhan)(Common)'
    },
    {
        state: 'Tamil Nadu',
        district: 'Salem',
        market: 'Kolathur',
        commodity: 'Cotton'
    },
    {
        state: 'Tamil Nadu',
        district: 'Madurai',
        market: 'Madurai',
        commodity: 'Paddy(Dhan)(Common)'
    },
    {
        state: 'Tamil Nadu',
        district: 'Madurai',
        market: 'Thirumangalam',
        commodity: 'Jowar(Sorghum)'
    },
    {
        state: 'Tamil Nadu',
        district: 'Salem',
        market: 'Salem',
        commodity: 'Turmeric'
    },
    {
        state: 'Tamil Nadu',
        district: 'Coimbatore',
        market: 'Madathukulam',
        commodity: 'Coconut'
    },
    {
        state: 'Tamil Nadu',
        district: 'Erode',
        market: 'Alangeyam',
        commodity: 'Maize'
    },
    {
        state: 'Tamil Nadu',
        district: 'Erode',
        market: 'Dharapuram',
        commodity: 'Coconut'
    },
    {
        state: 'Tamil Nadu',
        district: 'Salem',
        market: 'Attur',
        commodity: 'Turmeric'
    },
    {
        state: 'Tamil Nadu',
        district: 'Salem',
        market: 'Karumanturai',
        commodity: 'Coconut'
    },
    {
        state: 'Tamil Nadu',
        district: 'Salem',
        market: 'Konganapuram',
        commodity: 'Cotton'
    },
    {
        state: 'Tamil Nadu',
        district: 'Salem',
        market: 'Omalur',
        commodity: 'Copra'
    },
    {
        state: 'Tamil Nadu',
        district: 'Salem',
        market: 'Thalaivasal',
        commodity: 'Maize'
    },
    {
        state: 'Tamil Nadu',
        district: 'Coimbatore',
        market: 'Madathukulam',
        commodity: 'Paddy(Dhan)(Common)'
    },
    {
        state: 'Tamil Nadu',
        district: 'Coimbatore',
        market: 'Negamam',
        commodity: 'Copra'
    },
    {
        state: 'Tamil Nadu',
        district: 'Salem',
        market: 'Gangavalli',
        commodity: 'Maize'
    },
    {
        state: 'Tamil Nadu',
        district: 'Salem',
        market: 'Thammampati',
        commodity: 'Paddy(Dhan)(Common)'
    },
    {
        state: 'Tamil Nadu',
        district: 'Salem',
        market: 'Vazhapadi',
        commodity: 'Coconut'
    },
    {
        state: 'Telangana',
        district: 'Nalgonda',
        market: 'Devarkonda(Mallepalli)',
        commodity: 'Paddy(Dhan)(Common)'
    },
    {
        state: 'Telangana',
        district: 'Nalgonda',
        market: 'Ramannapet',
        commodity: 'Paddy(Dhan)(Common)'
    },
    {
        state: 'Telangana',
        district: 'Nalgonda',
        market: 'Suryapeta',
        commodity: 'Paddy(Dhan)(Common)'
    },
    {
        state: 'Telangana',
        district: 'Nalgonda',
        market: 'Venkateswarnagar',
        commodity: 'Brinjal'
    },
    {
        state: 'Telangana',
        district: 'Nalgonda',
        market: 'Venkateswarnagar',
        commodity: 'Carrot'
    },
    {
        state: 'Telangana',
        district: 'Nalgonda',
        market: 'Voligonda',
        commodity: 'Paddy(Dhan)(Common)'
    },
    {
        state: 'Telangana',
        district: 'Nizamabad',
        market: 'Bichkunda',
        commodity: 'Paddy(Dhan)(Common)'
    },
    {
        state: 'Telangana',
        district: 'Nizamabad',
        market: 'Nizamabad',
        commodity: 'Sesamum(Sesame,Gingelly,Til)'
    },
    {
        state: 'Telangana',
        district: 'Ranga Reddy',
        market: 'Ibrahimputnam',
        commodity: 'Green Chilli'
    },
    {
        state: 'Telangana',
        district: 'Ranga Reddy',
        market: 'Kukatpally(Rythu Bazar)',
        commodity: 'Banana - Green'
    },
    {
        state: 'Telangana',
        district: 'Ranga Reddy',
        market: 'Kukatpally(Rythu Bazar)',
        commodity: 'Bottle gourd'
    },
    {
        state: 'Telangana',
        district: 'Ranga Reddy',
        market: 'Kukatpally(Rythu Bazar)',
        commodity: 'Cabbage'
    },
    {
        state: 'Telangana',
        district: 'Ranga Reddy',
        market: 'Kukatpally(Rythu Bazar)',
        commodity: 'Carrot'
    },
    {
        state: 'Telangana',
        district: 'Ranga Reddy',
        market: 'Kukatpally(Rythu Bazar)',
        commodity: 'Drumstick'
    },
    {
        state: 'Telangana',
        district: 'Ranga Reddy',
        market: 'Kukatpally(Rythu Bazar)',
        commodity: 'French Beans (Frasbean)'
    },
    {
        state: 'Telangana',
        district: 'Ranga Reddy',
        market: 'Kukatpally(Rythu Bazar)',
        commodity: 'Onion'
    },
    {
        state: 'Telangana',
        district: 'Ranga Reddy',
        market: 'Kukatpally(Rythu Bazar)',
        commodity: 'Onion Green'
    },
    {
        state: 'Telangana',
        district: 'Ranga Reddy',
        market: 'Kukatpally(Rythu Bazar)',
        commodity: 'Ridgeguard(Tori)'
    },
    {
        state: 'Telangana',
        district: 'Ranga Reddy',
        market: 'Kukatpally(Rythu Bazar)',
        commodity: 'Snakeguard'
    },
    {
        state: 'Telangana',
        district: 'Ranga Reddy',
        market: 'Mehndipatnam(Rythu Bazar)',
        commodity: 'Cucumbar(Kheera)'
    },
    {
        state: 'Telangana',
        district: 'Ranga Reddy',
        market: 'Mehndipatnam(Rythu Bazar)',
        commodity: 'Green Chilli'
    },
    {
        state: 'Telangana',
        district: 'Ranga Reddy',
        market: 'Mehndipatnam(Rythu Bazar)',
        commodity: 'Snakeguard'
    },
    {
        state: 'Telangana',
        district: 'Ranga Reddy',
        market: 'Pargi',
        commodity: 'Maize'
    },
    {
        state: 'Telangana',
        district: 'Ranga Reddy',
        market: 'Ramakrisnapuram,RBZ',
        commodity: 'Banana - Green'
    },
    {
        state: 'Telangana',
        district: 'Ranga Reddy',
        market: 'Ramakrisnapuram,RBZ',
        commodity: 'Bitter gourd'
    },
    {
        state: 'Telangana',
        district: 'Ranga Reddy',
        market: 'Ramakrisnapuram,RBZ',
        commodity: 'Cauliflower'
    },
    {
        state: 'Telangana',
        district: 'Ranga Reddy',
        market: 'Ramakrisnapuram,RBZ',
        commodity: 'Cluster beans'
    },
    {
        state: 'Telangana',
        district: 'Ranga Reddy',
        market: 'Ramakrisnapuram,RBZ',
        commodity: 'Green Chilli'
    },
    {
        state: 'Telangana',
        district: 'Ranga Reddy',
        market: 'Ramakrisnapuram,RBZ',
        commodity: 'Ridgeguard(Tori)'
    },
    {
        state: 'Telangana',
        district: 'Warangal',
        market: 'Parkal',
        commodity: 'Cotton'
    },
    {
        state: 'Telangana',
        district: 'Warangal',
        market: 'Thorrur',
        commodity: 'Paddy(Dhan)(Common)'
    },
    {
        state: 'Telangana',
        district: 'Adilabad',
        market: 'Adilabad(Rythu Bazar)',
        commodity: 'Cauliflower'
    },
    {
        state: 'Telangana',
        district: 'Adilabad',
        market: 'Adilabad(Rythu Bazar)',
        commodity: 'Green Chilli'
    },
    {
        state: 'Telangana',
        district: 'Hyderabad',
        market: 'Bowenpally',
        commodity: 'Bhindi(Ladies Finger)'
    },
    {
        state: 'Telangana',
        district: 'Hyderabad',
        market: 'Bowenpally',
        commodity: 'Carrot'
    },
    {
        state: 'Telangana',
        district: 'Hyderabad',
        market: 'Bowenpally',
        commodity: 'Cauliflower'
    },
    {
        state: 'Telangana',
        district: 'Hyderabad',
        market: 'Bowenpally',
        commodity: 'French Beans (Frasbean)'
    },
    {
        state: 'Telangana',
        district: 'Hyderabad',
        market: 'Bowenpally',
        commodity: 'Potato'
    },
    {
        state: 'Telangana',
        district: 'Hyderabad',
        market: 'Bowenpally',
        commodity: 'Pumpkin'
    },
    {
        state: 'Telangana',
        district: 'Hyderabad',
        market: 'Bowenpally',
        commodity: 'Sweet Potato'
    },
    {
        state: 'Telangana',
        district: 'Hyderabad',
        market: 'Gudimalkapur',
        commodity: 'Banana - Green'
    },
    {
        state: 'Telangana',
        district: 'Hyderabad',
        market: 'Gudimalkapur',
        commodity: 'Beetroot'
    },
    {
        state: 'Telangana',
        district: 'Hyderabad',
        market: 'Gudimalkapur',
        commodity: 'Bhindi(Ladies Finger)'
    },
    {
        state: 'Telangana',
        district: 'Hyderabad',
        market: 'Gudimalkapur',
        commodity: 'Cluster beans'
    },
    {
        state: 'Telangana',
        district: 'Hyderabad',
        market: 'Gudimalkapur',
        commodity: 'Field Pea'
    },
    {
        state: 'Telangana',
        district: 'Hyderabad',
        market: 'L B Nagar',
        commodity: 'Brinjal'
    },
    {
        state: 'Telangana',
        district: 'Hyderabad',
        market: 'L B Nagar',
        commodity: 'Carrot'
    },
    {
        state: 'Telangana',
        district: 'Hyderabad',
        market: 'L B Nagar',
        commodity: 'Drumstick'
    },
    {
        state: 'Telangana',
        district: 'Hyderabad',
        market: 'Mahboob Manison',
        commodity: 'Bitter gourd'
    },
    {
        state: 'Telangana',
        district: 'Hyderabad',
        market: 'Mahboob Manison',
        commodity: 'Brinjal'
    },
    {
        state: 'Telangana',
        district: 'Hyderabad',
        market: 'Mahboob Manison',
        commodity: 'Carrot'
    },
    {
        state: 'Telangana',
        district: 'Hyderabad',
        market: 'Mahboob Manison',
        commodity: 'Dry Chillies'
    },
    {
        state: 'Telangana',
        district: 'Hyderabad',
        market: 'Mahboob Manison',
        commodity: 'Green Chilli'
    },
    {
        state: 'Telangana',
        district: 'Hyderabad',
        market: 'Mahboob Manison',
        commodity: 'Onion'
    },
    {
        state: 'Telangana',
        district: 'Karimnagar',
        market: 'Choppadandi',
        commodity: 'Paddy(Dhan)(Common)'
    },
    {
        state: 'Telangana',
        district: 'Karimnagar',
        market: 'Karimnagar',
        commodity: 'Carrot'
    },
    {
        state: 'Telangana',
        district: 'Karimnagar',
        market: 'Karimnagar(Rythu Bazar)',
        commodity: 'Bhindi(Ladies Finger)'
    },
    {
        state: 'Telangana',
        district: 'Khammam',
        market: 'Sattupalli',
        commodity: 'Paddy(Dhan)(Common)'
    },
    {
        state: 'Telangana',
        district: 'Khammam',
        market: 'Wyra',
        commodity: 'Paddy(Dhan)(Common)'
    },
    {
        state: 'Telangana',
        district: 'Mahbubnagar',
        market: 'Mahabubnagar(Rythu Bazar)',
        commodity: 'Brinjal'
    },
    {
        state: 'Telangana',
        district: 'Mahbubnagar',
        market: 'Mahabubnagar(Rythu Bazar)',
        commodity: 'Cabbage'
    },
    {
        state: 'Telangana',
        district: 'Mahbubnagar',
        market: 'Mahabubnagar(Rythu Bazar)',
        commodity: 'Green Chilli'
    },
    {
        state: 'Telangana',
        district: 'Mahbubnagar',
        market: 'Narayanpet',
        commodity: 'Green Gram (Moong)(Whole)'
    },
    {
        state: 'Telangana',
        district: 'Mahbubnagar',
        market: 'Wanaparthy Road(Prbbair)',
        commodity: 'Paddy(Dhan)(Common)'
    },
    {
        state: 'Telangana',
        district: 'Adilabad',
        market: 'Adilabad',
        commodity: 'Cotton'
    },
    {
        state: 'Telangana',
        district: 'Adilabad',
        market: 'Mancharial',
        commodity: 'Tomato'
    },
    {
        state: 'Telangana',
        district: 'Hyderabad',
        market: 'Bowenpally',
        commodity: 'Cabbage'
    },
    {
        state: 'Telangana',
        district: 'Hyderabad',
        market: 'Bowenpally',
        commodity: 'Colacasia'
    },
    {
        state: 'Telangana',
        district: 'Hyderabad',
        market: 'Bowenpally',
        commodity: 'Cucumbar(Kheera)'
    },
    {
        state: 'Telangana',
        district: 'Hyderabad',
        market: 'Bowenpally',
        commodity: 'Ridgeguard(Tori)'
    },
    {
        state: 'Telangana',
        district: 'Hyderabad',
        market: 'Gudimalkapur',
        commodity: 'Cabbage'
    },
    {
        state: 'Telangana',
        district: 'Hyderabad',
        market: 'Gudimalkapur',
        commodity: 'Cauliflower'
    },
    {
        state: 'Telangana',
        district: 'Hyderabad',
        market: 'Gudimalkapur',
        commodity: 'Chow Chow'
    },
    {
        state: 'Telangana',
        district: 'Hyderabad',
        market: 'Gudimalkapur',
        commodity: 'French Beans (Frasbean)'
    },
    {
        state: 'Telangana',
        district: 'Hyderabad',
        market: 'Gudimalkapur',
        commodity: 'Onion Green'
    },
    {
        state: 'Telangana',
        district: 'Hyderabad',
        market: 'Gudimalkapur',
        commodity: 'Potato'
    },
    {
        state: 'Telangana',
        district: 'Hyderabad',
        market: 'Gudimalkapur',
        commodity: 'Snakeguard'
    },
    {
        state: 'Telangana',
        district: 'Hyderabad',
        market: 'Gudimalkapur',
        commodity: 'Sweet Potato',
    },
    {
        state: 'Telangana',
        district: 'Hyderabad',
        market: 'L B Nagar',
        commodity: 'Bitter gourd'
    },
    {
        state: 'Telangana',
        district: 'Hyderabad',
        market: 'L B Nagar',
        commodity: 'Bottle gourd'
    },
    {
        state: 'Telangana',
        district: 'Hyderabad',
        market: 'Mahboob Manison',
        commodity: 'Cabbage'
    },
    {
        state: 'Telangana',
        district: 'Ranga Reddy',
        market: 'Ramakrisnapuram,RBZ',
        commodity: 'Bottle gourd'
    },
    {
        state: 'Telangana',
        district: 'Ranga Reddy',
        market: 'Ramakrisnapuram,RBZ',
        commodity: 'Brinjal'
    },
    {
        state: 'Telangana',
        district: 'Ranga Reddy',
        market: 'Ramakrisnapuram,RBZ',
        commodity: 'Carrot'
    },
    {
        state: 'Telangana',
        district: 'Ranga Reddy',
        market: 'Ramakrisnapuram,RBZ',
        commodity: 'Cucumbar(Kheera)'
    },
    {
        state: 'Telangana',
        district: 'Ranga Reddy',
        market: 'Ramakrisnapuram,RBZ',
        commodity: 'Onion'
    },
    {
        state: 'Telangana',
        district: 'Ranga Reddy',
        market: 'Ramakrisnapuram,RBZ',
        commodity: 'Tomato'
    },
    {
        state: 'Telangana',
        district: 'Hyderabad',
        market: 'Mahboob Manison',
        commodity: 'French Beans (Frasbean)'
    },
    {
        state: 'Telangana',
        district: 'Hyderabad',
        market: 'Mahboob Manison',
        commodity: 'Turmeric'
    },
    {
        state: 'Telangana',
        district: 'Karimnagar',
        market: 'Gangadhara',
        commodity: 'Paddy(Dhan)(Common)'
    },
    {
        state: 'Telangana',
        district: 'Karimnagar',
        market: 'Gopalraopet',
        commodity: 'Paddy(Dhan)(Common)'
    },
    {
        state: 'Telangana',
        district: 'Karimnagar',
        market: 'Karimnagar',
        commodity: 'Cluster beans'
    },
    {
        state: 'Telangana',
        district: 'Karimnagar',
        market: 'Karimnagar',
        commodity: 'Coriander(Leaves)'
    },
    {
        state: 'Telangana',
        district: 'Karimnagar',
        market: 'Karimnagar',
        commodity: 'Green Chilli'
    },
    {
        state: 'Telangana',
        district: 'Karimnagar',
        market: 'Karimnagar',
        commodity: 'Ridgeguard(Tori)'
    },
    {
        state: 'Telangana',
        district: 'Karimnagar',
        market: 'Karimnagar',
        commodity: 'Thondekai'
    },
    {
        state: 'Telangana',
        district: 'Karimnagar',
        market: 'Karimnagar(Rythu Bazar)',
        commodity: 'Carrot'
    },
    {
        state: 'Telangana',
        district: 'Karimnagar',
        market: 'Pothgal',
        commodity: 'Paddy(Dhan)(Common)'
    },
    {
        state: 'Telangana',
        district: 'Khammam',
        market: 'Charla',
        commodity: 'Paddy(Dhan)(Common)'
    },
    {
        state: 'Telangana',
        district: 'Khammam',
        market: 'Yellandu',
        commodity: 'Wood'
    },
    {
        state: 'Tripura',
        district: 'Dhalai',
        market: 'Chowmanu',
        commodity: 'Bitter gourd'
    },
    {
        state: 'Tripura',
        district: 'Dhalai',
        market: 'Chowmanu',
        commodity: 'Green Chilli'
    },
    {
        state: 'Tripura',
        district: 'Dhalai',
        market: 'Masli',
        commodity: 'Bhindi(Ladies Finger)'
    },
    {
        state: 'Tripura',
        district: 'Dhalai',
        market: 'Masli',
        commodity: 'Bitter gourd'
    },
    {
        state: 'Tripura',
        district: 'Dhalai',
        market: 'Masli',
        commodity: 'Potato'
    },
    {
        state: 'Tripura',
        district: 'Dhalai',
        market: 'Masli',
        commodity: 'Rice'
    },
    {
        state: 'Tripura',
        district: 'North Tripura',
        market: 'Dasda',
        commodity: 'Bhindi(Ladies Finger)'
    },
    {
        state: 'Tripura',
        district: 'North Tripura',
        market: 'Kanchanpur',
        commodity: 'Masur Dal'
    },
    {
        state: 'Tripura',
        district: 'Sepahijala',
        market: 'Jumpuijala',
        commodity: 'Green Chilli'
    },
    {
        state: 'Tripura',
        district: 'Dhalai',
        market: 'Chowmanu',
        commodity: 'Cowpea(Veg)'
    },
    {
        state: 'Tripura',
        district: 'Dhalai',
        market: 'Chowmanu',
        commodity: 'Cucumbar(Kheera)'
    },
    {
        state: 'Tripura',
        district: 'Dhalai',
        market: 'Chowmanu',
        commodity: 'Fish'
    },
    {
        state: 'Tripura',
        district: 'Dhalai',
        market: 'Chowmanu',
        commodity: 'Hen'
    },
    {
        state: 'Tripura',
        district: 'Dhalai',
        market: 'Masli',
        commodity: 'Green Chilli'
    },
    {
        state: 'Tripura',
        district: 'Khowai',
        market: 'Bachaibari',
        commodity: 'Green Chilli'
    },
    {
        state: 'Tripura',
        district: 'North Tripura',
        market: 'Kanchanpur',
        commodity: 'Green Chilli'
    },
    {
        state: 'Tripura',
        district: 'Dhalai',
        market: 'Chowmanu',
        commodity: 'Bhindi(Ladies Finger)'
    },
    {
        state: 'Tripura',
        district: 'Dhalai',
        market: 'Chowmanu',
        commodity: 'Brinjal'
    },
    {
        state: 'Tripura',
        district: 'Dhalai',
        market: 'Chowmanu',
        commodity: 'Goat'
    },
    {
        state: 'Tripura',
        district: 'Dhalai',
        market: 'Masli',
        commodity: 'Brinjal'
    },
    {
        state: 'Tripura',
        district: 'Dhalai',
        market: 'Masli',
        commodity: 'Sponge gourd'
    },
    {
        state: 'Tripura',
        district: 'North Tripura',
        market: 'Dasda',
        commodity: 'Brinjal'
    },
    {
        state: 'Tripura',
        district: 'North Tripura',
        market: 'Dasda',
        commodity: 'Potato'
    },
    {
        state: 'Tripura',
        district: 'North Tripura',
        market: 'Kanchanpur',
        commodity: 'Bhindi(Ladies Finger)'
    },
    {
        state: 'Tripura',
        district: 'North Tripura',
        market: 'Kanchanpur',
        commodity: 'Cowpea(Veg)'
    },
    {
        state: 'Tripura',
        district: 'Sepahijala',
        market: 'Jumpuijala',
        commodity: 'Onion'
    },
    {
        state: 'Tripura',
        district: 'Sepahijala',
        market: 'Jumpuijala',
        commodity: 'Potato'
    },
    {
        state: 'Tripura',
        district: 'Dhalai',
        market: 'Chowmanu',
        commodity: 'Pigs'
    },
    {
        state: 'Tripura',
        district: 'Dhalai',
        market: 'Masli',
        commodity: 'Ridgeguard(Tori)'
    },
    {
        state: 'Tripura',
        district: 'Gomati',
        market: 'Silachhari',
        commodity: 'Potato'
    },
    {
        state: 'Tripura',
        district: 'Khowai',
        market: 'Bachaibari',
        commodity: 'Fish'
    },
    {
        state: 'Tripura',
        district: 'Khowai',
        market: 'Bachaibari',
        commodity: 'Potato'
    },
    {
        state: 'Tripura',
        district: 'North Tripura',
        market: 'Dasda',
        commodity: 'Rice'
    },
    {
        state: 'Tripura',
        district: 'North Tripura',
        market: 'Kanchanpur',
        commodity: 'Bitter gourd'
    },
    {
        state: 'Tripura',
        district: 'Dhalai',
        market: 'Chowmanu',
        commodity: 'Duck'
    },
    {
        state: 'Tripura',
        district: 'Dhalai',
        market: 'Chowmanu',
        commodity: 'Potato'
    },
    {
        state: 'Tripura',
        district: 'Dhalai',
        market: 'Masli',
        commodity: 'Cock'
    },
    {
        state: 'Tripura',
        district: 'Gomati',
        market: 'Silachhari',
        commodity: 'Green Chilli'
    },
    {
        state: 'Tripura',
        district: 'North Tripura',
        market: 'Dasda',
        commodity: 'Green Chilli'
    },
    {
        state: 'Tripura',
        district: 'North Tripura',
        market: 'Kanchanpur',
        commodity: 'Brinjal'
    },
    {
        state: 'Tripura',
        district: 'North Tripura',
        market: 'Kanchanpur',
        commodity: 'Onion'
    },
    {
        state: 'Tripura',
        district: 'North Tripura',
        market: 'Kanchanpur',
        commodity: 'Potato'
    },
    {
        state: 'Tripura',
        district: 'North Tripura',
        market: 'Kanchanpur',
        commodity: 'Rice'
    },
    {
        state: 'Tripura',
        district: 'Sepahijala',
        market: 'Jumpuijala',
        commodity: 'Rice'
    },
    {
        state: 'Uttar Pradesh',
        district: 'Gautam Budh Nagar',
        market: 'Dadri',
        commodity: 'Cucumbar(Kheera)'
    },
    {
        state: 'Uttar Pradesh',
        district: 'Gautam Budh Nagar',
        market: 'Dadri',
        commodity: 'Green Chilli'
    },
    {
        state: 'Uttar Pradesh',
        district: 'Gautam Budh Nagar',
        market: 'Dadri',
        commodity: 'Green Gram Dal (Moong Dal)'
    },
    {
        state: 'Uttar Pradesh',
        district: 'Gautam Budh Nagar',
        market: 'Dadri',
        commodity: 'Mousambi(Sweet Lime)'
    },
    {
        state: 'Uttar Pradesh',
        district: 'Gautam Budh Nagar',
        market: 'Dadri',
        commodity: 'Mustard Oil'
    },
    {
        state: 'Uttar Pradesh',
        district: 'Gautam Budh Nagar',
        market: 'Dadri',
        commodity: 'White Peas'
    },
    {
        state: 'Uttar Pradesh',
        district: 'Ghaziabad',
        market: 'Ghaziabad',
        commodity: 'Apple'
    },
    {
        state: 'Uttar Pradesh',
        district: 'Ghaziabad',
        market: 'Ghaziabad',
        commodity: 'Arhar Dal(Tur Dal)'
    },
    {
        state: 'Uttar Pradesh',
        district: 'Ghaziabad',
        market: 'Ghaziabad',
        commodity: 'Bengal Gram(Gram)(Whole)'
    },
    {
        state: 'Uttar Pradesh',
        district: 'Ghaziabad',
        market: 'Ghaziabad',
        commodity: 'Bitter gourd'
    },
    {
        state: 'Uttar Pradesh',
        district: 'Ghaziabad',
        market: 'Ghaziabad',
        commodity: 'Bottle gourd'
    },
    {
        state: 'Uttar Pradesh',
        district: 'Ghaziabad',
        market: 'Ghaziabad',
        commodity: 'Gur(Jaggery)'
    },
    {
        state: 'Uttar Pradesh',
        district: 'Ghaziabad',
        market: 'Ghaziabad',
        commodity: 'Tomato'
    },
    {
        state: 'Uttar Pradesh',
        district: 'Ghaziabad',
        market: 'Hapur',
        commodity: 'Black Gram Dal (Urd Dal)'
    },
    {
        state: 'Uttar Pradesh',
        district: 'Ghaziabad',
        market: 'Hapur',
        commodity: 'Gur(Jaggery)'
    },
    {
        state: 'Uttar Pradesh',
        district: 'Ghaziabad',
        market: 'Hapur',
        commodity: 'Lemon'
    },
    {
        state: 'Uttar Pradesh',
        district: 'Ghaziabad',
        market: 'Hapur',
        commodity: 'Maize'
    },
    {
        state: 'Uttar Pradesh',
        district: 'Ghaziabad',
        market: 'Hapur',
        commodity: 'Papaya'
    },
    {
        state: 'Uttar Pradesh',
        district: 'Ghaziabad',
        market: 'Noida',
        commodity: 'Bhindi(Ladies Finger)'
    },
    {
        state: 'Uttar Pradesh',
        district: 'Ghaziabad',
        market: 'Noida',
        commodity: 'Mousambi(Sweet Lime)'
    },
    {
        state: 'Uttar Pradesh',
        district: 'Ghaziabad',
        market: 'Noida',
        commodity: 'Papaya'
    },
    {
        state: 'Uttar Pradesh',
        district: 'Ghaziabad',
        market: 'Noida',
        commodity: 'Wheat'
    },
    {
        state: 'Uttar Pradesh',
        district: 'Ghazipur',
        market: 'Gazipur',
        commodity: 'Barley (Jau)'
    },
    {
        state: 'Uttar Pradesh',
        district: 'Ghazipur',
        market: 'Gazipur',
        commodity: 'Bengal Gram(Gram)(Whole)'
    },
    {
        state: 'Uttar Pradesh',
        district: 'Ghazipur',
        market: 'Gazipur',
        commodity: 'White Peas'
    },
    {
        state: 'Uttar Pradesh',
        district: 'Gonda',
        market: 'Nawabganj',
        commodity: 'Pomegranate'
    },
    {
        state: 'Uttar Pradesh',
        district: 'Gonda',
        market: 'Nawabganj',
        commodity: 'Wheat'
    },
    {
        state: 'Uttar Pradesh',
        district: 'Gorakhpur',
        market: 'Sehjanwa',
        commodity: 'Potato'
    },
    {
        state: 'Uttar Pradesh',
        district: 'Hamirpur',
        market: 'Bharuasumerpur',
        commodity: 'Banana'
    },
    {
        state: 'Uttar Pradesh',
        district: 'Hamirpur',
        market: 'Bharuasumerpur',
        commodity: 'Bengal Gram(Gram)(Whole)'
    },
    {
        state: 'Uttar Pradesh',
        district: 'Hamirpur',
        market: 'Bharuasumerpur',
        commodity: 'Mango'
    },
    {
        state: 'Uttar Pradesh',
        district: 'Hamirpur',
        market: 'Bharuasumerpur',
        commodity: 'Mustard'
    },
    {
        state: 'Uttar Pradesh',
        district: 'Hamirpur',
        market: 'Bharuasumerpur',
        commodity: 'Peas(Dry)'
    },
    {
        state: 'Uttar Pradesh',
        district: 'Hamirpur',
        market: 'Bharuasumerpur',
        commodity: 'Potato'
    },
    {
        state: 'Uttar Pradesh',
        district: 'Bulandshahar',
        market: 'Sikanderabad',
        commodity: 'Paddy(Dhan)(Basmati)'
    },
    {
        state: 'Uttar Pradesh',
        district: 'Bulandshahar',
        market: 'Sikanderabad',
        commodity: 'Raddish'
    },
    {
        state: 'Uttar Pradesh',
        district: 'Bulandshahar',
        market: 'Siyana',
        commodity: 'Cauliflower'
    },
    {
        state: 'Uttar Pradesh',
        district: 'Bulandshahar',
        market: 'Siyana',
        commodity: 'Garlic'
    },
    {
        state: 'Uttar Pradesh',
        district: 'Bulandshahar',
        market: 'Siyana',
        commodity: 'Ginger(Green)'
    },
    {
        state: 'Uttar Pradesh',
        district: 'Bulandshahar',
        market: 'Siyana',
        commodity: 'Mango'
    },
    {
        state: 'Uttar Pradesh',
        district: 'Bulandshahar',
        market: 'Siyana',
        commodity: 'Pomegranate'
    },
    {
        state: 'Uttar Pradesh',
        district: 'Etah',
        market: 'Aliganj',
        commodity: 'Bajra(Pearl Millet/Cumbu)'
    },
    {
        state: 'Uttar Pradesh',
        district: 'Etah',
        market: 'Awagarh',
        commodity: 'Brinjal'
    },
    {
        state: 'Uttar Pradesh',
        district: 'Etah',
        market: 'Etah',
        commodity: 'Apple'
    },
    {
        state: 'Uttar Pradesh',
        district: 'Etah',
        market: 'Etah',
        commodity: 'Wheat'
    },
    {
        state: 'Uttar Pradesh',
        district: 'Etah',
        market: 'Kasganj',
        commodity: 'Arhar Dal(Tur Dal)'
    },
    {
        state: 'Uttar Pradesh',
        district: 'Etah',
        market: 'Kasganj',
        commodity: 'Banana'
    },
    {
        state: 'Uttar Pradesh',
        district: 'Etah',
        market: 'Kasganj',
        commodity: 'Bhindi(Ladies Finger)'
    },
    {
        state: 'Uttar Pradesh',
        district: 'Etawah',
        market: 'Bharthna',
        commodity: 'Tomato'
    },
    {
        state: 'Uttar Pradesh',
        district: 'Faizabad',
        market: 'Faizabad',
        commodity: 'Bottle gourd'
    },
    {
        state: 'Uttar Pradesh',
        district: 'Faizabad',
        market: 'Faizabad',
        commodity: 'Maize'
    },
    {
        state: 'Uttar Pradesh',
        district: 'Farukhabad',
        market: 'Farukhabad',
        commodity: 'Lemon'
    },
    {
        state: 'Uttar Pradesh',
        district: 'Farukhabad',
        market: 'Farukhabad',
        commodity: 'Mousambi(Sweet Lime)'
    },
    {
        state: 'Uttar Pradesh',
        district: 'Farukhabad',
        market: 'Farukhabad',
        commodity: 'Potato'
    },
    {
        state: 'Uttar Pradesh',
        district: 'Farukhabad',
        market: 'Farukhabad',
        commodity: 'Wheat'
    },
    {
        state: 'Uttar Pradesh',
        district: 'Farukhabad',
        market: 'Kamlaganj',
        commodity: 'Maize'
    },
    {
        state: 'Uttar Pradesh',
        district: 'Farukhabad',
        market: 'Kayamganj',
        commodity: 'Apple'
    },
    {
        state: 'Uttar Pradesh',
        district: 'Farukhabad',
        market: 'Kayamganj',
        commodity: 'Bengal Gram Dal (Chana Dal)'
    },
    {
        state: 'Uttar Pradesh',
        district: 'Farukhabad',
        market: 'Kayamganj',
        commodity: 'Bengal Gram(Gram)(Whole)'
    },
    {
        state: 'Uttar Pradesh',
        district: 'Farukhabad',
        market: 'Kayamganj',
        commodity: 'Bottle gourd'
    },
    {
        state: 'Uttar Pradesh',
        district: 'Farukhabad',
        market: 'Kayamganj',
        commodity: 'Brinjal'
    },
    {
        state: 'Uttar Pradesh',
        district: 'Farukhabad',
        market: 'Kayamganj',
        commodity: 'Masur Dal'
    },
    {
        state: 'Uttar Pradesh',
        district: 'Fatehpur',
        market: 'Fatehpur',
        commodity: 'Bengal Gram Dal (Chana Dal)'
    },
    {
        state: 'Uttar Pradesh',
        district: 'Fatehpur',
        market: 'Fatehpur',
        commodity: 'Onion'
    },
    {
        state: 'Uttar Pradesh',
        district: 'Fatehpur',
        market: 'Fatehpur',
        commodity: 'Pumpkin'
    },
    {
        state: 'Uttar Pradesh',
        district: 'Fatehpur',
        market: 'Fatehpur',
        commodity: 'Tomato'
    },
    {
        state: 'Uttar Pradesh',
        district: 'Agra',
        market: 'Achnera',
        commodity: 'Bottle gourd'
    },
    {
        state: 'Uttar Pradesh',
        district: 'Agra',
        market: 'Achnera',
        commodity: 'Brinjal'
    },
    {
        state: 'Uttar Pradesh',
        district: 'Agra',
        market: 'Achnera',
        commodity: 'Green Chilli'
    },
    {
        state: 'Uttar Pradesh',
        district: 'Agra',
        market: 'Achnera',
        commodity: 'Rice'
    },
    {
        state: 'Uttar Pradesh',
        district: 'Agra',
        market: 'Achnera',
        commodity: 'Sponge gourd'
    },
    {
        state: 'Uttar Pradesh',
        district: 'Agra',
        market: 'Achnera',
        commodity: 'Tomato'
    },
    {
        state: 'Uttar Pradesh',
        district: 'Agra',
        market: 'Agra',
        commodity: 'Bhindi(Ladies Finger)'
    },
    {
        state: 'Uttar Pradesh',
        district: 'Agra',
        market: 'Agra',
        commodity: 'Black Gram Dal (Urd Dal)'
    },
    {
        state: 'Uttar Pradesh',
        district: 'Agra',
        market: 'Agra',
        commodity: 'Garlic'
    },
    {
        state: 'Uttar Pradesh',
        district: 'Agra',
        market: 'Agra',
        commodity: 'Sponge gourd'
    },
    {
        state: 'Uttar Pradesh',
        district: 'Aligarh',
        market: 'Aligarh',
        commodity: 'Brinjal'
    },
    {
        state: 'Uttar Pradesh',
        district: 'Aligarh',
        market: 'Aligarh',
        commodity: 'Cabbage'
    },
    {
        state: 'Uttar Pradesh',
        district: 'Aligarh',
        market: 'Aligarh',
        commodity: 'Green Gram (Moong)(Whole)'
    },
    {
        state: 'Uttar Pradesh',
        district: 'Aligarh',
        market: 'Aligarh',
        commodity: 'Gur(Jaggery)'
    },
    {
        state: 'Uttar Pradesh',
        district: 'Aligarh',
        market: 'Aligarh',
        commodity: 'Lentil (Masur)(Whole)'
    },
    {
        state: 'Uttar Pradesh',
        district: 'Aligarh',
        market: 'Aligarh',
        commodity: 'Rice'
    },
    {
        state: 'Uttar Pradesh',
        district: 'Aligarh',
        market: 'Aligarh',
        commodity: 'Tomato'
    },
    {
        state: 'Uttar Pradesh',
        district: 'Aligarh',
        market: 'Atrauli',
        commodity: 'Bottle gourd'
    },
    {
        state: 'Uttar Pradesh',
        district: 'Aligarh',
        market: 'Atrauli',
        commodity: 'Wheat'
    },
    {
        state: 'Uttar Pradesh',
        district: 'Aligarh',
        market: 'Charra',
        commodity: 'Bottle gourd'
    },
    {
        state: 'Uttar Pradesh',
        district: 'Aligarh',
        market: 'Charra',
        commodity: 'Green Chilli'
    },
    {
        state: 'Uttar Pradesh',
        district: 'Aligarh',
        market: 'Charra',
        commodity: 'Onion'
    },
    {
        state: 'Uttar Pradesh',
        district: 'Allahabad',
        market: 'Ajuha',
        commodity: 'Cucumbar(Kheera)'
    },
    {
        state: 'Uttar Pradesh',
        district: 'Allahabad',
        market: 'Ajuha',
        commodity: 'Potato'
    },
    {
        state: 'Uttar Pradesh',
        district: 'Allahabad',
        market: 'Allahabad',
        commodity: 'Garlic'
    },
    {
        state: 'Uttar Pradesh',
        district: 'Allahabad',
        market: 'Allahabad',
        commodity: 'Mustard'
    },
    {
        state: 'Uttar Pradesh',
        district: 'Ambedkarnagar',
        market: 'Akbarpur',
        commodity: 'Banana'
    },
    {
        state: 'Uttar Pradesh',
        district: 'Ambedkarnagar',
        market: 'Akbarpur',
        commodity: 'Green Chilli'
    },
    {
        state: 'Uttar Pradesh',
        district: 'Ambedkarnagar',
        market: 'Akbarpur',
        commodity: 'Onion'
    },
    {
        state: 'Uttar Pradesh',
        district: 'Ambedkarnagar',
        market: 'Akbarpur',
        commodity: 'Tomato'
    },
    {
        state: 'Uttar Pradesh',
        district: 'Auraiya',
        market: 'Achalda',
        commodity: 'Bajra(Pearl Millet/Cumbu)'
    },
    {
        state: 'Uttar Pradesh',
        district: 'Auraiya',
        market: 'Achalda',
        commodity: 'Banana'
    },
    {
        state: 'Uttar Pradesh',
        district: 'Balrampur',
        market: 'Balrampur',
        commodity: 'Bengal Gram(Gram)(Whole)'
    },
    {
        state: 'Uttar Pradesh',
        district: 'Balrampur',
        market: 'Balrampur',
        commodity: 'Black Gram (Urd Beans)(Whole)'
    }, {
        state: 'Uttrakhand',
        district: 'Champawat',
        market: 'Tanakpur',
        commodity: 'Pear(Marasebu)'
    },
    {
        state: 'Uttrakhand',
        district: 'Dehradoon',
        market: 'Dehradoon',
        commodity: 'Cabbage'
    },
    {
        state: 'Uttrakhand',
        district: 'Dehradoon',
        market: 'Dehradoon',
        commodity: 'Sponge gourd'
    },
    {
        state: 'Uttrakhand',
        district: 'Dehradoon',
        market: 'Rishikesh',
        commodity: 'Bitter gourd'
    },
    {
        state: 'Uttrakhand',
        district: 'Dehradoon',
        market: 'Rishikesh',
        commodity: 'Pomegranate'
    },
    {
        state: 'Uttrakhand',
        district: 'Garhwal (Pauri)',
        market: 'Kotadwara',
        commodity: 'Mango'
    },
    {
        state: 'Uttrakhand',
        district: 'Garhwal (Pauri)',
        market: 'Kotadwara',
        commodity: 'Onion'
    },
    {
        state: 'Uttrakhand',
        district: 'Garhwal (Pauri)',
        market: 'Kotadwara',
        commodity: 'Potato'
    },
    {
        state: 'Uttrakhand',
        district: 'Garhwal (Pauri)',
        market: 'Kotadwara',
        commodity: 'Pumpkin'
    },
    {
        state: 'Uttrakhand',
        district: 'Haridwar',
        market: 'Haridwar Union',
        commodity: 'Banana'
    },
    {
        state: 'Uttrakhand',
        district: 'Haridwar',
        market: 'Haridwar Union',
        commodity: 'Bitter gourd'
    },
    {
        state: 'Uttrakhand',
        district: 'Haridwar',
        market: 'Haridwar Union',
        commodity: 'Papaya'
    },
    {
        state: 'Uttrakhand',
        district: 'Haridwar',
        market: 'Manglaur',
        commodity: 'Brinjal'
    },
    {
        state: 'Uttrakhand',
        district: 'Haridwar',
        market: 'Manglaur', commodity: 'Green Chilli'
    },
    {
        state: 'Uttrakhand',
        district: 'Haridwar',
        market: 'Manglaur',
        commodity: 'Pumpkin'
    },
    {
        state: 'Uttrakhand',
        district: 'Haridwar',
        market: 'Roorkee',
        commodity: 'Banana'
    },
    {
        state: 'Uttrakhand',
        district: 'Haridwar',
        market: 'Roorkee',
        commodity: 'Mousambi(Sweet Lime)'
    },
    {
        state: 'Uttrakhand',
        district: 'Nanital',
        market: 'Ramnagar',
        commodity: 'Bottle gourd'
    },
    {
        state: 'Uttrakhand',
        district: 'Nanital',
        market: 'Ramnagar',
        commodity: 'Mango'
    },
    {
        state: 'Uttrakhand',
        district: 'Nanital',
        market: 'Ramnagar',
        commodity: 'Pumpkin'
    },
    {
        state: 'Uttrakhand',
        district: 'Nanital',
        market: 'Ramnagar',
        commodity: 'Sponge gourd'
    },
    {
        state: 'Uttrakhand',
        district: 'UdhamSinghNagar',
        market: 'Jaspur(UC)',
        commodity: 'Green Chilli'
    },
    {
        state: 'Uttrakhand',
        district: 'UdhamSinghNagar',
        market: 'Jaspur(UC)',
        commodity: 'Jack Fruit'
    },
    {
        state: 'Uttrakhand',
        district: 'UdhamSinghNagar',
        market: 'Jaspur(UC)',
        commodity: 'Tomato'
    },
    {
        state: 'Uttrakhand',
        district: 'UdhamSinghNagar',
        market: 'Kashipur',
        commodity: 'Banana'
    },
    {
        state: 'Uttrakhand',
        district: 'UdhamSinghNagar',
        market: 'Kashipur',
        commodity: 'Cabbage'
    },
    {
        state: 'Uttrakhand',
        district: 'UdhamSinghNagar',
        market: 'Kashipur',
        commodity: 'Cucumbar(Kheera)'
    },
    {
        state: 'Uttrakhand',
        district: 'UdhamSinghNagar',
        market: 'Kashipur',
        commodity: 'Mango'
    },
    {
        state: 'Uttrakhand',
        district: 'UdhamSinghNagar',
        market: 'Kashipur',
        commodity: 'Mousambi(Sweet Lime)'
    },
    {
        state: 'Uttrakhand',
        district: 'UdhamSinghNagar',
        market: 'Kashipur',
        commodity: 'Pomegranate'
    },
    {
        state: 'Uttrakhand',
        district: 'UdhamSinghNagar',
        market: 'Kashipur',
        commodity: 'Pumpkin'
    },
    {
        state: 'Uttrakhand',
        district: 'UdhamSinghNagar',
        market: 'Kashipur',
        commodity: 'Sponge gourd'
    },
    {
        state: 'Uttrakhand',
        district: 'UdhamSinghNagar',
        market: 'Khateema',
        commodity: 'Cucumbar(Kheera)'
    },
    {
        state: 'Uttrakhand',
        district: 'UdhamSinghNagar',
        market: 'Khateema',
        commodity: 'Potato'
    },
    {
        state: 'Uttrakhand',
        district: 'UdhamSinghNagar',
        market: 'Kicchha',
        commodity: 'Brinjal'
    },
    {
        state: 'Uttrakhand',
        district: 'UdhamSinghNagar',
        market: 'Rudrapur',
        commodity: 'Bitter gourd'
    },
    {
        state: 'Uttrakhand',
        district: 'UdhamSinghNagar',
        market: 'Rudrapur',
        commodity: 'Cabbage'
    },
    {
        state: 'Uttrakhand',
        district: 'UdhamSinghNagar',
        market: 'Rudrapur',
        commodity: 'Colacasia'
    },
    {
        state: 'Uttrakhand',
        district: 'UdhamSinghNagar',
        market: 'Rudrapur',
        commodity: 'Mousambi(Sweet Lime)'
    },
    {
        state: 'Uttrakhand',
        district: 'UdhamSinghNagar',
        market: 'Rudrapur',
        commodity: 'Tomato'
    },
    {
        state: 'Uttrakhand',
        district: 'Dehradoon',
        market: 'Dehradoon',
        commodity: 'Bitter gourd'
    },
    {
        state: 'Uttrakhand',
        district: 'Dehradoon',
        market: 'Dehradoon',
        commodity: 'Colacasia'
    },
    {
        state: 'Uttrakhand',
        district: 'Dehradoon',
        market: 'Dehradoon',
        commodity: 'Papaya'
    },
    {
        state: 'Uttrakhand',
        district: 'Dehradoon',
        market: 'Rishikesh',
        commodity: 'Bhindi(Ladies Finger)'
    },
    {
        state: 'Uttrakhand',
        district: 'Dehradoon',
        market: 'Rishikesh',
        commodity: 'Papaya'
    },
    {
        state: 'Uttrakhand',
        district: 'Garhwal (Pauri)',
        market: 'Kotadwara',
        commodity: 'Apple'
    },
    {
        state: 'Uttrakhand',
        district: 'Garhwal (Pauri)',
        market: 'Kotadwara',
        commodity: 'Bhindi(Ladies Finger)'
    },
    {
        state: 'Uttrakhand',
        district: 'Garhwal (Pauri)',
        market: 'Kotadwara',
        commodity: 'Brinjal'
    },
    {
        state: 'Uttrakhand',
        district: 'Garhwal (Pauri)',
        market: 'Kotadwara',
        commodity: 'Maize'
    },
    {
        state: 'Uttrakhand',
        district: 'Haridwar',
        market: 'Haridwar Union',
        commodity: 'Bhindi(Ladies Finger)'
    },
    {
        state: 'Uttrakhand',
        district: 'Haridwar',
        market: 'Haridwar Union',
        commodity: 'Brinjal'
    },
    {
        state: 'Uttrakhand',
        district: 'Haridwar',
        market: 'Haridwar Union',
        commodity: 'Green Peas'
    },
    {
        state: 'Uttrakhand',
        district: 'Haridwar',
        market: 'Haridwar Union',
        commodity: 'Ridgeguard(Tori)'
    },
    {
        state: 'Uttrakhand',
        district: 'Haridwar',
        market: 'Lakshar',
        commodity: 'Bhindi(Ladies Finger)'
    },
    {
        state: 'Uttrakhand',
        district: 'Haridwar',
        market: 'Lakshar',
        commodity: 'Colacasia'
    },
    {
        state: 'Uttrakhand',
        district: 'Haridwar',
        market: 'Manglaur',
        commodity: 'Lemon'
    },
    {
        state: 'Uttrakhand',
        district: 'Haridwar',
        market: 'Roorkee',
        commodity: 'Brinjal'
    },
    {
        state: 'Uttrakhand',
        district: 'Haridwar',
        market: 'Roorkee',
        commodity: 'Cucumbar(Kheera)'
    },
    {
        state: 'Uttrakhand',
        district: 'Nanital',
        market: 'Ramnagar',
        commodity: 'Bhindi(Ladies Finger)'
    },
    {
        state: 'Uttrakhand',
        district: 'Nanital',
        market: 'Ramnagar',
        commodity: 'Potato'
    },
    {
        state: 'Uttrakhand',
        district: 'UdhamSinghNagar',
        market: 'Gadarpur',
        commodity: 'Wheat'
    },
    {
        state: 'Uttrakhand',
        district: 'UdhamSinghNagar',
        market: 'Jaspur(UC)',
        commodity: 'Bhindi(Ladies Finger)'
    },
    {
        state: 'Uttrakhand',
        district: 'UdhamSinghNagar',
        market: 'Jaspur(UC)',
        commodity: 'Onion'
    },
    {
        state: 'Uttrakhand',
        district: 'UdhamSinghNagar',
        market: 'Jaspur(UC)',
        commodity: 'Ridgeguard(Tori)'
    },
    {
        state: 'Uttrakhand',
        district: 'UdhamSinghNagar',
        market: 'Kashipur',
        commodity: 'Apple'
    },
    {
        state: 'Uttrakhand',
        district: 'UdhamSinghNagar',
        market: 'Kashipur',
        commodity: 'Bhindi(Ladies Finger)'
    },
    {
        state: 'Uttrakhand',
        district: 'UdhamSinghNagar',
        market: 'Kashipur',
        commodity: 'Bottle gourd'
    },
    {
        state: 'Uttrakhand',
        district: 'UdhamSinghNagar',
        market: 'Khateema',
        commodity: 'Onion'
    },
    {
        state: 'Uttrakhand',
        district: 'UdhamSinghNagar',
        market: 'Khateema',
        commodity: 'Papaya'
    },
    {
        state: 'Uttrakhand',
        district: 'UdhamSinghNagar',
        market: 'Khateema',
        commodity: 'Tomato'
    },
    {
        state: 'Uttrakhand',
        district: 'UdhamSinghNagar',
        market: 'Kicchha',
        commodity: 'Bottle gourd'
    },
    {
        state: 'Uttrakhand',
        district: 'UdhamSinghNagar',
        market: 'Rudrapur',
        commodity: 'Bottle gourd'
    },
    {
        state: 'Uttrakhand',
        district: 'UdhamSinghNagar',
        market: 'Rudrapur',
        commodity: 'Sponge gourd'
    },
    {
        state: 'Uttrakhand',
        district: 'Dehradoon',
        market: 'Dehradoon',
        commodity: 'Bottle gourd'
    },
    {
        state: 'Uttrakhand',
        district: 'Dehradoon',
        market: 'Dehradoon',
        commodity: 'Garlic'
    },
    {
        state: 'Uttrakhand',
        district: 'Dehradoon',
        market: 'Dehradoon',
        commodity: 'Mousambi(Sweet Lime)'
    },
    {
        state: 'Uttrakhand',
        district: 'Dehradoon',
        market: 'Dehradoon',
        commodity: 'Tomato'
    },
    {
        state: 'Uttrakhand',
        district: 'Dehradoon',
        market: 'Rishikesh',
        commodity: 'Cucumbar(Kheera)'
    },
    {
        state: 'Uttrakhand',
        district: 'Dehradoon',
        market: 'Rishikesh',
        commodity: 'Mango'
    },
    {
        state: 'Uttrakhand',
        district: 'Garhwal (Pauri)',
        market: 'Kotadwara',
        commodity: 'Bitter gourd'
    },
    {
        state: 'Uttrakhand',
        district: 'Garhwal (Pauri)',
        market: 'Kotadwara',
        commodity: 'Cucumbar(Kheera)'
    },
    {
        state: 'Uttrakhand',
        district: 'Haridwar',
        market: 'Bhagwanpur(Naveen Mandi Sthal)',
        commodity: 'Banana'
    },
    {
        state: 'Uttrakhand',
        district: 'Haridwar',
        market: 'Bhagwanpur(Naveen Mandi Sthal)',
        commodity: 'Bottle gourd'
    },
    {
        state: 'Uttrakhand',
        district: 'Haridwar',
        market: 'Haridwar Union',
        commodity: 'Mango'
    },
    {
        state: 'Uttrakhand',
        district: 'Haridwar',
        market: 'Haridwar Union',
        commodity: 'Onion'
    },
    {
        state: 'Uttrakhand',
        district: 'Haridwar',
        market: 'Manglaur',
        commodity: 'Bottle gourd'
    },
    {
        state: 'Uttrakhand',
        district: 'Haridwar',
        market: 'Manglaur',
        commodity: 'Onion'
    },
    {
        state: 'Uttrakhand',
        district: 'Haridwar',
        market: 'Roorkee',
        commodity: 'Green Chilli'
    },
    {
        state: 'Uttrakhand',
        district: 'UdhamSinghNagar',
        market: 'Bazpur',
        commodity: 'Potato'
    },
    {
        state: 'Uttrakhand',
        district: 'UdhamSinghNagar',
        market: 'Jaspur(UC)',
        commodity: 'Mango'
    },
    {
        state: 'Uttrakhand',
        district: 'UdhamSinghNagar',
        market: 'Kashipur',
        commodity: 'Ginger(Green)'
    },
    {
        state: 'Uttrakhand',
        district: 'UdhamSinghNagar',
        market: 'Kashipur',
        commodity: 'Lemon'
    },
    {
        state: 'Uttrakhand',
        district: 'UdhamSinghNagar',
        market: 'Kashipur',
        commodity: 'Papaya'
    },
    {
        state: 'Uttrakhand',
        district: 'UdhamSinghNagar',
        market: 'Kashipur',
        commodity: 'Raddish'
    },
    {
        state: 'Uttrakhand',
        district: 'UdhamSinghNagar',
        market: 'Khateema',
        commodity: 'Green Chilli'
    },
    {
        state: 'Uttrakhand',
        district: 'UdhamSinghNagar',
        market: 'Kicchha',
        commodity: 'Banana'
    },
    {
        state: 'Uttrakhand',
        district: 'UdhamSinghNagar',
        market: 'Kicchha',
        commodity: 'Fish'
    },
    {
        state: 'Uttrakhand',
        district: 'UdhamSinghNagar',
        market: 'Kicchha',
        commodity: 'Pumpkin'
    },
    {
        state: 'Uttrakhand',
        district: 'UdhamSinghNagar',
        market: 'Rudrapur',
        commodity: 'Apple'
    },
    {
        state: 'Uttrakhand',
        district: 'UdhamSinghNagar',
        market: 'Rudrapur',
        commodity: 'Brinjal'
    },
    {
        state: 'West Bengal',
        district: 'Burdwan',
        market: 'Guskara(Burdwan)',
        commodity: 'Potato'
    },
    {
        state: 'West Bengal',
        district: 'Burdwan',
        market: 'Guskara(Burdwan)',
        commodity: 'Rice'
    },
    {
        state: 'West Bengal',
        district: 'Burdwan',
        market: 'Katwa',
        commodity: 'Mustard Oil'
    },
    {
        state: 'West Bengal',
        district: 'Burdwan',
        market: 'Katwa',
        commodity: 'Onion'
    },
    {
        state: 'West Bengal',
        district: 'Burdwan',
        market: 'Katwa',
        commodity: 'Rice'
    },
    {
        state: 'West Bengal',
        district: 'Hooghly',
        market: 'Champadanga',
        commodity: 'Tomato'
    },
    {
        state: 'West Bengal',
        district: 'Hooghly',
        market: 'Kalipur',
        commodity: 'Paddy(Dhan)(Common)'
    },
    {
        state: 'West Bengal',
        district: 'Hooghly',
        market: 'Kalipur',
        commodity: 'Pointed gourd (Parval)'
    },
    {
        state: 'West Bengal',
        district: 'Hooghly',
        market: 'Pandua',
        commodity: 'Pointed gourd (Parval)'
    },
    {
        state: 'West Bengal',
        district: 'Hooghly',
        market: 'Pandua',
        commodity: 'Potato'
    },
    {
        state: 'West Bengal',
        district: 'Hooghly',
        market: 'Pandua',
        commodity: 'Tomato'
    },
    {
        state: 'West Bengal',
        district: 'Hooghly',
        market: 'Sheoraphuly',
        commodity: 'Ginger(Green)'
    },
    {
        state: 'West Bengal',
        district: 'Jalpaiguri',
        market: 'Falakata',
        commodity: 'Green Chilli'
    },
    {
        state: 'West Bengal',
        district: 'Malda',
        market: 'English Bazar',
        commodity: 'Potato'
    },
    {
        state: 'West Bengal',
        district: 'Nadia',
        market: 'Nadia',
        commodity: 'Potato'
    },
    {
        state: 'West Bengal',
        district: 'Burdwan',
        market: 'Guskara(Burdwan)',
        commodity: 'Brinjal'
    },
    {
        state: 'West Bengal',
        district: 'Burdwan',
        market: 'Guskara(Burdwan)',
        commodity: 'Paddy(Dhan)(Common)'
    },
    {
        state: 'West Bengal',
        district: 'Burdwan',
        market: 'Katwa',
        commodity: 'Paddy(Dhan)(Common)'
    },
    {
        state: 'West Bengal',
        district: 'Hooghly',
        market: 'Champadanga',
        commodity: 'Onion'
    },
    {
        state: 'West Bengal',
        district: 'Hooghly',
        market: 'Champadanga',
        commodity: 'Potato'
    },
    {
        state: 'West Bengal',
        district: 'Hooghly',
        market: 'Kalipur',
        commodity: 'Rice'
    },
    {
        state: 'West Bengal',
        district: 'Hooghly',
        market: 'Pandua',
        commodity: 'Onion'
    },
    {
        state: 'West Bengal',
        district: 'Hooghly',
        market: 'Pandua',
        commodity: 'Rice'
    },
    {
        state: 'West Bengal',
        district: 'Hooghly',
        market: 'Sheoraphuly',
        commodity: 'Bhindi(Ladies Finger)'
    },
    {
        state: 'West Bengal',
        district: 'Jalpaiguri',
        market: 'Falakata',
        commodity: 'Onion'
    },
    {
        state: 'West Bengal',
        district: 'Jalpaiguri',
        market: 'Falakata',
        commodity: 'Sweet Pumpkin'
    },
    {
        state: 'West Bengal',
        district: 'Jalpaiguri',
        market: 'Falakata',
        commodity: 'Tomato'
    },
    {
        state: 'West Bengal',
        district: 'Malda',
        market: 'English Bazar',
        commodity: 'Lentil (Masur)(Whole)'
    },
    {
        state: 'West Bengal',
        district: 'Nadia',
        market: 'Nadia',
        commodity: 'Jute'
    },
    {
        state: 'West Bengal',
        district: 'Burdwan',
        market: 'Guskara(Burdwan)',
        commodity: 'Mustard'
    },
    {
        state: 'West Bengal',
        district: 'Hooghly',
        market: 'Champadanga',
        commodity: 'Rice'
    },
    {
        state: 'West Bengal',
        district: 'Hooghly',
        market: 'Kalipur',
        commodity: 'Onion'
    },
    {
        state: 'West Bengal',
        district: 'Hooghly',
        market: 'Kalipur',
        commodity: 'Tomato'
    },
    {
        state: 'West Bengal',
        district: 'Hooghly',
        market: 'Sheoraphuly',
        commodity: 'Onion'
    },
    {
        state: 'West Bengal',
        district: 'Hooghly',
        market: 'Sheoraphuly',
        commodity: 'Potato'
    },
    {
        state: 'West Bengal',
        district: 'Jalpaiguri',
        market: 'Falakata',
        commodity: 'Bitter gourd'
    },
    {
        state: 'West Bengal',
        district: 'Malda',
        market: 'English Bazar',
        commodity: 'Green Gram Dal (Moong Dal)'
    },
    {
        state: 'West Bengal',
        district: 'Malda',
        market: 'English Bazar',
        commodity: 'Onion'
    },
    {
        state: 'West Bengal',
        district: 'Nadia',
        market: 'Nadia',
        commodity: 'Sweet Pumpkin'
    },
    {
        state: 'West Bengal',
        district: 'Burdwan',
        market: 'Katwa',
        commodity: 'Potato'
    },
    {
        state: 'West Bengal',
        district: 'Hooghly',
        market: 'Champadanga',
        commodity: 'Pointed gourd (Parval)'
    },
    {
        state: 'West Bengal',
        district: 'Hooghly',
        market: 'Kalipur',
        commodity: 'Potato'
    },
    {
        state: 'West Bengal',
        district: 'Hooghly',
        market: 'Sheoraphuly',
        commodity: 'Green Chilli'
    },
    {
        state: 'West Bengal',
        district: 'Hooghly',
        market: 'Sheoraphuly',
        commodity: 'Rice'
    },
    {
        state: 'West Bengal',
        district: 'Hooghly',
        market: 'Sheoraphuly',
        commodity: 'Ridgeguard(Tori)'
    },
    {
        state: 'West Bengal',
        district: 'Hooghly',
        market: 'Sheoraphuly',
        commodity: 'Tomato'
    },
    {
        state: 'West Bengal',
        district: 'Jalpaiguri',
        market: 'Falakata',
        commodity: 'Pointed gourd (Parval)'
    },
    {
        state: 'West Bengal',
        district: 'Nadia',
        market: 'Nadia',
        commodity: 'Green Chilli'
    },
    {
        state: 'West Bengal',
        district: 'Nadia',
        market: 'Nadia',
        commodity: 'Onion'
    },
    {
        state: 'West Bengal',
        district: 'Nadia',
        market: 'Nadia',
        commodity: 'Rice'
    },
    {
        state: 'West Bengal',
        district: 'Burdwan',
        market: 'Guskara(Burdwan)',
        commodity: 'Sesamum(Sesame,Gingelly,Til)'
    },
    {
        state: 'West Bengal',
        district: 'Burdwan',
        market: 'Katwa',
        commodity: 'Jute'
    },
    {
        state: 'West Bengal',
        district: 'Burdwan',
        market: 'Katwa',
        commodity: 'Mustard'
    },
    {
        state: 'West Bengal',
        district: 'Burdwan',
        market: 'Katwa',
        commodity: 'Sesamum(Sesame,Gingelly,Til)'
    },
    {
        state: 'West Bengal',
        district: 'Hooghly',
        market: 'Sheoraphuly',
        commodity: 'Brinjal'
    },
    {
        state: 'West Bengal',
        district: 'Hooghly',
        market: 'Sheoraphuly',
        commodity: 'Pointed gourd (Parval)'
    },
    {
        state: 'West Bengal',
        district: 'Jalpaiguri',
        market: 'Falakata',
        commodity: 'Bhindi(Ladies Finger)'
    },
    {
        state: 'West Bengal',
        district: 'Jalpaiguri',
        market: 'Falakata',
        commodity: 'Brinjal'
    },
    {
        state: 'West Bengal',
        district: 'Jalpaiguri',
        market: 'Falakata',
        commodity: 'Garlic'
    },
    {
        state: 'West Bengal',
        district: 'Jalpaiguri',
        market: 'Falakata',
        commodity: 'Ginger(Dry)'
    },
    {
        state: 'West Bengal',
        district: 'Jalpaiguri',
        market: 'Falakata',
        commodity: 'Potato'
    },
    {
        state: 'West Bengal',
        district: 'Malda',
        market: 'English Bazar',
        commodity: 'Rice'
    },
    {
        state: 'West Bengal',
        district: 'Nadia',
        market: 'Nadia',
        commodity: 'Brinjal'
    },
    {
        state: 'West Bengal',
        district: 'Nadia',
        market: 'Nadia',
        commodity: 'Mustard'
    }
]

export default data;