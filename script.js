// =========================================================
// الموقع الأكاديمي للدكتور بلال جاسم
// script.js
// =========================================================

document.addEventListener("DOMContentLoaded", function () {

    // تحديث السنة تلقائيًا في أسفل الموقع
    const yearElement = document.getElementById("year");

    if (yearElement) {
        yearElement.textContent = new Date().getFullYear();
    }


    // إغلاق قائمة التنقل بعد الضغط على أحد الروابط
    const navLinks = document.querySelectorAll(".main-nav a");

    navLinks.forEach(function (link) {

        link.addEventListener("click", function () {

            window.scrollTo({
                behavior: "smooth"
            });

        });

    });


    // ظهور العناصر تدريجيًا أثناء النزول في الصفحة
    const animatedElements = document.querySelectorAll(
        ".book-card, .research-card, .info-card, .work-item"
    );

    const observer = new IntersectionObserver(
        function (entries) {

            entries.forEach(function (entry) {

                if (entry.isIntersecting) {

                    entry.target.style.opacity = "1";
                    entry.target.style.transform = "translateY(0)";

                    observer.unobserve(entry.target);
                }

            });

        },
        {
            threshold: 0.12
        }
    );


    animatedElements.forEach(function (element) {

        element.style.opacity = "0";
        element.style.transform = "translateY(20px)";
        element.style.transition =
            "opacity 0.6s ease, transform 0.6s ease";

        observer.observe(element);

    });

});
