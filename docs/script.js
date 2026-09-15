/* =========================================================
   الكينج - MISTER MAHMOUD ELADWY
========================================================= */

const youtubeChannel =
    "https://www.youtube.com/@mrmahmoudahmed-h8m";

const whatsappLink =
    "https://wa.me/201124947410";


/* =========================================================
   GRADES
========================================================= */

const grades = [

    {
        id: "prep1",
        order: 1,
        numberLabel: "1 إعدادي",
        title: "أولى إعدادي",
        level: "المرحلة الإعدادية",
        icon: "📘",
        description:
            "ابدأ تأسيسك في الرياضيات بطريقة سهلة ومنظمة.",
        subjects: {

            algebra: {
                title: "الجبر",
                lessons:
                    createPlaceholderLessons(
                        "الجبر",
                        1,
                        8
                    )
            },

            geometry: {
                title: "الهندسة",
                lessons:
                    createPlaceholderLessons(
                        "الهندسة",
                        1,
                        8
                    )
            }

        }
    },


    {
        id: "prep2",
        order: 2,
        numberLabel: "2 إعدادي",
        title: "تانية إعدادي",
        level: "المرحلة الإعدادية",
        icon: "📗",
        description:
            "طور مستواك وابدأ حل الأسئلة بشكل أقوى.",
        subjects: {

            algebra: {
                title: "الجبر",
                lessons:
                    createPlaceholderLessons(
                        "الجبر",
                        1,
                        8
                    )
            },

            geometry: {
                title: "الهندسة",
                lessons:
                    createPlaceholderLessons(
                        "الهندسة",
                        1,
                        8
                    )
            }

        }
    },


    {
        id: "prep3",
        order: 3,
        numberLabel: "3 إعدادي",
        title: "تالتة إعدادي",
        level: "المرحلة الإعدادية",
        icon: "📕",
        description:
            "مراجعة وشرح المنهج الجديد والتدريب على الأسئلة.",

        subjects: {

            algebra: {
                title: "الجبر",

                lessons: [

                    {
                        number: 1,

                        title:
                            "الدالة التربيعية الصف الثالث الإعدادي المنهج الجديد",

                        description:
                            "شرح الدالة التربيعية للصف الثالث الإعدادي.",

                        youtube:
                            "https://www.youtube.com/watch?v=00h_Lb7mYME"
                    },

                    {
                        number: 2,

                        title:
                            "حل تدريبات المعادلات الأسية المنهج الجديد الصف الثالث الإعدادي",

                        description:
                            "حل تدريبات المعادلات الأسية للصف الثالث الإعدادي.",

                        youtube:
                            "https://www.youtube.com/watch?v=hQGeBqALz_c"
                    },

                    ...createPlaceholderLessons(
                        "الجبر",
                        3,
                        8
                    )

                ]
            },


            geometry: {
                title: "الهندسة",

                lessons:
                    createPlaceholderLessons(
                        "الهندسة",
                        1,
                        8
                    )
            },


            general: {
                title: "تدريبات عامة",

                lessons: [

                    {
                        number: 1,

                        title:
                            "حل تدريبات الصف الثالث الإعدادي المنهج الجديد",

                        description:
                            "تدريبات عامة للصف الثالث الإعدادي.",

                        youtube:
                            "https://www.youtube.com/watch?v=EQ4PmguvYNQ&t=1s"
                    },

                    ...createPlaceholderLessons(
                        "تدريبات عامة",
                        2,
                        6
                    )

                ]
            }

        }
    },


    {
        id: "secondary1",
        order: 4,
        numberLabel: "1 ثانوي",
        title: "أولى ثانوي",
        level: "المرحلة الثانوية",
        icon: "📙",
        description:
            "انطلق في المرحلة الثانوية مع شرح قوي ومنظم.",

        subjects: {

            algebra: {
                title: "الجبر",

                lessons: [

                    {
                        number: 1,

                        title:
                            "الدرس الأول: الأعداد المركبة",

                        description:
                            "الصف الأول الثانوي - الدرس الأول الأعداد المركبة.",

                        youtube:
                            "https://www.youtube.com/watch?v=PdJSe_HdjjE&t=14s"
                    },

                    ...createPlaceholderLessons(
                        "الجبر",
                        2,
                        8
                    )

                ]
            },


            geometry: {
                title: "الهندسة",

                lessons:
                    createPlaceholderLessons(
                        "الهندسة",
                        1,
                        8
                    )
            }

        }
    },


    {
        id: "secondary2",
        order: 5,
        numberLabel: "2 ثانوي",
        title: "تانية ثانوي",
        level: "المرحلة الثانوية",
        icon: "📔",
        description:
            "استعد لمستوى أعلى من الفهم والتدريب.",

        subjects: {

            algebra: {
                title: "الجبر",

                lessons:
                    createPlaceholderLessons(
                        "الجبر",
                        1,
                        8
                    )
            },

            geometry: {
                title: "الهندسة",

                lessons:
                    createPlaceholderLessons(
                        "الهندسة",
                        1,
                        8
                    )
            }

        }
    },


    {
        id: "secondary3",
        order: 6,
        numberLabel: "3 ثانوي",
        title: "تالتة ثانوي",
        level: "المرحلة الثانوية",
        icon: "📚",
        description:
            "المرحلة النهائية والاستعداد لأقوى الأسئلة.",

        subjects: {

            algebra: {
                title: "الجبر",

                lessons:
                    createPlaceholderLessons(
                        "الجبر",
                        1,
                        10
                    )
            },

            geometry: {
                title: "الهندسة",

                lessons:
                    createPlaceholderLessons(
                        "الهندسة",
                        1,
                        10
                    )
            }

        }
    }

];


