import classes from './Error.css'
import {ROOT_INDEX} from '../../const/root'

class Error {
  render() {
    const htmlWrapper = `
    <div class="${classes.error__container}">
    <span>
        <p class="${classes.error__alert}">Произошла ошибка.</p>
        <p class="${classes.error__alert}">Попробуйте зайти позже</p>
    </span>
</div>
    `;

    ROOT_INDEX.innerHTML = htmlWrapper;
  }
}

export default new Error();