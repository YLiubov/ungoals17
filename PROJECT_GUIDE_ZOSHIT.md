# Конспект проекта `ungoals17`

## 1. Как запускается приложение

```text
main.tsx
→ App.tsx
→ AppRouter.tsx
→ Route
→ компонент страницы
→ layouts и обычные компоненты
```

- `main.tsx` — точка входа. Здесь React подключается к HTML и применяется `ThemeProvider`.
- `App.tsx` — главный компонент приложения.
- `AppRouter.tsx` — выбирает страницу в зависимости от URL.
- `pages` — компоненты целых страниц.
- `layouts` — компоненты, управляющие шириной и расположением контента.
- `components` — переиспользуемые части интерфейса.

## 2. Component

**Component — компонент** — самостоятельная переиспользуемая часть интерфейса.

```tsx
export const Header = () => {
  return <header>...</header>;
};
```

```tsx
<Header />
```

- `export` разрешает использовать компонент в других файлах.
- `import` подключает его в другом файле.
- `export const Header` — **named export — именованный экспорт**.
- `<>...</>` — **Fragment — фрагмент**. Он группирует JSX без лишнего HTML-элемента.

## 3. Props и children

**Props — свойства компонента**. Через них родитель передаёт компоненту данные и настройки.

```tsx
<GoalCard id={1} title="Afskaf fattigdom" />
```

Здесь `id` и `title` — props.

**children** — специальный prop с содержимым между открывающим и закрывающим тегами компонента.

```tsx
<Container>
  <h1>Заголовок</h1>
</Container>
```

Главный принцип:

```text
То, что компонент делает всегда, остаётся внутри компонента.
То, что должно меняться, передаётся через props.
```

## 4. Atomic Design

```text
atoms:      Button, Input, Label, LikeButton
molecules:  FormField, GoalCard
organisms:  ContactForm, Footer, GoalList, Header, Navbar
layouts:    Container, ContentWrapper
pages:      Home, Goal, Education, FAQ, Contact, Login, CustomGoal
```

- **Atom — атом**: маленький самостоятельный элемент.
- **Molecule — молекула**: несколько элементов, работающих вместе.
- **Organism — организм**: крупная самостоятельная часть страницы.
- **Layout — макет**: отвечает за расположение и ширину контента.
- **Page — страница**: собирает компоненты для конкретного URL.

## 5. Styled-components

В проекте стили хранятся в файлах `.styled.ts`.

```ts
import styled from "styled-components";

export const LikeButtonStyled = styled.button`
  padding: 10px 22px;
`;
```

- `styled.button` создаёт React-компонент, который в HTML станет кнопкой.
- Backticks `` `...` `` содержат CSS.
- Styled-components автоматически создаёт уникальный CSS-класс.
- `ThemeProvider` делает общую тему доступной всему приложению.

```text
Global Styles      → общие стили приложения
CSS Modules        → локальные CSS-классы компонента
styled-components  → React-компоненты со стилями и JavaScript-значениями
```

Цвет из общей темы:

```ts
color: ${({ theme }) => theme.colors.primary};
```

Тема помогает сохранять единый стиль и централизованно менять цвета проекта.

## 6. Router и динамические страницы

```tsx
<Route path="/maal/:id" element={<GoalPage />} />
```

`:id` — динамический параметр URL.

```text
/maal/1  → цель 1
/maal/5  → цель 5
/maal/13 → цель 13
```

`GoalPage` получает `id` через `useParams()` и методом `find()` находит одну подходящую цель.

```text
useParams()
→ id из URL
→ преобразование в number
→ goalData.find(...)
→ объект нужной цели
→ отображение данных в JSX
```

`find()` возвращает первый подходящий объект и останавливает поиск. `map()` используется, когда нужны элементы для всех объектов массива.

## 7. Данные целей и GoalList

```text
goalData
→ GoalList использует map()
→ каждый объект передаётся в GoalCard через props
→ GoalCard создаёт динамический Link
→ Link открывает соответствующую GoalPage
```

```tsx
to={`/maal/${id}`}
```

Один `GoalList` переиспользуется на HomePage и страницах отдельных целей. Если массив изменится, список карточек обновится автоматически.

## 8. Hook

