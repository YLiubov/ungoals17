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
Regular expression / RegExp — регулярное выражение — regulært udtryk
Fallback value — безопасное запасное значение — reserveværdi
Accessibility — доступность — tilgængelighed
aria-invalid — признак невалидного поля
aria-describedby — связь поля с пояснением
trim() — удаление пробелов по краям строки
length — количество символов или элементов
test() — проверка строки регулярным выражением
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
"Målteksten må ikke være tom." → ошибка есть
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
    goalTextLimitExceeded
      ? "Målteksten må højst indeholde 30 tegn."
      : goalTextTouched
        ? getGoalTextError(goalText)
        : "",
  );
}, [goalText, goalTextTouched, goalTextLimitExceeded]);
```

Логика:

```text
goalText.trim() === "" → ошибка пустого поля
goalText.length > 30 → ошибка превышения длины
иначе → пустая строка, ошибки нет
```

`trim()` удаляет пробелы в начале и конце. Поэтому строка `"   "` тоже считается пустой.

`length` возвращает количество символов. Ровно 30 символов разрешены. При попытке добавить 31-й символ handler не сохраняет новое значение, поэтому input и счётчик остаются на `30 / 30`, но показывается ошибка лимита.

Дополнительные состояния управляют моментом показа ошибки:

```tsx
const [goalTextTouched, setGoalTextTouched] = useState(false);
const [goalTextLimitExceeded, setGoalTextLimitExceeded] = useState(false);
```

- `goalTextTouched` показывает, взаимодействовал ли пользователь с полем;
- `goalTextLimitExceeded` запоминает попытку ввести больше 30 символов;
- `onBlur` делает поле touched, даже если пользователь ничего не ввёл;
- reset возвращает оба значения в `false`.

Полная цепочка:

```text
onChange
→ setGoalText
→ изменяется goalText
→ render
→ useEffect видит изменение dependencies
→ validation
→ setGoalTextError
→ дополнительный render
→ ошибка появляется или исчезает
```

## 7. Real-time validation цвета

```tsx
useEffect(() => {
  setBackgroundColorError(getBackgroundColorError(backgroundColor));
}, [backgroundColor]);
```

Этот effect зависит только от `backgroundColor`.

Текущий `input type="color"` обычно возвращает полный HEX-код и не позволяет пользователю создать пустое значение. Тем не менее state защищён полной проверкой, потому что значение может в будущем прийти из другого input, props или API.

```tsx
const HEX_COLOR_PATTERN = /^#(?:[0-9a-fA-F]{3}|[0-9a-fA-F]{6})$/;
```

- `^` — начало строки;
- `#` — обязательная решётка;
- `[0-9a-fA-F]` — одна HEX-цифра;
- `{3}` и `{6}` — ровно 3 или 6 цифр;
- `|` — один вариант или другой;
- `$` — конец строки;
- `test(value)` возвращает boolean соответствия.

Валидны: `#fff`, `#FFF`, `#ff0000`, `#FF0000`. Невалидны: `fff`, `#ff00`, `#gg0000`, `red`.

Preview использует безопасное значение:

```tsx
const previewColor = isValidHexColor(backgroundColor)
  ? backgroundColor
  : INITIAL_BACKGROUND_COLOR;
```

Это fallback value: невалидная строка не попадает в CSS, вместо неё используется исходный primary-цвет темы.

Мы не добавляем error-state в dependencies того effect, который этот error-state изменяет:

```tsx
// Неправильно для нашей логики:
useEffect(() => {
  setGoalTextError(...);
}, [goalText, goalTextError]);
```

Текстовый effect использует `goalText`, `goalTextTouched` и `goalTextLimitExceeded`, поэтому все три значения находятся в его dependency array. Error-state там нет, потому что effect его создаёт, а не использует для вычисления.

## 8. Когда запускается validation

Effects с dependencies запускаются и после initial render.

Начальный `goalText` равен пустой строке, но ошибка не появляется сразу:

