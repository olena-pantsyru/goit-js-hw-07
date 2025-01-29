const categoriesList = document.querySelector('#categories');
const categoriesItem = categoriesList.querySelectorAll('li.item');
console.log(`Numbers of categories: ${categoriesItem.length}`);

categoriesItem.forEach(item => { 
    const categoryTitle = item.querySelector('h2').textContent;
    const elementsCount = item.querySelectorAll('li').length;
    console.log(`Category : ${categoryTitle}`);
     console.log(`Elements : ${elementsCount}`);
})