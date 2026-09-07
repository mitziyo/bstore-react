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
| 6. `screens/` | ⏳ `homePage/` + `shop/` + `cart/` + `checkout/` + `dashboard/` + `productSingle/` + `shopNoSidebar/` + `cartGuest/` + `checkoutGift/` + `checkoutLogin/` + `auth/` + `faq/` + `about/` | Manba: `C:\Users\User\Desktop\bookjar\template\` (BookJar — kitob-do'koni shabloni). **Home Two** (`index-2.html`, ✅ to'liq): HeroBanner, Promo, BestBooks, BookCategories, BestSelling, PromotionBox, NewProducts, HomeBlog, Subscribe. **Shop** (`shop.html`, ✅ to'liq): Breadcrumb, ShopSidebar (kategoriya/muallif/reyting/narx filtrlari), mahsulot to'ri, pagination. **Cart** (`cart.html`, ✅ to'liq): CartItems, CheckoutSidebar, RelatedProducts (asl Slick slider o'rniga Swiper). **Checkout** (`checkout.html`, ✅ to'liq): CheckoutForm (progress-qadamlar, Account/Shipping formalari, to'lov usullari), OrderSummarySidebar (promo-kod, xavfsizlik belgisi). **Dashboard** (`my-account.html`dan ajratilgan umumiy qism, ⏳ kengaymoqda): `DashboardLayout.tsx` — endi **pathless layout route** (`<Route element={<DashboardLayout />}>` ichida har bir dashboard sahifasi o'z `path`i bilan bola-route sifatida qo'shiladi, `/my-account`ga qadalgan emas) + `DashboardSidebar.tsx` (profil kartochkasi + 8 bandli navigatsiya, `NavLink` orqali faol holat). Tayyor bola-sahifalar: `UserProfile.tsx` (`/my-account`, ✅), `EbookLibrary.tsx` (`/my-ebook-library`, ✅ — qidiruv/saralash paneli + kitob kartochkalari, yuklab olish tugmalari), `MyList.tsx` (`/my-list`, ✅ — to'plamlar to'ri, "stack" ko'rinishidagi kitob muqovalari + "Create New List" kartochkasi), `MyAddress.tsx` (`/my-address`, ✅ — sarlavha + statistika kartochkalari (Home/Office/Total), manzil kartochkalari (default belgisi, tahrirlash/o'chirish tugmalari, "Set as Default"), "Add New Address" kartochkasi, Quick Tips bloki), `MyOrders.tsx` (`/my-orders`, ✅ — qidiruv/status-filter paneli, buyurtma kartochkalari (status badge: Completed/Processing/Cancelled/Refunded, mahsulot ro'yxati, jami summa, Track Order/View Details/Reorder tugmasi holatga qarab)), `MyWishlist.tsx` (`/my-wishlist`, ✅ — chegirma/badge belgilari, reyting, format+ombor holati, narx bloki (chegirma summasi), Add to Cart/Remove tugmalari), `MyRatingReviews.tsx` (`/my-rating-reviews`, ✅ — "Pending Review"/"Reviewed" tab (React state bilan almashinadi, BestSelling'dagi tab pattern kabi), pending kartochkalarda "Write a Review" tugmasi, reviewed kartochkalarda yulduzcha reyting + matn + "Edit" havolasi), `MyFollowingAuthors.tsx` (`/my-following-authors`, ✅ — muallif kartochkalari to'ri (avatar, janr, bio, kitob/follower statistikasi, "Following since" sana, Unfollow tugmasi)). **Dashboard sidebar'ning barcha 8 ta bo'limi endi tayyor.** Shuningdek Dashboard bilan bog'liq, lekin `DashboardSidebar`siz mustaqil sahifalar: `OrderTrack.tsx` (`/order-track`, ✅ — My Orders'dagi "Track Order" tugmasidan ochiladi, o'z mustaqil sidebar'i bilan — reyting-kartochka (bosiladigan yulduzchalar, React state) + yetkazib berish manzili kartochkasi, kontent qismida buyurtma-timeline (5 bosqich) + Order Summary kartochkasi), `OrderConfirmation.tsx` (`/order-confrmation`, ✅ — "Thank you for your order" kartochkasi (nusxalanadigan buyurtma raqami, contact/shipping/payment ustunlari) + Order Summary (cart.scss'dagi mavjud `cart_checkout_summary` klasslari qayta ishlatildi) + "Popular Products You May Like" grid (cart.html'dagi shu nomli bo'limdan **farqli** — yangi `product-card`/`section-header` dizayni, alohida `orderConfirmation.scss` fayl)), `MyListCreate.tsx` (`/my-list-create`, ✅ — My List'dagi "Create New List" tugmasidan ochiladi, umumiy `DashboardSidebar`ni to'g'ridan-to'g'ri qayta ishlatadi (DashboardLayout'siz, chunki bu sahifa `.dashboard-content` emas `.account_dashboard_body` wrapper ishlatadi) — progress-qadamlar (List Info/Add Books/Save), List Details forma (sarlavha, Public/Private radio-kartochkalar, tavsif), kitob qidiruv+jadval bo'limi, Pro Tips bloki), `AddNewAddress.tsx` (`/add-new-address`, ✅ — bu sahifa standart `.dashboard-content` wrapper ishlatgani uchun **DashboardLayout ichida** joylashgan (avvalgi 2 tadan farqli) — Address Type radio-kartochkalar, Contact Information/Location Details formalari, "Set as default" toggle-switch), `MyListDetails.tsx` (`/my-list-details`, ✅ — My List'dagi to'plam kartochkasidan ochiladi, `MyListCreate.tsx`dagi kabi `DashboardSidebar`ni to'g'ridan-to'g'ri qayta ishlatadi, `account_dashboard_body` wrapper; kontent — Home'dagi `NewProducts.tsx`da allaqachon mavjud `.best_product_item_two` kitob-kartochkasini qayta ishlatadi + sahifaga xos `.ribon` (chegirma lentasi) va kattaroq `.book_title` override). **Dashboard-bilan-bog'liq barcha 5 ta "o'lik havola" endi tuzatildi** (Order Tracking, Thank You Page, Create Book List, Add New Address, Book List Details). **Product Details** (`product-single.html`, ✅ to'liq, `productSingle/`): `BookDetails.tsx` (flip qilinadigan kitob muqovasi, narx-variatsiya radio-tugmalari, 3 ta tab — Product Details/About Author/Review — React state bilan, Review tab'ida yulduzcha-taqsimot, Write/Update Review modal'lari statik ko'rinishda), `ProductSidebar.tsx` (buy-box: narx/chegirma/yetkazib berish ma'lumoti, miqdor stepper, yig'iladigan Product Details bo'limi), `FrequentlyBought.tsx` (checkbox bilan tanlanadigan 3 ta kitob + umumiy summa kartochkasi). `Breadcrumb.tsx` (Shop'dan) `label` prop bilan qayta ishlatildi. Ko'p CSS klass (`.bj_book_single`, `.bj_book_img`, `.product_sidbar`, `.cart_quantity`, `.single_product_price_variation`) allaqachon `modal.scss`da (ProductQuickView uchun) mavjud edi — qayta ishlatildi, faqat yangi qismlar (`bj_book_details_premium`, tab'lar, review bo'limi, `product_details_sidebar`, `bj_frequently_bought_area`) uchun yangi `productSingle.scss` yozildi. **Shop No Sidebar** (`shop-no-sidebar.html`, ✅ to'liq, `shopNoSidebar/`): Shop sahifasining sidebar'siz, to'liq kenglikdagi varianti — bir xil `PRODUCTS` massivi va mahsulot-kartochka markup'i Shop'dan qayta ishlatildi (faqat `col-lg-3` 4-ustunli to'r, sidebar yo'q), qo'shimcha qidiruv-filtr qatori (Title/Writer/Category radio) va "Filter" havolasi (`shopNoSidebar.scss`). `Breadcrumb`ning `label` prop'i bu yerda ham qo'llanildi (`label="Shop No Sidebar"`). **Cart Guest** (`cart-guest.html`, ✅ to'liq, `cartGuest/`): Cart'ning mehmon (login qilmagan) foydalanuvchi varianti — `CartItems.tsx` Cart'dan **o'zgarishsiz qayta ishlatildi** (aynan bir xil markup), yangi `GuestCheckoutSidebar.tsx` esa `CheckoutSidebar`dan farqli — "Shipping Address" bloki yo'q (mehmonda saqlangan manzil yo'q) va "Proceed to Checkout" `/checkout` o'rniga `/checkout-login`ga olib boradi. Yangi CSS kerak bo'lmadi — hammasi `cart.scss`dan qayta ishlatildi. **Checkout Gift** (`checkout-gift.html`, ✅ to'liq, `checkoutGift/`): asosiy Checkout'dan (`checkout-steps`/`checkout-card` "premium" dizayn) **butunlay farqli, eski-uslubdagi** `.bj_checkout_content`/`.floating-label` dizayn (Cart'ning classik uslubiga yaqin) — `CheckoutGift.tsx` (Gift From/Gift To ikki ustunli forma, dekorativ `border-image: gift-bg.png` ramka, to'lov usuli bo'limi), `GiftCheckoutSidebar.tsx` (Checkout Summary + yig'iladigan promo-kod bo'limi, `useState`). Yangi `checkoutGift.scss` fayl yozildi (hech narsa qayta ishlatib bo'lmadi, chunki bu classik dizayn hali portlanmagan edi). To'lov usuli bo'limi (`PaymentMethodCard.tsx`) alohida komponentga ajratildi, chunki u **Checkout Login**da ham aynan bir xil ishlatiladi. **Checkout Login** (`checkout-login.html`, ✅ to'liq, `checkoutLogin/`): Checkout Gift'ning to'lov+sidebar qismini (`PaymentMethodCard`, `GiftCheckoutSidebar` — ikkalasi ham `checkoutGift/`dan qayta ishlatildi) Gift From/To formasisiz ko'rsatadi — eng sodda sahifa, yangi CSS kerak bo'lmadi. **EXPLORE'ning Shop Pages tab'i endi to'liq tayyor (9/9).** **Utility Pages tab'i boshlandi**: `LoginPage`/`RegistrationPage`/`ForgotPasswordPage` (`auth/`, ✅ — bir xil `login-area`/`login-wrapper` split-screen dizayni, yangi `auth.scss`). **Muhim arxitektura eslatmasi**: bu 3 sahifada manba HTML'da Navbar/Footer **umuman yo'q** — `App.tsx`ga `BARE_PAGES` ro'yxati qo'shildi (`/login`, `/registration`, `/forgot-password`), shu yo'llarda `Navbar`/`Footer`/`ProductQuickView` shartli ravishda render qilinmaydi. Parol ko'rsatish (eye-toggle) va Forgot Password'ning muvaffaqiyat-xabari `useState` bilan ishlaydi. **FAQ** (`faq.html`, ✅ to'liq, `faq/`): `Breadcrumb`ga endi `title` prop ham qo'shildi (sarlavha matni sahifadan-sahifaga farq qiladi). 5 ta kategoriya (General/Orders/Payment/eBooks/Account), har birida 4 tadan savol — data-massiv orqali (`CATEGORIES`) qurildi, kategoriya almashish va accordion ochish/yopish `useState` bilan (Bootstrap JS o'rniga, loyihaning standart yondashuviga mos). **Typography sahifasi qurilgan va keyin olib tashlangan** (`typography.html`, 2026-08-24, foydalanuvchi qarori) — dastlab to'liq portlangan edi (manba loyihaning o'z `_typography.scss` partial fayli deyarli o'zgarishsiz ko'chirilgan holda), lekin muhokamadan so'ng bu ham Banner Style'lar kabi **real xaridor uchun hech qanday qiymat bermaydigan ichki dizayn-namoyish sahifasi** ekani aniqlandi va butunlay o'chirildi (`screens/typography/`, `scss/typography/`, navbar havolasi, route, faqat shu sahifa ishlatgan `blog/blog-list/quote_*.png` rasmlari). **Banner Style 02/03 ham ataylab o'tkazib yuborildi** (xuddi shu sabab bilan) — bular shablonning o'z ichki demo-sahifalari (`banner_animation_03` breadcrumb'ning sarlavha-matni farq qiladigan namoyishi), BookJar do'koni uchun real qiymat qo'shmaydi. **Utility Pages tab shu bilan yakunlandi: 4/7 qurilgan (Sign In, Sign Up, Forgot Password, FAQ), 3 tasi ataylab o'tkazib yuborildi/o'chirildi (Typography, Banner Style 02, Banner Style 03).** **BLOG bo'limi butunlay olib tashlandi** (2026-08-24, foydalanuvchi qarori) — sababi: BookJar manba shablonidagi blog postlari hozircha kitob mavzusiga aloqasi yo'q umumiy WordPress-uslubidagi placeholder matn ("10 Ways EazyDocs Documentation Plugin" kabi), real qiymat bermaydi. Navbar'dagi top-level "BLOG" dropdown'i (Blog Grid/Extended Grid/Blog List/Blog Details) va footer'dagi "Blog" havolasi olib tashlandi; EXPLORE'dagi "Blog & Author" tab'i ham shunga mos ravishda faqat **"Author"** deb qayta nomlandi (chunki undan Blog havolalari allaqachon dublikat sifatida chiqarilgan edi, faqat Author/Author Single qolgan). Kelajakda real kitob-mavzusidagi kontent bilan qayta qo'shilishi mumkin. **Compare — butunlay olib tashlandi (2026-08-30, foydalanuvchi qarori)**: dastlab `compare.html`dan to'liq portlangan edi (3 ta kitobni solishtiruvchi jadval, `useState` bilan "Remove"), keyin foydalanuvchi bu mantiqni loyihadan umuman chiqarib tashlashni so'radi. `screens/compare/` va `scss/compare/` papkalari, `/compare` route va uning `App.tsx`dagi importi o'chirildi; Navbar SHOP dropdown'i va barcha kitob-kartochkalaridagi `.hover_item`dan "Compare" ikonkasi (`ti-control-shuffle`) olib tashlandi. **O'rniga: har bir kitob-kartochkasining pastki-o'ng burchagida doim ko'rinadigan ko'rishlar-soni belgisi (`.view-badge`, `fa-regular fa-eye` + son)** qo'shildi — global partial `src/scss/_viewBadge.scss` (`index.scss`ga ulangan). Qamrov: `shop/index.tsx`, `shopNoSidebar/index.tsx`, `homePage/NewProducts.tsx`, `homePage/BestSelling.tsx`, `authorSingle/AuthorBooks.tsx`, `dashboard/MyListDetails.tsx` — har birida mahsulot ma'lumotlariga `views: number` maydoni qo'shildi (hozircha statik namuna-qiymatlar, backend ulanganda haqiqiy ko'rishlar-soniga almashtiriladi). Burchak har bir kartochkada oldindan tekshirildi — `pr_ribbon` (New belgisi/reyting) yuqori burchaklarni band qilgani uchun pastki-o'ng bo'sh va xavfsiz joy sifatida tanlandi. **Home sahifasidagi "Explore Categories" tugmasi tuzatildi** (2026-08-24) — avval `/book-listing`ga (mavjud bo'lmagan, ataylab qurilmagan sahifaga) bog'langan edi; endi bosh sahifaning o'zidagi `BookCategories.tsx` bo'limiga (`id="categories"`) silliq skroll qiladi (`onClick` + `scrollIntoView`, React Router hash-navigatsiyasiga tayanilmadi — sinab ko'rilganda ishonchsiz chiqdi). `BookCategories.tsx`ga manba HTML'da yo'q bo'lgan yangi sarlavha ("Explore Categories", `section_title`/`title` uslubida, boshqa Home bo'limlariga mos) ham qo'shildi — foydalanuvchi qarori bilan. **Book Listing sahifasi qurilmaydi** (foydalanuvchi qarori) — manba kontenti kitob mavzusiga aloqasi yo'q edi (SaaS/tech placeholder matn), Company tab'idan ham olib tashlandi. **About** (`about.html`, ✅ to'liq, `about/`): `Mission.tsx` (video-play tugmasi, "Our Mission" matni, 3 ta xususiyat-kartochkasi), `PopularAuthors.tsx` (4 ta muallif kartochkasi, `bj_team_item` — rasm ustiga sichqoncha kelganda ijtimoiy tarmoq ikonkalari `scale(0)→scale(1)` bilan paydo bo'ladi), `Testimonials.tsx` (asl Slick slayder o'rniga Swiper, "We featured by" mijoz-logotiplari). `Breadcrumb`ning `title`/`label` prop'lari qayta ishlatildi (to'liq parallax-qatlamlar bilan, chunki bu sahifada ular bor). **Kod-tekshiruv paytida o'zim topib tuzatgan xato**: `PopularAuthors`dagi ijtimoiy tarmoq ikonkalari (`social_icon`) avval doim ko'rinib turgan edi — manba CSS'da ular default holatda `transform:scale(0)` bilan yashiringan va faqat kartochka usti hover qilinganda `scale(1)`ga o'tishi kerak edi, screenshot orqali solishtirishda payqalib, SCSS'ga qo'shildi. **Contact Us** (`contact.html`, ✅ to'liq, `contact/`): `ContactForm.tsx` (butun bo'limni to'ldiruvchi `position:absolute` Google Maps iframe fon-qatlam sifatida, uning ustida `position:relative; z-index:1` oq forma-kartochka o'ng tomonga surilgan — xarita forma tufayli o'zgarmaydi/qisqarmaydi; submit `ForgotPassword.tsx`dagi pattern bilan — `useState` + muvaffaqiyat-xabari, haqiqiy backend yo'q), `SupportInfo.tsx` (3 ta kartochka: Visit Us/Call Us/Email Us, `map-icon.svg`/`phone-icon.svg`/`envelope-icon.svg`). Bu sahifada manba HTML'da breadcrumb umuman yo'q (About'dan farqli). Yangi `contact.scss` fayl yozildi. Navbar/Footer'dagi `/contact` havolalari allaqachon tayyor edi. **Terms & Services** (`terms-condition.html`, ✅ to'liq, `terms/`): manba matni shablon sotuvchisining o'z yuridik andozasi edi ("spider-themes", "WordPress themes", "Themeforest.net" kabi, BookJar'ga aloqasi yo'q) — foydalanuvchi qarori bilan tuzilma (Definitions/What BookJar offers/Eligibility/Rules/Copyright) saqlanib, matn BookJar kitob-do'koni kontekstiga moslashtirildi (foydalanuvchi tasdig'i bilan). Yangi `terms.scss` fayl (`.bj_privacy_policy .page-area`). `Breadcrumb` `title`/`label` prop'lari bilan qayta ishlatildi. **Privacy Policy** (`privacy-policy.html`, ✅ to'liq, `privacy/`): manba matni Terms'dan ham og'irroq "spider-themes" muammosiga ega edi (butun sarlavha "Spider-Themes Privacy Policy & Data Collection (GDPR) Disclosure", Envato/Themeforest/Freemius kabi WordPress-plagin-biznesiga xos xizmatlar ro'yxati) — 15 bo'limli (A–O) haqiqiy GDPR-uslubidagi tuzilma saqlanib, matn BookJar kontekstiga moslashtirildi (foydalanuvchi tasdig'i bilan, Terms bilan bir xil qarordan keyin). `Breadcrumb` bilan, CSS `scss/terms/terms.scss`dan qayta ishlatildi (manba HTML'da ham ikkala sahifa aynan bir xil `.bj_privacy_policy`/`.page-area` klasslarini ishlatadi). **EXPLORE'ning Company tab'i endi to'liq tayyor (5/5: Book Listing chiqarib tashlangan, About/Contact Us/Terms & Services/Privacy Policy qurilgan).** **Author** (`author.html`, ✅ to'liq, `author/`): muallif katalogi — `AuthorSidebar.tsx` (Qidiruv, A-Z Filter `useState` bilan, Category ro'yxati), 9 ta muallif kartochkasi (About'da qurilgan `.bj_team_item`/`about.scss` CSS'i to'g'ridan-to'g'ri qayta ishlatildi, faqat sidebar-ga xos yangi `author.scss`), pastda statik pagination (Shop'dagi bilan bir xil pattern). Har bir kartochka `/author-single`ga havola beradi (hali qurilmagan — Author tab'ining navbatdagi sahifasi). Rasmlar (`team-img6-9.jpg`) manbadan nusxalandi — "300X330" yozuvli joy-tutuvchi JPG'lar, xato emas (Shop/Cart'dagi bilan bir xil holat). **Author Single** (`author-single.html`, ✅ to'liq, `authorSingle/`): `AuthorProfile.tsx` (bio kartochka, "Awards & Nominations" statistikasi va mukofotlar ro'yxati — Lorem Ipsum matnlar manbadagidek so'zma-so'z saqlandi, About'ning Testimonials'idagi qaror bilan izchil) + `AuthorBooks.tsx` (Home'ning `NewProducts.tsx`dagi bir xil `useState` filtr pattern va `.best_product_item_two` kartochkasi qayta ishlatildi — manbada ham aynan bir xil ma'lumotlar ekani aniqlandi). **Breadcrumb'ga yangi ixtiyoriy `parent` prop qo'shildi** (bu sahifada 3 bosqichli yo'l kerak: Home > Author > Author Single, boshqa sahifalarning 2 bosqichli Home > [label]idan farqli) — kelajakda shunga o'xshash 3-bosqichli breadcrumb kerak bo'lsa shu prop qayta ishlatiladi. **EXPLORE'ning Author tab'i endi to'liq tayyor (2/2).** **Navbar'ning SHOP dropdown'i qayta tashkil qilindi (2026-08-27, foydalanuvchi qarori)**: Checkout va Compare (boshqa joylardan — savat dropdown'i va kitob kartochkalaridagi hover-ikonka orqali — hali ham yetib boriladigan) shu dropdown'dan olib tashlandi, o'rniga **Deals Offers** va **New Arrivals** qo'yildi (manbada bular Compare'ning ichki flyout'ida edi, endi flat holda: Shop / Cart / Deals Offers / New Arrivals). **Deals Offers** (`deals-offers.html`, ✅ to'liq, `dealsOffers/`): Flash Sale banneri + real ishlaydigan orqaga-sanovchi taymer (`useState`/`useEffect`, `setInterval` bilan, statik raqam emas), 4 ta chegirmali kitob kartochkasi. Breadcrumb bu yerda ham Compare'dagidek soddalashtirilgan (bd_shape parallax qatlamlarisiz) — standalone yozildi. Footer'da "Deals & Offers"/"New Arrivals" havolalari allaqachon tayyor edi. **New Arrivals** (`new-arrivals.html`, ✅ to'liq, `newArrivals/`): "Fresh Off the Press" banner, janr filtr-tab'lari (`useState` bilan faqat vizual faol holat — manbada bu tab'lar uchun haqiqiy janr-teg ma'lumoti yo'q edi, shuning uchun filtrlash mantiqi emas, faqat active-state almashinuvi qo'shildi), 8 ta "New" belgili kitob kartochkasi (sana, reyting, narx, Add to Cart/Wishlist). Breadcrumb Deals Offers'dagidek soddalashtirilgan (standalone, bd_shape'siz). **Shop dropdown qayta tashkil qilish loyihasi endi to'liq: Shop / Cart / Deals Offers / New Arrivals.** **404 (Not Found)** (`404.html`, ✅ to'liq, `notFound/`): bezakli animatsion 404-illyustratsiya, xabar matni (manbadagi "Fashion, Chair, Decoration" — boshqa shablon variantidan qolgan mos kelmagan matn — "Fiction, Non-Fiction, Bestsellers"ga tuzatildi), qidiruv maydoni, "Back to Home" tugmasi. **`App.tsx` qayta tuzildi**: avvalgi `BARE_PAGES` satr-ro'yxati bilan solishtirish o'rniga, endi `SiteLayout` (Navbar+Outlet+Footer+ProductQuickView) — barcha "oddiy" sahifalarni o'rab turuvchi pathless layout-route (DashboardLayout patternidagi kabi). Login/Registration/Forgot Password shu layout'dan tashqarida qoladi (hali ham Navbar'siz), 404 esa `Routes` ro'yxatining oxiridagi `path="*"` catch-all route sifatida — bu orqali mavjud bo'lmagan **har qanday** URL avtomatik shu sahifaga tushadi, alohida sahifalarni qo'lda ro'yxatga kiritish shart emas |
| 7. `css/` → `scss/` | ✅ Home Two + Shop + Cart + Checkout + Dashboard uchun tayyor | Manba SCSS (legacy `@import`) ekanligi sababli `.css` emas, `.scss` ishlatiladi (`sass` paketi o'rnatilgan; `darken()` kabi eskirgan funksiyalar o'rniga `@use "sass:color"` + `color.adjust()` ishlatiladi). `src/scss/index.scss` — global negiz (variables/root/predefine/preloader/header/footer, hammasi `src/scss/` ildizida), `src/scss/modal.scss` — Quick-View modal. Sahifaga xos SCSS'lar **o'z papkasida**: `src/scss/home/home.scss`, `src/scss/shop/shop.scss`, `src/scss/cart/cart.scss`, `src/scss/checkout/checkout.scss`, `src/scss/dashboard/dashboard.scss` — keyingi har bir yangi sahifa ham shu naqshda (`src/scss/<sahifa>/<sahifa>.scss`) o'z papkasiga qo'shiladi. **Muhim:** checkout'dagi promo-kod bloki manbada `.promo-section` deb nomlangan edi — bu Home Two'ning `.promo-section`(Promo Features)i bilan **klass nomi to'qnashadigan** edi (barcha sahifa CSS'lari bitta global bundle'ga yig'iladi), shuning uchun `.checkout-promo` deb qayta nomlandi (faqat ichki nom, ko'rinish bir xil). Eski `src/css/` (Vite scaffold qoldig'i) o'chirildi |
| 8. `lib/` | ✅ Skelet tayyor (mazmun hali bo'sh) | `config.ts`, `sweetAlert.ts`, `data/`, `enums/`, `types/` — barchasi stub, real mazmun keyingi bosqichlarda (services/screens qurilishi bilan) to'ldiriladi |

**Funksionallik ataylab keyinga qoldirilgan (2026-08-23):** hozirgacha qurilgan barcha sahifalar (Home, Shop, Cart, Checkout, Dashboard/User Profile) faqat **view** darajasida — filtrlar, pagination, Quick-View modalining haqiqiy mahsulot ma'lumoti, savat miqdori/o'chirish tugmalari, checkout formasi yuborilishi kabi interaktivlik hali ulanmagan (statik/dekorativ holatda). Bular `services/` orqali **backenddan real ma'lumot kelayotganda** birga ulanadi — hozircha mahalliy (soxta) holat bilan alohida ulab, keyin qayta yozish shart emas.

**Qo'shimcha (Step 1 — sayt bo'ylab umumiy qismlar, ✅ tayyor):** `components/preloader/`, `components/headers/Navbar.tsx` (mega-menyu bilan, demo-only Home 1/3/4 submenyusi olib tashlangan; `relative` prop — Home'da `false`/hero ustiga cho'kadi, boshqa sahifalarda `true`/oddiy oqimda; **SHOP dropdown foydalanuvchi so'rovi bilan tekislashtirildi** — Shop/Cart/Checkout/Compare endi ichki submenyusiz, bitta tekis ro'yxat; **`arrow_carrot-right` dekorativ belgisi keyinchalik olib tashlandi** (2026-08-24, ishlamaydigan/foydasiz dekorativ element edi); **EXPLORE mega-menyusi ham 2026-08-24'da dublikatlardan tozalandi** — boshqa dropdown'larda (SHOP/DASHBOARD/BLOG) allaqachon mavjud bo'lgan havolalar olib tashlandi: Utility Pages'dan "Sign In" (Login tugmasi orqali ham bor), Shop Pages'dan Shop/Cart/Checkout/Wishlist, **butun "Dashboard" tab'i** (12 ta havolaning barchasi DASHBOARD dropdown'ida dublikat edi — butunlay olib tashlandi, endi 5 emas 4 ta tab qoladi), Blog & Author'dan Blog Grid/Extended Grid/Blog List/Blog Details. Natijada EXPLORE 34 ta havoladan faqat **15 ta noyob** (boshqa joyda topilmaydigan) havolani saqlab qoladi — asosan Company sahifalari, ba'zi Shop/Checkout variantlari va Author sahifalari; **tab-almashtirish xatosi ham tuzatildi (2026-08-24)** — manba shablon buni jQuery orqali qo'lda boshqargan (`custom.js`dagi `Click_menu_hover()`), biz jQuery ishlatmasligimiz sababli Bootstrap'ning o'zi eski panelni yopa olmay, ikkita panel bir vaqtda ko'rinib qolar edi; endi `useState<ExploreTab>` bilan almashtirilgan — panellar DOM'da doim 4 talik qoladi (`:nth-child` rang-qoidalari to'g'ri ishlashi uchun), faqat `display:none/block` orqali ko'rsatish/yashirish qilinadi, `onMouseEnter` orqali tab tanlanadi), `components/footer/` (**butun sayt bo'ylab bitta — Home Two'nikidek zamonaviy dizayn**, manbadagi ikkinchi/eski footer variant ataylab ishlatilmadi — foydalanuvchi qarori), `components/modals/ProductQuickView.tsx`, `hooks/useParallax.ts` (breadcrumb'dagi sichqoncha-parallax effekti, `banner_animation_*` klassiga ega bo'lgan bo'limlarda qayta ishlatiladi). `bootstrap`, `react-router-dom` (routing: `/` → HomePage, `/shop` → ShopPage, `/cart` → CartPage, `/checkout` → CheckoutPage, `/my-account`, `/my-ebook-library`, `/my-list`, `/my-address`, `/my-orders`, `/my-wishlist`, `/my-rating-reviews`, `/my-following-authors`, `/add-new-address` → DashboardLayout ichida; `/order-track`, `/order-confrmation`, `/my-list-create`, `/my-list-details` → mustaqil sahifalar, o'z ichida `DashboardSidebar`ni qayta ishlatadigan yoki ishlatmaydigan; `/product-single`, `/shop-no-sidebar`, `/cart-guest`, `/checkout-gift`, `/checkout-login` → mustaqil, umumiy Navbar/Footer bilan; `/login`, `/registration`, `/forgot-password` → `BARE_PAGES`, Navbar/Footer'siz; `/faq` → oddiy sahifa), `wowjs`(→ global script sifatida) qo'shildi; Font Awesome/Themify/Elegant Icons/Icomoon vendor fontlari `public/vendors/`ga ko'chirildi va `index.html`da ulandi. **`components/backToTop/` qo'shildi (2026-08-28)** — sayt-buylab audit paytida topilgan yetishmayotgan element: `#back-to-top` (o'ng-pastki burchakdagi "yuqoriga qaytish" tugmasi) manbada har bir sahifada bor edi, lekin hech qachon portlanmagan. `useState<boolean>` (300px'dan ko'proq skroll qilinganda `.show` klassi) + smooth `scrollTo` bilan qurildi, global partial `src/scss/_backToTop.scss` (`index.scss`ga qo'shilgan). Faqat `SiteLayout` ichida render qilinadi (Login/Registration/Forgot Password/404'da manbada ham yo'q edi). **Bootstrap Tooltip'lar ishga tushirildi (2026-08-28)** — audit'da topilgan yana bir bo'shliq: Wishlist/Quickview hover-ikonkalaridagi `data-bs-toggle="tooltip"` atributlari hech qachon JS orqali init qilinmagan edi (Bootstrap 5'da dropdown/modal avtomatik ishlaydi, lekin tooltip alohida init talab qiladi). `App.tsx`'ning global `useEffect`iga (WOW.js bilan bir qatorda) rasmiy Bootstrap hujjatlari tavsiya qilgan **delegatsiya** patterni qo'shildi: `new Tooltip(document.body, {selector: '[data-bs-toggle="tooltip"]'})` — bitta chaqiruv butun saytdagi (hozirgi VA kelajakda render bo'ladigan) barcha tooltip-elementlarni qamrab oladi, har bir komponentni alohida o'zgartirish shart emas. `bootstrap` paketining ESM eksporti (`import { Tooltip } from "bootstrap"`) ishlatildi, TypeScript turi uchun `@types/bootstrap` devDependency sifatida qo'shildi. Puppeteer bilan haqiqiy `mouseover` event orqali tasdiqlandi (`.tooltip.show` elementi to'g'ri matn bilan paydo bo'ladi) — Puppeteer'ning sintetik `mouse.move()`/`hover()` metodlari headless muhitda haqiqiy `mouseover` bubbling event'ini ishonchli generatsiya qilmasligi aniqlandi, shuning uchun `element.dispatchEvent(new MouseEvent("mouseover", {bubbles:true}))` orqali tekshirildi.

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

