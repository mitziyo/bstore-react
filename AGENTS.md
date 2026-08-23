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
| 6. `screens/` | ⏳ `homePage/` + `shop/` + `cart/` + `checkout/` + `dashboard/` + `productSingle/` + `shopNoSidebar/` + `cartGuest/` + `checkoutGift/` + `checkoutLogin/` + `auth/` + `faq/` | Manba: `C:\Users\User\Desktop\bookjar\template\` (BookJar — kitob-do'koni shabloni). **Home Two** (`index-2.html`, ✅ to'liq): HeroBanner, Promo, BestBooks, BookCategories, BestSelling, PromotionBox, NewProducts, HomeBlog, Subscribe. **Shop** (`shop.html`, ✅ to'liq): Breadcrumb, ShopSidebar (kategoriya/muallif/reyting/narx filtrlari), mahsulot to'ri, pagination. **Cart** (`cart.html`, ✅ to'liq): CartItems, CheckoutSidebar, RelatedProducts (asl Slick slider o'rniga Swiper). **Checkout** (`checkout.html`, ✅ to'liq): CheckoutForm (progress-qadamlar, Account/Shipping formalari, to'lov usullari), OrderSummarySidebar (promo-kod, xavfsizlik belgisi). **Dashboard** (`my-account.html`dan ajratilgan umumiy qism, ⏳ kengaymoqda): `DashboardLayout.tsx` — endi **pathless layout route** (`<Route element={<DashboardLayout />}>` ichida har bir dashboard sahifasi o'z `path`i bilan bola-route sifatida qo'shiladi, `/my-account`ga qadalgan emas) + `DashboardSidebar.tsx` (profil kartochkasi + 8 bandli navigatsiya, `NavLink` orqali faol holat). Tayyor bola-sahifalar: `UserProfile.tsx` (`/my-account`, ✅), `EbookLibrary.tsx` (`/my-ebook-library`, ✅ — qidiruv/saralash paneli + kitob kartochkalari, yuklab olish tugmalari), `MyList.tsx` (`/my-list`, ✅ — to'plamlar to'ri, "stack" ko'rinishidagi kitob muqovalari + "Create New List" kartochkasi), `MyAddress.tsx` (`/my-address`, ✅ — sarlavha + statistika kartochkalari (Home/Office/Total), manzil kartochkalari (default belgisi, tahrirlash/o'chirish tugmalari, "Set as Default"), "Add New Address" kartochkasi, Quick Tips bloki), `MyOrders.tsx` (`/my-orders`, ✅ — qidiruv/status-filter paneli, buyurtma kartochkalari (status badge: Completed/Processing/Cancelled/Refunded, mahsulot ro'yxati, jami summa, Track Order/View Details/Reorder tugmasi holatga qarab)), `MyWishlist.tsx` (`/my-wishlist`, ✅ — chegirma/badge belgilari, reyting, format+ombor holati, narx bloki (chegirma summasi), Add to Cart/Remove tugmalari), `MyRatingReviews.tsx` (`/my-rating-reviews`, ✅ — "Pending Review"/"Reviewed" tab (React state bilan almashinadi, BestSelling'dagi tab pattern kabi), pending kartochkalarda "Write a Review" tugmasi, reviewed kartochkalarda yulduzcha reyting + matn + "Edit" havolasi), `MyFollowingAuthors.tsx` (`/my-following-authors`, ✅ — muallif kartochkalari to'ri (avatar, janr, bio, kitob/follower statistikasi, "Following since" sana, Unfollow tugmasi)). **Dashboard sidebar'ning barcha 8 ta bo'limi endi tayyor.** Shuningdek Dashboard bilan bog'liq, lekin `DashboardSidebar`siz mustaqil sahifalar: `OrderTrack.tsx` (`/order-track`, ✅ — My Orders'dagi "Track Order" tugmasidan ochiladi, o'z mustaqil sidebar'i bilan — reyting-kartochka (bosiladigan yulduzchalar, React state) + yetkazib berish manzili kartochkasi, kontent qismida buyurtma-timeline (5 bosqich) + Order Summary kartochkasi), `OrderConfirmation.tsx` (`/order-confrmation`, ✅ — "Thank you for your order" kartochkasi (nusxalanadigan buyurtma raqami, contact/shipping/payment ustunlari) + Order Summary (cart.scss'dagi mavjud `cart_checkout_summary` klasslari qayta ishlatildi) + "Popular Products You May Like" grid (cart.html'dagi shu nomli bo'limdan **farqli** — yangi `product-card`/`section-header` dizayni, alohida `orderConfirmation.scss` fayl)), `MyListCreate.tsx` (`/my-list-create`, ✅ — My List'dagi "Create New List" tugmasidan ochiladi, umumiy `DashboardSidebar`ni to'g'ridan-to'g'ri qayta ishlatadi (DashboardLayout'siz, chunki bu sahifa `.dashboard-content` emas `.account_dashboard_body` wrapper ishlatadi) — progress-qadamlar (List Info/Add Books/Save), List Details forma (sarlavha, Public/Private radio-kartochkalar, tavsif), kitob qidiruv+jadval bo'limi, Pro Tips bloki), `AddNewAddress.tsx` (`/add-new-address`, ✅ — bu sahifa standart `.dashboard-content` wrapper ishlatgani uchun **DashboardLayout ichida** joylashgan (avvalgi 2 tadan farqli) — Address Type radio-kartochkalar, Contact Information/Location Details formalari, "Set as default" toggle-switch), `MyListDetails.tsx` (`/my-list-details`, ✅ — My List'dagi to'plam kartochkasidan ochiladi, `MyListCreate.tsx`dagi kabi `DashboardSidebar`ni to'g'ridan-to'g'ri qayta ishlatadi, `account_dashboard_body` wrapper; kontent — Home'dagi `NewProducts.tsx`da allaqachon mavjud `.best_product_item_two` kitob-kartochkasini qayta ishlatadi + sahifaga xos `.ribon` (chegirma lentasi) va kattaroq `.book_title` override). **Dashboard-bilan-bog'liq barcha 5 ta "o'lik havola" endi tuzatildi** (Order Tracking, Thank You Page, Create Book List, Add New Address, Book List Details). **Product Details** (`product-single.html`, ✅ to'liq, `productSingle/`): `BookDetails.tsx` (flip qilinadigan kitob muqovasi, narx-variatsiya radio-tugmalari, 3 ta tab — Product Details/About Author/Review — React state bilan, Review tab'ida yulduzcha-taqsimot, Write/Update Review modal'lari statik ko'rinishda), `ProductSidebar.tsx` (buy-box: narx/chegirma/yetkazib berish ma'lumoti, miqdor stepper, yig'iladigan Product Details bo'limi), `FrequentlyBought.tsx` (checkbox bilan tanlanadigan 3 ta kitob + umumiy summa kartochkasi). `Breadcrumb.tsx` (Shop'dan) `label` prop bilan qayta ishlatildi. Ko'p CSS klass (`.bj_book_single`, `.bj_book_img`, `.product_sidbar`, `.cart_quantity`, `.single_product_price_variation`) allaqachon `modal.scss`da (ProductQuickView uchun) mavjud edi — qayta ishlatildi, faqat yangi qismlar (`bj_book_details_premium`, tab'lar, review bo'limi, `product_details_sidebar`, `bj_frequently_bought_area`) uchun yangi `productSingle.scss` yozildi. **Shop No Sidebar** (`shop-no-sidebar.html`, ✅ to'liq, `shopNoSidebar/`): Shop sahifasining sidebar'siz, to'liq kenglikdagi varianti — bir xil `PRODUCTS` massivi va mahsulot-kartochka markup'i Shop'dan qayta ishlatildi (faqat `col-lg-3` 4-ustunli to'r, sidebar yo'q), qo'shimcha qidiruv-filtr qatori (Title/Writer/Category radio) va "Filter" havolasi (`shopNoSidebar.scss`). `Breadcrumb`ning `label` prop'i bu yerda ham qo'llanildi (`label="Shop No Sidebar"`). **Cart Guest** (`cart-guest.html`, ✅ to'liq, `cartGuest/`): Cart'ning mehmon (login qilmagan) foydalanuvchi varianti — `CartItems.tsx` Cart'dan **o'zgarishsiz qayta ishlatildi** (aynan bir xil markup), yangi `GuestCheckoutSidebar.tsx` esa `CheckoutSidebar`dan farqli — "Shipping Address" bloki yo'q (mehmonda saqlangan manzil yo'q) va "Proceed to Checkout" `/checkout` o'rniga `/checkout-login`ga olib boradi. Yangi CSS kerak bo'lmadi — hammasi `cart.scss`dan qayta ishlatildi. **Checkout Gift** (`checkout-gift.html`, ✅ to'liq, `checkoutGift/`): asosiy Checkout'dan (`checkout-steps`/`checkout-card` "premium" dizayn) **butunlay farqli, eski-uslubdagi** `.bj_checkout_content`/`.floating-label` dizayn (Cart'ning classik uslubiga yaqin) — `CheckoutGift.tsx` (Gift From/Gift To ikki ustunli forma, dekorativ `border-image: gift-bg.png` ramka, to'lov usuli bo'limi), `GiftCheckoutSidebar.tsx` (Checkout Summary + yig'iladigan promo-kod bo'limi, `useState`). Yangi `checkoutGift.scss` fayl yozildi (hech narsa qayta ishlatib bo'lmadi, chunki bu classik dizayn hali portlanmagan edi). To'lov usuli bo'limi (`PaymentMethodCard.tsx`) alohida komponentga ajratildi, chunki u **Checkout Login**da ham aynan bir xil ishlatiladi. **Checkout Login** (`checkout-login.html`, ✅ to'liq, `checkoutLogin/`): Checkout Gift'ning to'lov+sidebar qismini (`PaymentMethodCard`, `GiftCheckoutSidebar` — ikkalasi ham `checkoutGift/`dan qayta ishlatildi) Gift From/To formasisiz ko'rsatadi — eng sodda sahifa, yangi CSS kerak bo'lmadi. **EXPLORE'ning Shop Pages tab'i endi to'liq tayyor (9/9).** **Utility Pages tab'i boshlandi**: `LoginPage`/`RegistrationPage`/`ForgotPasswordPage` (`auth/`, ✅ — bir xil `login-area`/`login-wrapper` split-screen dizayni, yangi `auth.scss`). **Muhim arxitektura eslatmasi**: bu 3 sahifada manba HTML'da Navbar/Footer **umuman yo'q** — `App.tsx`ga `BARE_PAGES` ro'yxati qo'shildi (`/login`, `/registration`, `/forgot-password`), shu yo'llarda `Navbar`/`Footer`/`ProductQuickView` shartli ravishda render qilinmaydi. Parol ko'rsatish (eye-toggle) va Forgot Password'ning muvaffaqiyat-xabari `useState` bilan ishlaydi. **FAQ** (`faq.html`, ✅ to'liq, `faq/`): `Breadcrumb`ga endi `title` prop ham qo'shildi (sarlavha matni sahifadan-sahifaga farq qiladi). 5 ta kategoriya (General/Orders/Payment/eBooks/Account), har birida 4 tadan savol — data-massiv orqali (`CATEGORIES`) qurildi, kategoriya almashish va accordion ochish/yopish `useState` bilan (Bootstrap JS o'rniga, loyihaning standart yondashuviga mos). **Typography sahifasi qurilgan va keyin olib tashlangan** (`typography.html`, 2026-08-24, foydalanuvchi qarori) — dastlab to'liq portlangan edi (manba loyihaning o'z `_typography.scss` partial fayli deyarli o'zgarishsiz ko'chirilgan holda), lekin muhokamadan so'ng bu ham Banner Style'lar kabi **real xaridor uchun hech qanday qiymat bermaydigan ichki dizayn-namoyish sahifasi** ekani aniqlandi va butunlay o'chirildi (`screens/typography/`, `scss/typography/`, navbar havolasi, route, faqat shu sahifa ishlatgan `blog/blog-list/quote_*.png` rasmlari). **Banner Style 02/03 ham ataylab o'tkazib yuborildi** (xuddi shu sabab bilan) — bular shablonning o'z ichki demo-sahifalari (`banner_animation_03` breadcrumb'ning sarlavha-matni farq qiladigan namoyishi), BookJar do'koni uchun real qiymat qo'shmaydi. **Utility Pages tab shu bilan yakunlandi: 4/7 qurilgan (Sign In, Sign Up, Forgot Password, FAQ), 3 tasi ataylab o'tkazib yuborildi/o'chirildi (Typography, Banner Style 02, Banner Style 03).** Qolgan 12+ boshqa sahifa (author, blog, contact va h.k.) hamda EXPLORE'ning Company/Blog & Author tab'lari hali yaratilmagan |
| 7. `css/` → `scss/` | ✅ Home Two + Shop + Cart + Checkout + Dashboard uchun tayyor | Manba SCSS (legacy `@import`) ekanligi sababli `.css` emas, `.scss` ishlatiladi (`sass` paketi o'rnatilgan; `darken()` kabi eskirgan funksiyalar o'rniga `@use "sass:color"` + `color.adjust()` ishlatiladi). `src/scss/index.scss` — global negiz (variables/root/predefine/preloader/header/footer, hammasi `src/scss/` ildizida), `src/scss/modal.scss` — Quick-View modal. Sahifaga xos SCSS'lar **o'z papkasida**: `src/scss/home/home.scss`, `src/scss/shop/shop.scss`, `src/scss/cart/cart.scss`, `src/scss/checkout/checkout.scss`, `src/scss/dashboard/dashboard.scss` — keyingi har bir yangi sahifa ham shu naqshda (`src/scss/<sahifa>/<sahifa>.scss`) o'z papkasiga qo'shiladi. **Muhim:** checkout'dagi promo-kod bloki manbada `.promo-section` deb nomlangan edi — bu Home Two'ning `.promo-section`(Promo Features)i bilan **klass nomi to'qnashadigan** edi (barcha sahifa CSS'lari bitta global bundle'ga yig'iladi), shuning uchun `.checkout-promo` deb qayta nomlandi (faqat ichki nom, ko'rinish bir xil). Eski `src/css/` (Vite scaffold qoldig'i) o'chirildi |
| 8. `lib/` | ✅ Skelet tayyor (mazmun hali bo'sh) | `config.ts`, `sweetAlert.ts`, `data/`, `enums/`, `types/` — barchasi stub, real mazmun keyingi bosqichlarda (services/screens qurilishi bilan) to'ldiriladi |

**Funksionallik ataylab keyinga qoldirilgan (2026-08-23):** hozirgacha qurilgan barcha sahifalar (Home, Shop, Cart, Checkout, Dashboard/User Profile) faqat **view** darajasida — filtrlar, pagination, Quick-View modalining haqiqiy mahsulot ma'lumoti, savat miqdori/o'chirish tugmalari, checkout formasi yuborilishi kabi interaktivlik hali ulanmagan (statik/dekorativ holatda). Bular `services/` orqali **backenddan real ma'lumot kelayotganda** birga ulanadi — hozircha mahalliy (soxta) holat bilan alohida ulab, keyin qayta yozish shart emas.

**Qo'shimcha (Step 1 — sayt bo'ylab umumiy qismlar, ✅ tayyor):** `components/preloader/`, `components/headers/Navbar.tsx` (mega-menyu bilan, demo-only Home 1/3/4 submenyusi olib tashlangan; `relative` prop — Home'da `false`/hero ustiga cho'kadi, boshqa sahifalarda `true`/oddiy oqimda; **SHOP dropdown foydalanuvchi so'rovi bilan tekislashtirildi** — Shop/Cart/Checkout/Compare endi ichki submenyusiz, bitta tekis ro'yxat, `arrow_carrot-right` belgisi bilan), `components/footer/` (**butun sayt bo'ylab bitta — Home Two'nikidek zamonaviy dizayn**, manbadagi ikkinchi/eski footer variant ataylab ishlatilmadi — foydalanuvchi qarori), `components/modals/ProductQuickView.tsx`, `hooks/useParallax.ts` (breadcrumb'dagi sichqoncha-parallax effekti, `banner_animation_*` klassiga ega bo'lgan bo'limlarda qayta ishlatiladi). `bootstrap`, `react-router-dom` (routing: `/` → HomePage, `/shop` → ShopPage, `/cart` → CartPage, `/checkout` → CheckoutPage, `/my-account`, `/my-ebook-library`, `/my-list`, `/my-address`, `/my-orders`, `/my-wishlist`, `/my-rating-reviews`, `/my-following-authors`, `/add-new-address` → DashboardLayout ichida; `/order-track`, `/order-confrmation`, `/my-list-create`, `/my-list-details` → mustaqil sahifalar, o'z ichida `DashboardSidebar`ni qayta ishlatadigan yoki ishlatmaydigan; `/product-single`, `/shop-no-sidebar`, `/cart-guest`, `/checkout-gift`, `/checkout-login` → mustaqil, umumiy Navbar/Footer bilan; `/login`, `/registration`, `/forgot-password` → `BARE_PAGES`, Navbar/Footer'siz; `/faq` → oddiy sahifa), `wowjs`(→ global script sifatida) qo'shildi; Font Awesome/Themify/Elegant Icons/Icomoon vendor fontlari `public/vendors/`ga ko'chirildi va `index.html`da ulandi.

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

## Kelajakdagi backend integratsiyasi uchun eslatmalar

Bu bo'lim hozir amalga oshirilmaydigan, lekin backend/`services/` bosqichida hisobga olinishi kerak bo'lgan qarorlarni saqlaydi (foydalanuvchi "saqlab qo'y" deb boshlagan xabarlar shu yerga yoziladi).

- **eBook Library — yuklab olish (`download`) mantig'i:** `src/app/screens/dashboard/EbookLibrary.tsx`dagi "Download Code / PDF / EPUB" tugmalari hozir faqat statik `<a href download>` havolalar — barcha uchtasi manba shablonidagi bitta ishlamaydigan tashqi demo-URL'ga (`googleguide.com/...pdf`) bog'langan, haqiqiy fayl yo'q.
  - **Talab:** yuklab olish tugmasi bosilganda fayl **brauzer orqali kompyuterga (diskka) yuklanishi** kerak — bu native browser download bo'lishi kerak. Fayl **`localStorage`/`IndexedDB`/mahalliy JS-xotiraga saqlanmaydi** — bu shunchaki noto'g'ri yondashuv (fayl brauzer xotirasida emas, foydalanuvchi qurilmasining fayl tizimida saqlanishi kerak).
  - **Rejalashtirilgan yechim (hali amalga oshirilmagan, faqat reja):** backend integratsiyasi bosqichida (`services/`ga ulanganda) har bir kitob uchun real fayl-manzil (`serverApi` orqali, masalan `/api/ebooks/:id/download?format=pdf`) beriladi; `<a href={realFileUrl} download>` shu manzilga ishora qiladi va brauzer standart tarzda yuklab oladi. Backend hali yo'qligi sababli hozircha bu tugmalar funksional emas — **hech qanday kod hozircha yozilmagan va yozilmasligi kerak**, bu faqat kelajakdagi reja sifatida qayd etilgan.
