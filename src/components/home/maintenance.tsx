import React from "react"

export const Maintenance = () => {
  return (
    <div style={{ textAlign: "center", margin: "auto", marginTop: "80px" }}>
      <img
        height={300}
        width={300}
        src="../../../public/icon/under-construction-sign.jpg"
      />
      <div style={{ fontFamily: "Arial", fontSize: "32px" }}>
        This parrot is sour.
      </div>
      <br />
      <div style={{ fontFamily: "Arial", fontSize: "22px" }}>
        But we are recycling and will be back shortly.
      </div>
      <br />
      <br />
      <div style={{ fontFamily: "Arial", fontSize: "16px" }}>
        We&lsquo;re busy updating the site for you. There is a surprise coming
        soon!
      </div>
    </div>
  )
}
