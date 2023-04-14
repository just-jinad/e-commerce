console.log("I'm alive and kick");
const ecomArr = [
    {img:"https://www-konga-com-res.cloudinary.com/w_auto,f_auto,fl_lossy,dpr_auto,q_auto/media/catalog/product/B/I/203020_1674629573.jpg", descr: "Mercury Hybrid Mppt Solar Inverter - 3.5kva",ProductCode:"5994907", Brand: "Mercury", price: "₦350,000"},
    {img:"https://www-konga-com-res.cloudinary.com/w_auto,f_auto,fl_lossy,dpr_auto,q_auto/media/catalog/product/F/N/181197_1653660199.jpg", descr: "Anker Robovac 15c Max Wi-fi Connected Vacuum Cleaner", ProductCode: "5737975"
    ,Brand: "Anker", price: "₦177,000"},
    {img:"https://www-konga-com-res.cloudinary.com/w_auto,f_auto,fl_lossy,dpr_auto,q_auto/media/catalog/product/2/H/2HP-Treadmill-with-Massager-6177254_4.jpg", descr: "American Fitness 2HP Treadmill with Massager",ProductCode: "1063696",Brand: " American Fitness", price: "₦337,000"},

    {img:"https://www-konga-com-res.cloudinary.com/w_auto,f_auto,fl_lossy,dpr_auto,q_auto/media/catalog/product/W/Z/63108_1611150401.jpg", descr:"Outdoor Table Tennis Board", ProductCode: "5153533",Brand: "Tiga",
    price: "₦2200,000"},
    
    {img:"https://www-konga-com-res.cloudinary.com/w_auto,f_auto,fl_lossy,dpr_auto,q_auto/media/catalog/product/X/N/186186_1653915602.jpg", descr:"HikVision 2mp Colorvu Fixed Mini Bullet Camera", ProductCode: "5741350",Brand: ": HikVision",
    price: "₦17,000"},

    {img:"https://www-konga-com-res.cloudinary.com/w_auto,f_auto,fl_lossy,dpr_auto,q_auto/media/catalog/product/U/Q/192711_1651671034.jpg", descr:"Waterproof Business Laptop Sleeve Bag", ProductCode: "5711521",Brand: ": HikVision",
    price: "₦8,500"},

    
    {img:"https://i.pinimg.com/564x/38/c1/7b/38c17b657fc52cd82c67da0dc15dfa5c.jpg", descr:"Case For Samsung Galaxy Z Flip 3", ProductCode: "5858883",Brand: "Samsung", price: "₦8,500"},

    {img:"https://www-konga-com-res.cloudinary.com/w_auto,f_auto,fl_lossy,dpr_auto,q_auto/media/catalog/product/F/Q/118566_1648211647.jpg", descr:"Oppo A96 - 6.59 - 8GB RAM+256GB ROM - Android 11 - 50mp + 16mp - 4g - 5000mAh - Dual Sim -Black", ProductCode: "5702474",Brand: "Oppo", price: "₦186,999"},

    {img:"https://www-konga-com-res.cloudinary.com/w_auto,f_auto,fl_lossy,dpr_auto,q_auto/media/catalog/product/E/V/_1665999934.jpg", descr:"Tecno Spark 8p 64+4 - Bulk Td", ProductCode: "5702474",Brand: "Tecno", price: "₦79,400"},

    {img:" https://www-konga-com-res.cloudinary.com/w_auto,f_auto,fl_lossy,dpr_auto,q_auto/media/catalog/product/N/F/118566_1645698434.jpg", descr:"Tecno T529 - Gold", ProductCode: "5702474",Brand: "Tecno", price: "₦14,999"},

    
    {img:"    https://www-konga-com-res.cloudinary.com/w_auto,f_auto,fl_lossy,dpr_auto,q_auto/media/catalog/product/Q/G/163129_1628353684.jpg", descr:"Apple iPhone 11 - 64GB + 4GB RAM - Nano Sim - 3110mAh + Free Pouch  ", ProductCode: "5702474",Brand: "Apple", price: "₦275,997"},

    
    {img:"   https://www-konga-com-res.cloudinary.com/w_auto,f_auto,fl_lossy,dpr_auto,q_auto/media/catalog/product/F/X/202137_1652787718.jpg", descr:"Xiaomi Redmi Note 11 Pro - 6.67 - 8gb Ram - 128gb Rom - Dual Sim - 5g - Fingerprint - 5000mah - Grey  ", ProductCode: "5702474",Brand: "Xiaomi", price: "₦300,000"},

    
    {img:" https://www-konga-com-res.cloudinary.com/w_auto,f_auto,fl_lossy,dpr_auto,q_auto/media/catalog/product/U/U/67343_1674455022.jpg", descr:"Tecno Pop 7 Pro (bf7) 6.6 - 3GB RAM - 64GB ROM (upto 6GB RAM) - Type-c - Dual Sim - 5000mAh - Blue   ", ProductCode: "6007267",Brand: "Tecno", price: "₦66,499"},

    
    {img:" https://www-konga-com-res.cloudinary.com/w_auto,f_auto,fl_lossy,dpr_auto,q_auto/media/catalog/product/V/D/67343_1663481920.jpg", descr:"Apple iPhone 14 Pro Max 5G - 6.7 - 128GB ROM - 6GB RAM - DualSIM - A16 Bionic Chip - 4323mAh - Deep Purple   ", ProductCode: "5872495",Brand: "Apple", price: "₦₦999,999"},

    {img:" https://www-konga-com-res.cloudinary.com/w_auto,f_auto,fl_lossy,dpr_auto,q_auto/media/catalog/product/F/G/67343_1660898321.jpg", descr:"Infinix Smart 6 - 6.6hd+ -32GB ROM - 2GB RAM - Dual Sim - Facial & Fingerprint Unlock - 5000mAh - Cyan  ", ProductCode: "5872495",Brand: "Infinix", price: "₦₦58,000"},

    {img:" https://www-konga-com-res.cloudinary.com/image/upload/w_auto,f_auto,fl_lossy,dpr_auto,q_auto/media/catalog/product/T/M/163263_1652498571.jpg", descr:"Apple iPhone Xs Max - 256GB ROM - 4GB RAM - WIFI + 4G - Nano Sim - 3000mah + Free Pouch - Gold ", ProductCode: "5872495",Brand: "Apple", price: " ₦220,200"},

    {img:" https://www-konga-com-res.cloudinary.com/w_auto,f_auto,fl_lossy,dpr_auto,q_auto/media/catalog/product/N/S/67343_1663433873.jpg", descr:"Apple iPhone 14 5G - 6.1OLED - 128GB ROM - 6GB RAM - NanoSIM - A15 Bionic Chip - 3279mAh - Midnight  ", ProductCode: "5872495",Brand: "Apple", price: " ₦700,000"},  

    {img:" https://www-konga-com-res.cloudinary.com/w_auto,f_auto,fl_lossy,dpr_auto,q_auto/media/catalog/product/Z/W/67343_1663479560.jpg", descr:"Apple iPhone 14 5G - 6.1OLED - 128GB ROM - 6GB RAM - NanoSIM - A15 Bionic Chip - 3279mAh - Starlight   ", ProductCode: "5872495",Brand: "Apple", price: " ₦700,000"},

    {img:" https://www-konga-com-res.cloudinary.com/w_auto,f_auto,fl_lossy,dpr_auto,q_auto/media/catalog/product/B/N/67343_1661857265.jpg", descr:"Tecno Camon 19 Pro - 6.8 - 256GB ROM - 8GB RAM - 4G Dual SIM - Fingerprint - 5000mAh - Mondrian Edition    ", ProductCode: "5846876",Brand: "Tecno", price: " ₦197,000"},

    {img:" https://www-konga-com-res.cloudinary.com/w_auto,f_auto,fl_lossy,dpr_auto,q_auto/media/catalog/product/K/O/67343_1670000231.jpg", descr:"Tecno POVA 3 - 6.9FHD+ - 128GB ROM - 6GB RAM - Dual SIM - 4G LTE - 50MP - 7000mAh - ECO Black  ", ProductCode: " 5952215",Brand: "Tecno", price: " ₦129,999"},

    {img:" https://www-konga-com-res.cloudinary.com/w_auto,f_auto,fl_lossy,dpr_auto,q_auto/media/catalog/product/L/I/169289_1658910382.jpg", descr:"Huawei Mate 10 Lite -4GB RAM - 64GB ROM - Dual Sim - 4G", ProductCode: " 5952215",Brand: "Huawei", price: " ₦58,000"},

    {img:" https://www-konga-com-res.cloudinary.com/w_auto,f_auto,fl_lossy,dpr_auto,q_auto/media/catalog/product/O/J/66521_1670932772.jpg", descr:"Xiaomi Poco M4 Pro 5G - 6.6'' - 4GB RAM + 64GB ROM - Android 11 - Cool Blue", ProductCode: " 5952215",Brand: "Xiaomi", price: " ₦118,000"},

    
    {img:" https://www-konga-com-res.cloudinary.com/w_auto,f_auto,fl_lossy,dpr_auto,q_auto/media/catalog/product/M/E/67343_1665416823.jpg", descr:"Infinix Note 10 Pro (2022) - 6.95 - 256GB ROM - 8GB RAM - 4G Dual SIM -Fingerprint-5000mAh - Nordic Secret", ProductCode: " 5901296",Brand: "Infinix", price: " ₦139,999"},

    {img:" https://www-konga-com-res.cloudinary.com/w_auto,f_auto,fl_lossy,dpr_auto,q_auto/media/catalog/product/H/M/196139_1654085900.jpg", descr:"Imose Gidi II 6'' Smartphone 16gb + 2gb - 4000mah    ", ProductCode: " 5901296",Brand: "Imose", price: " ₦39,500"},

    {img:" https://www-konga-com-res.cloudinary.com/w_auto,f_auto,fl_lossy,dpr_auto,q_auto/media/catalog/product/F/T/100388_1646284241.jpg", descr:" Wireless Bluetooth Earbuds With Finger Print Touch And Power Bank - Black ", ProductCode: " 5901296",Brand: "Oriamo", price: " ₦3,500"},

    
    {img:"https://www-konga-com-res.cloudinary.com/w_auto,f_auto,fl_lossy,dpr_auto,q_auto/media/catalog/product/C/G/54981_1666714814.jpg", descr:" Phone Tripod Stand - Black    ", ProductCode: " 5901296",Brand: "Oriamo", price: " ₦3000"},

    
    {img:"https://www-konga-com-res.cloudinary.com/w_auto,f_auto,fl_lossy,dpr_auto,q_auto/media/catalog/product/W/Y/198879_1645743838.jpg", descr:" Samsung Galaxy Phones Super Fast Charger 45w Usb-c To C Wall Charger ", ProductCode: " 5901296",Brand: "Oriamo", price: " ₦15,000"},

    {img:"https://www-konga-com-res.cloudinary.com/w_auto,f_auto,fl_lossy,dpr_auto,q_auto/media/catalog/product/N/S/176164_1661163453.jpg", descr:" Itel 20000mAh Fast Charging Bright Torch STAR 200 Power Bank ", ProductCode: " 5901296",Brand: "Oriamo", price: " ₦7,990  "},

    {img:"https://www-konga-com-res.cloudinary.com/w_auto,f_auto,fl_lossy,dpr_auto,q_auto/media/catalog/product/D/J/92033_1633384102.jpg", descr:" 17s Tws Mini Stereo Wireless Earphone  ", ProductCode: " 5901296",Brand: "Apple", price: " ₦5,500  "},

    {img:"https://www-konga-com-res.cloudinary.com/w_auto,f_auto,fl_lossy,dpr_auto,q_auto/media/catalog/product/A/B/56798_1588235259.jpg", descr:" 17s Tws Mini Stereo Wireless Earphone", ProductCode: " 5901296",Brand: "Apple", price: " ₦4,500  "},

    {img:"https://www-konga-com-res.cloudinary.com/w_auto,f_auto,fl_lossy,dpr_auto,q_auto/media/catalog/product/S/V/3553_1649344075.jpg", descr:" Samsung Galaxy A33 5G - 6.4AMOLED -128GB ROM -6GB RAM - Dual SIM -Fingerprint 5000mAh-black", ProductCode: " 5916992",Brand: "Samsung", price: " ₦245,000 "},

    {img:"https://www-konga-com-res.cloudinary.com/w_auto,f_auto,fl_lossy,dpr_auto,q_auto/media/catalog/product/N/E/67343_1648189923.jpg", descr:" Xiaomi 12 Pro 5G - 6.73LTPO AMOLED - 12GB RAM - 256GB ROM - Dual SIM - 4600mAh - Fingerprint - Purple   ", ProductCode: " 5676368",Brand: "Xiaomi", price: " ₦630,000    "},

    
    {img:"https://www-konga-com-res.cloudinary.com/w_auto,f_auto,fl_lossy,dpr_auto,q_auto/media/catalog/product/X/M/141488_1616730429.jpg", descr:" Samsung Galaxy Note 10+ 6.8 (N975F)-12GB RAM- 256GB ROM - 300mAh    ", ProductCode: " 6010193",Brand: "Samsung", price: " ₦289,999 "},

    {img:"https://www-konga-com-res.cloudinary.com/w_auto,f_auto,fl_lossy,dpr_auto,q_auto/media/catalog/product/B/D/194770_1649242684.jpg", descr:" Tecno Spark 8c - 6.6- 64GB ROM - 2GB RAM - Dual Sim - 5000mAh", ProductCode: " 6010193",Brand: "Tecno", price: " ₦72,500 "},
    
    {img:"https://www-konga-com-res.cloudinary.com/w_auto,f_auto,fl_lossy,dpr_auto,q_auto/media/catalog/product/S/J/67343_1633707227.jpg", descr:" Samsung Galaxy Z Fold 4 - 7.6 - 256GB Rom - 12GB Ram - 5G - 4400mAh - Gray    ", ProductCode: " 6010193",Brand: "Samsung", price: " ₦1,251,000    "},

    {img:"https://www-konga-com-res.cloudinary.com/w_auto,f_auto,fl_lossy,dpr_auto,q_auto/media/catalog/product/X/L/207904_1669473742.jpg", descr:" Huawei Cordless Desk Phones - F316 Land Line", ProductCode: " 5947888",Brand: "Huawei", price: " ₦20,000 "},

];

