import { API_URL, URL_COMICS } from '../../const/api'
import { getDataApi } from '../../utils/getDataApi'
import './App.css'

class App {
  async render() {
    const data = await getDataApi.getData(API_URL + URL_COMICS);
    console.log('Result:', data)
  }
}

export default new App();