**Hook — хук** — специальная возможность React, которую функциональный компонент может подключить к себе. Например, `useState` позволяет хранить состояние.

Правила hooks:

- вызываются на верхнем уровне компонента;
- не вызываются внутри `if`, циклов и вложенных функций;
- используются внутри React-компонента или custom hook;
- их названия начинаются с `use`.

React ожидает одинаковый порядок вызова hooks при каждом render.

## 9. Обычная переменная и State

```ts
let isLiked = false;
```

Обычная локальная переменная создаётся заново при следующем запуске компонента. Её изменение не сообщает React, что интерфейс нужно обновить.

**State — состояние — tilstand**:

- сохраняется между re-render;
- изменяется через setter;
- после изменения сообщает React обновить компонент.

```tsx
const [isLiked, setIsLiked] = useState<boolean>(false);
```

```text
useState(initialValue)
→ [currentState, setterFunction]
```

- `isLiked` — текущее состояние.
- `setIsLiked` — setter, функция обновления.
- `boolean` — тип со значениями `true` или `false`.
- `false` — initial value, начальное значение.

## 10. Re-render

**Re-render — повторный рендеринг — gen-rendering**.

```text
Пользователь нажимает кнопку
→ вызывается onClick
→ event handler вызывает setter
→ React сохраняет новое состояние
→ компонент запускается повторно
→ создаётся новый JSX
→ React обновляет нужную часть интерфейса
```

React не перезагружает всю страницу браузера.

State не является постоянным хранилищем. После обновления страницы локальный state обычно сбрасывается. `useState` не отправляет данные на сервер и не сохраняет их в базе данных. Для постоянного хранения нужны, например, `localStorage`, API или база данных.

## 11. LikeButton

`LikeButton` — отдельный atom-компонент.

```text
isLiked = false → пользователь не поставил like
isLiked = true  → пользователь поставил like
```

```tsx
const handleLikeClick = () => {
  setIsLiked((previousIsLiked) => !previousIsLiked);
};
```

- `onClick` — событие нажатия.
- `handleLikeClick` — event handler, обработчик события.
- `!` — logical NOT, логическое НЕ.
- Functional state update получает предыдущее значение state.

```text
false → !false → true
true  → !true  → false
```

```tsx
onClick={handleLikeClick}
```

onClick
→ handleLikeClick
→ setLiked
→ новое значение state
→ re-render
→ сердце меняется

Здесь функция передаётся React. Запись `onClick={handleLikeClick()}` вызвала бы её сразу во время render.

<!-- SVG внутри LikeButton -->


## 12. Event handler

Event
→ само событие и информация о нём

Event handler
→ функция, которая обрабатывает событие

<!-- В CustomGoalDesigner нам понадобятся три события: -->
onChange
→ узнаём, что пользователь изменил input
В будущем handler получит новый текст и передаст его в state.

onSubmit
→ обрабатываем отправку формы
onSubmit принадлежит форме, а не только кнопке. Форма может быть отправлена:
- нажатием submit-кнопки;
- клавишей Enter внутри поля.

onClick
→ обрабатываем нажатие reset-кнопки
В будущем он понадобится кнопке сброса.

Event — событие — hændelse
Event object — объект события
Event handling — обработка событий — hændelseshåndtering
Event handler — обработчик события
onClick — событие нажатия
onChange — событие изменения
onSubmit — событие отправки формы
Naming convention — соглашение об именовании
Render — рендеринг

Event — это информация о произошедшем событии, а event handler — функция, которая определяет реакцию на него. onChange реагирует на изменение значения поля, onClick — на нажатие, а onSubmit — на отправку формы. Handler передаётся без круглых скобок, чтобы React вызвал его только после события.
**An "event" represents information about an occurrence, while an "event handler" is a function that defines the reaction to it. `onChange` responds to a change in a field's value, `onClick` to a click, and `onSubmit` to form submission. The handler is passed without parentheses so that React calls it only after the event takes place.**

onChange
→ handleTextChange
→ setGoalText
→ новый текст в state
→ re-render
→ preview обновляется

- State — состояние — tilstand
- Setter — функция обновления состояния
- Event object — объект события
- event.target.value — текущее значение поля/актуальное содержимое поля.
- Re-render — повторный рендеринг
- Preview — предварительный просмотр — forhåndsvisning

