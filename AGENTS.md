# AGENTS.md — Folder Structure

> Bu fayl loyihaning papka tuzilishini hujjatlaydi. **Loyiha strukturasiga har qanday o'zgarish kiritilganda (fayl/papka qo'shilsa, ko'chirilsa yoki o'chirilsa) bu fayl ham shunga mos yangilanishi kerak.**

Oxirgi yangilanish: 2026-08-23

```
burak-react/
├── .env
├── .gitignore
├── AGENTS.md
├── CLAUDE.md
├── README.md
├── package.json
├── tsconfig.json
├── yarn.lock
│
├── public/
│   ├── icons/            # 22 SVG icons (logo, cards, socials, UI glyphs)
│   ├── img/               # 20 webp/png brand & dish images
│   ├── video/burak-ads.mp4
│   ├── index.html
│   ├── manifest.json
│   └── robots.txt
│
└── src/
    ├── index.tsx
    ├── react-app-env.d.ts
    ├── reportWebVitals.ts
    ├── setupTests.ts
    │
    ├── app/
    │   ├── App.tsx
    │   ├── App.test.tsx
    │   ├── hooks.ts                    # typed useAppDispatch/useAppSelector
    │   ├── store.ts
    │   │
    │   ├── MaterialTheme/
    │   │   ├── index.ts
    │   │   ├── shadow.ts
    │   │   ├── styled.ts
    │   │   └── typography.ts
    │   │
    │   ├── components/
    │   │   ├── auth/index.tsx           # AuthenticationModal (signup+login)
    │   │   ├── divider/index.tsx
    │   │   ├── footer/index.tsx
    │   │   └── headers/
    │   │       ├── Basket.tsx
    │   │       ├── HomeNavbar.tsx
    │   │       └── OtherNavbar.tsx
    │   │
    │   ├── context/
    │   │   └── ContextProvider.tsx      # GlobalContext: authMember, basket, orderBuilder
    │   │
    │   ├── hooks/
    │   │   ├── useBasket.ts             # localStorage-backed cart
    │   │   └── useGlobals.ts
    │   │
    │   ├── services/
    │   │   ├── MemberService.ts
    │   │   ├── OrderService.ts
    │   │   └── ProductService.ts
    │   │
    │   └── screens/
    │       ├── Test.tsx                 # leftover practice component
    │       ├── helpPage/index.tsx
    │       ├── homePage/
    │       │   ├── ActiveUsers.tsx
    │       │   ├── Advertisement.tsx
    │       │   ├── Events.tsx
    │       │   ├── NewDishes.tsx
    │       │   ├── PopularDishes.tsx
    │       │   ├── Statistics.tsx
    │       │   ├── index.tsx
    │       │   ├── selector.ts
    │       │   └── slice.ts
    │       ├── ordersPage/
    │       │   ├── FinishedOrders.tsx
    │       │   ├── PausedOrders.tsx
    │       │   ├── ProcessOrders.tsx
    │       │   ├── index.tsx
    │       │   ├── selector.ts
    │       │   └── slice.ts
    │       ├── productsPage/
    │       │   ├── ChosenProduct.tsx
    │       │   ├── Products.tsx
    │       │   ├── index.tsx
    │       │   ├── selector.ts
    │       │   └── slice.ts
    │       └── userPage/
    │           ├── Settings.tsx
    │           └── index.tsx
    │
    ├── css/                             # one stylesheet per screen/component
    │   ├── app.css
    │   ├── footer.css
    │   ├── help.css
    │   ├── home.css
    │   ├── index.css
    │   ├── navbar.css
    │   ├── order.css
    │   ├── products.css
    │   └── userPage.css
    │
    └── lib/
        ├── config.ts                    # serverApi, Messages
        ├── sweetAlert.ts
        ├── data/
        │   ├── faq.ts
        │   ├── plans.ts
        │   └── terms.ts
        ├── enums/
        │   ├── member.enum.ts
        │   ├── order.enum.ts
        │   ├── product.enum.ts
        │   └── view.enum.ts
        └── types/
            ├── common.ts
            ├── member.ts
            ├── order.ts
            ├── product.ts
            ├── screen.ts               # AppRootState
            └── search.ts
```

---

## Yangilanish qoidasi

> **Eslatma:** Yuqoridagi papka daraxti (burak-react) **qattiq belgilangan namuna** sifatida saqlanadi va endi avtomatik yangilanmaydi/o'zgartirilmaydi. Fayl/papka o'zgarishlarida faqat quyidagi bo'limlar (Package Versions va h.k.) yangilab boriladi.

## Yangi loyiha qoidasi

Bu struktura faqat **shu loyiha** (burak-react) uchun hujjatlashtirilgan. Yangi boshlanadigan loyihalar bu strukturaga aynan/mexanik ravishda ko'chirilmaydi — har bir yangi loyiha o'z talablari, ko'lami va texnologik tanlovlariga qarab mustaqil loyihalanadi. Bu fayldagi struktura faqat ma'lumot/namuna sifatida ishlatiladi, shablon sifatida majburiy nusxalanmaydi.

---

## Migration Progress (bstore-react)

Yuqoridagi burak-react daraxti — namuna. Bu bo'lim esa **haqiqiy `bstore-react` loyihasida** shu namunaga qarab qurilayotgan strukturaning holatini kuzatib boradi (holat: 2026-08-23).

