import React, { useEffect, memo } from 'react';
import type { FC, PropsWithChildren } from 'react';

const HomePage: FC<PropsWithChildren<{
  homeNum?: number,
  getNum?: () => void
}>> = memo(({ homeNum, getNum }) => {

  console.log(">>>>>home page reload")

  return (
    <div>
      <title>HomePage</title>
      <div>num:{homeNum}</div>
      <button>homepage Click</button>
    </div>
  )
})

export default HomePage;