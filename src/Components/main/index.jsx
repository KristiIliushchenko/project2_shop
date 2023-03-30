import { productsFetch } from "../../api/products"
import { useEffect, useState } from "react"
import { TOKEN } from "../../utils/constants"
import "./main.css"
import { GoodItem } from "../../api/GoodItem"
//import { GoodsList } from "../../api/GoodsList"

export const Products = () => {

  const [goods, setGoods] = useState({ total: 0, products: [] })

  useEffect(() => {
    const fetchData = async () => {
      const res = await productsFetch(TOKEN)
      const responce = await res.json()
      if (res.ok) {
        setGoods(responce)
        console.log(responce)
      }
      else throw Error(res.statusText)
    }

    fetchData()
  }, [])


  return (
    <div className="goods_cards">
          {goods.products.map((good) => {
            return <GoodItem key={good._id} good={good} />
          })}
        </div>
  )
}