| Bosqich | Holat | Izoh |
|---|---|---|
| 1. `app/` core | ⏳ Qisman | `store.ts` ✅, `hooks.ts` ✅, `App.tsx` ✅ (ko'chirilgan); `App.test.tsx` ❌ hali yo'q |
| 2. `MaterialTheme/` | ⏳ Kutmoqda (noaniq) | Manba loyiha MUI ishlatmasa, umuman kerak bo'lmasligi mumkin — sotib olingan loyiha ko'rilgach hal qilinadi |
| 3. `components/` | ⏳ Qisman | `auth/`, `divider/`, `footer/`, `headers/` papkalari yaratilgan (bo'sh); ichidagi fayllar (index.tsx, Basket.tsx va h.k.) sotib olingan loyihadan mosligiga qarab yoziladi |
| 4. `context/` + `hooks/` | ✅ Skelet tayyor | `context/ContextProvider.tsx`, `hooks/useBasket.ts`, `hooks/useGlobals.ts` — barchasi bo'sh stub |
| 5. `services/` | ✅ Skelet tayyor | `services/MemberService.ts`, `OrderService.ts`, `ProductService.ts` — barchasi bo'sh stub |
| 6. `screens/` | ⏳ `homePage/` + `shop/` + `cart/` + `checkout/` + `dashboard/` + `productSingle/` + `shopNoSidebar/` + `cartGuest/` + `checkoutGift/` + `checkoutLogin/` + `auth/` + `faq/` + `compare/` + `about/` | Manba: `C:\Users\User\Desktop\bookjar\template\` (BookJar — kitob-do'koni shabloni). **Home Two** (`index-2.html`, ✅ to'liq): HeroBanner, Promo, BestBooks, BookCategories, BestSelling, PromotionBox, NewProducts, HomeBlog, Subscribe. **Shop** (`shop.html`, ✅ to'liq): Breadcrumb, ShopSidebar (kategoriya/muallif/reyting/narx filtrlari), mahsulot to'ri, pagination. **Cart** (`cart.html`, ✅ to'liq): CartItems, CheckoutSidebar, RelatedProducts (asl Slick slider o'rniga Swiper). **Checkout** (`checkout.html`, ✅ to'liq): CheckoutForm (progress-qadamlar, Account/Shipping formalari, to'lov usullari), OrderSummarySidebar (promo-kod, xavfsizlik belgisi). **Dashboard** (`my-account.html`dan ajratilgan umumiy qism, ⏳ kengaymoqda): `DashboardLayout.tsx` — endi **pathless layout route** (`<Route element={<DashboardLayout />}>` ichida har bir dashboard sahifasi o'z `path`i bilan bola-route sifatida qo'shiladi, `/my-account`ga qadalgan emas) + `DashboardSidebar.tsx` (profil kartochkasi + 8 bandli navigatsiya, `NavLink` orqali faol holat). Tayyor bola-sahifalar: `UserProfile.tsx` (`/my-account`, ✅), `EbookLibrary.tsx` (`/my-ebook-library`, ✅ — qidiruv/saralash paneli + kitob kartochkalari, yuklab olish tugmalari), `MyList.tsx` (`/my-list`, ✅ — to'plamlar to'ri, "stack" ko'rinishidagi kitob muqovalari + "Create New List" kartochkasi), `MyAddress.tsx` (`/my-address`, ✅ — sarlavha + statistika kartochkalari (Home/Office/Total), manzil kartochkalari (default belgisi, tahrirlash/o'chirish tugmalari, "Set as Default"), "Add New Address" kartochkasi, Quick Tips bloki), `MyOrders.tsx` (`/my-orders`, ✅ — qidiruv/status-filter paneli, buyurtma kartochkalari (status badge: Completed/Processing/Cancelled/Refunded, mahsulot ro'yxati, jami summa, Track Order/View Details/Reorder tugmasi holatga qarab)), `MyWishlist.tsx` (`/my-wishlist`, ✅ — chegirma/badge belgilari, reyting, format+ombor holati, narx bloki (chegirma summasi), Add to Cart/Remove tugmalari), `MyRatingReviews.tsx` (`/my-rating-reviews`, ✅ — "Pending Review"/"Reviewed" tab (React state bilan almashinadi, BestSelling'dagi tab pattern kabi), pending kartochkalarda "Write a Review" tugmasi, reviewed kartochkalarda yulduzcha reyting + matn + "Edit" havolasi), `MyFollowingAuthors.tsx` (`/my-following-authors`, ✅ — muallif kartochkalari to'ri (avatar, janr, bio, kitob/follower statistikasi, "Following since" sana, Unfollow tugmasi)). **Dashboard sidebar'ning barcha 8 ta bo'limi endi tayyor.** Shuningdek Dashboard bilan bog'liq, lekin `DashboardSidebar`siz mustaqil sahifalar: `OrderTrack.tsx` (`/order-track`, ✅ — My Orders'dagi "Track Order" tugmasidan ochiladi, o'z mustaqil sidebar'i bilan — reyting-kartochka (bosiladigan yulduzchalar, React state) + yetkazib berish manzili kartochkasi, kontent qismida buyurtma-timeline (5 bosqich) + Order Summary kartochkasi), `OrderConfirmation.tsx` (`/order-confrmation`, ✅ — "Thank you for your order" kartochkasi (nusxalanadigan buyurtma raqami, contact/shipping/payment ustunlari) + Order Summary (cart.scss'dagi mavjud `cart_checkout_summary` klasslari qayta ishlatildi) + "Popular Products You May Like" grid (cart.html'dagi shu nomli bo'limdan **farqli** — yangi `product-card`/`section-header` dizayni, alohida `orderConfirmation.scss` fayl)), `MyListCreate.tsx` (`/my-list-create`, ✅ — My List'dagi "Create New List" tugmasidan ochiladi, umumiy `DashboardSidebar`ni to'g'ridan-to'g'ri qayta ishlatadi (DashboardLayout'siz, chunki bu sahifa `.dashboard-content` emas `.account_dashboard_body` wrapper ishlatadi) — progress-qadamlar (List Info/Add Books/Save), List Details forma (sarlavha, Public/Private radio-kartochkalar, tavsif), kitob qidiruv+jadval bo'limi, Pro Tips bloki), `AddNewAddress.tsx` (`/add-new-address`, ✅ — bu sahifa standart `.dashboard-content` wrapper ishlatgani uchun **DashboardLayout ichida** joylashgan (avvalgi 2 tadan farqli) — Address Type radio-kartochkalar, Contact Information/Location Details formalari, "Set as default" toggle-switch), `MyListDetails.tsx` (`/my-list-details`, ✅ — My List'dagi to'plam kartochkasidan ochiladi, `MyListCreate.tsx`dagi kabi `DashboardSidebar`ni to'g'ridan-to'g'ri qayta ishlatadi, `account_dashboard_body` wrapper; kontent — Home'dagi `NewProducts.tsx`da allaqachon mavjud `.best_product_item_two` kitob-kartochkasini qayta ishlatadi + sahifaga xos `.ribon` (chegirma lentasi) va kattaroq `.book_title` override). **Dashboard-bilan-bog'liq barcha 5 ta "o'lik havola" endi tuzatildi** (Order Tracking, Thank You Page, Create Book List, Add New Address, Book List Details). **Product Details** (`product-single.html`, ✅ to'liq, `productSingle/`): `BookDetails.tsx` (flip qilinadigan kitob muqovasi, narx-variatsiya radio-tugmalari, 3 ta tab — Product Details/About Author/Review — React state bilan, Review tab'ida yulduzcha-taqsimot, Write/Update Review modal'lari statik ko'rinishda), `ProductSidebar.tsx` (buy-box: narx/chegirma/yetkazib berish ma'lumoti, miqdor stepper, yig'iladigan Product Details bo'limi), `FrequentlyBought.tsx` (checkbox bilan tanlanadigan 3 ta kitob + umumiy summa kartochkasi). `Breadcrumb.tsx` (Shop'dan) `label` prop bilan qayta ishlatildi. Ko'p CSS klass (`.bj_book_single`, `.bj_book_img`, `.product_sidbar`, `.cart_quantity`, `.single_product_price_variation`) allaqachon `modal.scss`da (ProductQuickView uchun) mavjud edi — qayta ishlatildi, faqat yangi qismlar (`bj_book_details_premium`, tab'lar, review bo'limi, `product_details_sidebar`, `bj_frequently_bought_area`) uchun yangi `productSingle.scss` yozildi. **Shop No Sidebar** (`shop-no-sidebar.html`, ✅ to'liq, `shopNoSidebar/`): Shop sahifasining sidebar'siz, to'liq kenglikdagi varianti — bir xil `PRODUCTS` massivi va mahsulot-kartochka markup'i Shop'dan qayta ishlatildi (faqat `col-lg-3` 4-ustunli to'r, sidebar yo'q), qo'shimcha qidiruv-filtr qatori (Title/Writer/Category radio) va "Filter" havolasi (`shopNoSidebar.scss`). `Breadcrumb`ning `label` prop'i bu yerda ham qo'llanildi (`label="Shop No Sidebar"`). **Cart Guest** (`cart-guest.html`, ✅ to'liq, `cartGuest/`): Cart'ning mehmon (login qilmagan) foydalanuvchi varianti — `CartItems.tsx` Cart'dan **o'zgarishsiz qayta ishlatildi** (aynan bir xil markup), yangi `GuestCheckoutSidebar.tsx` esa `CheckoutSidebar`dan farqli — "Shipping Address" bloki yo'q (mehmonda saqlangan manzil yo'q) va "Proceed to Checkout" `/checkout` o'rniga `/checkout-login`ga olib boradi. Yangi CSS kerak bo'lmadi — hammasi `cart.scss`dan qayta ishlatildi. **Checkout Gift** (`checkout-gift.html`, ✅ to'liq, `checkoutGift/`): asosiy Checkout'dan (`checkout-steps`/`checkout-card` "premium" dizayn) **butunlay farqli, eski-uslubdagi** `.bj_checkout_content`/`.floating-label` dizayn (Cart'ning classik uslubiga yaqin) — `CheckoutGift.tsx` (Gift From/Gift To ikki ustunli forma, dekorativ `border-image: gift-bg.png` ramka, to'lov usuli bo'limi), `GiftCheckoutSidebar.tsx` (Checkout Summary + yig'iladigan promo-kod bo'limi, `useState`). Yangi `checkoutGift.scss` fayl yozildi (hech narsa qayta ishlatib bo'lmadi, chunki bu classik dizayn hali portlanmagan edi). To'lov usuli bo'limi (`PaymentMethodCard.tsx`) alohida komponentga ajratildi, chunki u **Checkout Login**da ham aynan bir xil ishlatiladi. **Checkout Login** (`checkout-login.html`, ✅ to'liq, `checkoutLogin/`): Checkout Gift'ning to'lov+sidebar qismini (`PaymentMethodCard`, `GiftCheckoutSidebar` — ikkalasi ham `checkoutGift/`dan qayta ishlatildi) Gift From/To formasisiz ko'rsatadi — eng sodda sahifa, yangi CSS kerak bo'lmadi. **EXPLORE'ning Shop Pages tab'i endi to'liq tayyor (9/9).** **Utility Pages tab'i boshlandi**: `LoginPage`/`RegistrationPage`/`ForgotPasswordPage` (`auth/`, ✅ — bir xil `login-area`/`login-wrapper` split-screen dizayni, yangi `auth.scss`). **Muhim arxitektura eslatmasi**: bu 3 sahifada manba HTML'da Navbar/Footer **umuman yo'q** — `App.tsx`ga `BARE_PAGES` ro'yxati qo'shildi (`/login`, `/registration`, `/forgot-password`), shu yo'llarda `Navbar`/`Footer`/`ProductQuickView` shartli ravishda render qilinmaydi. Parol ko'rsatish (eye-toggle) va Forgot Password'ning muvaffaqiyat-xabari `useState` bilan ishlaydi. **FAQ** (`faq.html`, ✅ to'liq, `faq/`): `Breadcrumb`ga endi `title` prop ham qo'shildi (sarlavha matni sahifadan-sahifaga farq qiladi). 5 ta kategoriya (General/Orders/Payment/eBooks/Account), har birida 4 tadan savol — data-massiv orqali (`CATEGORIES`) qurildi, kategoriya almashish va accordion ochish/yopish `useState` bilan (Bootstrap JS o'rniga, loyihaning standart yondashuviga mos). **Typography sahifasi qurilgan va keyin olib tashlangan** (`typography.html`, 2026-08-24, foydalanuvchi qarori) — dastlab to'liq portlangan edi (manba loyihaning o'z `_typography.scss` partial fayli deyarli o'zgarishsiz ko'chirilgan holda), lekin muhokamadan so'ng bu ham Banner Style'lar kabi **real xaridor uchun hech qanday qiymat bermaydigan ichki dizayn-namoyish sahifasi** ekani aniqlandi va butunlay o'chirildi (`screens/typography/`, `scss/typography/`, navbar havolasi, route, faqat shu sahifa ishlatgan `blog/blog-list/quote_*.png` rasmlari). **Banner Style 02/03 ham ataylab o'tkazib yuborildi** (xuddi shu sabab bilan) — bular shablonning o'z ichki demo-sahifalari (`banner_animation_03` breadcrumb'ning sarlavha-matni farq qiladigan namoyishi), BookJar do'koni uchun real qiymat qo'shmaydi. **Utility Pages tab shu bilan yakunlandi: 4/7 qurilgan (Sign In, Sign Up, Forgot Password, FAQ), 3 tasi ataylab o'tkazib yuborildi/o'chirildi (Typography, Banner Style 02, Banner Style 03).** **BLOG bo'limi butunlay olib tashlandi** (2026-08-24, foydalanuvchi qarori) — sababi: BookJar manba shablonidagi blog postlari hozircha kitob mavzusiga aloqasi yo'q umumiy WordPress-uslubidagi placeholder matn ("10 Ways EazyDocs Documentation Plugin" kabi), real qiymat bermaydi. Navbar'dagi top-level "BLOG" dropdown'i (Blog Grid/Extended Grid/Blog List/Blog Details) va footer'dagi "Blog" havolasi olib tashlandi; EXPLORE'dagi "Blog & Author" tab'i ham shunga mos ravishda faqat **"Author"** deb qayta nomlandi (chunki undan Blog havolalari allaqachon dublikat sifatida chiqarilgan edi, faqat Author/Author Single qolgan). Kelajakda real kitob-mavzusidagi kontent bilan qayta qo'shilishi mumkin. **Compare** (`compare.html`, ✅ to'liq, `compare/`): SHOP dropdown'idagi "Compare" havolasi endi ishlaydi — 3 ta kitobni yonma-yon solishtiruvchi jadval (Price/Rating/Format/Pages/Language/Published/Genre/Buy Now qatorlari), har bir ustunda "Remove" tugmasi (`useState` bilan haqiqatan ro'yxatdan olib tashlaydi). **Muhim: bu sahifaning breadcrumb'i boshqalardan farqli — dekorativ parallax-qatlamlar (`bd_shape`) YO'Q**, faqat oddiy fon rasmi bilan (manba HTML'da tasdiqlandi) — shuning uchun umumiy `Breadcrumb` komponenti (Shop'dan) qayta ishlatilmadi, mustaqil oddiy breadcrumb yozildi, 3 bosqichli (Home > Shop > Compare). **Home sahifasidagi "Explore Categories" tugmasi tuzatildi** (2026-08-24) — avval `/book-listing`ga (mavjud bo'lmagan, ataylab qurilmagan sahifaga) bog'langan edi; endi bosh sahifaning o'zidagi `BookCategories.tsx` bo'limiga (`id="categories"`) silliq skroll qiladi (`onClick` + `scrollIntoView`, React Router hash-navigatsiyasiga tayanilmadi — sinab ko'rilganda ishonchsiz chiqdi). `BookCategories.tsx`ga manba HTML'da yo'q bo'lgan yangi sarlavha ("Explore Categories", `section_title`/`title` uslubida, boshqa Home bo'limlariga mos) ham qo'shildi — foydalanuvchi qarori bilan. **Book Listing sahifasi qurilmaydi** (foydalanuvchi qarori) — manba kontenti kitob mavzusiga aloqasi yo'q edi (SaaS/tech placeholder matn), Company tab'idan ham olib tashlandi. **About** (`about.html`, ✅ to'liq, `about/`): `Mission.tsx` (video-play tugmasi, "Our Mission" matni, 3 ta xususiyat-kartochkasi), `PopularAuthors.tsx` (4 ta muallif kartochkasi, `bj_team_item` — rasm ustiga sichqoncha kelganda ijtimoiy tarmoq ikonkalari `scale(0)→scale(1)` bilan paydo bo'ladi), `Testimonials.tsx` (asl Slick slayder o'rniga Swiper, "We featured by" mijoz-logotiplari). `Breadcrumb`ning `title`/`label` prop'lari qayta ishlatildi (to'liq parallax-qatlamlar bilan, chunki bu sahifada ular bor). **Kod-tekshiruv paytida o'zim topib tuzatgan xato**: `PopularAuthors`dagi ijtimoiy tarmoq ikonkalari (`social_icon`) avval doim ko'rinib turgan edi — manba CSS'da ular default holatda `transform:scale(0)` bilan yashiringan va faqat kartochka usti hover qilinganda `scale(1)`ga o'tishi kerak edi, screenshot orqali solishtirishda payqalib, SCSS'ga qo'shildi. **Contact Us** (`contact.html`, ✅ to'liq, `contact/`): `ContactForm.tsx` (butun bo'limni to'ldiruvchi `position:absolute` Google Maps iframe fon-qatlam sifatida, uning ustida `position:relative; z-index:1` oq forma-kartochka o'ng tomonga surilgan — xarita forma tufayli o'zgarmaydi/qisqarmaydi; submit `ForgotPassword.tsx`dagi pattern bilan — `useState` + muvaffaqiyat-xabari, haqiqiy backend yo'q), `SupportInfo.tsx` (3 ta kartochka: Visit Us/Call Us/Email Us, `map-icon.svg`/`phone-icon.svg`/`envelope-icon.svg`). Bu sahifada manba HTML'da breadcrumb umuman yo'q (About'dan farqli). Yangi `contact.scss` fayl yozildi. Navbar/Footer'dagi `/contact` havolalari allaqachon tayyor edi. **Terms & Services** (`terms-condition.html`, ✅ to'liq, `terms/`): manba matni shablon sotuvchisining o'z yuridik andozasi edi ("spider-themes", "WordPress themes", "Themeforest.net" kabi, BookJar'ga aloqasi yo'q) — foydalanuvchi qarori bilan tuzilma (Definitions/What BookJar offers/Eligibility/Rules/Copyright) saqlanib, matn BookJar kitob-do'koni kontekstiga moslashtirildi (foydalanuvchi tasdig'i bilan). Yangi `terms.scss` fayl (`.bj_privacy_policy .page-area`). `Breadcrumb` `title`/`label` prop'lari bilan qayta ishlatildi. **Privacy Policy** (`privacy-policy.html`, ✅ to'liq, `privacy/`): manba matni Terms'dan ham og'irroq "spider-themes" muammosiga ega edi (butun sarlavha "Spider-Themes Privacy Policy & Data Collection (GDPR) Disclosure", Envato/Themeforest/Freemius kabi WordPress-plagin-biznesiga xos xizmatlar ro'yxati) — 15 bo'limli (A–O) haqiqiy GDPR-uslubidagi tuzilma saqlanib, matn BookJar kontekstiga moslashtirildi (foydalanuvchi tasdig'i bilan, Terms bilan bir xil qarordan keyin). `Breadcrumb` bilan, CSS `scss/terms/terms.scss`dan qayta ishlatildi (manba HTML'da ham ikkala sahifa aynan bir xil `.bj_privacy_policy`/`.page-area` klasslarini ishlatadi). **EXPLORE'ning Company tab'i endi to'liq tayyor (5/5: Book Listing chiqarib tashlangan, About/Contact Us/Terms & Services/Privacy Policy qurilgan).** **Author** (`author.html`, ✅ to'liq, `author/`): muallif katalogi — `AuthorSidebar.tsx` (Qidiruv, A-Z Filter `useState` bilan, Category ro'yxati), 9 ta muallif kartochkasi (About'da qurilgan `.bj_team_item`/`about.scss` CSS'i to'g'ridan-to'g'ri qayta ishlatildi, faqat sidebar-ga xos yangi `author.scss`), pastda statik pagination (Shop'dagi bilan bir xil pattern). Har bir kartochka `/author-single`ga havola beradi (hali qurilmagan — Author tab'ining navbatdagi sahifasi). Rasmlar (`team-img6-9.jpg`) manbadan nusxalandi — "300X330" yozuvli joy-tutuvchi JPG'lar, xato emas (Shop/Cart'dagi bilan bir xil holat). **Author Single** (`author-single.html`, ✅ to'liq, `authorSingle/`): `AuthorProfile.tsx` (bio kartochka, "Awards & Nominations" statistikasi va mukofotlar ro'yxati — Lorem Ipsum matnlar manbadagidek so'zma-so'z saqlandi, About'ning Testimonials'idagi qaror bilan izchil) + `AuthorBooks.tsx` (Home'ning `NewProducts.tsx`dagi bir xil `useState` filtr pattern va `.best_product_item_two` kartochkasi qayta ishlatildi — manbada ham aynan bir xil ma'lumotlar ekani aniqlandi). **Breadcrumb'ga yangi ixtiyoriy `parent` prop qo'shildi** (bu sahifada 3 bosqichli yo'l kerak: Home > Author > Author Single, boshqa sahifalarning 2 bosqichli Home > [label]idan farqli) — kelajakda shunga o'xshash 3-bosqichli breadcrumb kerak bo'lsa shu prop qayta ishlatiladi. **EXPLORE'ning Author tab'i endi to'liq tayyor (2/2).** **Navbar'ning SHOP dropdown'i qayta tashkil qilindi (2026-08-27, foydalanuvchi qarori)**: Checkout va Compare (boshqa joylardan — savat dropdown'i va kitob kartochkalaridagi hover-ikonka orqali — hali ham yetib boriladigan) shu dropdown'dan olib tashlandi, o'rniga **Deals Offers** va **New Arrivals** qo'yildi (manbada bular Compare'ning ichki flyout'ida edi, endi flat holda: Shop / Cart / Deals Offers / New Arrivals). **Deals Offers** (`deals-offers.html`, ✅ to'liq, `dealsOffers/`): Flash Sale banneri + real ishlaydigan orqaga-sanovchi taymer (`useState`/`useEffect`, `setInterval` bilan, statik raqam emas), 4 ta chegirmali kitob kartochkasi. Breadcrumb bu yerda ham Compare'dagidek soddalashtirilgan (bd_shape parallax qatlamlarisiz) — standalone yozildi. Footer'da "Deals & Offers"/"New Arrivals" havolalari allaqachon tayyor edi. **New Arrivals** (`new-arrivals.html`, ✅ to'liq, `newArrivals/`): "Fresh Off the Press" banner, janr filtr-tab'lari (`useState` bilan faqat vizual faol holat — manbada bu tab'lar uchun haqiqiy janr-teg ma'lumoti yo'q edi, shuning uchun filtrlash mantiqi emas, faqat active-state almashinuvi qo'shildi), 8 ta "New" belgili kitob kartochkasi (sana, reyting, narx, Add to Cart/Wishlist). Breadcrumb Deals Offers'dagidek soddalashtirilgan (standalone, bd_shape'siz). **Shop dropdown qayta tashkil qilish loyihasi endi to'liq: Shop / Cart / Deals Offers / New Arrivals.** **404 (Not Found)** (`404.html`, ✅ to'liq, `notFound/`): bezakli animatsion 404-illyustratsiya, xabar matni (manbadagi "Fashion, Chair, Decoration" — boshqa shablon variantidan qolgan mos kelmagan matn — "Fiction, Non-Fiction, Bestsellers"ga tuzatildi), qidiruv maydoni, "Back to Home" tugmasi. **`App.tsx` qayta tuzildi**: avvalgi `BARE_PAGES` satr-ro'yxati bilan solishtirish o'rniga, endi `SiteLayout` (Navbar+Outlet+Footer+ProductQuickView) — barcha "oddiy" sahifalarni o'rab turuvchi pathless layout-route (DashboardLayout patternidagi kabi). Login/Registration/Forgot Password shu layout'dan tashqarida qoladi (hali ham Navbar'siz), 404 esa `Routes` ro'yxatining oxiridagi `path="*"` catch-all route sifatida — bu orqali mavjud bo'lmagan **har qanday** URL avtomatik shu sahifaga tushadi, alohida sahifalarni qo'lda ro'yxatga kiritish shart emas |
| 7. `css/` → `scss/` | ✅ Home Two + Shop + Cart + Checkout + Dashboard uchun tayyor | Manba SCSS (legacy `@import`) ekanligi sababli `.css` emas, `.scss` ishlatiladi (`sass` paketi o'rnatilgan; `darken()` kabi eskirgan funksiyalar o'rniga `@use "sass:color"` + `color.adjust()` ishlatiladi). `src/scss/index.scss` — global negiz (variables/root/predefine/preloader/header/footer, hammasi `src/scss/` ildizida), `src/scss/modal.scss` — Quick-View modal. Sahifaga xos SCSS'lar **o'z papkasida**: `src/scss/home/home.scss`, `src/scss/shop/shop.scss`, `src/scss/cart/cart.scss`, `src/scss/checkout/checkout.scss`, `src/scss/dashboard/dashboard.scss` — keyingi har bir yangi sahifa ham shu naqshda (`src/scss/<sahifa>/<sahifa>.scss`) o'z papkasiga qo'shiladi. **Muhim:** checkout'dagi promo-kod bloki manbada `.promo-section` deb nomlangan edi — bu Home Two'ning `.promo-section`(Promo Features)i bilan **klass nomi to'qnashadigan** edi (barcha sahifa CSS'lari bitta global bundle'ga yig'iladi), shuning uchun `.checkout-promo` deb qayta nomlandi (faqat ichki nom, ko'rinish bir xil). Eski `src/css/` (Vite scaffold qoldig'i) o'chirildi |
| 8. `lib/` | ✅ Skelet tayyor (mazmun hali bo'sh) | `config.ts`, `sweetAlert.ts`, `data/`, `enums/`, `types/` — barchasi stub, real mazmun keyingi bosqichlarda (services/screens qurilishi bilan) to'ldiriladi |

**Funksionallik ataylab keyinga qoldirilgan (2026-08-23):** hozirgacha qurilgan barcha sahifalar (Home, Shop, Cart, Checkout, Dashboard/User Profile) faqat **view** darajasida — filtrlar, pagination, Quick-View modalining haqiqiy mahsulot ma'lumoti, savat miqdori/o'chirish tugmalari, checkout formasi yuborilishi kabi interaktivlik hali ulanmagan (statik/dekorativ holatda). Bular `services/` orqali **backenddan real ma'lumot kelayotganda** birga ulanadi — hozircha mahalliy (soxta) holat bilan alohida ulab, keyin qayta yozish shart emas.

**Qo'shimcha (Step 1 — sayt bo'ylab umumiy qismlar, ✅ tayyor):** `components/preloader/`, `components/headers/Navbar.tsx` (mega-menyu bilan, demo-only Home 1/3/4 submenyusi olib tashlangan; `relative` prop — Home'da `false`/hero ustiga cho'kadi, boshqa sahifalarda `true`/oddiy oqimda; **SHOP dropdown foydalanuvchi so'rovi bilan tekislashtirildi** — Shop/Cart/Checkout/Compare endi ichki submenyusiz, bitta tekis ro'yxat; **`arrow_carrot-right` dekorativ belgisi keyinchalik olib tashlandi** (2026-08-24, ishlamaydigan/foydasiz dekorativ element edi); **EXPLORE mega-menyusi ham 2026-08-24'da dublikatlardan tozalandi** — boshqa dropdown'larda (SHOP/DASHBOARD/BLOG) allaqachon mavjud bo'lgan havolalar olib tashlandi: Utility Pages'dan "Sign In" (Login tugmasi orqali ham bor), Shop Pages'dan Shop/Cart/Checkout/Wishlist, **butun "Dashboard" tab'i** (12 ta havolaning barchasi DASHBOARD dropdown'ida dublikat edi — butunlay olib tashlandi, endi 5 emas 4 ta tab qoladi), Blog & Author'dan Blog Grid/Extended Grid/Blog List/Blog Details. Natijada EXPLORE 34 ta havoladan faqat **15 ta noyob** (boshqa joyda topilmaydigan) havolani saqlab qoladi — asosan Company sahifalari, ba'zi Shop/Checkout variantlari va Author sahifalari; **tab-almashtirish xatosi ham tuzatildi (2026-08-24)** — manba shablon buni jQuery orqali qo'lda boshqargan (`custom.js`dagi `Click_menu_hover()`), biz jQuery ishlatmasligimiz sababli Bootstrap'ning o'zi eski panelni yopa olmay, ikkita panel bir vaqtda ko'rinib qolar edi; endi `useState<ExploreTab>` bilan almashtirilgan — panellar DOM'da doim 4 talik qoladi (`:nth-child` rang-qoidalari to'g'ri ishlashi uchun), faqat `display:none/block` orqali ko'rsatish/yashirish qilinadi, `onMouseEnter` orqali tab tanlanadi), `components/footer/` (**butun sayt bo'ylab bitta — Home Two'nikidek zamonaviy dizayn**, manbadagi ikkinchi/eski footer variant ataylab ishlatilmadi — foydalanuvchi qarori), `components/modals/ProductQuickView.tsx`, `hooks/useParallax.ts` (breadcrumb'dagi sichqoncha-parallax effekti, `banner_animation_*` klassiga ega bo'lgan bo'limlarda qayta ishlatiladi). `bootstrap`, `react-router-dom` (routing: `/` → HomePage, `/shop` → ShopPage, `/cart` → CartPage, `/checkout` → CheckoutPage, `/my-account`, `/my-ebook-library`, `/my-list`, `/my-address`, `/my-orders`, `/my-wishlist`, `/my-rating-reviews`, `/my-following-authors`, `/add-new-address` → DashboardLayout ichida; `/order-track`, `/order-confrmation`, `/my-list-create`, `/my-list-details` → mustaqil sahifalar, o'z ichida `DashboardSidebar`ni qayta ishlatadigan yoki ishlatmaydigan; `/product-single`, `/shop-no-sidebar`, `/cart-guest`, `/checkout-gift`, `/checkout-login`, `/compare` → mustaqil, umumiy Navbar/Footer bilan; `/login`, `/registration`, `/forgot-password` → `BARE_PAGES`, Navbar/Footer'siz; `/faq` → oddiy sahifa), `wowjs`(→ global script sifatida) qo'shildi; Font Awesome/Themify/Elegant Icons/Icomoon vendor fontlari `public/vendors/`ga ko'chirildi va `index.html`da ulandi. **`components/backToTop/` qo'shildi (2026-08-28)** — sayt-buylab audit paytida topilgan yetishmayotgan element: `#back-to-top` (o'ng-pastki burchakdagi "yuqoriga qaytish" tugmasi) manbada har bir sahifada bor edi, lekin hech qachon portlanmagan. `useState<boolean>` (300px'dan ko'proq skroll qilinganda `.show` klassi) + smooth `scrollTo` bilan qurildi, global partial `src/scss/_backToTop.scss` (`index.scss`ga qo'shilgan). Faqat `SiteLayout` ichida render qilinadi (Login/Registration/Forgot Password/404'da manbada ham yo'q edi). **Bootstrap Tooltip'lar ishga tushirildi (2026-08-28)** — audit'da topilgan yana bir bo'shliq: Wishlist/Quickview/Compare hover-ikonkalaridagi `data-bs-toggle="tooltip"` atributlari hech qachon JS orqali init qilinmagan edi (Bootstrap 5'da dropdown/modal avtomatik ishlaydi, lekin tooltip alohida init talab qiladi). `App.tsx`'ning global `useEffect`iga (WOW.js bilan bir qatorda) rasmiy Bootstrap hujjatlari tavsiya qilgan **delegatsiya** patterni qo'shildi: `new Tooltip(document.body, {selector: '[data-bs-toggle="tooltip"]'})` — bitta chaqiruv butun saytdagi (hozirgi VA kelajakda render bo'ladigan) barcha tooltip-elementlarni qamrab oladi, har bir komponentni alohida o'zgartirish shart emas. `bootstrap` paketining ESM eksporti (`import { Tooltip } from "bootstrap"`) ishlatildi, TypeScript turi uchun `@types/bootstrap` devDependency sifatida qo'shildi. Puppeteer bilan haqiqiy `mouseover` event orqali tasdiqlandi (`.tooltip.show` elementi to'g'ri matn bilan paydo bo'ladi) — Puppeteer'ning sintetik `mouse.move()`/`hover()` metodlari headless muhitda haqiqiy `mouseover` bubbling event'ini ishonchli generatsiya qilmasligi aniqlandi, shuning uchun `element.dispatchEvent(new MouseEvent("mouseover", {bubbles:true}))` orqali tekshirildi.

Qo'shimcha: `src/assets/` (Vite scaffold'ning ishlatilmayotgan demo rasmlari) o'chirildi; `public/icons/`, `public/img/`, `public/video/`, `public/vendors/` papkalari yaratildi (`favicon.svg`/`icons.svg` `public/icons/`ga ko'chirildi; bookjar'dan ko'chirilgan real rasmlar `public/img/home-two/` va `public/img/home/`da).

