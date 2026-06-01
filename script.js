// Career data from CSV
const careersData = [
    {
        title: "Architecture & Engineering",
        education: "Bachelors",
        minCgpa: 7.5,
        skills: ["drawing", "design", "math", "planning", "teamwork"],
        interests: ["buildings", "construction", "design"]
    },
    {
        title: "Arts & Media",
        education: "HighSchool",
        minCgpa: 6.5,
        skills: ["art", "editing", "painting", "writing", "filming"],
        interests: ["music", "acting", "creativity"]
    },
    {
        title: "Business & Management",
        education: "Bachelors",
        minCgpa: 5.2,
        skills: ["leadership", "planning", "finance", "talking", "organizing"],
        interests: ["business", "startups", "teamwork"]
    },
    {
        title: "Communication",
        education: "Bachelors",
        minCgpa: 5.0,
        skills: ["writing", "speaking", "editing", "online", "marketing"],
        interests: ["social", "speech", "sharing"]
    },
    {
        title: "Community Service",
        education: "HighSchool",
        minCgpa: 2.0,
        skills: ["helping", "listening", "caring", "planning", "teamwork"],
        interests: ["people", "society", "volunteering"]
    },
    {
        title: "Education",
        education: "Bachelors",
        minCgpa: 7.0,
        skills: ["teaching", "explaining", "reading", "patience", "organizing"],
        interests: ["learning", "knowledge", "kids"]
    },
    {
        title: "Science & Technology",
        education: "Bachelors",
        minCgpa: 7.5,
        skills: ["coding", "testing", "analyzing", "researching", "problem-solving"],
        interests: ["discovery", "innovation", "experiments"]
    },
    {
        title: "Repair & Maintenance",
        education: "HighSchool",
        minCgpa: 2.5,
        skills: ["fixing", "electrical", "mechanical", "safety", "precision"],
        interests: ["machines", "repair", "tools"]
    },
    {
        title: "Farming & Forestry",
        education: "HighSchool",
        minCgpa: 4.0,
        skills: ["planting", "caring", "managing", "operating", "inspection"],
        interests: ["nature", "fields", "environment"]
    },
    {
        title: "Government & Public Service",
        education: "Bachelors",
        minCgpa: 8.0,
        skills: ["discipline", "honesty", "teamwork", "planning", "safety"],
        interests: ["nation", "law", "service"]
    },
    {
        title: "Healthcare",
        education: "Bachelors",
        minCgpa: 6.5,
        skills: ["caring", "observing", "checking", "patience", "learning"],
        interests: ["health", "people", "medicine"]
    },
    {
        title: "Law & Politics",
        education: "Bachelors",
        minCgpa: 5.5,
        skills: ["speaking", "debating", "reading", "leading", "writing"],
        interests: ["law", "justice", "leadership"]
    },
    {
        title: "Sales & Marketing",
        education: "Bachelors",
        minCgpa: 4.8,
        skills: ["selling", "talking", "designing", "managing", "planning"],
        interests: ["products", "marketing", "people"]
    },
    {
        title: "Culinary & Hospitality",
        education: "HighSchool",
        minCgpa: 4.0,
        skills: ["cooking", "cleaning", "serving", "organizing", "tasting"],
        interests: ["food", "travel", "hosting"]
    },
    {
        title: "Aviation & Transportation",
        education: "Bachelors",
        minCgpa: 7.2,
        skills: ["control", "navigating", "focus", "discipline", "safety"],
        interests: ["travel", "flying", "vehicles"]
    },
    {
        title: "Defense & Law Enforcement",
        education: "HighSchool",
        minCgpa: 6.5,
        skills: ["discipline", "fitness", "patience", "command", "courage"],
        interests: ["protection", "safety", "service"]
    },
    {
        title: "Sports & Fitness",
        education: "HighSchool",
        minCgpa: 3.0,
        skills: ["energy", "strength", "focus", "training", "discipline"],
        interests: ["sports", "running", "fitness"]
    },
    {
        title: "Environment & Sustainability",
        education: "Bachelors",
        minCgpa: 3.0,
        skills: ["research", "observation", "fieldwork", "planning", "awareness"],
        interests: ["nature", "planet", "ecology"]
    },
    {
        title: "Hospitality & Tourism",
        education: "HighSchool",
        minCgpa: 2.0,
        skills: ["serving", "speaking", "arranging", "planning", "caring"],
        interests: ["travel", "people", "events"]
    },
    {
        title: "Fashion & Beauty",
        education: "HighSchool",
        minCgpa: 4.5,
        skills: ["styling", "designing", "creativity", "color", "grooming"],
        interests: ["clothing", "beauty", "fashion"]
    },
    {
        title: "Manufacturing",
        education: "HighSchool",
        minCgpa: 3.5,
        skills: ["assembling", "inspecting", "machine", "teamwork", "timing"],
        interests: ["production", "making", "process"]
    },
    {
        title: "Emergency Services",
        education: "HighSchool",
        minCgpa: 2.5,
        skills: ["speed", "focus", "bravery", "help", "strength"],
        interests: ["rescue", "people", "emergencies"]
    },
    {
        title: "Animal Care",
        education: "HighSchool",
        minCgpa: 3.0,
        skills: ["caring", "cleaning", "feeding", "handling", "observing"],
        interests: ["pets", "animals", "nature"]
    }
];

