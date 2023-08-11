const diseaseInfo = [
  {
    id: 0,
    name: "Apple Scab",
    description:
      "Apple scab is the most common disease of apple and crabapple trees in Minnesota. Scab is caused by a fungus that infects both leaves and fruit. Scabby fruit are often unfit for eating. Infected leaves have olive green to brown spots. Leaves with many leaf spots turn yellow and fall off early. Leaf loss weakens the tree when it occurs many years in a row. Planting disease resistant varieties is the best way to manage scab.",
    possibleSteps:
      "Choose resistant varieties when possible. Rake under trees and destroy infected leaves to reduce the number of fungal spores available to start the disease cycle over again next spring. Water in the evening or early morning hours (avoid overhead irrigation) to give the leaves time to dry out before infection can occur. Spread a 3- to 6-inch layer of compost under trees, keeping it away from the trunk, to cover soil and prevent splash dispersal of the fungal spores. For best control, spray liquid copper soap early, two weeks before symptoms normally appear. Alternatively, begin applications when disease first appears, and repeat at 7 to 10 day intervals up to blossom drop.",
    image_url: "https://extension.umn.edu/sites/extension.umn.edu/files/apple-scab-1.jpg",
  },
  {
    id: 1,
    name: "Apple Black rot",
    description:
      "Leaf symptoms first occur early in the spring when the leaves are unfolding. They appear as small, purple specks on the upper surface of the leaves that enlarge into circular lesions 1/8 to 1/4 inch (3-6 mm) in diameter. The margin of the lesions remains purple, while the center turns tan to brown. In a few weeks, secondary enlargement of these leaf spots occurs. Heavily infected leaves become chlorotic and defoliation occurs. As the rotted area enlarges, a series of concentric bands of uniform width form which alternate in color from black to brown. The flesh of the rotted area remains firm and leathery. Black pycnidia are often seen on the surface of the infected fruit.",
    possibleSteps:
      "Remove the cankers by pruning at least 15 inches below the end and burn or bury them. Also take preventative care with new season prunings and burn them, too. You are better off pruning during the dormant season. This will minimize the odds that fire blight will infect your tree and produce dead tissue that can easily be infected by Botryosphaeria. You should also take precautions if the bark is damaged by hail, or branches break during a windstorm. Using a copper-based fungicide will protect against both black rot and fire blight.",
    image_url: "http://www.omafra.gov.on.ca/english/crops/facts/blackrotf1.jpg",
  },
  {
    id: 2,
    name: "Apple healthy",
    description:
      "As with most fruit, apples produce best when grown in full sun, which means six or more hours of direct summer Sun daily. The best exposure for apples is a north side of a house, tree line, or rise rather than the south. Apple trees need well-drained soil, but should be able to retain some moisture.",
    possibleSteps:
      "Apples Are Nutritious. Apples May Be Good for Weight Loss. Apples May Be Good for Your Heart. They're Linked to a Lower Risk of Diabetes. They May Have Prebiotic Effects and Promote Good Gut Bacteria. Substances in Apples May Help Prevent Cancer.",
    image_url:
      "https://previews.123rf.com/images/msnobody/msnobody1508/msnobody150800002/43698436-red-apple-on-a-branch-of-an-apple-tree-on-a-sunny-day-organic-farmingagriculture-fresh-healthy-natur.jpg",
  },
  {
    id: 3,
    name: "Corn Common rust",
    description:
      "Although a few rust pustules can always be found in corn fields throughout the growing season, symptoms generally do not appear until after tasseling. These can be easily recognized and distinguished from other diseases by the development of dark, reddish-brown pustules (uredinia) scattered over both the upper and lower surfaces of the corn leaves. These pustules may appear on any above ground part of the plant, but are most abundant on the leaves. Pustules appear oval to elongate in shape, are generally small, less than 1/4 inch long, and are surrounded by the leaf epidermal layer, where it has broken through.",
    possibleSteps:
      "To reduce the incidence of corn rust, plant only corn that has resistance to the fungus. Resistance is either in the form of race-specific resistance or partial rust resistance. In either case, no sweet corn is completely resistant. If the corn begins to show symptoms of infection, immediately spray with a fungicide.",
    image_url: "https://ohioline.osu.edu/sites/ohioline/files/imce/Plant_Pathology/PLNTPTH-CER-02_Figure_1.png",
  },
  {
    id: 5,
    name: "Corn Northern Leaf Blight",
    description:
      "Northern corn leaf blight (NCLB) is caused by the fungus Setosphaeria turcica. Symptoms usually appear first on the lower leaves. Leaf lesions are long (1 to 6 inches) and elliptical, gray-green at first but then turn pale gray or tan. Under moist conditions, dark gray spores are produced, usually on the lower leaf surface, which give lesions a 'dirty' gray appearance. Entire leaves on severely blighted plants can die, so individual lesions are not visible. Lesions may occur on the outer husk of ears, but the kernels are not infected. On hybrids that contain an Ht gene for resistance to the fungus, lesions are smaller, chlorotic, and may develop into linear streaks. These lesions rarely produce spores.",
    possibleSteps:
      "Fungicide applications reduced Northern Corn Leaf Blight damage and protected yield. Fungicide value was higher in reducing yield in susceptible corn hybrids. Fungicides were most effective if they were applied at disease onset. Disease onset varied in growth stages, and so the best stage to apply fungicides.",
    image_url: "https://crop-protection-network.s3.amazonaws.com/articles/NLB-Daren-Mueller-02.jpg",
  },
  {
    id: 4,
    name: "Corn healthy",
    description:
      "Corn plants prefer daytime temperatures of 75 to 80 degrees F and 65 to 70 degrees F during the night. The soil should be kept consistently moist, but not soggy, and they only need fertilizer every 6 months. Although dracaena can take low light conditions, they do best when placed in bright but indirect light. It's just natural for a plant to produce a few yellow leaves; it's nothing to get alarmed about. However, if it produces a lot of yellow leaves all at once, say five or six, you may be over-watering or the plant may be suffering from a lack of light.",
    possibleSteps:
      "Corn has several health benefits. Because of the high fiber content, it can aid with digestion. It also contains valuable B vitamins, which are important to your overall health. Corn also provides our bodies with essential minerals such as zinc, magnesium, copper, iron, and manganese.",
    image_url: "https://c8.alamy.com/comp/A85TR2/young-healthy-green-leaves-of-corn-maize-plant-in-pretty-unfolding-A85TR2.jpg",
  },
  {
    id: 6,
    name: "Grape Black rot",
    description:
      "Grape black rot is a fungal disease caused by an ascomycetous fungus, Guignardia bidwellii, that attacks grape vines during hot and humid weather. Grape black rot originated in eastern North America but now occurs in portions of Europe, South America, and Asia. It can cause complete crop loss in warm, humid climates, but is virtually unknown in regions with arid summers. The name comes from the black fringe that borders growing brown patches on the leaves. The disease also attacks other parts of the plant, all green parts of the vine: the shoots, leaf and fruit stems, tendrils, and fruit. The most damaging effect is to the fruit.",
    possibleSteps:
      "Mancozeb is available as BONIDE MANCOZEB FLOWABLE fungicide. It contains 37% Mancozeb and should be very effective for controlling black rot. Nova (myclobutanil) is available in IMMUNOX FUNGICIDE. It is 1.55 % myclobutanil and should be effective for controlling black rot.",
    image_url: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/cb/Guignardia_bidwellii_08.jpg/330px-Guignardia_bidwellii_08.jpg",
  },
  {
    id: 7,
    name: "Grape Esca(Black Measles)",
    description:
      "Grapevine measles, also called esca, black measles, or Spanish measles, has long plagued grape growers with its cryptic expression of symptoms and, for a long time, a lack of identifiable causal organism(s). The name 'measles' refers to the superficial spots found on the fruit. During the season, the spots may coalesce over the skin surface, making berries black in appearance. Spotting can develop anytime between fruit set and a few days prior to harvest. Berries affected at fruit set tend not to mature and will shrivel and dry up. In addition to spotting, fruit affected later in the season will also have an acrid taste. Leaf symptoms are characterized by a 'tiger stripe' pattern when infections are severe from year to year. Mild infections can produce leaf symptoms that can be confused with other diseases or nutritional deficiencies. White cultivars will display areas of chlorosis followed by necrosis, while red cultivars are characterized by red areas followed by necrosis. Early spring symptoms include shoot tip dieback, leaf discoloration, and complete defoliation in severe cases.",
    possibleSteps:
      "Till date there is no effective method to control this disease. Remove the infected berries, leaves, and trunk and destroy them. Protect the prune wounds to minimize fungal infection using wound sealant (5% boric acid in acrylic paint) or essential oil or suitable fungicides.",
    image_url:
      "https://www.researchgate.net/profile/Laura-Mugnai/publication/43161073/figure/fig1/AS:340404659605512@1458170203496/Symptoms-associated-with-esca-of-grapevine-chlorosis-and-necrosis-on-the-leaves-showing_Q320.jpg",
  },
  {
    id: 8,
    name: "Grape healthy",
    description:
      "Apply water only to the root zone. Avoid getting grape foliage wet as this can encourage many grape diseases. Reduce watering young vines in the fall to encourage the plant to harden-off its canes to prepare for winter. Older vines seldom need any watering unless on sandy or other very well-drained soils.",
    possibleSteps:
      "Packed With Nutrients, Especially Vitamins C and K. High Antioxidant Contents May Prevent Chronic Diseases. Plant Compounds May Protect Against Certain Types of Cancer. Beneficial for Heart Health in Various Impressive Ways. May Decrease Blood Sugar Levels and Protect Against Diabetes.",
    image_url: "https://images.indianexpress.com/2021/02/grapes-1200.jpg",
  },
  {
    id: 9,
    name: "Peach Bacterial spot",
    description:
      "Bacterial spot is an important disease of peaches, nectarines, apricots, and plums caused by Xanthomonas campestris pv. pruni. Symptoms of this disease include fruit spots, leaf spots, and twig cankers. Fruit symptoms include pitting, cracking, gumming, and watersoaked tissue, which can make the fruit more susceptible to brown rot, rhizopus rot, and anthracnose. Spots on the leaves begin as small, dark lesions and can lead to defoliation. Twig infections can result in elongated cankers, which may also contribute to dieback.",
    possibleSteps:
      "Application of fixed copper fungicides such as Bordeaux mixture is the mainstay of bacterial spot control. However, the bacteria are becoming increasingly resistant to copper, and its use may become restricted in the future. In some regions, streptomycin (Agri-mycin) is used on a regular basis.",
    image_url: "https://www.plantmanagementnetwork.org/pub/php/img/2007/peach/c1-14-2.jpg",
  },
  {
    id: 10,
    name: "Peach healthy",
    description:
      "Peaches require full sun to grow well. They grow in a wide range of soil types but require good drainage. The soil pH should be between 6.0-7.0. If soil pH is less than 6.0, lime should be added according to soil test recommendations. Peaches should not be planted in low areas where cold air settles or in frost pockets.",
    possibleSteps:
      "Peaches are a low-calorie fruit that is rich in vitamins A and C. They also contain fiber, which contributes to good digestive health. Peaches with the skin on are a good source of dietary fiber, which is known to aid digestion, and they are also rich in vitamins A and C.",
    image_url: "https://dpvnews.panasonic.com/content/dam/dpv/usa/images/recipe-images/fruits/peach/peach-01.jpg",
  },
  {
    id: 12,
    name: "Strawberry Leaf scorch",
    description:
      "Leaf scorch symptoms are very similar to the early stages of common (Mycosphaerella) leaf spot, with irregular dark purple spots being scattered over the upper leaf surface. As the spots enlarge, they begin to look like drops of tar, and are actually the accumulations of black fruiting bodies (acervuli) of the fungus. The centers of the spots remain purple (in Mycosphaerella leaf spot they are white) and there is no well-defined lesion border. In heavy infections, these regions coalesce and the tissue between the lesions often takes on a purplish to bright red color that is dependent on cultivar, temperature, or other factors. The leaves eventually turn brown, dry up, and curl at the margins giving the leaf a scorched appearance. Examination of the acervuli and conidial morphology can help to distinguish between leaf spot and leaf scorch at this advanced stage of disease. On the upper leaf surfaces of leaf scorch lesions, the acervuli are dark with glistening spore masses and dark apothecia. Petiole lesions are elongate, sunken, with a purplish to brown color and can kill the leaf by girdling the petiole. Runners, fruit stalks, fruit and caps can also become infected. Plants may become weakened and the number and vigor of crowns reduced. Infection predisposes the plants to winter and drought stress. In severe infestations, flowers and fruit may die.",
    possibleSteps:
      "While leaf scorch on strawberry plants can be frustrating, there are some strategies which home gardeners may employ to help prevent its spread in the garden. The primary means of strawberry leaf scorch control should always be prevention. Since this fungal pathogen overwinters on the fallen leaves of infected plants, proper garden sanitation is key. This includes the removal of infected garden debris from the strawberry patch, as well as the frequent establishment of new strawberry transplants. The creation of new plantings and strawberry patches is key to maintaining a consistent strawberry harvest, as older plants are more likely to show signs of severe infection.",
    image_url: "https://content.ces.ncsu.edu/media/images/17531_IMG_2126.JPG",
  },
  {
    id: 11,
    name: "Strawberry healthy",
    description:
      "Find them a sunny spot because they love and need lots of light. I prefer a spot where they receive the morning sun.If you have them in pots and/or other containers, it is good to move them during the day to take advantage of changing sunlight.They are thirsty plants. Water them daily, especially if they are producing fruit. It is best to do it in the morning and to avoid wetting the leaves for disease prevention. Keep them guarded from extreme weather conditions and wind. Please note that even if they like sunlight, being exposed to direct midday sunlight can be damaging as well.Check the pots for good drainage.Keep weeds and unwanted plants in check.You need to fertilize them because they need a lot of energy to produce strawberries. Buy a balanced fertilizer (10-10-10, 12-12-12, etc). Follow the directions because too much fertilizer can reduce the fruit yield and it may also stimulate runner production.",
    possibleSteps:
      "The heart-shaped silhouette of the strawberry is the first clue that this fruit is good for you. These potent little packages protect your heart, increase HDL (good) cholesterol, lower your blood pressure, and guard against cancer.Packed with vitamins, fiber, and particularly high levels of antioxidants known as polyphenols, strawberries are a sodium-free, fat-free, cholesterol-free, low-calorie food. They are among the top 20 fruits in antioxidant capacity and are a good source of manganese and potassium. Just one serving -- about eight strawberries -- provides more vitamin C than an orange.",
    image_url: "https://www.canr.msu.edu/uploads/images/7-12-11-MARK-plhstrw4.jpg",
  },
  {
    id: 13,
    name: "Tomato Bacterial spot",
    description:
      "Bacterial spot of tomato, caused by the bacterium Xanthomonas euvesicatoria, is a widespread and damaging disease that affects tomatoes worldwide. The disease affects leaves, stems, and fruit. It first appears as small, water-soaked spots on the undersides of leaves. As the spots enlarge, they develop a yellow halo and eventually turn brown. Lesions may coalesce, leading to severe defoliation and sunscald on fruit. On stems, lesions may form and cause wilting and dieback. Bacterial spot can be particularly problematic in warm and humid conditions.",
    possibleSteps:
      "Preventative measures are essential for managing bacterial spot of tomatoes. Start by planting disease-free transplants, and avoid planting tomatoes in the same location in consecutive years. Space plants to promote good air circulation and reduce humidity around the foliage. Avoid overhead irrigation, as wet leaves can promote disease development. Copper-based fungicides can be used preventatively to protect tomato plants from bacterial spot, but they need to be applied on a regular schedule before symptoms appear.",
    image_url: "https://vric.ucdavis.edu/main/diseases/images/bacterial_spot_tomato.jpg",
  },
  {
    id: 14,
    name: "Tomato Early blight",
    description:
      "Early blight of tomato, caused by the fungus Alternaria solani, is a common and widespread disease that affects tomatoes. The disease typically starts on the lower leaves and appears as small, dark spots with concentric rings that form a 'target' pattern. As the spots enlarge, they turn brown and the leaves may yellow and drop. The disease can progress up the plant, affecting more leaves and reducing photosynthesis and fruit development. On fruit, early blight causes dark, sunken lesions that may lead to secondary rotting.",
    possibleSteps:
      "There are several management practices that can help reduce the impact of early blight on tomatoes. Crop rotation is essential, as the disease can overwinter on plant debris in the soil. Avoid planting tomatoes in the same location more than once every three to four years. Choose tomato varieties with some level of resistance to early blight. These varieties may not eliminate the risk of infection but can reduce the severity of the disease. Applying fungicides preventively can also help protect against early blight, especially during periods of warm, wet weather. Ensure good air circulation by spacing plants appropriately and removing weeds that can impede airflow.",
    image_url: "https://aggie-horticulture.tamu.edu/tomato/files/2010/04/early_blight_tomato_Belinda.jpg",
  },
  {
    id: 15,
    name: "Tomato healthy",
    description:
      "Tomatoes need plenty of sunlight to grow well, so it's best to plant them in a location where they'll receive 8-10 hours of direct sunlight each day. Soil should be well-draining, fertile, and rich in organic matter. Tomatoes prefer a soil pH between 6.0 and 7.0. Watering should be consistent, providing about 1-2 inches of water per week, especially during fruit development.",
    possibleSteps:
      "Tomatoes are a rich source of vitamins A and C and potassium. They also contain significant amounts of vitamins B6, K, and folate. Tomatoes are a great source of antioxidants, including lycopene, which has been linked to a reduced risk of certain cancers and heart disease. They also provide dietary fiber, which is beneficial for digestive health.",
    image_url: "https://images.unsplash.com/photo-1612784429780-682e74db7921",
  },
];
export default diseaseInfo;


