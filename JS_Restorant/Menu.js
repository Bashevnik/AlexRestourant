const categoryLinks = document.querySelectorAll('.category-link');
        const menuSections = document.querySelectorAll('.menu-section');

        categoryLinks.forEach(link => {
            link.addEventListener('click', (e) => {
                e.preventDefault();

-                categoryLinks.forEach(l => l.classList.remove('active'));
                link.classList.add('active');

                menuSections.forEach(section => {
                    section.style.display = 'none';
                });

                const category = link.getAttribute('data-category');
                document.getElementById(category).style.display = 'block';
            });
        });