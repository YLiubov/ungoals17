# Учебное руководство по проекту ungoals17

## 1. Что было изменено

Проект не создавался заново. Существующие страницы, датские тексты, изображения и общий внешний вид сохранены.

- `Header`, `Navbar` и `Footer` перенесены из `src/components/layout` в `src/components/organisms`. Это крупные самостоятельные части интерфейса, поэтому в Atomic Design (атомарном дизайне) они являются organisms — организмами.
- Их SCSS Modules (модульные SCSS-стили) заменены файлами `Header.styled.ts`, `Navbar.styled.ts` и `Footer.styled.ts`. Теперь стили каждого компонента находятся рядом с ним — это называется colocation (совместное размещение).
- `ContentWrapper` и `Container` перенесены в `src/layouts`. Они отвечают за одинаковую ширину и расположение содержимого.
- Универсальные CSS-параметры убраны из `Container`. Теперь он всегда задаёт общую ширину `88%` и центрирует содержимое.
- Отдельный `Main` удалён. Он только возвращал тег `<main>` с шириной `100%`, поэтому обычный семантический тег `<main>` находится прямо в `AppRouter`.
- `BrowserRouter`, `Routes` и `Route` перенесены из `App.tsx` в новый файл `src/router/AppRouter.tsx`.
- Пустая `LoginPage` заполнена и подключена к адресу `/login`.
- Созданы atoms (атомы) `Input`, `Label`, `Button`, molecule (молекула) `FormField` и organism (организм) `ContactForm`. Они используются в формах контакта, входа и создания цели.
- Для `CustomGoalPage` и `LoginPage` добавлены собственные colocated styled-файлы.
- Глобальные файлы `Global.styled.ts`, `Theme.styled.ts` и `styled.d.ts` перенесены из `src/styled` в `src/styles`; импорты в `main.tsx` исправлены.
- На странице 404 используется `Link`, поэтому возврат на главную не перезагружает приложение.
- Большие массивы `goals` и `subjects` оставлены рядом со страницами: они используются только там, поэтому отдельная папка `data` сейчас усложнила бы проект. Папка `types` тоже не создана: общих типов пока нет, а типы компонентов находятся рядом с компонентами.

## 2. Итоговая структура проекта

```text
ungoals17/
├── index.html
├── package.json
├── PROJECT_GUIDE_RU.md
└── src/
    ├── assets/images/                 # изображения
    ├── components/
    │   ├── atoms/                     # простые переиспользуемые элементы
    │   │   ├── Button/
    │   │   ├── Input/
    │   │   └── Label/
    │   ├── molecules/
    │   │   └── FormField/             # Label + Input
    │   └── organisms/
    │       ├── ContactForm/
    │       ├── Footer/
    │       ├── Header/
    │       └── Navbar/
    ├── layouts/
    │   ├── Container/
    │   └── ContentWrapper/
    ├── pages/
    │   ├── Contact/
    │   ├── CustomGoal/
    │   ├── Education/
    │   ├── Faq/
    │   ├── Home/
    │   ├── Login/
    │   └── NotFound/
    ├── router/AppRouter.tsx
    ├── styles/
    │   ├── Global.styled.ts
    │   ├── Theme.styled.ts
    │   └── styled.d.ts
    ├── App.tsx
    └── main.tsx
```

`assets` хранит файлы изображений. `components` хранит переиспользуемые части интерфейса. `layouts` хранит компоненты расположения. `pages` хранит компоненты целых страниц. `router` хранит таблицу маршрутов. `styles` хранит глобальные стили, тему и глобальное описание типов темы.

## 3. Как запускается приложение

1. `index.html` содержит пустой `<div id="root">` и подключает `src/main.tsx`.
2. `main.tsx` находит `root` и запускает React с помощью `createRoot`.
3. `ThemeProvider` — поставщик темы — передаёт всему приложению объект `theme` с цветами, шрифтами и размерами.
4. `GlobalStyle` — глобальный стиль — задаёт общие стили для `body`, заголовков, абзацев и ссылок.
5. `App.tsx` остаётся простым и возвращает только `AppRouter`.
6. `AppRouter.tsx` выбирает страницу по адресу браузера.

