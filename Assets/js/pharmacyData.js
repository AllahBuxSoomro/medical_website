// pharmacyData.js
export const pharmacyData = [
    // --- Fever & Pain ---
    { id: 1, name: "Panadol (Paracetamol)", category: "Fever & Pain", price: 50, image: "https://i.brecorder.com/primary/2022/10/6357a9e449ee3.jpg", description: "Fast relief for fever and body aches." },
    { id: 2, name: "Brufen 400mg", category: "Fever & Pain", price: 120, image: "https://dawapharmacy.ae/cdn/shop/products/new-BRUFEN-400-Pack-updated.png?v=1643527888", description: "Effective for inflammation and muscle pain." },
    { id: 3, name: "Disprin", category: "Fever & Pain", price: 40, image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ6flduhMJzjkiLMN8TCRxlf7ZbNoTuTx_Lgg&s", description: "Soluble tablets for headache and migraines." },
    { id: 4, name: "Ponstan Forte", category: "Fever & Pain", price: 180, image: "https://ailaaj.pk/cdn/shop/files/ponston_forte_2.jpg?v=1718298056&width=1445", description: "Strong relief for dental and period pain." },
    { id: 5, name: "Caldol Syrup", category: "Fever & Pain", price: 90, image: "https://onehealth.pk/cdn/shop/files/Calpol_Syrup_6_Plus_90ml_1000x.jpg?v=1740746179", description: "Suspension for kids fever and pain." },

    // --- Cough & Cold ---
    { id: 6, name: "Hydryllin Syrup", category: "Cough & Cold", price: 160, image: "https://tse3.mm.bing.net/th/id/OIP.xiRG2AGhi3p-ZXZKPirLjwHaHa?pid=ImgDetMain", description: "Effective for dry cough and throat relief." },
    { id: 7, name: "Pulmonol Syrup", category: "Cough & Cold", price: 140, image: "https://onehealth.pk/cdn/shop/files/Pulmonol_Cough_Syrup_120ml_1000x.jpg?v=1743234052", description: "Expectorant for chest congestion." },
    { id: 8, name: "Sualin", category: "Cough & Cold", price: 110, image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSJKbCRA7sYF7oeNvEpYDo44e8o4JhHCu0kgQ&s", description: "Herbal tablets for sore throat." },
    { id: 9, name: "Arinac Forte", category: "Cough & Cold", price: 210, image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSCUuLx3yhFHXzP0q4KdUaQQOROZlbBlua_Bg&s", description: "Relief from flu and nasal congestion." },
    { id: 10, name: "Cofcol", category: "Cough & Cold", price: 130, image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS_d__6ggDoPEYuVhYJcqT_zfrxaIKBoLQU6g&s", description: "Multi-symptom relief for cold and cough." },

    // --- Stomach Care ---
    { id: 11, name: "Risek 20mg", category: "Stomach Care", price: 350, image: "https://tse1.mm.bing.net/th/id/OIP.4iZeL7tAkZScb9Vh8RO82QHaHa?pid=ImgDetMain", description: "Best for acidity and stomach ulcers." },
    { id: 12, name: "Flagyl 400mg", category: "Stomach Care", price: 100, image: "https://d1t78adged64l7.cloudfront.net/images/medicines/1674736044_nmEkcjPy4x.webp", description: "For stomach infections and loose motion." },
    { id: 13, name: "Gaviscon Syrup", category: "Stomach Care", price: 280, image: "https://medecify.com/storage/2025/03/E-E-CD-E-AE-F-EDABBAC-3000x3372.jpeg", description: "Instant relief from heartburn and reflux." },
    { id: 14, name: "Entamizole", category: "Stomach Care", price: 150, image: "https://shop.marham.pk/cdn/shop/files/Entamizole90MlSuspension.webp?v=1718361204", description: "For intestinal infections and diarrhea." },
    { id: 15, name: "Mucaine Suspension", category: "Stomach Care", price: 220, image: "https://www.medicalbazar.co/cdn/shop/files/mucaine_600x600.png?v=1683973928", description: "Antacid for stomach pain and burning." },
    { id: 16, name: "Zantac 150mg", category: "Stomach Care", price: 200, image: "https://sevenseas.com.pk/shop/3692-home_default/zantac-tab-150mg-1x10.jpg", description: "Reduced acid production in the stomach." },

    // --- Vitamins & Supplements ---
    { id: 17, name: "Surbex-Z", category: "Vitamins", price: 450, image: "https://tse1.mm.bing.net/th/id/OIP.7ssaPkDwnkvBlZ_5A7nZDAHaHa?pid=ImgDetMain", description: "High potency Vitamin B-Complex with Zinc." },
    { id: 18, name: "CAC 1000 Plus", category: "Vitamins", price: 550, image: "https://medicalstore.com.pk/wp-content/uploads/2020/05/9175CAC-1000.png", description: "Calcium and Vitamin C for bone health." },
    { id: 19, name: "Sangobion", category: "Vitamins", price: 320, image: "https://sevenseas.com.pk/shop/3912-large_default/sangobion-cap-3x10.jpg", description: "Iron and folic acid for blood health." },
    { id: 20, name: "Evion 400mg", category: "Vitamins", price: 480, image: "https://sevenseas.com.pk/shop/3911-large_default/evion-cap-400mg-10x10.jpg", description: "Vitamin E for skin and hair health." },
    { id: 21, name: "Neurobion", category: "Vitamins", price: 290, image: "https://shop.marham.pk/cdn/shop/files/NeurobionTablets.webp?v=1720169567&width=480", description: "For nerve health and weakness." },
    { id: 22, name: "Revale", category: "Vitamins", price: 950, image: "https://chemistdirect.pk/cdn/shop/files/revalp-250mg-tablet-medicine-410.jpg?v=1742240948", description: "Complete multivitamin for daily energy." },

    // --- Allergy & ENT ---
    { id: 23, name: "Softin 10mg", category: "Allergy", price: 240, image: "https://onehealth.pk/cdn/shop/files/Softin_10mg_10_Tablets_240x.jpg?v=1744192965", description: "Non-drowsy relief from sneezing and itching." },
    { id: 24, name: "Rigix", category: "Allergy", price: 180, image: "https://springs.com.pk/cdn/shop/files/20468.gif?v=1747838563", description: "Anti-allergy for runny nose and skin rashes." },
    { id: 25, name: "Avil", category: "Allergy", price: 60, image: "https://onehealth.pk/cdn/shop/files/Avil_25mg_250_Tablets_1000x.jpg?v=1745044352", description: "Effective for severe allergic reactions." },
    { id: 26, name: "Zyrtec", category: "Allergy", price: 300, image: "https://shop.marham.pk/cdn/shop/files/ZyrtecTablets10Mg.jpg?v=1721907359&width=480", description: "Relief from seasonal allergies." },
    { id: 27, name: "Xynosine Nasal Spray", category: "ENT", price: 110, image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSbz9WzEOzPF3w9olh_58obK8m993_7eW80QA&s", description: "Quick relief for blocked nose." },
    { id: 28, name: "Betnesol Drops", category: "ENT", price: 80, image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLo5dZN6F6vAMAoDTAhI74F_kaEmD-4G4G2A&s", description: "For eye, ear, and nose infections." },

    // --- Skin Care ---
    { id: 29, name: "Betnovate-N Cream", category: "Skin Care", price: 115, image: "https://www.dsmonline.pk/media/catalog/product/cache/e626209f6586797a49e0d0a395e17e33/b/e/betnovate_n_ointment_20gm.jpg", description: "For skin infections and inflammation." },
    { id: 30, name: "Polyfax Eye Ointment", category: "Skin Care", price: 95, image: "https://ipro.blob.core.windows.net/mydocuments/_polyfax-skin-ointment-uses.png", description: "Antibiotic for small skin wounds and eyes." },
    { id: 31, name: "Derma-Clean", category: "Skin Care", price: 1300, image: "https://dermaclean.net/wp-content/uploads/2024/01/Derma-Clean-3D-Whitening-Cream-600x600-1.webp", description: "Antiseptic soap for acne-prone skin." },
    { id: 32, name: "Daktacort Cream", category: "Skin Care", price: 210, image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQCDwxi9RuwfLiUrm3oZYcGGtwKnSbt23zV9Q&s", description: "For fungal infections and itchy skin." },
    { id: 33, name: "Fucidin Ointment", category: "Skin Care", price: 280, image: "https://www.binsina.ae/media/catalog/product/7/7/7746_1.jpg", description: "Powerful bacterial skin infection cream." },

    // --- Heart & Blood Pressure ---
    { id: 34, name: "Loprin 75mg", category: "Heart", price: 100, image: "https://onehealth.pk/cdn/shop/files/Loprin_75mg_30_Tablets_1000x.jpg?v=1742379253", description: "Blood thinner to prevent heart issues." },
    { id: 35, name: "Concor 5mg", category: "Heart", price: 550, image: "https://shop.marham.pk/cdn/shop/files/Concortablets2.5mg.jpg?v=1719981601", description: "Management of high blood pressure." },
    { id: 36, name: "Exforge", category: "Heart", price: 1200, image: "https://www.dvago.pk/_next/image?url=https%3A%2F%2Fdvago-assets.s3.ap-southeast-1.amazonaws.com%2FProductsImages%2F212%2F07607.webp&w=1280&q=50", description: "Advanced BP control medication." },
    { id: 37, name: "Zestril 10mg", category: "Heart", price: 400, image: "https://onehealth.pk/cdn/shop/files/Zestril_10mg_14_Tablets_1000x.jpg?v=1744876023", description: "Effective for hypertension." },

    // --- Diabetes ---
    { id: 38, name: "Glucophage 500mg", category: "Diabetes", price: 420, image: "https://onehealth.pk/cdn/shop/files/Glucophage_500mg_5x10_Tablets_1000x.jpg?v=1741942717", description: "For Type-2 diabetes management." },
    { id: 39, name: "Getryl 2mg", category: "Diabetes", price: 580, image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTfaBnZYmbzqFhCmT5h_kp09BYvhdIPuev6kQ&s", description: "Controls blood sugar levels." },
    { id: 40, name: "Janumet", category: "Diabetes", price: 1800, image: "https://medecify.com/storage/2024/10/C-CAD-DA-A-D-C-E-BF-863x1024.jpeg", description: "Combination drug for blood sugar control." },

    // --- Miscellaneous ---
    { id: 41, name: "ORS (Nimkol)", category: "Essentials", price: 25, image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSbzEUIs97DdtnV29vifRJuHAeOw36E5NIIeA&s", description: "Rehydration salt for dehydration." },
    { id: 42, name: "Dettol Liquid", category: "Essentials", price: 350, image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS_hU8PnAf7s9GschhTwBxYrHm963SsuXMyzA&s", description: "Antiseptic for cleaning wounds." },
    { id: 43, name: "Cremaffin Syrup", category: "Stomach Care", price: 260, image: "https://superhealth.com.pk/wp-content/uploads/2021/05/Cremaffin-120ml-Syp.jpg", description: "Relief from constipation." },
    { id: 44, name: "Vicks Inhaler", category: "ENT", price: 150, image: "https://onehealth.pk/cdn/shop/files/Vicks_Inhaler_Keychain_958x.jpg?v=1739616273", description: "Quick relief for blocked nose." },
    { id: 45, name: "Garnier Sanitizer", category: "Essentials", price: 200, image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS_Rx_8JfwfidTrzCzSPzYFjJkweRhAj-yNrQ&s", description: "Kills 99.9% germs instantly." },
    { id: 46, name: "Movelat Cream", category: "Fever & Pain", price: 340, image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQPF6CuqZBx1WxsEZInr7Wz-8hKkvpKNDNUSQ&s", description: "Relief for sprains and joint pain." },
    { id: 47, name: "Augmentin 625mg", category: "Antibiotics", price: 650, image: "https://shop.marham.pk/cdn/shop/files/AugmentinTablets625Mg.jpg?v=1721648091", description: "For bacterial and throat infections." },
    { id: 48, name: "Amoxil Capsule", category: "Antibiotics", price: 300, image: "https://superhealth.com.pk/wp-content/uploads/2022/09/www.superhealth.com_.pk-56.png", description: "Standard antibiotic for general infections." },
    { id: 49, name: "Ciproxin 500mg", category: "Antibiotics", price: 500, image: "https://sehatmund.com/cdn/shop/files/WhatsAppImage2024-01-30at3.59.52PM_3.jpg?v=1706621453", description: "For urinary and chest infections." },
    { id: 50, name: "Lignocaine Gel", category: "Essentials", price: 120, image: "https://d1t78adged64l7.cloudfront.net/images/medicines/1684935822_wABG7IvQqg.webp", description: "Numbing gel for minor pain." }
];