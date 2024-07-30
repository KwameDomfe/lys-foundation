import { Outlet } from "react-router-dom"

export default function CareersLayout() {
  return (
    <div id="careers"
      className="min-vh-75 ph1-00"
    >
        <h2>Careers</h2>
        <p>
          Evidence of exceptional abilities...
        </p>

        <Outlet />
    </div>
  )
}
