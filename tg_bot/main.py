# from aiogram import Bot, Dispatcher, executor, types
# from aiogram.types.web_app_info import WebAppInfo
# from conf import TOKEN
# import aiogram

# bot = Bot(TOKEN)
# dp = Dispatcher(bot)

# async def on_startup(dispatcher: aiogram.Dispatcher) -> None:
#     await bot.set_my_commands([
#         aiogram.types.BotCommand("start",
#                                  'Привет! Я помошник технолога. '
#                                  'Чтобы начать нажми start')])



# @dp.message_handler(commands = ['start'])
# async def start (message: types.Message):
#     markup= types.ReplyKeyboardMarkup(resize_keyboard=True, one_time_keyboard=True)
#     markup.add(types.KeyboardButton('Запустить', web_app = WebAppInfo(url='https://stanisugar.github.io/StaniSugar/tg_bot/index.html'), one_time_keyboard=True))
#     await message.answer('Нажми запустить и дождись завершения'
#                          , reply_markup=markup)
#     await message.delete()


# @dp.message_handler(content_types=['web_app_data'])
# async def input (message: types.Message):
#     await message.answer(message.web_app_data.data)

# executor.start_polling(dp, skip_updates=True,
#                        on_startup=on_startup)
