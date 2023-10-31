import BaseComponent from '@/core/BaseComponent'
import BidService from '@/services/BidService'

import '@/components/ModalComponent/main-modal.scss'

const { addBid } = BidService

export default class ModalComponent extends BaseComponent {
  constructor() {
    super()

    this._init()
  }

  get _template() {
    return `
      <div class="main-modal">
        <div class="main-modal__wrap" data-el="overlay">
          <div class="main-modal__content">
            <h2 class="main-modal__title">
              Заявка на бронирование
              <b>Квартира 96 в Первом квартале Дом 5</b>
            </h2>
            <p class="main-modal__art">ГЕН-112-42</p>

            <form class="main-modal__form" data-el="form">
              <p class="main-modal__field">
                <label for="name" class="main-modal__label">Имя</label>
                <input id="name" class="main-modal__input" type="text" name="name" placeholder="Введите имя" autocomplete="off" required>
              </p>
              <p class="main-modal__field">
                <label for="phone" class="main-modal__label">Телефон</label>
                <input id="phone" class="main-modal__input" type="tel" name="phone" placeholder="+7 (XXX) XXX-XX-XX" autocomplete="off" required>
              </p>
              <p class="main-modal__field main-modal__field--agree">
                <input id="agree" class="main-modal__checkbox" type="checkbox" name="agree" checked required>
                <label for="agree" class="main-modal__label">Я согласен на обработку моих персональных данных. С Политикой в отношении обработки персональных данных ознакомлен и согласен.</label>
              </p>
              <p class="main-modal__field main-modal__field--message" data-el="message"></p>

              <button class="main-modal__button" type="submit" data-el="submit">Отправить заявку</button>
            </form>

            <button class="main-modal__close" type="button" data-el="close">Закрыть</button>
          </div>
        </div>
      </div>
    `
  }

  _initListeners() {
    this._elements.close.addEventListener('click', () => {
      this.destroy()
    })

    this._elements.overlay.addEventListener('click', evt => {
      if (evt.target.closest('.main-modal__content')) {
        return
      }

      this.destroy()
    })

    this._elements.submit.addEventListener('click', async evt => {
      evt.preventDefault()

      const formData = new FormData(this._elements.form)
      const [name, phone, agree] = [
        formData.get('name'),
        formData.get('phone'),
        formData.get('agree'),
      ]

      if (!agree) {
        this._elements.message.innerHTML = 'Нужно согласиться на условия!'

        return
      }

      const res = await addBid(JSON.stringify({ name, phone }))

      this._elements.message.innerHTML = ''
      if (res.errors) {
        this._elements.message.innerHTML = res.errors.reduce(
          (acc, item) => (acc += `${item}<br>`),
          '',
        )

        return
      }

      this._elements.form.innerHTML = 'Сообщение отправлено!'
      this._elements.form.style.color = 'green'
    })
  }
}
