function mudarIdioma(idioma){
    const elementos = {
        pt:{
            //menu principal
            linkCentral1:"SOBRE",
            linkCentral2:"SERVIÇOS",
            linkCentral3:"CONTATO",
            //letreiro central
            juliaNome: "Julia Campello Schlichting",
            juliaContexto: "Terapia sistêmica individual, de casal e familiar.",
            //sobre mim
            isobreMim:"Sobre mim",
            smp1:'Sou <strong id="ifontStrong">terapeuta sistêmica para famílias, casais e indivíduos.</strong> Nasci no Rio de Janeiro e, ao longo da minha vida, morei em diferentes países (Estados Unidos, México e Alemanha). Estudei Ciências Sociais na Universidade de Brasília e trabalhei em diversos projetos de pesquisa nas áreas de gênero e educação.',
            smp2:'Há mais de 20 anos, vivo com minha família em Munique. Aqui, estudei na LMU (Universidade Ludwig-Maximilians) e trabalhei na área social com foco em interculturalidade e comunicação. Posteriormente, atuei em uma creche. Através do contato direto com diversas famílias de diferentes contextos, percebi que, às vezes, as pessoas precisam de apoio para encontrar soluções para seus problemas e conflitos.',
            smp3:'Por isso, fiz a formação em aconselhamento individual, familiar e de casais no Münchener Institut für systemische Weiterbildung e, em seguida, optei pela formação como terapeuta sistêmica na Gesellschaft für Systemische Therapie und Beratung em Munique. <strong id="ifontStrong">Meu enfoque é baseado em um tratamento respeitoso e empático frente aos desafios do dia a dia.</strong> Acredito que cada pessoa tem a capacidade de encontrar soluções para seus problemas, e vejo meu papel como uma facilitadora e apoiadora nesse processo.',
            //serviços
            iservicos:"Serviços",
            svp1:'Nesses momentos, é importante encontrar alguém em quem confiar e abrir-se para novas possibilidades. Muitas vezes, uma simples mudança de perspectiva pode ajudar você a aprender e experimentar novas formas de lidar com os desafios.',
            svp2:'<strong id="ifontStrong">A terapia sistêmica ajuda você a redescobrir e fortalecer seus recursos pessoais, criando soluções que respeitam seus limites e atendem às suas necessidades.</strong>',
            svp3:'Estou à disposição para acompanhar você nesse processo. <strong id="ifontStrong">Seja em psicoterapia, aconselhamento de casais, terapia familiar ou orientação parental</strong>, vamos focar em suas habilidades e forças e encontrar novas estratégias para enfrentar os desafios. Sempre com respeito à sua privacidade e confidencialidade e discrição.',
            //contato
            icontato:"Contato"
        },

        en: {
            // main menu
            linkCentral1: "ABOUT",
            linkCentral2: "SERVICES",
            linkCentral3: "CONTACT",
            // central banner
            juliaNome: "Julia Campello Schlichting",
            juliaContexto: "Individual, couples, and family systemic therapy.",
            // about me
            isobreMim: "About me",
            smp1: 'I am a <strong id="ifontStrong">systemic therapist for families, couples, and individuals.</strong> I was born in Rio de Janeiro and, throughout my life, have lived in different countries (United States, Mexico, and Germany). I studied Social Sciences at the University of Brasília and worked on various research projects in the areas of gender and education.',
            smp2: 'For over 20 years, I have been living with my family in Munich. Here, I studied at LMU (Ludwig-Maximilians University) and worked in the social field with a focus on interculturality and communication. Later, I worked in a daycare center. Through direct contact with various families from different backgrounds, I realized that sometimes people need support to find solutions to their problems and conflicts.',
            smp3: 'Therefore, I completed training in individual, family, and couples counseling at the Münchener Institut für systemische Weiterbildung and then chose to pursue training as a systemic therapist at the Gesellschaft für Systemische Therapie und Beratung in Munich. <strong id="ifontStrong">My approach is based on respectful and empathetic treatment of everyday challenges.</strong> I believe that each person has the ability to find solutions to their problems, and I see my role as a facilitator and supporter in this process.',
            // services
            iservicos: "Services",
            svp1: 'In these moments, it’s important to find someone you can trust and open up to new possibilities. Often, a simple change of perspective can help you learn and experience new ways of dealing with challenges.',
            svp2: '<strong id="ifontStrong">Systemic therapy helps you rediscover and strengthen your personal resources, creating solutions that respect your limits and meet your needs.</strong>',
            svp3: 'I am here to support you in this process. <strong id="ifontStrong">Whether in psychotherapy, couples counseling, family therapy, or parental guidance</strong>, we will focus on your skills and strengths and find new strategies to face challenges. Always with respect for your privacy, confidentiality, and discretion.',
            // contact
            icontato: "Contact"
        },

        es: {
            // menú principal
            linkCentral1: "SOBRE MÍ",
            linkCentral2: "SERVICIOS",
            linkCentral3: "CONTACTO",
            // banner central
            juliaNome: "Julia Campello Schlichting",
            juliaContexto: "Terapia sistémica individual, de pareja y familiar.",
            // sobre mí
            isobreMim: "Sobre mí",
            smp1: 'Soy <strong id="ifontStrong">terapeuta sistémica para familias, parejas e individuos.</strong> Nací en Río de Janeiro y, a lo largo de mi vida, he vivido en diferentes países (Estados Unidos, México y Alemania). Estudié Ciencias Sociales en la Universidad de Brasília y trabajé en varios proyectos de investigación en las áreas de género y educación.',
            smp2: 'Desde hace más de 20 años vivo con mi familia en Múnich. Aquí estudié en LMU (Universidad Ludwig-Maximilians) y trabajé en el área social con un enfoque en interculturalidad y comunicación. Más tarde trabajé en una guardería. A través del contacto directo con diversas familias de diferentes contextos, me di cuenta de que a veces las personas necesitan apoyo para encontrar soluciones a sus problemas y conflictos.',
            smp3: 'Por eso, me formé en asesoramiento individual, familiar y de pareja en el Münchener Institut für systemische Weiterbildung y luego elegí formarme como terapeuta sistémica en la Gesellschaft für Systemische Therapie und Beratung en Múnich. <strong id="ifontStrong">Mi enfoque se basa en un trato respetuoso y empático ante los desafíos cotidianos.</strong> Creo que cada persona tiene la capacidad de encontrar soluciones a sus problemas, y veo mi papel como facilitadora y apoyo en este proceso.',
            // servicios
            iservicos: "Servicios",
            svp1: 'En estos momentos, es importante encontrar a alguien en quien confiar y abrirse a nuevas posibilidades. A menudo, un simple cambio de perspectiva puede ayudarte a aprender y experimentar nuevas formas de enfrentar los desafíos.',
            svp2: '<strong id="ifontStrong">La terapia sistémica te ayuda a redescubrir y fortalecer tus recursos personales, creando soluciones que respetan tus límites y satisfacen tus necesidades.</strong>',
            svp3: 'Estoy aquí para acompañarte en este proceso. <strong id="ifontStrong">Ya sea en psicoterapia, asesoramiento de pareja, terapia familiar o orientación parental</strong>, nos enfocaremos en tus habilidades y fortalezas y encontraremos nuevas estrategias para enfrentar los desafíos. Siempre con respeto a tu privacidad, confidencialidad y discreción.',
            // contacto
            icontato: "Contacto"
        },

        de: {
            // Menu principal
            linkCentral1: "ÜBER MICH",
            linkCentral2: "DIENSTLEISTUNGEN",
            linkCentral3: "KONTAKT",
            // Banner central
            juliaNome: "Julia Campello Schlichting",
            juliaContexto: "Systemische Therapie für Einzelpersonen, Paare und Familien.",
            // Seção "Sobre mim"
            isobreMim: "Über mich",
            smp1: 'Ich bin <strong id="ifontStrong">systemische Therapeutin für Familien, Paare und Einzelpersonen.</strong> Ich wurde in Rio de Janeiro geboren und habe im Laufe meines Lebens in verschiedenen Ländern gelebt (USA, Mexiko und Deutschland). Ich habe Sozialwissenschaften an der Universität von Brasília studiert und in verschiedenen Forschungsprojekten in den Bereichen Geschlechterforschung und Bildung mitgearbeitet.',
            smp2: 'Seit über 20 Jahren lebe ich mit meiner Familie in München. Hier habe ich an der LMU (Ludwig-Maximilians-Universität) studiert und im sozialen Bereich mit dem Schwerpunkt Interkulturalität und Kommunikation gearbeitet. Später habe ich in einer Kindertagesstätte gearbeitet. Durch den direkten Kontakt mit verschiedenen Familien aus unterschiedlichen Kontexten wurde mir klar, dass Menschen manchmal Unterstützung benötigen, um Lösungen für ihre Probleme und Konflikte zu finden.',
            smp3: 'Deshalb habe ich eine Ausbildung in Einzel-, Familien- und Paarberatung am Münchener Institut für systemische Weiterbildung abgeschlossen und mich anschließend zur systemischen Therapeutin an der Gesellschaft für Systemische Therapie und Beratung in München ausbilden lassen. <strong id="ifontStrong">Mein Ansatz basiert auf einem respektvollen und empathischen Umgang mit den täglichen Herausforderungen.</strong> Ich glaube, dass jeder Mensch die Fähigkeit hat, Lösungen für seine Probleme zu finden, und sehe meine Rolle als Unterstützerin und Begleiterin in diesem Prozess.',
            // Seção "Serviços"
            iservicos: "Dienstleistungen",
            svp1: 'In solchen Momenten ist es wichtig, jemanden zu finden, dem man vertrauen kann, und sich für neue Möglichkeiten zu öffnen. Oft kann eine einfache Perspektivänderung helfen, neue Wege zu entdecken und zu lernen, wie man mit Herausforderungen umgeht.',
            svp2: '<strong id="ifontStrong">Die systemische Therapie hilft Ihnen, Ihre persönlichen Ressourcen wiederzuentdecken und zu stärken, und schafft Lösungen, die Ihre Grenzen respektieren und Ihre Bedürfnisse erfüllen.</strong>',
            svp3: 'Ich bin hier, um Sie in diesem Prozess zu unterstützen. <strong id="ifontStrong">Ob in der Psychotherapie, Paarberatung, Familientherapie oder Elternberatung</strong> – wir werden uns auf Ihre Fähigkeiten und Stärken konzentrieren und neue Strategien entwickeln, um Herausforderungen zu meistern. Immer mit Respekt vor Ihrer Privatsphäre, Vertraulichkeit und Diskretion.',
            // Seção "Contato"
            icontato: "Kontakt"
        },
    };

    if (elementos[idioma]) {
        // Atualizando o conteúdo com base no idioma selecionado
        document.getElementById("linkCentral1").textContent = elementos[idioma].linkCentral1;
        document.getElementById("linkCentral2").textContent = elementos[idioma].linkCentral2;
        document.getElementById("linkCentral3").textContent = elementos[idioma].linkCentral3;
        
        document.getElementById("juliaNome").textContent = elementos[idioma].juliaNome;
        document.getElementById("juliaContexto").textContent = elementos[idioma].juliaContexto;

        document.getElementById("isobreMim").textContent = elementos[idioma].isobreMim;
        document.getElementById("smp1").innerHTML = DOMPurify.sanitize(elementos[idioma].smp1);
        document.getElementById("smp2").textContent = elementos[idioma].smp2;
        document.getElementById("smp3").innerHTML = DOMPurify.sanitize(elementos[idioma].smp3);
        
        document.getElementById("iservicos").textContent = elementos[idioma].iservicos;
        document.getElementById("svp1").textContent = elementos[idioma].svp1;
        document.getElementById("svp2").innerHTML = DOMPurify.sanitize(elementos[idioma].svp2); 
        document.getElementById("svp3").innerHTML = DOMPurify.sanitize(elementos[idioma].svp3);

        document.getElementById("icontato").textContent = elementos[idioma].icontato;

        if (idioma === 'de') {
            // Seleciona todos os elementos com a classe 'sobreMim2'
            const elementosSobreMim = document.getElementsByClassName("sobreMim2");
            
        
            // Aplica a alteração a todos os elementos encontrados
            for (let i = 0; i < elementosSobreMim.length; i++) {
                elementosSobreMim[i].style.width = '760px';
                elementosSobreMim[i].style.height = '720px';
            }
        }
    } else {
        console.error("Idioma não suportado");
    }





};

