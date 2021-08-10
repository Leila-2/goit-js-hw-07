const count = document.querySelectorAll('.item').length;
console.log('Всего категорий', count);

const categoryFilter = document.querySelectorAll('.item')
categoryFilter.forEach((item) => {
    const categoryTitle = item.firstElementChild.textContent;

    const numEl = item.firstElementChild.nextElementSibling.children.length;
    console.log(`Категория: ${categoryTitle}, Количество элементов: ${numEl}`);
})
