
import { ListCard } from "./ListCard";
export const List = ({listElements, removeElement}) => {
    
    return (
        <div className="container withoutBorder">
        <h2 className="title two">Financial summary</h2>
        {listElements.length > 0 ? (
        <ul>
        {listElements.map((element) => {
        const { description, number, category, id } = element;
        const newNumber = parseInt(number)
        const convertToDollars = newNumber.toLocaleString("en-US", {style: "currency", currency: "USD"});
        return (
          <ListCard key={id} title={description} choose={category} id={id} balance={convertToDollars} removeElement={removeElement}  />
          );
        })
        }
        </ul>
        ) : 
        <p className="paragraph list">You don't have any releases yet</p>
        }
        </div>
        );
}