---

## Package Versions

`package.json`da hozir o'rnatilgan versiyalar (holat: 2026-08-23, barchasi o'rnatish vaqtidagi eng so'nggi versiya sifatida tanlangan).

### `dependencies`

| Paket | Versiya |
|---|---|
| `@emotion/react` | ^11.14.0 |
| `@emotion/styled` | ^11.14.1 |
| `@mui/icons-material` | ^9.3.1 |
| `@mui/joy` | ^5.0.0-beta.52 |
| `@mui/lab` | ^9.0.0-beta.8 |
| `@mui/material` | ^9.3.1 |
| `@reduxjs/toolkit` | ^2.12.0 |
| `axios` | ^1.19.0 |
| `moment` | ^2.30.1 |
| `react` | ^19.2.8 |
| `react-dom` | ^19.2.8 |
| `react-redux` | ^9.3.0 |
| `react-router-dom` | ^7.18.2 |
| `redux-logger` | ^3.0.6 |
| `styled-components` | ^6.5.3 |
| `sweetalert2` | ^11.26.25 |
| `swiper` | ^14.1.0 |
| `universal-cookie` | ^8.1.2 |
| `web-vitals` | ^6.1.1 |

### `devDependencies`

| Paket | Versiya |
|---|---|
| `@testing-library/jest-dom` | ^6.9.1 |
| `@testing-library/react` | ^16.3.2 |
| `@testing-library/user-event` | ^14.6.6 |
| `@types/jest` | ^30.0.0 |
| `@types/node` | ^24.13.3 |
| `@types/react` | ^19.2.17 |
| `@types/react-dom` | ^19.2.3 |
| `@types/redux-logger` | ^3.0.13 |
| `@types/styled-components` | ^5.1.36 |
| `@vitejs/plugin-react` | ^6.0.4 |
| `oxlint` | ^1.75.0 |
| `typescript` | ~6.0.2 |
| `vite` | ^8.2.0 |