## 4. Как React показывает страницу

```text
main.tsx
→ App.tsx
→ AppRouter.tsx
→ подходящий Route
→ Page Component (компонент страницы)
→ ContentWrapper
→ вложенные components (компоненты)
```

Например, для `/kontakt` React выбирает `ContactPage`. Она выводит `ContentWrapper`, а внутри него — текст и `ContactForm`.

## 5. Как работает Router

- `BrowserRouter` следит за адресной строкой браузера и даёт дочерним компонентам функции маршрутизации.
- `Routes` — контейнер со всеми маршрутами.
- `Route` — отдельное правило маршрута.
- `path` — адрес, например `/faq`.
- `element` — React-компонент, который нужно показать по этому адресу.
- Wildcard route (маршрут с подстановочным знаком) имеет `path="*"`. Он показывает `NotFoundPage`, если ни один другой адрес не подошёл.
- SPA (Single Page Application, одностраничное приложение) загружает основной HTML один раз. `Link` и `NavLink` меняют адрес и компонент средствами React Router, поэтому браузер не загружает весь документ заново.

## 6. Таблица routes (маршрутов)

| Path (путь) | Page Component | Заголовок |
|---|---|---|
| `/` | `HomePage` | Verdensmålene |
| `/undervisning` | `EducationPage` | Undervisning |
| `/byg-dit-eget-maal` | `CustomGoalPage` | Byg dit eget mål |
| `/faq` | `FaqPage` | FAQ |
| `/kontakt` | `ContactPage` | Kontakt os |
| `/login` | `LoginPage` | Login |
| `*` | `NotFoundPage` | 404 |

## 7. Как работает Navbar

`Navbar` строит пункты меню из массива `navigationItems`. `NavLink` — навигационная ссылка — получает адрес через prop (свойство) `to`. React Router автоматически добавляет ссылке CSS-класс `.active`, когда её адрес совпадает с текущим. `NavLinkStyled` окрашивает `.active` в `theme.colors.primary`.

Для главной страницы указан `end`. Без него `/` считался бы началом каждого адреса и главная ссылка оставалась бы активной на всех страницах. Обычный `<a>` не используется, потому что он может полностью перезагрузить документ и не предоставляет удобный active state (активное состояние).

## 8. Что такое Atomic Design

Atomic Design — способ собирать интерфейс от маленьких частей к крупным.

- Atom (атом): простой элемент. В проекте это `Input`, `Label`, `Button`.
- Molecule (молекула): небольшая комбинация атомов. `FormField` объединяет `Label` и `Input`.
- Organism (организм): крупная самостоятельная часть. Это `Header`, `Navbar`, `Footer`, `ContactForm`.
- Page (страница): компонент конкретного URL, например `ContactPage` или `HomePage`.
- Layout (компонент расположения): задаёт общую геометрию. Это `Container` и `ContentWrapper`.

Эта классификация используется как практическая рекомендация. Обычные `p`, `section` и `main` не превращаются в отдельные React-компоненты без причины.

## 9. Как работает ContentWrapper

`ContentWrapper` принимает props (входные свойства):

- `title: string` — обязательный заголовок серой полосы;
- `description?: string` — необязательное описание;
- `children: ReactNode` — содержимое страницы.

Он используется на всех обычных страницах: Home, Education, CustomGoal, FAQ, Contact, Login и NotFound. Он находится в `layouts`, потому что задаёт повторяющиеся ширину, отступы, серую полосу и порядок содержимого.

## 10. Props и TypeScript types

Props — данные, которые родитель передаёт React-компоненту. Type (тип) описывает для TypeScript, какие props допустимы.

Настоящий пример находится в `ContentWrapper.types.ts`:

```ts
export type ContentWrapperProps = {
  title: string;
  description?: string;
  children: ReactNode;
};
```

Символ `?` после `description` означает optional property (необязательное свойство). Страница FAQ может не передавать описание.

`import type` импортирует только TypeScript-тип:

```ts
import type { ContentWrapperProps } from "./ContentWrapper.types";
```

