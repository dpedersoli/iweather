import { api } from "./api"
import { getCityByNameService } from './getCityByNameService'

describe("API: getCityByNameService", () => {
  it("should return city details", async () => {
    const data = {
      id: '1',
      name: 'São Paulo',
      sys: {
        country: 'BR',
      },
      coord: {
        lat: 123,
        lon: 456
      }
    }

    jest.spyOn(api, "get").mockResolvedValue({ data }) // "spyOn" eu faço o "mock" para lidar com o comportamento da API; no primeiro param eu passo a API e no segundo eu escolho o método a ser mockado, que no caso é o "get"; e dentro do "mockResolvedValue()" eu passo o valor que eu tenho de expectativa para retorno -> O IDEAL É SEMPRE SEGUIR O MESMO PADRÃO DE RETORNO (type) DA API
    const response = await getCityByNameService("São Paulo") // o método "getCityByNameService" me retorna uma "promisse", por isso passo o "async-await" na função

    expect(response.length).toBeGreaterThan(0); //expectativa de retorno maior do que "0" -> No caso como estou buscando apenas 1 cidade nesse mock de requisição, terei somente 1 retorno mesmo, então será maior do que 0. Porém, se eu colocar que a expectativa é >1 ('toBeGreaterThan(1)') então nesse caso ele irá falhar
  })
})