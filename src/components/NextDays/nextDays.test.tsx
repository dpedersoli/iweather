import { render, screen } from "@testing-library/react-native"

import { NextDays } from "@components/NextDays"

import clearDay from '@assets/clear_day.svg'

describe("Component: Nextdays" , () => {
  it("should be render day.", () => {
    render(
      <NextDays
        data={[
          { day: "18/07", min: "30°C", max: "34°C", icon: clearDay, weather: "Céu limpo" },
          { day: "19/07", min: "20°C", max: "31°C", icon: clearDay, weather: "Nublado" },
          { day: "20/07", min: "25°C", max: "30°C", icon: clearDay, weather: "Céu limpo" },
          { day: "21/07", min: "27°C", max: "29°C", icon: clearDay, weather: "Céu limpo" },
          { day: "22/07", min: "28°C", max: "39°C", icon: clearDay, weather: "Chuva fraca" },
        ]}
      />
    )

    expect(screen.getByText('21/07')).toBeTruthy()
  })
})