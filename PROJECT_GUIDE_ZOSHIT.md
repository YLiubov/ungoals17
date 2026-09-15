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

---

# CustomGoalDesigner: events, state и validation

## 1. Правильная структура

```text
CustomGoalPage
└── ContentWrapper
    └── CustomGoalDesigner (organism)
        ├── вводный текст
        ├── form
        │   ├── FormField для текста
        │   ├── составное поле цвета
        │   │   ├── Label
        │   │   └── Input type="color"
        │   ├── submit Button
        │   └── reset Button
        └── live preview
```

`CustomGoalPage` отвечает за страницу. `CustomGoalDesigner` отвечает за законченную интерактивную функциональность, поэтому является organism. Он переиспользует atoms `Input`, `Label`, `Button` и molecule `FormField`.

Файлы компонента:

```text
src/components/organisms/CustomGoalDesigner/
├── CustomGoalDesigner.tsx
└── CustomGoalDesigner.styled.ts
```

- `.tsx` содержит state, effects, handlers и JSX.
- `.styled.ts` содержит только локальные стили компонента.
- Отдельный `.types.ts` не нужен, потому что компонент не принимает props.

## 2. Термины

```text
Event — событие
Event handler — обработчик события
State — состояние — tilstand
Setter — функция обновления state
Render — создание JSX
Re-render — повторный рендеринг
Effect — эффект
Side effect — побочный эффект
useEffect Hook — хук эффекта
Dependency — зависимость
Dependency array — массив зависимостей
Initial render — первый рендер
Validation — проверка данных
Real-time validation — проверка в реальном времени
Conditional rendering — условный рендеринг
Controlled input — управляемое поле — kontrolleret inputfelt
Single source of truth — единый источник истины
Error state — состояние сообщения об ошибке
Touched state — состояние, показывающее взаимодействие с полем
```

## 3. Какие state существуют

Основные значения формы:

```tsx
const [goalText, setGoalText] = useState(INITIAL_GOAL_TEXT);
const [backgroundColor, setBackgroundColor] = useState(
  INITIAL_BACKGROUND_COLOR,
);
```

Ошибки полей:

```tsx
const [goalTextError, setGoalTextError] = useState("");
const [backgroundColorError, setBackgroundColorError] = useState("");
```

Почему ошибки разделены:

```text
goalTextError
→ относится только к тексту

backgroundColorError
→ относится только к цвету
```

Один state с названием `error` был бы непонятным: невозможно сразу увидеть, к какому полю относится сообщение.

Пустая строка означает отсутствие ошибки:

```text
"" → ошибки нет
"Du skal skrive dit eget verdensmål." → ошибка есть
```

## 4. Controlled inputs

Текстовое поле:

```text
goalText
→ value input
→ пользователь вводит текст
→ onChange
→ handleTextChange
→ event.target.value
→ setGoalText
→ новый goalText
```

Поле цвета:

```text
backgroundColor
→ value input type="color"
→ пользователь выбирает цвет
→ onChange
→ handleBackgroundColorChange
→ event.target.value
→ setBackgroundColor
→ новый backgroundColor
```

`event.target.value` у обоих inputs имеет тип `string`. Color-input возвращает HEX-строку, например `#2bbbde`.

Поле цвета выглядит как обычное HEX-поле, но поверх отображаемого текста расположен прозрачный `input type="color"`. Поэтому клик открывает системную палитру, а выбранный HEX отображается в поле и используется preview.

## 5. Что принимает useEffect

```tsx
useEffect(setupFunction, dependencyArray);
```

Первый аргумент — функция с кодом эффекта.

Второй аргумент — массив reactive values, от которых зависит effect.

```text
Dependency array не вызывает render.
Setter изменяет state и вызывает render.
После render React проверяет dependencies.
Если зависимость изменилась, запускается effect.
```

### Без массива зависимостей

```tsx
useEffect(effect);
```

Effect запускается после каждого render.

### С пустым массивом

```tsx
useEffect(effect, []);
```

