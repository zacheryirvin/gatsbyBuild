import React, { useState } from "react"
import { css } from "@emotion/core"

export const Wave = () => {
  const [waves, setWaves] = useState(0)
  const label = `Waves: ${waves} ${waves === 1 ? "wave" : "waves"}`

  return (
    <button
      css={css`
        background: red;
        border: 1px solid black;
      `}
      onClick={() => setWaves(waves + 1)}
    >
      {" "}
      {label}{" "}
    </button>
  )
}
