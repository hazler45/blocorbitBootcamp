
import Nava from "./component/nava"
import NewNav from "./NewNav"


export default function Home() {
  return (
    <div>
    <Nava />
    <NewNav/>
    <h1 className="text-3xl font-bold underline">
      Hello world!
    </h1>
    </div>
    
  )
}