Effect запускается после первого render. В development с `StrictMode` React может дополнительно запускать его для проверки.

### С зависимостью

```tsx
useEffect(effect, [goalText]);
```

Effect запускается после первого render и после каждого изменения `goalText`.

## 6. Real-time validation текста

```tsx
useEffect(() => {
  setGoalTextError(
    goalText.trim() === "" ? "Du skal skrive dit eget verdensmål." : "",
  );
}, [goalText]);
```

Логика:

```text
goalText.trim() === ""
→ установить сообщение

goalText.trim() !== ""
→ установить пустую строку
```

`trim()` удаляет пробелы в начале и конце. Поэтому строка `"   "` тоже считается пустой.

Полная цепочка:

```text
onChange
→ setGoalText
→ изменяется goalText
→ render
→ useEffect видит изменение [goalText]
→ validation
→ setGoalTextError
→ дополнительный render
→ ошибка появляется или исчезает
```

## 7. Real-time validation цвета

```tsx
useEffect(() => {
  setBackgroundColorError(
    backgroundColor.trim() === "" ? "Du skal vælge en farve." : "",
  );
}, [backgroundColor]);
```

Этот effect зависит только от `backgroundColor`.

Текущий `input type="color"` обычно не позволяет пользователю создать пустое значение. Тем не менее проверка существует, потому что письменное задание требует проверять оба поля.

Мы не добавляем error-state в dependencies того effect, который этот error-state изменяет:

```tsx
// Неправильно для нашей логики:
useEffect(() => {
  setGoalTextError(...);
}, [goalText, goalTextError]);
```

Effect использует `goalText` для вычисления ошибки. Поэтому настоящая зависимость — только `goalText`.

## 8. Когда запускается validation

Effects с dependencies запускаются и после initial render.

Поэтому начальный `goalText` равен пустой строке и ошибка текста появляется сразу:

```text
initial render
→ goalText === ""
→ effect
→ goalTextError получает сообщение
```

После reset текст снова становится пустым, effect выполняет проверку, и ошибка снова появляется.

Если преподаватель потребует показывать ошибки только после взаимодействия, понадобится отдельный `touched-state`. Сейчас он не добавлен.

Вопрос преподавателю:

```text
Skal fejlbeskederne vises allerede ved den første rendering, eller først efter at brugeren har ændret feltet eller prøvet at sende formularen?
```

Перевод: сообщения об ошибках должны показываться при первом render или только после изменения поля либо попытки отправить форму?

## 9. Conditional rendering ошибки

```tsx
{goalTextError && (
  <p id="goalTextError" className="customGoalError">
    {goalTextError}
  </p>
)}
```

```text
goalTextError === ""
→ пустая строка преобразуется в false
→ JSX ошибки не отображается

goalTextError содержит сообщение
→ значение преобразуется в true
→ JSX ошибки отображается
```

## 10. Accessibility ошибок

```tsx
aria-invalid={Boolean(goalTextError)}
aria-describedby={goalTextError ? "goalTextError" : undefined}
```

- `aria-invalid` сообщает screen reader, что поле некорректно.
- `aria-describedby` связывает input с сообщением по его `id`.
- `aria-live="polite"` позволяет сообщить об изменившейся ошибке без резкого прерывания пользователя.
- `Boolean(goalTextError)` преобразует пустую или непустую строку в `false` или `true`.

Стандартные accessibility props проходят через существующий `Input`, потому что его тип основан на `ComponentPropsWithoutRef<"input">`.

## 11. Submit и reset

```tsx
const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
  event.preventDefault();
};
```

`preventDefault()` отменяет стандартную отправку и перезагрузку страницы. Данные никуда не отправляются: в проекте нет API или backend.

```tsx
const handleReset = () => {
  setGoalText(INITIAL_GOAL_TEXT);
  setBackgroundColor(INITIAL_BACKGROUND_COLOR);
};
```

Reset изменяет state через setters. Controlled inputs и preview получают новые значения автоматически. Effects также видят изменения зависимостей и повторяют validation.

## 12. Важное замечание о современном React