```text
initial render
→ goalText === ""
→ goalTextTouched === false
→ effect
→ goalTextError остаётся пустой строкой
```

Если пользователь сфокусируется на пустом поле и уйдёт, `onBlur` установит `goalTextTouched` в `true`; после render effect покажет ошибку пустоты. После reset текст снова пустой, но touched-state сбрасывается, поэтому ошибка и красная рамка исчезают.

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

  if (!isValidGoalText(goalText) || !isValidHexColor(backgroundColor)) {
    return;
  }
};
```

`preventDefault()` отменяет стандартную отправку и перезагрузку страницы. Submit отдельно проверяет актуальные значения, а не ждёт, успели ли effects обновить error-state. Невалидная форма дальше не обрабатывается. Данные никуда не отправляются: в проекте нет API или backend.

Submit также устанавливает `goalTextTouched` в `true`, поэтому попытка отправить нетронутое пустое поле показывает понятную ошибку.

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

Результат validation сохраняется в отдельных error-state. Conditional rendering показывает сообщение только тогда, когда error-state содержит текст. Поля связаны с сообщениями через `aria-invalid` и `aria-describedby`. HEX проверяется одним RegExp, а preview получает введённый цвет только при валидном результате. Submit предотвращает перезагрузку и повторно проверяет актуальные значения, а reset возвращает начальные значения, preview и счётчик и повторно запускает validation.

Простая датская версия:

```text
Teksten og farven gemmes i hver sin state. Controlled inputs opdaterer state med onChange. Den ene useEffect afhænger af goalText, og den anden afhænger af backgroundColor. Efter et render validerer effekten den nye værdi og opdaterer error state. HEX-koden kontrolleres med et regulært udtryk. Preview bruger kun farven, hvis den er gyldig; ellers bruges standardfarven.
```

### Контрольные вопросы по useEffect

1. **Что такое side effect?** Действие после render, которое синхронизирует React с чем-то вне вычисления JSX. В этом учебном задании effect используется для обновления error-state.
2. **Что находится в dependency array?** Reactive values, изменение которых должно повторно запустить effect после render.
3. **Когда работает `useEffect(..., [])`?** После первого render; в development StrictMode возможен дополнительный проверочный запуск.
4. **Когда работает текстовый effect?** После первого render и после изменения `goalText`, `goalTextTouched` или `goalTextLimitExceeded`.
5. **Вызывает ли dependency array re-render?** Нет. Re-render вызывает setter state или новые props.
6. **Почему текстовый effect имеет три зависимости?** Ошибка зависит от текста, взаимодействия с полем и попытки превысить лимит.
7. **Почему error-state нет в dependencies?** Effect не использует ошибку для проверки; он её создаёт. Добавление ошибки было бы лишним и могло бы повторно запускать effect.
8. **Как проверяется HEX?** `RegExp.test()` принимает только `#` и ровно 3 либо 6 HEX-цифр.
9. **Почему preview безопасен?** Он получает `previewColor`: валидное значение или fallback.
10. **Чем отличаются `useState` и `useEffect`?** `useState` хранит данные и даёт setter, а `useEffect` выполняет код после render согласно dependencies.

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

---

# MÅ IKKE SLETTES — обязательная база JavaScript, Service и React

Этот раздел содержит основные темы курса, которые я должна знать и уметь объяснять. Его нельзя удалять. Для каждой темы указано, где она используется в проекте или когда она будет изучаться.

## Статусы тем

- **Brugt i projektet** — уже используется в настоящем коде проекта.
- **Forklaret, men ikke implementeret** — объяснено, но специально не добавлено в приложение.
- **Skal læres senere** — будет изучаться позднее, когда появится реальная архитектурная необходимость.

## 1. JavaScript

### Variables — Variabler — переменные

Переменная хранит значение. `let` разрешает переназначение, `const` запрещает переназначить саму переменную. В React чаще применяется `const`, потому что новые значения state создаются через setter, а не присваиваются переменной напрямую.

