// Danh sách các sản phẩm có trong giỏ hàng
let products = [
    {
        name: "Iphone 13 Pro Max", // Tên sản phẩm
        price: 3000000, // Giá mỗi sản phẩm
        brand: "Apple", // Thương hiệu
        count: 2, // Số lượng sản phẩm trong giỏ hàng
    },
    {
        name: "Samsung Galaxy Z Fold3",
        price: 41000000,
        brand: "Samsung",
        count: 1,
    },
    {
        name: "IPhone 11",
        price: 15500000,
        brand: "Apple",
        count: 1,
    },
    {
        name: "OPPO Find X3 Pro",
        price: 19500000,
        brand: "OPPO",
        count: 3,
    },
]


// 4. Tìm các sản phẩm có giá > 20000000

const searchPrice = (products, price) => products.filter(p => p.price >= price);
console.log(searchPrice(products, 20000000));

// 5. Tìm các sản phẩm có chữ "pro" trong tên (Không phân biệt hoa thường)
const searchByName = (products, name) => products.filter(p => p.name.toLowerCase().includes(name));
console.log(searchByName(products, "pro"));

// 6. Thêm 1 sản phẩm bất kỳ vào trong mảng product
products.push({name: "Xiaomi 12X",price: 20000000, brand: "Xiaomi",count: 5});
console.log(products)

// 7. Xóa tất cả sản phẩm của thương hiệu "Samsung" trong giỏ hàng
const deleteByBrand = (products, brand) => products.filter(p => !p.brand.toLowerCase().includes(brand));
console.log(deleteByBrand(products, "samsung"))



// 8. Sắp xếp giỏ hàng theo price tăng dần
console.log(products.sort((a, b) => a.price - b.price));

// 9. Sắp xếp giỏ hàng theo count giảm dần
console.log(products.sort((a, b) => b.count - a.count));


// 10. Lấy ra 2 sản phẩm bất kỳ trong giỏ hàng
console.log(products.slice(0, 2));
