const reviewsArr = [
  {
    reviewId: 1,
    reviewText: 'Легкий, удобно складывать и переносить. Заявленную скорость 30км/ч держит. Зарядки хватает на 19~20км. Время зарядки около 4-5 часов',
    reviewImg: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSRd5xuC8JwY1DgbONmVlTqCg_-o4JdMtWboA&s',
    reviewDate: '23 сентября 2020',
    reviewPersonName: 'Viktor Mikhailov',
    reviewPersonImg: "https://img.freepik.com/premium-vector/male-face-avatar-icon-set-flat-design-social-media-profiles_1281173-3806.jpg?semt=ais_items_boosted&w=740",
    reting: 4
  },
  {
    reviewId: 2,
    reviewText: 'Изящный, относительно лёгкий, в тоже время мощный и быстрый. С лёгкостью складывается и раскладывается.Удобный руль, не скользящий.Цена приятная, получила дополнительную скидку.',
    reviewImg: 'https://optim.tildacdn.com/tild3132-6632-4462-b461-376131383631/-/format/webp/photo_2021-04-14_205.jpeg.webp',
    reviewDate: '23 сентября 2020',
    reviewPersonName: 'Yegor Kuzmin',
    reviewPersonImg: "https://img.freepik.com/premium-vector/male-face-avatar-icon-set-flat-design-social-media-profiles_1281173-3806.jpg?semt=ais_items_boosted&w=740",
    reting: 5
  },
  {
    reviewId: 3,
    reviewText: "Легкий. Это конечно достоинство, но на большой скорости его начинает пошатывать, поэтому страшнее, чем на тех тяжёлых, что в аренду сдаются.",
    reviewImg: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQTSRNGKvsjQb3NCV_YW9dRGPu9nKO0JeFFhA&s',
    reviewDate: '23 сентября 2020',
    reviewPersonName: 'Agrippa Kulikova',
    reviewPersonImg: "https://img.freepik.com/premium-vector/male-face-avatar-icon-set-flat-design-social-media-profiles_1281173-3806.jpg?semt=ais_items_boosted&w=740",
    reting: 4
  },
  {
    reviewId: 4,
    reviewText: 'чуть колеса бы побольше, и подлиньше площадку. шкала заряда батареи неточная, показывает что уже нет заряда, а я после этого ещё 10 км проезжаю.',
    reviewImg: 'https://optim.tildacdn.com/tild3534-3661-4163-b532-346134623865/-/format/webp/photo_2021-04-07_223.jpeg.webp',
    reviewDate: '23 сентября 2020',
    reviewPersonName: 'Stanislav Osipov',
    reviewPersonImg: "https://img.freepik.com/premium-vector/male-face-avatar-icon-set-flat-design-social-media-profiles_1281173-3806.jpg?semt=ais_items_boosted&w=740",
    reting: 3
  },
  {
    reviewId: 5,
    reviewText: "Недорогой. Бюджетный вариант.",
    reviewImg: 'https://optim.tildacdn.com/tild3364-3566-4030-a366-393463623634/-/format/webp/photo_2021-04-07_223.jpeg.webp',
    reviewDate: '23 сентября 2020',
    reviewPersonName: 'Stepan Zhukov',
    reviewPersonImg: "https://img.freepik.com/premium-vector/male-face-avatar-icon-set-flat-design-social-media-profiles_1281173-3806.jpg?semt=ais_items_boosted&w=740",
    reting: 5
  },
  {
    reviewId: 6,
    reviewText: 'К ручке газа и тормоза быстро привык, и теперь плавно стартую, а при торможении чуть приседаю и отклоняюсь назад в общем очень доволен самокатом.',
    reviewImg: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSKxjXVzaMG_ev0IEcaoiE4q14mV_SIrpdIhQ&s',
    reviewDate: '23 сентября 2020',
    reviewPersonName: 'Efrosinia Kozlova',
    reviewPersonImg: "https://img.freepik.com/premium-vector/male-face-avatar-icon-set-flat-design-social-media-profiles_1281173-3806.jpg?semt=ais_items_boosted&w=740",
    reting: 4
  },
  {
    reviewId: 7,
    reviewText: 'Мне кажется ну он не проезжает 30км, за зарядку. Ну максимум 20, а то и меньше. Сегодня руль начал, косить резко, думал упаду. Нужно подтянуть я так понял, ну если бы на скорости, можно и вылететь.',
    reviewImg: 'https://optim.tildacdn.com/tild6564-6364-4364-a664-663865333833/-/format/webp/photo_2021-04-07_223.jpeg.webp',
    reviewDate: '23 сентября 2020',
    reviewPersonName: 'Borislava Vasilieva',
    reviewPersonImg: "https://img.freepik.com/premium-vector/male-face-avatar-icon-set-flat-design-social-media-profiles_1281173-3806.jpg?semt=ais_items_boosted&w=740",
    reting: 5
  },
  {
    reviewId: 8,
    reviewText: 'Неплохо, но только для начала. Из плюсов это конечно удобный дисплей, видно все необходимые параметры. По факту достаточно скорости и уровня заряда. Но сперва казалось что надо все😄',
    reviewImg: 'https://optim.tildacdn.com/tild3435-6466-4664-b630-356232373138/-/format/webp/photo_2021-04-07_223.jpeg.webp',
    reviewDate: '23 сентября 2020',
    reviewPersonName: 'Mariya Vlasova',
    reviewPersonImg: "https://img.freepik.com/premium-vector/male-face-avatar-icon-set-flat-design-social-media-profiles_1281173-3806.jpg?semt=ais_items_boosted&w=740",
    reting: 3
  },
  {
    reviewId: 9,
    reviewText: 'Хлюпковатая система, если бы был тест драйв, врятли бы на нем остановилась. Модель для детей и девушек больше. Или не крупных парней. Да и мне с моим весом 60кг хочется что то поустойчивее, помощнее.',
    reviewImg: 'https://optim.tildacdn.com/tild6330-3537-4032-b166-613735326236/-/format/webp/photo_2021-04-07_223.jpeg.webp',
    reviewDate: '23 сентября 2020',
    reviewPersonName: 'Vasya Petrov',
    reviewPersonImg: "https://img.freepik.com/premium-vector/male-face-avatar-icon-set-flat-design-social-media-profiles_1281173-3806.jpg?semt=ais_items_boosted&w=740",
    reting: 5
  },
  {
    reviewId: 10,
    reviewText: 'В целом покупкой довольна, шустро носит меня по ближайшим магазинам, а так же просто для развлечения. К покупке скорей рекомендую чем нет.',
    reviewImg: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRzzPQIeEJq1GE7LFXu3OjPjulvcP7S6pwnLg&s',
    reviewDate: '23 сентября 2020',
    reviewPersonName: 'Yevgeniy Sokolo',
    reviewPersonImg: "https://img.freepik.com/premium-vector/male-face-avatar-icon-set-flat-design-social-media-profiles_1281173-3806.jpg?semt=ais_items_boosted&w=740",
    reting: 5
  },

];

export default reviewsArr;