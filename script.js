document.addEventListener('DOMContentLoaded', () => {
    // Language translations
    const translations = {
        en: {
            greeting: "Hello,",
            intro: `My name is Vuttipat Prapai (Dew),<br>
                   an IT Student at Bangkok University,<br>
                   passionate about UX/UI and Graphic Design`,
            about: "About Me",
            aboutText: "I specialize in UX/UI design and graphic design, with a foundational understanding of Frontend development. I am proficient in design tools like Figma, Adobe Photoshop, and Adobe Illustrator, along with basic proficiency in Word and Excel for documentation and basic data analysis.",
            skills: "Skills",
            designUxUi: "Design & UX/UI",
            frontend: "Frontend Development",
            businessTools: "Business Tools",
            internshipGoals: "Internship Goals",
            goals: [
                "Gain real-world design experience in a professional setting",
                "Learn to collaborate with developers and design teams",
                "Improve UX/UI skills and user behavior analysis"
            ],
            resume: "View my resume (.pdf)",
            portfolio: "Projects",
            contact: "Contact",
            projectsTitle: "Selected Projects",
            contactTitle: "Want to offer me a job?",
            navAbout: "About",
            navPortfolio: "Projects",
            navContact: "Contact"
        },
        th: {
            greeting: "สวัสดีครับ,",
            intro: `ผมชื่อ วุฒิภัทร ประไพ (Dew),<br>
                   นักศึกษา IT มหาวิทยาลัยกรุงเทพ,<br>
                   ผู้หลงใหลในการออกแบบ UX/UI และกราฟิกดีไซน์`,
            about: "เกี่ยวกับฉัน",
            aboutText: "มีความสนใจและถนัดด้านการออกแบบ UX/UI, งานกราฟิกดีไซน์ รวมถึงเข้าใจพื้นฐานการพัฒนา Frontend ผมสามารถใช้งานเครื่องมือออกแบบอย่าง Figma, Adobe Photoshop, และ Adobe Illustrator ได้คล่อง พร้อมทั้งมีพื้นฐานการใช้ Word และ Excel ในระดับที่สามารถจัดทำเอกสารหรือวิเคราะห์ข้อมูลเบื้องต้นได้",
            skills: "ทักษะที่ถนัด",
            designUxUi: "Design & UX/UI",
            frontend: "Frontend Development",
            businessTools: "Business Tools",
            internshipGoals: "เป้าหมายในการฝึกงาน",
            goals: [
                "เพิ่มพูนประสบการณ์การออกแบบจริงในสถานการณ์ทำงานจริง",
                "เรียนรู้การทำงานร่วมกับนักพัฒนาและทีมออกแบบ",
                "พัฒนาทักษะ UX/UI และเข้าใจการวิเคราะห์พฤติกรรมผู้ใช้ให้ดียิ่งขึ้น"
            ],
            resume: "ดูเรซูเม่ของผม (.pdf)",
            portfolio: "โปรเจค",
            contact: "ติดต่อ",
            projectsTitle: "โปรเจคที่เลือกมาแสดง",
            contactTitle: "ต้องการเสนองานให้ผมไหม?",
            navAbout: "เกี่ยวกับ",
            navPortfolio: "โปรเจค",
            navContact: "ติดต่อ"
        }
    };

    let currentLang = 'en';

    // Intersection Observer for scroll animations
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, {
        threshold: 0.1
    });

    // Observe all sections
    document.querySelectorAll('section').forEach(section => {
        observer.observe(section);
    });

    // Smooth scroll for navigation
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                // Close mobile navbar if open
                const navbarCollapse = document.querySelector('.navbar-collapse');
                if (navbarCollapse.classList.contains('show')) {
                    navbarCollapse.classList.remove('show');
                }
                
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });

    // Add hover effect to skills
    document.querySelectorAll('.skill').forEach(skill => {
        skill.addEventListener('mouseenter', () => {
            skill.style.transform = 'translateY(-5px)';
        });
        skill.addEventListener('mouseleave', () => {
            skill.style.transform = 'translateY(0)';
        });
    });

    function updateContent(lang) {
        // Add fade out and fade in effect
        const content = document.querySelector('.container');
        content.style.opacity = '0';
        
        setTimeout(() => {
            // Update all content
            document.querySelector('.hero h1').textContent = translations[lang].greeting;
            document.querySelector('.intro').innerHTML = translations[lang].intro;
            document.querySelector('.about h2').textContent = translations[lang].about;
            document.querySelector('.about > p').textContent = translations[lang].aboutText;

            // Update navigation
            document.querySelector('a[href="#about"]').textContent = translations[lang].navAbout;
            document.querySelector('a[href="#projects"]').textContent = translations[lang].navPortfolio;
            document.querySelector('a[href="#contact"]').textContent = translations[lang].navContact;

            // Update skills
            document.querySelector('.about h3:nth-of-type(1)').textContent = translations[lang].skills;
            document.querySelector('.skill-category:nth-of-type(1) h4').textContent = translations[lang].designUxUi;
            document.querySelector('.skill-category:nth-of-type(2) h4').textContent = translations[lang].frontend;
            document.querySelector('.skill-category:nth-of-type(3) h4').textContent = translations[lang].businessTools;

            // Update goals
            document.querySelector('.about h3:nth-of-type(2)').textContent = translations[lang].internshipGoals;
            const goalsList = document.querySelectorAll('.goals li');
            translations[lang].goals.forEach((text, index) => {
                if (goalsList[index]) {
                    const icon = goalsList[index].querySelector('i');
                    goalsList[index].innerHTML = '';
                    goalsList[index].appendChild(icon);
                    goalsList[index].appendChild(document.createTextNode(text));
                }
            });

            // Update portfolio and contact sections
            document.querySelector('.portfolio h2').textContent = translations[lang].projectsTitle;
            document.querySelector('.contact h2').textContent = translations[lang].contactTitle;

            // Update resume button
            document.querySelector('.resume-btn').innerHTML = `
                <i class="bi bi-file-earmark-text"></i>
                ${translations[lang].resume}
            `;

            // Update HTML lang attribute
            document.documentElement.lang = lang;
            
            // Update active state of language buttons
            document.querySelectorAll('.lang-btn').forEach(btn => {
                btn.classList.remove('active');
                if (btn.getAttribute('data-lang') === lang) {
                    btn.classList.add('active');
                }
            });
            
            // Fade content back in
            content.style.opacity = '1';
        }, 300);
    }

    // Add click event listeners to language buttons
    document.querySelectorAll('.lang-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            const newLang = btn.getAttribute('data-lang');
            if (newLang !== currentLang) {
                currentLang = newLang;
                updateContent(currentLang);
            }
        });
    });

    // Initialize content in English
    updateContent(currentLang);
}); 