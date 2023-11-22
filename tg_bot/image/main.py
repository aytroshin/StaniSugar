from aiogram import Bot, Dispatcher, executor, types
from aiogram.types.web_app_info import WebAppInfo
from conf import TOKEN
import asyncio

bot = Bot(TOKEN)
dp = Dispatcher(bot)


@dp.message_handler(commands = ['start'])
async def start (message: types.Message):
    markup= types.ReplyKeyboardMarkup(resize_keyboard=True, one_time_keyboard=True)
    markup.add(types.KeyboardButton('Запустить', web_app = WebAppInfo(url='https://stanisugar.github.io/StaniSugar/tg_bot/index.html'), one_time_keyboard=True))
    await message.answer('Привет! Я помошник технолога. Нажми на кнопку чтобы начать расчет.', reply_markup=markup)



@dp.message_handler(content_types=['web_app_data'])
async def input (message: types.Message):
    await message.answer(message.web_app_data.data)

executor.start_polling(dp)