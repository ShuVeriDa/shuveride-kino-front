import {Meta} from "@/utils/meta/Meta";
import {Heading} from "@/ui/heading/Heading";

const Error500 = () => {
  return (
    <Meta title={"Page not found"} >
      <Heading title={"500 - Server-side error occurred"} />
    </Meta>
  )
}

export default Error500