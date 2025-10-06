# ⚡ Быстрая настройка - 3 минуты

## 🎯 Что нужно сделать прямо сейчас:

### 1️⃣ Получить OAuth токен (2 минуты)

**Откройте:** https://oauth.yandex.ru/client/new

1. Название: `NetConnect Sitemap`
2. Платформа: **Веб-сервисы**
3. Callback: `https://mosoblconnect.ru`
4. Права: отметьте **Яндекс.Вебмастер** → `webmaster:importanturl`
5. Нажмите **"Создать"**

**Получите токен:**
- Скопируйте **Client ID** 
- Откройте (замените YOUR_CLIENT_ID):
  ```
  https://oauth.yandex.ru/authorize?response_type=token&client_id=YOUR_CLIENT_ID
  ```
- Скопируйте токен из URL после `#access_token=`

---

### 2️⃣ Найти User ID (30 секунд)

1. Откройте: https://webmaster.yandex.ru/
2. Посмотрите URL:
   ```
   ...user_id=123456789
   ```
3. Скопируйте цифры

---

### 3️⃣ Добавить в проект (30 секунд)

В редакторе **poehali.dev** добавьте 2 секрета:

1. **YANDEX_WEBMASTER_API_KEY** = токен из шага 1
2. **YANDEX_WEBMASTER_USER_ID** = цифры из шага 2

---

## ✅ Готово! Как использовать:

Откройте: **https://mosoblconnect.ru/?admin=true**

Справа внизу появится кнопка → Нажмите **"Отправить"** → Готово! 🚀

---

## 📖 Подробная инструкция:
→ См. файл `SITEMAP-AUTO-SUBMIT-GUIDE.md`
