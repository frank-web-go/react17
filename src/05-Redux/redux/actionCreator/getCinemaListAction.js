import axios from "axios"
function getCinemaListAction() {
    return (dispatch) => {
        axios
            .get(
                "https://m.maizuo.com/gateway?cityId=110100&ticketFlag=1&k=2104801",
                {
                    headers: {
                        "X-Client-Info":
                            '{"a":"3000","ch":"1002","v":"5.2.1","e":"1698155001728684151439361","bc":"110100"}',
                        "X-Host": "mall.film-ticket.cinema.list",
                    },
                }
            )
            .then((res) => {
                console.log(res.data.data.cinemas)
                dispatch({
                    type: 'change-list',
                    payload: res.data.data.cinemas
                })
            })
    }
}

export default getCinemaListAction

// function test(){
//     setTimeout(()=>{
//         return 1000
//     },2000)
// }

// test()  return的就是undefined,test会立即执行里面的东西，setTimeout中的return是自己的返回