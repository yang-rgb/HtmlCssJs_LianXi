import request from "./navblock.js"

export function getMultiData(){
  return request({
    url:'/photos'
  })
}