/* =========================================================
   PLACEHOLDER LESSONS
========================================================= */

function createPlaceholderLessons(
    subjectName,
    start,
    end
) {

    const lessons = [];

    for (
        let i = start;
        i <= end;
        i++
    ) {

        lessons.push({

            number: i,

            title:
                `${subjectName} - الدرس ${i}`,

            description:
                "سيتم إضافة شرح الدرس قريبًا.",

            youtube: null

        });

    }

    return lessons;
}


/* =========================================================
   STATE
========================================================= */

let currentGrade = null;
let currentSubject = null;


/* =========================================================
   HOME
========================================================= */

function goHome() {

    document
        .getElementById("gradePage")
        .classList
        .add("hidden");

    document
        .getElementById("home")
        .classList
        .remove("hidden");

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
}


function scrollToGrades() {

    goHome();

    setTimeout(() => {

        document
            .getElementById("grades")
            .scrollIntoView({
                behavior: "smooth"
            });

    }, 100);
}


function scrollToAbout() {

    goHome();

    setTimeout(() => {

        document
            .getElementById("about")
            .scrollIntoView({
                behavior: "smooth"
            });

    }, 100);
}


function scrollToContact() {

    goHome();

    setTimeout(() => {

        document
            .getElementById("contact")
            .scrollIntoView({
                behavior: "smooth"
            });

    }, 100);
}


/* =========================================================
   RENDER GRADES
========================================================= */

function renderGrades() {

    const grid =
        document.getElementById(
            "gradesGrid"
        );

    if (!grid) return;

    grid.innerHTML = "";

    const sortedGrades =
        [...grades].sort(
            (a, b) =>
                a.order - b.order
        );

    sortedGrades.forEach(
        grade => {

            const card =
                document.createElement(
                    "div"
                );

            card.className =
                "grade-card";

            card.onclick =
                () =>
                    openGrade(
                        grade.id
                    );

            card.innerHTML = `

                <div class="grade-number">
                    الصف ${grade.numberLabel}
                </div>

                <div class="grade-icon">
                    ${grade.icon}
                </div>

                <h3>
                    ${grade.title}
                </h3>

                <p>
                    ${grade.description}
                </p>

                <div class="grade-arrow">
                    ←
                </div>

            `;

            grid.appendChild(card);

        }
    );
}


/* =========================================================
   OPEN GRADE
========================================================= */

