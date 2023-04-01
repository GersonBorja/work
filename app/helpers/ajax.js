export  function ajax(props) {
  let {url, cbcallback} = props
   fetch(url)
  .then(res => res.ok ? res.json() : res.Promise.reject(res))
  .then(res => cbcallback(res))
}