import RenderFooter from "../common/Footer.js";
import RenderHeader from "../common/Header.js";

// ===========Global Variable ====================
// const footer = document.getElementById("footerID");
const sessionButton = document.getElementById('sessionButton');
const sessionDropdown = document.getElementById('sessionDropdown');
const currentSessionSpan = document.getElementById('currentSession');
const currentYear = "2025/2026"
const pageName = 'Executives';
const sessions = [
    {
        year: "2025/2026",
        current: true, //is this the current year?
    },
    {
        year: "2024/2025",
        current: false,
    }
]
const sessionData = [
    {
        year : "2025/2026",
        leaders: [
            {
                name: 'Samson Namanya',
                position: 'President',
                yearOfStudy: '4th Year',
                major: "Transportation Engineering",
                bio: "School of Engineering Board member with a passion for modern and intelligent transportation systems and structural design. Focused on practical projects and student initiatives that develop skills, inspire innovation, and prepare members for professional success.",
                image: "samsonnamanya.jpg",
                email: "bcet22-snamanya@mubas.ac.mw",
                linkedIn: "https://www.linkedin.com/in/samson-namanya-3278952b3/"
            },
            {
                name: "Hope Mzati Tsonga",
                position: 'Vice President',
                yearOfStudy: '3rd Year',
                major: "Transportation Engineering",
                bio: " ",
                image: "https://images.unsplash.com/photo-1740153204804-200310378f2f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBzdHVkZW50JTIwbGVhZGVyJTIwcG9ydHJhaXR8ZW58MXx8fHwxNzY0MjU0NTY5fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
                email: "bcet22-snamanya@mubas.ac.mw",
                linkedIn: "https://www.linkedin.com/in/samson-namanya-3278952b3/"
            }],
        executiveMembers: [

            {
                name: 'Yamikani Ngaiyaye',
                position: 'General Secretary',
                yearOfStudy: '4th Year',
                major: "Structural Engineering",
                bio: "Short bio for Yamie",
                image: "https://images.unsplash.com/photo-1740153204804-200310378f2f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBzdHVkZW50JTIwbGVhZGVyJTIwcG9ydHJhaXR8ZW58MXx8fHwxNzY0MjU0NTY5fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
                email: "bcet22-snamanya@mubas.ac.mw",
                linkedIn: "https://www.linkedin.com/in/samson-namanya-3278952b3/"
            },
            {
                name: 'Glory Nyirenda',
                position: 'Publicity Secretary',
                yearOfStudy: '4th Year',
                major: "Transportation Engineering",
                bio: "Short bio for Glory",
                image: "https://images.unsplash.com/photo-1740153204804-200310378f2f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBzdHVkZW50JTIwbGVhZGVyJTIwcG9ydHJhaXR8ZW58MXx8fHwxNzY0MjU0NTY5fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
                email: "bcet22-snamanya@mubas.ac.mw",
                linkedIn: "https://www.linkedin.com/in/samson-namanya-3278952b3/"
            },
            {
                name: 'Memory Chikwawa',
                position: 'Treasurer',
                yearOfStudy: '3rd Year',
                major: "Transportation Engineering",
                bio: "Short bio for Memory",
                image: "https://images.unsplash.com/photo-1740153204804-200310378f2f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBzdHVkZW50JTIwbGVhZGVyJTIwcG9ydHJhaXR8ZW58MXx8fHwxNzY0MjU0NTY5fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
                email: "bcet22-snamanya@mubas.ac.mw",
                linkedIn: "https://www.linkedin.com/in/samson-namanya-3278952b3/"
            },
            {
                name: 'Edith Kabito',
                position: 'Social Media Director',
                yearOfStudy: '4th Year',
                major: "Structural Engineering",
                bio: "Short bio for Edith",
                image: "https://images.unsplash.com/photo-1740153204804-200310378f2f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBzdHVkZW50JTIwbGVhZGVyJTIwcG9ydHJhaXR8ZW58MXx8fHwxNzY0MjU0NTY5fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
                email: "bcet22-snamanya@mubas.ac.mw",
                linkedIn: "https://www.linkedin.com/in/samson-namanya-3278952b3/"
            },
            {
                name: 'Apatsa Kambale',
                position: 'Merchandise Director',
                yearOfStudy: '3rd Year',
                major: "Water Engineering",
                bio: "Short bio for Rita",
                image: "https://images.unsplash.com/photo-1740153204804-200310378f2f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBzdHVkZW50JTIwbGVhZGVyJTIwcG9ydHJhaXR8ZW58MXx8fHwxNzY0MjU0NTY5fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
                email: "bcet22-snamanya@mubas.ac.mw",
                linkedIn: "https://www.linkedin.com/in/samson-namanya-3278952b3/"
            },
            {
                name: 'Dennis Dickson',
                position: 'Executive Member',
                yearOfStudy: '2nd Year',
                major: "Civil Engineering",
                bio: "Short bio for Dennis",
                image: "https://images.unsplash.com/photo-1740153204804-200310378f2f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBzdHVkZW50JTIwbGVhZGVyJTIwcG9ydHJhaXR8ZW58MXx8fHwxNzY0MjU0NTY5fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
                email: "bcet22-snamanya@mubas.ac.mw",
                linkedIn: "https://www.linkedin.com/in/samson-namanya-3278952b3/"
            },
            {
                name: 'Ellen Nothale',
                position: 'Executive Member',
                yearOfStudy: '3rd Year',
                major: "Transportation Engineering",
                bio: "Short bio for Ellen",
                image: "https://images.unsplash.com/photo-1740153204804-200310378f2f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBzdHVkZW50JTIwbGVhZGVyJTIwcG9ydHJhaXR8ZW58MXx8fHwxNzY0MjU0NTY5fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
                email: "bcet22-snamanya@mubas.ac.mw",
                linkedIn: "https://www.linkedin.com/in/samson-namanya-3278952b3/"
            },
            {
                name: 'Hafiza Matola',
                position: 'Executive Member',
                yearOfStudy: '4th Year',
                major: "Transportation Engineering",
                bio: "Short bio for Edna",
                image: "https://images.unsplash.com/photo-1740153204804-200310378f2f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBzdHVkZW50JTIwbGVhZGVyJTIwcG9ydHJhaXR8ZW58MXx8fHwxNzY0MjU0NTY5fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
                email: "bcet22-snamanya@mubas.ac.mw",
                linkedIn: "https://www.linkedin.com/in/samson-namanya-3278952b3/"
            },
            {
                name: 'Praise Ngoma',
                position: 'Executive Member',
                yearOfStudy: '4th Year',
                major: "Structural Engineering",
                bio: "The desire of a brighter infrastructural future, being the best in engineering its what I do ",
                image: "praisengoma.jpg",
                email: "bcew22-pngoma@mubas.ac.mw",
                linkedIn: "https://www.linkedin.com/in/praise-ngoma-255635340/"
            },
        ]
    },
    {
        year: "2024/2025",
        leaders: [
            {
                name: 'Ruth Msyali',
                position: 'President',
                yearOfStudy: '5th Year',
                major: "Structural Engineering",
                bio: "short bio for Ruth",
                image: "ruthmsyali.jpg",
                email: "bcet22-snamanya@mubas.ac.mw",
                linkedIn: "https://www.linkedin.com/in/samson-namanya-3278952b3/"
            },
            {
                name: "Sibusiso Gombachika",
                position: 'Vice President',
                yearOfStudy: '4th Year',
                major: "Structural Engineering",
                bio: "Short bio for Sibu ",
                image: "sibusisogombachika.jpg",
                email: "bcet22-snamanya@mubas.ac.mw",
                linkedIn: "https://www.linkedin.com/in/samson-namanya-3278952b3/"
            }
        ],
        executiveMembers:[
        {
            name: 'Thabiso Chokocha',
            position: 'General Secretary',
            yearOfStudy: '4th Year',
            major: "Structural Engineering",
            bio: "A highly passionate Structural Engineering student with a strong ambition to serve the engineering world across Malawi and abroad, demonstrating both effective leadership and technical problem-solving skills.",
            image: "thabisochokocha.jpg",
            email: "thabisofadweck@gmail.com",
            linkedIn: "https://www.linkedin.com/in/thabiso-fadweck-chokocha-6bbba62a1/"
        },
        {
            name: "Gracia Kamphinda",
            position: 'Public Secretary',
            yearOfStudy: '4th Year',
            major: "Structural Engineering",
            bio: "Short bio for Gracca",
            image: "graciakamphinda.jpg",
            email: "bcet22-snamanya@mubas.ac.mw",
            linkedIn: "https://www.linkedin.com/in/samson-namanya-3278952b3/"
        },
        {
            name: 'Jessica Ghobede',
            position: 'Treasurer',
            yearOfStudy: '5th Year',
            major: "Structural Engineering",
            bio: "short bio for jessie",
            image: "jessicaghobede.jpg",
            email: "bcet22-snamanya@mubas.ac.mw",
            linkedIn: "https://www.linkedin.com/in/samson-namanya-3278952b3/"
        },
        {
            name: "Tulibake Msiska",
            position: 'Social Media Director',
            yearOfStudy: '4th Year',
            major: "Structural Engineering",
            bio: "Short bio for tuli",
            image: "tulibakemsiska.jpg",
            email: "bcet22-snamanya@mubas.ac.mw",
            linkedIn: "https://www.linkedin.com/in/samson-namanya-3278952b3/"
        },
        {
            name: 'Melissa Gondwe',
            position: 'Merchandise Director',
            yearOfStudy: '3rd Year',
            major: "Water Engineering",
            bio: "Short bio for melissa",
            image: 'melissagondwe.jpg',
            email: 'bcet22-snamanya@mubas.ac.mw',
            linkedIn: 'https://www.linkedin.com/in/samson-namanya-3278952b3/'
        }
    ]
    }
]
let session = currentYear;

