# Event Registration Form

Готов standalone-вариант в одном файле: [index.html](C:/Users/Богдан/Desktop/static_form/index.html).

## Что важно

- это обычный статический файл
- `localhost` не нужен
- можно открыть двойным кликом
- форма отправляет данные напрямую в ваш Google Form через `formResponse`
- проект готов к деплою через GitHub Pages

## Запуск

Откройте [index.html](C:/Users/Богдан/Desktop/static_form/index.html) в браузере.

## GitHub Pages

В проект добавлен workflow для автодеплоя через GitHub Pages:

- файл: `.github/workflows/deploy-gh-pages.yml`
- деплой запускается автоматически при push в `main`

Чтобы включить Pages в репозитории:

1. Откройте `Settings -> Pages`
2. В `Source` выберите `Deploy from a branch`
3. Выберите ветку `gh-pages` и папку `/ (root)`
4. После следующего push сайт будет опубликован автоматически
