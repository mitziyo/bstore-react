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