```ts
const goal = goals.find(...);
const isLiked = likedGoalIds.includes(goal.id);
const previewColor = isColorValid ? color : fallbackColor;
```

State variable не является обычной изменяемой переменной: `goalText = "new"` делать нельзя; нужен `setGoalText("new")`. **Статус: Brugt i projektet.**

Вопрос: почему React state нельзя изменить присваиванием? Ответ: setter сообщает React об изменении и запускает re-render. Dansk: *En setter fortæller React, at state er ændret, og starter et nyt render.*

### Constants — Konstanter — константы

`const` создаёт связь имени со значением, которую нельзя переназначить. Но объект или массив внутри `const` технически может быть изменён, поэтому React-массивы всё равно обновляются иммутабельно.

```ts
const HEX_COLOR_PATTERN = /^#(?:[0-9a-fA-F]{3}|[0-9a-fA-F]{6})$/;
const INITIAL_BACKGROUND_COLOR = theme.colors.primary;
```

RegExp и стандартный цвет удобно хранить в константах: они имеют одно значение и не дублируются. **Статус: Brugt i projektet**, `CustomGoalDesigner.tsx`.

Вопрос: можно ли переназначить `const`? Ответ: нет. Dansk: *Nej, selve konstanten kan ikke tildeles en ny værdi.*

### Condition — Betingelse — условие

`if` проверяет первое условие, `else if` — следующее, `else` выполняется, если предыдущие условия ложны.

```ts
if (value.trim() === "") {
  return "empty error";
} else if (value.length > 30) {
  return "length error";
} else {
  return "";
}
```

В реальном коде ранний `return` позволяет не писать лишний `else`, но логика остаётся той же. **Статус: Brugt i projektet**, функции validation.

Вопрос: зачем нужен `else if`? Ответ: чтобы проверить следующее условие, только если первое ложно. Dansk: *Else if kontrollerer en ny betingelse, når den første er falsk.*

### Operators — Operatorer — операторы

| Оператор | Значение | Пример |
| --- | --- | --- |
| `=` | присваивание | `const id = "5"` |
| `===` | строгое сравнение значения и типа | `goal.id === id` |
| `!==` | строгое «не равно» | `id !== goalId` |
| `!` | логическое НЕ | `!isValidHexColor(color)` |
| `&&` | логическое И / условный JSX | `error && <p>{error}</p>` |
| `\|\|` | логическое ИЛИ | `goalText \|\| "Min måltekst"` |
| `>` | больше | `goalText.length > 30` |
| `<` | меньше | `count < 30` |
| `? :` | ternary, выбор из двух значений | `valid ? color : fallback` |
| `...` | spread, копирование элементов | `[...currentIds, goalId]` |

`=` присваивает значение, а `===` сравнивает без преобразования типов. **Статус: Brugt i projektet.**

Вопрос: чем `=` отличается от `===`? Ответ: первое присваивает, второе строго сравнивает. Dansk: *`=` tildeler en værdi, mens `===` sammenligner værdi og type.*

### Loops / Iteration — Løkker / iteration — циклы и перебор

Обычный цикл (`for`) повторяет блок кода. Iteration — обработка элементов коллекции. В проекте используются методы массивов:

- `goals.map()` в `GoalList.tsx` возвращает новый массив JSX-карточек;
- `goals.find()` в `GoalPage.tsx` возвращает первый подходящий объект или `undefined`;
- `currentIds.filter()` в `AppRouter.tsx` возвращает новый массив элементов, прошедших условие.

**Статус: Brugt i projektet.**

Вопрос: чем `map()` отличается от `find()`? Ответ: `map()` преобразует все элементы, `find()` останавливается на первом совпадении. Dansk: *Map behandler alle elementer, mens find returnerer det første match.*

### Data Types — Datatyper — типы данных