- **Forgot Password — telefon orqali reset (2026-09-05, foydalanuvchi tanladi):** `ForgotPassword.tsx`dagi maydon "Email Address"dan **"Phone Number"ga** o'zgartirildi (real `Member` sxemasida email umuman yo'q, faqat `memberNick`/`memberPhone` bor). Hozircha faqat frontend ko'rinishi — forma hali hech qanday backend'ga ulanmagan (`onSubmit` faqat local `setSubmitted(true)`). **Rejalashtirilgan backend** (keyinroq): `POST /member/forgot-password` (`memberPhone` bo'yicha qidiradi, `resetToken`+`resetTokenExpiry` generatsiya qiladi, real SMS-gateway yo'qligi sababli tokenni javobda to'g'ridan-to'g'ri qaytaradi — dev-rejim) + `POST /member/reset-password` (`resetToken`+yangi parol, `bcrypt` bilan xeshlaydi) + yangi `ResetPassword.tsx` sahifa/`/reset-password/:token` route. **Hozircha kod yozilmagan** — faqat reja sifatida qayd etilgan.

- **Subscribe (newsletter) va Contact Us murojaatlari uchun admin panel (2026-09-05, foydalanuvchi so'rovi bilan saqlab qo'yildi):** Hozir `Subscribe.tsx`ning forma yuborilishi hech narsa qilmaydi (`onSubmit` yo'q), Contact sahifasidagi forma esa hatto `useState`/handler'siz to'liq statik. Kelajakda: LightBooks-Store backend'ida 2 ta yangi oddiy model (`Subscriber`: email+createdAt; `ContactMessage`: name/email/message+createdAt) + ularga mos public submit-endpoint va admin ro'yxat-endpoint (`verifyAdmin` bilan himoyalangan, Book/User panelidagi naqsh bo'yicha) qo'shiladi, so'ng admin SSR panelga shu ikkisini ko'rsatadigan bitta yangi sahifa qo'shiladi. **Hozircha kod yozilmagan** — faqat reja sifatida qayd etilgan, backend integratsiyasi bosqichida qo'lga olinadi.

