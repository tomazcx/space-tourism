import { Header } from "./components/Header"
import { Router } from "./Router"

export const App = () => {
  return (
    <div className="flex flex-col justify-between items-center">
      <Header />
      <Router />
    </div>

  )
}