| Тип | Значение | Пример |
| --- | --- | --- |
| `string` | текст | `title: string` |
| `number` | число | `30` |
| `boolean` | `true` или `false` | `isLiked: boolean` |
| `array` | список | `likedGoalIds: string[]` |
| `object` | набор свойств | объект `goal` |
| `undefined` | значение не найдено/не задано | результат неуспешного `find()` |
| `null` | намеренное отсутствие значения | часто приходит из API, сейчас почти не нужен |
| `function` | выполняемый блок кода | `toggleGoalLike` |

TypeScript фиксирует ожидаемый тип: `useState<string>("")`, `useState<boolean>(false)`, `useState<string[]>([])`. Generic часто выводится автоматически из начального значения, но для пустого массива тип указан явно. **Статус: Brugt i projektet.**

Вопрос: зачем TypeScript у state? Ответ: он не позволяет записать значение неправильного типа. Dansk: *TypeScript forhindrer værdier med en forkert type i state.*

### Promises — Promises — промисы

Promise представляет будущий результат асинхронной операции. Состояния: `pending` — ожидание, `fulfilled` — успех, `rejected` — ошибка. `async/await` делает такой код последовательным для чтения, а `try/catch` перехватывает ошибку.

**Статус: Forklaret, men ikke implementeret endnu.** Искусственный Promise в форму не добавлен.

Вопрос: что хранит Promise? Ответ: будущий успешный результат или ошибку. Dansk: *Et Promise repræsenterer et fremtidigt resultat eller en fejl.*

### Fetch

`fetch()` отправляет HTTP request и возвращает Promise. `response.ok` показывает успешность HTTP-ответа, а `response.json()` асинхронно читает JSON.

```ts
const response = await fetch("/api/goals");

if (!response.ok) {
  throw new Error("Request failed");
}

const data = await response.json();
```

Обычно код помещают в `try/catch`. **Статус: Forklaret, men ikke implementeret endnu**, потому что у проекта нет подключённого API.

Вопрос: что возвращает `fetch()`? Ответ: Promise с HTTP response. Dansk: *Fetch returnerer et Promise med et HTTP-svar.*

### Destructuring — Destrukturering — деструктуризация

Array destructuring берёт значения по позиции:

```ts
const [goalText, setGoalText] = useState("");
```

Object destructuring берёт значения по имени свойства:

```ts
const { id } = useParams();
```

**Статус: Brugt i projektet**, `CustomGoalDesigner.tsx` и `GoalPage.tsx`.

Вопрос: в чём разница? Ответ: массив разбирается по позиции, объект — по ключу. Dansk: *Et array destruktureres efter position, og et objekt efter property-navn.*

### Ternary operator — Ternær operator — тернарный оператор

```ts
condition ? valueIfTrue : valueIfFalse
```

Реальные примеры: безопасный `previewColor`, заливка `Heart`, динамический `aria-label`. Простой ternary удобен для двух коротких результатов. Для нескольких условий и действий понятнее `if`.

```ts
const previewColor = isValidHexColor(backgroundColor)
  ? backgroundColor
  : INITIAL_BACKGROUND_COLOR;
```

**Статус: Brugt i projektet.**

Вопрос: когда использовать ternary? Ответ: для короткого выбора одного из двух значений. Dansk: *En ternary operator er god til et kort valg mellem to værdier.*

## 2. Service

Все темы Service здесь пока имеют статус **Forklaret, men ikke implementeret endnu**: настоящее API к проекту не подключено.

### HTTP Methods — HTTP-metoder — HTTP-методы

- `GET` — получить данные;
- `POST` — создать данные;
- `PUT` — полностью заменить ресурс;
- `PATCH` — частично изменить ресурс;
- `DELETE` — удалить ресурс.

Вопрос: чем `PUT` отличается от `PATCH`? Ответ: PUT заменяет ресурс целиком, PATCH изменяет часть. Dansk: *PUT erstatter hele ressourcen, mens PATCH ændrer en del.*

### Request — Forespørgsel — запрос

Frontend отправляет request серверу. В нём могут быть URL, HTTP method, headers, body, query parameters и authorization.