Этот импорт нужен для проверки кода и не становится частью JavaScript в браузере.

## 11. Styled-components

- `styled.element` создаёт React-компонент со стилями, например `styled.button` или `styled.section`.
- `createGlobalStyle` создаёт общие стили документа.
- `ThemeProvider` делает объект `theme` доступным всем styled-components.
- `theme` хранит общие значения `colors`, `fonts` и `fontSizes`.
- `DefaultTheme` — стандартный TypeScript-интерфейс темы библиотеки styled-components.
- `styled.d.ts` расширяет `DefaultTheme`, чтобы TypeScript знал настоящую структуру нашей темы.
- `Component.styled.ts` хранит стили рядом с компонентом, например `Navbar.styled.ts` рядом с `Navbar.tsx`.

## 12. Как устроены формы

`ContactForm` является organism (организмом). В нём есть `fieldset`, поля и кнопка. `FormField` является molecule (молекулой): он соединяет atom `Label` и atom `Input`. `Button` тоже является atom. Те же `FormField` и `Button` используются в `LoginPage` и `CustomGoalPage`, поэтому их выделение действительно уменьшает повторение кода.

## 13. Как самостоятельно проверить проект

1. Открой терминал в папке `ungoals17`.
2. Выполни `npm run dev` и открой адрес, который покажет Vite.
3. По очереди открой `/`, `/undervisning`, `/byg-dit-eget-maal`, `/faq`, `/kontakt`, `/login`.
4. Проверь правильные заголовки, тексты, изображения и формы.
5. На каждой странице проверь, что соответствующий пункт Navbar стал голубым.
6. Открой `/blablabla`: должна появиться страница 404 со ссылкой на главную.
7. Нажимай пункты Navbar и наблюдай: содержимое и URL меняются без белой перезагрузки всего документа.
8. Выполни `npm run build`: TypeScript и production build (сборка для публикации) должны пройти.
9. Выполни `npm run lint`: ESLint-проверка должна пройти.

## 14. Частые ошибки

- После перемещения файла оставлен старый относительный import (импорт).
- `Navbar` с `NavLink` находится вне `BrowserRouter`.
- `Link` ведёт на path, которого нет в `AppRouter`.
- Забыт wildcard route `*`, и неизвестный адрес показывает пустой экран.
- В styled-components написан `#active` вместо `.active`: `#` означает `id`, а Router добавляет класс.
- У hex-цвета пропущен `#`, например написано `2bbbde` вместо `#2bbbde`.
- Имя свойства темы не совпадает: например, `theme.color` вместо `theme.colors`.
- TypeScript type не соответствует фактическим props компонента.

## 15. Как объяснить работу преподавателю

### Простой вариант на русском

Я сохранил существующие страницы и дизайн, но разделил код по назначению. Маленькие переиспользуемые элементы формы находятся в atoms, поле формы — в molecules, а Header, Navbar, Footer и ContactForm — в organisms. Общие компоненты расположения находятся в layouts. Маршруты вынесены в AppRouter, активная ссылка меню работает через NavLink, а неизвестный адрес показывает страницу 404. Типы props находятся рядом с компонентами, глобальная тема — в styles.

### Kort version på dansk

Jeg har bevaret de eksisterende sider og designet, men organiseret koden efter ansvar. Genbrugelige formular-elementer ligger i atoms, FormField i molecules, og Header, Navbar, Footer samt ContactForm i organisms. Fælles layout ligger i layouts. Routes er flyttet til AppRouter, NavLink viser det aktive menupunkt, og ukendte adresser viser en 404-side. Props-typer ligger sammen med komponenterne, mens det globale theme ligger i styles.

## 16. Что мне стоит изучить дальше

- React props (входные свойства) и композицию компонентов.
- TypeScript-типы для HTML-элементов и событий формы.
- React Router: вложенные маршруты и layout routes (маршруты-компоновки).
- Обработку и проверку данных форм.
- Styled-components: theme, transient props (служебные props с `$`) и адаптивные стили.
- Доступность: `label`, `fieldset`, клавиатурный фокус и тексты `alt`.