//=================================================

// ========to be done on load ===============
RenderSessionDropdown();
RenderExecutivePage();

//===========================================


// Mobile menu toggle
const mobileMenuBtn = document.getElementById('mobileMenuBtn');
const mobileMenu = document.getElementById('mobileMenu');

mobileMenuBtn.addEventListener('click', () => {
    mobileMenu.classList.toggle('active');
});

// Session dropdown functionality


sessionButton.addEventListener('click', (e) => {
    e.stopPropagation();
    sessionButton.classList.toggle('active');
    sessionDropdown.classList.toggle('active');
});


// Close dropdown when clicking outside
document.addEventListener('click', (e) => {
    if (!sessionButton.contains(e.target) && !sessionDropdown.contains(e.target)) {
        sessionButton.classList.remove('active');
        sessionDropdown.classList.remove('active');
    }
});

// Handle session selection

//let leaders = [];
// executiveMembers = [];

const dropdownItems = document.querySelectorAll('.dropdown-item');
dropdownItems.forEach(item => {
    item.addEventListener('click', (e) => {
        e.preventDefault();
        session = item.getAttribute('data-session');

        // Update current session display
        currentSessionSpan.textContent = `ACADEMIC SESSION ${session}`;

        // Update current class
        dropdownItems.forEach(i => i.classList.remove('current'));
        item.classList.add('current');

        // Close dropdown
        sessionButton.classList.remove('active');
        sessionDropdown.classList.remove('active');

        RenderExecutivePage();
    });
});