Вопрос: что находится в request? Ответ: адрес, метод и при необходимости headers/body/authorization. Dansk: *En request indeholder en URL, en metode og eventuelt headers, body og authorization.*

### Response — Svar — ответ

Server возвращает response: status code, headers и body, часто JSON.

```text
200 OK                  — успешно
201 Created             — создано
400 Bad Request         — неправильный запрос
401 Unauthorized        — нет аутентификации
403 Forbidden           — нет разрешения
404 Not Found           — ресурс не найден
500 Internal Server Error — ошибка сервера
```

React Router `NotFoundPage` похож по смыслу на HTTP 404, но клиентский экран не обязательно означает, что сервер действительно отправил status `404`.

Вопрос: что означает 201? Ответ: сервер успешно создал ресурс. Dansk: *201 betyder, at serveren har oprettet en ressource.*

### Endpoint

Endpoint — конкретный адрес API: `GET /api/goals`, `GET /api/goals/5`, `POST /api/goals`.

Вопрос: что такое endpoint? Ответ: адрес конкретной серверной операции или ресурса. Dansk: *Et endpoint er adressen til en bestemt ressource eller serverhandling.*

### Query / Query parameters

В `/api/goals?color=red&limit=10` значения `color=red` и `limit=10` — query parameters. Они уточняют запрос после `?`.

Не путать:

```text
/goals/:id      → route parameter
/goals?id=5     → query parameter
```

Вопрос: где начинается query string? Ответ: после `?`. Dansk: *En query string begynder efter `?`.*

### Bearer Token

Bearer Token используется для авторизации request и обычно передаётся в header:

```ts
headers: {
  Authorization: `Bearer ${token}`,
}
```

Настоящий токен нельзя писать в публичном frontend-коде, конспекте или GitHub. В примере секретного значения нет.

Вопрос: где передаётся Bearer Token? Ответ: обычно в header `Authorization`. Dansk: *Et Bearer Token sendes normalt i Authorization-headeren.*

### Общая Service-цепочка

```text
React component
→ fetch()
→ HTTP request
→ endpoint
→ server
→ HTTP response
→ response.json()
→ state
→ re-render
```

Эта цепочка объяснена, но API в текущем проекте пока отсутствует.

## 3. React

### Component — Komponent — компонент

React-компонент — функция с именем с большой буквы, которая возвращает JSX. Компоненты можно переиспользовать. Примеры: `GoalCard`, `FormField`, `CustomGoalDesigner`.

**Статус: Brugt i projektet.** Вопрос: почему имя с большой буквы? Ответ: так React отличает компонент от HTML-тега. Dansk: *React bruger et stort begyndelsesbogstav til at skelne komponenter fra HTML-tags.*

### Props

Props передают read-only данные от родителя ребёнку. Ребёнок не изменяет props; для события он вызывает callback. TypeScript описывает контракт через `type`, например `GoalCardProps` и `LikeButtonProps`.

**Статус: Brugt i projektet.** Вопрос: можно ли изменить props в ребёнке? Ответ: нет, props только читаются. Dansk: *Nej, props er read-only.*

### props.children

`children` — JSX между открывающим и закрывающим тегами компонента. В `ContentWrapper.types.ts` он имеет тип `ReactNode`, а `ContentWrapper.tsx` выводит `{children}`.

```tsx
<ContentWrapper title="Byg dit eget mål">
  <CustomGoalDesigner />
</ContentWrapper>
```

**Статус: Brugt i projektet.** Вопрос: что такое children? Ответ: содержимое внутри компонента. Dansk: *Children er indholdet mellem komponentens tags.*

### Styled-components

Styled-component — React-компонент со стилями. `styled.div`, `styled.button` и `styled.form` используют template literal. Динамика приходит через props, например transient prop `$backgroundColor`; `$` не передаёт служебный prop в DOM. Theme даёт общие цвета и шрифты. Вложенные selectors стилизуют внутренние элементы.

**Статус: Brugt i projektet**, все `*.styled.ts`, особенно `CustomGoalDesigner.styled.ts` и `GoalCard.styled.ts`.