Новое правило ESLint `react-hooks/set-state-in-effect` предупреждает, что синхронный setter внутри effect создаёт дополнительный render. Для простой проверки данных в production-коде ошибку часто лучше вычислять прямо из существующего state без отдельного effect.

В этом задании `useEffect` и отдельный error-state являются прямым учебным требованием преподавателя. Поэтому правило отключено только возле двух конкретных setters, а не глобально для проекта.

```text
Учебная цель
→ увидеть dependency array
→ увидеть запуск effect после render
→ увидеть дополнительный render после setter ошибки
```

## 13. Частые ошибки

### Hook внутри if

```tsx
if (goalText === "") {
  useEffect(...); // нельзя
}
```

Hooks вызываются только на верхнем уровне компонента.

### Неправильная зависимость

```tsx
useEffect(() => {
  // используется goalText
}, [backgroundColor]);
```

Dependency array должен содержать reactive values, используемые effect.

### Прямое изменение state

```tsx
goalTextError = "Ошибка"; // нельзя
```

State изменяется через setter.

### Вызов handler во время render

```tsx
onChange={handleTextChange()} // неправильно
onChange={handleTextChange}   // правильно
```

### Бесконечный цикл

```text
effect запускается после каждого render
→ безусловно создаёт новое state
→ новое state вызывает render
→ effect снова запускается
```

Setter внутри effect не всегда создаёт цикл. Цикл появляется, когда effect снова запускается из-за собственного обновления и каждый раз создаёт новое состояние.

## 14. Как объяснить преподавателю

В `CustomGoalDesigner` значения полей хранятся в state и обновляются через `onChange`. Каждый `useEffect` получает функцию проверки и свой dependency array. Effect текста зависит от `goalText`, а effect цвета — от `backgroundColor`, поэтому каждая проверка запускается после первого render и после изменения соответствующего поля.

Результат validation сохраняется в отдельных error-state. Conditional rendering показывает сообщение только тогда, когда error-state содержит текст. Поля связаны с сообщениями через `aria-invalid` и `aria-describedby`. Submit предотвращает перезагрузку страницы, а reset возвращает начальные значения и повторно запускает validation.

---

# Лайки, связанные с конкретным verdensmål

## 1. Результат задания

Теперь лайк относится не к кнопке и не к странице вообще, а к конкретному `goal.id`.

Пример состояния:

```ts
["1", "5", "12"]
```

Это означает, что лайкнуты цели №1, №5 и №12. Если перейти между React routes, массив остаётся в `AppRouter`, поэтому лайки сохраняются. После обычного обновления вкладки приложение запускается заново и массив снова становится пустым, потому что `localStorage` пока не используется.

## 2. Базовый conditional rendering

`conditional rendering` — условный рендеринг. React показывает разный JSX в зависимости от условия.

Обычный boolean может выглядеть так:

```tsx
const isLiked = false;
```

Если заменить `false` на `true`, результат условий изменится.

### Ternary operator — тернарный оператор

```tsx
isLiked ? "Liked" : "Like"
```

Структура:

```text
условие ? значение_если_true : значение_если_false
```

Тернарный оператор выбирает одно из двух значений. В итоговом интерфейсе видимый текст у кнопки убран, но тернарный оператор по-прежнему выбирает заливку сердца и `aria-label`.

### Оператор &&

```tsx
isLiked && <p>Du synes godt om dette verdensmål.</p>
```

Если слева `true`, React отображает JSX справа. Если слева `false`, JSX не отображается. В итоговом интерфейсе сообщение под кнопкой убрано по дизайну, а этот приём используется для белого сердца на карточке.

## 3. Почему одного boolean недостаточно

```tsx
const [liked, setLiked] = useState(false);
```

Один boolean отвечает только на вопрос «да или нет», но не хранит информацию о том, какая из 17 целей лайкнута.

Кроме того, при переходе с `/maal/1` на `/maal/5` React может оставить тот же экземпляр `GoalPage` смонтированным и только передать ему другой параметр URL. Локальное значение `true` тогда могло бы ошибочно показываться уже для цели №5.