// Intersection Observer for scroll animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.animationPlayState = 'running';
        }
    });
}, observerOptions);

// Observe all animated elements
document.querySelectorAll('.animate-slide-up').forEach(el => {
    el.style.animationPlayState = 'paused';
    observer.observe(el);
});

// Set current year in footer
document.getElementById('currentYear').textContent = new Date().getFullYear();



//===========RENDER SESSION DROPDOWN ============
function RenderSessionDropdown() {
    sessionDropdown.innerHTML = ``;
    sessions.forEach((session) => {
        sessionDropdown.innerHTML += `
                    <a href="#" class="dropdown-item ${session.current? 'current' : ''}" data-session="${session.year}">
                        <span class="dropdown-year">${session.year}</span>
                         <span class="dropdown-label">${session.current? 'Current Session' : ''}</span> 
                    </a>`
    })
}
// ========= LEADERSHIP CORE =================
function RenderLeaders(Leaders) {

    const leadershipCore = document.getElementById('leadership-core');
    leadershipCore.innerHTML = ``;
    Leaders.forEach((leader) => {
        const leaderGrid = `<div class="exec-card bg-white rounded-xl shadow-lg overflow-hidden animate-slide-up delay-1">
                    <div class="photo-wrapper">
                        <img src=${leader.image? leader.image : "https://images.unsplash.com/photo-1740153204804-200310378f2f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBzdHVkZW50JTIwbGVhZGVyJTIwcG9ydHJhaXR8ZW58MXx8fHwxNzY0MjU0NTY5fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"} alt="${leader.position}" class="exec-photo">
                        <div class="photo-overlay">
                            <div class="flex space-x-2">
                                <a href= ${leader.linkedIn} class="social-icon">
                                    <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                                        <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                                    </svg>
                                </a>
                                <a href="mailto:${leader.email}" class="social-icon">
                                    <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
                                    </svg>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div class="exec-content p-6">
                        <span class="position-badge leadership-badge">${leader.position}</span>
                        <h3 class="mt-3 mb-1" style="color: var(--ices-navy);">${leader.name}</h3>
                        <p class="text-sm mb-3" style="color: var(--ices-orange);">${leader.yearOfStudy} • ${leader.major}</p>
                        <p class="text-gray-600" style="line-height: 1.6;">
                          ${leader.bio}
                        </p>
                    </div>
                </div>`
        leadershipCore.innerHTML += leaderGrid;
    })
}