**Eslatma:**
- `react-scripts` va `@material-ui/core` (v4) ataylab o'rnatilmagan — loyiha Vite'da qurilgan va MUI'ning joriy `@mui/material` (v5+ chizig'i) ishlatiladi.
- `@types/axios` va `@types/react-router-dom` ataylab o'rnatilmagan — `axios` va `react-router-dom` (v7) endi o'z TypeScript tiplarini o'zi ta'minlaydi.
- `@testing-library/*` paketlari o'rnatilgan, lekin hali test ishga tushiruvchi (Vitest/Jest) sozlanmagan — sozlanmaguncha testlar ishlamaydi.

---

## Environment Variables (.env)

Manba: rasmiy Vite hujjatlari ([vite.dev/guide/env-and-mode](https://vite.dev/guide/env-and-mode)), tekshirilgan sana: 2026-08-23.

### Fayl turlari
| Fayl | Qamrov | Git holati |
|---|---|---|
| `.env` | Barcha rejimlarda yuklanadi | **Commit qilinadi** (faqat maxfiy bo'lmagan default qiymatlar) |
| `.env.local` | Barcha rejimlarda yuklanadi | **Gitignore qilinadi** (mahalliy/maxfiy qiymatlar) |
| `.env.[mode]` | Faqat shu rejimda (masalan `.env.production`) | Commit qilinadi |
| `.env.[mode].local` | Faqat shu rejimda | Gitignore qilinadi |

### Qoidalar
- Faqat **`VITE_`** prefiksli o'zgaruvchilar client kodga chiqadi: `import.meta.env.VITE_SOME_KEY`. Prefikssiz o'zgaruvchilar (masalan `DB_PASSWORD`) build'ga kirmaydi.
- **Hech qachon maxfiy kalit/parolni `VITE_` prefiksi bilan yozmang** — u build paytida browser kodiga qadab qo'yiladi va oshkor bo'ladi.
- Yuklash tartibi (yuqoridan pastga ustunlik): 1) tizim env o'zgaruvchilari → 2) `.env.[mode].local`/`.env.[mode]` → 3) `.env.local`/`.env`.

### Joriy loyihadagi holat
`.env`da hozircha faqat `PORT=3009` bor (dev server porti, `vite.config.ts` ichida `loadEnv()` orqali o'qiladi va `server.port`ga uzatiladi). Bu maxfiy emas — shuning uchun `VITE_` prefikssiz va commit qilingan holda saqlanadi (`.gitignore`da `.env` yo'q). Haqiqiy maxfiy kalitlar (`serverApi` manzillari, tokenlar va h.k.) keyinchalik qo'shilsa, ular `.env.local`ga yozilishi kerak — u `.gitignore`dagi `*.local` qoidasi bilan avtomatik chiqarib tashlanadi.

---

## Backend integratsiyasi — schema/tur qatlami (2026-08-29, boshlangan)

Foydalanuvchi so'rovi bilan (`C:\Users\User\Desktop\bstore-react` bo'ylab 4 ta parallel agent orqali to'liq backend-tayyorlik auditi o'tkazilgandan so'ng) `src/lib/types/`/`src/lib/enums/` — avval bo'sh bo'lgan stub fayllar — endi haqiqiy mazmun bilan to'ldirilmoqda. Bu ish **`C:\Users\User\Desktop\burak-react`** (xuddi shu skelet asosida qurilgan, to'liq ishlagan referens loyiha — restoran-do'koni, MUI+Redux+CRA) tuzilmasini o'rganib, LightBooks'ning kitob-do'koni sohasiga moslashtirish orqali qurilmoqda, shuningdek schema.org'ning rasmiy `Book`/`Offer` standarti va Google Books API'ning amaliy modeli bilan solishtirib tasdiqlangan (`bookFormat` schema.org'ning `BookFormatType` enumiga mos, `averageRating`/`ratingsCount` alohida-alohida — Google Books'ning `averageRating`/`ratingsCount` pattern'iga mos).

**Auditda topilgan asosiy muammo**: 40+ sahifaning har biri "Kitob"/"Manzil"/"Buyurtma" uchun o'z mustaqil, bir-biriga mos kelmaydigan ma'lumot shaklini "o'ylab topgan" edi (masalan "Kitob" uchun 7 xil interfeys, "Manzil" uchun 4 xil, "Buyurtma" uchun 3 xil — hech biri umumiy tur ishlatmagan). Hech qanday global state (savat/foydalanuvchi sessiyasi) yo'q edi — `useBasket.ts`/`useGlobals.ts` butunlay bo'sh. Dinamik marshrutlash yo'q — hech bir sahifada `:id` parametri yo'q, shuning uchun masalan Author Single doim bir xil "Gustavo Carder"ni ko'rsatadi.

**Hozircha yozilgan** (`src/lib/enums/`: `product.enum.ts`, `member.enum.ts`, `order.enum.ts`, `address.enum.ts`, `collection.enum.ts`, `view.enum.ts`; `src/lib/types/`: `product.ts`, `member.ts`, `order.ts`, `search.ts`, `common.ts`, `author.ts`, `address.ts`, `review.ts`, `collection.ts`):
- `Product` (Kitob) — burak-react'ning `productStatus/productCollection/productSize/productVolume` (ovqat-do'koniga xos) o'rniga `bookStatus/genres[]/bookFormat` (kitobga xos, schema.org asosida); yangi maydonlar: `authorId, isbn, publisher, publishedDate, pageCount, language, averageRating, ratingsCount`
- `Member` — burak-react'dagi bitta `memberNick`/`memberAddress` o'rniga `firstName/lastName` (UserProfile formasiga mos) va **manzil maydoni yo'q** (alohida `Address` turi orqali, chunki LightBooks'da butun Address Book funksiyasi bor)
- `Order` — `OrderStatus` (PENDING/PROCESSING/COMPLETED/CANCELLED/REFUNDED, MyOrders sahifasida topilgan holatlarga mos) + `PaymentMethod` (auditda topilgan `payment_method`/`check_payment_method` nom-nomuvofiqligini birlashtiradi)
- **Yangi, faqat LightBooks'ga xos** (burak-react'da yo'q edi): `Author` (bio, statistikalar — copiesSold/bookCount/awardCount/followerCount), `Address` (Address Book uchun, `AddressType` HOME/OFFICE bilan), `Review`, `Collection` (Book List, `CollectionVisibility` PUBLIC/PRIVATE bilan)