function openGrade(gradeId) {

    const grade =
        grades.find(
            item =>
                item.id === gradeId
        );

    if (!grade) return;

    currentGrade = grade;

    currentSubject =
        Object.keys(
            grade.subjects
        )[0];

    document
        .getElementById("home")
        .classList
        .add("hidden");

    document
        .getElementById("gradePage")
        .classList
        .remove("hidden");

    document
        .getElementById("gradeIcon")
        .textContent =
            grade.icon;

    document
        .getElementById("gradeLevel")
        .textContent =
            grade.level;

    document
        .getElementById("gradeTitle")
        .textContent =
            grade.title;

    document
        .getElementById("gradeDescription")
        .textContent =
            grade.description;

    document
        .getElementById("lessonSearch")
        .value = "";

    renderSubjects();

    renderLessons();

    updateProgress();

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
}


/* =========================================================
   SUBJECT TABS
========================================================= */

function renderSubjects() {

    const tabs =
        document.getElementById(
            "subjectsTabs"
        );

    if (!tabs || !currentGrade) {
        return;
    }

    tabs.innerHTML = "";

    Object.entries(
        currentGrade.subjects
    ).forEach(
        ([key, subject]) => {

            const button =
                document.createElement(
                    "button"
                );

            button.className =
                "subject-tab" +
                (
                    key === currentSubject
                        ? " active"
                        : ""
                );

            button.textContent =
                subject.title;

            button.onclick =
                () => {

                    currentSubject =
                        key;

                    document
                        .getElementById(
                            "lessonSearch"
                        )
                        .value = "";

                    renderSubjects();

                    renderLessons();

                };

            tabs.appendChild(button);

        }
    );
}


/* =========================================================
   LESSONS
========================================================= */

function renderLessons() {

    if (!currentGrade) return;

    const grid =
        document.getElementById(
            "lessonsGrid"
        );

    if (!grid) return;

    const search =
        document
            .getElementById(
                "lessonSearch"
            )
            .value
            .trim()
            .toLowerCase();

    const subject =
        currentGrade.subjects[
            currentSubject
        ];

    if (!subject) return;

    const lessons =
        [...subject.lessons]
            .sort(
                (a, b) =>
                    a.number - b.number
            )
            .filter(
                lesson => {

                    const text =
                        `${lesson.title} ${lesson.description}`
                            .toLowerCase();

                    return text.includes(
                        search
                    );

                }
            );

    grid.innerHTML = "";

    if (lessons.length === 0) {

        grid.innerHTML = `

            <div
                style="
                    grid-column:1/-1;
                    text-align:center;
                    padding:50px;
                    color:#777;
                "
            >
                لا توجد دروس مطابقة للبحث 🔎
            </div>

        `;

        return;
    }

    lessons.forEach(
        lesson => {

            const completed =
                isLessonCompleted(
                    currentGrade.id,
                    currentSubject,
                    lesson.number
                );

            const card =
                document.createElement(
                    "div"
                );

            card.className =
                "lesson-card" +
                (
                    completed
                        ? " completed"
                        : ""
                );

            const watchButton =
                lesson.youtube

                    ? `

                        <button
                            class="lesson-button watch-button"
                            onclick="openYouTube('${lesson.youtube}')"
                        >
                            ▶ مشاهدة
                        </button>

                    `

                    : `

                        <button
                            class="lesson-button watch-button"
                            onclick="showComingSoon()"
                        >
                            قريبًا
                        </button>

                    `;

            card.innerHTML = `

                <div class="lesson-number">
                    الدرس ${lesson.number}
                </div>

                <h3>
                    ${lesson.title}
                </h3>

                <p>
                    ${lesson.description}
                </p>

                <div class="lesson-actions">

                    ${watchButton}

                    <button
                        class="lesson-button complete-button"
                        onclick="
                            toggleLessonCompleted(
                                '${currentGrade.id}',
                                '${currentSubject}',
                                ${lesson.number}
                            )
                        "
                    >
                        ${
                            completed
                                ? "✓ مكتمل"
                                : "تم الإنجاز"
                        }
                    </button>

                </div>

            `;

            grid.appendChild(card);

        }
    );
}


/* =========================================================
   SEARCH
========================================================= */

function filterLessons() {
    renderLessons();
}


/* =========================================================
   YOUTUBE
========================================================= */

function openYouTube(url) {

    if (!url) {

        showComingSoon();

        return;
    }

    window.open(
        url,
        "_blank",
        "noopener,noreferrer"
    );
}


/* =========================================================
   COMING SOON
========================================================= */