//======== EXECUTIVE CORE ====================
function RenderExecutiveMembers(eMembers){
    const executiveCore = document.getElementById('executive-board');
    executiveCore.innerHTML = ``;

    eMembers.forEach(member => {
        // language=HTML
        const executiveMemberGrid = `<div class="exec-card bg-white rounded-xl shadow-lg overflow-hidden animate-slide-up delay-3">
                    <div class="photo-wrapper">
                        <img src=${member.image? member.image : "https://images.unsplash.com/photo-1740153204804-200310378f2f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBzdHVkZW50JTIwbGVhZGVyJTIwcG9ydHJhaXR8ZW58MXx8fHwxNzY0MjU0NTY5fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"}
                             alt=${member.position} class="exec-photo">
                        <div class="photo-overlay">
                            <div class="flex space-x-2">
                                <a href=${member.linkedIn} class="social-icon">
                                    <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                                        <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                                    </svg>
                                </a>
                                <a href="mailto:${member.email}" class="social-icon">
                                    <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
                                    </svg>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div class="exec-content p-5">
                        <span class="position-badge">${member.position}</span>
                        <h4 class="mt-3 mb-1" style="color: var(--ices-navy);">${member.name}</h4>
                        <p class="text-sm mb-2" style="color: var(--ices-orange);">${member.yearOfStudy} • ${member.major}</p>
                        <p class="text-gray-600 text-sm" style="line-height: 1.6;">
                            ${member.bio}
                        </p>
                    </div>
                </div>`
        executiveCore.innerHTML += executiveMemberGrid;
    })
    RenderFooter();
}

// ==========RENDER THE PAGE =================
function RenderExecutivePage()
{
    /**
     * RenderSessionDropdown();
     */
    RenderHeader(pageName);
    sessionData.forEach((sData) => {
        let leaders;
        let executiveMembers;
        if (sData.year === session) {
            leaders = sData.leaders;
            executiveMembers = sData.executiveMembers;
            console.log(leaders)
            RenderLeaders(leaders);
            RenderExecutiveMembers(executiveMembers);
            // RenderSessionDropdown();
        }
    })
}