Вопрос: зачем transient prop начинается с `$`? Ответ: он нужен стилям и не должен попасть в HTML. Dansk: *En transient prop bruges til styling og sendes ikke videre til HTML.*

### Router

SPA обновляет экран без полной загрузки нового HTML-документа. `BrowserRouter` включает маршрутизацию, `Routes` выбирает совпадение, `Route` связывает path и element, `Link` переходит без перезагрузки, `NavLink` дополнительно знает active-state.

```text
/maal/:id → dynamic route
/maal/5   → id равен "5"
*         → wildcard route для NotFoundPage
```

`useParams()` читает route parameter. **Статус: Brugt i projektet**, `AppRouter.tsx`, `Navbar.tsx`, `GoalCard.tsx`, `GoalPage.tsx`.

Вопрос: зачем `useParams()`? Ответ: получить динамическое значение из URL. Dansk: *UseParams læser en dynamisk parameter fra URL'en.*

### Hooks

Hook начинается с `use`. Hooks вызываются только на верхнем уровне React-компонента или Custom Hook, не внутри `if`, цикла или вложенной функции. Порядок вызовов должен быть одинаковым при каждом render.

- `useState` из React хранит state;
- `useEffect` из React выполняется после render согласно dependencies;
- `useParams` — hook из React Router, а не из React.

**Статус: Brugt i projektet**, `CustomGoalDesigner.tsx`, `AppRouter.tsx`, `GoalPage.tsx`.

Вопрос: можно ли вызвать hook внутри `if`? Ответ: нет, нарушится стабильный порядок hooks. Dansk: *Nej, hooks skal kaldes i samme rækkefølge ved hvert render.*

### Outlet

`Outlet` показывает дочерний route внутри layout родительского route:

```tsx
<Route element={<Layout />}>
  <Route path="faq" element={<FaqPage />} />
</Route>

// внутри Layout
<Outlet />
```

**Статус: Skal læres senere — проект пока не использует nested routes.** Router не перестроен искусственно.

Вопрос: зачем нужен Outlet? Ответ: показать дочернюю страницу внутри общего layout. Dansk: *Outlet viser en child route inde i et fælles layout.*

### Custom Hook

Custom Hook — собственная переиспользуемая функция с hooks. Имя начинается с `use`, например `useGoalValidation`. Он извлекает общую state/effect-логику, но его основная задача — не возвращать JSX.

**Статус: Skal læres senere.** Validation пока нужна только одному `CustomGoalDesigner`, поэтому выносить её преждевременно.

Вопрос: когда создавать Custom Hook? Ответ: когда одинаковая hook-логика действительно переиспользуется или стала отдельной понятной задачей. Dansk: *Man laver en Custom Hook, når hook-logikken skal genbruges eller har et klart selvstændigt ansvar.*

## 4. Связь обязательных тем с realtime validation

| Тема | Где используется в `CustomGoalDesigner` |
| --- | --- |
| Variable | `goalText`, `backgroundColor`, `goalTextError`, `backgroundColorError` |
| Constant | `HEX_COLOR_PATTERN`, `MAX_GOAL_TEXT_LENGTH`, initial values |
| Condition | `if` в функциях получения ошибок и submit |
| Operator | `!`, `>`, `&&`, `?:`, `\|\|` |
| Data type | строки ошибок/полей и boolean из validation |
| Destructuring | пары state и setter из `useState` |
| Ternary | безопасный `previewColor` |
| Component | organism `CustomGoalDesigner` |
| Props | свойства `FormField`, `Input`, `Button` и styled-component |
| Styled-components | error, character counter, invalid input и preview styles |
| Hooks | `useState` и два `useEffect` |

Loops, Promises, Fetch и Service не используются непосредственно в realtime validation. Router, Outlet и Custom Hook также не нужны для проверки двух локальных полей.

## 5. Карта реального проекта