Правильный вопрос для состояния:

```text
Какие ID сейчас лайкнуты?
```

Поэтому используется массив строк:

```tsx
const [likedGoalIds, setLikedGoalIds] = useState<string[]>([]);
```

## 4. Основные термины

- `state` — состояние, данные компонента, изменение которых вызывает re-render.
- `local state` — локальное состояние, доступное только компоненту-владельцу.
- `shared state` — общее состояние, нужное нескольким компонентам.
- `lifting state up` — поднятие состояния в ближайшего общего родителя.
- `single source of truth` — единый источник истины. Массив ID хранится только в одном месте.
- `props` — данные и callback-функции, передаваемые от родителя ребёнку.
- `prop drilling` — передача props через несколько уровней компонентов.
- `controlled component` — управляемый компонент, состояние которого приходит от родителя через props.
- `callback` — функция, которую родитель передаёт ребёнку, чтобы ребёнок мог сообщить о событии.
- `re-render` — повторное выполнение компонента для обновления интерфейса.
- `mount` — появление экземпляра компонента в React-дереве.
- `unmount` — удаление экземпляра компонента из React-дерева.

## 5. Где теперь хранится state

State находится в `src/router/AppRouter.tsx`.

```text
App
└── AppRouter ← владеет likedGoalIds
    ├── HomePage
    │   └── GoalList
    │       └── GoalCard
    └── GoalPage
        ├── LikeButton
        └── GoalList
            └── GoalCard
```

`AppRouter` выбран потому, что он находится выше `HomePage` и `GoalPage` и не размонтируется при переходе между целями. Поэтому обе страницы получают один и тот же источник данных.

## 6. Функция переключения лайка

```tsx
const toggleGoalLike = (goalId: string) => {
  setLikedGoalIds((currentIds) =>
    currentIds.includes(goalId)
      ? currentIds.filter((id) => id !== goalId)
      : [...currentIds, goalId],
  );
};
```

Разбор:

1. `goalId` — ID цели, кнопку которой нажал пользователь.
2. `currentIds` — самое актуальное предыдущее значение state, которое React передаёт функции.
3. `includes(goalId)` возвращает `true`, если ID уже есть в массиве.
4. Если ID найден, `filter()` создаёт новый массив без этого ID.
5. Если ID не найден, `[...currentIds, goalId]` создаёт новый массив, копирует старые ID и добавляет новый.
6. Setter получает новый массив и запускает re-render.

### Почему нельзя изменять массив напрямую

Неправильно:

```tsx
likedGoalIds.push(goalId);
```

`push()` изменяет старый массив. React state нужно обновлять иммутабельно — создавать новый массив через `filter()` или spread operator.

### Functional state update

```tsx
setLikedGoalIds((currentIds) => ...);
```

Это `functional state update` — функциональное обновление состояния. Оно безопаснее обращения к `likedGoalIds` внутри setter, потому что React передаёт функции самое актуальное значение, даже если несколько обновлений выполняются рядом.

## 7. LikeButton как controlled component

Собственный `useState` удалён из `LikeButton`. Его контракт находится в `LikeButton.types.ts`:

```ts
export type LikeButtonProps = {
  isLiked: boolean;
  onToggle: () => void;
};
```

- `isLiked` сообщает кнопке текущее состояние.
- `onToggle` сообщает родителю, что пользователь нажал кнопку.
- `LikeButton` отображает данные, но не хранит их источник истины.
- `onClick={onToggle}` передаёт функцию. Скобок нет, поэтому функция не вызывается во время render.
- `type="button"` не позволяет кнопке случайно отправлять форму.
- `aria-pressed` сообщает assistive technologies, нажата ли toggle-кнопка.
- `aria-label` получает понятное действие: поставить или убрать лайк.

## 8. Как GoalPage определяет текущий лайк

```tsx
const { id } = useParams<{ id: string }>();
const goal = goals.find((currentGoal) => currentGoal.id === id);
```

