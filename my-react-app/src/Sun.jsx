import UserContext from "./context.js";
import Recieve from "./recieve.jsx"

function Variant()
{
    return (
        <UserContext.Provider value="Navya">
            <Recieve></Recieve>
        </UserContext.Provider>
    );
}
export default Variant;