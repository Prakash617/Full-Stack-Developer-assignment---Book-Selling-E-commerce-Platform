import React from 'react'
import { Audio, Bars } from 'react-loader-spinner'

const Loading = () => {
  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh', width:"100wh" }} >
      <div>
        <Bars
          height="80"
          width="80"
          color="#C8B170"
          ariaLabel="bars-loading"
          wrapperStyle={{}}
          wrapperClass=""
          visible={true}
        />
      </div>
    </div>
  )
}

export default Loading