- **Sayt bo'ylab barcha qidiruv/saralash maydonlari (2026-08-30, foydalanuvchi so'rovi bilan kechiktirildi):** `HeroBanner.tsx`ning qidiruv maydoni (`<form>` ham emas, hech narsa qilmaydi), Shop'ning qidiruv formasi (`action="#"`, `onSubmit` yo'q — submit qilinsa sahifa noto'g'ri qayta yuklanadi) va "Sort by" tanlov-menyusi (`onChange` yo'q), Navbar/Author/NotFound'ning qidiruv maydonlari — **barchasi backend/qidiruv-API ulanguncha tegilmaydi**. Foydalanuvchi: "bular backend ulanganda qilinadi, tugmalarga bog'liq mantiqlar turib tursin".

- **eBook Library — yuklab olish (`download`) mantig'i:** `src/app/screens/dashboard/EbookLibrary.tsx`dagi "Download Code / PDF / EPUB" tugmalari hozir faqat statik `<a href download>` havolalar — barcha uchtasi manba shablonidagi bitta ishlamaydigan tashqi demo-URL'ga (`googleguide.com/...pdf`) bog'langan, haqiqiy fayl yo'q.
  - **Talab:** yuklab olish tugmasi bosilganda fayl **brauzer orqali kompyuterga (diskka) yuklanishi** kerak — bu native browser download bo'lishi kerak. Fayl **`localStorage`/`IndexedDB`/mahalliy JS-xotiraga saqlanmaydi** — bu shunchaki noto'g'ri yondashuv (fayl brauzer xotirasida emas, foydalanuvchi qurilmasining fayl tizimida saqlanishi kerak).
  - **Rejalashtirilgan yechim (hali amalga oshirilmagan, faqat reja):** backend integratsiyasi bosqichida (`services/`ga ulanganda) har bir kitob uchun real fayl-manzil (`serverApi` orqali, masalan `/api/ebooks/:id/download?format=pdf`) beriladi; `<a href={realFileUrl} download>` shu manzilga ishora qiladi va brauzer standart tarzda yuklab oladi. Backend hali yo'qligi sababli hozircha bu tugmalar funksional emas — **hech qanday kod hozircha yozilmagan va yozilmasligi kerak**, bu faqat kelajakdagi reja sifatida qayd etilgan.

- **Home'dagi "Explore Categories" kartochkalari — haqiqiy kategoriyalarga yo'naltirish (2026-08-28, foydalanuvchi so'ragan):** `src/app/screens/homePage/BookCategories.tsx`dagi 7 ta kategoriya kartochkasi (Uncategorized/Biography/Mystery/Drama/History/Fiction/Romantic) hozir `href="#"` — manbaning o'zida ham shunday (statik ko'p-sahifali saytda zararsiz), lekin LightBooks SPA'sida bu React tomonidan ushlanmagan native anchor-jump'ga sabab bo'ladi: bosilganda sahifa hero (eng tepa) qismiga sakraydi — foydalanuvchi tomonidan aniqlangan haqiqiy vizual xato.
  - **Talab:** har bir kartochka bosilganda `/shop` sahifasiga, **shu aniq kategoriya bo'yicha oldindan filtrlangan holda** o'tishi kerak (masalan `/shop?category=Fiction`, Shop'ning kategoriya-checkbox'i shu queryni o'qib avtomatik belgilanadi).
  - **Nega hozir emas:** bu Shop'ning kategoriya-filtrlarini (hozir statik/ulanmagan checkbox'lar) haqiqiy holatga ulashni talab qiladi — bu boshqa barcha "funksional ulash" ishlari kabi backend/`services/` bosqichigacha kechiktiriladi (foydalanuvchi: "biryola backendi ulaganda haqiqiy categorialarga jonatamz").
  - **Rejalashtirilgan yechim:** backend integratsiyasi bosqichida Shop'ning filtr-state'i (`useState`/URL query-parametr orqali) qurilganda, `BookCategories.tsx`dagi har bir `href="#"`ni `/shop?category=${label}`ga almashtirish va Shop'da mos checkbox'ni shu queryga qarab oldindan belgilash. **Hozircha kod yozilmagan** — faqat reja sifatida qayd etilgan.

- **New Arrivals — janr-filtr tab'lari faqat vizual (2026-08-30, foydalanuvchi so'ragan):** `src/app/screens/newArrivals/NewArrivalsGrid.tsx`dagi `FILTERS` tab'lari (All/Fiction/Non-Fiction/Romance/Thriller/Self-Help) bosilganda faqat `.active` klass almashadi — `BOOKS` massividagi 8 ta kitobning hech birida `category`/`tag` maydoni yo'q, shuning uchun ro'yxat hech qachon filtrlanmaydi (qaysi tab bosilmasin, doim bir xil 8 ta kitob ko'rinadi). Shu bilan bir qatorda pastdagi "Load More" tugmasi ham ko'proq kitob yuklamaydi — shunchaki `/shop`ga havola.
  - **Nega hozir emas:** kitoblarga soxta `category` maydoni qo'shib mijoz-tomonidagi filtrlashni simulyatsiya qilishning ma'nosi yo'q — real backend kelganda bu API-so'rov orqali (`GET /books?category=Fiction`) butunlay boshqacha qurilishi kerak. Foydalanuvchi: "bu hozirgi mantiqlarni backendni ulayotganda hal qilib bo'ladimi" — tasdiqlangan.
  - **Rejalashtirilgan yechim:** backend integratsiyasi bosqichida (`services/`ga ulanganda) filtr-tab bosilganda haqiqiy kategoriya-parametri bilan API so'rovi yuboriladi, natija shu asosida render qilinadi. **Hozircha kod yozilmagan** — faqat reja sifatida qayd etilgan.

- **Shop sahifasining o'zidagi sidebar Categories ro'yxati — vizual qismi tuzatildi (2026-08-29, foydalanuvchi topgan, darhol tuzatilishi so'ralgan).** `src/app/screens/shop/ShopSidebar.tsx`dagi `CATEGORIES`/`MORE_CATEGORIES` bandlari (`Fiction`, `Drama`, `Novels` va h.k.) `href="#"` bilan yozilgan edi, `onClick`/`preventDefault` yo'q — bosilganda sahifa boshiga notinch sakrar edi. **Endi `useState<string> activeCategory`** bilan (loyihaning boshqa filtr/tab elementlarida — NewProducts, AuthorBooks, NewArrivalsGrid — allaqachon ishlatilgan pattern) — bosilganda `preventDefault()` + faol kategoriya vizual ravishda almashadi (`category-list__item--active` klassi), Puppeteer bilan tasdiqlandi (sahifa boshiga sakrash yo'qoldi, faol band to'g'ri almashadi). **Haqiqiy mahsulot-filtrlash hali kechiktirilgan** — bu faqat vizual/UI holat, real ma'lumotlarni filtrlash backend integratsiyasi bosqichida qo'shiladi (yuqoridagi "Explore Categories" bandi bilan bir xil sabab).

**Navbar'ning faol-yo'l (active route) belgilash mantig'i tuzatildi (2026-08-29, foydalanuvchi topgan).** Foydalanuvchi Shop sahifasida ekanida Navbar'da "SHOP" rangi o'zgarmasligini payqadi va bu burak-react'da qanday hal qilinganini so'radi — burak-react `react-router-dom`ning `NavLink` komponentini ishlatadi (`activeClassName`, eski v5 sintaksisi). Tekshirilganda, LightBooks Navbar'i **umuman `react-router-dom` import qilmagan** edi — HOME `<li>`sida `className="nav-item active"` **doim qattiq yozilgan** (`useLocation` yoki `NavLink` ishlatilmagan), qolgan bandlar esa hech qachon faol bo'lolmas edi. Bu loyihaning o'zida allaqachon `DashboardSidebar.tsx`da to'g'ri qo'llanilgan zamonaviy pattern (`NavLink` + `({isActive}) => ...`) bor edi, lekin Navbar'ga hech qachon qo'llanilmagan. **Yechim**: to'liq `NavLink`ga o'tish o'rniga (Navbar'da dropdown-toggle uchun `data-bs-toggle="dropdown"` atributi ham borligi sababli), `useLocation().pathname` asosida HOME/SHOP/DASHBOARD `<li>` klasslarini dinamik hisoblash qo'shildi (`SHOP_PATHS`/`DASHBOARD_PATHS` massivlari — dropdown ichidagi barcha havolalarni qamrab oladi). Skrinshot bilan tasdiqlandi: `/shop`da SHOP, `/my-orders`da DASHBOARD to'g'ri ko'k rangda ko'rsatiladi.

**Checkout formasidagi 3 ta kichik xato tuzatildi (4/5/6-bandlar, 2026-08-29):** (4) "Forgot password?" havolasi `href="#"` edi, `/forgot-password`ga tuzatildi. (5) `address_type` (Home/Office) radio guruhi "Shipping Address" bo'limining `<form>` tegidan **tashqarida** joylashgan edi (hozircha formalar submit qilinmagani uchun amaliy ta'sir yo'q, lekin backend ulanganda FormData bilan yig'ilmay qolar edi) — `<form>` ochilish tegi radio guruhni ham qamrab oladigan qilib ko'chirildi. (6) "Full Address *" labelida majburiy belgisi (`*`) bor edi, lekin `<textarea>`da `required` atributi yo'q edi — qo'shildi. Skrinshot bilan tasdiqlandi — vizual ko'rinish o'zgarmadi (kutilganidek, faqat HTML struktura/atributlar tuzatildi).

**Contact sahifasining fon-xaritasi haqiqiy manzilga o'rnatildi (2026-08-29, foydalanuvchi so'rovi bilan).** `ContactForm.tsx`dagi Google Maps iframe manba HTML'dan qolgan mos kelmaydigan `q=manhatan` (yozuv xatosi, SupportInfo'dagi "98 Main Avenue, Brooklyn"ga ham mos kelmas edi) o'rniga foydalanuvchi bergan haqiqiy manzil bilan almashtirildi (avval `16 Munye-ro, Seo-gu, Daejeon` sinab ko'rildi, so'ng foydalanuvchi **`6-24 Goejeong-dong, Seo-gu, Daejeon`**ga almashtirdi — hozirgi yakuniy qiymat), zoom darajasi ham 13→15ga oshirildi (aniq ko'cha-manzil uchun mosroq). Har ikkala manzil ham `curl` orqali tasdiqlandi — URL to'g'ri Google Maps embed'ga yo'naltiriladi; headless-skrinshot testida xarita bo'sh ko'rinadi (avval hujjatlashtirilgan Google consent-oqimi cheklovi, kod xatosi emas — real brauzerda to'g'ri ishlaydi).