// Extract unique skills and interests
const allSkills = [...new Set(careersData.flatMap(c => c.skills))].sort();
const allInterests = [...new Set(careersData.flatMap(c => c.interests))].sort();

// User data
let userProfile = null;
let selectedSkills = [];
let selectedInterests = [];

// Initialize the app
document.addEventListener('DOMContentLoaded', () => {
    initializeSkillsAndInterests();
    populateCareersTable();
    setupEventListeners();
});

// Initialize skills and interests selectors
function initializeSkillsAndInterests() {
    const skillsContainer = document.getElementById('skills-container');
    const interestsContainer = document.getElementById('interests-container');

    // Populate skills
    allSkills.forEach(skill => {
        const tag = document.createElement('div');
        tag.className = 'skill-tag';
        tag.textContent = skill;
        tag.dataset.skill = skill;
        tag.addEventListener('click', () => toggleSkill(tag, skill));
        skillsContainer.appendChild(tag);
    });

    // Populate interests
    allInterests.forEach(interest => {
        const tag = document.createElement('div');
        tag.className = 'interest-tag';
        tag.textContent = interest;
        tag.dataset.interest = interest;
        tag.addEventListener('click', () => toggleInterest(tag, interest));
        interestsContainer.appendChild(tag);
    });
}

// Toggle skill selection
function toggleSkill(element, skill) {
    element.classList.toggle('selected');
    if (selectedSkills.includes(skill)) {
        selectedSkills = selectedSkills.filter(s => s !== skill);
    } else {
        selectedSkills.push(skill);
    }
}

// Toggle interest selection
function toggleInterest(element, interest) {
    element.classList.toggle('selected');
    if (selectedInterests.includes(interest)) {
        selectedInterests = selectedInterests.filter(i => i !== interest);
    } else {
        selectedInterests.push(interest);
    }
}

// Populate careers table
function populateCareersTable() {
    const tbody = document.getElementById('careers-tbody');
    tbody.innerHTML = '';

    careersData.forEach(career => {
        const row = tbody.insertRow();
        row.innerHTML = `
            <td><strong>${career.title}</strong></td>
            <td>${career.education}</td>
            <td>${career.minCgpa.toFixed(1)}</td>
            <td>${career.skills.join(', ')}</td>
            <td>${career.interests.join(', ')}</td>
        `;
    });
}

// Setup event listeners
function setupEventListeners() {
    // Form submission
    document.getElementById('profile-form').addEventListener('submit', handleFormSubmit);

    // Navigation buttons
    document.querySelectorAll('.nav-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            const targetSection = btn.dataset.section;
            switchSection(targetSection);

            // Update active nav button
            document.querySelectorAll('.nav-btn').forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
        });
    });

    // Back button
    document.getElementById('back-btn').addEventListener('click', () => {
        switchSection('profile-section');
        document.querySelectorAll('.nav-btn').forEach(b => b.classList.remove('active'));
        document.querySelector('[data-section="profile-section"]').classList.add('active');
    });
}