`useParams()` читает динамический параметр URL. `find()` возвращает один объект цели с подходящим ID. После проверки `if (!goal)` TypeScript знает, что `goal` существует.

```tsx
const isLiked = likedGoalIds.includes(goal.id);
```

Далее кнопка получает boolean и callback именно для текущего ID:

```tsx
<LikeButton
  isLiked={isLiked}
  onToggle={() => onToggleGoalLike(goal.id)}
/>
```

Стрелочная функция нужна потому, что `onToggleGoalLike` ожидает аргумент, а `LikeButton` должен получить готовую функцию без аргументов.

## 9. Полная цепочка события

```text
URL /maal/5
→ useParams получает id "5"
→ find находит объект goal №5
→ includes проверяет наличие "5" в likedGoalIds
→ LikeButton получает isLiked
→ пользователь вызывает onToggle кликом
→ toggleGoalLike получает "5"
→ setter создаёт новый массив ID
→ React выполняет re-render
→ кнопка и карточки получают новое состояние
```

Важно: данные передаются вниз через props, а событие передаётся вверх через callback.

## 10. GoalList и GoalCard

Один и тот же `GoalList` используется на главной странице и на странице цели. Он получает весь массив `likedGoalIds`.

Внутри `map()` проверка выполняется отдельно для каждого объекта:

```tsx
isLiked={likedGoalIds.includes(goal.id)}
```

`GoalCard` получает уже готовый boolean. Если он равен `true`, оператор `&&` показывает белый контур сердца.

Сердце является только визуальным индикатором:

- оно имеет `aria-hidden="true"`, чтобы screen reader не воспринимал его как повторное управление;
- у него `pointer-events: none`;
- оно не является кнопкой;
- оно находится внутри существующего `Link`, но не создаёт вложенный интерактивный элемент;
- карточка имеет `position: relative`, а сердце — `position: absolute`, `right` и `bottom`.

## 11. Почему состояние переживает route-переход, но не refresh

Переход через React Router не перезапускает всё приложение. `AppRouter` продолжает существовать, поэтому его state сохраняется.

При browser refresh JavaScript-приложение запускается заново:

```tsx
useState<string[]>([])
```

снова создаёт пустой массив. Это ожидаемое поведение задания. Для сохранения после refresh позже понадобится `localStorage`, API или другое постоянное хранилище.

## 12. Что проверить вручную

1. Открыть `/maal/1`: кнопка показывает `Like`.
2. Нажать её: сердце кнопки заполняется основным цветом темы.
3. В списке на карточке №1 появляется белое сердце.
4. Перейти на `/maal/5`: она ещё не лайкнута.
5. Лайкнуть №5: сердца есть у №1 и №5.
6. Вернуться к №1: её лайк сохранился.
7. Убрать лайк №1: исчезает только её сердце.
8. Обновить браузер: все лайки сбрасываются.
9. Открыть `/maal/999`: отображается `NotFoundPage`.

## 13. Как коротко объяснить преподавателю по-русски

Одного boolean недостаточно для 17 целей, поэтому ID лайкнутых целей хранятся в массиве. State поднят в `AppRouter`, который не размонтируется при переходе между routes. `includes()` проверяет, лайкнута ли конкретная цель. `LikeButton` является controlled component и получает `isLiked` и callback через props. Тернарный оператор меняет заливку и доступное название кнопки, а `&&` показывает сердце на `GoalCard`. Поэтому каждый лайк связан с `goal.id` и не переносится на другую цель.

## 14. Kort forklaring på dansk

Én boolean er ikke nok til 17 verdensmål, så ID'erne på de likede mål gemmes i et array. State er løftet op i `AppRouter`, som ikke bliver afmonteret, når brugeren skifter mellem routes. `includes()` undersøger, om et bestemt `goal.id` findes i arrayet. `LikeButton` er en controlled component og modtager `isLiked` og en callback gennem props. En ternary operator ændrer hjertets fyld og knappens tilgængelige navn, mens `&&` viser hjertet på `GoalCard`. Derfor tilhører hvert like det korrekte verdensmål.
