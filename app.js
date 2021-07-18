
console.log('app.js running');

// Shopping - Featured Departments

var featuredDepartments = [
    {
        name: "Apple",
        src:"./images/shopping/featured-departments/apple.jpg",
        products: [],
    },
    {
        name: "Electronics",
        src:"./images/shopping/featured-departments/electronics.jpg",
        products: [],
    },
    {
        name: "Home & Garden",
        src:"./images/shopping/featured-departments/home.jpg",
        products: [],
    },
    {
        name: "Jewelry",
        src:"./images/shopping/featured-departments/jewelry.jpg",
        products: [],
    },
    {
        name: "Sporting Goods",
        src:"./images/shopping/featured-departments/sports.jpg",
        products: [],
    },
    {
        name: "Tools & Hardware",
        src:"./images/shopping/featured-departments/tools.jpg",
        products: [],
    },
    {
        name: "Video Games",
        src:"./images/shopping/featured-departments/games.jpg",
        products: [],
    }
    ]

// console.log(featuredDepartments);

for(i=0; i<featuredDepartments.length; i++){

    let dept = featuredDepartments[i].src;
    console.log(dept)
  let deptTag = document.querySelectorAll(".featured-category-title");
//   console.log(deptTag);
for(j=0; j< deptTag.length; j++){
    console.log(deptTag[j].src);
}
 
//    document.querySelectorAll(".featured-category-img img").src = featuredDepartments[i].name;

}