<!-- onClick={handleClick} Здесь мы передаём React саму функцию. Круглых скобок нет: --> 
**passing the function**
React получает функцию сейчас
→ пользователь нажимает позже
→ React вызывает функцию

<!-- onClick={handleClick()} означает немедленный вызов: --> 
**calling it immediately**
компонент выполняет render
→ handleClick() сразу запускается
→ результат функции передаётся в onClick

**Naming convention** 
- Обработчики часто называют так:
- handleClick
- handleChange
- handleSubmit
- handleReset

## Как работает цепочка
<!-- Для будущего текстового поля: -->
пользователь изменяет input
→ происходит event
→ React вызывает handleTextChange
→ handler получает новое значение
→ setter сохраняет его в state
→ React выполняет re-render

## handleReset
handleReset возвращает goalText и backgroundColor к начальным значениям через setters. Inputs являются controlled, поэтому после обновления state очищается текстовое поле, возвращается исходный цвет и автоматически обновляется preview.



### Условный текст

```tsx
{isLiked ? "Fjern like" : "Synes godt om"}
```

Это **ternary operator — тернарный оператор**:

```text
условие ? значение при true : значение при false
```

### Динамические стили

```text
isLiked
→ передаётся как $isLiked
→ styled-component проверяет boolean
→ меняет фон и цвет текста
```

`$isLiked` — **transient prop — служебный prop**. Знак `$` сообщает styled-components, что prop нужен только для стилей и не должен попадать в HTML.

## 12. Accessibility

**Accessibility — доступность — tilgængelighed**.

```tsx
<LikeButtonStyled
  type="button"
  $isLiked={isLiked}
  aria-pressed={isLiked}
  onClick={handleLikeClick}
>
  {isLiked ? "Fjern like" : "Synes godt om"}
</LikeButtonStyled>
```

- Настоящий `<button>` поддерживает клавиатуру, фокус и нажатие.
- `type="button"` предотвращает случайную отправку формы.
- `aria-pressed` сообщает screen reader, активна кнопка или нет.
- Значение `aria-pressed` обновляется вместе с `isLiked`.




### КАК ОБЬЯСНИТЬ ПРЕПОДАВАТЕЛЮ

### Структура проекта

Я организовала проект по принципам Atomic Design. Маленькие элементы находятся в `atoms`, составные — в `molecules`, крупные части интерфейса — в `organisms`, а компоненты расположения — в `layouts`. Маршруты вынесены в `AppRouter`, а стили компонентов находятся рядом с ними в файлах `.styled.ts`.

### Динамические страницы целей

Данные целей хранятся в массиве `goalData`. `GoalList` проходит по массиву методом `map()` и создаёт карточки. Каждая карточка содержит динамический `Link`, а `GoalPage` получает `id` через `useParams()` и методом `find()` находит нужный объект.

### Hook и State

Hook позволяет React-компоненту использовать state. В отличие от обычной локальной переменной, state сохраняется между re-render. Setter изменяет state и сообщает React, что компонент нужно отобразить повторно, без перезагрузки всей страницы.

### LikeButton

`LikeButton` является самостоятельным компонентом. `useState` хранит boolean-состояние `isLiked`, изначально равное `false`. При нажатии `onClick` вызывает обработчик, а setter переключает state. После re-render меняются текст и внешний вид кнопки. `$isLiked` используется только для динамических стилей, а `aria-pressed` сообщает состояние кнопки вспомогательным технологиям.

LikeButton is a standalone Atom component. The useState hook stores the boolean state isLiked, which is initially false. Clicking it calls handleLikeClick, and the setter toggles the previous value using the ! operator.

## 14. Текущий учебный прогресс

```text
1. Hook, State и Re-render                 ✓
2. Анализ LikeButton                       ✓
3. Создание структуры LikeButton           ✓
4. Первый boolean state                    ✓
5. Кнопка и onClick                        ✓
6. Переключение boolean                    ✓
7. Динамический текст                      ✓
8. Styled-components и динамический вид    ✓
9. Accessibility                           ✓
10. Подключение к GoalPage                 в процессе
11. Проверка перехода между целями         осталось
12. Итоговая проверка                      осталось
13. Bonus: количество likes                по желанию
```
