const faqItems = document.querySelectorAll('.faq-item');
faqItems.forEach(function(item) {
    const question = item.querySelector('.faq-question');
    question.addEventListener('click', function() {
        faqItems.forEach(function(other) {
            if (other !== item) {
                other.classList.remove('active');
                other.querySelector('[aria-expanded]').setAttribute('aria-expanded', 'false');
            }
        });
        item.classList.toggle('active');
        const expanded = item.classList.contains('active');
        question.setAttribute('aria-expanded', expanded);
    });
});