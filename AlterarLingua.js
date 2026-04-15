function mudarIdioma(idioma){
    const elementos = {
        pt:{
            //menu principal
            linkCentral1:"SOBRE",
            linkCentral2:"SERVIÇOS",
            linkCentral3:"CONTATO",
            //letreiro central / texto curto
            juliaNome: "Julia Campello Schlichting",
            juliaContexto: "Um espaço para novas perspectivas", // [cite: 22]
            tc1: "Em fases desafiadoras da vida, pode ser importante parar, respirar e permitir-se ser acompanhado.", // [cite: 23]
            tc2: "Muitas vezes, uma pequena mudança de perspectiva já abre novos caminhos para lidar com conflitos, crises e transformações.", // [cite: 24]
            tc3: "Acompanho pessoas a redescobrirem seus próprios recursos, desenvolverem novos olhares e encontrarem soluções possíveis em um espaço protegido, respeitoso e confidencial.", // [cite: 25]
            //sobre mim
            isobreMim:"Sobre mim", // [cite: 26]
            smp1:'Sou <strong id="ifontStrong">terapeuta sistêmica</strong> e acompanho famílias, casais — especialmente em relações interculturais — e pessoas em processos de mudança, crise e desenvolvimento pessoal.', // [cite: 27, 28, 29]
            smp2:'Nasci no Rio de Janeiro e vivi em diferentes países, como Estados Unidos, México e Alemanha. Essas experiências moldaram profundamente meu olhar sobre as relações, as diferenças culturais e as diversas formas de viver e se relacionar.', // [cite: 30, 31]
            smp3:'Vivo em Munique há mais de 20 anos, onde me formei e atuei na área social, com foco em interculturalidade e comunicação. Em meu trabalho, busco criar um espaço seguro e acolhedor. <strong id="ifontStrong">Acredito que cada pessoa possui recursos próprios para encontrar novos caminhos</strong> e vejo meu papel como um acompanhamento empático, respeitoso e colaborativo.', // [cite: 32, 33, 34]
            //serviços / acompanhamento terapêutico
            iservicos:"Acompanhamento terapêutico", // [cite: 35]
            svp1:'Em momentos difíceis, é importante encontrar alguém em quem confiar e abrir-se para novas possibilidades. Muitas vezes, uma simples mudança de perspectiva ajuda a experimentar novas formas de lidar com os desafios.', // [cite: 36, 37]
            svp2:'<strong id="ifontStrong">A terapia sistêmica ajuda a redescobrir e fortalecer seus recursos pessoais, criando soluções que respeitam seus limites e atendem às suas necessidades.</strong>', // [cite: 38]
            svp3:'Trabalho com sensibilidade especial para contextos interculturais e diferentes realidades de vida. <strong id="ifontStrong">Estou à disposição para acompanhar você nesse processo. Seja em terapia, aconselhamento de casais, terapia familiar ou orientação parental</strong>, vamos focar em suas habilidades e forças para encontrar novas estratégias — sempre com respeito à sua privacidade, confidencialidade e discrição.', // [cite: 39, 40]
            //contato
            icontato:"Contato"
        },

        en: {
            // main menu
            linkCentral1: "ABOUT",
            linkCentral2: "SERVICES",
            linkCentral3: "CONTACT",
            // central banner / short text
            juliaNome: "Julia Campello Schlichting",
            juliaContexto: "A space for new perspectives", // [cite: 61]
            tc1: "During challenging phases of life, it can be helpful to pause and allow yourself to be supported.", // [cite: 63]
            tc2: "Often, a small shift in perspective can open new ways of dealing with conflict, crisis, and change.", // [cite: 64]
            tc3: "I support people in rediscovering their own resources, developing new perspectives, and finding meaningful solutions - within a safe, respectful, and confidential space.", // [cite: 65]
            // about me
            isobreMim: "About me", // [cite: 66]
            smp1: 'I am a <strong id="ifontStrong">systemic therapist</strong> working with families, couples — especially in intercultural relationships — and individuals in times of change, crisis, and personal development.', // [cite: 67, 68, 69]
            smp2: 'I was born in Rio de Janeiro and have lived in several countries, including the United States, Mexico, and Germany. These experiences have deeply shaped my view of relationships, cultural differences, and the many ways people live and connect.', // [cite: 70, 71]
            smp3: 'I have been living in Munich for over 20 years, where I trained and worked in the social field with a focus on intercultural communication. In my work, I aim to create a safe and welcoming space. <strong id="ifontStrong">I believe that every person has their own resources to find new paths</strong>, and I see my role as an empathetic, respectful, and collaborative companion in this process.', // [cite: 72, 73, 74]
            // services / therapeutic support
            iservicos: "Therapeutic Support", // [cite: 75]
            svp1: 'In difficult moments, it is important to find someone you can trust and to open yourself to new possibilities. Often, a simple change in perspective can help you discover new ways of facing challenges.', // [cite: 76, 77]
            svp2: '<strong id="ifontStrong">Systemic therapy supports you in rediscovering and strengthening your personal resources, creating solutions that respect your boundaries and meet your needs.</strong>', // [cite: 78]
            svp3: 'I work with particular sensitivity to intercultural contexts and diverse life experiences. <strong id="ifontStrong">I am here to accompany you in this process. Whether through therapy, couples counseling, family therapy, or parental guidance</strong>, we will focus on your strengths and abilities to develop new strategies — always with respect for your privacy, confidentiality, and discretion.', // [cite: 79, 80]
            // contact
            icontato: "Contact"
        },

        es: {
            // menú principal
            linkCentral1: "SOBRE MÍ",
            linkCentral2: "SERVICIOS",
            linkCentral3: "CONTACTO",
            // banner central / texto corto
            juliaNome: "Julia Campello Schlichting",
            juliaContexto: "Un espacio para nuevas perspectivas", // [cite: 43]
            tc1: "En momentos desafiantes de la vida, puede ser importante detenerse y permitirse ser acompañado.", // [cite: 44]
            tc2: "Muchas veces, un pequeño cambio de perspectiva abre nuevas formas de afrontar conflictos, crisis y transiciones.", // [cite: 45]
            tc3: "Acompaño a las personas a redescubrir sus propios recursos, desarrollar nuevas miradas y encontrar soluciones posibles, en un espacio seguro, respetuoso y confidencial.", // [cite: 46]
            // sobre mí
            isobreMim: "Sobre mí", // [cite: 47]
            smp1: 'Soy <strong id="ifontStrong">terapeuta sistémica</strong> y acompaño a familias, parejas — especialmente en relaciones interculturales — y personas en procesos de cambio, crisis y desarrollo personal.', // [cite: 48]
            smp2: 'Nací en Río de Janeiro y he vivido en distintos países, entre ellos Estados Unidos, México y Alemania. Estas experiencias han marcado profundamente mi mirada sobre las relaciones, las diferencias culturales y las diversas formas de vivir y vincularse.', // [cite: 49, 50]
            smp3: 'Vivo en Múnich desde hace más de 20 años, donde me formé y trabajé en el ámbito social, con énfasis en la interculturalidad y la comunicación. En mi trabajo busco crear un espacio seguro y acogedor. <strong id="ifontStrong">Creo que cada persona cuenta con recursos propios para encontrar nuevos caminos</strong>, y entiendo mi rol como un acompañamiento empático, respetuoso y colaborativo.', // [cite: 51, 52, 53]
            // servicios / acompañamiento terapéutico
            iservicos: "Acompañamiento terapéutico", // [cite: 54]
            svp1: 'En estos momentos, es importante encontrar a alguien en quien confiar y abrirse a nuevas posibilidades. Muchas veces, un simple cambio de perspectiva puede ayudar a experimentar nuevas formas de afrontar los desafíos.', // [cite: 55, 56]
            svp2: '<strong id="ifontStrong">La terapia sistémica ayuda a redescubrir y fortalecer los recursos personales, creando soluciones que respetan los límites y responden a las necesidades.</strong>', // [cite: 57]
            svp3: 'Trabajo con especial sensibilidad hacia los contextos interculturales y las diferentes realidades de vida. <strong id="ifontStrong">Estoy a tu disposición para acompañarte en este proceso. Ya sea en terapia, asesoramiento de pareja, terapia familiar u orientación parental</strong>, nos enfocaremos en tus capacidades y fortalezas para encontrar nuevas estrategias, siempre con respeto a tu privacidad, confidencialidad y discreción.', // [cite: 58, 59]
            // contacto
            icontato: "Contacto"
        },

        de: {
            // Menu principal
            linkCentral1: "ÜBER MICH",
            linkCentral2: "DIENSTLEISTUNGEN",
            linkCentral3: "KONTAKT",
            // Banner central / kurztext
            juliaNome: "Julia Campello Schlichting",
            juliaContexto: "Raum für neue Perspektiven", // [cite: 3]
            tc1: "In herausfordernden Lebensphasen kann es hilfreich sein, innezuhalten und sich begleiten zu lassen.", // [cite: 4]
            tc2: "Oft genügt schon ein kleiner Perspektivwechsel, um neue Möglichkeiten im Umgang mit Konflikten, Krisen und Veränderungen zu entdecken.", // [cite: 5]
            tc3: "Ich begleite Menschen dabei, ihre eigenen Ressourcen wiederzuentdecken, neue Sichtweisen zu entwickeln und stimmige Lösungen zu finden - in einem geschützten, wertschätzenden und vertraulichen Rahmen.", // [cite: 6]
            // Seção "Sobre mim"
            isobreMim: "Über mich", // [cite: 7]
            smp1: 'Ich bin <strong id="ifontStrong">systemische Therapeutin</strong> und begleite Familien, Paare – besonders in interkulturellen Beziehungen – und Einzelpersonen in Phasen von Veränderung, Krise und persönlicher Entwicklung.', // [cite: 8]
            smp2: 'Ich wurde in Rio de Janeiro geboren und habe in verschiedenen Ländern gelebt, unter anderem in den USA, Mexiko und Deutschland. Diese Erfahrungen haben meinen Blick auf Beziehungen, kulturelle Unterschiede und die Vielfalt von Lebensentwürfen stark geprägt.', // [cite: 9, 10]
            smp3: 'Seit über 20 Jahren lebe ich in München, wo ich mich ausgebildet und im sozialen Bereich mit den Schwerpunkten Interkulturalität und Kommunikation gearbeitet habe. In meiner Arbeit ist mir wichtig, einen geschützten und wertschätzenden Raum zu schaffen. <strong id="ifontStrong">Ich bin überzeugt, dass jeder Mensch eigene Ressourcen in sich trägt, um neue Wege zu finden</strong>, und verstehe meine Rolle als eine einfühlsame, respektvolle und unterstützende Begleitung.', // [cite: 11, 12, 13]
            // Seção "Serviços" / Therapeutische Begleitung
            iservicos: "Therapeutische Begleitung", // [cite: 14]
            svp1: 'In herausfordernden Zeiten ist es wichtig, eine Person zu finden, der man vertrauen kann, und sich für neue Perspektiven zu öffnen. Oft kann schon ein kleiner Perspektivwechsel dabei helfen, neue Wege im Umgang mit Belastungen zu entdecken.', // [cite: 15, 16]
            svp2: '<strong id="ifontStrong">Die systemische Therapie unterstützt dabei, eigene Ressourcen wiederzuentdecken und zu stärken sowie Lösungen zu entwickeln, die zu den eigenen Bedürfnissen und Grenzen passen.</strong>', // [cite: 17]
            svp3: 'Ich arbeite mit besonderer Sensibilität für interkulturelle Kontexte und unterschiedliche Lebensrealitäten. <strong id="ifontStrong">Gerne begleite ich Sie in diesem Prozess. Ob in therapeutischer Begleitung, Paarberatung, Familientherapie oder Elternberatung</strong> – wir richten den Blick auf Ihre Stärken und Fähigkeiten, um neue Strategien im Umgang mit Herausforderungen zu entwickeln, stets mit Respekt, Vertraulichkeit und Diskretion.', // [cite: 18, 19]
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

        // Novos elementos para o texto curto inicial (se existirem no seu HTML)
        if (document.getElementById("tc1")) document.getElementById("tc1").textContent = elementos[idioma].tc1;
        if (document.getElementById("tc2")) document.getElementById("tc2").textContent = elementos[idioma].tc2;
        if (document.getElementById("tc3")) document.getElementById("tc3").textContent = elementos[idioma].tc3;

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
