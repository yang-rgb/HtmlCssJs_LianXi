// const plusReady = (fn) =>{
// if(window.plus) {
// setTimeout(fn, 0)
// } else {
// document.addEventListener("plusready", fn, false)
// }
// }
// export default plusReady

const plusReady = (fn) =>{
fn();
}

export default plusReady