var app = angular.module('starter', ['starter.controllers', 'pascalprecht.translate']);

app.run(function() {

	//console.log("ça marche 1");


});


app.config(function($translateProvider) {


    $translateProvider.translations('en', {
        'Hello': 'Hi',
        'concept': 'concept',
        'pricing': 'pricing',
        'contact':'contact',
        'The first siesta café in the world.': 'The first siesta café in the world.',
        'Find us at Muntaner 22 in Barcelona' : 'Find us at Muntaner 22 in Barcelona',
        'tell me more' : 'tell me more',

        //navbar
        'Nappuccino': 'Nappuccino',
        'Concept': 'Concept',
        'Food&Drinks': 'Food&Drinks',
        'Media':'Media',
        'Business Partners': 'Business Partners',
        'Contact' : 'Contact',

        //concept  
        'The first siesta café in the world' : 'The first siesta café in the world',
        'Eat. Drink. Sleep. Repeat.' : 'Eat. Drink. Sleep. Repeat.',
        'Have you heard of napping pods? Nappuccino is the first and unique café in the world that implements napping pods inside a café.' : 'Have you heard of napping pods? Nappuccino is the first and unique café in the world that implements napping pods inside a café.',
        'Located in the very center of Barcelona, it is a café where you can actually take a nap and it is neither hotel nor spa. It is genuine and cozy café where you can take a deep breath from a busy center of the city. Take your time to study, work on your computer, read a book, take a coffee or take a nap (or both).' : 'Located in the very center of Barcelona, it is a café where you can actually take a nap and it is neither hotel nor spa. It is genuine and cozy café where you can take a deep breath from a busy center of the city. Take your time to study, work on your computer, read a book, take a coffee or take a nap (or both).',
        'This is what makes Nappuccino the first siesta café in the world.' : 'This is what makes Nappuccino the first siesta café in the world.',
        'Pop in for a breakfast or quick lunch, enjoy delicious bagels, focaccias, authentic french pastry, local craft beer and for coffee lovers, an artesanal italian coffee.' : 'Pop in for a breakfast or quick lunch, enjoy delicious bagels, focaccias, authentic french pastry, local craft beer and for coffee lovers, an artesanal italian coffee.',
        'Nap or not, Nappuccino should be on your must-do list when visiting Barcelona.' : 'Nap or not, Nappuccino should be on your must-do list when visiting Barcelona.',
        'More about the concept of \'coffee nap\'' : 'More about the concept of \'coffee nap\'?',
        '' : '',
        
        
        //call to action //
        '\'The most accurate way to describe this place would be comparing it to an Oasis after a long walk in the desert.' : '\'The most accurate way to describe this place would be comparing it to an Oasis after a long walk in the desert.',
        'In my case, that nap was life saving\'...' : 'In my case, that nap was life saving...\'',

        //food and drinks
        'Breakfast quick lunch dessert' : 'Breakfast quick lunch dessert',
        'Homemade food, local craft beer and artisanal italian coffee' : 'Homemade food, local craft beer and artisanal italian coffee',
        'Bagels' : 'Bagels',
        'Granola' : 'Granola',
        'Quiches' : 'Quiches',
        'Bikini' : 'Bikini',
        'Artisanal italian coffee' : 'Artisan italian coffee',
        'Drinks' : 'Drinks',
        'Craft beer without gluten' : 'Craft beer without gluten',


         //media
         'About us' : 'About us',
         'Articles' : 'Articles',
        

         //business

         'Nappuccino - Business Opportunities' : 'Nappuccino - Business Opportunities',
         'If you think you share our vision of Nappuccino in every city of the world or want to be part of Nappuccino revolution, get in touch with us.' : 'If you think you share our vision of Nappuccino in every city of the world or want to be part of Nappuccino revolution, get in touch with us.',
         

         //contact
         'Contact' : 'Contact',
         'Get in touch' : 'Get in touch',





        //nappuccino
        'take a nap' : 'take a nap',
        'Sleep is nowadays perceived as a luxury while it is a necessity' : 'Sleep is nowadays perceived as a luxury while it is a necessity',
        'We offer you an escape from a city center of Barcelona. Take a nap, relax and enjoy. We provide you with a feeling of privacy here, just take a look at our chill zones.' : 'We offer you an escape from a city center of Barcelona. Take a nap, relax and enjoy. We provide you with a feeling of privacy here, just take a look at our chill zones.',
        'From our own experience, at some point drinking the eighth coffee a day is just not sufficient. Here, everytime you need a break from work or studying, you can lay down for a little bit or energize yourself with a coffee nap.' : 'From our own experience, at some point drinking the eighth coffee a day is just not sufficient. Here, everytime you need a break from work or studying, you can lay down for a little bit or energize yourself with a coffee nap.',
        'work' : 'work',
        'Against famous "No wifi, talk to each other" we come across with a fast wifi and unlimited snacks and coffee.' : 'Against famous \'No wifi, talk to each other\' we come across with a fast wifi and unlimited snacks and coffee.',
        'Nowadays it is common to work on our computers from home, from coffee places, libraries or some rent co-working offices. Change your environment and enjoy calm, relaxing ambience in Nappuccino. We have plenty of electrical outlets (including the ones inside of the nap booths) and we can charge your phone as well.' : 'Nowadays it is common to work on our computers from home, from coffee places, libraries or some rent co-working offices. Change your environment and enjoy calm, relaxing ambience in Nappuccino. We have plenty of electrical outlets (including the ones inside of the nap booths) and we can charge your phone as well.',
        'study' : 'study',
        'We are student-friendly. Bring your group mates to Nappuccino and study together. Expect wifi, electrical outlets, cool ambience and opportunity to take a nap as soon as you get tired with math formulas. You can try out coffee nap and with a bit of caffeine right before your nap, you become double productive when you wake up. Check out Nappuccino page to know more.' : 'We are student-friendly. Bring your group mates to Nappuccino and study together. Expect wifi, electrical outlets, cool ambience and opportunity to take a nap as soon as you get tired with math formulas. You can try out coffee nap and with a bit of caffeine right before your nap, you become double productive when you wake up. Check out Nappuccino page to know more.',
        'All of you, students and freelancers out there; Nappuccino is better than library.' : 'All of you, students and freelancers out there; Nappuccino is better than library.',
        'The three main components of a healthy life are sport, diet and sleep.' : 'The three main components of a healthy life are sport, diet and sleep.',
        'While we do a good job about sport and diet' : 'While we do a good job about sport and diet',
        'we are constantly forgetting' : 'we are constantly forgetting',
        'about something such important as' : 'about something such important as',
        'SLEEP' : 'SLEEP',
        'What explains the magic of the coffee nap?' : 'What explains the magic of the coffee nap?',
        'What is a coffee nap?' : 'What is a coffee nap?',
        'Coffee nap is nothing more than drinking a cup of coffee immediately before taking a short nap.' : 'Coffee nap is nothing more than drinking a cup of coffee immediately before taking a short nap.',
        'What is the science behind it?' : 'What is the science behind it?',
        'Although combining the two stimulant components: sleep and caffeine may seem paradoxal, it actually does make sense.﻿' : 'Although combining the two stimulant components: sleep and caffeine may seem paradoxal, it actually does make sense.﻿',
        'Caffeine impacts our brain in a very sophisticated way. It is structurally similar to adenosine, the chemical molecule in our brains that causes drowsiness and makes us feel tired. It is least present when we sleep and we can observe its highest concentration during waking periods. It builds up as the days passes, slowing down the brain activity and makes us feel tired.' : 'Caffeine impacts our brain in a very sophisticated way. It is structurally similar to adenosine, the chemical molecule in our brains that causes drowsiness and makes us feel tired. It is least present when we sleep and we can observe its highest concentration during waking periods. It builds up as the days passes, slowing down the brain activity and makes us feel tired.',
        'As soon as caffeine enters our brain, it is trying to make its way through by competing with adenosine and eventually blocks the access to our brain receptors. The less adenosine, the more awake we are.' : 'As soon as caffeine enters our brain, it is trying to make its way through by competing with adenosine and eventually blocks the access to our brain receptors. The less adenosine, the more awake we are.',
        'The concentration of adenosine decreases when we take a nap and while the coffee has not yet kicked in (it takes around 20-30 minutes for our body to absorb caffeine), the adenosine does not need to compete with caffeine. As a result, when we wake up, our brain says \'goodbye\' to adenosine, blocks the receptors to accummulate more adenosine and facilitates the absorbtion of caffeine.' : 'The concentration of adenosine decreases when we take a nap and while the coffee has not yet kicked in (it takes around 20-30 minutes for our body to absorb caffeine), the adenosine does not need to compete with caffeine. As a result, when we wake up, our brain says \'goodbye\' to adenosine, blocks the receptors to accummulate more adenosine and facilitates the absorbtion of caffeine.',
        'This is the whole chemical magic behind the the coffee nap.' : 'This is the whole chemical magic behind the the coffee nap.',
        'The scientistis advise to keep in mind the circadian rhythms between the wake cycle and sleep cycle, because there’s a time that’s essentially perfect for a nap. For a quick boost of alertness, experts say a 10-to-20-minute power nap in the afternoon is sufficient to get you back on track, fresh and energized. If you are worried to not be able to fall asleep within 20 minutes, the research' : 'The scientistis advise to keep in mind the circadian rhythms between the wake cycle and sleep cycle, because there’s a time that’s essentially perfect for a nap. For a quick boost of alertness, experts say a 10-to-20-minute power nap in the afternoon is sufficient to get you back on track, fresh and energized. If you are worried to not be able to fall asleep within 20 minutes, the research',
        'here' : 'here',
        'and' : 'and',
        'shows that the semi-sleep or light rest works just fine.' : 'shows that the semi-sleep or light rest works just fine.',
        'Siesta scientifically': 'Siesta scientifically',
        'In the Mediterranean, it’s still very common to take a nap in the late afternoon. Especially In Spain the' : 'In the Mediterranean, it’s still very common to take a nap in the afternoon. Especially In Spain the',
        'siesta' : 'siesta',
        'is still a time-honored tradition that happens right after the afternoon meal (Spanish people tend to have a small coffee after lunch) and has been a practice for decades.' : 'is still a time-honored tradition that happens right after the afternoon meal (Spanish people tend to have a small coffee after lunch) and has been a practice for decades.',
        'In Greece there is an expression “Ores kinis isihias” which means "quiet time" taking place in the late afternoon hours. What s interesting is that there is a law that officially forbids any noise and loud music between 3-5 pm. It seems that the Greeks take the napping seriously, and it does make sense if we look at some scientific data.' : 'In Greece there is an expression “Ores kinis isihias” which means "quiet time" taking place in the late afternoon hours. What s interesting is that there is a law that officially forbids any noise and loud music between 3-5 pm. It seems that the Greeks take the napping seriously, and it does make sense if we look at some scientific data.',
        'In a' : 'In a',
        'large study' : 'large study',
        'researchers from the Harvard School of Public Health (HSPH) and the University of Athens Medical School (UAMS) found that the siesta habit reduced coronary mortality by 37% among men and women. The research has been based on 23,681 individuals living in Greece who, at the beginning of the study, had no history of coronary heart disease, stroke or cancer, and were followed for an average of 6.3 years.' : 'researchers from the Harvard School of Public Health (HSPH) and the University of Athens Medical School (UAMS) found that the siesta habit reduced coronary mortality by 37% among men and women. The research has been based on 23,681 individuals living in Greece who, at the beginning of the study, had no history of coronary heart disease, stroke or cancer, and were followed for an average of 6.3 years.',
        'Finally "the findings suggest that the period between lights-out and sleep-onset is associated with the largest acute reduction in blood pressure during an afternoon siesta."' : 'Finally "the findings suggest that the period between lights-out and sleep-onset is associated with the largest acute reduction in blood pressure during an afternoon siesta."',
        'Research' : 'Research',
        'There have been several studies investigating the phenomenon of \'coffee nap\' such as' : 'There have been several studies investigating the phenomenon of \'coffee nap\' such as',
        'the laboratory and field studies of naps and caffeine from 2006' : 'the laboratory and field studies of naps and caffeine from 2006',
        'concluding that "napping plus caffeine helps improve performance and alertness of night-shift workers."' : 'concluding that "napping plus caffeine helps improve performance and alertness of night-shift workers."',
        'Another' : 'Another',
        'study about combination of caffeine with a short nap from 1997' : 'study about combination of caffeine with a short nap from 1997',
        'demonstrates both behavioral and cognitive consequences of the coffee nap. The participants have been given a dose of 200 mg of caffeine following by a short 15-minute long nap. Later, they have been asked to participate in a driving test during a continuous monotonous afternoon drive in a car simulator. The conclusion was that people who took nap combined with caffeine had better driving performance comparing to the group of people who just took a nap or just took a coffee alone.' : 'demonstrates both behavioral and cognitive consequences of the coffee nap. The participants have been given a dose of 200 mg of caffeine following by a short 15-minute long nap. Later, they have been asked to participate in a driving test during a continuous monotonous afternoon drive in a car simulator. The conclusion was that people who took nap combined with caffeine had better driving performance comparing to the group of people who just took a nap or just took a coffee alone.',
        'The researchers at The University of Pennsylvania remind that although consuming an increased doses of caffeine may seem to make us feel more alert and awake, remind that "it is important for caffeine consumers to understand that caffeine at any dose is not a chemical substitute for adequate healthy sleep and when the pressure for sleep is high, caffeine has little effect on preventing performance deficits and sleep attacks". In their' : 'The researchers at The University of Pennsylvania remind that although consuming an increased doses of caffeine may seem to make us feel more alert and awake, remind that "it is important for caffeine consumers to understand that caffeine at any dose is not a chemical substitute for adequate healthy sleep and when the pressure for sleep is high, caffeine has little effect on preventing performance deficits and sleep attacks". In their',
        'study published in October 2014' : 'study published in October 2014',
        'it is revealed that while taking naps alone is an effective way to feel more awake, the inevitable side effect such as grogginness and inertia can be reduced by caffeine. Combining the two components and practicing it in the right proportion of caffeine and time of the nap, coffee naps can help a person wake up more refreshed than a typical nap.' : 'it is revealed that while taking naps alone is an effective way to feel more awake, the inevitable side effect such as grogginness and inertia can be reduced by caffeine. Combining the two components and practicing it in the right proportion of caffeine and time of the nap, coffee naps can help a person wake up more refreshed than a typical nap.',
        'Why Nappuccino?' : 'Why Nappuccino?',
        'Everytime you need a quiet place to study, work, relax or just simply disconnect.' : 'Everytime you need a quiet place to study, work, relax or just simply disconnect.',
        'Study, focus and concentrate' : 'Study, focus and concentrate',
        'Student' : 'Student',
        'Finding a calm, relaxing place to study in Barcelona can be a challenge and staying at home \'to study\' often leads to excuses like cleaning windows. Change your environment, get a fresh perspective and study here.' : 'Finding a calm, relaxing place to study in Barcelona can be a challenge and staying at home \'to study\' often leads to excuses like cleaning windows. Change your environment, get a fresh perspective and study here.',
        'Well-rested employee means a more efficient employee' : 'Well-rested employee means a more efficient employee',
        'Employee' : 'Employee',
        'In Spain it is common to take long lunch breaks and it often happens that we become feeling tired after we eat. Not everyone can come back hom to take a nap. Why not add a short nap in Nappuccino to the schedule? Invite your boss and convince him that the efficiency is the key.' : 'In Spain it is common to take long lunch breaks and it often happens that we become feeling tired after we eat. Not everyone can come back hom to take a nap. Why not add a short nap in Nappuccino to the schedule? Invite your boss and convince him that the efficiency is the key.',
        'Travelling can be exhausting.' : 'Travelling can be exhausting.',
        'Traveler' : 'Traveler',
        'We often see our guests tired after visiting Barcelona for long hours. As soon as we explain the concept of Nappuccino, they choose their chill zone where they quickly change their position from sittng to laying down for some time and after wake up ready for the next destination.' : 'We often see our guests tired after visiting Barcelona for long hours. As soon as we explain the concept of Nappuccino, they choose their chill zone where they quickly change their position from sittng to laying down for some time and after wake up ready for the next destination.',
        'PRICING' : 'PRICING',
        'First hour costs 4,50 euro and includes a drink. After that every hour would cost you 4 eur/h ' : 'First hour costs 4,50 euro and includes a drink. After that every hour would cost you 4 eur/h ',
        'To enjoy Nappuccino to the fullest, all you need to do is...' : 'To enjoy Nappuccino to the fullest, all you need to do is...',
        'Find us at Muntaner 22, Barcelona' : 'Find us at Muntaner 22, Barcelona',
        'You will receive our special koala coin with a number' : 'You will receive our special koala coin with a number',
        'Ask your favorite coffee/tea and enjoy unlimited snacks' : 'Ask your favorite coffee/tea and enjoy unlimited snacks',
        'Study, work, take a nap, read, relax' : 'Study, work, take a nap, read, relax',
        'ENJOY' : 'ENJOY',
        'When leaving, simply hand the koala coin with your number, pay for the time you spent and spread the word about Nappuccino' : 'When leaving, simply hand the koala coin with your number, pay for the time and spread the word about Nappuccino',
        'If you want to know more, we are here to answer all your questions' : 'If you want to know more, we are here to answer all your questions',
        '4 h and more = 20 €' : '4 h and more = 20 €',
        'Contact Us' : 'Contact Us',
        'Send us email or fill out the form.' : 'Send us email: contact@nappuccino.es or fill out the form.',
        'Your Name *' : 'Your Name *',
        'Send Message' : 'Send Message',
        'Please enter your name.' : 'Please enter your name.',
        'Please enter your email address.' : 'Please enter your email address.',
        'Please enter your phone number.' : 'Please enter your phone number.',
        'Please enter a message.' : 'Please enter a message.'




    });

 $translateProvider.translations('es', {
        'Hello': 'Hola',
        'The first siesta cafe in the world.': 'El primer siesta café del mundo.',
        'Find us at Muntaner 22 in Barcelona' : 'Estamos en Muntaner 22 en Barcelona',
        'tell me more' : 'Cuéntame más',


        //navbar
        'Nappuccino': 'Nappuccino',
        'Concept': 'Concepto',
        'Food&Drinks': 'Oferta',
        'Media':'Media',
        'Business Partners': 'Socios comerciales',
        'Contact' : 'Contacto',

        //concept  //
        'The first siesta café in the world' : 'El primer café del mundo con espacios para echarte la siesta. ',
        'Eat. Drink. Sleep. Repeat.' : 'Eat. Drink. Sleep. Repeat.',
        'Have you heard of napping pods? Nappuccino is the first and unique café in the world that implements napping pods inside a café.' : '¿Has oído algo sobre las cápsulas o cubículos de siesta? Nappuccino es el primer y único café del mundo que implementa cubículos para echar una siesta dentro de un café.',
        'Located in the very center of Barcelona, it is a café where you can actually take a nap and it is neither hotel nor spa. It is genuine and cozy café where you can take a deep breath from a busy center of the city. Take your time to study, work on your computer, read a book, take a coffee or take a nap (or both).' : 'Ubicado en el centro de Barcelona, es una cafetería donde te puedes echar una siesta y no es un hotel ni un spa. Es una cafetería genuina y acogedora donde se puede respirar profundamente. Tómate tu tiempo para estudiar, trabajar con el ordenador, leer un libro, tomar un café o echar una siesta (o ambos).',
        'This is what makes Nappuccino the first siesta café in the world.' : 'Esto es lo que hace que Nappuccino sea el primer café de siesta del mundo.',
        'Pop in for a breakfast or quick lunch, enjoy delicious bagels, focaccias, authentic french pastry, local craft beer and for coffee lovers, an artesanal italian coffee.' : 'Desayuna o almuerza rápido, disfruta de deliciosos bagels, focaccias, auténtica pastelería francesa, cerveza artesanal local y, para los amantes del café, un café italiano artesanal.',
        'Nap or not, Nappuccino should be on your must-do list when visiting Barcelona.' : 'Siesta o no, Nappuccino debería estar en tu lista de cosas que debes hacer cuando visites Barcelona.',
        'More about the concept of \'coffee nap\'?' : '¿Quieres saber más sobre el concepto del "siesta café"?',
        '' : '',
        
        
        //call to action 
        '\'The most accurate way to describe this place would be comparing it to an Oasis after a long walk in the desert.' : '\'La forma más precisa de describir este lugar sería compararlo con un Oasis después de una larga caminata en el desierto.',
        'In my case, that nap was life saving\'...' : 'En mi caso, esa siesta me salvó la vida ...\'',
        'See more' : 'Más',

        //food and drinks
        'Breakfast quick lunch dessert' : 'Desayuno almuerzo postre',
        'Homemade food, local craft beer and artisanal italian coffee' : 'Comida casera, cerveza artesanal local y café italiano artesanal.',
        'Bagels' : 'Bagels',
        'Granola' : 'Granola',
        'Quiches' : 'Quiches',
        'Bikini' : 'Bikini',
        'Artisanal italian coffee' : 'Café italiano artesanal',
        'Drinks' : 'Zumos',
        'Craft beer without gluten' : 'Cerveza artesanal sin gluten',


         //media
         'About us' : 'Media',
         'Articles' : 'Articulos, radio, TV',
        

         //business

         'Nappuccino - Business Opportunities' : 'Nappuccino - Oportunidades de Negocios',
         'If you think you share our vision of Nappuccino in every city of the world or want to be part of Nappuccino revolution, get in touch with us.' : 'Si crees que compartes nuestra visión de Nappuccino en todas las ciudades del mundo o quieres ser parte de la revolución de Nappuccino, ponte en contacto con nosotros.',
         

         //contact
         'Contact' : 'Contacto y ubicación',
         'Get In Touch' : 'Contacto',


        //nappuccino
        'take a nap' : 'échate la siesta',
        'Sleep is nowadays perceived as a luxury while it is a necessity' : 'El descanso se percibe hoy como un lujo, cuando es una necesidad',
        'We offer you an escape from a city center of Barcelona. Take a nap, relax and enjoy. We provide you with a feeling of privacy here, just take a look at our chill zones.' : 'Te ofrecemos un escape del centro de Barcelona. Echa una siesta, relájate y disfruta.',
        'From our own experience, at some point drinking the eighth coffee a day is just simply not sufficient. Here, everytime you need a break from work or studying, you can lay down for a little bit or energize yourself with a coffee nap.' : 'Hablando desde nuestra propia experiencia, cuando llega el momento de tomar el octavo café del día, el café ya no es suficiente. Aquí, cada vez que necesitas un descanso del trabajo o estudios, puedes coger fuerzas con una siesta.',
        'work' : 'trabaja',
        'Against famous "No wifi, talk to each other" we come across with a fast wifi and unlimited snacks and coffee.': 'Contra el famoso  \'No hay wifi, hablen entre sí\' nos topamos con un wifi gratuito.',
        'Nowadays it is common to work on our computers from home, from coffee places, libraries or some rent co-working offices. Change your environment and enjoy calm, relaxing ambience in Nappuccino. We have plenty of electrical outlets (including the ones inside of the nap booths) and we can charge your phone as well.' : 'Ahora es común trabajar con nuestros ordenadores desde casa, desde cafeterias, bibliotecas u oficinas de co-working. Cambia tu entorno y disfruta el ambiente tranquilo en Nappuccino. Hay muchos enchufes eléctricos (incluídos los que están dentro de las zonas de descanso) y también podemos cargar tu teléfono.',
        'study' : 'estudia',
        'We are student-friendly. Bring your group mates to Nappuccino and study together. Expect wifi, electrical outlets, cool ambience and opportunity to take a nap as soon as you get tired with math formulas. You can try out coffee nap and with a bit of caffeine right before your nap, you become double productive when you wake up. Check out Nappuccino page to know more.' : 'Los estudiantes son bienvenidos. Trae a tus compañeros de grupo y estudiad juntos. Hay wifi, enchufes, ambiente acojedor y la oportunidad de tomar una siesta tan pronto como estés cansado de estudiar tantas fórmulas matemáticas. Puedes probar la \'siesta café\': con un poco de cafeína justo antes de tu siesta, te levantas el doble de productivo.',
        'The three main components of a healthy life are sport, diet and sleep.' : 'Los tres componentes principales de una vida saludable son el deporte, la alimentación y el sueño.',
        'While we do a good job about sport and diet' : 'Mientras lo hacemos bastante bien con el deporte y la alimentación',
        'we are constantly forgetting' : 'estamos constantemente olvidando',
        'about something such important as' : 'algo tan importante como',
        'SLEEP' : 'DESCANSO',
        'What explains the magic of the coffee nap?' : 'Que explica la magia del siesta café ?',
        'What is a coffee nap?' : '¿Qué es una \'siesta café\'?',
        'Coffee nap is nothing more than drinking a cup of coffee immediately before taking a short nap.' : 'Siesta café es nada más que tomar un café justo antes de tomar una corta siesta.',
        'What is the science behind it?' : '¿Qué dice la ciencia de esto?',
        'Although combining the two stimulant components: sleep and caffeine may seem paradoxal, it actually does make sense.' : 'Aunque la combinación de los dos componentes estimulantes, el sueño y la cafeína, pueden parecer paradójicos, en realidad tiene sentido.',
        'Caffeine impacts our brain in a very sophisticated way. It is structurally similar to adenosine, the chemical molecule in our brains that causes drowsiness and makes us feel tired. It is least present when we sleep and we can observe its highest concentration during waking periods. It builds up as the days passes, slowing down the brain activity and makes us feel tired.' : 'La cafeína impacta en nuestro cerebro de una manera muy sofisticada. Es estructuralmente similar a la adenosina, la molécula química en nuestro cerebro que causa somnolencia y nos hace sentir cansados. Está menos presente cuando dormimos y podemos observar su mayor concentración durante los períodos de vigilia. Se acumula a medida que transcurren los días, ralentizando la actividad cerebral y nos hace sentir cansados.',
        'As soon as caffeine enters our brain, it is trying to make its way through by competing with adenosine and eventually blocks the access to our brain receptors. The less adenosine, the more awake we are.' : 'Tan pronto como la cafeína ingresa en nuestro cerebro, intenta abrirse camino compitiendo con la adenosina y finalmente bloquea el acceso a nuestros receptores cerebrales. Cuanto menos adenosina, más despiertos estamos.',
        'The concentration of adenosine decreases when we take a nap and while the coffee has not yet kicked in (it takes around 20-30 minutes for our body to absorb caffeine), the adenosine does not need to compete with caffeine. As a result, when we wake up, our brain says \'goodbye\' to adenosine, blocks the receptors to accummulate more adenosine and facilitates the absorbtion of caffeine.' : 'La concentración de adenosina disminuye cuando tomamos una siesta y mientras el café aún no ha comenzado (el cuerpo tarda entre 20 y 30 minutos en absorber la cafeína), la adenosina no necesita competir con la cafeína. Como resultado, cuando nos despertamos, nuestro cerebro dice \'adiós\' a la adenosina, bloquea los receptores para acumular más adenosina y facilita la absorción de la cafeína.',
        'This is the whole chemical magic behind the the coffee nap.' : 'Esta es toda la magia química detrás de la siesta café.',
        'The scientistis advise to keep in mind the circadian rhythms between the wake cycle and sleep cycle, because there’s a time that’s essentially perfect for a nap. For a quick boost of alertness, experts say a 10-to-20-minute power nap in the afternoon is sufficient to get you back on track, fresh and energized. If you are worried to not be able to fall asleep within 20 minutes, the research' : 'Los científicos recomiendan tener en cuenta los ritmos circadianos entre el ciclo de vigilia y el ciclo de sueño, porque hay un momento que es esencialmente perfecto para una siesta. Para un impulso rápido de alerta, los expertos dicen que una siesta de 10 a 20 minutos por la tarde es suficiente para volver a la vida cotidiana, fresco y lleno de energía. Si te preocupa no poder dormirte en 20 minutos, la investigación',
        'here' : 'aquí',
        'and' : 'y',
        'shows that the semi-sleep or light rest works just fine.' : 'muestra que el semi-sueño o el descanso ligero funciona bien.',
        'Siesta scientifically': 'Siesta científicamente',
        'In the Mediterranean, it’s still very common to take a nap in the late afternoon. Especially In Spain the' : 'En el Mediterráneo, todavía es muy común echar una siesta al final de la tarde. Especialmente en España la',
        'siesta' : 'siesta',
        'is still a time-honored tradition that happens right after the afternoon meal (Spanish people tend to have a small coffee after lunch) and has been a practice for decades.' : 'sigue siendo una tradición consagrada que ocurre justo después de la comida de la tarde (los españoles suelen tomar un café después de la comida) y ha sido una práctica durante décadas.',
        'In Greece there is an expression “Ores kinis isihias” which means "quiet time" taking place in the late afternoon hours. What s interesting is that there is a law that officially forbids any noise and loud music between 3-5 pm. It seems that the Greeks take the napping seriously, and it does make sense if we look at some scientific data.' : 'En Grecia hay una expresión "Ores kinis isihias" que significa "tiempo de silencio" que tiene lugar en las últimas horas de la tarde. Lo que es interesante es que hay una ley que prohíbe oficialmente el ruido y la música entre las 3 y las 5 p.m. Parece que los griegos toman la siesta en serio, y tiene sentido si miramos algunos datos científicos.',
        'In a' : 'En unos',
        'large study' : 'grandes estudios',
        'researchers from the Harvard School of Public Health (HSPH) and the University of Athens Medical School (UAMS) found that the siesta habit reduced coronary mortality by 37% among men and women. The research has been based on 23,681 individuals living in Greece who, at the beginning of the study, had no history of coronary heart disease, stroke or cancer, and were followed for an average of 6.3 years.' : 'Investigadores de la Escuela de Salud Pública de Harvard (HSPH) y de la Facultad de Medicina de la Universidad de Atenas (UAMS) descubrieron que el hábito de la siesta reducía la mortalidad coronaria en un 37% entre hombres y mujeres. La investigación se basó en 23,681 personas que vivían en Grecia y que, al comienzo del estudio, no tenían antecedentes de enfermedad coronaria, accidente cerebrovascular o cáncer, y fueron seguidas durante un promedio de 6,3 años.',
        'Finally "the findings suggest that the period between lights-out and sleep-onset is associated with the largest acute reduction in blood pressure during an afternoon siesta."' : 'Finalmente "los resultados sugieren que el período entre las luces de salida y el inicio del sueño se asocia con la mayor reducción aguda de la presión arterial durante una siesta por la tarde."',
        'Research' : 'Investigación',
        'There have been several studies investigating the phenomenon of \'coffee nap\' such as' : 'Ha habido varios estudios que investigan el fenómeno de \'siesta café \' como ',
        'the laboratory and field studies of naps and caffeine from 2006' : 'los estudios de laboratorio y de campo de las siestas y la cafeína desde 2006',
        'concluding that "napping plus caffeine helps improve performance and alertness of night-shift workers."' : 'concluyendo que "la siesta más cafeína ayuda a mejorar el rendimiento y el estado de alerta de los trabajadores del turno de noche"',
        'Another' : 'Otro',
        'study about combination of caffeine with a short nap from 1997' : 'estudio sobre la combinación de cafeína con una breve siesta de 1997',
        'demonstrates both behavioral and cognitive consequences of the coffee nap. The participants have been given a dose of 200 mg of caffeine following by a short 15-minute long nap. Later, they have been asked to participate in a driving test during a continuous monotonous afternoon drive in a car simulator. The conclusion was that people who took nap combined with caffeine had better driving performance comparing to the group of people who just took a nap or just took a coffee alone.' : 'demuestra las consecuencias conductuales y cognitivas de siesta café. A los participantes se les ha dado una dosis de 200 mg de cafeína seguido de una breve siesta de 15 minutos. Más tarde, se les ha pedido que participen en una prueba de una monótona conducción en un simulador de coches. La conclusión fue que las personas que tomaron la siesta combinada con cafeína tuvieron un mejor desempeño de conducción en comparación con el grupo de personas que simplemente tomaron una siesta o simplemente tomaron un café.',
        'The researchers at The University of Pennsylvania remind that although consuming an increased doses of caffeine may seem to make us feel more alert and awake, remind that "it is important for caffeine consumers to understand that caffeine at any dose is not a chemical substitute for adequate healthy sleep and when the pressure for sleep is high, caffeine has little effect on preventing performance deficits and sleep attacks". In their' : 'Los investigadores de la Universidad de Pensilvania recuerdan que aunque consumir una mayor cantidad de cafeína puede hacernos sentir más alerta y despierto, "es importante que los consumidores de cafeína entiendan que la cafeína en cualquier dosis no es un sustituto químico para un sueño saludable adecuado". y cuando la presión para dormir es alta, la cafeína tiene poco efecto sobre la prevención de déficits de rendimiento y ataques de sueño ". En su',
        'study published in October 2014' : 'estudio publicado en octubre de 2014',
        'it is revealed that while taking naps alone is an effective way to feel more awake, the inevitable side effect such as grogginness and inertia can be reduced by caffeine. Combining the two components and practicing it in the right proportion of caffeine and time of the nap, coffee naps can help a person wake up more refreshed than a typical nap.' : 'se revela que aunque tomar siestas solas es una forma efectiva de sentirse más despierto, el efecto secundario inevitable, como la inercia, puede reducirse con la cafeína. Combinando los dos componentes y practicándolo en la proporción correcta de cafeína y el tiempo de la siesta, las siestas de café pueden ayudar a una persona a despertarse más fresca que una siesta típica.',
        'Why Nappuccino?' : 'Por qué Nappuccino?',
        'Everytime you need a quiet place to study, work, relax or just simply disconnect.' : 'Cada vez que necesites un lugar tranquilo para estudiar, trabajar, relajarte o simplemente desconectar',
        'Study, focus and concentrate' : 'Estudia y concentra',
        'Student' : 'Estudiante',
        'Finding a calm, relaxing place to study in Barcelona can be a challenge and staying at home \'to study\' often leads to excuses like cleaning windows. Change your environment, get a fresh perspective and study here.' : 'Encontrar un lugar tranquilo y relajante para estudiar en Barcelona puede ser un desafío, y quedarse en casa \'para estudiar\' a menudo termina con excusas como limpiar ventanas. Cambia tu ambiente, ten una nueva perspectiva y estudia aquí.',
        'Well-rested employee means a more efficient employee' : 'Un empleado bien descansado significa un empleado más eficiente',
        'Employee' : 'Trabajador',
        'In Spain it is common to take long lunch breaks and it often happens that we become feeling tired after we eat. Not everyone can come back hom to take a nap. Why not add a short nap in Nappuccino to the schedule? Invite your boss and convince him that the efficiency is the key.' : 'En España es común tomar pausas de 1-2 horas para comer durante el dia y a veces nos sentimos cansados después de comer. No todos pueden volver a casa para tomar una siesta. ¿Por qué no introducir una breve siesta en Nappuccino? Invita a tu jefe y convéncelo de que la eficiencia es la clave.',
        'Travelling can be exhausting.' : 'Viajar puede ser agotador.',
        'Traveler' : 'Viajero',
        'We often see our guests tired after visiting Barcelona for long hours. As soon as we explain the concept of Nappuccino, they choose their chill zone where they quickly change their position from sittng to laying down for some time and after wake up ready for the next destination.' : 'A menudo vemos a nuestros visitantes cansados después de visitar Barcelona durante largas horas. Tan pronto como explicamos el concepto de Nappuccino, eligen su zona de descanso donde cambian rápidamente su posición desde sentarse a acostarse durante un tiempo y después de despertarse están listos para el próximo destino.',
        'PRICING' : 'PRECIO',
        'First hour costs 4,50 euro and includes a drink. After that every hour would cost you 4 eur/h ' : 'Disfruta café, té o refrescos  durante una hora por 4,50 €',
        'To enjoy Nappuccino to the fullest, all you need to do is...' : '',
        'Find us at Muntaner 22, Barcelona' : 'Encuéntranos en Muntaner 22, Barcelona',
        'You will receive our special koala coin with a number' : 'Recibirás nuestra moneda especial de koala con un número',
        'Ask your favorite coffee/tea and enjoy unlimited snacks' : 'Pregúntanos por tu café / té favorito y disfruta de los snacks, croissants etc ilimitados',
        'Study, work, take a nap, read, relax' : 'Estudia, trabaja, toma una siesta, lee, relájate',
        'ENJOY' : 'DISFRUTA',
        'When leaving, simply hand the koala coin with your number, pay for the time and spread the word about Nappuccino' : 'Al final, simplemente entregue la moneda de koala con tu número, pague por el tiempo y corre la voz sobre Nappuccino',
        'If you want to know more, we are here to answer all your questions' : 'Si quieres saber más, estamos aquí para responder a todas tus preguntas',
        '4 h and more = 20 €' : '4 horas y más = 20 €',
        'Contact Us' : 'Contáctanos',
        'Send us email or fill out the form.' : 'Envíanos un correo electrónico: : contact@nappuccino.es o completa el formulario.',
        'Your Name *' : 'Tu nombre',
        'Your Email *' : 'Tu correo',
        'Your Phone *' : 'Tu número de teléfono',
        'Your Message *' : 'Tu mensaje',
        'Send Message' : 'Envía un mensaje',
        'Please enter your name.' : 'Por favor, introduzca tu nombre.',
        'Please enter your email address.' : 'Por favor, introduzca tu correo electrónico.',
        'Please enter your phone number.' : 'Por favor, introduzca tu número de teléfono.',
        'Please enter a message.' : 'Por favor, introduzca un mensaje.'

    });

$translateProvider.translations('cat', {
       ///////////////////////


      'Hello': 'Hola',
       'The first siesta cafe in the world.': 'La primera cafeteria del món on pots fer una migdiada.',
       'Find us at Muntaner 22 in Barcelona' : 'Troba\'ns al carrer Muntaner 22 a Barcelona', 
       'tell me more' : 'Explica\'m més',

       //navbar

       'Nappuccino': 'Nappuccino',
       'Concept': 'Concepte',
       'Food&Drinks': 'Menjar i Begudes',
       'Media':'Mitjans',
       'Business Partners': 'Socis de negocis',
       'Contact' : 'Contacte',
       'tell me more' : 'Explica\'m més',

       //concept  
       'The first siesta café in the world' : 'La primera cafeteria del món on pots fer una migdiada.',
       'Eat. Drink. Sleep. Repeat.' : 'Menja. Beu. Dorm. Torna a començar.',
       'Have you heard of napping pods? Nappuccino is the first and unique café in the world that implements napping pods inside a café.' : 'Has sentit a parlar de les càpsules on pots fer la migdiada? Nappuccino és la primera i única cafeteria del món que ofereix aquestes càpsules',
       'Located in the very center of Barcelona, it is a café where you can actually take a nap and it is neither hotel nor spa. It is genuine and cozy café where you can take a deep breath from a busy center of the city. Take your time to study, work on your computer, read a book, take a coffee or take a nap (or both).' : 'Es troba al centre de Barcelona i és una cafeteria on podràs fer una migdiada. No és cap hotel ni cap spa. És una cafeteria autèntica i acollidora on podràs descansar del concorregut centre de Barcelona. Pren-te el teu temps per estudiar, treballar a l\'ordinador, llegir un llibre, prendre un cafè o fer una migdiada (o ambdues)',
       'This is what makes Nappuccino the first siesta café in the world.' : 'Això és el que fa a Nappuccino, la primera cafeteria del món on pots fer una migdiada.', 
       'Pop in for a breakfast or quick lunch, enjoy delicious bagels, focaccias, authentic french pastry, local craft beer and for coffee lovers, an artesanal italian coffee.' : 'Veniu a esmorzar o a fer un dinar ràpid. Gaudiu dels deliciosos bagels, de les focaccias, d\'unes pastes autèntiques i artesanes franceses, de cerveses artesanes locals i pels amants del cafè tenim un cafè artesanal italià',
       'Nap or not, Nappuccino should be on your must-do list when visiting Barcelona.' : 'Sieste ou pas, Nappuccino doit être sur votre liste à faire lors de votre visite à Barcelone.', 
       'More about the concept of \'coffee nap\'' : 'Vols saber més sobre el concepte de \'migdiada cafè\'?',
       '' : '',
       
       
       //call to action 
       '\'The most accurate way to describe this place would be comparing it to an Oasis after a long walk in the desert.' : '\'La manera més precisa de descriure aquest lloc seria comparar-lo amb un oasi després d’una llarga caminada al desert.\'', 
       'In my case, that nap was life saving...\'' : 'En el meu cas, aquella migdiada em va salvar la vida ...\'',

       //food and drinks
       'Breakfast quick lunch dessert' : 'Esmorzar, dinar ràpid i postres', 
       'Homemade food, local craft beer and artisanal italian coffee' : 'Menjar casolà, cervesa artesanal i local i cafè italià artesanal',
       'Bagels' : 'Bagels',
       'Granola' : 'Granola',
       'Quiches' : 'Quiche',
       'Bikini' : 'Biquini',
       'Artisanal italian coffee' : 'Cafè artesanal italià',
       'Drinks' : 'Sucs naturals',
       'Craft beer without gluten' : 'Cervesa artesanal sense gluten',


        //media
        'About us' : 'Sobre nosaltres', 
        'Articles' : 'Articles',
       

        //business

        'Nappuccino - Business Opportunities' : 'Oportunitats de negoci',
        'If you think you share our vision of Nappuccino in every city of the world or want to be part of Nappuccino revolution, get in touch with us.' : 'Si creus que comparteixes la nostra visió de Nappuccino a qualsevol ciutat del món o vols formar part de la revolució de Nappuccino, contacta amb nosaltres.',
        

        //contact
        'Contact' : 'Contacte',
        'Get in touch' : 'Contacta\'ns',

       
       //nappuccino 
       'take a nap' : 'fes una migdiada: descansa',
       'Sleep is nowadays perceived as a luxury while it is a necessity' : 'El descans és percebut avui en dia com un luxe, mentre que realment és una necessitat',
       'We offer you an escape from a city center of Barcelona. Take a nap, relax and enjoy. We provide you with a feeling of privacy here, just take a look at our chill zones.' : 'T\'oferim una via d\'escapament del centre de Barcelona. Fes una migdiada, relaxa\'t i gaudeix.  Aquí t\'oferim un sentiment de privacitat, només cal que miris les nostres zones de descans.',
       'From our own experience, at some point drinking the eighth coffee a day is just simply not sufficient. Here, everytime you need a break from work or studying, you can lay down for a little bit or energize yourself with a coffee nap.' : 'Parlant des de la nostra pròpia experiència, quan arriba el moment de prendre el vuitè cafè al dia, el cafè ja no és suficient. Aquí, cada vegada que necessitis un descans de la feina o de l\'estudi, podràs fer una migdiada per agafar energia',
       'work' : 'treballa',
       'Against famous "No wifi, talk to each other" we come across with a fast wifi and unlimited snacks and coffee.': 'Estem en contra del famós \'No hi ha wifi, parleu entre vosaltres\', per això trobaràs un wifi gratuït i també oferim cafè i snacks il·limitats.',
       'We are student-friendly. Bring your group mates to Nappuccino and study together. Expect wifi, electrical outlets, cool ambience and opportunity to take a nap as soon as you get tired with math formulas. You can try out coffee nap and with a bit of caffeine right before your nap, you become double productive when you wake up. Check out Nappuccino page to know more.' : 'Ens agraden els estudiants a Nappuccino. Porta els teus companys de grup i estudieu junts. Hi trobaràs wifi, endolls, un ambient acollidor i l\'oportunitat de fer una migdiada quan estiguis cansat de les fórmules matemàtiques. Pots provar la \'migdiada cafè \' i prenent-te una mica de cafeïna just abans de la teva migdiada, t\'aixecaràs el doble de productiu.',
       'The three main components of a healthy life are sport, diet and sleep.' : 'Els tres components principals d\'una vida saludable són l\'esport, la dieta i el dormir',
       'While we do a good job about sport and diet' : 'Mentre fem  una bona feina amb l\'esport i la dieta',
       'we are constantly forgetting' : 'estem constantment oblidant-nos',
       'about something such important as' : 'sobre alguna cosa tan important com el',
       'SLEEP' : 'DESCANS',
       'What explains the magic of the coffee nap?' : 'Què explica la màgia de la \'migdiada cafè\'?',
       'What is a coffee nap?' : 'Què és una \'migdiada cafè\'?',
       'Coffee nap is nothing more than drinking a cup of coffee immediately before taking a short nap.' : 'La \'migdiada cafè\' no és res més que prendre un cafè just abans de fer una curta migdiada.',
       'What is the science behind it?' : '¿Quina és la ciència darrere d\'això?',
       'Although combining the two stimulant components: sleep and caffeine may seem paradoxal, it actually does make sense.' : 'Tot i que pot semblar que la combinació dels dos components estimulants com són el somni i la cafeïna sigui una mica paradoxal, en realitat la combinació té sentit.',
       'Caffeine impacts our brain in a very sophisticated way. It is structurally similar to adenosine, the chemical molecule in our brains that causes drowsiness and makes us feel tired. It is least present when we sleep and we can observe its highest concentration during waking periods. It builds up as the days passes, slowing down the brain activity and makes us feel tired.' : 'La cafeïna impacta al nostre cervell d\'una manera molt sofisticada. És estructuralment similar a l\'adenosina, la molècula química del nostre cervell que causa somnolència i ens fa estar cansats. Està menys present quan dormim i podem observar la seva major concentració durant els períodes de vigília. S\'acumula a mesura que transcorren els dies i això alenteix l\'activitat cerebral i ens fa sentir cansats.',
       'As soon as caffeine enters our brain, it is trying to make its way through by competing with adenosine and eventually blocks the access to our brain receptors. The less adenosine, the more awake we are.' : 'Tan aviat com la cafeïna entra al nostre cervell, intenta obrir-se pas competint amb l\'adenosina i finalment bloqueja l’accés als nostres receptors cerebrals. Com menys adenosina, més desperts estem',
       'The concentration of adenosine decreases when we take a nap and while the coffee has not yet kicked in (it takes around 20-30 minutes for our body to absorb caffeine), the adenosine does not need to compete with caffeine. As a result, when we wake up, our brain says \'goodbye\' to adenosine, blocks the receptors to accummulate more adenosine and facilitates the absorbtion of caffeine.' : 'La concentració d\'adenosina disminueix quan fem una migdiada mentre el cafè encara no ha començat (el cos triga entre 20 i 30 minuts a absorbir la cafeïna). L\'adenosina no necessita competir amb la cafeïna. Com a resultat, quan ens despertem, el nostre cervell diu adéu a l\'adenosina, bloqueja els receptors per acumular més adenosina i facilita l\'absorció de la cafeïna.',
       'This is the whole chemical magic behind the the coffee nap.' : 'Aquesta és tota la màgia química darrere de la \'migdiada cafè\'',
       'The scientistis advise to keep in mind the circadian rhythms between the wake cycle and sleep cycle, because there’s a time that’s essentially perfect for a nap. For a quick boost of alertness, experts say a 10-to-20-minute power nap in the afternoon is sufficient to get you back on track, fresh and energized. If you are worried to not be able to fall asleep within 20 minutes, the research' : 'Los científics recomanen tenir en compte els ritmes circadiaris entre el cicle de vigília i el cicle de son, perquè hi ha un moment que és essencialment perfecte per una migdiada. Per un impuls ràpid d\'alerta, els experts diuen que una migdiada de 10 a 20 minuts a la tarda és suficient per tornar a la vida quotidiana, fresc i ple d’energia. Si et preocupa no poder adormir-te en 20 minuts, la investigació:',
       'here' : 'Aquí',
       'and' : 'i',
       'shows that the semi-sleep or light rest works just fine.' : 'mostra que la semi-son o el descans lleuger funcionen bé.',
       'Siesta scientifically': 'Migdiada científicament',
       'In the Mediterranean, it’s still very common to take a nap in the late afternoon. Especially In Spain the' : 'Al Mediterrani encara és molt comú fer una migdiada al final de la tarda, especialment a Espanya la',
       'siesta' : 'siesta',
       'is still a time-honored tradition that happens right after the afternoon meal (Spanish people tend to have a small coffee after lunch) and has been a practice for decades.' : 'segueix sent una tradició consagrada que pren lloc just després de l\'àpat de la tarda (els espanyols solen prendre un cafè després del dinar) i ha estat una pràctica durant dècades.',
       'In Greece there is an expression “Ores kinis isihias” which means "quiet time" taking place in the late afternoon hours. What s interesting is that there is a law that officially forbids any noise and loud music between 3-5 pm. It seems that the Greeks take the napping seriously, and it does make sense if we look at some scientific data.' : 'A Grècia hi ha una expressió \'Ores kinis isihias\' que vol dir \'temps de silenci\' que té lloc a les últimes hores de la tarda. El que és interessant és que hi ha una llei que prohibeix oficialment el soroll i la música entre les 3 i les 5 de la tarda. Sembla que els grecs es prenen la migdiada seriosament, i té sentit si mirem algunes dades científiques.',
       'In a' : 'En un', 
       'large study' : 'gran estudi',
       'researchers from the Harvard School of Public Health (HSPH) and the University of Athens Medical School (UAMS) found that the siesta habit reduced coronary mortality by 37% among men and women. The research has been based on 23,681 individuals living in Greece who, at the beginning of the study, had no history of coronary heart disease, stroke or cancer, and were followed for an average of 6.3 years.' : 'Investigadors de l\'Escola de Salut Pública de Harvard (HSPH) i de la Facultat de Medicina de la Universitat d\'Atenes (UAMS) van descobrir que l\'hàbit de la migdiada reduïa la mortalitat coronaria en un 37% entre homes i dones. La investigació es va basar en 23.681 persones que vivien a Grècia i que, al començament de l\'estudi, no tenien antecedents de malaltia coronaria, accident cerebrovascular ni càncer, i van ser seguits durant una mitjana de 6,3 anys.',
       'Finally "the findings suggest that the period between lights-out and sleep-onset is associated with the largest acute reduction in blood pressure during an afternoon siesta."' : 'Finalment, els resultats suggereixen que el període entre les llums de sortida i d\'inici de la son s\'associa amb la reducció més gran aguda de la pressió arterial durant una migdiada a la tarda.',
       'Research' : 'investigació',
       'There have been several studies investigating the phenomenon of \'coffee nap\' such as' : 'hi ha hagut diferents estudis que han investigat el fenomen de la \'migdiada cafè\' com',
       'the laboratory and field studies of naps and caffeine from 2006' : 'els estudis de laboratori i camp de les migdiades i la cafeïna des de 2006',
       'concluding that "napping plus caffeine helps improve performance and alertness of night-shift workers."' : 'Concloent, la migdiada més la cafeïna ajuden a millorar el rendiment i l\'estat d’alerta dels treballadors durant el torn de nit.',
       'Another' : 'Un altre',
       'study about combination of caffeine with a short nap from 1997' : 'estudi sobre la combinació de la cafeïna amb una migdiada curta del 1997: estudi sobre la combinació de la cafeïna amb una breu migdiada de 1997',
       'demonstrates both behavioral and cognitive consequences of the coffee nap. The participants have been given a dose of 200 mg of caffeine following by a short 15-minute long nap. Later, they have been asked to participate in a driving test during a continuous monotonous afternoon drive in a car simulator. The conclusion was that people who took nap combined with caffeine had better driving performance comparing to the group of people who just took a nap or just took a coffee alone.' : 'va demostrar les conseqüències conductuals i cognitives de la \'migdiada cafè\'. Als participants se\'ls va donar una dosi de 200 mg de cafeïna seguida d’una migdiada de 15 minuts. Més tard, se\'ls va demanar que participessin en una prova d\'una monòtona conducció en un simulador de cotxes. La conclusió va ser que les persones que feien migdiada combinada amb cafeïna van tenir un millor acompliment de la conducció en comparació amb el grup de persones que únicament feien una migdiada o es prenien un cafè.', 
       'The researchers at The University of Pennsylvania remind that although consuming an increased doses of caffeine may seem to make us feel more alert and awake, remind that "it is important for caffeine consumers to understand that caffeine at any dose is not a chemical substitute for adequate healthy sleep and when the pressure for sleep is high, caffeine has little effect on preventing performance deficits and sleep attacks". In their' : 'Els investigadors de la Universitat de Pensilvania recorden que tot i consumir una major quantitat de cafeïna pot fer-nos sentir més alerta i desperts, és important que els consumidors de cafeïna entenguin que la cafeïna en qualsevol dosi no és un substitut químic per la son saludable adequada. A més diuen que quan la pressió per dormir és alta, la cafeïna té poc efecte sobre la prevenció de dèficits de rendiment i atacs de son. En el seu' ,
       'study published in October 2014' : 'estudi publicat a l\'octubre de 2014',
       'it is revealed that while taking naps alone is an effective way to feel more awake, the inevitable side effect such as grogginness and inertia can be reduced by caffeine. Combining the two components and practicing it in the right proportion of caffeine and time of the nap, coffee naps can help a person wake up more refreshed than a typical nap.' : 'Cada vegada que necessitis un lloc tranquil per estudiar, treballar, relaxar-te o simplement desconnectar',
       'Study, focus and concentrate' : 'Estudia i concentra\'t',
       'Student' : 'Estudiant',
       'Well-rested employee means a more efficient employee' : 'Un treballador ben descansat significa un treballador més eficient.',
       'Employee' : 'Treballador',
       'In Spain it is common to take long lunch breaks and it often happens that we become feeling tired after we eat. Not everyone can come back hom to take a nap. Why not add a short nap in Nappuccino to the schedule? Invite your boss and convince him that the efficiency is the key.' : 'A Espanya és comú tenir pauses llargues a l \'hora de dinar i sovint ens sentim cansats després d \'aquest àpat. No tots podem tornar a casa per fer una migdiada. Per què no fer una breu migdiada a Nappuccino? Convida al teu superior i convenç-lo que l \'eficiència és la clau.',
       'Travelling can be exhausting.' : 'Viatjar pot ser esgotador',
       'Traveler' : 'Viatger',
       'We often see our guests tired after visiting Barcelona for long hours. As soon as we explain the concept of Nappuccino, they choose their chill zone where they quickly change their position from sittng to laying down for some time and after wake up ready for the next destination.' : 'Sovint, veiem els nostres clients cansats després d \'hores visitant Barcelona. Quan els expliquem el concepte de Nappuccino, escullen la zona de descans on poden canviar la postura de seure per la d’estirar-se durant una estona i després, descansats, aixecar-se preparats pel següent destí.',
       'PRICING' : 'PREU',
       'First hour costs 4,50 euro and includes a drink. After that every hour would cost you 4 eur/h ' : 'La primera hora costa 4,50€ i inclou una beguda. Després d’això, cada hora només et costarà 4€/h. Gaudeix d’un cafè, un te o un refresc durant una hora per 4,50€.',
       'To enjoy Nappuccino to the fullest, all you need to do is...' : 'Per gaudir Nappuccino al màxim, tot el que necessites fer és… ',
       'Find us at Muntaner 22, Barcelona' : 'Troba’ns al carrer Muntaner 22, Barcelona',
       'You will receive our special koala coin with a number' : 'Rebràs la nostra moneda especial de coala amb el número',
       'Ask your favorite coffee/tea and enjoy unlimited snacks' : 'Pregunta\'ns pel teu cafè o te preferit i gaudeix dels snacks, croissants etc. il·limitats.',
       'Study, work, take a nap, read, relax' : 'Estudia, treballa, fes una migdiada, llegeix, relaxa\'t',
       'ENJOY' : 'GAUDEIX',
       'When leaving, simply hand the koala coin with your number, pay for the time and spread the word about Nappuccino' : 'Al final simplement entrega la moneda de coala amb el teu número, paga pel temps i fes córrer la veu sobre Nappuccino',
       'If you want to know more, we are here to answer all your questions' : 'Si vols saber més, estem aquí per respondre totes les teves preguntes\' \'Si no tens son, pots gaudir del nostre cafè artesanal amb un tros d’un deliciós Red Velvet',
       '4 h and more = 20 €' :  '\'4 hores i més= 20€ \'',
       'Contact Us' : 'Contacta’ns',
       'Send us email or fill out the form.' : 'Envia’ns un correu electrònic: contact@nappuccino.es o completa el formulari',
       'Your Name *' : 'El teu nom',
       'Your Email *' : 'El teu correu',
       'Your Phone *' : 'El teu número de telèfon',
       'Your Message *' : 'El teu missatge',
       'Send Message' : 'Envia un missatge',
       'Please enter your name.' : 'Si us plau introdueix el teu nom',
       'Please enter your email address.' : 'Si us plau, introdueix el teu correu electrònic',
       'Please enter your phone number.' : 'Si us plau, introdueix el teu telèfon mòbil',
       'Please enter a message.' : 'Si us plau, introdueix un missatge',



   });

$translateProvider.translations('fr', {
       'Hello': 'Bonjour',
       'The first siesta cafe in the world.': 'Le premier café dans lequel vous pouvez faire une sieste au monde.',
       'Find us at Muntaner 22 in Barcelona' : 'Découvrez-nous au 22 rue de Muntaner à Barcelone',
       'tell me more' : 'Dites m\'en plus',

       //navbar
       'Nappuccino': 'Nappuccino',
       'Concept': 'Concept',
       'Food&Drinks': 'A manger',
       'Media':'Media',
       'Business Partners': 'Partenaires d\'affaires',
       'Contact' : 'Contact',
       'tell me more' : 'Dites m\'en plus',

       //concept  
       'The first siesta café in the world' : 'Le premier café dans lequel vous pouvez faire une sieste au monde.',
       'Eat. Drink. Sleep. Repeat.' : 'Mangez. Buvez. Dormez. Recommencez.',
       'Have you heard of napping pods? Nappuccino is the first and unique café in the world that implements napping pods inside a café.' : 'Avez-vous déjà entendu parler des capsules de siestes ? Nappuccino est le premier et seul café au monde à les avoir implémentées.',
       'Located in the very center of Barcelona, it is a café where you can actually take a nap and it is neither hotel nor spa. It is genuine and cozy café where you can take a deep breath from a busy center of the city. Take your time to study, work on your computer, read a book, take a coffee or take a nap (or both).' : 'Situé en plein centre de Barcelone, c\'est un café dans lequel vous pouvez vraiment faire une sieste. Ce n\'est ni un hôtel ni un spa. C\'est un véritable et confortable café dans lequel vous pouvez vous détendre du centre ville agité de Barcelone. Prenez votre temps pour étudier, travailler sur votre ordinateur, lire un livre ou simplement prendre un café ou faire une sieste.',
       'This is what makes Nappuccino the first siesta café in the world.' : 'C\'est pourquoi nappuccino est le premier café dans lequel vous pouvez faire une sieste au monde.',
       'Pop in for a breakfast or quick lunch, enjoy delicious bagels, focaccias, authentic french pastry, local craft beer and for coffee lovers, an artesanal italian coffee.' : 'Venez pour un petit-déjeuner, un déjeuner ou un goûter, profitez de nos délicieux bagels, focaccias et authentiques pâtisseries françaises, de notre bière artisanale et pour les amoureux du café, d\'un bon café artisanal italien.',
       'Nap or not, Nappuccino should be on your must-do list when visiting Barcelona.' : 'Sieste ou pas, Nappuccino doit être sur votre liste à faire lors de votre visite à Barcelone.',
       'More about the concept of \'coffee nap\'' : 'Voulez-vous en savoir plus sur le concept de café + sieste ?',
       '' : '',
       
       
       //call to action
       '\'The most accurate way to describe this place would be comparing it to an Oasis after a long walk in the desert.' : '\'La meilleure manière de décrire cet endroit est de le comparer à une oasis après une longue marche dans le désert.',
       'In my case, that nap was life saving\'...' : 'Dans mon cas, cette sieste m\'a sauvé la vie ...\'',

       'Breakfast quick lunch dessert' : 'Petit déjeuner Rapide déjeuner Dessert',
       'Homemade food, local craft beer and artisanal italian coffee' : 'Nourriture faite main, bières et cafés artisanaux',
       'Bagels' : 'Bagels',
       'Granola' : 'Granola',
       'Quiches' : 'Quiches',
       'Bikini' : 'Bikini',
       'Artisanal italian coffee' : 'Café italien artisanal',
       'Drinks' : 'Jus naturels',
       'Craft beer without gluten' : 'Bière artisanale sans gluten',


        //media
        'About us' : 'A propos de nous',
        'Articles' : 'Articles',
       

        //business

        'Nappuccino - Business Opportunities' : 'Opportunités d\'affaires',
        'If you think you share our vision of Nappuccino in every city of the world or want to be part of Nappuccino revolution, get in touch with us.' : 'Si vous pensez partager notre vision de Nappuccino dans chaque ville du monde et voulez faire partie de la révolution Nappuccino, contactez-nous.',
        

        //contact
        'Contact' : 'Contact',
        'Get in touch' : 'Contactez-nous',



        //nappuccino 
        'What explains the magic of the coffee nap?' : 'Qu\'est ce qui explique la magie d\'un napcoffee ?',
        'What is a coffee nap?' : 'Qu\'est ce qu\'un napcoffee ?',
        'Coffee nap is nothing more than drinking a cup of coffee immediately before taking a short nap.' : 'Un napcoffee n\'est rien d\'autre que le fait de boire un café juste avant une courte sieste.',
        'What is the science behind it?' : 'Quelle est la science derrière ceci ?',
        'Although combining the two stimulant components: sleep and caffeine may seem paradoxal, it actually does make sense.' : 'Bien que combiner 2 composants stimulants comme le sommeil et la caféine puisse sembler paradoxal, cela est à l\'inverse totalement logique',
        'Caffeine impacts our brain in a very sophisticated way. It is structurally similar to adenosine, the chemical molecule in our brains that causes drowsiness and makes us feel tired. It is least present when we sleep and we can observe its highest concentration during waking periods. It builds up as the days passes, slowing down the brain activity and makes us feel tired.' : 'La caféine impacte notre cerveau de manière très sophistiquée. C\'est structurellement à l\'adénosine, molécule chimique présente dans notre cerveau qui provoque la somnolence et nous fait nous sentir fatigué. Elle est moins présente quand nous dormons et nous pouvons en observer une concentration plus forte pendant les périodes ou nous sommes réveillés. Elle se construit à mesure que la journée passe, ralentissant l\'activité cérébrale et crée le sentiment de fatigue.',
        'As soon as caffeine enters our brain, it is trying to make its way through by competing with adenosine and eventually blocks the access to our brain receptors. The less adenosine, the more awake we are.' : 'Dès que la caféine entre dans notre cerveau, elle essaie de trouver son chemin en s\'opposant à l\'adénosine et finalement en bloquant les accès aux récepteur cérébraux. Le moins d\'adénosine présent, le plus réveillé nous sommes.',
        'The concentration of adenosine decreases when we take a nap and while the coffee has not yet kicked in (it takes around 20-30 minutes for our body to absorb caffeine), the adenosine does not need to compete with caffeine. As a result, when we wake up, our brain says \'goodbye\' to adenosine, blocks the receptors to accummulate more adenosine and facilitates the absorbtion of caffeine.' : 'La concentration en adénosine diminue quand nous faisons une sieste et, alors que la caféine n\'a pas encore fait son effet (cela prend entre 20 et 30 minutes pour que notre corps absorbe la caféine), l\'adénosine n\'a pas besoin de s\'opposer à la caféine. Il en résulte que quand nous nous réveillons, notre cerveau dit "au revoir" à l\'adénosine, bloque les récepteurs qui absorbent de l\'adénosine et facilite l\'absorption de la caféine.',
        'This is the whole chemical magic behind the the coffee nap.' : 'C\'est toute la magie chimique derrière un napcoffee.',
        'The scientistis advise to keep in mind the circadian rhythms between the wake cycle and sleep cycle, because there’s a time that’s essentially perfect for a nap. For a quick boost of alertness, experts say a 10-to-20-minute power nap in the afternoon is sufficient to get you back on track, fresh and energized. If you are worried to not be able to fall asleep within 20 minutes, the research' : 'Les scientifiques recommandent de garder en tête le rythme circadien entre le cycle de réveil et celui du sommeil, parce qu\'il y a une période qui est parfaite pour une sieste. Pour un rapide stimulant de la vivacité, les experts disent qu\'une sieste de 10 à 20 minutes dans l\'après-midi est suffisante pour être à nouveau sur les rails, frais et gonflé à bloc. Si vous êtes inquiet de ne pas pouvoir vous endormir en 20 minutes, les études',
        'here' : 'ici',
        'and' : 'et',
        'shows that the semi-sleep or light rest works just fine.' : 'montrent que le demi-sommeil ou le repos léger fonctionnent aussi très bien.',
        'Siesta scientifically': 'La sieste scientifiquement',
        'In the Mediterranean, it’s still very common to take a nap in the late afternoon. Especially In Spain the' : 'Dans les régions méditerranéennes, il est très commun de faire une sieste dans l\'après-midi. En espagne principalement',
        'siesta' : 'la sieste',
        'is still a time-honored tradition that happens right after the afternoon meal (Spanish people tend to have a small coffee after lunch) and has been a practice for decades.' : 'est toujours une tradition consacrée juste après le déjeuner (les espagnols ont tendant à boire un café après le déjeuner) et est pratiquée depuis des décennies.',
        'In Greece there is an expression “Ores kinis isihias” which means "quiet time" taking place in the late afternoon hours. What s interesting is that there is a law that officially forbids any noise and loud music between 3-5 pm. It seems that the Greeks take the napping seriously, and it does make sense if we look at some scientific data.' : 'En Grèce, l\'expression "Ores kinis isihias" signifie qu\'un temps de repos a lieu dans l\'après-midi. Il est intéressant de noter ici qu\'il y a une loi qui interdit tout bruit ou musique forte entre 15h et 17h. Il semblerait que les grecs prennent la sieste très au sérieux, et cela prend tout son sens si l\'on s\'attarde sur quelques données scientifiques.',
        'In a' : 'Dans une',
        'large study' : 'large étude',
        'researchers from the Harvard School of Public Health (HSPH) and the University of Athens Medical School (UAMS) found that the siesta habit reduced coronary mortality by 37% among men and women. The research has been based on 23,681 individuals living in Greece who, at the beginning of the study, had no history of coronary heart disease, stroke or cancer, and were followed for an average of 6.3 years.' : ', des chercheurs de l\'université d\'Harvard School of Public Health (HSPH) et de l\'université d\'Athens Medical School (UAMS) que l\'habitude de faire la sieste réduisait le taux de mortalité des hommes et des femmes par infarctus de 37%. L\'étude s\'est basée sur 23 681 individus habitants en Grèce qui, au début de l\'étude, n\'avaient aucun antécédent de type infarctus, AVC ou cancer et qui ont été suivis pendant une moyenne de 6,3 ans.',
        'Finally "the findings suggest that the period between lights-out and sleep-onset is associated with the largest acute reduction in blood pressure during an afternoon siesta."' : 'Enfin, les découvertes révèlent que la période entre l\'exctinction des feux et l\'endormissement est associée à la plus forte réduction de pression sanguine de la sieste de l\'après-midi.',
        'Research' : 'Les études menées',
        'There have been several studies investigating the phenomenon of \'coffee nap\' such as' : 'Un certain nombre d\'études enquëtant sur le phénomène de café-sieste comme',
        'the laboratory and field studies of naps and caffeine from 2006' : 'l\'étude de terrain et en laboratoire sur les siestes et le café datant de 2006',
        'concluding that "napping plus caffeine helps improve performance and alertness of night-shift workers."' : 'ont conclu que "faire la sieste couplé à la caféine aide à améliorer les performances et le niveau d\'alerte des travailleurs de nuit".',
        'Another' : 'Une autre',
        'study about combination of caffeine with a short nap from 1997' : 'étude sur la combinaison de caféine et d\'une rapide sieste datant de 1997',
        'demonstrates both behavioral and cognitive consequences of the coffee nap. The participants have been given a dose of 200 mg of caffeine following by a short 15-minute long nap. Later, they have been asked to participate in a driving test during a continuous monotonous afternoon drive in a car simulator. The conclusion was that people who took nap combined with caffeine had better driving performance comparing to the group of people who just took a nap or just took a coffee alone.' : 'a montré les conséquences comportementales et cognitives d\'une sieste et d\'un café. Il a été donné aux participants une dose de 200mg de caféine précédent une courte sieste de 15 minutes. Plus tard, il leur a été demandé de participer à un test de conduite d\'une après-midi monotone et continue dans un simulateur de conduite. La conclusion a été que ceux qui ont fait une sieste combinée à de la caféine avaient de meilleures performances de conduite comparé au groupe de ceux qui avaient simplement fait une sieste ou simplement pris un café.',
        'The researchers at The University of Pennsylvania remind that although consuming an increased doses of caffeine may seem to make us feel more alert and awake, remind that "it is important for caffeine consumers to understand that caffeine at any dose is not a chemical substitute for adequate healthy sleep and when the pressure for sleep is high, caffeine has little effect on preventing performance deficits and sleep attacks". In their' : 'Les cherchers de l\'université de Pennsylvanie rappellent que bien que consommer une forte dose de caféine pourrait sembler nous faire sentir plus en alerte et réveillé, "il est important pour les consommateurs de caféine de comprendre qua la caféine à n\'importe que dose n\'est pas un substitut chimique pour une vie adéquate saine et quand la pression pour le sommeil est forte, la caféine n\'a qu\'un petit effet sur la prévention du déficit de performance et d\'attaques du sommeil". Dans leur étude',
        'study published in October 2014' : 'étude publiée en octobre 2014',
        'it is revealed that while taking naps alone is an effective way to feel more awake, the inevitable side effect such as grogginness and inertia can be reduced by caffeine. Combining the two components and practicing it in the right proportion of caffeine and time of the nap, coffee naps can help a person wake up more refreshed than a typical nap.' : 'il est révélé qu\'alors que faire une sieste seule est une manière efficace de se sentir réveillé, les inévitables effets secondaires comme l\'étourdissement et l\'inertie peuvent être réduits par la caféine. Combiner les 2 composants et le pratiquer dans les bonnes proportions de caféine et durées de siestes, les cafés-siestes peuvent aider une personnes à se réveiller plus fraiche qu\'une sieste classique.',
        'Why Nappuccino?' : 'Pourquoi Nappuccino?',
        'Everytime you need a quiet place to study, work, relax or just simply disconnect.' : 'Chaque fois que vous avez besoin d\'un endroit calme pour étudier, travailler, vous détendre ou tout simplement déconnecter',
        'Study, focus and concentrate' : 'Pas de disctractions chez Nappuccino',
        'Student' : 'Etudiants',
        'Finding a calm, relaxing place to study in Barcelona can be a challenge and staying at home \'to study\' often leads to excuses like cleaning windows. Change your environment, get a fresh perspective and study here.' : 'Trouver un endroit calme et relaxant pour étudier à Barcelone peut être un défi et rester à la maison \'étudier\' conduit souvent à trouver n\'importe quelle excuse comme nettoyer des fenêtres. Changez votre environnement, changez de perspective et étudiez ici.',
        'Well-rested employee means a more efficient employee' : 'Un employé bien reposé signifie un employé plus efficace',
        'Employee' : 'Salariés',
        'In Spain it is common to take long lunch breaks and it often happens that we become feeling tired after we eat. Not everyone can come back hom to take a nap. Why not add a short nap in Nappuccino to the schedule? Invite your boss and convince him that the efficiency is the key.' : 'En Espagne, il est fréquent de prendre de longues pauses pour déjeuner et il arrive souvent que nous nous sentions fatigués après avoir mangé. Tout le monde ne peut pas revenir à la maison pour faire une sieste. Pourquoi ne pas ajouter une courte sieste chez Nappuccino à l\'heure ? Invitez votre patron à découvrir Nappuccino et à y faire une rapide sieste et il sera convaincu des bienfaits pour l\'efficacité et la productivité.',
        'Travelling can be exhausting.' : 'Voyager peut être épuisant.',
        'Traveler' : 'Voyageurs',
        'We often see our guests tired after visiting Barcelona for long hours. As soon as we explain the concept of Nappuccino, they choose their chill zone where they quickly change their position from sittng to laying down for some time and after wake up ready for the next destination.' : 'Barcelone est une ville géniale, mais après quelques heures à marcher sur les Ramblas, une rapide pause dans un lieu agréable et calme comme le nôtre semble être une bonne idée.',
        'PRICING' : 'PRIX',
        'First hour costs 4,50 euro and includes a drink. After that every hour would cost you 4 eur/h ' : 'Chez Nappuccino, vous pouvez profiter une boisson, café o thé pendant une heure pour seulement 4,50€',
        'To enjoy Nappuccino to the fullest, all you need to do is...' : 'Pour profiter de Nappuccino au maximum, vous n\'avez qu\'à venir',
        'Find us at Muntaner 22, Barcelona' : 'découvrez Nappuccino Carrer de Muntaner, 22, à Barcelone.',
        'You will receive our special koala coin with a number' : 'Vous aurez un numéro afin de suivre le temps que vous passez ici',
        'Ask your favorite coffee/tea and enjoy unlimited snacks' : 'Demander votre café, thé ou boisson favori',
        'ENJOY' : 'PROFITEZ',
        'Study, work, take a nap, read, relax' : 'Immergez-vous dans votre travail, vos études, votre sieste ou ce que vous souhaitez',
        'When leaving, simply hand the koala coin with your number, pay for the time and spread the word about Nappuccino' : 'Dès que vous êtes prêts à partir, vous rendez votre numéro et payez pour le temps que vous avez passé ici.',
        'If you want to know more, we are here to answer all your questions' : 'Si vous n\'avez pas sommeil, venez profiter d\'un bon café italien et d\'une bonne part de Red Velvet.',
        '4 h and more = 20 €' : '4h et plus',


        'Contact Us' : 'Contactez-nous',
        'Send us email or fill out the form.' : 'Envoyez-nous un e-mail : contact@nappuccino.es ou remplissez le formulaire.',
        'Your Name *' : 'Votre nom *',
        'Send Message' : 'Envoyer le message',
        'Please enter your name.' : 'Merci d\'entrer votre nom.',
        'Please enter your email address.' : 'Merci d\'entrer votre adresse e-mail.',
        'Please enter your phone number.' : 'Merci d\'entrer votre numéro de téléphone.',
        'Please enter a message.' : 'Merci d\'entrer un message.'
    });


    $translateProvider.translations('pl', {
        'Hello': 'Cześć',
        'concept': 'koncept',
        'pricing': 'cena',
        'contact':'kontakt',
        'The first siesta cafe in the world.': 'Pierwsza kawiarnia na świecie w której można się zdrzemnąć',
        'Find us at Muntaner 22 in Barcelona' : 'Znajdź nas na ulicy Muntaner 22',
        'tell me more' : 'Powiedz więcej',


        'Hello': 'Bonjour',
        'The first siesta cafe in the world.': 'Pierwsza kawiarnia na świecie w której można się zdrzemnąć.',
        'Find us at Muntaner 22 in Barcelona' : 'Découvrez-nous au 22 rue de Muntaner à Barcelone',
        'tell me more' : 'Dites m\'en plus',

        //navbar
        'Nappuccino': 'Nappuccino',
        'Concept': 'Koncept',
        'Food&Drinks': 'Oferta',
        'Media':'Media',
        'Business Partners': 'Partnerzy biznesowi',
        'Contact' : 'Kontakt',
        'tell me more' : 'Więcej',

        //concept 
        'The first siesta café in the world' : 'Pierwsza kawiarnia na świecie w której można się zdrzemnąć.',
        'Eat. Drink. Sleep. Repeat.' : 'Jedz. Pij. Śpij. Powtórz.',
        'Have you heard of napping pods? Nappuccino is the first and unique café in the world that implements napping pods inside a café.' : 'Avez-vous déjà entendu parler des capsules de siestes ? Nappuccino est le premier et seul café au monde à les avoir implémentées.',
        'Located in the very center of Barcelona, it is a café where you can actually take a nap and it is neither hotel nor spa. It is genuine and cozy café where you can take a deep breath from a busy center of the city. Take your time to study, work on your computer, read a book, take a coffee or take a nap (or both).' : 'Situé en plein centre de Barcelone, c\'est un café dans lequel vous pouvez vraiment faire une sieste. Ce n\'est ni un hôtel ni un spa. C\'est un véritable et confortable café dans lequel vous pouvez vous détendre du centre ville agité de Barcelone. Prenez votre temps pour étudier, travailler sur votre ordinateur, lire un livre ou simplement prendre un café ou faire une sieste.',
        'This is what makes Nappuccino the first siesta café in the world.' : 'C\'est pourquoi nappuccino est le premier café dans lequel vous pouvez faire une sieste au monde.',
        'Pop in for a breakfast or quick lunch, enjoy delicious bagels, focaccias, authentic french pastry, local craft beer and for coffee lovers, an artesanal italian coffee.' : 'Venez pour un petit-déjeuner, un déjeuner ou un goûter, profitez de nos délicieux bagels, focaccias et authentiques pâtisseries françaises, de notre bière artisanale et pour les amoureux du café, d\'un bon café artisanal italien.',
        'Nap or not, Nappuccino should be on your must-do list when visiting Barcelona.' : 'Sieste ou pas, Nappuccino doit être sur votre liste à faire lors de votre visite à Barcelone.',
        'More about the concept of \'coffee nap\'' : 'Voulez-vous en savoir plus sur le concept de café + sieste ?',
        '' : '',
        
        
        //call to action 
        '\'The most accurate way to describe this place would be comparing it to an Oasis after a long walk in the desert.\'' : 'La meilleure manière de décrire cet endroit est de le comparer à une oasis après une longue marche dans le désert.',
        'In my case, that nap was life saving\'...' : 'Dans mon cas, cette sieste m\'a sauvé la vie ...',

        //food and drinks
        'Breakfast quick lunch dessert' : 'Petit déjeuner Rapide déjeuner Dessert',
        'Homemade food, local craft beer and artisanal italian coffee' : 'Nourriture faite main, bières et cafés artisanaux',
        'Bagels' : 'Bagels',
        'Granola' : 'Granola',
        'Quiches' : 'Quiches',
        'Bikini' : 'Bikini',
        'Artisanal italian coffee' : 'Café italien artisanal',
        'Drinks' : 'Jus naturels',
        'Craft beer without gluten' : 'Bière artisanale sans gluten',


         //media
         'About us' : 'A propos de nous',
         'Articles' : 'Articles',
        

         //business

         'Nappuccino - Business Opportunities' : 'Opportunités d\'affaires',
         'If you think you share our vision of Nappuccino in every city of the world or want to be part of Nappuccino revolution, get in touch with us.' : 'Si vous pensez partager notre vision de Nappuccino dans chaque ville du monde et voulez faire partie de la révolution Nappuccino, contactez-nous.',
         

         //contact
         'Contact' : 'Contact',
         'Get in touch' : 'Contactez-nous',

        //concept 
        'take a nap' : 'zdrzemnij się',
        'Sleep is nowadays perceived as a luxury while it is a necessity' : 'Sen jest dziś uważany za luksus, podczas gdy jest koniecznością',
        'We offer you an escape from a city center of Barcelona. Take a nap, relax and enjoy. We provide you with a feeling of privacy here, just take a look at our chill zones.' : 'Oferujemy tobie ucieczkę od centrum Barcelony. Zdrzemnij się, zrelaksuj i wyluzuj. Zapewniamy jak żadna inna kawiarnia, poczucie prywatności, starczy przyjerzeć się naszym strefom chillu.',
        'From our own experience, at some point drinking the eighth coffee a day is just not sufficient. Here, everytime you need a break from work or studying, you can lay down for a little bit or energize yourself with a coffee nap.' : 'Z własnego doświadczenia wiemy, że w pewnym momencie wypicie ósmej kawy tego samego dnia jest po prostu niewystarczające. Tutaj, za każdym razem, gdy potrzebujesz przerwy w pracy lub studiowaniu, możesz się położyć lub spróbować tzw. kawowej drzemki.',
        'work' : 'popracuj',
        'Against famous "No wifi, talk to each other" we come across with a fast wifi and unlimited snacks and coffee.' : 'Wychodzimy naprzeciw słynnemu "nie ma wifi, rozmawiajcie ze sobą" z szybkim wifi i przekąskami, kawą i herbatą bez limitów.',
        'Nowadays it is common to work on our computers from home, from coffee places, libraries or some rent co-working offices. Change your environment and enjoy calm, relaxing ambience in Nappuccino. We have plenty of electrical outlets (including the ones inside of the nap booths) and we can charge your phone as well.' : 'W dzisiejszych czasach często pracujemy na naszych komputerach z domu, w kawiarni, z bibliotek czy korzystamy z biur co-working. Zmień środowisko i ciesz się spokojną, relaksującą atmosferą w Nappuccino. Mamy mnóstwo gniazd elektrycznych (w strefach chillu też) i możemy też bezproblemowo podładować tobie telefon.',
        'study' : 'ucz się',
        'We are student-friendly. Bring your group mates to Nappuccino and study together. Expect wifi, electrical outlets, cool ambience and opportunity to take a nap as soon as you get tired with math formulas. You can try out coffee nap and with a bit of caffeine right before your nap, you become double productive when you wake up. Check out Nappuccino page to know more.' : 'Sami byliśmy kiedyś studentami więc wiemy o co chodzi ze znalezieniem miejsca do nauki poza uczelnią. Przyprowadź swoich znajomych z grupy do Nappuccino i studiujcie razem. Możesz spodziewać się wifi, gniazd elektrycznych, ciepłej, przyjaznej atmosfery i niepowtarzalnej możliwości drzemki, gdy zbytnio zmęczą cię wzory matematyczne. Możesz spróbować kawowej drzemki, gdzie dawka kofeiny tuż przed drzemką spowoduje że staniesz się podwójnie produktywny po przebudzeniu. Sprawdź zakładkę Nappuccino aby dowiedzieć się więcej.',
        'All of you, students and freelancers out there; Nappuccino is better than library.' : '',
        'The three main components of a healthy life are sport, diet and sleep.' : 'Trzy główne składniki zdrowego stylu to sport, dieta i sen.',
        'While we do a good job about sport and diet' : 'Chociaż wydajemy się dbać o siebie w zakresie sportu i diety',
        'we are constantly forgetting' : 'ciągle zapominamy',
        'about something such important as' : 'o czymś tak ważnym jak',
        'SLEEP' : 'SEN',
        'What explains the magic of the coffee nap?' : 'Co wyjaśnia magię kawowej drzemki?',
        'What is a coffee nap?' : 'Co to jest kawowa drzemka?',
        'Coffee nap is nothing more than drinking a cup of coffee immediately before taking a short nap.' : 'Kawowa drzemka to nic innego jak wypicie filiżanki kawy tuż przed krótką drzemką.',
        'What is the science behind it?' : 'Co mówi nauka?',
        'Although combining the two stimulant components: sleep and caffeine may seem paradoxal, it actually does make sense.' : 'Chociaż połączenie obu składników; snu i kofeiny może wydawać się paradoksalne, w rzeczywistości ma sens.',
        'Caffeine impacts our brain in a very sophisticated way. It is structurally similar to adenosine, the chemical molecule in our brains that causes drowsiness and makes us feel tired. It is least present when we sleep and we can observe its highest concentration during waking periods. It builds up as the days passes, slowing down the brain activity and makes us feel tired.' : 'Kofeina wpływa na nasz mózg w bardzo wyrafinowany sposób. Jest strukturalnie podobna do adenozyny, cząsteczki chemicznej w naszych mózgach, która powoduje senność i sprawia, że czujemy się zmęczeni. Adenozyna est najmniej obecna, gdy śpimy i możemy zaobserwować jej najwyższe stężenie podczas okresów czuwania. Nagromadza się wraz z upływem czasu w ciągu dnia, spowalniając aktywność mózgu przez co czujemy się zmęczeni.',
        'As soon as caffeine enters our brain, it is trying to make its way through by competing with adenosine and eventually blocks the access to our brain receptors. The less adenosine, the more awake we are.' : 'Gdy kofeina dociera do naszego mózgu, zaczyna rywalizować z adenozyną i ostatecznie blokuje dostęp do naszych receptorów mózgu. Im mniej adenozyny, tym bardziej jesteśmy czujni i pobudzeni.',
        'The concentration of adenosine decreases when we take a nap and while the coffee has not yet kicked in (it takes around 20-30 minutes for our body to absorb caffeine), the adenosine does not need to compete with caffeine. As a result, when we wake up, our brain says \'goodbye\' to adenosine, blocks the receptors to accummulate more adenosine and facilitates the absorbtion of caffeine.' : 'Stężenie adenozyny zmniejsza się w czasie drzemki, a ponieważ kofeina jeszcze nie dotarła do naszego mózgu (trwa około 20-30 minut), adenozyna nie musi w tym czasie konkurować z kofeiną. W rezultacie, gdy się obudzimy, nasz mózg mówi \'papa\'  adenozynie, blokuje receptory od gromadzenia większej ilości adenozyny i ułatwia absorbowanie kofeiny.',
        'This is the whole chemical magic behind the the coffee nap.' : 'To jest cała chemiczna magia która stoi za kawową drzemką',
        'The scientistis advise to keep in mind the circadian rhythms between the wake cycle and sleep cycle, because there’s a time that’s essentially perfect for a nap. For a quick boost of alertness, experts say a 10-to-20-minute power nap in the afternoon is sufficient to get you back on track, fresh and energized. If you are worried to not be able to fall asleep within 20 minutes, the research' : 'Naukowcy radzą, aby pamiętać o rytmie okołodobowym pomiędzy cyklem pobudzenia a cyklem snu, ponieważ zasadniczo istnieje moment idealny na drzemkę. Aby szybko przyspieszyć czujność, eksperci twierdzą, że popołudniowa drzemka od 10 do 20 minut wystarczy, aby można było wrócić do życia codziennego z podwójną energią. Jeśli martwisz się, że nie będzie mógł zasnąć w ciągu 20 minut, badania',
        'here' : 'tutaj',
        'and' : 'i',
        'shows that the semi-sleep or light rest works just fine.' : 'pokazują, że pół-sen lub lekki odpoczynek też przynosi efekty.',
        'Siesta scientifically': 'Siesta naukowo',
        'In the Mediterranean, it’s still very common to take a nap in the late afternoon. Especially In Spain the' : 'W krajach basenu Morza Śródziemnego bardzo często spotyka się fenomen siesty = drzemki podczas późnych popołudni. Szczególnie w Hiszpanii,',
        'siesta' : 'siesta',
        'is still a time-honored tradition that happens right after the afternoon meal (Spanish people tend to have a small coffee after lunch) and has been a practice for decades.' : 'jest tradycją, która odbywa się zaraz po posiłku po południu (po obiedzie Hiszpanie lubią wypić małą kawę przed drzemką) i siesta była i jest praktyką od dziesięcioleci.',
        'In Greece there is an expression “Ores kinis isihias” which means "quiet time" taking place in the late afternoon hours. What s interesting is that there is a law that officially forbids any noise and loud music between 3-5 pm. It seems that the Greeks take the napping seriously, and it does make sense if we look at some scientific data.' : 'W Grecji istnieje wyrażenie "Ores kinis isihias", co oznacza "spokój" i dotyczy późnych godzin popołudniowych. Co ciekawe, w Grecji istnieje prawo, które oficjalnie zabrania hałasu i głośnej muzyki między 15-17. Wydaje się, że Grecy poważnie traktują drzemkę i zapewne coś w tym jest, jeśli spojrzymy na niektóre dane naukowe.',
        'In a' : 'W',
        'large study' : 'obszernym badaniu',
        'researchers from the Harvard School of Public Health (HSPH) and the University of Athens Medical School (UAMS) found that the siesta habit reduced coronary mortality by 37% among men and women. The research has been based on 23,681 individuals living in Greece who, at the beginning of the study, had no history of coronary heart disease, stroke or cancer, and were followed for an average of 6.3 years.' : 'naukowcy z Harvard School of Public Health (HSPH) i Uniwersyteckiej Szkoły Medycznej w Atenach (UAMS) stwierdzili, że zwyczaj siesty zmniejsza śmiertelność wieńcową o 37% wśród mężczyzn i kobiet. Badania opierały się na 23 681 osobach żyjących w Grecji, którzy na początku badania nie wykazywali historii choroby wieńcowej, udaru mózgu i raka, a następnie zostali obserwowani przez naukowców przez średnio 6,3 roku.',
        'Finally "the findings suggest that the period between lights-out and sleep-onset is associated with the largest acute reduction in blood pressure during an afternoon siesta."' : '',
        'Research' : 'Badanie',
        'There have been several studies investigating the phenomenon of \'coffee nap\' such as' : 'Przeprowadzono kilka badań dotyczących zjawiska \'kawowej drzemki\', takie jak "',
        'the laboratory and field studies of naps and caffeine from 2006' : 'the laboratory and field studies of naps and caffeine z 2006',
        'concluding that "napping plus caffeine helps improve performance and alertness of night-shift workers."' : 'stwierdzających że "drzemka plus kofeina pomaga poprawić wydajność i czujność pracowników nocnych zmian.',
        'Another' : 'Inne',
        'study about combination of caffeine with a short nap from 1997' : 'badanie dotyczące połączenia kofeiny z krótką drzemką z 1997 roku',
        'demonstrates both behavioral and cognitive consequences of the coffee nap. The participants have been given a dose of 200 mg of caffeine following by a short 15-minute long nap. Later, they have been asked to participate in a driving test during a continuous monotonous afternoon drive in a car simulator. The conclusion was that people who took nap combined with caffeine had better driving performance comparing to the group of people who just took a nap or just took a coffee alone.' : 'ukazuje zarówno behawioralne jak i poznawcze konsekwencje kawowej drzemki. W badaniu uczestnicy otrzymali dawkę 200 mg kofeiny, po czym udali się na krótką 15-minutową drzemkę. Później zostali poproszeni o uczestnictwo w ciągłej monotonnej popołudniowej jeździe za kierownicą w symulatorze samochodowym. Wniosek był taki, że osoby, które drzemały w połączeniu z kofeiną, miały lepsze osiągniecia w porównaniu z grupą osób, które tylko spróbowały drzemki lub tylko wypiły kawę.',
        'The researchers at The University of Pennsylvania remind that although consuming an increased doses of caffeine may seem to make us feel more alert and awake, remind that "it is important for caffeine consumers to understand that caffeine at any dose is not a chemical substitute for adequate healthy sleep and when the pressure for sleep is high, caffeine has little effect on preventing performance deficits and sleep attacks". In their' : 'Naukowcy z University of Pennsylvania przypominają, że chociaż spożywanie większej dawki kofeiny może sprawić, że poczujemy się lepiej i bardziej czujni "ważne jest, aby miłośnicy kofeiny zrozumieli, że kofeina w jakiejkolwiek dawce nie jest substytutem chemicznym dla odpowiedniego zdrowego snu a gdy potrzeba snu jest wystarczająco wysoka, kofeina ma niewielki wpływ na zapobieganie deficytom i atakom snu ". W ich',
        'study published in October 2014' : 'badaniu opublikowanemu w październiku 2014 r',
        'it is revealed that while taking naps alone is an effective way to feel more awake, the inevitable side effect such as grogginness and inertia can be reduced by caffeine. Combining the two components and practicing it in the right proportion of caffeine and time of the nap, coffee naps can help a person wake up more refreshed than a typical nap.' : 'stwierdza się, że sama drzemka rzeczywiście powoduje że czujemy się bardziej pobudzeni, jednak nie chroni nas przed skutkami ubocznymi taki jak bezwładność i złe samopoczucie tuż po przebudzeniu. Objawy te jednak mogą być zmniejszone dzięki kofeinie. Połączenie dwóch składników i praktykowanie kawowej drzemki w odpowiednich proporcjach kofeiny i czasu drzemki, mogą mieć zbawieny wpływ na tych wiecznie zmęczonych po typowej drzemce.',
        'Why Nappuccino?' : 'Dlaczego Nappuccino',
        'Everytime you need a quiet place to study, work, relax or just simply disconnect.' : 'Za każdym razem, gdy potrzebujesz cichego miejsca do nauki, pracy, lub po prostu odłączenia się od rzeczywistości',
        'Study, focus and concentrate' : 'Skoncentruj się i skorzystaj z przytulnej atmosfery Nappuccino"',
        'Student' : 'Student',
        'Finding a calm, relaxing place to study in Barcelona can be a challenge and staying at home \'to study\' often leads to excuses like cleaning windows. Change your environment, get a fresh perspective and study here.' : 'Znalezienie spokojnego, relaksującego miejsca do nauki w Barcelonie może być nie lada wyzwaniem i pozostanie w domu \'aby się uczyć \' często prowadzi do wymówek, takich jak czyszczenie okien. Zmień środowisko, uzyskaj świeżą perspektywę i studiuj tutaj',
        'Well-rested employee means a more efficient employee' : 'Dobrze wypoczęty pracownik oznacza bardziej wydajny pracownik',
        'Employee' : 'Pracownik',
        'In Spain it is common to take long lunch breaks and it often happens that we become feeling tired after we eat. Not everyone can come back hom to take a nap. Why not add a short nap in Nappuccino to the schedule? Invite your boss and convince him that the efficiency is the key.' : 'W Hiszpanii występują dość długie przerwy na lunch i często zdarza się, że czujemy się zmęczeni tuż po jedzeniu. Nie każdy może wrócić do domu, aby uciąć sobie drzemkę. Dlaczego nie dodać krótkiej drzemki w Nappuccino do harmonogramu dnia? Zaproś swojego szefa i przekonaj go, że odpoczynek jest kluczem',
        'Travelling can be exhausting.' : 'Podróżowanie bywa męczące',
        'Traveler' : 'Podróżnik',
        'We often see our guests tired after visiting Barcelona for long hours. As soon as we explain the concept of Nappuccino, they choose their chill zone where they quickly change their position from sittng to laying down for some time and after wake up ready for the next destination.' : 'Często widzimy naszych gości zmęczonych po kilkugodzinnej przeprawie w Barcelonie. Gdy tylko wyjaśnimy koncept Nappuccino, wybierają swoją strefę chillu, gdzie szybko zmieniają pozycję z siedzącej na leżącą.',
        'PRICING' : 'Cennik',
        'First hour costs 4,50 euro and includes a drink. After that every hour would cost you 4 eur/h ' : 'Spróbuj przeypysznej kawy, herbaty lub ciesz się zimnym piwem za 4,50 € za godzinę',
        'To enjoy Nappuccino to the fullest, all you need to do is...' : '',
        'Find us at Muntaner 22, Barcelona' : 'Znajdź nas na ulicy Muntaner 22 w Barcelonie',
        'You will receive our special koala coin with a number' : 'Otrzymasz specjalną monetę z koala i z numerem',
        'Ask your favorite coffee/tea and enjoy unlimited snacks' : 'Zapytaj o ulubioną kawę / herbatę i korzystaj z nieograniczonych przekąsek',
        'Study, work, take a nap, read, relax' : 'Studiuj, pracuj, zrób drzemkę, przeczytaj książkę, zrelaksuj się',
        'When leaving, simply hand the koala coin with your number, pay for the time and spread the word about Nappuccino.' : 'Kiedy już wypocząłeś, po prostu podaj nam monetę z koala i z twoim numerem i powiedz wszystkim o Nappuccino.',
        'If you want to know more, we are here to answer all your questions' : 'Jeśli nie jesteś śpiący, wciąż możesz przyjść na kawę i delektować się naszym przepysznym Red Velvet. ',
        '4 h and more = 20 €' : '4 godziny i więcej = 20 €',
        'Contact Us' : 'Skontaktuj się z nami',
        'Your Name *' : 'Twoje imię',
        'Send Message' : 'Wyślij wiadomość',
        'Your Phone *' : 'Twój numer telefonu',
        'Send Message *' : 'Wyślij wiadomość',
        'Please enter your name.' : 'Proszę, podaj swoje imię',
        'Please enter your email address.' : 'Proszę, podaj twój adres emailowy',
        'Please enter your phone number.' : 'Proszę, podaj twój numer telefonu',
        'Please enter a message.' : 'Proszę wyślij wiadomość',
    });

     
    //german //
     $translateProvider.translations('de', {
        'Hello': 'Hallo',
        'concept': 'concept',
        'pricing': 'pricing',
        'contact':'contact',
        'The first siesta cafe in the world.': 'The first siesta cafe in the world.',
        'Find us at Muntaner 22 in Barcelona' : 'Find us at Muntaner 22 in Barcelona',
        'tell me more' : 'tell me more',


        'Hello': 'Bonjour',
        'The first siesta cafe in the world.': 'Le premier café dans lequel vous pouvez faire une sieste au monde.',
        'Find us at Muntaner 22 in Barcelona' : 'Découvrez-nous au 22 rue de Muntaner à Barcelone',
        'tell me more' : 'Dites m\'en plus',

        //navbar
        'Nappuccino': 'Nappuccino',
        'Concept': 'Concept',
        'Food&Drinks': 'A manger',
        'Media':'Media',
        'Business Partners': 'Partenaires d\'affaires',
        'Contact' : 'Contact',
        'tell me more' : 'Dites m\'en plus',

        //concept 
        'The first siesta café in the world' : 'Le premier café dans lequel vous pouvez faire une sieste au monde.',
        'Eat. Drink. Sleep. Repeat.' : 'Mangez. Buvez. Dormez. Recommencez.',
        'Have you heard of napping pods? Nappuccino is the first and unique café in the world that implements napping pods inside a café.' : 'Avez-vous déjà entendu parler des capsules de siestes ? Nappuccino est le premier et seul café au monde à les avoir implémentées.',
        'Located in the very center of Barcelona, it is a café where you can actually take a nap and it is neither hotel nor spa. It is genuine and cozy café where you can take a deep breath from a busy center of the city. Take your time to study, work on your computer, read a book, take a coffee or take a nap (or both).' : 'Situé en plein centre de Barcelone, c\'est un café dans lequel vous pouvez vraiment faire une sieste. Ce n\'est ni un hôtel ni un spa. C\'est un véritable et confortable café dans lequel vous pouvez vous détendre du centre ville agité de Barcelone. Prenez votre temps pour étudier, travailler sur votre ordinateur, lire un livre ou simplement prendre un café ou faire une sieste.',
        'This is what makes Nappuccino the first siesta café in the world.' : 'C\'est pourquoi nappuccino est le premier café dans lequel vous pouvez faire une sieste au monde.',
        'Pop in for a breakfast or quick lunch, enjoy delicious bagels, focaccias, authentic french pastry, local craft beer and for coffee lovers, an artesanal italian coffee.' : 'Venez pour un petit-déjeuner, un déjeuner ou un goûter, profitez de nos délicieux bagels, focaccias et authentiques pâtisseries françaises, de notre bière artisanale et pour les amoureux du café, d\'un bon café artisanal italien.',
        'Nap or not, Nappuccino should be on your must-do list when visiting Barcelona.' : 'Sieste ou pas, Nappuccino doit être sur votre liste à faire lors de votre visite à Barcelone.',
        'More about the concept of \'coffee nap\'' : 'Voulez-vous en savoir plus sur le concept de café + sieste ?',
        '' : '',
        
        
        //call to action 
        'The most accurate way to describe this place would be comparing it to an Oasis after a long walk in the desert.' : 'La meilleure manière de décrire cet endroit est de le comparer à une oasis après une longue marche dans le désert.',
        'In my case, that nap was life saving\'...' : 'Dans mon cas, cette sieste m\'a sauvé la vie ...',

        //food and drinks
        'Breakfast quick lunch dessert' : 'Petit déjeuner Rapide déjeuner Dessert',
        'Homemade food, local craft beer and artisanal italian coffee' : 'Nourriture faite main, bières et cafés artisanaux',
        'Bagels' : 'Bagels',
        'Granola' : 'Granola',
        'Quiches' : 'Quiches',
        'Bikini' : 'Bikini',
        'Artisan italian coffee' : 'Café italien artisanal',
        'Zumos naturales' : 'Jus naturels',
        'Craft beer without gluten' : 'Bière artisanale sans gluten',


         //media
         'About us' : 'A propos de nous',
         'Articles' : 'Articles',
        

         //business

         'Nappuccino - Business Opportunities' : 'Opportunités d\'affaires',
         'If you think you share our vision of Nappuccino in every city of the world or want to be part of Nappuccino revolution, get in touch with us.' : 'Si vous pensez partager notre vision de Nappuccino dans chaque ville du monde et voulez faire partie de la révolution Nappuccino, contactez-nous.',
         

         //contact
         'Contact' : 'Contact',
         'Get in touch' : 'Contactez-nous',



        //nappuccino
        'take a nap' : 'take a nap',
        'Sleep is nowadays perceived as a luxury while it is a necessity' : 'Sleep is nowadays perceived as a luxury while it is a necessity',
        'We offer you an escape from a city center of Barcelona. Take a nap, relax and enjoy. We provide you with a feeling of privacy here, just take a look at our chill zones.' : 'We offer you an escape from a city center of Barcelona. Take a nap, relax and enjoy. We provide you with a feeling of privacy here, just take a look at our chill zones.',
        'From our own experience, at some point drinking the eighth coffee a day is just not sufficient. Here, everytime you need a break from work or studying, you can lay down for a little bit or energize yourself with a coffee nap.' : 'From our own experience, at some point drinking the eighth coffee a day is just not sufficient. Here, everytime you need a break from work or studying, you can lay down for a little bit or energize yourself with a coffee nap.',
        'work' : 'work',
        'Against famous "No wifi, talk to each other" we come across with a fast wifi and unlimited snacks and coffee.' : 'Against famous \'No wifi, talk to each other\' we come across with a fast wifi and unlimited snacks and coffee.',
        'Nowadays it is common to work on our computers from home, from coffee places, libraries or some rent co-working offices. Change your environment and enjoy calm, relaxing ambience in Nappuccino. We have plenty of electrical outlets (including the ones inside of the nap booths) and we can charge your phone as well.' : 'Nowadays it is common to work on our computers from home, from coffee places, libraries or some rent co-working offices. Change your environment and enjoy calm, relaxing ambience in Nappuccino. We have plenty of electrical outlets (including the ones inside of the nap booths) and we can charge your phone as well.',
        'study' : 'study',
        'We are student-friendly. Bring your group mates to Nappuccino and study together. Expect wifi, electrical outlets, cool ambience and opportunity to take a nap as soon as you get tired with math formulas. You can try out coffee nap and with a bit of caffeine right before your nap, you become double productive when you wake up. Check out Nappuccino page to know more.' : 'We are student-friendly. Bring your group mates to Nappuccino and study together. Expect wifi, electrical outlets, cool ambience and opportunity to take a nap as soon as you get tired with math formulas. You can try out coffee nap and with a bit of caffeine right before your nap, you become double productive when you wake up. Check out Nappuccino page to know more.',
        'All of you, students and freelancers out there; Nappuccino is better than library.' : 'All of you, students and freelancers out there; Nappuccino is better than library.',
        'The three main components of a healthy life are sport, diet and sleep.' : 'The three main components of a healthy life are sport, diet and sleep.',
        'While we do a good job about sport and diet' : 'While we do a good job about sport and diet',
        'we are constantly forgetting' : 'we are constantly forgetting',
        'about something such important as' : 'about something such important as',
        'SLEEP' : 'SLEEP',
        'What explains the magic of the coffee nap?' : 'What explains the magic of the coffee nap?',
        'What is a coffee nap?' : 'What is a coffee nap?',
        'Coffee nap is nothing more than drinking a cup of coffee immediately before taking a short nap.' : 'Coffee nap is nothing more than drinking a cup of coffee immediately before taking a short nap.',
        'What is the science behind it?' : 'What is the science behind it?',
        'Although combining the two stimulant components: sleep and caffeine may seem paradoxal, it actually does make sense.﻿' : 'Although combining the two stimulant components: sleep and caffeine may seem paradoxal, it actually does make sense.﻿',
        'Caffeine impacts our brain in a very sophisticated way. It is structurally similar to adenosine, the chemical molecule in our brains that causes drowsiness and makes us feel tired. It is least present when we sleep and we can observe its highest concentration during waking periods. It builds up as the days passes, slowing down the brain activity and makes us feel tired.' : 'Caffeine impacts our brain in a very sophisticated way. It is structurally similar to adenosine, the chemical molecule in our brains that causes drowsiness and makes us feel tired. It is least present when we sleep and we can observe its highest concentration during waking periods. It builds up as the days passes, slowing down the brain activity and makes us feel tired.',
        'As soon as caffeine enters our brain, it is trying to make its way through by competing with adenosine and eventually blocks the access to our brain receptors. The less adenosine, the more awake we are.' : 'As soon as caffeine enters our brain, it is trying to make its way through by competing with adenosine and eventually blocks the access to our brain receptors. The less adenosine, the more awake we are.',
        'The concentration of adenosine decreases when we take a nap and while the coffee has not yet kicked in (it takes around 20-30 minutes for our body to absorb caffeine), the adenosine does not need to compete with caffeine. As a result, when we wake up, our brain says \'goodbye\' to adenosine, blocks the receptors to accummulate more adenosine and facilitates the absorbtion of caffeine.' : 'The concentration of adenosine decreases when we take a nap and while the coffee has not yet kicked in (it takes around 20-30 minutes for our body to absorb caffeine), the adenosine does not need to compete with caffeine. As a result, when we wake up, our brain says \'goodbye\' to adenosine, blocks the receptors to accummulate more adenosine and facilitates the absorbtion of caffeine.',
        'This is the whole chemical magic behind the the coffee nap.' : 'This is the whole chemical magic behind the the coffee nap.',
        'The scientistis advise to keep in mind the circadian rhythms between the wake cycle and sleep cycle, because there’s a time that’s essentially perfect for a nap. For a quick boost of alertness, experts say a 10-to-20-minute power nap in the afternoon is sufficient to get you back on track, fresh and energized. If you are worried to not be able to fall asleep within 20 minutes, the research' : 'The scientistis advise to keep in mind the circadian rhythms between the wake cycle and sleep cycle, because there’s a time that’s essentially perfect for a nap. For a quick boost of alertness, experts say a 10-to-20-minute power nap in the afternoon is sufficient to get you back on track, fresh and energized. If you are worried to not be able to fall asleep within 20 minutes, the research',
        'here' : 'here',
        'and' : 'and',
        'shows that the semi-sleep or light rest works just fine.' : 'shows that the semi-sleep or light rest works just fine.',
        'Siesta scientifically': 'Siesta scientifically',
        'In the Mediterranean, it’s still very common to take a nap in the late afternoon. Especially In Spain the' : 'In the Mediterranean, it’s still very common to take a nap in the afternoon. Especially In Spain the',
        'siesta' : 'siesta',
        'is still a time-honored tradition that happens right after the afternoon meal (Spanish people tend to have a small coffee after lunch) and has been a practice for decades.' : 'is still a time-honored tradition that happens right after the afternoon meal (Spanish people tend to have a small coffee after lunch) and has been a practice for decades.',
        'In Greece there is an expression “Ores kinis isihias” which means "quiet time" taking place in the late afternoon hours. What s interesting is that there is a law that officially forbids any noise and loud music between 3-5 pm. It seems that the Greeks take the napping seriously, and it does make sense if we look at some scientific data.' : 'In Greece there is an expression “Ores kinis isihias” which means "quiet time" taking place in the late afternoon hours. What s interesting is that there is a law that officially forbids any noise and loud music between 3-5 pm. It seems that the Greeks take the napping seriously, and it does make sense if we look at some scientific data.',
        'In a' : 'In a',
        'large study' : 'large study',
        'researchers from the Harvard School of Public Health (HSPH) and the University of Athens Medical School (UAMS) found that the siesta habit reduced coronary mortality by 37% among men and women. The research has been based on 23,681 individuals living in Greece who, at the beginning of the study, had no history of coronary heart disease, stroke or cancer, and were followed for an average of 6.3 years.' : 'researchers from the Harvard School of Public Health (HSPH) and the University of Athens Medical School (UAMS) found that the siesta habit reduced coronary mortality by 37% among men and women. The research has been based on 23,681 individuals living in Greece who, at the beginning of the study, had no history of coronary heart disease, stroke or cancer, and were followed for an average of 6.3 years.',
        'Finally "the findings suggest that the period between lights-out and sleep-onset is associated with the largest acute reduction in blood pressure during an afternoon siesta."' : 'Finally "the findings suggest that the period between lights-out and sleep-onset is associated with the largest acute reduction in blood pressure during an afternoon siesta."',
        'Research' : 'Research',
        'There have been several studies investigating the phenomenon of \'coffee nap\' such as' : 'There have been several studies investigating the phenomenon of \'coffee nap\' such as',
        'the laboratory and field studies of naps and caffeine from 2006' : 'the laboratory and field studies of naps and caffeine from 2006',
        'concluding that "napping plus caffeine helps improve performance and alertness of night-shift workers."' : 'concluding that "napping plus caffeine helps improve performance and alertness of night-shift workers."',
        'Another' : 'Another',
        'study about combination of caffeine with a short nap from 1997' : 'study about combination of caffeine with a short nap from 1997',
        'demonstrates both behavioral and cognitive consequences of the coffee nap. The participants have been given a dose of 200 mg of caffeine following by a short 15-minute long nap. Later, they have been asked to participate in a driving test during a continuous monotonous afternoon drive in a car simulator. The conclusion was that people who took nap combined with caffeine had better driving performance comparing to the group of people who just took a nap or just took a coffee alone.' : 'demonstrates both behavioral and cognitive consequences of the coffee nap. The participants have been given a dose of 200 mg of caffeine following by a short 15-minute long nap. Later, they have been asked to participate in a driving test during a continuous monotonous afternoon drive in a car simulator. The conclusion was that people who took nap combined with caffeine had better driving performance comparing to the group of people who just took a nap or just took a coffee alone.',
        'The researchers at The University of Pennsylvania remind that although consuming an increased doses of caffeine may seem to make us feel more alert and awake, remind that "it is important for caffeine consumers to understand that caffeine at any dose is not a chemical substitute for adequate healthy sleep and when the pressure for sleep is high, caffeine has little effect on preventing performance deficits and sleep attacks". In their' : 'The researchers at The University of Pennsylvania remind that although consuming an increased doses of caffeine may seem to make us feel more alert and awake, remind that "it is important for caffeine consumers to understand that caffeine at any dose is not a chemical substitute for adequate healthy sleep and when the pressure for sleep is high, caffeine has little effect on preventing performance deficits and sleep attacks". In their',
        'study published in October 2014' : 'study published in October 2014',
        'it is revealed that while taking naps alone is an effective way to feel more awake, the inevitable side effect such as grogginness and inertia can be reduced by caffeine. Combining the two components and practicing it in the right proportion of caffeine and time of the nap, coffee naps can help a person wake up more refreshed than a typical nap.' : 'it is revealed that while taking naps alone is an effective way to feel more awake, the inevitable side effect such as grogginness and inertia can be reduced by caffeine. Combining the two components and practicing it in the right proportion of caffeine and time of the nap, coffee naps can help a person wake up more refreshed than a typical nap.',
        'Why Nappuccino?' : 'Why Nappuccino?',
        'Everytime you need a quiet place to study, work, relax or just simply disconnect.' : 'Everytime you need a quiet place to study, work, relax or just simply disconnect.',
        'Study, focus and concentrate' : 'Study, focus and concentrate',
        'Student' : 'Student',
        'Finding a calm, relaxing place to study in Barcelona can be a challenge and staying at home \'to study\' often leads to excuses like cleaning windows. Change your environment, get a fresh perspective and study here.' : 'Finding a calm, relaxing place to study in Barcelona can be a challenge and staying at home \'to study\' often leads to excuses like cleaning windows. Change your environment, get a fresh perspective and study here.',
        'Well-rested employee means a more efficient employee' : 'Well-rested employee means a more efficient employee',
        'Employee' : 'Employee',
        'In Spain it is common to take long lunch breaks and it often happens that we become feeling tired after we eat. Not everyone can come back hom to take a nap. Why not add a short nap in Nappuccino to the schedule? Invite your boss and convince him that the efficiency is the key.' : 'In Spain it is common to take long lunch breaks and it often happens that we become feeling tired after we eat. Not everyone can come back hom to take a nap. Why not add a short nap in Nappuccino to the schedule? Invite your boss and convince him that the efficiency is the key.',
        'Travelling can be exhausting.' : 'Travelling can be exhausting.',
        'Traveler' : 'Traveler',
        'We often see our guests tired after visiting Barcelona for long hours. As soon as we explain the concept of Nappuccino, they choose their chill zone where they quickly change their position from sittng to laying down for some time and after wake up ready for the next destination.' : 'We often see our guests tired after visiting Barcelona for long hours. As soon as we explain the concept of Nappuccino, they choose their chill zone where they quickly change their position from sittng to laying down for some time and after wake up ready for the next destination.',
        'PRICING' : 'PRICING',
        'First hour costs 4,50 euro and includes a drink. After that every hour would cost you 4 eur/h ' : 'EFirst hour costs 4,50 euro and includes a drink. After that every hour would cost you 4 eur/h ',
        'To enjoy Nappuccino to the fullest, all you need to do is...' : 'To enjoy Nappuccino to the fullest, all you need to do is...',
        'Find us at Muntaner 22, Barcelona' : 'Find us at Muntaner 22, Barcelona',
        'You will receive our special koala coin with a number' : 'You will receive our special koala coin with a number',
        'Ask your favorite coffee/tea and enjoy unlimited snacks' : 'Ask your favorite coffee/tea and enjoy unlimited snacks',
        'Study, work, take a nap, read, relax' : 'Study, work, take a nap, read, relax',
        'ENJOY' : 'ENJOY',
        'When leaving, simply hand the koala coin with your number, pay for the time you spent and spread the word about Nappuccino' : 'When leaving, simply hand the koala coin with your number, pay for the time and spread the word about Nappuccino',
        'If you want to know more, we are here to answer all your questions' : 'If you are not feeling tired, you can always come and enjoy a cup of italian artisian coffee with a piece of delicious cake ',
        '4 h and more = 20 €' : '4 h and more = 20 €',
        'Contact Us' : 'Contact Us',
        'Send us email or fill out the form.' : 'Send us email: contact@nappuccino.es or fill out the form.',
        'Your Name *' : 'Your Name *',
        'Send Message' : 'Send Message',
        'Please enter your name.' : 'Please enter your name.',
        'Please enter your email address.' : 'Please enter your email address.',
        'Please enter your phone number.' : 'Please enter your phone number.',
        'Please enter a message.' : 'Please enter a message.'




    });
    
    //danish

     $translateProvider.translations('da', {
        'Hello': 'Hej',
        'concept': 'concept',
        'pricing': 'pricing',
        'contact':'contact',
        'The first siesta cafe in the world.': 'The first siesta cafe in the world.',
        'Find us at Muntaner 22 in Barcelona' : 'Find us at Muntaner 22 in Barcelona',
        'tell me more' : 'tell me more',


        'Hello': 'Bonjour',
        'The first siesta cafe in the world.': 'Le premier café dans lequel vous pouvez faire une sieste au monde.',
        'Find us at Muntaner 22 in Barcelona' : 'Découvrez-nous au 22 rue de Muntaner à Barcelone',
        'tell me more' : 'Dites m\'en plus',

        //navbar
        'Nappuccino': 'Nappuccino',
        'Concept': 'Concept',
        'Food&Drinks': 'A manger',
        'Media':'Media',
        'Business Partners': 'Partenaires d\'affaires',
        'Contact' : 'Contact',
        'tell me more' : 'Dites m\'en plus',

        //concept  
        'The first siesta café in the world' : 'Le premier café dans lequel vous pouvez faire une sieste au monde.',
        'Eat. Drink. Sleep. Repeat.' : 'Mangez. Buvez. Dormez. Recommencez.',
        'Have you heard of napping pods? Nappuccino is the first and unique café in the world that implements napping pods inside a café.' : 'Avez-vous déjà entendu parler des capsules de siestes ? Nappuccino est le premier et seul café au monde à les avoir implémentées.',
        'Located in the very center of Barcelona, it is a café where you can actually take a nap and it is neither hotel nor spa. It is genuine and cozy café where you can take a deep breath from a busy center of the city. Take your time to study, work on your computer, read a book, take a coffee or take a nap (or both).' : 'Situé en plein centre de Barcelone, c\'est un café dans lequel vous pouvez vraiment faire une sieste. Ce n\'est ni un hôtel ni un spa. C\'est un véritable et confortable café dans lequel vous pouvez vous détendre du centre ville agité de Barcelone. Prenez votre temps pour étudier, travailler sur votre ordinateur, lire un livre ou simplement prendre un café ou faire une sieste.',
        'This is what makes Nappuccino the first siesta café in the world.' : 'C\'est pourquoi nappuccino est le premier café dans lequel vous pouvez faire une sieste au monde.',
        'Pop in for a breakfast or quick lunch, enjoy delicious bagels, focaccias, authentic french pastry, local craft beer and for coffee lovers, an artesanal italian coffee.' : 'Venez pour un petit-déjeuner, un déjeuner ou un goûter, profitez de nos délicieux bagels, focaccias et authentiques pâtisseries françaises, de notre bière artisanale et pour les amoureux du café, d\'un bon café artisanal italien.',
        'Nap or not, Nappuccino should be on your must-do list when visiting Barcelona.' : 'Sieste ou pas, Nappuccino doit être sur votre liste à faire lors de votre visite à Barcelone.',
        'More about the concept of \'coffee nap\'' : 'Voulez-vous en savoir plus sur le concept de café + sieste ?',
        '' : '',
        
        
        //call to action 
        '\'The most accurate way to describe this place would be comparing it to an Oasis after a long walk in the desert.' : '\'La meilleure manière de décrire cet endroit est de le comparer à une oasis après une longue marche dans le désert.',
        'In my case, that nap was life saving\'...': 'Dans mon cas, cette sieste m\'a sauvé la vie ...\'',

        //food and drinks
        'Breakfast quick lunch dessert' : 'Petit déjeuner Rapide déjeuner Dessert',
        'Homemade food, local craft beer and artisanal italian coffee' : 'Nourriture faite main, bières et cafés artisanaux',
        'Bagels' : 'Bagels',
        'Granola' : 'Granola',
        'Quiches' : 'Quiches',
        'Bikini' : 'Bikini',
        'Artisan italian coffee' : 'Café italien artisanal',
        'Zumos naturales' : 'Jus naturels',
        'Craft beer without gluten' : 'Bière artisanale sans gluten',


         //media
         'About us' : 'A propos de nous',
         'Articles' : 'Articles',
        

         //business

         'Nappuccino - Business Opportunities' : 'Opportunités d\'affaires',
         'If you think you share our vision of Nappuccino in every city of the world or want to be part of Nappuccino revolution, get in touch with us.' : 'Si vous pensez partager notre vision de Nappuccino dans chaque ville du monde et voulez faire partie de la révolution Nappuccino, contactez-nous.',
         

         //contact
         'Contact' : 'Contact',
         'Get in touch' : 'Contactez-nous',




        //concept //
        'take a nap' : 'take a nap',
        'Sleep is nowadays perceived as a luxury while it is a necessity' : 'Sleep is nowadays perceived as a luxury while it is a necessity',
        'We offer you an escape from a city center of Barcelona. Take a nap, relax and enjoy. We provide you with a feeling of privacy here, just take a look at our chill zones.' : 'We offer you an escape from a city center of Barcelona. Take a nap, relax and enjoy. We provide you with a feeling of privacy here, just take a look at our chill zones.',
        'From our own experience, at some point drinking the eighth coffee a day is just not sufficient. Here, everytime you need a break from work or studying, you can lay down for a little bit or energize yourself with a coffee nap.' : 'From our own experience, at some point drinking the eighth coffee a day is just not sufficient. Here, everytime you need a break from work or studying, you can lay down for a little bit or energize yourself with a coffee nap.',
        'work' : 'work',
        'Against famous "No wifi, talk to each other" we come across with a fast wifi and unlimited snacks and coffee.' : 'Against famous \'No wifi, talk to each other\' we come across with a fast wifi and unlimited snacks and coffee.',
        'Nowadays it is common to work on our computers from home, from coffee places, libraries or some rent co-working offices. Change your environment and enjoy calm, relaxing ambience in Nappuccino. We have plenty of electrical outlets (including the ones inside of the nap booths) and we can charge your phone as well.' : 'Nowadays it is common to work on our computers from home, from coffee places, libraries or some rent co-working offices. Change your environment and enjoy calm, relaxing ambience in Nappuccino. We have plenty of electrical outlets (including the ones inside of the nap booths) and we can charge your phone as well.',
        'study' : 'study',
        'We are student-friendly. Bring your group mates to Nappuccino and study together. Expect wifi, electrical outlets, cool ambience and opportunity to take a nap as soon as you get tired with math formulas. You can try out coffee nap and with a bit of caffeine right before your nap, you become double productive when you wake up. Check out Nappuccino page to know more.' : 'We are student-friendly. Bring your group mates to Nappuccino and study together. Expect wifi, electrical outlets, cool ambience and opportunity to take a nap as soon as you get tired with math formulas. You can try out coffee nap and with a bit of caffeine right before your nap, you become double productive when you wake up. Check out Nappuccino page to know more.',
        'All of you, students and freelancers out there; Nappuccino is better than library.' : 'All of you, students and freelancers out there; Nappuccino is better than library.',
        'The three main components of a healthy life are sport, diet and sleep.' : 'The three main components of a healthy life are sport, diet and sleep.',
        'While we do a good job about sport and diet' : 'While we do a good job about sport and diet',
        'we are constantly forgetting' : 'we are constantly forgetting',
        'about something such important as' : 'about something such important as',
        'SLEEP' : 'SLEEP',
        'What explains the magic of the coffee nap?' : 'What explains the magic of the coffee nap?',
        'What is a coffee nap?' : 'What is a coffee nap?',
        'Coffee nap is nothing more than drinking a cup of coffee immediately before taking a short nap.' : 'Coffee nap is nothing more than drinking a cup of coffee immediately before taking a short nap.',
        'What is the science behind it?' : 'What is the science behind it?',
        'Although combining the two stimulant components: sleep and caffeine may seem paradoxal, it actually does make sense.﻿' : 'Although combining the two stimulant components: sleep and caffeine may seem paradoxal, it actually does make sense.﻿',
        'Caffeine impacts our brain in a very sophisticated way. It is structurally similar to adenosine, the chemical molecule in our brains that causes drowsiness and makes us feel tired. It is least present when we sleep and we can observe its highest concentration during waking periods. It builds up as the days passes, slowing down the brain activity and makes us feel tired.' : 'Caffeine impacts our brain in a very sophisticated way. It is structurally similar to adenosine, the chemical molecule in our brains that causes drowsiness and makes us feel tired. It is least present when we sleep and we can observe its highest concentration during waking periods. It builds up as the days passes, slowing down the brain activity and makes us feel tired.',
        'As soon as caffeine enters our brain, it is trying to make its way through by competing with adenosine and eventually blocks the access to our brain receptors. The less adenosine, the more awake we are.' : 'As soon as caffeine enters our brain, it is trying to make its way through by competing with adenosine and eventually blocks the access to our brain receptors. The less adenosine, the more awake we are.',
        'The concentration of adenosine decreases when we take a nap and while the coffee has not yet kicked in (it takes around 20-30 minutes for our body to absorb caffeine), the adenosine does not need to compete with caffeine. As a result, when we wake up, our brain says \'goodbye\' to adenosine, blocks the receptors to accummulate more adenosine and facilitates the absorbtion of caffeine.' : 'The concentration of adenosine decreases when we take a nap and while the coffee has not yet kicked in (it takes around 20-30 minutes for our body to absorb caffeine), the adenosine does not need to compete with caffeine. As a result, when we wake up, our brain says \'goodbye\' to adenosine, blocks the receptors to accummulate more adenosine and facilitates the absorbtion of caffeine.',
        'This is the whole chemical magic behind the the coffee nap.' : 'This is the whole chemical magic behind the the coffee nap.',
        'The scientistis advise to keep in mind the circadian rhythms between the wake cycle and sleep cycle, because there’s a time that’s essentially perfect for a nap. For a quick boost of alertness, experts say a 10-to-20-minute power nap in the afternoon is sufficient to get you back on track, fresh and energized. If you are worried to not be able to fall asleep within 20 minutes, the research' : 'The scientistis advise to keep in mind the circadian rhythms between the wake cycle and sleep cycle, because there’s a time that’s essentially perfect for a nap. For a quick boost of alertness, experts say a 10-to-20-minute power nap in the afternoon is sufficient to get you back on track, fresh and energized. If you are worried to not be able to fall asleep within 20 minutes, the research',
        'here' : 'here',
        'and' : 'and',
        'shows that the semi-sleep or light rest works just fine.' : 'shows that the semi-sleep or light rest works just fine.',
        'Siesta scientifically': 'Siesta scientifically',
        'In the Mediterranean, it’s still very common to take a nap in the late afternoon. Especially In Spain the' : 'In the Mediterranean, it’s still very common to take a nap in the afternoon. Especially In Spain the',
        'siesta' : 'siesta',
        'is still a time-honored tradition that happens right after the afternoon meal (Spanish people tend to have a small coffee after lunch) and has been a practice for decades.' : 'is still a time-honored tradition that happens right after the afternoon meal (Spanish people tend to have a small coffee after lunch) and has been a practice for decades.',
        'In Greece there is an expression “Ores kinis isihias” which means "quiet time" taking place in the late afternoon hours. What s interesting is that there is a law that officially forbids any noise and loud music between 3-5 pm. It seems that the Greeks take the napping seriously, and it does make sense if we look at some scientific data.' : 'In Greece there is an expression “Ores kinis isihias” which means "quiet time" taking place in the late afternoon hours. What s interesting is that there is a law that officially forbids any noise and loud music between 3-5 pm. It seems that the Greeks take the napping seriously, and it does make sense if we look at some scientific data.',
        'In a' : 'In a',
        'large study' : 'large study',
        'researchers from the Harvard School of Public Health (HSPH) and the University of Athens Medical School (UAMS) found that the siesta habit reduced coronary mortality by 37% among men and women. The research has been based on 23,681 individuals living in Greece who, at the beginning of the study, had no history of coronary heart disease, stroke or cancer, and were followed for an average of 6.3 years.' : 'researchers from the Harvard School of Public Health (HSPH) and the University of Athens Medical School (UAMS) found that the siesta habit reduced coronary mortality by 37% among men and women. The research has been based on 23,681 individuals living in Greece who, at the beginning of the study, had no history of coronary heart disease, stroke or cancer, and were followed for an average of 6.3 years.',
        'Finally "the findings suggest that the period between lights-out and sleep-onset is associated with the largest acute reduction in blood pressure during an afternoon siesta."' : 'Finally "the findings suggest that the period between lights-out and sleep-onset is associated with the largest acute reduction in blood pressure during an afternoon siesta."',
        'Research' : 'Research',
        'There have been several studies investigating the phenomenon of \'coffee nap\' such as' : 'There have been several studies investigating the phenomenon of \'coffee nap\' such as',
        'the laboratory and field studies of naps and caffeine from 2006' : 'the laboratory and field studies of naps and caffeine from 2006',
        'concluding that "napping plus caffeine helps improve performance and alertness of night-shift workers."' : 'concluding that "napping plus caffeine helps improve performance and alertness of night-shift workers."',
        'Another' : 'Another',
        'study about combination of caffeine with a short nap from 1997' : 'study about combination of caffeine with a short nap from 1997',
        'demonstrates both behavioral and cognitive consequences of the coffee nap. The participants have been given a dose of 200 mg of caffeine following by a short 15-minute long nap. Later, they have been asked to participate in a driving test during a continuous monotonous afternoon drive in a car simulator. The conclusion was that people who took nap combined with caffeine had better driving performance comparing to the group of people who just took a nap or just took a coffee alone.' : 'demonstrates both behavioral and cognitive consequences of the coffee nap. The participants have been given a dose of 200 mg of caffeine following by a short 15-minute long nap. Later, they have been asked to participate in a driving test during a continuous monotonous afternoon drive in a car simulator. The conclusion was that people who took nap combined with caffeine had better driving performance comparing to the group of people who just took a nap or just took a coffee alone.',
        'The researchers at The University of Pennsylvania remind that although consuming an increased doses of caffeine may seem to make us feel more alert and awake, remind that "it is important for caffeine consumers to understand that caffeine at any dose is not a chemical substitute for adequate healthy sleep and when the pressure for sleep is high, caffeine has little effect on preventing performance deficits and sleep attacks". In their' : 'The researchers at The University of Pennsylvania remind that although consuming an increased doses of caffeine may seem to make us feel more alert and awake, remind that "it is important for caffeine consumers to understand that caffeine at any dose is not a chemical substitute for adequate healthy sleep and when the pressure for sleep is high, caffeine has little effect on preventing performance deficits and sleep attacks". In their',
        'study published in October 2014' : 'study published in October 2014',
        'it is revealed that while taking naps alone is an effective way to feel more awake, the inevitable side effect such as grogginness and inertia can be reduced by caffeine. Combining the two components and practicing it in the right proportion of caffeine and time of the nap, coffee naps can help a person wake up more refreshed than a typical nap.' : 'it is revealed that while taking naps alone is an effective way to feel more awake, the inevitable side effect such as grogginness and inertia can be reduced by caffeine. Combining the two components and practicing it in the right proportion of caffeine and time of the nap, coffee naps can help a person wake up more refreshed than a typical nap.',
        'Why Nappuccino?' : 'Why Nappuccino?',
        'Everytime you need a quiet place to study, work, relax or just simply disconnect.' : 'Everytime you need a quiet place to study, work, relax or just simply disconnect.',
        'Study, focus and concentrate' : 'Study, focus and concentrate',
        'Student' : 'Student',
        'Finding a calm, relaxing place to study in Barcelona can be a challenge and staying at home \'to study\' often leads to excuses like cleaning windows. Change your environment, get a fresh perspective and study here.' : 'Finding a calm, relaxing place to study in Barcelona can be a challenge and staying at home \'to study\' often leads to excuses like cleaning windows. Change your environment, get a fresh perspective and study here.',
        'Well-rested employee means a more efficient employee' : 'Well-rested employee means a more efficient employee',
        'Employee' : 'Employee',
        'In Spain it is common to take long lunch breaks and it often happens that we become feeling tired after we eat. Not everyone can come back hom to take a nap. Why not add a short nap in Nappuccino to the schedule? Invite your boss and convince him that the efficiency is the key.' : 'In Spain it is common to take long lunch breaks and it often happens that we become feeling tired after we eat. Not everyone can come back hom to take a nap. Why not add a short nap in Nappuccino to the schedule? Invite your boss and convince him that the efficiency is the key.',
        'Travelling can be exhausting.' : 'Travelling can be exhausting.',
        'Traveler' : 'Traveler',
        'We often see our guests tired after visiting Barcelona for long hours. As soon as we explain the concept of Nappuccino, they choose their chill zone where they quickly change their position from sittng to laying down for some time and after wake up ready for the next destination.' : 'We often see our guests tired after visiting Barcelona for long hours. As soon as we explain the concept of Nappuccino, they choose their chill zone where they quickly change their position from sittng to laying down for some time and after wake up ready for the next destination.',
        'PRICING' : 'PRICING',
        'First hour costs 4,50 euro and includes a drink. After that every hour would cost you 4 eur/h ' : 'EFirst hour costs 4,50 euro and includes a drink. After that every hour would cost you 4 eur/h ',
        'To enjoy Nappuccino to the fullest, all you need to do is...' : 'To enjoy Nappuccino to the fullest, all you need to do is...',
        'Find us at Muntaner 22, Barcelona' : 'Find us at Muntaner 22, Barcelona',
        'You will receive our special koala coin with a number' : 'You will receive our special koala coin with a number',
        'Ask your favorite coffee/tea and enjoy unlimited snacks' : 'Ask your favorite coffee/tea and enjoy unlimited snacks',
        'Study, work, take a nap, read, relax' : 'Study, work, take a nap, read, relax',
        'ENJOY' : 'ENJOY',
        'When leaving, simply hand the koala coin with your number, pay for the time you spent and spread the word about Nappuccino' : 'When leaving, simply hand the koala coin with your number, pay for the time and spread the word about Nappuccino',
        'If you want to know more, we are here to answer all your questions' : 'If you want to know more, we are here to answer all your questions',
        '4 h and more = 20 €' : '4 h and more = 20 €',
        'Contact Us' : 'Contact Us',
        'Send us email or fill out the form.' : 'Send us email : contact@nappuccino.es or fill out the form.',
        'Your Name *' : 'Your Name *',
        'Send Message' : 'Send Message',
        'Please enter your name.' : 'Please enter your name.',
        'Please enter your email address.' : 'Please enter your email address.',
        'Please enter your phone number.' : 'Please enter your phone number.',
        'Please enter a message.' : 'Please enter a message.'




    });



    //$translateProvider.determinePreferredLanguage();

    //console.log("$translateProvider.determinePreferredLanguage(): ", $translateProvider.determinePreferredLanguage());

    $translateProvider.useSanitizeValueStrategy('sanitizeParameters');
});


   // Language onChange $scope.onChange = function (lang) { $scope.currentLang = lang; }); //