// Handle form submission
function handleFormSubmit(e) {
    e.preventDefault();

    // Validate skills and interests
    if (selectedSkills.length === 0 || selectedInterests.length === 0) {
        alert('Please select at least one skill and one interest!');
        return;
    }

    // Get form data
    const formData = new FormData(e.target);
    userProfile = {
        name: formData.get('name'),
        age: parseInt(formData.get('age')),
        education: formData.get('education'),
        cgpa: parseFloat(formData.get('cgpa')),
        skills: [...selectedSkills],
        interests: [...selectedInterests]
    };

    // Calculate recommendations
    const recommendations = calculateRecommendations(userProfile);

    // Display results
    displayResults(userProfile, recommendations);

    // Switch to results section
    switchSection('results-section');
    document.querySelectorAll('.nav-btn').forEach(b => b.classList.remove('active'));
    document.querySelector('[data-section="results-section"]').classList.add('active');
}

// Calculate career recommendations
function calculateRecommendations(user) {
    const recommendations = [];

    careersData.forEach(career => {
        // Check eligibility
        if (!isEligible(user, career)) {
            return; // Skip if not eligible
        }

        // Calculate match score (Skills: 60%, Interests: 40%)
        const skillsMatched = career.skills.filter(s => user.skills.includes(s)).length;
        const interestsMatched = career.interests.filter(i => user.interests.includes(i)).length;

        const skillScore = (skillsMatched / career.skills.length) * 60;
        const interestScore = (interestsMatched / career.interests.length) * 40;
        const totalScore = skillScore + interestScore;

        // Only include careers with some match
        if (totalScore > 0) {
            recommendations.push({
                career: career,
                score: totalScore,
                skillsMatched: skillsMatched,
                interestsMatched: interestsMatched
            });
        }
    });

    // Sort by score (highest first)
    recommendations.sort((a, b) => b.score - a.score);

    return recommendations;
}

// Check if user is eligible for a career
function isEligible(user, career) {
    // CGPA check
    if (user.cgpa < career.minCgpa) {
        return false;
    }

    // Education level check
    const eduLevels = { 'HighSchool': 1, 'Bachelors': 2, 'Masters': 3 };
    if (eduLevels[user.education] < eduLevels[career.education]) {
        return false;
    }

    return true;
}

// Display results
function displayResults(user, recommendations) {
    // Display user summary
    const summaryDiv = document.getElementById('user-summary');
    summaryDiv.innerHTML = `
        <h3>Profile Summary</h3>
        <p><strong>Name:</strong> ${user.name}</p>
        <p><strong>Age:</strong> ${user.age} | <strong>Education:</strong> ${user.education} | <strong>CGPA:</strong> ${user.cgpa.toFixed(2)}</p>
        <p><strong>Skills:</strong> ${user.skills.join(', ')}</p>
        <p><strong>Interests:</strong> ${user.interests.join(', ')}</p>
    `;

    // Display recommendations
    const container = document.getElementById('recommendations-container');
    container.innerHTML = '';

    if (recommendations.length === 0) {
        container.innerHTML = '<p style="text-align: center; color: #999;">No matching careers found. Try adjusting your profile or lowering your CGPA requirements.</p>';
        return;
    }

    recommendations.forEach((rec, index) => {
        const card = document.createElement('div');
        card.className = 'recommendation-card';

        const matchPercentage = Math.round(rec.score);
        const skillPercentage = Math.round((rec.skillsMatched / rec.career.skills.length) * 100);
        const interestPercentage = Math.round((rec.interestsMatched / rec.career.interests.length) * 100);

        card.innerHTML = `
            <h3>${index + 1}. ${rec.career.title}</h3>
            <div class="match-stats">
                <div class="stat">
                    <strong>Overall Match:</strong> ${matchPercentage}%
                </div>
                <div class="stat">
                    <strong>Skills Match:</strong> ${rec.skillsMatched}/${rec.career.skills.length} (${skillPercentage}%)
                </div>
                <div class="stat">
                    <strong>Interests Match:</strong> ${rec.interestsMatched}/${rec.career.interests.length} (${interestPercentage}%)
                </div>
            </div>
            <div class="recommendation-reason">
                <strong>Requirements:</strong> ${rec.career.education}, Min CGPA: ${rec.career.minCgpa.toFixed(1)}<br>
                <strong>Required Skills:</strong> ${rec.career.skills.join(', ')}<br>
                <strong>Related Interests:</strong> ${rec.career.interests.join(', ')}
            </div>
        `;

        container.appendChild(card);
    });
}

// Switch between sections
function switchSection(sectionId) {
    document.querySelectorAll('.section').forEach(section => {
        section.classList.remove('active');
    });
    document.getElementById(sectionId).classList.add('active');
}