**Muhim texnik moslashtirish**: `tsconfig.app.json`'da `erasableSyntaxOnly` + `verbatimModuleSyntax` yoqilgan (burak-react'da yo'q edi) — shuning uchun haqiqiy `enum` o'rniga `as const` obyekt + hosila tur pattern ishlatildi, va faqat-tur importlar `import type` bilan belgilandi.

**Keyingi bosqichlar** (burak-react patternidan, lekin Bootstrap/SCSS saqlanadi — MUI yo'q; Redux Toolkit ixtiyoriy, ehtimol oddiy `useState`/Context yetarli): 2) Service qatlami (`src/app/services/ProductService.ts` va h.k., `axios` bilan, hozircha real backend yo'qligi sababli mock ma'lumot qaytaradi lekin real API chaqiruv shaklida — `async`, `Promise`), 3) Global state (`useBasket`/`useGlobals`/`ContextProvider`, `localStorage`-asosida savat), 4) Dinamik marshrutlash (`:id` parametrlari), 5) Formalarni ulash.

## Kelajakdagi backend integratsiyasi uchun eslatmalar

Bu bo'lim hozir amalga oshirilmaydigan, lekin backend/`services/` bosqichida hisobga olinishi kerak bo'lgan qarorlarni saqlaydi (foydalanuvchi "saqlab qo'y" deb boshlagan xabarlar shu yerga yoziladi).

- **eBook Library — yuklab olish (`download`) mantig'i:** `src/app/screens/dashboard/EbookLibrary.tsx`dagi "Download Code / PDF / EPUB" tugmalari hozir faqat statik `<a href download>` havolalar — barcha uchtasi manba shablonidagi bitta ishlamaydigan tashqi demo-URL'ga (`googleguide.com/...pdf`) bog'langan, haqiqiy fayl yo'q.
  - **Talab:** yuklab olish tugmasi bosilganda fayl **brauzer orqali kompyuterga (diskka) yuklanishi** kerak — bu native browser download bo'lishi kerak. Fayl **`localStorage`/`IndexedDB`/mahalliy JS-xotiraga saqlanmaydi** — bu shunchaki noto'g'ri yondashuv (fayl brauzer xotirasida emas, foydalanuvchi qurilmasining fayl tizimida saqlanishi kerak).
  - **Rejalashtirilgan yechim (hali amalga oshirilmagan, faqat reja):** backend integratsiyasi bosqichida (`services/`ga ulanganda) har bir kitob uchun real fayl-manzil (`serverApi` orqali, masalan `/api/ebooks/:id/download?format=pdf`) beriladi; `<a href={realFileUrl} download>` shu manzilga ishora qiladi va brauzer standart tarzda yuklab oladi. Backend hali yo'qligi sababli hozircha bu tugmalar funksional emas — **hech qanday kod hozircha yozilmagan va yozilmasligi kerak**, bu faqat kelajakdagi reja sifatida qayd etilgan.

- **Home'dagi "Explore Categories" kartochkalari — haqiqiy kategoriyalarga yo'naltirish (2026-08-28, foydalanuvchi so'ragan):** `src/app/screens/homePage/BookCategories.tsx`dagi 7 ta kategoriya kartochkasi (Uncategorized/Biography/Mystery/Drama/History/Fiction/Romantic) hozir `href="#"` — manbaning o'zida ham shunday (statik ko'p-sahifali saytda zararsiz), lekin LightBooks SPA'sida bu React tomonidan ushlanmagan native anchor-jump'ga sabab bo'ladi: bosilganda sahifa hero (eng tepa) qismiga sakraydi — foydalanuvchi tomonidan aniqlangan haqiqiy vizual xato.
  - **Talab:** har bir kartochka bosilganda `/shop` sahifasiga, **shu aniq kategoriya bo'yicha oldindan filtrlangan holda** o'tishi kerak (masalan `/shop?category=Fiction`, Shop'ning kategoriya-checkbox'i shu queryni o'qib avtomatik belgilanadi).
  - **Nega hozir emas:** bu Shop'ning kategoriya-filtrlarini (hozir statik/ulanmagan checkbox'lar) haqiqiy holatga ulashni talab qiladi — bu boshqa barcha "funksional ulash" ishlari kabi backend/`services/` bosqichigacha kechiktiriladi (foydalanuvchi: "biryola backendi ulaganda haqiqiy categorialarga jonatamz").
  - **Rejalashtirilgan yechim:** backend integratsiyasi bosqichida Shop'ning filtr-state'i (`useState`/URL query-parametr orqali) qurilganda, `BookCategories.tsx`dagi har bir `href="#"`ni `/shop?category=${label}`ga almashtirish va Shop'da mos checkbox'ni shu queryga qarab oldindan belgilash. **Hozircha kod yozilmagan** — faqat reja sifatida qayd etilgan.

**Navbar qidiruv tugmasi tuzatildi (2026-08-28):** BookJar bilan LightBooks'ni to'liq solishtirish natijasida topilgan xato — qidiruv ikonkasi bosilganda hech narsa sodir bo'lmas edi (`.menu-search-form` CSS'da standart holatda `opacity:0;visibility:hidden`, faqat ota `<li>`ga `.open` klassi qo'shilganda ko'rinadi; bu klassni qo'shadigan JS hech qachon portlanmagan edi). `src/app/components/headers/Navbar.tsx`ga `useState<boolean>` (ochiq/yopiq holat) + `useRef<HTMLInputElement>` qo'shildi — ikonka bosilganda `.open` klassi almashinadi, ochilganda 500ms'dan keyin inputga fokus beriladi (manbadagi `custom.js`ning xatti-harakati aniq takrorlandi). React'ning rasmiy hujjatlariga ko'ra (react.dev/learn/manipulating-the-dom-with-refs), aniq event-handler mavjud bo'lgani uchun `useEffect` emas, to'g'ridan-to'g'ri handler ichida `ref.focus()` ishlatildi. Puppeteer bilan haqiqiy klik-testi orqali tasdiqlandi (ochilish/yopilish/fokus — barchasi to'g'ri ishlaydi).

---

## Ish jarayoni qoidalari (foydalanuvchi bilan hamkorlik)

Bu bo'lim ushbu loyihada Claude qanday ishlashi kerakligini belgilaydi (foydalanuvchi tomonidan 2026-08-24'da tasdiqlangan qoidalar).

1. **Kod o'zgartirishdan oldin har doim ruxsat so'ralsin.** Hech qanday fayl yozish/tahrirlash/o'chirish foydalanuvchining aniq "ha" javobisiz amalga oshirilmaydi.

2. **Har qanday buyruqda — ayniqsa mantiq/muammoga aloqador bo'lsa — avval tushunilgani aytilsin, so'ng yechim variantlari berilsin, va shundan keyin ruxsat so'ralsin.** Bu faqat noaniq buyruqlarga emas, **har qanday** funksional/kod-mantiqiy o'zgarishga (masalan bir sahifani olib tashlash, havolani qayta yo'naltirish, xatoni tuzatish) tegishli. To'g'ridan-to'g'ri bajarishga o'tish (avval tushuntirmasdan) — qoidabuzarlik hisoblanadi.

3. **Variantlar shunchaki o'ylab topilmasin — o'xshash manbalardan yoki rasmiy hujjatlardan asoslansin.** Masalan: bir tugmani qayerga yo'naltirish kerakligi haqida qaror qabul qilinganda, o'xshash saytlar/andozalar qanday qilishini yoki tegishli hujjatlarni tekshirib, o'sha asosda variant taklif qilinsin — faqat shaxsiy taxmindan emas.

4. **Oddiy matnda javob so'ralsin** — tanlov-tugma (`AskUserQuestion`) o'rniga oddiy savol-javob tarzida.

5. **Faqat foydalanuvchi "commit qil" desa commit qilinadi**, va hatto shunda ham avval commit xabari taklif qilinib, foydalanuvchi tasdiqlagandan keyin (yoki o'z xabarini bergandan keyin) commit amalga oshiriladi.

6. **Har bir sahifa/funksiya qurilgach**: build (`npm run build`/`yarn build`) va lint (`npm run lint`/`yarn lint`) tekshirilishi, so'ng ekran-rasm orqali (yoki interaktiv holatlar uchun avtomatlashtirilgan test orqali) asl dizayn/mantiq bilan solishtirilishi, va natija foydalanuvchiga qisqacha hisobot qilib berilishi kerak.