**Auditda topilgan kamchiliklarni birma-bir tuzatish boshlandi (2026-08-29).** 1-band: Registration formasining yuborish tugmasi "Log In" deb yozilgan edi (manbaning o'zida ham shunday xato bor edi, `registration.html`) — "Sign Up"ga tuzatildi. Shu bilan bir qatorda, foydalanuvchi so'rovi bilan **sayt bo'ylab barcha matn ko'rinishidagi "BookJar"/"Bookjar" so'zlari "LightBooks"ga almashtirildi** (9 ta fayl: Preloader, Registration sarlavhasi, Terms, Privacy, Footer mualliflik huquqi va email, FAQ savol-javoblari va email, ProductSidebar, HomeBlog sarlavhalari, OrderTrack) — jumladan `hello@bookjar.com`/`support@bookjar.com` email manzillari ham `@lightbooks.com`ga o'zgartirildi (domen hali olinmagan, lekin foydalanuvchi aynan shunday xohladi). **Logotip matni (`/img/home-two/logo-dark.svg` ichidagi "BookJar" so'zi) ataylab tegilmadi** — foydalanuvchi alohida LightBooks logotipini yuborishini aytdi, shunda rasm fayli almashtiriladi.

**LightBooks logotiplari qo'shildi va joylashtirildi (2026-08-29).** Foydalanuvchi ikkita rasm yubordi: (1) katta, vertikal "light / books." PNG wordmark — bu `vtracer` (Python, `pip install vtracer`, `colormode='binary', mode='spline'`) yordamida **haqiqiy vektor SVG'ga aylantirildi** (`public/icons/logo-wordmark.svg`, piksel-aniqlikda) va **Preloader ekraniga** joylashtirildi (`_preloader.scss`ga `.preloader-logo` qoidasi qo'shildi, 170px kenglik). **Muhim texnik eslatma**: `vtracer` Python 3.14'da segfault berdi — Python 3.13'ga o'tkazilgach ishladi (loyihada ikkala Python versiyasi ham o'rnatilgan edi); kelajakda shunga o'xshash vositalar bilan muammo chiqsa, Python versiyasini tekshirish kerak. (2) Kichik, gorizontal "LB" nishon-belgisi (`public/icons/favicon.ico`, foydalanuvchi tomonidan qo'shilgan) — bu **Navbar, Login/Registration/Forgot Password, Footer**dagi eski `logo-dark.svg`ni almashtirdi: yangi umumiy `.logo-lockup` klassi (`src/scss/_logo.scss`, `index.scss`ga qo'shilgan) — ikonka (`logo-icon.png`, favicon.ico'dan PNG sifatida saqlangan) + `<span>LightBooks</span>` matnini gorizontal joylashtiradi, Footer uchun oq rang override bilan (`.footer-modern__logo.logo-lockup span { color: #fff }`, chunki Footer foni to'q). GEMINI_API_KEY sozlanmagani sababli AI-logotip generatsiyasi ishlatilmadi — buning o'rniga mavjud rasm(lar) qayta ishlatildi.

**Navbar qidiruv tugmasi tuzatildi (2026-08-28):** BookJar bilan LightBooks'ni to'liq solishtirish natijasida topilgan xato — qidiruv ikonkasi bosilganda hech narsa sodir bo'lmas edi (`.menu-search-form` CSS'da standart holatda `opacity:0;visibility:hidden`, faqat ota `<li>`ga `.open` klassi qo'shilganda ko'rinadi; bu klassni qo'shadigan JS hech qachon portlanmagan edi). `src/app/components/headers/Navbar.tsx`ga `useState<boolean>` (ochiq/yopiq holat) + `useRef<HTMLInputElement>` qo'shildi — ikonka bosilganda `.open` klassi almashinadi, ochilganda 500ms'dan keyin inputga fokus beriladi (manbadagi `custom.js`ning xatti-harakati aniq takrorlandi). React'ning rasmiy hujjatlariga ko'ra (react.dev/learn/manipulating-the-dom-with-refs), aniq event-handler mavjud bo'lgani uchun `useEffect` emas, to'g'ridan-to'g'ri handler ichida `ref.focus()` ishlatildi. Puppeteer bilan haqiqiy klik-testi orqali tasdiqlandi (ochilish/yopilish/fokus — barchasi to'g'ri ishlaydi).

---

## Backend arxitekturasi — `burak` loyihasidan o'rganilgan andoza (LightBooks backendini qurish uchun)

Bu bo'lim `C:\Users\User\Desktop\burak` (Express + TypeScript + MongoDB/Mongoose backend, `burak-react` frontendining serveri) loyihasini to'liq o'rganish natijasi (2026-08-30). LightBooks'ning o'z backendini shu andoza asosida, kitob-do'koni domeniga moslab quramiz. Foydalanuvchi tasdiqlagan yo'nalish: **Express, ikkita router (SPA/REST + Admin/SSR), `burak`dagi har bir qatlam/API o'rganilgan holda.**

### Papka tuzilmasi (`burak`)

```
burak/
├── .env                        # PORT, MONGO_URL, SESSION_SECRET, SECRET_TOKEN
├── package.json                # express, mongoose, bcryptjs, ejs, morgan, dotenv + (keyinroq) cors, cookie-parser, express-session, connect-mongodb-session, jsonwebtoken, multer, uuid
├── tsconfig.json                # target ES2020, module/moduleResolution NodeNext, rootDir ./src, outDir ./dist, strict:true
├── uploads/                     # multer bilan yuklangan rasmlar (.gitignore'da — repo'ga tushmaydi)
│   ├── members/                 # foydalanuvchi/restoran rasmlari
│   └── products/                # mahsulot rasmlari
└── src/
    ├── server.ts                 # KIRISH NUQTASI: dotenv → mongoose.connect → app.listen
    ├── app.ts                    # Express sozlash: middleware'lar + ikkita router ulanadi
    ├── router.ts                 # "/" — SPA/REST (React frontend uchun, JSON qaytaradi)
    ├── router-admin.ts           # "/admin" — SSR (EJS render qiladi, admin-panel uchun)
    ├── controllers/
    │   ├── member.controller.ts     # SPA: login/signup/logout/detail/update/top-users, + verifyAuth/retrieveAuth middleware
    │   ├── restaurant.controller.ts # SSR: goHome/getLogin/getSignup/processLogin/processSignup/logout/getUsers/updateChosenUser/checkAuthSession, + verifyRestaurant middleware
    │   ├── product.controller.ts    # ikkalasi ham: SPA (getProducts/getProduct) + SSR (getAllProducts/createNewProduct/updatedChosenProduct)
    │   └── order.controller.ts      # faqat SPA: createOrder/getMyOrders/updateOrder
    ├── models/                      # "service" deb nomlangan, lekin bu — BIZNES-MANTIQ qatlami (controller emas)
    │   ├── Member.service.ts
    │   ├── Auth.service.ts          # faqat JWT: createToken/checkAuth
    │   ├── Product.service.ts       # ichida ViewService'ni ham chaqiradi (ko'rishlar hisoblash uchun)
    │   ├── Order.service.ts         # ichida MemberService'ni ham chaqiradi (order PROCESS bo'lganda ball qo'shish uchun)
    │   └── View.service.ts
    ├── schema/                      # mongoose Schema + model (bittasi bir faylda)
    │   ├── Member.model.ts
    │   ├── Product.model.ts
    │   ├── Order.model.ts
    │   ├── OrderItem.model.ts       # Order'dan alohida kolleksiya, orderId+productId bilan bog'langan
    │   └── View.model.ts            # memberId+viewRefId+viewGroup — takroriy ko'rishni oldini olish uchun
    ├── libs/
    │   ├── config.ts                # AUTH_TIMER, MORGAN_FORMAT, shapeIntoMongoseObjectId() (string→ObjectId helper)
    │   ├── Error.ts                 # HttpCode enum + Message enum + Errors klassi (Error'dan meros)
    │   ├── enums/                   # {member,product,order,view}.enum.ts — haqiqiy TS `enum` (backend'da erasableSyntaxOnly yo'q)
    │   ├── types/                   # {member,product,order,view,common}.ts — interfeyslar, + ExtendedRequest/AdminRequest (Express Request kengaytmasi)
    │   └── utils/
    │       └── uploader.ts          # multer diskStorage fabrikasi: makeUploader("products") → papka+uuid nomli fayl
    ├── views/                       # EJS shablonlar — pastda alohida tushuntirilgan
    └── public/                      # /css, /js, /img — statik, page-nomiga mos fayllar (masalan products.css+products.js)
```

### `package.json` (burak, versiyalar o'zgarishsiz — kelajakda LightBooks backend uchun asos sifatida ishlatiladi)

```json
{
  "scripts": {
    "start": "ts-node src/server.ts",
    "start:dev": "nodemon --exec ts-node src/server.ts",
    "build": "tsc",
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "dependencies": {
    "bcryptjs": "^2.4.3",
    "connect-mongodb-session": "^3.1.1",
    "cookie-parser": "^1.4.7",
    "cors": "^2.8.6",
    "dotenv": "^16.0.0",
    "ejs": "^3.1.6",
    "express": "^4.17.3",
    "express-session": "^1.17.3",
    "jsonwebtoken": "^8.5.1",
    "mongodb": "^3.2.6",
    "mongoose": "^6.2.9",
    "morgan": "^1.10.0",
    "multer": "^1.4.5-lts.1",
    "uuid": "^8.3.2"
  },
  "devDependencies": {
    "@types/bcryptjs": "^2.4.6",
    "@types/connect-mongodb-session": "^2.4.8",
    "@types/cookie-parser": "^1.4.10",
    "@types/cors": "^2.8.19",
    "@types/express": "^4.17.3",
    "@types/express-session": "^1.19.0",
    "@types/jsonwebtoken": "^9.0.10",
    "@types/morgan": "^1.9.10",
    "@types/multer": "^2.1.0",
    "@types/uuid": "^9.0.7",
    "nodemon": "^3.0.2",
    "ts-node": "^10.9.1",
    "typescript": "^5.2.2"
  }
}
```

(`kill-port`, `moment`, `tsconfig-paths`, `tsx` — `burak`da bor, lekin `train.py`/`train.ts` — ML-mashq skriptiga xos, LightBooks backendiga aloqasi yo'q, shuning uchun ro'yxatga kiritilmadi.)

**Paket-menejer**: LightBooks backend'ida **npm** ishlatiladi (frontend — `bstore-react` — yarn'ga to'liq o'tgan, lekin bu backend uchun alohida, mustaqil loyiha bo'lgani sababli yarn shart emas — foydalanuvchi qarori, 2026-08-30).

### Qatlamli oqim (pastdan yuqoriga)

```
.env → server.ts (mongoose.connect, keyin app.listen)
  → app.ts (express instance, barcha middleware, ikkita router ulanadi)
    → router.ts ("/")  yoki  router-admin.ts ("/admin")
      → controller (req/res, try/catch, Errors'ni HTTP-javobga aylantiradi)
        → model/*.service.ts (haqiqiy biznes-mantiq: mongoose so'rovlari, bcrypt, Errors tashlaydi)
          → schema/*.model.ts (mongoose Schema+model)
```

Controller **hech qachon** to'g'ridan-to'g'ri mongoose bilan ishlamaydi — doim service orqali. Service **hech qachon** `req`/`res` bilan ishlamaydi — faqat oddiy qiymatlar oladi/qaytaradi, xato bo'lsa `Errors` klassini tashlaydi (`throw new Errors(HttpCode.X, Message.Y)`), buni controller `catch` qismida `err instanceof Errors ? res.status(err.code).json(err) : res.status(500).json(Errors.standard)` naqshi bilan ushlaydi — **har bir controller metodida bir xil takrorlanadi**, umumiy yordamchi emas.

### Ikkita router — ikki xil autentifikatsiya

| | **SPA/REST** (`router.ts`, `/`) | **Admin/SSR** (`router-admin.ts`, `/admin`) |
|---|---|---|
| Kimga | React frontend (`burak-react`) | Do'kon-egasi (admin-panel, brauzerda to'g'ridan-to'g'ri) |
| Javob turi | JSON | EJS-render qilingan HTML (yoki `<script>alert();location.replace()</script>` — forma-submit'dan keyingi eski uslub) |
| Autentifikatsiya | **JWT** (`jsonwebtoken`) — token `accessToken` nomli **httpOnly:false** cookie'da (frontend JS o'qiy oladi) | **express-session**, MongoDB'da saqlanadi (`connect-mongodb-session`) — `req.session.member` |
| Middleware | `verifyAuth` (majburiy, 401 tashlaydi) / `retrieveAuth` (ixtiyoriy, xatosiz o'tkazadi — masalan mahsulot-ko'rish sahifasida) | `verifyRestaurant` (sessiyadagi `memberType==="RESTAURANT"`ni tekshiradi, aks holda EJS-alert+redirect) |
| Rol-tekshiruv | Yo'q (har qanday `Member`) | **`memberType==="RESTAURANT"`** — bitta "do'kon-egasi" turi bor |

**Muhim**: ikkalasi ham bitta `MemberService`/`ProductService` klassidan foydalanadi — metodlar shu klass ichida `/** SPA */` va `/** SSR */` izohlari bilan ikkiga bo'lingan (masalan `Member.service.ts`da `signup`/`login` — SPA uchun, `processSignup`/`processLogin` — SSR uchun, deyarli bir xil mantiq, faqat SSR versiyasi "faqat bitta RESTAURANT bo'lishi mumkin" tekshiruvini ham qiladi).

### `views/` (EJS) qanday tashkil qilingan

```
views/
├── includes/
│   ├── header.ejs      # <!DOCTYPE html><html><head>...CDN Bootstrap4/jQuery/Popper/axios + /css/main.css...</head></html>
│   └── footer.ejs       # faqat "</html>" — shu bilan tugaydi
├── home.ejs             # <%- include('includes/header') %> → sahifaga xos <link>/<script> → <body>...</body> → <%- include('includes/footer') %>
├── login.ejs
├── signup.ejs
├── products.ejs
└── users.ejs
```

Har bir sahifa bir xil naqshda: `header` include → sahifaga xos `<link rel="stylesheet" href="/css/<page>.css">` → `<body>` (kontent) → `<script src="/js/<page>.js">` → `</body>` → `footer` include. **E'tibor beriladigan narsa**: `header.ejs`ning o'zi `</html>`ni allaqachon yopadi, keyin sahifa-fayl yana `<link>/<body>` qo'shadi va `footer.ejs` yana bir marta `</html>` beradi — bu texnik jihatdan noto'g'ri HTML ichma-ichlik (brauzerlar bunga chidamli, shuning uchun ishlayveradi, lekin LightBooks'ning o'z EJS'ini yozganda **buni takrorlamaslik kerak** — `<head>` to'liq yopilgandan keyin `<body>` ochilishi kerak, `</html>` faqat bitta marta, footer'da).

`app.ts`dagi muhim moment: `res.locals.member = req.session.member` middleware **barcha** EJS render'lardan oldin ishlaydi, shuning uchun **har bir view ichida** (controller alohida `member`ni uzatmasa ham) `<% if(!member) { %>` kabi tekshiruv ishlaydi — `home.ejs`/`users.ejs`da shu orqali login/logout holatiga qarab navigatsiya almashadi.

Sahifa ichidagi jonli (AJAX) yangilanishlar: `products.ejs`/`users.ejs`dagi holat-`<select>`lar (`productStatus`, `memberStatus`) o'zgarganda `public/js/products.js`/`users.js` ichidagi jQuery `.on("change")` handler **to'g'ridan-to'g'ri o'sha yerdan** `axios.post("/admin/product/:id", {...})` yuboradi — sahifa to'liq qayta yuklanmaydi, faqat shu maydon backend'ga yozib qo'yiladi. Yangi mahsulot yaratish/login/signup esa klassik full-page `<form method="POST">` + redirect (yoki xato bo'lsa inline `<script>alert()</script>`).

### Umumiy naqshlar (LightBooks'ga ko'chiriladigan)

- **`Errors` klassi** (`libs/Error.ts`) — `HttpCode` enum (200/201/304/400/401/403/404/500) + `Message` enum (barcha xato-matnlari markazlashgan, masalan `NO_MEMBER_NICK`, `WRONG_PASSWORD`, `BLOCKED_USER`) + `Errors extends Error` (`code`+`message` saqlaydi, `static standard` — noma'lum xatolar uchun default 500).
- **`shapeIntoMongoseObjectId()`** (`libs/config.ts`) — string ID kelsa `mongoose.Types.ObjectId`ga aylantiradi, allaqachon ObjectId bo'lsa o'zgartirmaydi — deyarli har bir service metodida ishlatiladi.
- **Ko'rishlar (views) hisoblash** — `View` alohida kolleksiya (`memberId`+`viewRefId`+`viewGroup`), `ProductService.getProduct()` avval `checkViewExistence()` bilan tekshiradi, faqat yangi bo'lsa `insertMemberView()` + `productViews`ni `$inc` bilan oshiradi — **bir foydalanuvchidan bir marta hisoblanadi**. LightBooks'da hozir statik `views` raqami bor joylar (shop/shopNoSidebar/NewProducts/BestSelling/AuthorBooks/MyListDetails kartochkalari) — backend ulanganda shu aynan mantiq bilan almashtiriladi.
- **Rasm yuklash** — `multer.diskStorage` fabrika-funksiya (`makeUploader(papkaNomi)`), fayl nomi `uuid()+kengaytma`, `./uploads/<papka>/`ga saqlanadi, `app.use("/uploads", express.static("./uploads"))` orqali public bo'ladi.
- **Pagination+filtr+qidiruv** — `ProductService.getProducts()` mongoose `.aggregate([$match, $sort, $skip, $limit])` bilan (oddiy `.find()` emas) — `$match` qidiruv/kolleksiya filtriga qarab dinamik quriladi (`productName: {$regex}` qidiruv uchun).
- **`$lookup` bilan bog'lash** — `OrderService.getMyOrders()` — bitta so'rovda `orderItems` va `productData`ni ham qo'shib qaytaradi (ikkita alohida so'rov o'rniga).
- **Forma-tekshiruv submit'dan oldin (client-side)** — `signup.ejs`ning `<form onsubmit="return validateSignupForm()">`, `products.ejs`ning `<form onsubmit="return validateForm()">`: shu nomdagi funksiya `public/js/<page>.js`da yozilgan, bo'sh maydon/parol-mos-kelmasligi/rasm-yo'qligi bo'lsa `alert()` + `return false` (submit to'xtaydi). Rasm tanlanganda esa `FileReader`/`URL.createObjectURL()` bilan **darhol oldindan ko'rish (preview)** ko'rsatiladi (serverga yubormasdan). Bular sof frontend-JS, `public/js/`ning boshqa fayllari (`main.js`, `home.js` — faqat sahifa-nomi konsolga chiqaradi/anime.js dekorativ animatsiyasi, arxitekturaga aloqasi yo'q) bilan bir xil oddiy `<script src="/js/<page>.js">` ulanish usulida.

### LightBooks uchun moslashtirish kerak bo'lgan joylar (hali qaror qilinmagan)

- **`memberType`** — 1-bosqichda (`lib/types/member.ts`) butunlay olib tashlangan edi ("restoran-egasi"ga o'xshash rol kerak emas, degan asosda). Endi admin/SSR panel qurilar ekan, **qaytadan kerak bo'ladi** (masalan `USER`/`ADMIN`) — `/admin` yo'liga faqat admin kirishi uchun. Bu Stage-1'da qilingan qarorni qisman bekor qiladi, alohida qayd etilishi kerak.
- **Domen-mosligi**: `burak`ning `Product`i (`productCollection: DISH/SALAD/DESSERT/DRINK/OTHER`, `productSize`, `productVolume`) — taom uchun; LightBooks'da bu allaqachon Stage-1'da kitob-domeniga moslab qayta loyihalangan (`bookFormat`, `genres[]`, `isbn` va h.k., `src/lib/types/product.ts`da) — schema/service yozilganda **shu Stage-1 turlariga** asoslaniladi, `burak`ning maydon-nomlariga emas, faqat **naqsh** (qatlamlar, Errors, pagination, view-tracking usuli) ko'chiriladi.
- **Backend joylashuvi hal qilindi (2026-08-30): `C:\Users\User\Desktop\LightBooks-Store`** — mustaqil npm/Express/TS/Mongoose loyiha, allaqachon faol (8 commit, o'zining 59-bosqichli reja-hujjati `LightBooks-Store\AGENTS.md`da, `burak`ning haqiqiy git-tarixidan qayta ishlab chiqilgan va "bookStore" domeniga moslashtirilgan). MongoDB — Atlas (o'z alohida klasteri, `burak`nikidan farqli). Har qanday backend ishi shu loyihaning o'z AGENTS.md'sidagi tegishli "Step N" bo'limini o'qishdan boshlanadi, bitta bosqich — tekshirish — to'xtash — tasdiq kutish tartibida.

### Admin-panel (SSR) uchun kerakli API'lar — `burak`dan olingan ro'yxat (2026-08-30)

Foydalanuvchi so'rovi: hozircha **faqat admin-panel (SSR, `/admin` ostida)** uchun ishlanadi, SPA (`/`) umuman aralashtirilmaydi. Ro'yxat `burak`ning `router-admin.ts` faylidan to'g'ridan-to'g'ri o'qib tuzildi (taxmin qilinmadi):

```
GET  /admin/                 → goHome
GET  /admin/login            → getLogin
POST /admin/login            → processLogin
GET  /admin/signup           → getSignup
POST /admin/signup           → processSignup   (multer: memberImage, bitta rasm)
GET  /admin/logout           → logout
GET  /admin/check-me         → checkAuthSession

GET  /admin/product/all      → verifyRestaurant + getAllProducts
POST /admin/product/create   → verifyRestaurant + multer (5 ta productImages) + createNewProduct
POST /admin/product/:id      → verifyRestaurant + updatedChosenProduct

GET  /admin/user/all         → verifyRestaurant + getUsers
POST /admin/user/edit        → verifyRestaurant + updateChosenUser
```

Jami **12 ta endpoint**, uchta guruh (Admin-hisob/auth, Book/Product, User). `LightBooks-Store`ga moslashtirilgan nomlanish (mavjud §0a jadvali bo'yicha, yangi nom o'ylab topilmadi — `Product→Book`, `restaurant.controller→admin.controller`, `verifyRestaurant→verifyAdmin`, `RESTAURANT→ADMIN`):

```
GET  /admin/                 → goHome                [bor, hali res.send stub]
GET  /admin/login            → getLogin               [bor, hali res.send stub]
POST /admin/login            → processLogin           [yozilgan, commit qilinmagan]
GET  /admin/signup           → getSignup               [bor, hali res.send stub]
POST /admin/signup           → processSignup          (multer: memberImage)   [yozilgan, multer yo'q]
GET  /admin/logout           → logout                  [yo'q]
GET  /admin/check-me         → checkAuthSession        [yo'q]

GET  /admin/book/all         → verifyAdmin + getAllBooks        [yo'q]
POST /admin/book/create      → verifyAdmin + multer(5) + createNewBook  [yo'q]
POST /admin/book/:id         → verifyAdmin + updatedChosenBook  [yo'q]

GET  /admin/user/all         → verifyAdmin + getUsers           [yo'q]
POST /admin/user/edit        → verifyAdmin + updateChosenUser   [yo'q]
```

**Hozirgi holat (LightBooks-Store, fayllar bevosita tekshirildi, 2026-08-30):** `router-admin.ts`da faqat `/`, `/login`, `/signup` bor — `logout`, `check-me`, `book/*`, `user/*` hali yo'q. `admin.controller.ts`da `goHome`/`getLogin`/`getSignup` hali `res.send("...Page")` — EJS yo'q (`views/` papkasi umuman yo'q). Session middleware (`app.ts`dagi `/** 2 - SESSION **/`) bo'sh — session-based `verifyAdmin` hali qurilmagan. Book/User controller-service-schema qatlamlari umuman yo'q. Commit qilinmagan: `processLogin` to'liq yozilgan (`Member.service.ts`, `admin.controller.ts`, `Error.ts`, `types/member.ts`).

**Diqqat — SPA yig'ishtirib qo'yilgan**: `burak`ning admin-paneli 100% SSR, SPA (`member.controller.ts`, JWT) bilan hech qanday bog'liqligi yo'q — mustaqil parallel yo'l. `burak`ning Step 15'i ("Organize SPA vs SSR business logic" — `member.controller.ts`ga SPA signup/login qo'shish) SSR admin-panelga aloqasi yo'q, hozircha chetlab o'tiladi.

**Qurish tartibi (bog'liqlikka ko'ra)**: avval qolgan auth-endpoint'lar (logout, check-me — session middleware talab qiladi), keyin Book (schema→service→controller→router), keyin User boshqaruvi — har biri alohida, MVC bosqichma-bosqich (Router→Controller→Service→Schema, har birida "ha" kutib), `LightBooks-Store\AGENTS.md`ning tegishli Step-tafsilotlariga (16-41) asoslanib.

---

## Brend-dizayn: rang/shrift/tugma tizimi (2026-08-30, kod skaneri orqali)

Bu bo'lim `bstore-react` (React frontend)ning haqiqiy dizayn-tokenlarini hujjatlashtiradi — sabab: `LightBooks-Store` admin-panelini qurishda shu ranglar/uslublarga tayanish kerak bo'lganda foydalanish uchun.

### Ranglar (`src/scss/_variables.scss`, `_root.scss`)

| Nomi | Qiymati | Vazifasi |
|---|---|---|
| `$blue` / `--bj-blue` | **`#4285F4`** | **Asosiy (primary) urg'u-rang** — barcha asosiy tugmalar, havolalar |
| tugma hover-fon (`::before`) | `#3972d2` | Primary tugma hover holatida (chapdan-o'ngga to'ldiruvchi animatsiya) |
| `$heading_color` / `--bj-dark` | `#36383A` | Sarlavha-matn rangi |
| `$dark` / `--bj-darks` | `#202124` | Eng to'q matn/fon (masalan checkout-forma tugmasi foni) |
| `$text_color` / `--bj-light-gray` | `#636466` | Oddiy paragraf-matn |
| `$gray_light` / `--bj-light` | `#4D4E50` | Ikkinchi darajali matn |
| — | `#f9f9f9` / `#f5f5f5` | Neytral och-kulrang fon (masalan auth-sahifa foni) |
| — | `#e0e2e6` / `#d1d1d1` / `#d0d5dd` | Chegara-ranglar (input, outline-tugma) |
| — | `#001f58` | Noyob, faqat `.title_two`da ishlatiladigan to'q ko'k-binafsha |

**Ikkinchi darajali (secondary) rang alohida belgilanmagan** — loyiha faqat bitta asosiy urg'u-rang (`$blue`) + neytral kulrang-shkala (`--black_25`...`--black_900`, `_root.scss`) bilan ishlaydi, klassik "primary/secondary/accent" uch-rangli tizim emas.

### Shriftlar

- **`Open Sans`** (`$open`) — **haqiqiy asosiy shrift**: `h1`-`h6` standart qoidasi (`_predefine.scss:10-19`), barcha tugmalar (`.bj_theme_btn`), deyarli butun sayt.
- **`Libre Baskerville`** (`$lb`) — Google Fonts'dan import qilingan va `--bj-Libre-Baskerville` CSS-o'zgaruvchisi sifatida e'lon qilingan, lekin **amalda deyarli ishlatilmaydi** — butun kodbazada faqat **bitta joyda** (`.title_two`, `_predefine.scss:92-95`, maxsus klassik-uslubdagi sarlavhalar uchun, `#001f58` rang bilan). Bu — kod-skanerida topilgan real nomuvofiqlik: shrift import qilingan, lekin dizayn-tizimning asosiy qismi sifatida ishlatilmagan.

### Tugmalar (`.bj_theme_btn`, `_predefine.scss:133-200`)

- **Asosiy (filled)**: `background: var(--bj-blue)`, `color:#fff`, `border-radius:10px`, `font-weight:600`, `font-family: var(--bj-Open)`, padding `15px 36px 14px`; hover — `::before` orqali chapdan-o'ngga to'qroq-ko'k (`#3972d2`) to'ldiriladi (rang almashtirish emas, animatsion "wipe" effekti)
- **Ikkinchi darajali (`.strock_btn`, outline)**: shaffof fon, `1px solid #d1d1d1` chegara, `#4d4e50` matn; hover'da chegara+matn `var(--bj-blue)`ga aylanadi

### Input-maydonlar (`.form-control`, `src/scss/auth/auth.scss:147-154`)

`border-radius:8px`, balandligi `58px`, oq fon, `1px solid #e0e2e6` chegara, `padding:16px`, `font-size:16px`.

### Umumiy uslub

**Yorug' (light) tema** — oq/och-kulrang fonlar, qorong'i matn, bitta to'yingan ko'k urg'u-rang. Minimalist, ortiqcha bezaksiz, keng bo'shliq (`padding`/`margin`) bilan.

### Solishtiruv — `LightBooks-Store` admin-panel bilan farqlar

| | React frontend (LightBooks) | Admin panel (LightBooks-Store) |
|---|---|---|
| **Tema** | Yorug' (oq/och-kulrang fon) | **To'q** (qora→binafsha gradient fon, `#08070c`→`#4c2fce`) |
| **Urg'u-rang** | **Ko'k** `#4285F4` | **Binafsha** `#7c6cf6`/`#5b3fe0` — boshqa rang, garchi ikkalasi ham sovuq-spektrda bo'lsa ham |
| **Shrift** | Open Sans (import qilingan, izchil qo'llanilgan) | **Hech qanday maxsus shrift import qilinmagan** — brauzer standart shriftiga tayanadi |
| **Tugma** | Yagona tekis rang (`#4285F4`), hover — animatsion "wipe" | Gradient fon (`135deg, #7c6cf6→#5b3fe0`), hover — statik ranga o'zgarish |
| **Tugma radius** | `10px` | `10px` — **bir xil** |
| **Input radius/balandlik** | `8px` / `58px`, oq fon | `10px` / `48px`, shaffof to'q fon (`rgba(255,255,255,0.06)`) |

**Xulosa**: ikkalasi ham "sovuq-rang, minimalist" falsafasida, tugma-radius ham mos keladi — lekin **tema (yorug'/to'q), aniq urg'u-rang va shrift butunlay farqli**, ataylab bog'liq qurilmagan (Login/Signup dizayni alohida, "Molto" namunasidan ilhomlanib qurilgan edi, React saytining ko'k-yorug' uslubidan emas). Agar kelajakda ikkalasini bir-biriga yaqinlashtirish kerak bo'lsa — eng oson yo'l: Admin panelga ham `Open Sans` shriftini ulash (hozir umuman yo'q, bu eng aniq nomuvofiqlik), rang-sxemasini esa ataylab boshqacha (tema-farqlash: sayt=yorug', boshqaruv-panel=to'q) qoldirish mumkin — bu ko'plab zamonaviy mahsulotlarda oddiy amaliyot.

**Yangilanish (2026-08-30, foydalanuvchi so'rovi bilan) — Admin panel React'ning brend-tizimiga to'liq o'tkazildi:** yuqoridagi farqlar endi **bartaraf etildi** — `LightBooks-Store`ning Home/Login/Signup uchalasi ham React saytining aynan shu qiymatlariga o'tkazildi: `Open Sans` shrifti ulandi (Google Fonts, avval umuman yo'q edi), urg'u-rang binafshadan **`#4285F4` ko'kka** almashtirildi, tugmalar `.bj_theme_btn`/`HeroBanner`ning haqiqiy qiymatlari bilan (radius 10px auth-tugmalarda, pill-shape+gradient Home-hero tugmalarida) qayta qurildi, fon to'q-binafsha gradientdan **oq/`#f9f9f9` yorug' temaga** o'zgartirildi. Home'ning avvalgi "kitob+kema+bulut" hero-rasmi (`book-ship-hero.webp`, o'chirildi) **butunlay olib tashlandi** va React'ning `HeroBanner.tsx` naqshiga (badge+sarlavha+matn+ikkita tugma+trust-belgilar+o'ng tomonda rasm) moslab qayta qurildi — matn admin-kontekstga moslashtirildi ("Manage Your Bookstore With Ease" va h.k.). **Muhim topilma**: React saytining o'zining hero-rasmlari (`banner_book1.png`/`banner_book2.png`) haqiqatda **placeholder** ekan ("372X482" yozuvli kulrang to'rtburchak, sifatli fotosurat emas) — shuning uchun Home'ning yangi hero-rasmi uchun **Unsplash**dan (litsenziya: Unsplash License, tijorat uchun bepul, attributsiya shart emas) alohida sifatli fotosurat qidirib topildi va yuklab olindi: `hero-book.jpg` (asl manba: `https://unsplash.com/photos/Q7sGp9MStSY`, fotograf — Thought Catalog).

---

## Ish jarayoni qoidalari (foydalanuvchi bilan hamkorlik)

Bu bo'lim ushbu loyihada Claude qanday ishlashi kerakligini belgilaydi (foydalanuvchi tomonidan 2026-08-24'da tasdiqlangan qoidalar).

1. **Kod o'zgartirishdan oldin har doim ruxsat so'ralsin.** Hech qanday fayl yozish/tahrirlash/o'chirish foydalanuvchining aniq "ha" javobisiz amalga oshirilmaydi.

2. **Har qanday buyruqda — ayniqsa mantiq/muammoga aloqador bo'lsa — avval tushunilgani aytilsin, so'ng yechim variantlari berilsin, va shundan keyin ruxsat so'ralsin.** Bu faqat noaniq buyruqlarga emas, **har qanday** funksional/kod-mantiqiy o'zgarishga (masalan bir sahifani olib tashlash, havolani qayta yo'naltirish, xatoni tuzatish) tegishli. To'g'ridan-to'g'ri bajarishga o'tish (avval tushuntirmasdan) — qoidabuzarlik hisoblanadi.

3. **Variantlar shunchaki o'ylab topilmasin — o'xshash manbalardan yoki rasmiy hujjatlardan asoslansin.** Masalan: bir tugmani qayerga yo'naltirish kerakligi haqida qaror qabul qilinganda, o'xshash saytlar/andozalar qanday qilishini yoki tegishli hujjatlarni tekshirib, o'sha asosda variant taklif qilinsin — faqat shaxsiy taxmindan emas.

4. **Oddiy matnda javob so'ralsin** — tanlov-tugma (`AskUserQuestion`) o'rniga oddiy savol-javob tarzida.

5. **Faqat foydalanuvchi "commit qil" desa commit qilinadi**, va hatto shunda ham avval commit xabari taklif qilinib, foydalanuvchi tasdiqlagandan keyin (yoki o'z xabarini bergandan keyin) commit amalga oshiriladi.

6. **Har bir sahifa/funksiya qurilgach**: build (`npm run build`/`yarn build`) va lint (`npm run lint`/`yarn lint`) tekshirilishi, so'ng ekran-rasm orqali (yoki interaktiv holatlar uchun avtomatlashtirilgan test orqali) asl dizayn/mantiq bilan solishtirilishi, va natija foydalanuvchiga qisqacha hisobot qilib berilishi kerak.

7. **Backend API tashkil qilish — qat'iy tartib (2026-08-30, foydalanuvchi juda muhim deb alohida ta'kidlagan qoida).** Har safar foydalanuvchi bitta API'ni "tashkil qil" desa:
   1. **Avval rasmiy hujjatlardan o'rganib kelinadi** (tegishli package/kutubxona — masalan Express, Mongoose, `jsonwebtoken`, `multer` va h.k.).
   2. **Keyin `C:\Users\User\Desktop\burak` backendida shu narsa qanday qilinganini solishtirib o'rganiladi** (qarang: yuqoridagi "Backend arxitekturasi — `burak` loyihasidan o'rganilgan andoza" bo'limi).
   3. Shu ikkalasiga asoslanib, **foydalanuvchiga tashkil qilish variantlari taklif qilinadi** — o'zboshimchalik bilan yozilmaydi.
   4. Foydalanuvchi rozi bo'lgach (**"ha"**), qurish **MVC tartibida, bosqichma-bosqich, har bosqichdan keyin alohida tasdiq kutib** amalga oshiriladi: **Router → (ha) → Controller → (ha) → Service → (ha) → Schema**. Bitta xabarda bir nechta qatlamni birdan qurish yoki keyingi qatlamga o'zboshimchalik bilan o'tish — qoidabuzarlik hisoblanadi.