function showComingSoon() {

    showToast(
        "شرح هذا الدرس سيتم إضافته قريبًا 👑"
    );
}


/* =========================================================
   LOCAL STORAGE
========================================================= */

function getCompletedLessons() {

    try {

        return JSON.parse(
            localStorage.getItem(
                "kingCompletedLessons"
            ) || "[]"
        );

    } catch {

        return [];

    }
}


function saveCompletedLessons(
    data
) {

    localStorage.setItem(
        "kingCompletedLessons",
        JSON.stringify(data)
    );
}


function getLessonKey(
    gradeId,
    subject,
    lessonNumber
) {

    return `${gradeId}_${subject}_${lessonNumber}`;
}


function isLessonCompleted(
    gradeId,
    subject,
    lessonNumber
) {

    const completed =
        getCompletedLessons();

    return completed.includes(
        getLessonKey(
            gradeId,
            subject,
            lessonNumber
        )
    );
}


function toggleLessonCompleted(
    gradeId,
    subject,
    lessonNumber
) {

    const completed =
        getCompletedLessons();

    const key =
        getLessonKey(
            gradeId,
            subject,
            lessonNumber
        );

    const index =
        completed.indexOf(key);

    if (index >= 0) {

        completed.splice(
            index,
            1
        );

        showToast(
            "تم إلغاء إنجاز الدرس"
        );

    } else {

        completed.push(key);

        showToast(
            "عاش يا بطل! تم تسجيل الدرس كمكتمل 🏆"
        );

    }

    saveCompletedLessons(
        completed
    );

    renderLessons();

    updateProgress();
}


/* =========================================================
   PROGRESS
========================================================= */

function updateProgress() {

    if (!currentGrade) return;

    let total = 0;

    Object.values(
        currentGrade.subjects
    ).forEach(
        subject => {

            total +=
                subject.lessons.length;

        }
    );

    let completed = 0;

    Object.entries(
        currentGrade.subjects
    ).forEach(
        ([subjectKey, subject]) => {

            subject.lessons.forEach(
                lesson => {

                    if (
                        isLessonCompleted(
                            currentGrade.id,
                            subjectKey,
                            lesson.number
                        )
                    ) {

                        completed++;

                    }

                }
            );

        }
    );

    const percentage =
        total === 0
            ? 0
            : Math.round(
                (completed / total) * 100
            );

    const progressText =
        document.getElementById(
            "progressText"
        );

    const progressFill =
        document.getElementById(
            "progressFill"
        );

    if (progressText) {

        progressText.textContent =
            `${percentage}%`;

    }

    if (progressFill) {

        progressFill.style.width =
            `${percentage}%`;

    }
}


/* =========================================================
   TOAST
========================================================= */

let toastTimer;

function showToast(message) {

    const toast =
        document.getElementById(
            "toast"
        );

    if (!toast) return;

    toast.textContent =
        message;

    toast.classList.add(
        "show"
    );

    clearTimeout(
        toastTimer
    );

    toastTimer =
        setTimeout(
            () => {

                toast.classList.remove(
                    "show"
                );

            },
            2500
        );
}


/* =========================================================
   QR CODES
========================================================= */

function createQRCodes() {

    const whatsappQR =
        document.getElementById(
            "whatsappQR"
        );

    const youtubeQR =
        document.getElementById(
            "youtubeQR"
        );

    if (
        typeof QRCode ===
        "undefined"
    ) {
        return;
    }

    if (
        whatsappQR &&
        !whatsappQR.hasChildNodes()
    ) {

        new QRCode(
            whatsappQR,
            {
                text: whatsappLink,
                width: 125,
                height: 125
            }
        );

    }

    if (
        youtubeQR &&
        !youtubeQR.hasChildNodes()
    ) {

        new QRCode(
            youtubeQR,
            {
                text: youtubeChannel,
                width: 125,
                height: 125
            }
        );

    }
}


/* =========================================================
   YEAR
========================================================= */

function setYear() {

    const year =
        document.getElementById(
            "year"
        );

    if (year) {

        year.textContent =
            new Date()
                .getFullYear();

    }
}


/* =========================================================
   INIT
========================================================= */

document.addEventListener(
    "DOMContentLoaded",
    () => {

        renderGrades();

        createQRCodes();

        setYear();

    }
);