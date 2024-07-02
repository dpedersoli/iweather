import { useCity } from "@hooks/useCity"
import { act, renderHook, waitFor } from "@testing-library/react-native"
import { CityProvider } from "./CityContext"

describe("Context: CityContext", () => {
  it("should be change selected city", async () => {
    const { result } = renderHook(() => useCity(), { wrapper: CityProvider}) //aqui, dentro de "renderHook" então e consigo como segundo parâmetro, após o chamamento da função passar um "provider", que vai me trazer informações contidas no "context" da aplicação, que no caso vem do "CityProvider"; eu passo o context no valor de "wrapper", que é o que "percorre" (rondeia; vai por volta) da aplicação
    
    await waitFor(() => act(() => result.current.handleChanceCity({
      id: '1',
      name: 'São Paulo',
      longitude: 123,
      latitude: 456
    }))) //"waitFor" é uma função assíncrona; que nesse caso ele diz que ele "esperará por", e então dentro dele eu passo o que ele esperará acontecer, que no caso é uma "act" ("action"/ação); Dessa forma então, eu primeiro aguardo essa função acontecer para depois ele finalizar o teste

    expect(result.current.city?.name).toBe('São Paulo') //aqui eu verifico se o o valor atual do que está sendo manipulado em "handleChanceCity", no valor de "city.name" é "São Paulo"
  })
})