let screen = document.getElementById("displayScreen");
let data = "hELLO"
for(let each = 0; each< ecomArr.length; each++){
    screen.innerHTML += `
    <div class="" onclick="routeEach(${each})">
            <div  class=" mt-3 rounded item" id="sponsored">
                <img style="height: 150px;" src="${ecomArr[each].img}" alt="">
                <p class="fw-bold" style="font-size: 13px;">${ecomArr[each].descr}<br>7.6..</p><hr>
                <span class="fw-bold">${ecomArr[each].price}</span><br>
                <span class="fw-bold">${ecomArr[each].Brand}</span><br>
                <span class="fw-bold">${ecomArr[each].ProductCode}<span><br>
                <span>Sold by wholesales phones</span>

            </div>
        </div>
        `  
    }
    
    let clickedItems = document.getElementById("clicked");
    let clickedInfo;

    const routeEach = (e) =>{
        clickedInfo = ecomArr[e]
        localStorage.setItem("clickedData", JSON.stringify(clickedInfo))
        console.log(ecomArr[e]);
        window.location.href= "routes.html";
        clickedItems.innerHTML =`
        <img src="${clickedInfo.img}" alt="" class="text">
        <p class="text" id="clicked">${clickedInfo.descr}</p>
        <p class="text" id="clicked">${clickedInfo.Brand}</p>
        <p class="text" id="clicked">${clickedInfo.ProductCode}</p>
        <p class="text" id="clicked">${clickedInfo.price}</p>
        `;

 }
const myEcomArrFunct = () => {

}