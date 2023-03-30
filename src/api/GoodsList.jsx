import { Products } from "../Components/main"
import { GoodItem } from "./GoodItem"

export const GoodsList = ({goods}) =>{
    return (
        <div className="goods_cards">
          {goods.map((good) => {
            return (<GoodItem key={good._id} good={good} />)
          })}
        </div>
      )
}
