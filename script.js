
    const container = document.getElementById('content-container');
    let lessonCounter = 0;
    let hintTimeout;
    let hintElement;
    let currentLessonSet = 1;
    let continueButtonShown = false;

    const lessonContent = [
        {
            header: "안녕하세요",
            english: "Hello",
            description: ""
        },
        {
            header: "Welcome to an introductory lesson on constructing basic Korean sentences.",
            description: "This website will assume no prior knowledge of the Korean language, though those well-versed in Hangul will get the most out of this experience."
        },
        {
            header: "Here's what we'll roughly cover:", 
            description: "1. Nouns (e.g. I, You, Evan)<br>2. Verbs (e.g. to eat, to go)<br>3. Sentence construction<br>4. Practice using scenarios that I've been through at Ewha Womans University<br>5. Next steps, and how I'll personally be continuing my Korean learning"
        },
        {
            header: "By the end of this lesson, you should be able to write things like \"I eat food\" or \"I am a student!\"",
            description: ""
        }
    ];

    const lessonContent2 = [
        {
            header: "<span style='color: red'>Important notes before we begin:</span>",
            description: ""
        },
        {
            header: "<span style='font-size: .75em'>This website is created primarily as a final project for RESA 2025 (Rutgers' Ewha Study Abroad Program)</span>",
            description: "If you're not my professor (hello Prof. Park!), then there's other vastly more comprehensive resources that might suit your needs better."
        },
        {
            header: "<span style='font-size: .75em'>This website jumps straight into grammar, assuming you know a couple crucial prerequisite skills:</span>",
            description: "1. You are familiar with the Korean alphabet (Hangul)<br>2. You can type in Hangul, or otherwise have a way for your browser to type in Hangul<br><br>Without these, you will still be able to go through the lessons, but their real world viability will be limited.<br><br>If you want to learn Hangul, you can find an interactive comprehensive online resource <a href='http://letslearnhangul.com/level/1/round/1/pre' target='_blank'>here</a>."
        },
        {
            header: "<span style='font-size: .75em'>The order of the lessons will strictly follow the order of the topics I've covered at Ewha Womans University</span>",
            description: "(...it's supposed to be a final project about my time in Korea, after all.)"
        },
        {
            header: "<span style='font-size: .75em'>Your progress is not saved! You must complete this website in one-shot.</span>",
            description: "(...but it's not that long, so it's not a big deal if you have to leave and come back later)"
        }
    ];

    const lessonContent3 = [
        {
            header: "Let's start with the nouns.",
            description: "You've probably heard that these are the words that represent people, places, and things."
        },
        {
            header: "In Korean, they're no different!",
            description: "At the beginning of the second week at Ewha (the first week was spent on Hangul), we were given a list of nouns to memorize.<br><br>Here, we present a small sample."
        },
        {
            header: "사과 - apple",
            description: ""
        },
        {
            header: "돼지 - pig",
            description: ""
        },
        {
            header: "사람 - person",
            description: ""
        },
        {
            header: "나 - I",
            description: ""
        },
        {
            header: "너 - You",
            description: ""
        },
        {
            header: "Simple! ",
            description: "You can find a comprehensive list of nouns that we learned at Ewha in their New Level 1 textbook, page 40."
        },
    ];

    const lessonContent4 = [
        {
            header: "Entering the third week at Ewha, we learned some basic verbs.",
            description: "And yes- it's just like in English. Verbs describe actions or states of being."
        },
        {
            header: "Here's a sampler of the verbs that we learned at Ewha:",
            description: ""
        },
        {
            header: "먹다 - to eat",
            description: ""
        },
        {
            header: "놀다 - to play",
            description: "Notice how the verbs all end in 다? This isn't a coincidence- in general, verbs in Korean end in 다.<br><br>So if you ever look up a word in a dictionary, and it ends in 다, it's probably a verb."
        },
        {
            header: "가다 - to go",
            description: ""
        },
        {
            header: "운동하다 - to (do) exercise",
            description: "You'll be seeing 하다 a lot- it can be appended to nouns to make them verbs.<br><br>So, if 운동하다 is to (do) exercise, then 운동 is the exercise itself."
        },
        {
            header: "If you want to see more, you can find the list of verbs that we learned at Ewha in their New Level 1 textbook, page 70",
            description: ""
        }
    ];

    const lessonContent5 = [
        {
            header: "But verbs in Korean have to be conjugated first before they can be used in a sentence.",
            description: "(Actually, the beginner Ewha class doesn't go over verb conjugations and instead gives verbs directly to the students in the conjugated form, so this lesson is a bit of a divergence from the Ewha curriculum.) <br><br>(But on a more personal note, I also think it's super important to know.)"
        },
        {
            header: "First: In Korean, we have to determine the honor level of the person we are talking to.",
            description: "This is where the Chinese influence in Korean language shows through: we change the way we speak to people based on their honor level."
        },
        {
            header: "We have different honor levels for younger people, older people, and people that are in a position of authority. <br><br>As well as some others!<br>It's confusing.",  
            description: "...but that's fully beyond the scope of Ewha's beginner curriculum (perhaps luckily), so we'll just focus on a single one for now."
        },
        
    ];

    const lessonContent6 = [
        {
            header: "Introducing casual politeness (referred to in Korean as 해요체)!",
            description: "You can confidently use this when you're talking to strangers or people you don't know well."
        },
        {
            header: "\"But how do I use it??\"",
            description: "Drop the 다, and add 아요 or 어요 to the end of the verb depending on the final vowel."
        },
        {
            header: "아요",
            description: "Use this when the verb ends in 아 or 오.<br><br>So, 놀다 becomes 놀아요 because it contains an ㅗ."
        },
        {
            header: "어요",
            description: "Use this everywhere else.<br><br>So, 먹다 becomes 먹어요."
        }
    ];

    const lessonContent7 = [
        {
            header: "Okay, let's try to put it all together.",
            description: ""
        },
        {
            header: "How would we say \"I eat apple\" in Korean?",
            description: ""
        },
        {
            header: "It seems simple enough, right?",
            description: "I mean, just put the 나 to mean 'I', conjugate 먹다 to 먹어요 to mean 'eat', and the 사과 to mean 'apple'."
        },
        {
            header: "So is it just 나 먹어요 사과?", 
            description: ""
        },
        {
            header: "<span style='color: red; font-size: 5.0em'>NOPE.</span>",
            description: "In Korean, we have to make sure the subject (나) and the object (사과) come before the verb (먹어요). Sentences in Korean always end with the verb!"
        },
        {
            header: "So a more correct way to say \"I eat apple\" in Korean is 나 사과를 먹어요.",
            description: ""
        }
    ];

    const allLessonContent = [
        lessonContent,
        lessonContent2, 
        lessonContent3,
        lessonContent4,
        lessonContent5,
        lessonContent6,
        lessonContent7
    ];

    function showHint() {
        if (!hintElement && lessonCounter == 1 && currentLessonSet == 1) {
            hintElement = document.createElement('p');
            hintElement.textContent = '(...by the way, you can press ENTER to continue)';
            hintElement.style.color = 'rgba(255, 255, 255, 1)';
            hintElement.style.fontSize = '0.8em';
            hintElement.style.marginTop = '20px';
            hintElement.style.fontStyle = 'italic';
            hintElement.style.animation = 'fadeInGlow 0.5s ease-out forwards';
            container.appendChild(hintElement);
        }
    }

    function hideHint() {
        if (hintElement) {
            hintElement.remove();
            hintElement = null;
        }
        if (hintTimeout) {
            clearTimeout(hintTimeout);
            hintTimeout = null;
        }
    }

    function resetHintTimer() {
        hideHint();
        hintTimeout = setTimeout(showHint, 3000);
    }


    function showNextPageButton() {
        
        const nextButton = document.createElement('button');
        nextButton.textContent = 'Continue';
        nextButton.className = 'next-page-button text-element';
        
        nextButton.addEventListener('click', () => {
            container.innerHTML = '';
            lessonCounter = 0;
            currentLessonSet++;
            hideHint();
            setTimeout(showNextElement, 500);
        });
        
        container.appendChild(nextButton);
    }

    function showNextElement() {
        hideHint();
        
        const currentContent = allLessonContent[currentLessonSet - 1];
        
        if (lessonCounter < currentContent.length) {
            const lesson = currentContent[lessonCounter];
            
            const headerElement = document.createElement('h2');
            headerElement.className = 'lesson-header text-element';
            
            const descriptionElement = document.createElement('p');
            descriptionElement.className = 'lesson-description text-element';
            descriptionElement.style.fontSize = '0.9em';
            descriptionElement.style.color = 'light-gray';
            descriptionElement.style.marginTop = '10px';
            descriptionElement.innerHTML = lesson.description;
            
            if (lessonCounter === 0 && currentLessonSet === 1) {
                headerElement.innerHTML = lesson.header;
                container.appendChild(headerElement);
                container.appendChild(descriptionElement);
                
                setTimeout(() => {
                    let flickerCount = 0;
                    const flickerInterval = setInterval(() => {
                        if (flickerCount % 2 === 0) {
                            headerElement.textContent = lesson.english;
                        } else {
                            headerElement.textContent = lesson.header;
                        }
                        flickerCount++;
                        
                        if (flickerCount >= 6) {
                            clearInterval(flickerInterval);
                            headerElement.textContent = lesson.english;
                            resetHintTimer();
                        }
                    }, 150);
                }, 2000);
            } else {
                headerElement.innerHTML = lesson.header;
                container.appendChild(headerElement);
                container.appendChild(descriptionElement);
                resetHintTimer();
            }
            
            lessonCounter++;
            
            if (lessonCounter === currentContent.length && currentLessonSet < allLessonContent.length) {
                setTimeout(showNextPageButton, 1000);
            }
        } else {
            return;
        }
    }

    setTimeout(showNextElement, 500);

    document.addEventListener('keydown', (event) => {
        if (event.key === 'Enter') {
            showNextElement();
        }
    });