| Термин | Реальный файл | Реальный пример | Статус |
| --- | --- | --- | --- |
| `map()` | `src/components/organisms/GoalList/GoalList.tsx` | `goals.map(...)` | Brugt i projektet |
| `find()` | `src/pages/Goal/GoalPage.tsx` | поиск goal по ID | Brugt i projektet |
| `filter()` | `src/router/AppRouter.tsx` | удаление liked ID | Brugt i projektet |
| `useParams()` | `src/pages/Goal/GoalPage.tsx` | получение `id` | Brugt i projektet |
| `useState()` | `CustomGoalDesigner.tsx`, `AppRouter.tsx` | form state и liked IDs | Brugt i projektet |
| `useEffect()` | `CustomGoalDesigner.tsx`, `GoalPage.tsx` | validation и scroll | Brugt i projektet |
| styled-components | файлы `*.styled.ts` | `styled.div`, dynamic props, theme | Brugt i projektet |
| Router | `src/router/AppRouter.tsx` | `BrowserRouter`, `Routes`, `Route` | Brugt i projektet |
| `Link` | `src/components/molecules/GoalCard/GoalCard.styled.ts` | styled React Router Link | Brugt i projektet |
| `NavLink` | `src/components/organisms/Navbar/Navbar.tsx` | ссылки навигации | Brugt i projektet |
| `props.children` | `ContentWrapper.tsx` и `.types.ts` | `children: ReactNode` | Brugt i projektet |
| RegExp | `CustomGoalDesigner.tsx` | `HEX_COLOR_PATTERN` | Brugt i projektet |
| Fetch / Promise | реального файла нет | только учебный пример | Forklaret, men ikke implementeret |
| HTTP / API | реального файла нет | backend не подключён | Forklaret, men ikke implementeret |
| Outlet | реального файла нет | nested routes отсутствуют | Skal læres senere |
| Custom Hook | реального файла нет | переиспользования validation пока нет | Skal læres senere |

## 6. План изучения

### Уровень 1 — JavaScript foundation

Variables → constants → data types → conditions → operators → loops/iteration → destructuring → ternary.

### Уровень 2 — React foundation

Components → props → props.children → styled-components → router → hooks.

### Уровень 3 — Asynchronous JavaScript и Service

Promises → fetch → HTTP methods → request/response → endpoint → query → Bearer Token.

### Уровень 4 — React architecture

Outlet → Custom Hook → shared state → reusable logic.

Каждый уровень использует предыдущий: сначала нужно уверенно работать со значениями и условиями, затем строить React UI, после этого получать внешние данные и только потом усложнять архитектуру.

## 7. Что сейчас выучить для задания `useEffect`

В первую очередь нужно уметь своими словами объяснить:

1. Разницу между state и обычной переменной.
2. Цепочку `onChange → setter → render → useEffect → error setter → re-render`.
3. Что dependency array не вызывает render.
4. Почему текстовый effect зависит от текста и UI-состояний взаимодействия, а цветовой — от `[backgroundColor]`.
5. Как `trim()`, `length` и RegExp проверяют значения.
6. Почему `&&` показывает ошибку условно.
7. Почему preview использует fallback.
8. Как `aria-invalid` и `aria-describedby` связывают поле и ошибку.

Promises, Fetch, HTTP, Bearer Token, Outlet и Custom Hook не относятся напрямую к этому заданию. Их нужно понимать на уровне конспекта, но добавлять в `CustomGoalDesigner` не нужно.

## 8. Checklist обязательных тем

### JavaScript

- [x] Variables
- [x] Constants
- [x] Conditions
- [x] Operators
- [x] Loops / iteration
- [x] Data types
- [x] Promises
- [x] Fetch
- [x] Destructuring
- [x] Ternary

### Service

- [x] HTTP Methods
- [x] Request
- [x] Response
- [x] Endpoint
- [x] Query
- [x] Bearer Token

### React

- [x] Component
- [x] Props
- [x] props.children
- [x] Styled-components
- [x] Router
- [x] Hooks
- [x] Outlet
- [x] Custom Hook
